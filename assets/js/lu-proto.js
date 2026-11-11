/* Lunora – onboarding and connecting a wallet: autoplay + click-through. The crystal and the setup progress are the original videos from Figma.
   Layers and keyframes come from the Figma prototype (393×852, Smart Animate): splash → three intro steps with the card stack → sign up → wallet → processing. */
(() => {
  const root = document.querySelector('[data-lup]'); if (!root) return;
  const SRC = document.currentScript && document.currentScript.src;
  const V = '20261108d';
  const BASE = new URL('../cases/lunora/proto/', SRC || location.href).href;
  const LG = (document.documentElement.lang || '').slice(0, 2);
  const LB = {
    uk: { Skip: 'Пропустити', 'Get started': 'Почати', 'Continue with Apple': 'Продовжити з Apple', 'Continue with Google': 'Продовжити з Google', 'Continue with Email': 'Продовжити з email', Continue: 'Продовжити', 'Connect a wallet': 'Підключити гаманець', Back: 'Назад', 'Digital wallet': 'Цифровий гаманець', PayPal: 'PayPal', 'Connect with PayPal': 'Підключити PayPal', Cancel: 'Скасувати', 'Cancel setup': 'Скасувати налаштування' },
    it: { Skip: 'Salta', 'Get started': 'Inizia', 'Continue with Apple': 'Continua con Apple', 'Continue with Google': 'Continua con Google', 'Continue with Email': 'Continua con email', Continue: 'Continua', 'Connect a wallet': 'Collega un portafoglio', Back: 'Indietro', 'Digital wallet': 'Portafoglio digitale', PayPal: 'PayPal', 'Connect with PayPal': 'Collega PayPal', Cancel: 'Annulla', 'Cancel setup': 'Annulla la configurazione' },
  };
  const L = (s) => (LB[LG] && LB[LG][s]) || s;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const dur = (ms) => (RM ? 0 : ms);
  // Figma presets: Slow (spring, no overshoot), Ease out, Gentle
  const SLOW = 'cubic-bezier(.2,.75,.12,1)', EOUT = 'cubic-bezier(0,0,.58,1)', GENTLE = 'cubic-bezier(.35,.05,.2,1)', EIO = 'cubic-bezier(.65,0,.35,1)', PUSH = 'cubic-bezier(.2,.8,.2,1)';
  const W = 393, H = 852;
  const stage = root.querySelector('[data-stage]'), scr = stage.parentElement, phone = root.querySelector('[data-phone]');
  const hint = root.querySelector('[data-hint]');
  const el = (tag, cls, css, parent) => { const e = document.createElement(tag); if (cls) e.className = cls; if (css) e.style.cssText = css; (parent || stage).appendChild(e); return e; };
  const ALL = [];
  const img = (src, parent, css) => { const i = el('img', '', css || '', parent); i.src = BASE + src + '.webp?v=' + V; i.alt = ''; ALL.push(i); return i; };
  // every layer is decoded before the first frame, so a screen never comes in empty
  const ready = () => Promise.all([...ALL.map((i) => (i.decode ? i.decode().catch(() => {}) : Promise.resolve())), ...VIDS.map((v) => (v.readyState >= 3 ? 0 : new Promise((r) => { v.addEventListener('canplaythrough', r, { once: true }); v.addEventListener('error', r, { once: true }); setTimeout(r, 4000); })))]);
  const raf2 = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  /* ── screens ── */
  const KEYS = ['intro', 'signup', 'welcome', 'prefs', 'wempty', 'addw', 'addwp', 'prov', 'paypal', 'proc'];
  const SCR = {};
  for (const k of KEYS) { const Lr = el('div', 'L lu-L'); Lr.dataset.s = k; SCR[k] = Lr; }
  ['signup', 'welcome', 'prefs', 'addw', 'addwp', 'prov', 'paypal'].forEach((k) => img(k, SCR[k]));

  /* intro: background, logo, three cards, texts, pagination, button */
  const I = SCR.intro;
  img('ibg', I);
  const logo = el('div', 'lu-logo', '', I);
  const ring = img('ring', logo, 'left:-24px;top:-24px;width:328px'); // ring 280×280 + 24 padding
  const wordC = el('div', 'lu-word', '', logo); img('word', wordC, 'left:-24px;top:-24px;width:251px');
  const CW = 277, CH = 166, PAD = 24;
  // a sharp and a pre-blurred copy of each card: depth of field is a cross-fade, not an animated filter
  const cards = [0, 1, 2].map((i) => { const c = el('div', 'lu-card', '', I); el('div', 'lu-glass', '', c); img('card' + i, c, `left:0;top:0;width:${CW + PAD * 2}px`); c.B = img('card' + i, c, `left:0;top:0;width:${CW + PAD * 2}px;filter:blur(1.6px);opacity:0`); return c; });
  const skip = img('skip', I, 'left:-8px;top:36px;width:408px');
  const titles = [1, 2, 3].map((n) => img('t' + n, I, `left:${n === 1 ? 9 : 0}px;top:657px;width:${n === 1 ? 375 : 400}px`));
  const pg = el('div', 'lu-pg', '', I); const dots = [0, 1, 2].map(() => el('span', '', '', pg));
  const t4c = el('div', 'lu-t4', '', I); const t4 = img('t4', t4c, 'left:-24px;top:55px;width:400px');
  const btn = img('btn', I, 'left:-8px;top:828px;width:409px');

  /* wallet: cards slide out of the wallet and back, on a loop */
  const WE = SCR.wempty; img('wbase', WE);
  const wcards = [0, 1, 2].map((i) => { const c = el('div', 'lu-wc', '', WE); img('wcard' + i, c, 'left:0;top:0;width:194px'); return c; });
  img('wfront', WE, 'left:45px;top:428px;width:304px');

  /* the two animations that are videos in Figma: the spinning crystal (loops) and the setup progress 0 → 100% (plays once) */
  const VIDS = [];
  const vid = (src, parent, css, loop) => { const v = el('video', 'lu-v', css, parent); v.muted = true; v.defaultMuted = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('muted', ''); v.preload = 'auto'; v.loop = !!loop; ['mp4', 'webm'].forEach((t) => { const so = document.createElement('source'); so.src = BASE + src + '.' + t + '?v=' + V; so.type = 'video/' + t; v.appendChild(so); }); VIDS.push(v); return v; };
  const gemV = vid('gem', SCR.welcome, 'left:31px;top:352px;width:331px;height:269px', true); gemV.classList.add('lu-gem');
  const P = SCR.proc; img('proc0', P);
  const procV = vid('proc', P, 'left:80px;top:257px;width:235px;height:409px', false);
  // at 100% «Cancel setup» gives way to the primary «Continue» (the same button as on Welcome)
  const procBtn = el('div', '', 'left:0;top:763px;width:393px;height:54px;overflow:hidden;opacity:0', P); img('welcome', procBtn, 'top:-763px');

  const tapD = el('div', 'dot lu-dot');
  const hsL = el('div', '', `left:0;top:0;width:${W}px;height:${H}px;z-index:70;pointer-events:none`);

  /* ── fit the 393×852 stage into the screen ── */
  let K = 1;
  const fit = () => { K = scr.clientWidth / W; stage.style.transform = `scale(${K})`; };
  new ResizeObserver(fit).observe(scr); fit();

  /* ── run control ── */
  let runId = 0, paused = false, seen = true, live = false;
  const ABORT = Symbol('abort');
  const anims = new Set();
  const A = (node, kf, ms, easing, fill, delay) => { const a = node.animate(kf, { duration: dur(ms), delay: dur(delay || 0), easing: easing || PUSH, fill: fill || 'forwards' }); anims.add(a); a.finished.catch(() => {}).then(() => anims.delete(a)); if (paused || !seen) a.pause(); return a; };
  const done = (a) => a.finished.catch(() => {});
  const holdAll = (on) => anims.forEach((a) => { try { on ? a.pause() : a.play(); } catch (e) {} });
  function sleep(ms, id) {
    return new Promise((res, rej) => { let left = dur(ms), last = performance.now();
      const f = (now) => { if (id !== undefined && id !== runId) return rej(ABORT); if (!paused && seen) left -= now - last; last = now; if (left <= 0) res(); else requestAnimationFrame(f); };
      requestAnimationFrame(f); });
  }
  // commit an animation's end state as inline style, so the next keyframe starts from it
  const commit = (a) => { try { a.commitStyles(); } catch (e) {} try { a.cancel(); } catch (e) {} };
  const to = async (node, props, ms, easing, delay) => { const a = A(node, [props], ms, easing, 'forwards', delay); await done(a); if (anims.has(a) || a.playState === 'finished') commit(a); };

  /* ── keyframes from the Figma prototype: x, y, w, h, rotation°, opacity, layer blur ── */
  const KF = {
    stack: [[397, 422, 277, 166, 0, 1, 0], [394, 177, 277, 166, 0, 1, 0], [-280, 95, 277, 166, 0, 1, 0]],
    i1: [[90, 247, 277, 166, -11, 1, 3], [65, 232, 277, 166, -4.3, 1, 2], [43, 226, 277, 166, 0, 1, 0]],
    i2: [[47, 340, 277, 166, 5, 1, 3], [66, 237, 277, 166, -9.2, 1, 2], [43, 191, 277, 166, 5.8, 1, 0]],
    i3: [[143, 323, 87.2, 52.3, 5, 0, 0], [149, 313, 87.2, 52.3, -9.2, 0, 0], [59, 273, 276.3, 165.6, 0, 1, 0]],
    i4: [[143, 323, 87.2, 52.3, 5, 0, 0], [149, 313, 87.2, 52.3, -9.2, 0, 0], [193, 367, 5.3, 3.2, 0, 0, 0]],
  };
  // Figma rotates around the layer's top-left corner, counter-clockwise; CSS gets the centre and a clockwise angle
  function cardCss([x, y, w, h, r, o, b], bw, bh) {
    const t = (r * Math.PI) / 180, c = Math.cos(t), s = Math.sin(t);
    const cx = x + (c * w) / 2 + (s * h) / 2, cy = y - (s * w) / 2 + (c * h) / 2;
    return { transform: `translate3d(${cx - (bw + PAD * 2) / 2}px,${cy - (bh + PAD * 2) / 2}px,0) rotate(${-r}deg) scale(${w / bw})`, opacity: o, b: b };
  }
  const setCards = (k) => cards.forEach((c, i) => { const { b, ...st } = cardCss(KF[k][i], CW, CH); Object.assign(c.style, st); c.B.style.opacity = b / 3; });
  const moveCards = (k, ms, easing) => Promise.all(cards.map((c, i) => { const { b, ...st } = cardCss(KF[k][i], CW, CH); to(c.B, { opacity: b / 3 }, ms, easing); return to(c, st, ms, easing); }));
  // pagination: x and width of each dot
  const PG = { 1: [[0, 29], [33, 6], [43, 6]], 2: [[0, 6], [10, 29], [43, 6]], 3: [[0, 6], [10, 6], [20, 29]] };
  const setDots = (n) => dots.forEach((d, i) => { d.style.left = PG[n][i][0] + 'px'; d.style.width = PG[n][i][1] + 'px'; d.classList.toggle('on', PG[n][i][1] > 6); });
  const moveDots = (n, ms, easing) => Promise.all(dots.map((d, i) => { d.classList.toggle('on', PG[n][i][1] > 6); return to(d, { left: PG[n][i][0] + 'px', width: PG[n][i][1] + 'px' }, ms, easing); }));

  // wallet loop: a (cards in the pocket) ↔ b (fanned out above it)
  const WK = { a: [[117, 458, 145.2, 87, 0], [124, 459, 145.2, 87, 0], [123, 459, 145.2, 87, 0]], b: [[111, 306, 145.2, 87, 9.3], [140, 335, 145.2, 87, 1.8], [116, 392, 145.2, 87, 11]] };
  const wcss = ([x, y, w, h, r]) => { const { b, ...st } = cardCss([x, y, w, h, r, 1, 0], 145.2, 87); return st; };
  const setW = (k) => wcards.forEach((c, i) => Object.assign(c.style, wcss(WK[k][i])));
  let wRun = 0;
  async function walletLoop() {
    const my = ++wRun; let k = 'a';
    setW('a');
    try {
      await sleep(800);
      while (my === wRun) {
        const n = k === 'a' ? 'b' : 'a';
        await Promise.all(wcards.map((c, i) => to(c, wcss(WK[n][i]), n === 'b' ? 1020 : 1000, n === 'b' ? GENTLE : EOUT, i * 70)));
        k = n; await sleep(k === 'b' ? 1100 : 800);
      }
    } catch (e) {}
  }

  /* ── state ── */
  let stack = ['intro'], phase = 'splash', procDone = false;
  const cur = () => stack[stack.length - 1];
  const steps = [...root.querySelectorAll('.okp-steps li')];
  function mark() {
    const c = cur();
    const k = c === 'intro' ? (phase === 'splash' ? 'splash' : 'intro') : c === 'addwp' ? 'addw' : c === 'signup' || c === 'welcome' || c === 'prefs' ? 'signup' : c === 'prov' || c === 'paypal' ? 'prov' : c;
    steps.forEach((li) => li.classList.toggle('on', li.dataset.s === k));
  }
  function show(k, on) { SCR[k].classList.toggle('on', on); }

  function resetIntro() {
    logo.style.cssText = 'opacity:1;transform:none'; ring.style.cssText += ';opacity:0;transform:rotate(-120deg)'; wordC.style.clipPath = 'inset(0 100% 0 0)';
    setCards('stack'); cards.forEach((c) => (c.style.opacity = 0));
    skip.style.opacity = 0; titles.forEach((t) => (t.style.opacity = 0)); pg.style.opacity = 0; setDots(1);
    t4.style.transform = 'none'; btn.style.transform = 'none';
  }
  function resetProc() {
    try { procV.pause(); procV.currentTime = 0; } catch (e) {} procBtn.style.opacity = 0; procDone = false;
  }
  function reset() {
    anims.forEach((a) => { try { a.cancel(); } catch (e) {} }); anims.clear(); wRun++;
    for (const k of KEYS) { show(k, k === 'intro'); SCR[k].style.cssText = ''; }
    resetIntro(); resetProc(); setW('a');
    tapD.style.opacity = 0;
    stack = ['intro']; phase = 'splash'; mark(); hotspots();
  }

  /* ── intro timeline: logo → card stack flies in → 3 steps → «Everything in one calm place» ── */
  async function splash(id) {
    phase = 'splash'; mark();
    to(ring, { opacity: 1, transform: 'rotate(0deg)' }, 1400, SLOW);
    await sleep(250, id);
    await to(wordC, { clipPath: 'inset(0 0% 0 0)' }, 1100, EOUT);
    await sleep(500, id);
    await to(logo, { transform: 'translateX(37px)' }, 900, EOUT); // Logo 1 → Logo 2
    await sleep(350, id);
  }
  async function intro1(id) {
    phase = 'intro'; mark();
    to(logo, { opacity: 0, transform: 'translateX(37px) scale(.92)' }, 700, EOUT);
    cards.forEach((c) => (c.style.opacity = 1));
    const m = moveCards('i1', 1250, SLOW);
    to(skip, { opacity: 1 }, 600, EOUT, 500); to(titles[0], { opacity: 1 }, 700, EOUT, 550); to(pg, { opacity: 1 }, 600, EOUT, 550);
    await m; hotspots();
  }
  async function introStep(n, id) {
    const ms = n === 3 ? 600 : 1250, ease = n === 3 ? EOUT : SLOW;
    const m = moveCards('i' + n, ms, ease);
    to(titles[n - 2], { opacity: 0 }, Math.min(ms, 600), EOUT); to(titles[n - 1], { opacity: 1 }, Math.min(ms, 700), EOUT, 120);
    moveDots(n, ms, ease);
    await m;
  }
  async function intro4(id) {
    const m = moveCards('i4', 1000, EOUT);
    to(skip, { opacity: 0 }, 500, EOUT); to(titles[2], { opacity: 0 }, 500, EOUT); to(pg, { opacity: 0 }, 500, EOUT);
    await m;
    await to(t4, { transform: 'translateY(-80px)' }, 1000, EOUT); // the title rises into its frame
    await to(btn, { transform: 'translateY(-87px)' }, 1000, EOUT); // «Get started» slides in
    phase = 'end'; hotspots();
  }
  async function playIntro(id) {
    resetIntro(); await sleep(500, id);
    await splash(id); await intro1(id);
    await sleep(1500, id); await introStep(2, id);
    await sleep(1500, id); await introStep(3, id);
    await sleep(1600, id); await intro4(id);
  }
  // Skip: straight to the last intro step
  async function skipIntro() {
    runId++;
    anims.forEach((a) => { try { a.cancel(); } catch (e) {} }); anims.clear();
    resetIntro(); setCards('i4'); cards.forEach((c) => (c.style.opacity = 0)); logo.style.opacity = 0;
    phase = 'intro';
    await to(t4, { transform: 'translateY(-80px)' }, 800, EOUT);
    await to(btn, { transform: 'translateY(-87px)' }, 800, EOUT);
    phase = 'end'; hotspots();
  }

  /* ── transitions ── */
  async function push(toK) {
    const a = SCR[cur()], b = SCR[toK]; b.style.transform = `translateX(${W}px)`; show(toK, true); b.style.zIndex = 2; a.style.zIndex = 1;
    if (toK === 'wempty') walletLoop();
    await raf2(); b.style.transform = '';
    const x = A(b, [{ transform: `translateX(${W}px)`, boxShadow: '-12px 0 24px rgba(0,0,0,.4)' }, { transform: 'none', boxShadow: '-12px 0 24px rgba(0,0,0,0)' }], 460);
    A(a, [{ transform: 'none', filter: 'brightness(1)' }, { transform: 'translateX(-117px)', filter: 'brightness(.6)' }], 460);
    const from = cur(); stack.push(toK); mark(); await done(x);
    show(from, false); a.getAnimations().forEach((q) => q.cancel()); b.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; a.style.zIndex = '';
    if (from === 'wempty') wRun++;
    hotspots();
  }
  async function pop() {
    const from = cur(); const toK = stack[stack.length - 2]; if (!toK) return;
    const real = toK === 'addwp' ? 'addw' : toK;
    const a = SCR[from], b = SCR[real]; show(real, true); a.style.zIndex = 2; b.style.zIndex = 1; await raf2();
    if (real === 'wempty') walletLoop();
    A(b, [{ transform: 'translateX(-117px)', filter: 'brightness(.6)' }, { transform: 'none', filter: 'brightness(1)' }], 420);
    const x = A(a, [{ transform: 'none' }, { transform: `translateX(${W}px)` }], 420);
    stack.pop(); if (toK === 'addwp') stack[stack.length - 1] = 'addw'; mark();
    await done(x); show(from, false); if (from === 'proc') resetProc();
    a.getAnimations().forEach((q) => q.cancel()); b.getAnimations().forEach((q) => q.cancel()); a.style.zIndex = ''; b.style.zIndex = ''; hotspots();
  }
  async function swap(toK, ms) {
    const a = SCR[cur()], b = SCR[toK]; show(toK, true); b.style.zIndex = 2;
    const x = A(b, [{ opacity: 0 }, { opacity: 1 }], ms || 140, 'linear');
    stack[stack.length - 1] = toK; mark(); await done(x); show(a.dataset.s, false); b.getAnimations().forEach((q) => q.cancel()); b.style.zIndex = ''; hotspots();
  }
  // processing: the screen recording from Figma plays once, 0 → 100%, and stays on the last frame
  async function processing(id) {
    resetProc();
    await new Promise((res, rej) => {
      const f = () => {
        if (id !== undefined && id !== runId) { procV.pause(); return rej(ABORT); }
        if (cur() !== 'proc') { procV.pause(); return res(); }
        if (paused || !seen) { if (!procV.paused) procV.pause(); }
        else if (procV.paused && !procV.ended) procV.play().catch(() => {});
        if (procV.ended || (procV.duration && procV.currentTime >= procV.duration - 0.05)) return res();
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    if (cur() === 'proc') { await to(procBtn, { opacity: 1 }, 320, EOUT); procDone = true; hotspots(); }
  }

  // the crystal spins only while Welcome is on screen and the prototype is playing
  function syncVideos() {
    const on = SCR.welcome.classList.contains('on') && !paused && seen;
    if (on && gemV.paused) gemV.play().catch(() => {}); else if (!on && !gemV.paused) gemV.pause();
    if ((paused || !seen) && !procV.paused) procV.pause();
  }
  setInterval(syncVideos, 250);

  /* ── finger feedback ── */
  async function tap(x, y) {
    tapD.style.left = x + 'px'; tapD.style.top = y + 'px';
    await done(A(tapD, [{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(.9)', offset: 0.35 }, { opacity: 1, transform: 'scale(1)', offset: 0.6 }, { opacity: 0, transform: 'scale(1.15)' }], 520, 'ease-out', 'none'));
  }
  async function press(x, y, w, h, r, light) {
    const p = el('div', 'lu-p' + (light ? ' lt' : ''), `left:${x}px;top:${y}px;width:${w}px;height:${h}px;border-radius:${r}px`);
    await done(A(p, [{ opacity: 0 }, { opacity: 1, offset: 0.3 }, { opacity: 0 }], 360, 'ease-out', 'none')); p.remove();
  }
  const BTN = (y, light) => [16, y, 361, 50, 25, light];

  /* ── hotspots: [x, y, w, h, label, action] ── */
  const goProc = async () => { await push('proc'); await processing(); };
  const HS = {
    intro: () => (phase === 'end' ? [[16, 765, 361, 50, 'Get started', () => push('signup')]] : phase === 'intro' ? [[300, 60, 90, 50, 'Skip', () => skipIntro()]] : []),
    signup: [[16, 352, 361, 48, 'Continue with Apple', () => push('welcome')], [16, 417, 361, 48, 'Continue with Google', () => push('welcome')], [16, 483, 361, 48, 'Continue with Email', () => push('welcome')]],
    welcome: [[16, 765, 361, 50, 'Continue', () => push('prefs')]],
    prefs: [[16, 765, 361, 50, 'Continue', () => push('wempty')]],
    wempty: [[16, 699, 361, 50, 'Connect a wallet', () => push('addw')]],
    addw: [[6, 92, 44, 40, 'Back', () => pop()], [16, 290, 361, 54, 'Digital wallet', async () => { await swap('addwp'); await sleep(260); await push('prov'); }]],
    prov: [[6, 92, 44, 40, 'Back', () => pop()], [16, 218, 361, 54, 'PayPal', () => push('paypal')]],
    paypal: [[6, 92, 44, 40, 'Back', () => pop()], [16, 699, 361, 50, 'Connect with PayPal', goProc], [16, 765, 361, 50, 'Cancel', () => pop()]],
    proc: () => (procDone ? [[16, 765, 361, 50, 'Continue', async () => { reset(); await sleep(200); liveStart(); }]] : [[16, 765, 361, 50, 'Cancel setup', () => pop()]]),
  };
  function hotspots(off) {
    hsL.innerHTML = '';
    if (!live || off) return;
    const h = HS[cur()]; const list = typeof h === 'function' ? h() : h || [];
    list.forEach(([x, y, w, hh, label, go]) => {
      const b = el('button', 'hs', `left:${x}px;top:${y}px;width:${w}px;height:${hh}px;pointer-events:auto`, hsL); b.type = 'button'; b.setAttribute('aria-label', L(label));
      b.addEventListener('click', async (e) => { e.stopPropagation(); if (busy) return; busy = true; hsL.innerHTML = ''; tapAtEvent(e); try { await go(); } catch (er) { if (er !== ABORT) throw er; } finally { busy = false; hotspots(); } });
    });
  }
  let busy = false;
  function tapAtEvent(e) { const r = stage.getBoundingClientRect(); const x = (e.clientX - r.left) / K, y = (e.clientY - r.top) / K; if (e.clientX || e.clientY) tap(x, y); }
  stage.addEventListener('click', () => { if (!live || busy) return; stage.classList.add('flash'); setTimeout(() => stage.classList.remove('flash'), 600); });

  /* ── autoplay: the whole path, on a loop ── */
  async function autoplay() {
    const id = ++runId; const S = (ms) => sleep(ms, id);
    const T = async (b, x, y) => { press(...b); await tap(x, y); };
    try {
      for (;;) {
        reset(); await playIntro(id); await S(1400);
        await T(BTN(765, 1), 196, 790); await push('signup'); await S(1300);
        await T([16, 352, 361, 48, 24, 1], 196, 376); await push('welcome'); await S(3000);
        await T(BTN(765, 1), 196, 790); await push('prefs'); await S(1500);
        await T(BTN(765, 1), 196, 790); await push('wempty'); await S(3800);
        await T(BTN(699, 1), 196, 724); await push('addw'); await S(1000);
        await tap(196, 317); await swap('addwp'); await S(350); await push('prov'); await S(1100);
        await T([16, 218, 361, 54, 14], 196, 245); await push('paypal'); await S(1500);
        await T(BTN(699, 1), 196, 724); await push('proc'); await processing(id); await S(1500);
        await T(BTN(765, 1), 196, 790); await S(500);
        if (id !== runId) return;
      }
    } catch (e) { if (e !== ABORT) throw e; }
  }

  /* ── controls ── */
  const tryB = root.querySelector('[data-try]'), ppB = root.querySelector('[data-pp]');
  async function liveStart() { const id = ++runId; try { await playIntro(id); } catch (e) { if (e !== ABORT) throw e; } }
  function setLive(on) {
    live = on; runId++; tryB.setAttribute('aria-pressed', on); tryB.textContent = on ? root.dataset.lAuto : root.dataset.lTry;
    phone.classList.toggle('live', on); ppB.hidden = on; paused = false; ppB.textContent = root.dataset.lPause;
    reset();
    if (on) { hint.textContent = root.dataset.lHint; if (RM) { setCards('i4'); skipIntro(); } else liveStart(); }
    else { hint.textContent = ''; if (!RM) autoplay(); }
  }
  tryB.onclick = () => setLive(!live);
  ppB.onclick = () => { paused = !paused; ppB.textContent = paused ? root.dataset.lPlay : root.dataset.lPause; holdAll(paused); syncVideos(); };
  new IntersectionObserver((es) => { seen = es[0].isIntersecting; holdAll(!seen || paused); syncVideos(); }, { threshold: 0.25 }).observe(phone);
  reset(); ready().then(() => { if (RM) setLive(true); else autoplay(); });
})();
