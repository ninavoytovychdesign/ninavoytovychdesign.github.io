(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  var btn = document.querySelector('.nav-menu-btn'), sheet = document.querySelector('.nav-sheet');
  if (btn && sheet){
    var uk = document.documentElement.lang === 'uk';
    var setOpen = function(o){ sheet.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); btn.textContent = o ? (uk ? 'Закрити' : 'Close') : (uk ? 'Меню' : 'Menu'); };
    btn.addEventListener('click', function(){ setOpen(!sheet.classList.contains('open')); });
    sheet.addEventListener('click', function(e){ if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && sheet.classList.contains('open')){ setOpen(false); btn.focus(); } });
  }

  /* Home: nav state follows the section in view. Sections without a nav item clear it. */
  var navLinks = document.querySelectorAll('[data-nav]');
  var spy = document.querySelectorAll('[data-spy]');
  if (navLinks.length && spy.length && 'IntersectionObserver' in window){
    var io = new IntersectionObserver(function(ents){
      ents.forEach(function(en){
        if (!en.isIntersecting) return;
        var key = en.target.dataset.spy;
        navLinks.forEach(function(a){ if (a.dataset.nav === key) a.setAttribute('aria-current','true'); else a.removeAttribute('aria-current'); });
      });
    }, { rootMargin:'-45% 0px -50% 0px' });
    spy.forEach(function(s){ io.observe(s); });
  }

  /* Reveal */
  var rv = document.querySelectorAll('.reveal');
  if (rv.length && 'IntersectionObserver' in window && !reduce){
    var ro = new IntersectionObserver(function(ents){ ents.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); ro.unobserve(en.target); } }); }, { rootMargin:'0px 0px -10% 0px' });
    rv.forEach(function(el){ ro.observe(el); });
  } else rv.forEach(function(el){ el.classList.add('in'); });

  /* ── Radar ─────────────────────────────────────────
     Rings = years (2024 inside → 2026 outside), sectors = domains. ■ = selected project, shown in the card.
     A slow sweep passes every 40s; the node it crosses is marked and the card switches to it.
     Hover or focus selects a node: the others dim, its domain lights up and the card shows it. Click opens the case. */
  var radar = document.querySelector('.radar');
  if (radar){
    var nodes = Array.prototype.slice.call(radar.querySelectorAll('.radar-node'));
    var domains = radar.querySelectorAll('.radar-domain');
    var card = document.querySelector('.hero-card');
    var sweep = radar.querySelector('.sweep');
    var held = false, paused = false, inView = true;

    radar.querySelectorAll('.ring').forEach(function(r){ r.style.setProperty('--len', Math.ceil(r.getTotalLength ? r.getTotalLength() : 2000)); });
    if (!reduce){ radar.classList.add('anim'); setTimeout(function(){ radar.classList.remove('anim'); }, 2600); }

    function setCard(n){
      if (!card || card.dataset.key === n.dataset.key) return;
      card.dataset.key = n.dataset.key;
      var d = n.dataset;
      var apply = function(){
        card.href = n.getAttribute('href');
        card.querySelector('.meta').textContent = d.meta;
        card.querySelector('.title').textContent = d.name;
        card.querySelector('.body').textContent = d.body;
        var media = card.querySelector('.media');
        if (d.cover){
          media.innerHTML = '<img src="' + d.cover + '" alt="" width="1320" height="824">';
          media.style.background = d.light ? 'var(--cover-light)' : 'var(--cover-dark)';
        } else {
          media.innerHTML = document.getElementById(d.tpl || 'nda-card-tpl').innerHTML;
          media.style.background = '';
        }
        card.classList.remove('fading');
      };
      if (reduce){ apply(); return; }
      card.classList.add('fading');
      setTimeout(apply, 250);
    }
    function select(n){
      nodes.forEach(function(x){ x.classList.toggle('selected', x === n); });
      var col = getComputedStyle(n).getPropertyValue('--c').trim(); if (col) radar.style.setProperty('--sc', col);
      domains.forEach(function(dm){ dm.classList.toggle('on', dm.dataset.domain === n.dataset.domain); });
      setCard(n);
    }
    nodes.forEach(function(n){
      var on = function(){ held = true; radar.classList.add('hovering'); select(n); };
      var off = function(){ held = false; radar.classList.remove('hovering'); domains.forEach(function(dm){ dm.classList.remove('on'); }); };
      n.addEventListener('mouseenter', on); n.addEventListener('focus', on);
      n.addEventListener('mouseleave', off); n.addEventListener('blur', off);
    });

    /* Domain filters under the radar: a domain lights up its projects and dims the rest; the sweep keeps going and only pings the lit ones */
    var chips = Array.prototype.slice.call(document.querySelectorAll('.radar-filters .rf'));
    chips.forEach(function(c){
      c.addEventListener('click', function(){
        var d = c.dataset.domain;
        chips.forEach(function(x){ x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        radar.dataset.filter = d;
        nodes.forEach(function(n){ n.classList.toggle('muted', !!d && n.dataset.domain !== d); });
        if (d){ var first = nodes.filter(function(n){ return n.dataset.domain === d; })[0]; if (first) select(first); }
      });
    });
    nodes.forEach(function(n){ var x = +n.dataset.x, y = +n.dataset.y; n._ang = (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360; });
    if ('IntersectionObserver' in window){ new IntersectionObserver(function(e){ inView = e[0].isIntersecting; }).observe(radar); }
    document.addEventListener('visibilitychange', function(){ paused = document.hidden; });

    /* Shock wave from the centre to a little past the outer ring; radius animated directly so the line stays 1px */
    var wave = radar.querySelector('.core-pulse');
    if (wave && !reduce){
      var WAVE = 4800;
      (function w(now){
        if (inView && !paused){
          var k = (now % WAVE) / WAVE, e = 1 - Math.pow(1 - k, 2.2);
          wave.setAttribute('r', (18 + 290 * e).toFixed(1));
          wave.style.opacity = (0.5 * (1 - k * k)).toFixed(3);
        }
        requestAnimationFrame(w);
      })(performance.now());
    }
    var cone = radar.querySelector('.sweep-cone');
    if (!reduce && sweep){
      var PERIOD = 40000, t = 0, last = performance.now(), prev = 0;
      (function tick(now){
        var dt = now - last; last = now;
        if (!held && !paused && inView) t += dt;
        var ang = (t / PERIOD * 360) % 360;
        sweep.setAttribute('transform', 'rotate(' + ang.toFixed(2) + ' 280 280)');
        if (cone) cone.style.transform = 'rotate(' + ang.toFixed(2) + 'deg)';
        if (!held) nodes.forEach(function(n){
          var crossed = prev <= ang ? (n._ang > prev && n._ang <= ang) : (n._ang > prev || n._ang <= ang);
          if (crossed && !n.classList.contains('muted')){ n.classList.remove('ping'); void n.offsetWidth; n.classList.add('ping'); setTimeout(function(){ n.classList.remove('ping'); }, 1400); select(n); }
        });
        prev = ang;
        requestAnimationFrame(tick);
      })(last);
    }
  }

  /* ── Focus tabs ───────────────────────────────────── */
  var tabs = document.querySelectorAll('.focus-tab');
  if (tabs.length){
    var pos = document.querySelector('.focus-pos');
    var sel = function(i, focus){
      tabs.forEach(function(t, k){
        var on = k === i;
        t.setAttribute('aria-selected', on); t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (pos) pos.textContent = String(i + 1).padStart(2, '0') + ' / ' + String(tabs.length).padStart(2, '0');
      document.dispatchEvent(new CustomEvent('focustab', { detail:i }));
      if (focus) tabs[i].focus();
    };
    tabs.forEach(function(t, i){
      t.addEventListener('click', function(){ sel(i); });
      t.addEventListener('mouseenter', function(){ if (window.matchMedia('(pointer:fine)').matches) sel(i); });
      t.addEventListener('keydown', function(e){
        var n = tabs.length;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight'){ e.preventDefault(); sel((i + 1) % n, true); }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft'){ e.preventDefault(); sel((i - 1 + n) % n, true); }
        if (e.key === 'Home'){ e.preventDefault(); sel(0, true); }
        if (e.key === 'End'){ e.preventDefault(); sel(n - 1, true); }
      });
    });
  }

  /* ── Case: before/after slider ────────────────────── */
  document.querySelectorAll('.case .ba').forEach(function(ba){
    var input = ba.querySelector('input[type=range]');
    var set = function(v){ v = Math.max(0, Math.min(100, v)); ba.style.setProperty('--p', v + '%'); if (input) input.value = Math.round(v); };
    var drag = false;
    var from = function(e){ var r = ba.getBoundingClientRect(); set((e.clientX - r.left) / r.width * 100); };
    ba.addEventListener('pointerdown', function(e){ drag = true; ba.setPointerCapture(e.pointerId); from(e); if (input) input.focus({ preventScroll:true }); });
    ba.addEventListener('pointermove', function(e){ if (drag) from(e); });
    ba.addEventListener('pointerup', function(){ drag = false; });
    ba.addEventListener('pointercancel', function(){ drag = false; });
    if (input){ input.style.pointerEvents = 'none'; input.addEventListener('input', function(){ set(+input.value); }); }
  });

  /* Diagram buttons jump to the decision they explain */
  document.querySelectorAll('.case [data-go]').forEach(function(b){
    b.addEventListener('click', function(){
      var t = document.getElementById(b.dataset.go); if (!t) return;
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block:'start' });
      t.setAttribute('tabindex','-1'); t.focus({ preventScroll:true });
    });
  });
})();

