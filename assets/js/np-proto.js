/* Nova Poshta business cabinet – clickable prototype with autoplay.
   Screens are exported from the team's Figma prototype (1440 wide); hotspots follow its links. */
(function () {
  const SRC = document.currentScript && document.currentScript.src;
  const root = document.querySelector('[data-npp]');
  if (!root) return;
  const LANG = root.dataset.lang === 'ua' ? 'ua' : 'en';
  const BASE = new URL(root.dataset.img || '../cases/nova-poshta/proto/', SRC || location.href);
  const T = (ua, en) => (LANG === 'en' ? en : ua);
  const W = 1440, H = 1024;
  const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // full screens: h = frame height; pops: overlay size
  const SCR = {
    old: { h: 1024 }, main: { h: 1024 }, s1a: { h: 1146 }, s1b: { h: 1146 }, s1c: { h: 1146 }, s2: { h: 1127 },
    s3a: { h: 1024 }, s3k: { h: 1024 }, s3kp: { h: 1024 }, s3b: { h: 1100 }, s4a: { h: 1024 }, s4k: { h: 1024 },
    s4ck: { h: 1024 }, s4l: { h: 1024 }, s4lp: { h: 1024 }, s4b: { h: 1024 }, s4c: { h: 1024 }, s5a: { h: 1024 },
    s5b: { h: 1024 }, s6a: { h: 1322 }, s6b: { h: 1322 }, s7: { h: 1024 }, p1: { h: 1024 }, p4: { h: 1024 },
    p5: { h: 1024 }, drafts: { h: 1024 },
  };
  const POP = { newpop: { base: 'old', w: 486, h: LANG === 'en' ? 312 : 264 }, okpop: { base: 'p5', w: 486, h: LANG === 'en' ? 317 : 311 } };
  for (const p of Object.values(POP)) { p.x = (W - p.w) / 2; p.y = Math.round((H - p.h) / 2); }

  const STEP = { old: 'old', newpop: 'old', main: 'main', s1a: 's1', s1b: 's1', s1c: 's1', s2: 's2', s3a: 's3', s3k: 's3', s3kp: 's3', s3b: 's3',
    s4a: 's4', s4k: 's4', s4ck: 's4', s4l: 's4', s4lp: 's4', s4b: 's4', s4c: 's4', s5a: 's5', s5b: 's5', s6a: 's6', s6b: 's6', s7: 's7',
    p1: 'pay', p4: 'pay', p5: 'pay', okpop: 'pay', drafts: 'drafts' };
  const URL_ = { old: 'business.novaposhta.ua/shipments', main: 'business.novaposhta.ua', drafts: 'business.novaposhta.ua/drafts', p1: 'business.novaposhta.ua/pay', p4: 'business.novaposhta.ua/pay', p5: 'business.novaposhta.ua/pay' };
  const url = (k) => URL_[k] || 'business.novaposhta.ua/shipments/new';

  // hotspots [x, y, w, h, label, target]; target '<' closes the popup
  const BACK = [884, 478, 142, 51, T('Назад', 'Back')];
  const HS = {
    old: [[0, 0, W, H, T('Кабінет', 'Cabinet'), 'newpop']],
    newpop: [[32, LANG === 'en' ? 168 : 126, 422, 46, T('Перейти до оновленої версії', 'Switch to the updated version'), 'main'], [32, LANG === 'en' ? 232 : 187, 422, 46, T('Залишитися у поточній версії', 'Stay in the current version'), '<'], [442, 8, 36, 36, T('Закрити', 'Close'), '<']],
    main: [[24, 103, 278, 52, T('Створити відправлення', 'Create a shipment'), 's1a']],
    s1a: [[128, 591, 330, 64, T('Пакет фірмовий 0,5 кг', 'Branded bag 0.5 kg'), 's1b']],
    s1b: [[128, 941, 668, 31, T('Що відправляєте', 'What you send'), 's1c']],
    s1c: [[884, 478, 428, 51, T('Продовжити', 'Continue'), 's2']],
    s2: [[1034, 478, 278, 51, T('Продовжити', 'Continue'), 's3a'], [...BACK, 's1c']],
    s3a: [[128, 328, 668, 39, T('Вибрати відділення', 'Choose a branch'), 's3k'], [...BACK, 's2']],
    s3k: [[0, 453, 400, 156, T('Відділення 345', 'Branch 345'), 's3kp'], [1206, 107, 24, 24, T('Закрити', 'Close'), 's3a']],
    s3kp: [[24, 955, 352, 45, T('Обрати', 'Select'), 's3b'], [1206, 107, 24, 24, T('Закрити', 'Close'), 's3a']],
    s3b: [[1034, 478, 278, 51, T('Продовжити', 'Continue'), 's4a'], [...BACK, 's2']],
    s4a: [[128, 328, 668, 39, T('Вибрати відділення', 'Choose a branch'), 's4k'], [...BACK, 's3b']],
    s4k: [[10, 164, 150, 40, T('Змінити місто', 'Change the city'), 's4ck'], [1206, 107, 24, 24, T('Закрити', 'Close'), 's4a']],
    s4ck: [[1040, 289, 400, 65, T('Львів', 'Lviv'), 's4l'], [1396, 106, 24, 24, T('Закрити', 'Close'), 's4k']],
    s4l: [[0, 297, 400, 138, T('Відділення 77', 'Branch 77'), 's4lp'], [1206, 107, 24, 24, T('Закрити', 'Close'), 's4a']],
    s4lp: [[24, 955, 352, 45, T('Обрати', 'Select'), 's4b'], [1206, 107, 24, 24, T('Закрити', 'Close'), 's4a']],
    s4b: [[128, 762, 668, 183, T('Дані одержувача', 'Recipient details'), 's4c'], [...BACK, 's3b']],
    s4c: [[1034, 478, 278, 51, T('Продовжити', 'Continue'), 's5a'], [...BACK, 's3b']],
    s5a: [[128, 345, 330, 49, T('Оплата відправником', 'Paid by the sender'), 's5b'], [1034, 551, 278, 51, T('Продовжити', 'Continue'), 's6a']],
    s5b: [[1034, 551, 278, 51, T('Продовжити', 'Continue'), 's6a'], [128, 288, 330, 49, T('Оплата одержувачем', 'Paid by the recipient'), 's5a']],
    s6a: [[1280, 560, 40, 40, T('Погоджуюсь з умовами', 'I agree to the terms'), 's6b'], [884, 657, 142, 51, T('Назад', 'Back'), 's5b']],
    s6b: [[1034, 657, 278, 51, T('Створити відправлення', 'Create the shipment'), 's7'], [1280, 560, 40, 40, T('Зняти згоду', 'Uncheck the terms'), 's6a']],
    s7: [[524, 714, 393, 49, T('Оплатити', 'Pay'), 'p1'], [336, 634, 192, 48, T('Створити ще', 'Create another'), 's1a'], [720, 634, 192, 48, T('До чернеток', 'To drafts'), 'drafts']],
    p1: [[778, 369, 292, 166, T('Картка', 'Card'), 'p4'], [321, 489, 311, 48, 'Apple Pay', 'okpop'], [321, 561, 311, 48, 'Google Pay', 'okpop']],
    p4: [[778, 567, 292, 48, T('Дані картки', 'Card details'), 'p5']],
    p5: [[778, 639, 292, 48, T('Сплатити', 'Pay'), 'okpop']],
    okpop: [[32, 174, 422, 46, T('Перейти до чернеток', 'Go to drafts'), 'drafts'], [32, LANG === 'en' ? 238 : 234, 422, 46, T('Повернутися на головну', 'Back to the main page'), 'main'], [442, 8, 36, 36, T('Закрити', 'Close'), 'main']],
    drafts: [],
  };
  // tap points on the green button of each popup, in stage coords
  const POPTAP = { newpop: POP.newpop.y + (LANG === 'en' ? 191 : 148), okpop: POP.okpop.y + (LANG === 'en' ? 197 : 195) };
  // autoplay: [state, tapX, tapY (stage coords), pause before tap]
  const AUTO = [['old', 860, 560, 1600], ['newpop', 720, POPTAP.newpop, 1500], ['main', 163, 129, 1500], ['s1a', 293, 623, 1300], ['s1b', 462, 956, 1100],
    ['s1c', 1098, 503, 1100], ['s2', 1173, 503, 1300], ['s3a', 462, 347, 1000], ['s3k', 200, 531, 1300], ['s3kp', 200, 977, 1200],
    ['s3b', 1173, 503, 1100], ['s4a', 462, 347, 1000], ['s4k', 85, 184, 1200], ['s4ck', 1240, 321, 1100], ['s4l', 200, 366, 1200],
    ['s4lp', 200, 977, 1100], ['s4b', 462, 853, 1200], ['s4c', 1173, 503, 1200], ['s5a', 293, 369, 1300], ['s5b', 1173, 576, 1100],
    ['s6a', 1300, 580, 1500], ['s6b', 1173, 682, 900], ['s7', 720, 738, 1700], ['p1', 924, 452, 1400], ['p4', 924, 591, 1100],
    ['p5', 924, 663, 1100], ['okpop', 720, POPTAP.okpop, 1600], ['drafts', 0, 0, 2600]];

  const stage = root.querySelector('[data-stage]');
  const vp = stage.parentElement;
  const urlEl = root.querySelector('[data-url]');
  const hint = root.querySelector('[data-hint]');
  const tryBtn = root.querySelector('[data-try]');
  const ppBtn = root.querySelector('[data-pp]');
  const steps = [...root.querySelectorAll('[data-s]')];
  const el = (tag, cls, css, par) => { const n = document.createElement(tag); if (cls) n.className = cls; if (css) n.style.cssText = css; (par || stage).appendChild(n); return n; };
  const V = '20261108'; const src = (k) => new URL(`${LANG}-${k}.webp?v=${V}`, BASE).href;

  // layers are created lazily; next screens are prefetched
  const L = {};
  function layer(k) {
    if (L[k]) return L[k];
    const d = el('div', 'npp-L', `height:${H}px`);
    const im = el('img', '', 'left:0;top:0;width:1440px', d); im.alt = ''; im.decoding = 'async'; if (window.imgset) window.imgset(im, BASE, LANG + '-' + k, '?v=' + V); im.src = src(k);
    L[k] = { d, im, y: 0, max: Math.max(0, SCR[k].h - H) };
    return L[k];
  }
  const pre = new Set();
  function prefetch(k) { const i = AUTO.findIndex((a) => a[0] === k); for (const a of AUTO.slice(i + 1, i + 4)) { const n = a[0]; if (pre.has(n)) continue; pre.add(n); const im = new Image(); im.src = src(n); } }
  const scrim = el('div', 'npp-scrim');
  const popBox = el('div', 'npp-pop');
  const popImg = el('img', '', 'left:0;top:0;width:486px', popBox); popImg.alt = '';
  const dot = el('div', 'npp-dot');
  const hsWrap = el('div', '', 'left:0;top:0;width:1440px;height:1024px;z-index:70');

  let cur = 'old', pop = null, auto = !RM, playing = !RM, busy = false, timer = null, token = 0;

  function fit() { stage.style.transform = `scale(${vp.clientWidth / W})`; }
  new ResizeObserver(fit).observe(vp); fit();

  function mark() {
    const s = STEP[pop || cur];
    steps.forEach((li) => li.classList.toggle('on', li.dataset.s === s));
    if (urlEl) urlEl.textContent = url(cur);
  }
  function setScroll(k, y) { const l = layer(k); l.y = Math.max(0, Math.min(l.max, y)); l.im.style.transform = `translateY(${-l.y}px)`; }
  const fade = (n, a, b, ms) => n.animate([{ opacity: a }, { opacity: b }], { duration: RM ? 1 : ms, easing: 'ease', fill: 'forwards' }).finished;

  async function go(to, ms = 320) {
    if (POP[to]) return openPop(to);
    if (pop) await closePop(true);
    const a = layer(cur), b = layer(to);
    setScroll(to, 0);
    if (to === cur) return;
    b.d.style.zIndex = 2; b.d.classList.add('on'); a.d.style.zIndex = 1;
    await fade(b.d, 0, 1, ms);
    a.d.classList.remove('on'); a.d.getAnimations().forEach((x) => x.cancel());
    cur = to; prefetch(to); mark(); hotspots();
  }
  async function openPop(k) {
    if (cur !== POP[k].base) await go(POP[k].base, 200);
    pop = k; const p = POP[k];
    if (window.imgset) window.imgset(popImg, BASE, LANG + '-' + k, '?v=' + V); popImg.src = src(k); Object.assign(popBox.style, { left: p.x + 'px', top: p.y + 'px', width: p.w + 'px', height: p.h + 'px', visibility: 'visible' });
    fade(scrim, 0, 0.4, 260); await fade(popBox, 0, 1, 260); mark(); hotspots();
  }
  async function closePop(quick) {
    if (!pop) return; pop = null;
    fade(scrim, 0.4, 0, quick ? 120 : 220); await fade(popBox, 1, 0, quick ? 120 : 220); popBox.style.visibility = 'hidden'; mark(); hotspots();
  }
  function hotspots() {
    hsWrap.textContent = '';
    if (auto) return;
    const list = HS[pop || cur] || [];
    const off = pop ? POP[pop] : { x: 0, y: 0 };
    const sy = pop ? 0 : layer(cur).y;
    for (const [x, y, w, h, lab, to] of list) {
      const b = el('button', 'npp-hs', `left:${x + off.x}px;top:${y + off.y - sy}px;width:${w}px;height:${h}px`, hsWrap);
      b.type = 'button'; b.setAttribute('aria-label', lab);
      b.addEventListener('click', () => { if (busy) return; busy = true; (to === '<' ? closePop() : go(to)).then(() => { busy = false; }); });
    }
    if (!pop && cur === 'drafts') {
      const b = el('button', 'npp-hs', 'left:0;top:0;width:1440px;height:1024px', hsWrap); b.type = 'button';
      b.setAttribute('aria-label', T('Почати спочатку', 'Start over'));
      b.addEventListener('click', () => reset());
    }
  }
  // wheel scroll for screens taller than the viewport
  vp.addEventListener('wheel', (e) => {
    if (auto || pop) return; const l = layer(cur); if (!l.max) return;
    const ny = Math.max(0, Math.min(l.max, l.y + e.deltaY / (vp.clientWidth / W)));
    if (ny === l.y) return; e.preventDefault(); setScroll(cur, ny); hotspots();
  }, { passive: false });

  const sleep = (ms, t) => new Promise((r, j) => { timer = setTimeout(() => (t === token ? r() : j()), ms); });
  async function tap(x, y, t) {
    Object.assign(dot.style, { left: x + 'px', top: y + 'px' });
    await dot.animate([{ opacity: 0, transform: 'scale(.6)' }, { opacity: 1, transform: 'scale(1)', offset: 0.4 }, { opacity: 0, transform: 'scale(1.4)' }], { duration: 520, easing: 'ease-out' }).finished;
    if (t !== token) throw 0;
  }
  function reset() {
    for (const k of Object.keys(L)) { L[k].d.classList.remove('on'); L[k].d.style.opacity = ''; L[k].d.getAnimations().forEach((x) => x.cancel()); setScroll(k, 0); }
    pop = null; popBox.style.visibility = 'hidden'; scrim.getAnimations().forEach((x) => x.cancel()); scrim.style.opacity = 0;
    cur = 'old'; layer('old').d.classList.add('on'); layer('old').d.style.opacity = 1; prefetch('old'); mark(); hotspots();
  }
  async function run() {
    const t = ++token;
    try {
      for (;;) {
        reset();
        for (let i = 0; i < AUTO.length; i++) {
          const [k, x, y, wait] = AUTO[i];
          await sleep(wait, t);
          if (k === 'drafts') break;
          await tap(x, y, t);
          await go(AUTO[i + 1][0]);
          if (t !== token) return;
        }
      }
    } catch (e) { /* stopped */ }
  }
  function stop() { token++; clearTimeout(timer); }

  tryBtn.addEventListener('click', () => {
    auto = !auto; stop();
    tryBtn.setAttribute('aria-pressed', String(!auto));
    tryBtn.textContent = auto ? root.dataset.lTry : root.dataset.lAuto;
    ppBtn.hidden = !auto;
    hint.textContent = auto ? '' : root.dataset.lHint;
    if (auto) { playing = true; ppBtn.textContent = root.dataset.lPause; run(); } else { reset(); }
  });
  ppBtn.addEventListener('click', () => {
    playing = !playing; ppBtn.textContent = playing ? root.dataset.lPause : root.dataset.lPlay;
    if (playing) run(); else stop();
  });

  reset();
  if (RM) { auto = false; tryBtn.setAttribute('aria-pressed', 'true'); tryBtn.textContent = root.dataset.lAuto; ppBtn.hidden = true; hint.textContent = root.dataset.lHint; hotspots(); }
  else {
    // start when the prototype scrolls into view
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { io.disconnect(); if (auto && playing) run(); } }, { threshold: 0.3 });
    io.observe(root);
  }
})();
