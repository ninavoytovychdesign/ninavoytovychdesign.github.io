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
      domains.forEach(function(dm){ dm.classList.toggle('on', dm.dataset.domain === n.dataset.domain); });
      setCard(n);
    }
    nodes.forEach(function(n){
      var on = function(){ held = true; radar.classList.add('hovering'); select(n); };
      var off = function(){ held = false; radar.classList.remove('hovering'); domains.forEach(function(dm){ dm.classList.remove('on'); }); };
      n.addEventListener('mouseenter', on); n.addEventListener('focus', on);
      n.addEventListener('mouseleave', off); n.addEventListener('blur', off);
    });

    /* Domain filters under the radar: a domain lights up its projects, dims the rest and pauses the sweep */
    var chips = Array.prototype.slice.call(document.querySelectorAll('.radar-filters .rf'));
    chips.forEach(function(c){
      c.addEventListener('click', function(){
        var d = c.dataset.domain;
        chips.forEach(function(x){ x.setAttribute('aria-pressed', x === c ? 'true' : 'false'); });
        radar.dataset.filter = d;
        nodes.forEach(function(n){ n.classList.toggle('muted', !!d && n.dataset.domain !== d); });
        held = !!d;
        if (d){ var first = nodes.filter(function(n){ return n.dataset.domain === d; })[0]; if (first) select(first); }
      });
    });
    nodes.forEach(function(n){
      n.addEventListener('mouseleave', function(){ if (radar.dataset.filter) held = true; });
    });
    nodes.forEach(function(n){ var x = +n.dataset.x, y = +n.dataset.y; n._ang = (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360; });
    if ('IntersectionObserver' in window){ new IntersectionObserver(function(e){ inView = e[0].isIntersecting; }).observe(radar); }
    document.addEventListener('visibilitychange', function(){ paused = document.hidden; });

    if (!reduce && sweep){
      var PERIOD = 40000, t = 0, last = performance.now(), prev = 0;
      (function tick(now){
        var dt = now - last; last = now;
        if (!held && !paused && inView) t += dt;
        var ang = (t / PERIOD * 360) % 360;
        sweep.setAttribute('transform', 'rotate(' + ang.toFixed(2) + ' 280 280)');
        if (!held) nodes.forEach(function(n){
          var crossed = prev <= ang ? (n._ang > prev && n._ang <= ang) : (n._ang > prev || n._ang <= ang);
          if (crossed){ n.classList.add('ping'); setTimeout(function(){ n.classList.remove('ping'); }, 700); select(n); }
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
  var t = document.querySelector('.nav-time .t'), z = document.querySelector('.nav-time .tz');
  if (!t || !window.Intl) return;
  var tz = t.getAttribute('data-tz') || 'Europe/Rome';
  function tick(){
    var d = new Date();
    try {
      var hm = new Intl.DateTimeFormat('en-GB', { timeZone: tz, hour: '2-digit', minute: '2-digit', hour12: false }).format(d);
      var name = new Intl.DateTimeFormat('en-GB', { timeZone: tz, timeZoneName: 'short' }).formatToParts(d).filter(function(p){ return p.type === 'timeZoneName'; })[0];
      t.textContent = hm; t.setAttribute('datetime', d.toISOString());
      if (z) z.textContent = name ? name.value.replace('GMT+1', 'CET').replace('GMT+2', 'CEST') : '';
    } catch (e) { t.textContent = ''; }
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
