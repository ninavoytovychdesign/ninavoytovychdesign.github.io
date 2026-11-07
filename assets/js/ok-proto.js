/* Open Kharkiv prototype: autoplay + click-through, screens from the Figma design */
(() => {
  const root = document.querySelector('[data-okp]'); if (!root) return;
  const SRC = document.currentScript && document.currentScript.src;
  const BASE = new URL('../cases/open-kharkiv/proto/', SRC || location.href).href;
  const EN = (document.documentElement.lang || '').slice(0, 2) === 'en';
  const LB = { 'Події': 'Events', 'Новини': 'News', 'Мапа транспорту': 'Transport map', 'Назад': 'Back', 'Відкрити новину': 'Open the news item', 'Відкрити подію': 'Open the event', 'Пошук зупинок і маршрутів': 'Search stops and routes', 'Наблизити': 'Zoom in', 'Віддалити': 'Zoom out', 'Вул. Шевченка 324': '324 Shevchenka St', 'Назад до пошуку': 'Back to search', 'Тролейбус № 12': 'Trolleybus No. 12', 'Тролейбус №12 – деталі': 'Trolleybus No. 12 – details', 'Закрити деталі': 'Close details', 'Показати на мапі': 'Show on the map' };
  const L = (s) => (EN ? LB[s] || s : s);
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const D = RM ? 1 : 1;                 // duration multiplier (reduced motion → instant, see dur())
  const dur = (ms) => (RM ? 0 : ms);
  const EASE = 'cubic-bezier(.2,.8,.2,1)', EIO = 'cubic-bezier(.65,0,.35,1)';
  const stage = root.querySelector('[data-stage]'), scr = stage.parentElement, phone = root.querySelector('[data-phone]');
  const hint = root.querySelector('[data-hint]');
  const el = (tag, cls, css, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (css) e.style.cssText = css; (parent || stage).appendChild(e); return e; };
  const img = (src, parent, css) => { const i = el('img', '', css || '', parent); i.src = BASE + src + '.webp'; i.alt = ''; i.decoding = 'async'; return i; };

  /* ── screens ── */
  const SCR = {
    home: { img: 'home', title: 'Головна' },
    news: { img: 'news', title: 'Новини' },
    article: { img: 'article', h: 1001, head: 104, title: 'Новина' },
    events: { img: 'events', title: 'Події' },
    event: { img: 'event', h: 966, head: 104, title: 'Подія' },
    map: { img: 'map', map: true, title: 'Мапа транспорту' },
    sugg: { img: 'sugg', title: 'Пошук зупинки' },
    routes: { img: 'routes', title: 'Маршрути на зупинці' },
    routemap: { img: 'routemap', title: 'Маршрут на мапі' },
  };
  for (const [k, s] of Object.entries(SCR)) {
    const L = el('div', 'L'); L.dataset.s = k; s.L = L; s.y = 0; s.max = (s.h || 852) - 852;
    if (s.map) {
      // only the map moves when zooming; the bar, controls and home indicator stay put
      s.Z = el('div', '', 'left:0;top:0;width:393px;height:852px;transform-origin:196px 470px', L); img(s.img, s.Z);
      const cr = (x, y, w, h) => { const c = el('div', 'cr', `left:${x}px;top:${y}px;width:${w}px;height:${h}px`, L); img(s.img, c, `left:${-x}px;top:${-y}px`); return c; };
      cr(0, 0, 393, 223); cr(326, 616, 67, 144); cr(326, 488, 67, 128); cr(0, 818, 393, 34);
      s.fE = el('div', 'cr', 'left:0;top:160px;width:393px;height:54px;opacity:0', L); img('field-empty', s.fE);
      s.fT = el('div', 'cr', 'left:0;top:160px;width:0;height:54px', L); img('field', s.fT);
      s.cur = el('div', 'cur', '', L);
    } else {
      s.C = el('div', '', 'left:0;top:0;width:393px', L); img(s.img, s.C);
      if (s.head) { const c = el('div', 'cr', `left:0;top:0;width:393px;height:${s.head}px`, L); img(s.img, c); }
    }
    if (k === 'routes') s.hl = el('div', 'hl', '', L);
  }
  const dimA = el('div', 'dim', 'z-index:20');
  const sheet = el('div', '', ''); sheet.id = 'sheet';
  const sheetC = el('div', '', 'left:0;top:0;width:393px', sheet); img('sheet', sheetC);
  const sheetBar = el('div', '', '', sheet); sheetBar.id = 'sheetBar'; img('sheetbar', sheetBar);
  const SH = { y: 0, max: 66 };

  /* ── keyboard: Ukrainian iOS layout ── */
  const kb = el('div', ''); kb.id = 'kb'; kb.setAttribute('aria-hidden', 'true');
  const pred = el('div', 'pred', '', kb); const P = [0, 1, 2].map(() => el('span', '', '', pred));
  const keys = {};
  const row = (top, list) => { const r = el('div', 'row', `top:${top}px`, kb); list.forEach((ch) => {
    const k = el('span', 'k', '', r);
    if (ch === '⇧') { k.classList.add('sp'); k.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 4l8 8h-4.5v7h-7v-7H4z" fill="none" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/></svg>'; }
    else if (ch === '⌫') { k.classList.add('sp'); k.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 6h11v12H9l-6-6z M12 9.5l5 5M17 9.5l-5 5" fill="none" stroke="#000" stroke-width="1.6" stroke-linejoin="round"/></svg>'; }
    else if (ch.length > 1) { k.classList.add('w'); k.textContent = ch; if (ch === 'пробіл') { k.classList.remove('w'); k.style.fontSize = '16px'; } }
    else { k.textContent = ch; const p = el('span', 'pop', '', k); p.textContent = ch; }
    keys[ch] = k; }); };
  row(52, 'йцукенгшщзх'.split('')); row(105, 'фівапролджє'.split('')); row(158, ['⇧', ...'ячсмитьбю'.split(''), '⌫']); row(211, ['123', 'пробіл', 'Пошук']);
  const kbar = el('div', 'bar', '', kb);
  kbar.innerHTML = '<svg style="position:absolute;left:28px;top:10px;width:26px;height:26px" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="#595A5E" stroke-width="1.5"/><circle cx="9" cy="10" r="1.2" fill="#595A5E"/><circle cx="15" cy="10" r="1.2" fill="#595A5E"/><path d="M8 14.5c2.2 2.4 5.8 2.4 8 0" fill="none" stroke="#595A5E" stroke-width="1.5" stroke-linecap="round"/></svg>'
    + '<svg style="position:absolute;right:28px;top:10px;width:26px;height:26px" viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3" fill="none" stroke="#595A5E" stroke-width="1.5"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="#595A5E" stroke-width="1.5" stroke-linecap="round"/></svg>';

  const tapD = el('div', 'dot'), p1 = el('div', 'dot'), p2 = el('div', 'dot');
  const hsL = el('div', '', 'left:0;top:0;width:393px;height:852px;z-index:70;pointer-events:none');

  /* ── fit the 393×852 stage into the screen ── */
  let K = 1;
  const fit = () => { K = scr.clientWidth / 393; stage.style.transform = `scale(${K})`; };
  new ResizeObserver(fit).observe(scr); fit();

  /* ── run control: autoplay can be paused, and is cancelled when the visitor takes over ── */
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
  let stack = ['home'], sheetOn = false, zoom = 1;
  const cur = () => stack[stack.length - 1];
  const steps = [...root.querySelectorAll('.okp-steps li')];
  const STEP = { home: 'home', map: 'map', sugg: 'search', routes: 'routes', routemap: 'routemap', news: 'news', article: 'news', events: 'news', event: 'news' };
  let typing = false;
  function mark() { const k = sheetOn ? 'sheet' : typing ? 'search' : STEP[cur()]; steps.forEach((li) => li.classList.toggle('on', li.dataset.s === k)); }
  function setScroll(s, y) { s.y = Math.max(0, Math.min(s.max, y)); if (s.C) s.C.style.transform = `translateY(${-s.y}px)`; }
  function setSheet(y) { SH.y = Math.max(0, Math.min(SH.max, y)); sheetC.style.transform = `translateY(${-SH.y}px)`; }
  function show(k, on) { SCR[k].L.classList.toggle('on', on); }

  function reset() {
    anims.forEach((a) => { try { a.cancel(); } catch (e) {} }); anims.clear();
    for (const [k, s] of Object.entries(SCR)) { show(k, k === 'home'); s.L.style.cssText = ''; s.L.style.zIndex = ''; setScroll(s, 0); }
    const m = SCR.map; m.Z.style.transform = ''; m.fE.style.opacity = 0; m.fT.style.width = '0px'; m.cur.classList.remove('blink'); m.cur.style.opacity = 0;
    SCR.routes.hl.style.opacity = 0; zoom = 1;
    sheet.style.visibility = 'hidden'; sheet.style.transform = 'translateY(804px)'; setSheet(0); dimA.style.opacity = 0;
    kb.style.top = '852px'; kb.classList.remove('up'); P.forEach((p) => (p.textContent = '')); keys['Пошук'].classList.remove('go');
    [tapD, p1, p2].forEach((d) => (d.style.opacity = 0));
    stack = ['home']; sheetOn = false; typing = false; mark(); hotspots();
  }

  /* ── transitions ── */
  async function push(to) {
    const a = SCR[cur()].L, b = SCR[to].L; setScroll(SCR[to], 0); show(to, true); b.style.zIndex = 2; a.style.zIndex = 1;
    const x = A(b, [{ transform: 'translateX(393px)', boxShadow: '-12px 0 24px rgba(0,0,0,.14)' }, { transform: 'none', boxShadow: '-12px 0 24px rgba(0,0,0,0)' }], 460);
    A(a, [{ transform: 'none', filter: 'brightness(1)' }, { transform: 'translateX(-118px)', filter: 'brightness(.9)' }], 460);
    stack.push(to); mark(); await done(x); show(stack[stack.length - 2], false); a.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  async function pop(toKey) {
    const from = cur(); const to = toKey || stack[stack.length - 2]; if (!to) return;
    const a = SCR[from].L, b = SCR[to].L; show(to, true); a.style.zIndex = 2; b.style.zIndex = 1; b.getAnimations().forEach((q) => q.cancel());
    A(b, [{ transform: 'translateX(-118px)', filter: 'brightness(.9)' }, { transform: 'none', filter: 'brightness(1)' }], 420);
    const x = A(a, [{ transform: 'none' }, { transform: 'translateX(393px)' }], 420);
    const i = stack.lastIndexOf(to); stack = i >= 0 ? stack.slice(0, i + 1) : ['home', to]; mark();
    await done(x); show(from, false); a.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  async function fade(to, ms) {
    const a = SCR[cur()].L, b = SCR[to].L; setScroll(SCR[to], 0); show(to, true); b.style.zIndex = 2;
    const x = A(b, [{ opacity: 0 }, { opacity: 1 }], ms || 220, 'linear');
    stack[stack.length - 1] = to; mark(); await done(x); if (a !== b) show(a.dataset.s, false); b.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  async function openSheet() {
    setSheet(0); sheet.style.visibility = 'visible'; sheetOn = true; mark();
    A(dimA, [{ opacity: 0 }, { opacity: 0.35 }], 420, 'linear');
    await done(A(sheet, [{ transform: 'translateY(804px)' }, { transform: 'translateY(0)' }], 480, 'cubic-bezier(.22,1,.36,1)'));
    hotspots();
  }
  async function closeSheet(under) {
    if (under) { const old = cur(); show(under, true); show(old, false); stack[stack.length - 1] = under; }
    sheetOn = false; mark();
    A(dimA, [{ opacity: 0.35 }, { opacity: 0 }], 380, 'linear');
    await done(A(sheet, [{ transform: 'translateY(0)' }, { transform: 'translateY(804px)' }], 420, EIO));
    sheet.style.visibility = 'hidden'; hotspots();
  }
  async function zoomTo(z, ms) { const m = SCR.map; const a = A(m.Z, [{ transform: `scale(${zoom})` }, { transform: `scale(${z})` }], ms || 420, EIO); zoom = z; await done(a); }
  async function scrollAnim(target, to, ms) {
    const from = target === SH ? SH.y : target.y, t0 = performance.now(), T = dur(ms);
    await new Promise((res) => { const f = (now) => { if (paused || !seen) { requestAnimationFrame(f); return; } const p = T ? Math.min(1, (now - t0) / T) : 1, e = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2, y = from + (to - from) * e;
      target === SH ? setSheet(y) : setScroll(target, y); if (p < 1) requestAnimationFrame(f); else res(); }; requestAnimationFrame(f); });
  }

  /* ── finger feedback ── */
  async function tap(x, y) {
    tapD.style.left = x + 'px'; tapD.style.top = y + 'px';
    await done(A(tapD, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(.9)', offset: 0.35 }, { opacity: 1, transform: 'scale(1)', offset: 0.6 }, { opacity: 0, transform: 'scale(1.15)' }], 520, 'ease-out', 'none'));
  }
  async function pinch(z) {
    const cx = 196, cy = 470;
    const kf = (s) => [{ left: `${cx - 22 * s}px`, top: `${cy + 16 * s}px`, opacity: 0 }, { opacity: 1, offset: 0.12 }, { opacity: 1, offset: 0.85 }, { left: `${cx - 84 * s}px`, top: `${cy + 62 * s}px`, opacity: 0 }];
    A(p1, kf(1), 1300, EIO, 'none'); A(p2, kf(-1), 1300, EIO, 'none');
    await sleep(120); await zoomTo(z, 1080);
  }

  /* ── search: focus, Ukrainian keyboard up, type «Шевченка», suggestions ── */
  const ENDS = [74.7, 83.3, 90.7, 98.3, 106.7, 115, 122.3, 130];
  async function search(id) {
    const m = SCR.map; typing = true; mark(); hotspots(true);
    m.fE.style.opacity = 1; m.cur.style.left = '62px'; m.cur.style.opacity = 1; m.cur.classList.add('blink');
    kb.classList.add('up'); keys['⇧'].style.background = '#fff';
    await done(A(kb, [{ top: '852px' }, { top: '537px' }], 380, 'cubic-bezier(.22,1,.36,1)'));
    await sleep(350, id); m.cur.classList.remove('blink');
    const word = 'шевченка';
    for (let i = 0; i < word.length; i++) {
      const k = keys[word[i]]; k.classList.add('dn'); await sleep(70, id);
      m.fT.style.width = (ENDS[i] + 2) + 'px'; m.cur.style.left = (ENDS[i] + 3) + 'px';
      if (i === 0) { kb.classList.remove('up'); keys['⇧'].style.background = ''; }
      if (i >= 2) { P[0].textContent = '«' + 'Шевченка'.slice(0, i + 1) + '»'; P[1].textContent = 'Шевченка'; P[2].textContent = 'Шевченко'; }
      keys['Пошук'].classList.add('go');
      await sleep(60, id); k.classList.remove('dn'); await sleep(40, id);
    }
    m.cur.classList.add('blink'); await sleep(450, id);
    A(kb, [{ top: '537px' }, { top: '852px' }], 320, EIO);
    await fade('sugg', 240);
    typing = false; mark();
    m.fE.style.opacity = 0; m.fT.style.width = '0px'; m.cur.classList.remove('blink'); m.cur.style.opacity = 0; keys['Пошук'].classList.remove('go'); P.forEach((p) => (p.textContent = ''));
    hotspots();
  }
  async function pressRow() { const h = SCR.routes.hl; h.style.opacity = 1; await sleep(160); openSheet(); await sleep(260); h.style.opacity = 0; }

  /* ── hotspots: real buttons, so the prototype also works from the keyboard ── */
  const HS = {
    home: [[12, 406, 116, 48, 'Події', () => push('events')], [137, 406, 116, 48, 'Новини', () => push('news')], [104, 484, 190, 50, 'Мапа транспорту', () => push('map')]],
    news: [[6, 58, 44, 44, 'Назад', () => pop()], [12, 104, 369, 740, 'Відкрити новину', () => push('article')]],
    article: [[6, 58, 44, 44, 'Назад', () => pop()]],
    events: [[6, 58, 44, 44, 'Назад', () => pop()], [12, 104, 369, 740, 'Відкрити подію', () => push('event')]],
    event: [[6, 58, 44, 44, 'Назад', () => pop()]],
    map: [[6, 58, 44, 44, 'Назад', () => pop()], [17, 166, 321, 44, 'Пошук зупинок і маршрутів', () => search()],
      [330, 628, 56, 56, 'Наблизити', () => zoomTo(Math.min(2.2, +(zoom + 0.6).toFixed(2)))], [330, 692, 56, 56, 'Віддалити', () => zoomTo(Math.max(1, +(zoom - 0.6).toFixed(2)))]],
    sugg: [[6, 58, 44, 44, 'Назад', () => fade('map')], [16, 318, 280, 36, 'Вул. Шевченка 324', () => push('routes')]],
    routes: [[6, 58, 44, 44, 'Назад', () => pop()], [14, 238, 88, 44, 'Назад до пошуку', () => pop()], [16, 352, 361, 68, 'Тролейбус № 12', () => pressRow()]],
    routemap: [[6, 58, 44, 44, 'Назад', () => pop('map')], [76, 324, 168, 74, 'Тролейбус №12 – деталі', () => openSheet()],
      [330, 628, 56, 56, 'Наблизити', null], [330, 692, 56, 56, 'Віддалити', null]],
    sheet: [[0, 0, 393, 48, 'Закрити деталі', () => closeSheet()], [16, 695, 361, 48, 'Показати на мапі', () => closeSheet('routemap')]],
  };
  function hotspots(off) {
    hsL.innerHTML = '';
    if (!live || off) return;
    const list = (sheetOn ? HS.sheet : HS[cur()] || []).filter((h) => h[5]);
    list.forEach(([x, y, w, h, label, go]) => {
      const b = el('button', 'hs', `left:${x}px;top:${y}px;width:${w}px;height:${h}px;pointer-events:auto`, hsL); b.type = 'button'; b.setAttribute('aria-label', L(label));
      b.addEventListener('click', async (e) => { e.stopPropagation(); if (dragged || busy) return; busy = true; hsL.innerHTML = ''; tapAtEvent(e); try { await go(); } finally { busy = false; hotspots(); } });
    });
  }
  let busy = false, dragged = false;
  function tapAtEvent(e) { const r = stage.getBoundingClientRect(); const x = (e.clientX - r.left) / K, y = (e.clientY - r.top) / K; if (e.clientX || e.clientY) tap(x, y); }
  // a click that hits nothing flashes the hotspots, like a Figma prototype
  stage.addEventListener('click', () => { if (!live || dragged || busy) return; stage.classList.add('flash'); setTimeout(() => stage.classList.remove('flash'), 600); });
  // scroll tall screens and the sheet with the wheel or a drag
  const scrollable = () => (sheetOn ? SH : SCR[cur()].max > 0 ? SCR[cur()] : null);
  const by = (dy) => { const s = scrollable(); if (!s) return; s === SH ? setSheet(SH.y + dy) : setScroll(s, s.y + dy); };
  stage.addEventListener('wheel', (e) => { if (!live || !scrollable()) return; e.preventDefault(); by(e.deltaY / K); }, { passive: false });
  let py = null;
  stage.addEventListener('pointerdown', (e) => { if (!live) return; py = e.clientY; dragged = false; });
  addEventListener('pointermove', (e) => { if (py === null) return; const d = py - e.clientY; if (Math.abs(d) > 6) dragged = true; if (dragged) { by(d / K); py = e.clientY; } });
  addEventListener('pointerup', () => { py = null; setTimeout(() => (dragged = false), 0); });

  /* ── autoplay script ── */
  async function autoplay() {
    const id = ++runId; const S = (ms) => sleep(ms, id);
    try {
      for (;;) {
        reset(); await S(1400);
        await tap(198, 509); await push('map'); await S(700);
        await pinch(1.7); await S(600);
        await tap(150, 188); await search(id); await S(900);
        await tap(170, 336); await push('routes'); await S(1000);
        await tap(200, 386); await pressRow(); await S(900);
        await scrollAnim(SH, 66, 900); await S(450);
        await tap(196, 719); await closeSheet('routemap'); await S(1900);
        await tap(28, 80); await pop('map'); await S(500);
        await tap(28, 80); await pop('home'); await S(900);
        await tap(194, 430); await push('news'); await S(900);
        await tap(250, 170); await push('article'); await S(700);
        await scrollAnim(SCR.article, SCR.article.max, 1200); await S(900);
        await tap(28, 80); await pop(); await S(500);
        await tap(28, 80); await pop(); await S(500);
        await tap(70, 430); await push('events'); await S(1400);
        await tap(28, 80); await pop(); await S(600);
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
  tryB.onclick = () => setLive(!live);
  ppB.onclick = () => { paused = !paused; ppB.textContent = paused ? root.dataset.lPlay : root.dataset.lPause; holdAll(paused); };
  new IntersectionObserver((es) => { seen = es[0].isIntersecting; holdAll(!seen || paused); }, { threshold: 0.25 }).observe(phone);
  if (RM) { setLive(true); } else { reset(); autoplay(); }
})();