/* Work index filters: show products or websites; the choice lives in the URL hash */
(function(){
  var btns = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  if (!btns.length) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.work-grid > [data-type]'));
  var status = document.querySelector('[data-filter-status]');
  var uk = document.documentElement.lang === 'uk';
  function apply(f, push){
    if (!btns.some(function(b){ return b.dataset.filter === f; })) f = 'all';
    var n = 0;
    btns.forEach(function(b){ b.setAttribute('aria-pressed', b.dataset.filter === f ? 'true' : 'false'); });
    cards.forEach(function(c){ var on = f === 'all' || c.dataset.type === f; c.hidden = !on; if (on){ n++; c.classList.add('in'); } });
    if (status) status.textContent = uk ? ('Показано проєктів: ' + n) : (n + ' projects shown');
    if (push) history.replaceState(null, '', f === 'all' ? location.pathname : '#' + f);
  }
  btns.forEach(function(b){ b.addEventListener('click', function(){ apply(b.dataset.filter, true); }); });
  apply((location.hash || '').slice(1) || 'all', false);
})();

/* Local time in the header (Fano, Italy) – CET in winter, CEST in summer */
(function(){
  var ts = document.querySelectorAll('.nav-time .t'), zs = document.querySelectorAll('.nav-time .tz');
  if (!ts.length || !window.Intl) return;
  var tz = ts[0].getAttribute('data-tz') || 'Europe/Rome';
  function tick(){
    var d = new Date();
    try {
      var hm = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(d);
      var name = new Intl.DateTimeFormat('en-GB', { timeZone: tz, timeZoneName: 'short' }).formatToParts(d).filter(function(p){ return p.type === 'timeZoneName'; })[0];
      var zn = name ? name.value.replace('GMT+1', 'CET').replace('GMT+2', 'CEST') : '';
      ts.forEach(function(t){ t.textContent = hm; t.setAttribute('datetime', d.toISOString()); });
      zs.forEach(function(z){ z.textContent = zn; });
    } catch (e) { ts.forEach(function(t){ t.textContent = ''; }); }
  }
  tick(); setInterval(tick, 30000);
})();

