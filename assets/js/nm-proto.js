/* Numa – adding a medication: autoplay + click-through. Screens from the Figma design (390×844), links follow its prototype. */
(() => {
  const root = document.querySelector('[data-nmp]'); if (!root) return;
  const SRC = document.currentScript && document.currentScript.src;
  const V = '20261108';
  const BASE = new URL('../cases/numa/proto/', SRC || location.href).href;
  const LG = (document.documentElement.lang || '').slice(0, 2);
  const LB = {
    en: { '+': 'Add', 'Ліки': 'Medication', 'Марк': 'Mark', 'Назад': 'Back', 'Назва': 'Name', '2 рази': 'Twice a day', '1 раз': 'Once a day', 'Додати ліки': 'Add medication', 'Закрити': 'Close', 'Відкрити медкарту': 'Open the health record' },
    it: { '+': 'Aggiungi', 'Ліки': 'Farmaci', 'Марк': 'Mark', 'Назад': 'Indietro', 'Назва': 'Nome', '2 рази': 'Due volte al giorno', '1 раз': 'Una volta al giorno', 'Додати ліки': 'Aggiungi il farmaco', 'Закрити': 'Chiudi', 'Відкрити медкарту': 'Apri la cartella' },
  };
  const L = (s) => (LB[LG] && LB[LG][s]) || s;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = (ms) => (RM ? 0 : ms);
  const EASE = 'cubic-bezier(.2,.8,.2,1)', EIO = 'cubic-bezier(.65,0,.35,1)', SPRING = 'cubic-bezier(.22,1,.36,1)';
  const W = 390, H = 844, KBH = 315;
  const stage = root.querySelector('[data-stage]'), scr = stage.parentElement, phone = root.querySelector('[data-phone]');
  const hint = root.querySelector('[data-hint]');
  const el = (tag, cls, css, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (css) e.style.cssText = css; (parent || stage).appendChild(e); return e; };
  const img = (src, parent, css) => { const i = el('img', '', css || '', parent); if (window.imgset) window.imgset(i, BASE, src, '?v=' + V); i.src = BASE + src + '.webp?v=' + V; i.alt = ''; i.decoding = 'async'; return i; };

  /* ── screens: content scrolls, the status bar stays put ── */
  const SCR = { home: { h: 844 }, who: { h: 844 }, med: { h: 970 }, med2: { h: 970 }, err: { h: 992 }, done: { h: 844 } };
  for (const [k, s] of Object.entries(SCR)) {
    const Lr = el('div', 'L'); Lr.dataset.s = k; s.L = Lr; s.y = 0; s.max = s.h - H;
    s.C = el('div', '', `left:0;top:0;width:${W}px`, Lr); img(k, s.C);
    if (s.max > 0) { const c = el('div', 'cr', `left:0;top:0;width:${W}px;height:54px;z-index:3`, Lr); img(k, c); }
    if (k === 'med' || k === 'med2') {
      // typed name lives on top of the empty field, inside the scrolling content
      s.F = el('div', 'nm-f', '', s.C); s.T = el('span', 'nm-t', '', s.F); s.cur = el('span', 'nm-c', '', s.F);
    }
  }
  // «What to add?» sheet sits inside the home layer, so a push moves home, dim and sheet together
  const dimA = el('div', 'nm-d', '', SCR.home.L);
  const sheet = el('div', 'nm-s', '', SCR.home.L); img('sheet', sheet, `left:0;top:0;width:${W}px`);
  const SH_TOP = 247;
  const ind = el('div', 'nm-i'); // home indicator
  // the name field while the error state is on screen
  const errF = el('div', 'nm-f nm-ef', '', SCR.err.C); const errC = el('span', 'nm-c', '', errF);

  /* ── keyboard: Ukrainian iOS layout + digits ── */
  const kb = el('div', ''); kb.id = 'kb'; kb.setAttribute('aria-hidden', 'true');
  const pred = el('div', 'pred', '', kb); const P = [0, 1, 2].map(() => el('span', '', '', pred));
  const keys = {}, layers = {};
  const row = (layer, top, list) => { const r = el('div', 'row', `top:${top}px`, layers[layer]); list.forEach((ch) => {
    const k = el('span', 'k', '', r);
    if (ch === '⇧') { k.classList.add('sp'); k.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 4l8 8h-4.5v7h-7v-7H4z" fill="none" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/></svg>'; }
    else if (ch === '⌫') { k.classList.add('sp'); k.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 6h11v12H9l-6-6z M12 9.5l5 5M17 9.5l-5 5" fill="none" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/></svg>'; }
    else if (ch.length > 1) { k.classList.add('w'); k.textContent = ch; if (ch === 'пробіл') { k.classList.remove('w'); k.style.fontSize = '16px'; } }
    else { k.textContent = ch; const p = el('span', 'pop', '', k); p.textContent = ch; }
    keys[layer + ch] = k; }); };
  layers.a = el('div', 'kl', '', kb); layers.n = el('div', 'kl', 'visibility:hidden', kb);
  row('a', 52, 'йцукенгшщзх'.split('')); row('a', 105, 'фівапролджє'.split('')); row('a', 158, ['⇧', ...'ячсмитьбю'.split(''), '⌫']); row('a', 211, ['123', 'пробіл', 'Готово']);
  row('n', 52, '1234567890'.split('')); row('n', 105, '-/:;()₴&@"'.split('')); row('n', 158, ['#+=', ...'.,?!’'.split(''), '⌫']); row('n', 211, ['АБВ', 'пробіл', 'Готово']);
  keys['n#+='].classList.add('sp'); keys['n#+='].style.flexBasis = '56px'; keys['n#+='].style.fontSize = '15px';
  ['aГотово', 'nГотово'].forEach((k) => keys[k].classList.add('go'));
  const kbar = el('div', 'bar', '', kb);
  kbar.innerHTML = '<svg style="position:absolute;left:28px;top:10px;width:26px;height:26px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#595A5E" stroke-width="1.5"/><circle cx="9" cy="10" r="1.2" fill="#595A5E"/><circle cx="15" cy="10" r="1.2" fill="#595A5E"/><path d="M8 14.5c2.2 2.4 5.8 2.4 8 0" fill="none" stroke="#595A5E" stroke-width="1.5" stroke-linecap="round"/></svg>'
    + '<svg style="position:absolute;right:28px;top:10px;width:26px;height:26px" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="#595A5E" stroke-width="1.5"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="#595A5E" stroke-width="1.5" stroke-linecap="round"/></svg>';
  const setLayer = (n) => { layers.a.style.visibility = n === 'a' ? 'visible' : 'hidden'; layers.n.style.visibility = n === 'n' ? 'visible' : 'hidden'; };

  const tapD = el('div', 'dot');
  const hsL = el('div', '', `left:0;top:0;width:${W}px;height:${H}px;z-index:70;pointer-events:none`);

  /* ── fit the 390×844 stage into the screen ── */
  let K = 1;
  const fit = () => { K = scr.clientWidth / W; stage.style.transform = `scale(${K})`; };
  new ResizeObserver(fit).observe(scr); fit();

  /* ── run control ── */
  let runId = 0, paused = false, seen = true, live = false;
  const ABORT = Symbol('abort');
  const anims = new Set();
  const A = (node, kf, ms, easing, fill) => { const a = node.animate(kf, { duration: dur(ms), easing: easing || EASE, fill: fill || 'forwards' }); anims.add(a); a.finished.catch(() => {}).then(() => anims.delete(a)); if (paused || !seen) a.pause(); return a; };
  const done = (a) => a.finished.catch(() => {});
  const holdAll = (on) => anims.forEach((a) => { try { on ? a.pause() : a.play(); } catch (e) {} });
  function sleep(ms, id) {
    return new Promise((res, rej) => { let left = dur(ms), last = performance.now();
      const f = (now) => { if (id !== undefined && id !== runId) return rej(ABORT); if (!paused && seen) left -= now - last; last = now; if (left <= 0) res(); else requestAnimationFrame(f); };
      requestAnimationFrame(f); });
  }

  /* ── state ── */
  let stack = ['home'], sheetOn = false, typing = false, kbOn = false, name = '';
  const cur = () => stack[stack.length - 1];
  const steps = [...root.querySelectorAll('.okp-steps li')];
  function mark() {
    const c = cur();
    const k = c === 'home' ? (sheetOn ? 'add' : 'home') : c === 'who' ? 'who' : c === 'err' ? 'err' : c === 'done' ? 'done' : (typing || name || c === 'med2') ? 'fill' : 'med';
    steps.forEach((li) => li.classList.toggle('on', li.dataset.s === k));
  }
  function setScroll(s, y) { s.y = Math.max(0, Math.min(s.max, y)); s.C.style.transform = `translateY(${-s.y}px)`; }
  function show(k, on) { SCR[k].L.classList.toggle('on', on); }
  function setName(t) {
    name = t;
    for (const k of ['med', 'med2']) { const s = SCR[k]; s.T.textContent = t; s.F.classList.toggle('on', !!t || (typing && k === cur())); }
    caret();
  }
  function caret() {
    const c = cur();
    for (const k of ['med', 'med2']) { const s = SCR[k]; s.cur.style.left = (17 + s.T.offsetWidth) + 'px'; s.cur.classList.toggle('blink', typing && k === c); s.cur.style.opacity = typing && k === c ? 1 : 0; if (typing && k === c) s.F.classList.add('on'); }
  }

  function reset() {
    anims.forEach((a) => { try { a.cancel(); } catch (e) {} }); anims.clear();
    for (const [k, s] of Object.entries(SCR)) { show(k, k === 'home'); s.L.style.cssText = ''; setScroll(s, 0); }
    sheet.style.display = 'none'; sheet.style.transform = ''; dimA.style.opacity = 0;
    kb.style.top = H + 'px'; kb.classList.remove('up'); setLayer('a'); P.forEach((p) => (p.textContent = ''));
    errF.classList.remove('on'); errC.classList.remove('blink');
    tapD.style.opacity = 0;
    stack = ['home']; sheetOn = false; typing = false; kbOn = false; setName(''); mark(); hotspots();
  }

  /* ── transitions ── */
  async function push(to) {
    const a = SCR[cur()].L, b = SCR[to].L; setScroll(SCR[to], 0); show(to, true); b.style.zIndex = 2; a.style.zIndex = 1;
    const x = A(b, [{ transform: `translateX(${W}px)`, boxShadow: '-12px 0 24px rgba(0,0,0,.14)' }, { transform: 'none', boxShadow: '-12px 0 24px rgba(0,0,0,0)' }], 460);
    A(a, [{ transform: 'none', filter: 'brightness(1)' }, { transform: 'translateX(-117px)', filter: 'brightness(.9)' }], 460);
    stack.push(to); mark(); caret(); await done(x); show(stack[stack.length - 2], false); a.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; a.style.zIndex = ''; hotspots();
  }
  async function pop(toKey) {
    const from = cur(); const to = toKey || stack[stack.length - 2] || 'home';
    if (to === 'home' && sheetOn) { sheetOn = false; sheet.style.display = 'none'; dimA.style.opacity = 0; }
    const a = SCR[from].L, b = SCR[to].L; show(to, true); a.style.zIndex = 2; b.style.zIndex = 1; b.getAnimations().forEach((q) => q.cancel());
    A(b, [{ transform: 'translateX(-117px)', filter: 'brightness(.9)' }, { transform: 'none', filter: 'brightness(1)' }], 420);
    const x = A(a, [{ transform: 'none' }, { transform: `translateX(${W}px)` }], 420);
    const i = stack.lastIndexOf(to); stack = i >= 0 ? stack.slice(0, i + 1) : [to]; mark();
    await done(x); show(from, false); a.getAnimations().forEach((q) => q.cancel()); a.style.zIndex = ''; b.style.zIndex = ''; hotspots();
  }
  // same screen, new state (chip selected, validation): swap in place, keep the scroll
  async function swap(to, ms) {
    const fromS = SCR[cur()], toS = SCR[to], a = fromS.L, b = toS.L;
    setScroll(toS, fromS.y + (toS.off || 0)); show(to, true); b.style.zIndex = 2;
    const x = A(b, [{ opacity: 0 }, { opacity: 1 }], ms || 160, 'linear');
    stack[stack.length - 1] = to; mark(); caret(); await done(x); if (a !== b) show(a.dataset.s, false); b.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  async function openSheet() {
    sheet.style.display = 'block'; sheetOn = true; mark();
    A(dimA, [{ opacity: 0 }, { opacity: 1 }], 380, 'linear');
    await done(A(sheet, [{ transform: `translateY(${H - SH_TOP}px)` }, { transform: 'translateY(0)' }], 480, SPRING));
    hotspots();
  }
  async function closeSheet() {
    sheetOn = false; mark();
    A(dimA, [{ opacity: 1 }, { opacity: 0 }], 340, 'linear');
    await done(A(sheet, [{ transform: 'translateY(0)' }, { transform: `translateY(${H - SH_TOP}px)` }], 380, EIO));
    sheet.style.display = 'none'; hotspots();
  }
  async function scrollAnim(s, to, ms) {
    const from = s.y, t0 = performance.now(), T = dur(ms);
    await new Promise((res) => { const f = (now) => { if (paused || !seen) { requestAnimationFrame(f); return; } const p = T ? Math.min(1, (now - t0) / T) : 1, e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
      setScroll(s, from + (to - from) * e); if (p < 1) requestAnimationFrame(f); else res(); }; requestAnimationFrame(f); });
  }

  /* ── finger feedback ── */
  async function tap(x, y) {
    tapD.style.left = x + 'px'; tapD.style.top = y + 'px';
    await done(A(tapD, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(.9)', offset: 0.35 }, { opacity: 1, transform: 'scale(1)', offset: 0.6 }, { opacity: 0, transform: 'scale(1.15)' }], 520, 'ease-out', 'none'));
  }
  async function press(x, y, w, h, r) { // pressed state of a button or a tile
    const p = el('div', 'nm-p', `left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${r}px`);
    await done(A(p, [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }], 360, 'ease-out', 'none')); p.remove();
  }

  /* ── typing the name: field focus, keyboard up, «Омега-3» ── */
  async function kbUp() { if (kbOn) return; kbOn = true; kb.classList.add('up'); setLayer('a'); await done(A(kb, [{ top: H + 'px' }, { top: (H - KBH) + 'px' }], 380, SPRING)); }
  async function kbDown() { if (!kbOn) return; kbOn = false; await done(A(kb, [{ top: (H - KBH) + 'px' }, { top: H + 'px' }], 320, EIO)); }
  async function key(k, id, ms) { const n = keys[k]; n.classList.add('dn'); await sleep(ms || 80, id); n.classList.remove('dn'); await sleep(50, id); }
  async function typeName(id) {
    typing = true; mark(); hotspots(true);
    if (cur() === 'err') { errF.classList.add('on'); errC.classList.add('blink'); }
    else caret();
    await kbUp(); await sleep(380, id);
    const word = 'Омега';
    for (let i = 0; i < word.length; i++) {
      const ch = word[i].toLowerCase(); const n = keys['a' + ch]; n.classList.add('dn'); await sleep(80, id);
      if (cur() === 'err') { errF.classList.remove('on'); errC.classList.remove('blink'); await swap('med', 140); } // the error clears as soon as you type
      setName(name + word[i]);
      if (i === 0) kb.classList.remove('up');
      if (i >= 1) { P[0].textContent = '«' + name + '»'; }
      await sleep(60, id); n.classList.remove('dn'); await sleep(40 + (i % 2) * 30, id);
    }
    await key('a123', id); setLayer('n'); await sleep(120, id);
    await key('n-', id); setName(name + '-'); P[0].textContent = '«' + name + '»';
    await key('n3', id); setName(name + '3'); P[0].textContent = '«' + name + '»';
    await sleep(500, id);
    await key('nГотово', id, 90);
    P.forEach((p) => (p.textContent = '')); typing = false; caret(); mark();
    await kbDown(); setLayer('a'); hotspots();
  }

  /* ── hotspots: real buttons; [x, y, w, h, label, action, scrolls with content] ── */
  const named = () => !!name;
  const HS = {
    home: [[318, 760, 56, 56, '+', () => openSheet()]],
    sheet: [[0, 0, W, SH_TOP, 'Закрити', () => closeSheet()], [16, 432, 175, 74, 'Ліки', () => push('who')]],
    who: [[12, 58, 44, 44, 'Назад', () => pop('home')], [16, 180, 358, 72, 'Марк', () => push('med')]],
    med: [[12, 58, 44, 44, 'Назад', () => pop('home'), 1], [24, 224, 342, 44, 'Назва', () => typeName(), 1], [101, 388, 80, 40, '2 рази', () => swap('med2'), 1], [24, 884, 342, 52, 'Додати ліки', () => (named() ? push('done') : swap('err')), 1]],
    med2: [[12, 58, 44, 44, 'Назад', () => pop('home'), 1], [24, 224, 342, 44, 'Назва', () => typeName(), 1], [24, 388, 68, 40, '1 раз', () => swap('med'), 1], [24, 884, 342, 52, 'Додати ліки', () => push('done'), 1]],
    err: [[12, 58, 44, 44, 'Назад', () => pop('home'), 1], [24, 224, 342, 44, 'Назва', () => typeName(), 1], [24, 906, 342, 52, 'Додати ліки', () => push('done'), 1]],
    done: [[24, 704, 342, 52, 'Відкрити медкарту', async () => { reset(); await openSheet(); }]],
  };
  SCR.err.off = 0;
  function hotspots(off) {
    hsL.innerHTML = '';
    if (!live || off || typing) return;
    const s = SCR[cur()];
    const list = sheetOn && cur() === 'home' ? HS.sheet : HS[cur()] || [];
    list.forEach(([x, y, w, h, label, go, sc]) => {
      const top = sc ? y - s.y : y; if (top + h < 0 || top > H) return;
      const b = el('button', 'hs', `left:${x}px;top:${top}px;width:${w}px;height:${h}px;pointer-events:auto`, hsL); b.type = 'button'; b.setAttribute('aria-label', L(label));
      b.addEventListener('click', async (e) => { e.stopPropagation(); if (dragged || busy) return; busy = true; hsL.innerHTML = ''; tapAtEvent(e); try { await go(); } finally { busy = false; hotspots(); } });
    });
  }
  let busy = false, dragged = false;
  function tapAtEvent(e) { const r = stage.getBoundingClientRect(); const x = (e.clientX - r.left) / K, y = (e.clientY - r.top) / K; if (e.clientX || e.clientY) tap(x, y); }
  stage.addEventListener('click', () => { if (!live || dragged || busy) return; stage.classList.add('flash'); setTimeout(() => stage.classList.remove('flash'), 600); });
  const scrollable = () => (!(sheetOn && cur() === 'home') && SCR[cur()].max > 0 ? SCR[cur()] : null);
  const by = (dy) => { const s = scrollable(); if (!s) return; setScroll(s, s.y + dy); hotspots(); };
  stage.addEventListener('wheel', (e) => { if (!live || !scrollable()) return; e.preventDefault(); by(e.deltaY / K); }, { passive: false });
  let py = null;
  stage.addEventListener('pointerdown', (e) => { if (!live) return; py = e.clientY; dragged = false; });
  addEventListener('pointermove', (e) => { if (py === null) return; const d = py - e.clientY; if (Math.abs(d) > 6) dragged = true; if (dragged) { by(d / K); py = e.clientY; } });
  addEventListener('pointerup', () => { py = null; setTimeout(() => (dragged = false), 0); });

  /* ── autoplay: + → Medication → Mark → empty save → error → type the name → twice a day → save ── */
  async function autoplay() {
    const id = ++runId; const S = (ms) => sleep(ms, id);
    try {
      for (;;) {
        reset(); await S(1500);
        press(318, 760, 56, 56, 28); await tap(346, 788); await openSheet(); await S(1000);
        press(16, 432, 175, 74, 16); await tap(103, 469); await push('who'); await S(900);
        press(16, 180, 358, 72, 16); await tap(195, 216); await push('med'); await S(1000);
        await scrollAnim(SCR.med, SCR.med.max, 800); await S(500);
        press(24, 884 - SCR.med.max, 342, 52, 26); await tap(195, 910 - SCR.med.max);
        SCR.err.off = SCR.err.max - SCR.med.max; await swap('err', 140); SCR.err.off = 0; await S(450);
        await scrollAnim(SCR.err, 0, 700); await S(1100);
        await tap(160, 246); await typeName(id); await S(600);
        press(101, 388, 80, 40, 20); await tap(141, 408); await swap('med2', 140); await S(900);
        await scrollAnim(SCR.med2, SCR.med2.max, 800); await S(500);
        press(24, 884 - SCR.med2.max, 342, 52, 26); await tap(195, 910 - SCR.med2.max); await push('done'); await S(2600);
        if (id !== runId) return;
      }
    } catch (e) { if (e !== ABORT) throw e; }
  }

  /* ── controls ── */
  const tryB = root.querySelector('[data-try]'), ppB = root.querySelector('[data-pp]');
  function setLive(on) {
    live = on; runId++; tryB.setAttribute('aria-pressed', on); tryB.textContent = on ? root.dataset.lAuto : root.dataset.lTry;
    phone.classList.toggle('live', on); ppB.hidden = on; paused = false; ppB.textContent = root.dataset.lPause;
    reset();
    if (on) { hint.textContent = root.dataset.lHint; }
    else { hint.textContent = ''; if (!RM) autoplay(); }
  }
  // typing in try mode runs on its own clock
  const _type = typeName; typeName = async (id) => { if (id === undefined) { const my = ++runId; try { await _type(my); } catch (e) { if (e !== ABORT) throw e; } } else return _type(id); };
  tryB.onclick = () => setLive(!live);
  ppB.onclick = () => { paused = !paused; ppB.textContent = paused ? root.dataset.lPlay : root.dataset.lPause; holdAll(paused); };
  new IntersectionObserver((es) => { seen = es[0].isIntersecting; holdAll(!seen || paused); }, { threshold: 0.25 }).observe(phone);
  if (RM) { setLive(true); } else { reset(); autoplay(); }
})();
