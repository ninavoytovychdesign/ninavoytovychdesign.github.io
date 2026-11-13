/* TripStone prototype: trip creation → day 1 → unlock → full trip. Autoplay + click-through. */
(() => {
  const root = document.querySelector('[data-tsp]'); if (!root) return;
  const SRC = document.currentScript && document.currentScript.src;
  const BASE = new URL(root.dataset.img || 'img/', SRC || location.href).href;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = (ms) => (RM ? 0 : ms);
  const EASE = 'cubic-bezier(.2,.8,.2,1)', EIO = 'cubic-bezier(.65,0,.35,1)';
  const stage = root.querySelector('[data-stage]'), vp = stage.parentElement, dev = root.querySelector('[data-dev]');
  const url = root.querySelector('[data-url]'), hint = root.querySelector('[data-hint]');
  const el = (tag, cls, css, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (css) e.style.cssText = css; (parent || stage).appendChild(e); return e; };
  const img = (src, parent, css) => { const i = el('img', '', css || '', parent); if (window.imgset) window.imgset(i, BASE, src, ''); i.src = BASE + src + '.webp'; i.alt = ''; i.decoding = 'async'; return i; };

  /* screens: full = one 1440×1003 picture; page = scrolling plan page with a fixed app bar, side rail and bottom bar */
  const SCR = {
    paris: { full: 'paris', url: 'tripstone.app/trips/paris-june' },
    where0: { sb: 'sb-empty', url: 'tripstone.app/trips/paris-june' },
    where: { sb: 'sb-where', url: 'tripstone.app/trips/paris-june' },
    dates: { sb: 'sb-dates', url: 'tripstone.app/trips/paris-june' },
    filled: { sb: 'sb-filled', url: 'tripstone.app/trips/paris-june' },
    gen1: { page: 'gen1', h: 1487, bar: 77, url: 'tripstone.app/trips/milan-september' },
    locked: { page: 'locked', h: 1487, bar: 77, url: 'tripstone.app/trips/milan-september' },
    gen: { page: 'gen', h: 1487, bar: 75, url: 'tripstone.app/trips/milan-september' },
    unlocked: { full: 'unlocked', url: 'tripstone.app/trips/milan-september' },
  };
  for (const [k, s] of Object.entries(SCR)) {
    if (s.sb) continue;
    const L = el('div', 'tsp-L'); L.dataset.s = k; s.L = L; s.y = 0; s.max = 0;
    if (s.full) img(s.full, L);
    else {
      s.C = el('div', '', 'left:0;top:0;width:1440px', L); img(s.page, s.C);
      s.max = s.h - (1003 - s.bar);
      img(s.page + '-top', el('div', 'tsp-cr', 'left:0;top:0;width:1440px;height:60px;overflow:hidden', L), 'left:0;top:0;width:1440px');
      img('aside', L, 'left:0;top:0;width:64px');
      const b = el('div', '', `left:0;top:${1003 - s.bar}px;width:1440px;height:${s.bar}px;overflow:hidden`, L); img(s.page + '-bar', b);
    }
  }
  /* new-trip sidebar: slides out next to the side rail, over the Paris trip */
  const sbScrim = el('div', '', 'left:64px;top:0;width:1376px;height:1003px;background:#101010;opacity:0;z-index:6', SCR.paris.L);
  const sbP = el('div', '', 'left:64px;top:0;width:592px;height:1003px;overflow:hidden;z-index:7;visibility:hidden;box-shadow:16px 0 48px rgba(0,0,0,.12)', SCR.paris.L);
  for (const [k, s] of Object.entries(SCR)) if (s.sb) { s.L = SCR.paris.L; s.img = img(s.sb, sbP, 'left:0;top:0;width:592px;opacity:0'); }
  let sbOn = false;
  const setPanel = (k, ms) => { for (const s of Object.values(SCR)) if (s.sb) { const on = s === SCR[k]; if (ms && on) A(s.img, [{ opacity: 0 }, { opacity: 1 }], ms, 'linear'); else s.img.getAnimations().forEach((q) => q.cancel()); s.img.style.opacity = on ? 1 : 0; } };
  async function panel(on) {
    sbOn = on; sbP.style.visibility = 'visible';
    A(sbScrim, on ? [{ opacity: 0 }, { opacity: 0.32 }] : [{ opacity: 0.32 }, { opacity: 0 }], on ? 300 : 240, 'linear');
    await done(A(sbP, on ? [{ transform: 'translateX(-100%)' }, { transform: 'none' }] : [{ transform: 'none' }, { transform: 'translateX(-100%)' }], on ? 420 : 300, on ? EASE : EIO));
    if (!on) sbP.style.visibility = 'hidden';
  }
  const panelOff = () => { sbOn = false; [sbP, sbScrim].forEach((n) => n.getAnimations().forEach((q) => q.cancel())); sbP.style.visibility = 'hidden'; sbScrim.style.opacity = 0; };
  // the stop's ••• menu opens on demand instead of being baked into the screen
  const MENU = { locked: [722, 797], gen: [722, 797], unlocked: [730, 798] };
  for (const [k, [mx, my]] of Object.entries(MENU)) { const s = SCR[k]; const host = s.C || s.L; const m = el('div', '', `left:${mx - 28}px;top:${my - 10}px;width:266px;opacity:0;visibility:hidden;z-index:5`, host); img('menu', m, 'left:0;top:0;width:266px'); s.menu = m; }
  let menuOn = false;
  async function menu(on) { const s = SCR[cur]; if (!s.menu) return; menuOn = on; if (on) s.menu.style.visibility = 'visible'; const a = A(s.menu, on ? [{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }] : [{ opacity: 1 }, { opacity: 0 }], on ? 180 : 140, 'ease-out'); await done(a); if (!on) s.menu.style.visibility = 'hidden'; hotspots(); }
  const scrim = el('div', 'tsp-scrim'), modal = el('div', 'tsp-modal'); img('modal', modal, 'left:0;top:0;width:520px');
  const dot = el('div', 'tsp-dot');
  const hsL = el('div', '', 'left:0;top:0;width:1440px;height:1003px;z-index:70;pointer-events:none');

  let K = 1; const fit = () => { K = vp.clientWidth / 1440; stage.style.transform = `scale(${K})`; };
  new ResizeObserver(fit).observe(vp); fit();

  let runId = 0, paused = false, seen = true, live = false, busy = false, dragged = false, cur = 'paris', modalOn = false;
  const ABORT = Symbol('abort'); const anims = new Set();
  const A = (node, kf, ms, easing, fill) => { const a = node.animate(kf, { duration: dur(ms), easing: easing || EASE, fill: fill || 'forwards' }); anims.add(a); a.finished.catch(() => {}).then(() => anims.delete(a)); if (paused || !seen) a.pause(); return a; };
  const done = (a) => a.finished.catch(() => {});
  const holdAll = (on) => anims.forEach((a) => { try { on ? a.pause() : a.play(); } catch (e) {} });
  const sleep = (ms, id) => new Promise((res, rej) => { let left = dur(ms), last = performance.now(); const f = (now) => { if (id !== undefined && id !== runId) return rej(ABORT); if (!paused && seen) left -= now - last; last = now; if (left <= 0) res(); else requestAnimationFrame(f); }; requestAnimationFrame(f); });

  const steps = [...root.querySelectorAll('.tsp-steps li')];
  const STEP = { paris: 'paris', where0: 'where', where: 'where', dates: 'dates', filled: 'filled', gen1: 'gen1', locked: 'locked', gen: 'gen', unlocked: 'unlocked' };
  const mark = () => { const k = modalOn ? 'pay' : STEP[cur]; steps.forEach((li) => li.classList.toggle('on', li.dataset.s === k)); url.textContent = SCR[cur].url; };
  const setScroll = (s, y) => { s.y = Math.max(0, Math.min(s.max, y)); if (s.C) s.C.style.transform = `translateY(${-s.y}px)`; };
  const show = (k, on) => SCR[k].L.classList.toggle('on', on);

  function reset() {
    anims.forEach((a) => { try { a.cancel(); } catch (e) {} }); anims.clear();
    for (const [k, s] of Object.entries(SCR)) { if (s.sb) continue; show(k, k === 'paris'); s.L.style.zIndex = ''; setScroll(s, 0); }
    for (const k of Object.keys(MENU)) { SCR[k].menu.getAnimations().forEach((q) => q.cancel()); SCR[k].menu.style.visibility = 'hidden'; SCR[k].menu.style.opacity = 0; } menuOn = false;
    scrim.style.opacity = 0; modal.style.visibility = 'hidden'; modal.style.opacity = 0; dot.style.opacity = 0;
    panelOff(); cur = 'paris'; modalOn = false; mark(); hotspots();
  }
  async function go(to, ms) {
    if (menuOn) { const m = SCR[cur].menu; m.style.visibility = 'hidden'; m.style.opacity = 0; menuOn = false; }
    const fromSb = !!SCR[cur].sb;
    if (SCR[to].sb) { const was = cur; cur = to; mark(); if (fromSb) setPanel(to, 160); else { setPanel(to); await panel(true); } hotspots(); return; }
    if (fromSb && to === 'paris') { cur = to; mark(); await panel(false); hotspots(); return; }
    const a = SCR[cur].L, b = SCR[to].L; if (a === b) return; setScroll(SCR[to], 0); show(to, true); b.style.zIndex = 2;
    const x = A(b, [{ opacity: 0 }, { opacity: 1 }], ms == null ? 260 : ms, 'linear');
    const from = cur; cur = to; mark(); await done(x); show(from, false); if (fromSb) panelOff(); b.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  async function openPay() {
    modalOn = true; mark(); modal.style.visibility = 'visible';
    A(scrim, [{ opacity: 0 }, { opacity: 0.62 }], 300, 'linear');
    await done(A(modal, [{ opacity: 0, transform: 'translateY(16px) scale(.98)' }, { opacity: 1, transform: 'none' }], 360));
    hotspots();
  }
  async function closePay(to) {
    modalOn = false;
    A(scrim, [{ opacity: 0.62 }, { opacity: 0 }], 300, 'linear');
    const x = A(modal, [{ opacity: 1 }, { opacity: 0, transform: 'scale(.98)' }], 240);
    if (to) await go(to, 200);
    await done(x); modal.style.visibility = 'hidden'; mark(); hotspots();
  }
  async function scrollAnim(s, to, ms) {
    const from = s.y, t0 = performance.now(), T = dur(ms);
    await new Promise((res) => { const f = (now) => { if (paused || !seen) { requestAnimationFrame(f); return; } const p = T ? Math.min(1, (now - t0) / T) : 1, e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; setScroll(s, from + (to - from) * e); if (p < 1) requestAnimationFrame(f); else res(); }; requestAnimationFrame(f); });
  }
  async function tap(x, y) {
    dot.style.left = x + 'px'; dot.style.top = y + 'px';
    await done(A(dot, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(.9)', offset: 0.35 }, { opacity: 1, transform: 'scale(1)', offset: 0.6 }, { opacity: 0, transform: 'scale(1.15)' }], 520, 'ease-out', 'none'));
  }

  /* hotspots: x, y, w, h, label, action */
  const HS = {
    paris: [[12, 68, 40, 40, 'New trip', () => go('where0')]],
    where0: [[96, 165, 527, 48, 'Where to', () => go('where')]],
    where: [[103, 226, 515, 56, 'Milan, Lombardy, Italy', () => go('dates')]],
    dates: [[342, 615, 65, 32, 'Done', () => go('filled')]],
    filled: [[96, 565, 527, 46, 'Create trip', async () => { await go('gen1', 360); if (live) { await sleep(2200); if (cur === 'gen1') await go('locked', 420); } }]],
    locked: [[1274, 941, 142, 48, 'Unlock full trip', () => openPay()]],
    gen: [[1254, 943, 150, 42, 'Go to Day 2', () => go('unlocked', 300)]],
    unlocked: [[64, 0, 140, 60, 'Trips – start over', () => go('paris', 300)]],
    pay: [[484, 702, 472, 54, 'Pay $3.99', async () => { await closePay('gen'); }], [924, 214, 40, 40, 'Close', () => closePay()]],
  };
  function hotspots() {
    hsL.innerHTML = ''; if (!live) return;
    const s0 = SCR[cur], dy = s0.C ? -s0.y : 0;
    let list = modalOn ? HS.pay : (HS[cur] || []).slice();
    if (!modalOn && SCR[cur].sb) list.push([584, 32, 40, 40, 'Close', () => go('paris')], [656, 0, 784, 1003, 'Close panel', () => go('paris')]);
    if (!modalOn && s0.menu) list = menuOn ? [[0, 0, 1440, 1003, 'Close menu', () => menu(false)]] : [[904, 757 + dy, 40, 40, 'Stop actions', () => menu(true)], ...list];
    list.forEach(([x, y, w, h, label, fn]) => {
      const b = el('button', 'tsp-hs', `left:${x}px;top:${y}px;width:${w}px;height:${h}px;pointer-events:auto`, hsL); b.type = 'button'; b.setAttribute('aria-label', label);
      b.addEventListener('click', async (e) => { e.stopPropagation(); if (dragged || busy) return; busy = true; hsL.innerHTML = ''; const r = stage.getBoundingClientRect(); if (e.clientX || e.clientY) tap((e.clientX - r.left) / K, (e.clientY - r.top) / K); try { await fn(); } finally { busy = false; hotspots(); } });
    });
  }
  stage.addEventListener('click', () => { if (!live || dragged || busy) return; stage.classList.add('flash'); setTimeout(() => stage.classList.remove('flash'), 600); });
  const scr = () => (SCR[cur].max > 0 && !modalOn ? SCR[cur] : null);
  stage.addEventListener('wheel', (e) => { const s = scr(); if (!live || !s) return; e.preventDefault(); setScroll(s, s.y + e.deltaY / K); hotspots(); }, { passive: false });
  let py = null;
  stage.addEventListener('pointerdown', (e) => { if (!live) return; py = e.clientY; dragged = false; });
  addEventListener('pointermove', (e) => { if (py === null) return; const d = py - e.clientY; if (Math.abs(d) > 6) dragged = true; const s = scr(); if (dragged && s) { setScroll(s, s.y + d / K); py = e.clientY; } });
  addEventListener('pointerup', () => { if (py !== null && dragged) hotspots(); py = null; setTimeout(() => (dragged = false), 0); });

  async function autoplay() {
    const id = ++runId; const S = (ms) => sleep(ms, id);
    try {
      for (;;) {
        reset(); await S(2200);
        await tap(32, 88); await go('where0'); await S(1000);
        await tap(300, 189); await go('where'); await S(1100);
        await tap(300, 254); await go('dates'); await S(1300);
        await tap(374, 631); await go('filled'); await S(1300);
        await tap(360, 588); await go('gen1', 360); await S(2300);
        await go('locked', 420); await S(1000);
        await scrollAnim(SCR.locked, 380, 1300); await S(500); await tap(924, 777 - 380); await menu(true); await S(1200); await tap(600, 480); await menu(false); await S(400); await scrollAnim(SCR.locked, 0, 900); await S(500);
        await tap(1345, 965); await openPay(); await S(1500);
        await tap(720, 729); await closePay('gen'); await S(2300);
        await tap(1329, 964); await go('unlocked', 300); await S(2600);
        if (id !== runId) return;
      }
    } catch (e) { if (e !== ABORT) throw e; }
  }
  const tryB = root.querySelector('[data-try]'), ppB = root.querySelector('[data-pp]');
  function setLive(on) {
    live = on; runId++; tryB.setAttribute('aria-pressed', on); tryB.textContent = on ? root.dataset.lAuto : root.dataset.lTry;
    ppB.hidden = on; paused = false; ppB.textContent = root.dataset.lPause; reset();
    if (on) hint.textContent = root.dataset.lHint; else { hint.textContent = ''; if (!RM) autoplay(); }
  }
  tryB.onclick = () => setLive(!live);
  ppB.onclick = () => { paused = !paused; ppB.textContent = paused ? root.dataset.lPlay : root.dataset.lPause; holdAll(paused); };
  new IntersectionObserver((es) => { seen = es[0].isIntersecting; holdAll(!seen || paused); }, { threshold: 0.25 }).observe(dev);
  if (RM) setLive(true); else { reset(); autoplay(); }
})();