/* Hero: the radar filters sit on the same line as the bottom of the hero card (desktop) */
(function(){
  var cell = document.querySelector('.radar-cell'), card = document.querySelector('.hero-card'), f = document.querySelector('.radar-filters');
  if (!cell || !card || !f) return;
  var mq = window.matchMedia('(min-width:1200px)');
  function align(){
    cell.style.marginTop = '';
    if (!mq.matches) return;
    var d = f.getBoundingClientRect().bottom - card.getBoundingClientRect().bottom;
    var base = parseFloat(getComputedStyle(cell).marginTop) || 0;
    cell.style.marginTop = (base - d) + 'px';
  }
  align();
  window.addEventListener('load', align);
  window.addEventListener('resize', align);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(align);
})();

/* Mobile hero: screen 1 (status → CTA) fills the viewport; radar filters as a dropdown */
(function(){
  var hero = document.querySelector('.hero'), intro = document.querySelector('.hero-intro');
  var mq = window.matchMedia('(max-width:767px)');
  function setTop(){
    if (!hero || !intro) return;
    if (!mq.matches){ hero.style.removeProperty('--intro-top'); return; }
    intro.style.minHeight = '0px';
    var top = intro.getBoundingClientRect().top - hero.getBoundingClientRect().top;
    intro.style.minHeight = '';
    hero.style.setProperty('--intro-top', Math.round(top) + 'px');
  }
  setTop(); window.addEventListener('load', setTop); window.addEventListener('resize', setTop);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTop);

  var wrap = document.querySelector('.rf-wrap'), tg = wrap && wrap.querySelector('.rf-toggle'), cur = wrap && wrap.querySelector('.rf-cur');
  if (!wrap || !tg) return;
  function close(){ wrap.classList.remove('open'); tg.setAttribute('aria-expanded', 'false'); }
  tg.addEventListener('click', function(e){ e.stopPropagation(); var o = !wrap.classList.contains('open'); wrap.classList.toggle('open', o); tg.setAttribute('aria-expanded', o ? 'true' : 'false'); });
  wrap.querySelectorAll('.rf').forEach(function(c){
    c.addEventListener('click', function(){
      var t = c.firstChild && c.firstChild.nodeType === 3 ? c.firstChild.nodeValue : c.textContent;
      if (cur) cur.textContent = t.trim();
      if (mq.matches){ close(); tg.focus(); }
    });
  });
  document.addEventListener('click', function(e){ if (!wrap.contains(e.target)) close(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && wrap.classList.contains('open')){ close(); tg.focus(); } });
})();

/* Radar year labels: keep them the same on-screen size when the radar scales */
(function(){
  var r = document.querySelector('.radar'); if (!r) return;
  function k(){ var w = r.getBoundingClientRect().width; if (w) r.style.setProperty('--k', (560 / w).toFixed(3)); }
  k(); window.addEventListener('resize', k); window.addEventListener('load', k);
  if ('ResizeObserver' in window) new ResizeObserver(k).observe(r);
})();

/* ── Focus FX: a signal runs through each scheme; chips light up as it arrives ──
   One thing moves at a time. Hover (or tap) a chip to send the signal there.
   Reduced motion: a still, fully drawn scheme. */
