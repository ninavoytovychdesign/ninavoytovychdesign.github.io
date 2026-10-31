(function(){
  'use strict';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Mobile menu */
  var btn = document.querySelector('.nav-menu-btn'), sheet = document.querySelector('.nav-sheet');
  if (btn && sheet){
    var setOpen = function(o){ sheet.classList.toggle('open', o); btn.setAttribute('aria-expanded', o); btn.textContent = o ? 'Close' : 'Menu'; };
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
     A slow sweep passes every 18s and briefly marks the node it crosses.
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

    nodes.forEach(function(n){ var x = +n.dataset.x, y = +n.dataset.y; n._ang = (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360; });
    if ('IntersectionObserver' in window){ new IntersectionObserver(function(e){ inView = e[0].isIntersecting; }).observe(radar); }
    document.addEventListener('visibilitychange', function(){ paused = document.hidden; });

    if (!reduce && sweep){
      var PERIOD = 18000, t = 0, last = performance.now(), prev = 0;
      (function tick(now){
        var dt = now - last; last = now;
        if (!held && !paused && inView) t += dt;
        var ang = (t / PERIOD * 360) % 360;
        sweep.setAttribute('transform', 'rotate(' + ang.toFixed(2) + ' 280 280)');
        if (!held) nodes.forEach(function(n){
          var crossed = prev <= ang ? (n._ang > prev && n._ang <= ang) : (n._ang > prev || n._ang <= ang);
          if (crossed){ n.classList.add('ping'); setTimeout(function(){ n.classList.remove('ping'); }, 700); }
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