(function(){
  var stages = Array.prototype.slice.call(document.querySelectorAll('.fx'));
  if (!stages.length) return;
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FINE = window.matchMedia('(pointer:fine)').matches;
  var CSSV = getComputedStyle(stages[0]);
  var C = { y: (CSSV.getPropertyValue('--accent') || '#E1E635').trim(), ok:'#5BD08F', err:'#FF8F80', wait:'#EDB66C' };

  function inout(t){ return t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3) / 2; }
  function out(t){ return 1 - Math.pow(1 - t, 3); }
  function sine(t){ return -(Math.cos(Math.PI * t) - 1) / 2; }
  function Ctx(){ this.dead = false; this.timers = []; }
  Ctx.prototype.kill = function(){ this.dead = true; this.timers.forEach(clearTimeout); };
  function tween(ctx, dur, fn, e){
    e = e || inout;
    return new Promise(function(res){
      var s = performance.now();
      (function f(now){
        if (ctx.dead){ res(false); return; }
        var t = Math.min(1, (now - s) / dur); fn(e(t), t);
        if (t < 1) requestAnimationFrame(f); else res(true);
      })(s);
    });
  }
  function wait(ctx, ms){ return new Promise(function(res){ ctx.timers.push(setTimeout(function(){ res(!ctx.dead); }, ms)); }); }

  function Scene(el){
    this.el = el; this.svg = el.querySelector('svg'); this.kind = el.dataset.fx;
    this.head = el.querySelector('.hd'); this.ctx = null; this.hover = null; this.idle = null;
  }
  Scene.prototype.q = function(s){ return this.el.querySelector(s); };
  Scene.prototype.qa = function(s){ return Array.prototype.slice.call(this.el.querySelectorAll(s)); };
  Scene.prototype.w = function(id){ return this.q('.chg[data-w="' + id + '"]'); };
  Scene.prototype.n = function(id){ return this.q('[data-n="' + id + '"]'); };

  /* the signal: a bright head travels the wire, the wire fills behind it */
  Scene.prototype.travel = function(ctx, id, color, onStep){
    var p = this.w(id), hd = this.head; if (!p) return Promise.resolve(true);
    var L = p.getTotalLength(), dur = Math.min(1500, 420 + L * 6.5);
    p.classList.remove('fade', 'settle'); p.style.setProperty('--c', color); p.style.strokeDashoffset = 1; p.classList.add('live');
    hd.style.setProperty('--c', color); hd.classList.add('on');
    return tween(ctx, dur, function(k){
      p.style.strokeDashoffset = 1 - k;
      var pt = p.getPointAtLength(L * k);
      hd.setAttribute('transform', 'translate(' + pt.x.toFixed(2) + ' ' + pt.y.toFixed(2) + ')');
      if (onStep) onStep(pt, k);
    }, sine).then(function(ok){
      hd.classList.remove('on');
      setTimeout(function(){ p.classList.add('settle'); }, 120);
      return ok;
    });
  };
  /* a chip lights up in its colour with one soft ring */
  Scene.prototype.on = function(id, color, quiet){
    var g = typeof id === 'string' ? this.n(id) : id; if (!g) return;
    g.style.setProperty('--c', color); g.classList.add('on');
    var r = g.querySelector('rect'); if (!r || quiet || RM) return;
    var rp = r.cloneNode(); rp.setAttribute('class', 'rp'); rp.style.setProperty('--c', color); g.appendChild(rp);
    var a = rp.animate([{ transform:'scale(1)', opacity:.7 }, { transform:'scale(1.22,1.5)', opacity:0 }], { duration:700, easing:'cubic-bezier(.22,1,.36,1)' });
    a.onfinish = function(){ rp.remove(); };
  };
  Scene.prototype.decay = function(){
    this.qa('.chg').forEach(function(p){ if (p.style.strokeDashoffset !== '' && p.style.strokeDashoffset !== '1') p.classList.add('fade'); });
    this.qa('.nd.on, .tip.on').forEach(function(g){ g.classList.remove('on'); });
    this.qa('.ring.live, .ring-ok.live, .ok.live').forEach(function(p){ p.classList.remove('live'); });
    this.qa('.nd.dim').forEach(function(g){ g.classList.remove('dim'); });
  };
  Scene.prototype.reset = function(){
    this.qa('.chg').forEach(function(p){ p.classList.remove('fade', 'settle', 'live'); p.style.strokeDashoffset = 1; });
    this.qa('.ring, .ring-ok, .ok').forEach(function(p){ p.classList.remove('live'); p.style.strokeDashoffset = 1; });
  };

  /* ── Numa: one “+” reaches every corner of the structure ── */
  Scene.prototype.arch = async function(ctx, only){
    var s = this, y = C.y, tabs = only == null ? [0, 1, 2] : [only];
    s.reset();
    if (only != null) [0, 1, 2].forEach(function(i){ if (i !== only){ s.n('t' + i).classList.add('dim'); s.n('c' + i + '0').classList.add('dim'); s.n('c' + i + '1').classList.add('dim'); } });
    var plus = s.n('plus');
    if (!RM) plus.animate([{ transform:'scale(1)' }, { transform:'scale(.88)' }, { transform:'scale(1)' }], { duration:420, easing:'cubic-bezier(.22,1,.36,1)' });
    s.on('plus', y, true);
    if (!await wait(ctx, 380)) return false;
    if (!await s.travel(ctx, 'plus', y)) return false;
    if (!await wait(ctx, 140)) return false;
    s.on('root', y);
    if (!await s.travel(ctx, 'trunk', y)) return false;
    var r = await Promise.all(tabs.map(function(i, k){
      return wait(ctx, 120 + k * 180).then(function(ok){ return ok && s.travel(ctx, 't' + i, y); }).then(function(ok){
        if (!ok) return false; s.on('t' + i, y);
        return Promise.all([0, 1].map(function(j){
          return wait(ctx, 200 + j * 220).then(function(ok){ return ok && s.travel(ctx, 'c' + i + j, y); }).then(function(ok){
            if (!ok) return false; s.q('.tip[data-n="c' + i + j + '"]').classList.add('on'); s.on('c' + i + j, y, true); return true;
          });
        }));
      });
    }));
    return !ctx.dead;
  };

  /* ── Lunora: Processing fills its ring; Failed and Timeout lead back ── */
  Scene.prototype.ring = function(ctx, dur){
    var ring = this.q('.ring'), ok = this.q('.ring-ok');
    ok.style.strokeDashoffset = 1; ok.classList.add('live'); ring.classList.add('live');
    return tween(ctx, dur, function(k){ ring.style.strokeDashoffset = 1 - k; }, out).then(function(done){
      if (!done) return false;
      return tween(ctx, 260, function(k){ ok.style.strokeDashoffset = 1 - k; }, out);
    });
  };
  Scene.prototype.states = async function(ctx, only){
    var s = this, col = { s:C.ok, f:C.err, t:C.wait }, routes = only ? [only] : ['s', 'f', 't'];
    for (var i = 0; i < routes.length; i++){
      var r = routes[i];
      s.reset();
      if (only) ['s', 'f', 't'].forEach(function(x){ if (x !== only) s.n(x).classList.add('dim'); });
      if (!await s.travel(ctx, 'in', C.y)) return false;
      s.on('p', C.y);
      if (!await s.ring(ctx, 1300)) return false;
      if (!await wait(ctx, 160)) return false;
      if (!await s.travel(ctx, 'o' + r, col[r])) return false;
      s.on(r, col[r]);
      if (r === 's'){
        var ok = s.q('.ok'); ok.classList.add('live'); if (!await tween(ctx, 340, function(k){ ok.style.strokeDashoffset = 1 - k; }, out)) return false;
      } else {
        if (!await wait(ctx, 420)) return false;
        s.q('.ring').style.strokeDashoffset = 1; s.q('.ring-ok').style.strokeDashoffset = 1;
        if (!await s.travel(ctx, 'l' + r, col[r])) return false;
        s.on('p', col[r]);
        if (!await wait(ctx, 160)) return false;
        s.n('p').style.setProperty('--c', C.y);
        if (!await s.ring(ctx, 900)) return false;
      }
      if (only) return true;
      if (!await wait(ctx, 1200)) return false;
      s.decay(); if (!await wait(ctx, 800)) return false;
    }
    return true;
  };

  /* ── Open Kharkiv: one token set, four modes. Tokens flip, the card re-themes behind a wipe ── */
  var MODES = [
    { bg:'#F3F3F5', line:'#D6D6DC', tx:'#08080B', sub:'#5A6B63', acc:'#1C7154', on:'#FFFFFF', k:1 },
    { bg:'#0F1F18', line:'#28423A', tx:'#E6F2EC', sub:'#9DB5AA', acc:'#5BC79A', on:'#08140F', k:1 },
    { bg:'#FFFFFF', line:'#000000', tx:'#000000', sub:'#000000', acc:'#000000', on:'#FFFFFF', k:1.3 },
    { bg:'#000000', line:'#FFFFFF', tx:'#FFFFFF', sub:'#FFFFFF', acc:'#FFFFFF', on:'#000000', k:1.6 }
  ];
  function paint(g, m){
    var cb = g.querySelector('.cb'), ct = g.querySelector('.ct'), cs = g.querySelector('.cs'), bb = g.querySelector('.bb'), bt = g.querySelector('.bt');
    var ft = 13 * m.k, fs = 10 * m.k, fb = 10 * m.k;
    cb.setAttribute('fill', m.bg); cb.setAttribute('stroke', m.line);
    ct.setAttribute('fill', m.tx); ct.setAttribute('font-size', ft.toFixed(1));
    cs.setAttribute('fill', m.sub); cs.setAttribute('font-size', fs.toFixed(1));
    var yT = 36 + 18 + ft, yS = yT + 8 + fs, yB = yS + 14, hB = 12 + fb;
    ct.setAttribute('y', yT.toFixed(1)); cs.setAttribute('y', yS.toFixed(1));
    bt.setAttribute('fill', m.on); bt.setAttribute('font-size', fb.toFixed(1));
    var w = 0; try { w = bt.getComputedTextLength(); } catch (e) {}
    if (!w) w = fb * 4.4;
    bb.setAttribute('fill', m.acc); bb.setAttribute('y', yB.toFixed(1)); bb.setAttribute('height', hB.toFixed(1)); bb.setAttribute('width', (w + 2 * 6 * m.k).toFixed(1));
    bt.setAttribute('x', (144 + 6 * m.k).toFixed(1)); bt.setAttribute('y', (yB + hB / 2 + fb * .36).toFixed(1));
  }
  Scene.prototype.setSteps = function(i){ this.qa('.bp-steps li').forEach(function(li, k){ li.classList.toggle('on', k === i); }); };
  Scene.prototype.swatches = function(m){
    var map = { bg:m.bg, surface:m.line, text:m.tx, accent:m.acc };
    this.qa('.tok').forEach(function(t){ t.querySelector('.sw').setAttribute('fill', map[t.dataset.k]); });
  };
  Scene.prototype.a11y = async function(ctx, only){
    var s = this, A = s.q('.card.ca'), B = s.q('.card.cb2'), wipe = s.q('.wipe'), edge = s.q('.wipe-edge');
    if (s.mode == null){ s.mode = 0; paint(A, MODES[0]); s.swatches(MODES[0]); s.setSteps(0); }
    var seq = only != null ? [only] : [1, 2, 3, 0];
    for (var i = 0; i < seq.length; i++){
      var next = seq[i]; if (next === s.mode){ if (only != null) return true; continue; }
      var m = MODES[next], toks = s.qa('.tok'), ys = [48, 92, 136, 180], done = [false, false, false, false];
      var map = { bg:m.bg, surface:m.line, text:m.tx, accent:m.acc };
      s.reset();
      if (!await s.travel(ctx, 'bus', C.y, function(pt){
        ys.forEach(function(yy, k){
          if (!done[k] && pt.y >= yy){ done[k] = true; var t = toks[k]; t.querySelector('.sw').setAttribute('fill', map[t.dataset.k]); s.on(t, C.y, false); t.classList.remove('on'); }
        });
      })) return false;
      if (!await s.travel(ctx, 'feed', C.y)) return false;
      paint(B, m); s.setSteps(next);
      edge.style.opacity = 1;
      if (!await tween(ctx, 1000, function(k){ var w = 224 * k; wipe.setAttribute('width', w.toFixed(1)); edge.setAttribute('x', (128 + w - .75).toFixed(1)); })) return false;
      edge.style.transition = 'opacity .4s'; edge.style.opacity = 0;
      paint(A, m); wipe.setAttribute('width', 0); s.mode = next;
      if (only != null) return true;
      if (!await wait(ctx, 1400)) return false;
      s.decay(); if (!await wait(ctx, 600)) return false;
    }
    return true;
  };

  Scene.prototype.play = async function(only){
    if (this.ctx) this.ctx.kill();
    var ctx = this.ctx = new Ctx(), s = this;
    if (only == null){
      if (!await wait(ctx, s.first ? 0 : 900)) return; s.first = true;
      while (!ctx.dead){
        var ok = await s[s.kind](ctx, null);
        if (!ok || ctx.dead) return;
        if (s.kind === 'arch'){ if (!await wait(ctx, 1300)) return; s.decay(); if (!await wait(ctx, 1000)) return; }
      }
    } else {
      s.decay(); s.reset();
      await s[s.kind](ctx, only);
    }
  };
  Scene.prototype.stop = function(){ if (this.ctx) this.ctx.kill(); this.ctx = null; this.head.classList.remove('on'); };
  Scene.prototype.still = function(){
    var s = this;
    s.qa('.chg').forEach(function(p){ p.style.strokeDashoffset = 0; p.style.setProperty('--c', C.y); p.classList.add('live'); });
    s.qa('.ring, .ring-ok, .ok').forEach(function(p){ p.style.strokeDashoffset = 0; p.classList.add('live'); });
    if (s.kind === 'a11y'){ s.mode = 0; paint(s.q('.card.ca'), MODES[0]); s.swatches(MODES[0]); s.setSteps(0); }
    if (s.kind === 'states'){ ['lf', 'lt', 'of', 'ot'].forEach(function(w){ s.w(w).style.opacity = 0; }); s.w('os').style.setProperty('--c', C.ok); s.on('s', C.ok, true); s.on('p', C.y, true); }
    if (s.kind === 'arch'){ s.qa('.tip').forEach(function(t){ t.classList.add('on'); }); }
  };

  var scenes = stages.map(function(el){ return new Scene(el); });
  function visible(s){ var p = s.el.closest('[role="tabpanel"]'); return !p || !p.hidden; }
  var inView = false;
  function sync(){
    scenes.forEach(function(s){
      if (RM) return;
      var go = inView && visible(s) && !document.hidden;
      if (go && !s.ctx && !s.hover) s.play(null);
      if (!go && s.ctx){ s.stop(); s.decay(); s.reset(); }
    });
  }
  if (RM){ scenes.forEach(function(s){ s.still(); }); return; }
  scenes.forEach(function(s){
    if (s.kind === 'a11y'){ s.mode = 0; paint(s.q('.card.ca'), MODES[0]); s.swatches(MODES[0]); s.setSteps(0); }
    s.qa('.hit').forEach(function(h){
      var key = h.dataset.hit, arg = key === 'all' ? null : (s.kind === 'states' ? key : +key);
      var go = function(){ clearTimeout(s.idle); s.hover = key; s.stop(); if (arg == null){ s.hover = null; s.play(null); } else s.play(arg); };
      var leave = function(){ if (s.hover !== key) return; s.hover = null; clearTimeout(s.idle); s.idle = setTimeout(function(){ if (!s.hover){ s.stop(); s.decay(); s.reset(); sync(); } }, 900); };
      if (FINE){ h.addEventListener('pointerenter', go); h.addEventListener('pointerleave', leave); }
      else h.addEventListener('click', function(){ go(); clearTimeout(s.idle); s.idle = setTimeout(function(){ s.hover = null; s.stop(); s.decay(); s.reset(); sync(); }, 5000); });
    });
  });
  var host = document.querySelector('.focus-card') || stages[0];
  if ('IntersectionObserver' in window) new IntersectionObserver(function(e){ inView = e[0].isIntersecting; sync(); }, { threshold:.25 }).observe(host);
  else inView = true;
  document.addEventListener('focustab', function(){ scenes.forEach(function(s){ if (!visible(s)){ s.stop(); s.decay(); s.reset(); s.first = false; } }); setTimeout(sync, 30); });
  document.addEventListener('visibilitychange', sync);
  sync();
})();

/* ── Modals: contact and testimonial. Native <dialog>, sent to Jotform in the background ── */
(function(){
  var M = window.MD_MSG || { req:'Fill this in', mail:'Check the email', ok:'Please confirm' };
  var opener = null;
  function open(id){
    var d = document.getElementById('md-' + id); if (!d || !d.showModal) return;
    opener = document.activeElement; d.showModal();
    document.documentElement.style.overflow = 'hidden';
    var f = d.querySelector('.md-body:not([hidden]) input:not([type=checkbox]):not([tabindex="-1"])'); if (f) setTimeout(function(){ f.focus(); }, 60);
  }
  function close(d){ d.close(); }
  document.querySelectorAll('[data-modal]').forEach(function(b){ b.addEventListener('click', function(e){ e.preventDefault(); open(b.dataset.modal); }); });
  document.querySelectorAll('dialog.md').forEach(function(d){
    d.addEventListener('close', function(){
      document.documentElement.style.overflow = '';
      var form = d.querySelector('form'), done = d.querySelector('.md-done');
      if (done && !done.hidden){ form.reset(); done.hidden = true; d.querySelector('.md-body').hidden = false; }
      if (opener && opener.focus) opener.focus();
    });
    d.addEventListener('click', function(e){ if (e.target === d) close(d); });
    d.querySelectorAll('[data-close]').forEach(function(x){ x.addEventListener('click', function(){ close(d); }); });
  });

  function err(field, msg){
    var w = field.closest('.md-f'), e = w && w.querySelector('.md-err');
    if (w) w.classList.toggle('bad', !!msg);
    if (e) e.textContent = msg || '';
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
  }
  function check(field){
    var v = field.type === 'checkbox' ? field.checked : field.value.trim();
    if (field.required && !v) return field.type === 'checkbox' ? M.ok : M.req;
    if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return M.mail;
    return '';
  }
  document.querySelectorAll('form[data-jf]').forEach(function(form){
    var fields = Array.prototype.slice.call(form.querySelectorAll('input[required], textarea[required], input[type=email]'));
    fields.forEach(function(f){
      f.addEventListener('blur', function(){ if (f.value || f.checked) err(f, check(f)); });
      f.addEventListener('input', function(){ if (f.closest('.md-f').classList.contains('bad')) err(f, check(f)); });
      f.addEventListener('change', function(){ if (f.type === 'checkbox') err(f, check(f)); });
    });
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var first = null;
      fields.forEach(function(f){ var m = check(f); err(f, m); if (m && !first) first = f; });
      if (first){ first.focus(); return; }
      var fail = form.querySelector('.md-fail'); fail.hidden = true;
      var done = function(){
        form.classList.remove('sending');
        form.querySelector('.md-body').hidden = true;
        var d = form.querySelector('.md-done'); d.hidden = false; d.focus();
      };
      if (form.querySelector('[name=website]').value){ done(); return; }   /* bot */
      var fd = new FormData(), id = form.dataset.jf;
      fd.append('formID', id);
      form.querySelectorAll('input, textarea').forEach(function(f){
        if (!f.name || f.name === 'website' || f.name === 't_name') return;
        if (f.type === 'checkbox'){ if (f.checked) fd.append(f.name, f.value); return; }
        fd.append(f.name, f.value.trim());
      });
      var tn = form.querySelector('[name=t_name]');
      if (tn){ var parts = tn.value.trim().split(/\s+/); fd.append('q2_fullname0[first]', parts.shift() || ''); fd.append('q2_fullname0[last]', parts.join(' ')); }
      form.classList.add('sending');
      fetch('https://submit.jotform.com/submit/' + id + '/', { method:'POST', body:fd, mode:'no-cors' })
        .then(done)
        .catch(function(){ form.classList.remove('sending'); fail.hidden = false; });
    });
  });
})();

/* Case pages: contents built from the section labels; highlights where you are */
(function(){
  var secs = Array.prototype.slice.call(document.querySelectorAll('main .case-sec[id]')).filter(function(s){ return s.querySelector(':scope > .label'); });
  if (secs.length < 4) return;
  var ua = document.documentElement.lang === 'uk';
  var nav = document.createElement('nav'); nav.className = 'case-toc'; nav.setAttribute('aria-label', ua ? 'Зміст кейсу' : 'Case contents');
  var ol = document.createElement('ol');
  var links = secs.map(function(s){
    var li = document.createElement('li'), a = document.createElement('a');
    a.href = '#' + s.id; a.textContent = s.querySelector(':scope > .label').textContent.trim();
    a.addEventListener('click', function(e){ e.preventDefault(); var y = s.getBoundingClientRect().top + scrollY - 120; window.scrollTo({ top:y, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); history.replaceState(null, '', '#' + s.id); });
    li.appendChild(a); ol.appendChild(li); return a;
  });
  nav.appendChild(ol); document.body.appendChild(nav);
  var mq = matchMedia('(min-width:1200px)');
  var end = document.querySelector('.next-row') || document.querySelector('.site-footer');
  function place(){
    var lab = secs[0].querySelector(':scope > .label').getBoundingClientRect();
    nav.style.left = Math.round(lab.left) + 'px'; nav.style.width = Math.max(120, Math.round(lab.width)) + 'px';
    document.body.classList.toggle('has-toc', mq.matches);
  }
  function tick(){
    if (!mq.matches){ nav.classList.remove('show'); return; }
    var first = secs[0].getBoundingClientRect().top, stop = end ? end.getBoundingClientRect().top : 1e9;
    nav.classList.toggle('show', first < 200 && stop > nav.offsetHeight + 180);
    var cur = 0; secs.forEach(function(s, i){ if (s.getBoundingClientRect().top < innerHeight * 0.35) cur = i; });
    links.forEach(function(a, i){ if (i === cur) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
  }
  place(); tick();
  window.addEventListener('resize', function(){ place(); tick(); });
  window.addEventListener('scroll', tick, { passive:true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
})();

/* Long testimonials: the quote fills its card to the height of the tallest neighbour, ends in «…», and «Read more» opens the rest */
(function(){
  var track = document.getElementById('t-track');
  var items = [];
  document.querySelectorAll('.t-toggle').forEach(function(b){
    var q = document.getElementById(b.getAttribute('aria-controls')); if (!q) return;
    var card = q.closest('.t-card'), ps = Array.prototype.slice.call(q.querySelectorAll('.t-body > p'));
    items.push({ b:b, q:q, card:card, ps:ps });
    b.addEventListener('click', function(){
      var open = q.classList.toggle('open');
      b.setAttribute('aria-expanded', open); b.textContent = open ? b.dataset.less : b.dataset.more;
      if (!open) fitAll();
    });
  });
  function lh(p){ return parseFloat(getComputedStyle(p).lineHeight) || 24; }
  function reset(it){ it.ps.forEach(function(p){ p.classList.remove('lc','hide'); p.style.removeProperty('--lc'); }); }
  function fit(it){
    if (it.q.classList.contains('open')) return;
    reset(it); it.b.hidden = false;
    var align = track ? track.style.alignItems : ''; if (track) track.style.alignItems = 'flex-start';
    var others = track ? Array.prototype.slice.call(track.querySelectorAll('.t-card')).filter(function(c){ return c !== it.card; }) : [];
    var H = others.reduce(function(m, c){ return Math.max(m, c.offsetHeight); }, 0);
    var body = it.q.querySelector('.t-body');
    var nonBody = it.card.offsetHeight - body.offsetHeight;
    var gap = parseFloat(getComputedStyle(body).rowGap) || 16;
    var p0 = it.ps[0], minAvail = lh(p0) * 4;
    var avail = Math.max(minAvail, H - nonBody);
    if (body.offsetHeight <= avail + 2){ it.b.hidden = true; if (track) track.style.alignItems = align; return; }
    var used = 0, cut = false;
    it.ps.forEach(function(p){
      if (cut){ p.classList.add('hide'); return; }
      var h = p.offsetHeight, l = lh(p), room = avail - used - (used ? gap : 0);
      if (h <= room){ used += (used ? gap : 0) + h; return; }
      var n = Math.floor(room / l);
      if (n < 1){ p.classList.add('hide'); }
      else { p.classList.add('lc'); p.style.setProperty('--lc', n); }
      cut = true;
    });
    if (track) track.style.alignItems = align;
  }
  function fitAll(){ items.forEach(fit); }
  fitAll(); addEventListener('resize', fitAll); if (document.fonts) document.fonts.ready.then(fitAll);
})();

/* Testimonials row: arrows scroll one card; they switch off at the ends and hide when everything fits */
(function(){
  var track = document.getElementById('t-track'), nav = document.querySelector('.t-nav'); if (!track || !nav) return;
  var prev = nav.querySelector('[data-dir="-1"]'), next = nav.querySelector('[data-dir="1"]');
  function step(){ var c = track.querySelector('.t-card'); return c ? c.getBoundingClientRect().width + 24 : track.clientWidth; }
  function update(){
    var max = track.scrollWidth - track.clientWidth - 2;
    nav.hidden = max <= 0;
    prev.disabled = track.scrollLeft <= 2; next.disabled = track.scrollLeft >= max;
  }
  nav.addEventListener('click', function(e){ var b = e.target.closest('.t-arrow'); if (!b) return; track.scrollBy({ left: step() * +b.dataset.dir }); });
  track.addEventListener('scroll', function(){ requestAnimationFrame(update); }, { passive:true });
  addEventListener('resize', update); update();
})();

/* Footer: copy the email, say what time it is in Fano, and let the name come in letter by letter and lift near the cursor */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mail = document.querySelector('.foot-mail'), live = document.querySelector('.fm-live');
  if (mail){
    var timer;
    mail.addEventListener('click', function(){
      var v = mail.dataset.copy;
      var done = function(){ mail.classList.add('done'); if (live) live.textContent = mail.dataset.copied; clearTimeout(timer); timer = setTimeout(function(){ mail.classList.remove('done'); if (live) live.textContent = ''; }, 2200); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(v).then(done, fallback); else fallback();
      function fallback(){ var ta = document.createElement('textarea'); ta.value = v; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) { location.href = 'mailto:' + v; } ta.remove(); }
    });
  }
  var now = document.querySelector('.foot-now');
  if (now && window.Intl){
    var t = now.querySelector('.fn-t'), s = now.querySelector('.fn-s');
    var tick = function(){
      try {
        var d = new Date(), parts = {};
        new Intl.DateTimeFormat('en-GB', { timeZone:'Europe/Rome', hour:'2-digit', minute:'2-digit', weekday:'short', hour12:false }).formatToParts(d).forEach(function(p){ parts[p.type] = p.value; });
        var h = +parts.hour, wk = parts.weekday !== 'Sat' && parts.weekday !== 'Sun';
        t.textContent = parts.hour + ':' + parts.minute; t.setAttribute('datetime', d.toISOString());
        s.textContent = (wk && h >= 9 && h < 19) ? now.dataset.day : now.dataset.off;
        now.hidden = false;
      } catch (e) {}
    };
    tick(); setInterval(tick, 30000);
  }
  var word = document.querySelector('.foot-word');
  if (word && !reduce){
    var txt = word.textContent; word.textContent = '';
    var letters = [], i = 0;
    txt.split(' ').forEach(function(w, wi){
      if (wi) word.appendChild(document.createTextNode(' '));
      var ws = document.createElement('span'); ws.className = 'fw';
      Array.prototype.forEach.call(w, function(ch){ var sp = document.createElement('span'); sp.className = 'fl'; sp.style.setProperty('--i', i++); sp.textContent = ch; ws.appendChild(sp); letters.push(sp); });
      word.appendChild(ws);
    });
    word.classList.add('split');
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ word.classList.add('in'); io.disconnect(); } }); }, { threshold:.35 });
      io.observe(word);
    } else word.classList.add('in');
    if (matchMedia('(pointer:fine)').matches){
      var foot = word.closest('.site-footer'), raf = 0, mx = -1e4, my = -1e4;
      var apply = function(){ raf = 0; letters.forEach(function(sp){ var r = sp.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2; var k = Math.max(0, 1 - Math.hypot(mx - cx, (my - cy) * .6) / 220); sp.style.setProperty('--lift', (-k * 24).toFixed(1) + 'px'); }); };
      foot.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; if (!raf) raf = requestAnimationFrame(apply); });
      foot.addEventListener('mouseleave', function(){ mx = my = -1e4; if (!raf) raf = requestAnimationFrame(apply); });
    }
  }
})();

/* Analytics events (GoatCounter, if it is loaded): CV downloads, «Contact me» / testimonial modals, email copy */
(function(){
  function count(path, title){ try { if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path:path, title:title, event:true }); } catch (e) {} }
  document.addEventListener('click', function(e){
    var el = e.target.closest && e.target.closest('a[href*="assets/cv/"], [data-modal], .foot-mail'); if (!el) return;
    var lang = document.documentElement.lang === 'uk' ? 'ua' : 'en';
    if (el.matches('a[href*="assets/cv/"]')) count('cv-download-' + lang, 'CV download');
    else if (el.dataset.modal) count(el.dataset.modal + '-open-' + lang, el.dataset.modal + ' form opened');
    else count('email-copy-' + lang, 'Email copied');
  }, true);
})();
