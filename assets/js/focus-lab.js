/* Focus, round 2: the same three tabs, but the scenes live.
   Architecture – a tree grows from the root, then one real flow runs along it.
   States – a processing ring that actually runs, nine states, loops back on error and timeout.
   Accessibility – four tokens feed one card; it repaints and reflows, the contrast ratio is recomputed, focus walks the card.
   Scenes are built from the JSON next to each stage, so the three languages share one engine. */
(function(){
  var sec = document.querySelector('.focus'); if (!sec) return;
  var stages = [].slice.call(sec.querySelectorAll('.fz-stage')); if (!stages.length) return;
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var NS = 'http://www.w3.org/2000/svg';
  var C = { lime:'#B5D640', violet:'#6C58CE', green:'#1C7154', ok:'#4FD18B', err:'#E5484D', warn:'#F5A524', off:'#8B9BB4', cancel:'#B8B8C2', limit:'#FF8A65', empty:'#9C8CFF', white:'#F4F4F6' };

  /* ---------- helpers ---------- */
  function el(tag, a, parent){ var e = document.createElementNS(NS, tag); for (var k in a) if (a[k] != null) e.setAttribute(k, a[k]); if (parent) parent.appendChild(e); return e; }
  function ease(t){ return t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2; }
  function out(t){ return 1 - Math.pow(1 - t, 3); }
  function Ctx(){ this.dead = false; }
  function tween(ctx, dur, fn, e){ e = e || ease; return new Promise(function(res){ var s = performance.now(); (function f(now){ if (ctx.dead){ res(false); return; } var t = Math.min(1, (now - s) / dur); fn(e(t), t); if (t < 1) requestAnimationFrame(f); else res(true); })(s); }); }
  function wait(ctx, ms){ return new Promise(function(res){ setTimeout(function(){ res(!ctx.dead); }, ms); }); }
  function glow(c){ sec.style.setProperty('--glow', c); }

  /* a wire: drawn with dashoffset; a signal head can run along it */
  function wire(svg, d, cls){ var p = el('path', { d:d, 'class':'fz-w ' + (cls || '') }, svg.lines); var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p._L = L; return p; }
  function draw(ctx, p, dur, color, head){ p.style.setProperty('--c', color || ''); p.classList.add('on'); return tween(ctx, dur, function(k){ p.style.strokeDashoffset = p._L * (1 - k); if (head){ var pt = p.getPointAtLength(p._L * k); head.setAttribute('transform', 'translate(' + pt.x + ' ' + pt.y + ')'); head.classList.add('on'); } }, out); }
  function undraw(ctx, p, dur){ return tween(ctx, dur, function(k){ p.style.strokeDashoffset = p._L * k; }, ease).then(function(ok){ if (ok) p.classList.remove('on'); return ok; }); }
  function head(svg, color){ var g = el('g', { 'class':'fz-hd' }, svg.top); el('circle', { r:10, 'class':'hd-glow' }, g); el('circle', { r:2.6, 'class':'hd-core' }, g); if (color) g.style.setProperty('--c', color); return g; }
  /* a node: box + label, pops in with scale */
  function node(svg, x, y, w, h, label, cls){ var g = el('g', { 'class':'fz-nd ' + (cls || ''), transform:'translate(' + x + ' ' + y + ')' }, svg.nodes); var ig = el('g', { 'class':'ig' }, g); el('rect', { x:-w/2, y:-h/2, width:w, height:h }, ig); var t = el('text', { x:0, y:0, 'text-anchor':'middle', 'dominant-baseline':'central' }, ig); t.textContent = ''; g._label = label; g._t = t; g._x = x; g._y = y; return g; }
  function pop(g){ g.classList.add('in'); }
  function unpop(g){ g.classList.remove('in', 'lit', 'dim'); if (g._t) g._t.textContent = ''; }
  function type(ctx, g, dur){ var s = g._label, t = g._t; return tween(ctx, dur || 260, function(k){ t.textContent = s.slice(0, Math.ceil(s.length * k)); }, function(x){ return x; }); }
  function ring(svg, x, y, r){ var g = el('g', { 'class':'fz-ring', transform:'translate(' + x + ' ' + y + ')' }, svg.nodes); el('circle', { r:r, 'class':'rg' }, g); var a = el('circle', { r:r, 'class':'ra', transform:'rotate(-90)' }, g); var L = 2 * Math.PI * r; a.style.strokeDasharray = L; a.style.strokeDashoffset = L; a._L = L; g._a = a; return g; }
  function setRing(g, k){ g._a.style.strokeDashoffset = g._a._L * (1 - k); }
  function wave(svg, x, y, color){ var c = el('circle', { cx:x, cy:y, r:6, 'class':'fz-wave' }, svg.top); c.style.setProperty('--c', color); setTimeout(function(){ c.remove(); }, 1300); }
  function layers(svg){ svg.innerHTML = ''; svg.lines = el('g', { 'class':'fz-l lines' }, svg); svg.nodes = el('g', { 'class':'fz-l nodes' }, svg); svg.top = el('g', { 'class':'fz-l top' }, svg); svg.ui = el('g', { 'class':'fz-l ui' }, svg); }
  function mono(svg, x, y, cls, anchor){ var t = el('text', { x:x, y:y, 'class':'fz-mono ' + (cls || ''), 'text-anchor':anchor || 'start' }, svg.ui); return t; }
  function typeTo(ctx, t, s, dur){ return tween(ctx, dur || Math.max(400, s.length * 30), function(k){ t.textContent = s.slice(0, Math.ceil(s.length * k)) + (k < 1 ? '▍' : ''); }, function(x){ return x; }); }

  /* ---------- scene 1: architecture ---------- */
  function Arch(stage, cfg){
    var svg = stage.querySelector('svg'); layers(svg); this.svg = svg; this.cfg = cfg; this.stage = stage;
    var s = this;
    var RX = 300, RY = 76, BUS = 148, TX = [96, 268, 440], TY = 182, CY = [266, 326], PX = 584, PY = RY, CHY = [170, 244, 318, 392];
    s.root = node(svg, RX, RY, 124, 44, cfg.root, 'root');
    s.plus = node(svg, PX, PY, 44, 44, cfg.plus, 'plus');
    s.wPlus = wire(svg, 'M' + (RX + 62) + ' ' + RY + ' H' + (PX - 22));
    s.trunk = wire(svg, 'M' + RX + ' ' + (RY + 22) + ' V' + BUS);
    s.busL = wire(svg, 'M' + RX + ' ' + BUS + ' H' + TX[0]); s.busR = wire(svg, 'M' + RX + ' ' + BUS + ' H' + TX[2]);
    s.tabs = []; s.drops = []; s.kids = []; s.kw = [];
    cfg.tabs.forEach(function(t, i){
      s.drops.push(wire(svg, 'M' + TX[i] + ' ' + BUS + ' V' + (TY - 18)));
      s.tabs.push(node(svg, TX[i], TY, 118, 36, t[0], 'tab hit'));
      t[1].forEach(function(k, j){
        s.kw.push(wire(svg, 'M' + (TX[i] - 44) + ' ' + (TY + 18) + ' V' + CY[j] + ' H' + (TX[i] - 32), 'thin'));
        s.kids.push(node(svg, TX[i] + 24, CY[j], 112, 28, k, 'kid'));
      });
    });
    s.chain = []; s.cw = [];
    cfg.path.forEach(function(p, i){
      s.cw.push(wire(svg, 'M' + PX + ' ' + ((i ? CHY[i-1] + 16 : PY + 22)) + ' V' + (CHY[i] - 16), 'flow'));
      s.chain.push(node(svg, PX, CHY[i], 104, 32, p, 'step'));
    });
    s.cap = mono(svg, 24, 24, 'cap');
    s.hd = head(svg, C.lime);
  }
  Arch.prototype.reset = function(){ var s = this; [s.wPlus, s.trunk, s.busL, s.busR].concat(s.drops, s.kw, s.cw).forEach(function(w){ w.style.strokeDashoffset = w._L; w.classList.remove('on', 'dim'); });
    [s.root, s.plus].concat(s.tabs, s.kids, s.chain).forEach(unpop); s.cap.textContent = ''; s.hd.classList.remove('on'); s.svg.classList.remove('dimmed'); };
  Arch.prototype.still = function(){ var s = this; [s.wPlus, s.trunk, s.busL, s.busR].concat(s.drops, s.kw, s.cw).forEach(function(w){ w.style.strokeDashoffset = 0; w.classList.add('on'); });
    [s.root, s.plus].concat(s.tabs, s.kids, s.chain).forEach(function(g){ pop(g); g._t.textContent = g._label; }); var L = s.chain[s.chain.length - 1]; L.style.setProperty('--c', C.ok); L.classList.add('lit'); s.cw[s.cw.length - 1].style.setProperty('--c', C.ok); s.cap.textContent = s.cfg.path_cap; };
  Arch.prototype.run = async function(ctx){
    var s = this; glow(C.lime);
    pop(s.root); await type(ctx, s.root, 300); if (ctx.dead) return;
    await draw(ctx, s.trunk, 360, C.lime, s.hd); if (ctx.dead) return;
    s.hd.classList.remove('on');
    await Promise.all([draw(ctx, s.busL, 420, C.lime), draw(ctx, s.busR, 420, C.lime)]); if (ctx.dead) return;
    await Promise.all(s.drops.map(function(w, i){ return wait(ctx, i * 90).then(function(){ return draw(ctx, w, 260, C.lime); }); })); if (ctx.dead) return;
    for (var i = 0; i < s.tabs.length; i++){ pop(s.tabs[i]); type(ctx, s.tabs[i], 240); await wait(ctx, 110); } if (ctx.dead) return;
    await wait(ctx, 200);
    await Promise.all(s.kw.map(function(w, i){ return wait(ctx, i * 70).then(function(){ return draw(ctx, w, 300, C.lime).then(function(){ pop(s.kids[i]); return type(ctx, s.kids[i], 220); }); }); })); if (ctx.dead) return;
    await wait(ctx, 300);
    await draw(ctx, s.wPlus, 420, C.lime, s.hd); if (ctx.dead) return;
    s.hd.classList.remove('on'); pop(s.plus); type(ctx, s.plus, 120); wave(s.svg, s.plus._x, s.plus._y, C.lime);
    await wait(ctx, 900); if (ctx.dead) return;
    /* phase 2: one real flow from “+” */
    s.svg.classList.add('dimmed'); s.plus.classList.add('lit'); s.root.classList.add('lit');
    typeTo(ctx, s.cap, s.cfg.path_cap, 500);
    for (var j = 0; j < s.chain.length; j++){
      var last = j === s.chain.length - 1, col = last ? C.ok : C.lime; /* the saved record is a success state, so it gets the success green */
      await draw(ctx, s.cw[j], 420, col, s.hd); if (ctx.dead) return;
      pop(s.chain[j]); s.chain[j].style.setProperty('--c', col); s.chain[j].classList.add('lit'); await type(ctx, s.chain[j], 200); if (ctx.dead) return;
      if (last){ wave(s.svg, s.chain[j]._x, s.chain[j]._y, C.ok); glow(C.ok); }
    }
    s.hd.classList.remove('on');
    await wait(ctx, 2000); if (ctx.dead) return;
    await s.collapse(ctx);
  };
  Arch.prototype.collapse = async function(ctx){
    var s = this; s.svg.classList.remove('dimmed'); s.cap.textContent = '';
    [].concat(s.chain, s.kids, s.tabs, [s.plus, s.root]).forEach(function(g){ g.classList.remove('in', 'lit'); });
    await Promise.all([s.wPlus, s.trunk, s.busL, s.busR].concat(s.drops, s.kw, s.cw).map(function(w){ return undraw(ctx, w, 420); }));
    s.reset();
  };

  /* ---------- scene 2: states ---------- */
  function States(stage, cfg){
    var svg = stage.querySelector('svg'); layers(svg); this.svg = svg; this.cfg = cfg; this.stage = stage; var s = this;
    var CX = 150, CY = 214;
    s.core = node(svg, CX + 12, CY, 150, 48, cfg.core, 'core');
    s.core._t.setAttribute('x', -34);
    s.ring = ring(svg, CX - 46, CY, 11);
    s.checks = cfg.checks.map(function(c, i){ var t = mono(svg, CX - 62, CY + 50 + i * 20, 'check'); t.textContent = '✓  ' + c; return t; });
    var MX = 430, MY = [110, 214, 318], EX = 574, EY = [70, 150, 278, 358];
    s.main = cfg.main.map(function(m, i){ return node(svg, MX, MY[i], 124, 40, m[0], 'st hit'); });
    s.wm = MY.map(function(y){ return wire(svg, 'M' + (CX + 87) + ' ' + CY + ' H300 V' + y + ' H' + (MX - 62)); });
    s.more = cfg.more.map(function(m, i){ return node(svg, EX, EY[i], 100, 30, m[0], 'st more hit'); });
    /* second row: Offline ← Timeout, Cancelled ← Error, Limit ← Error, Empty ← Success */
    var SRC = [MY[2], MY[1], MY[1], MY[0]], EYI = [358, 150, 278, 84];
    s.more.forEach(function(g, i){ g.setAttribute('transform', 'translate(' + EX + ' ' + EYI[i] + ')'); g._y = EYI[i]; });
    s.we = SRC.map(function(y0, i){ return wire(svg, 'M' + (MX + 62) + ' ' + y0 + ' H508 V' + EYI[i] + ' H' + (EX - 50), 'thin'); });
    /* return paths: left of the main column, under everything, back into the left side of the core */
    s.loops = [ wire(svg, 'M' + (MX - 62) + ' ' + (MY[1] + 14) + ' H290 V380 H70 V' + CY + ' H' + (CX - 75), 'loop'),
                wire(svg, 'M' + MX + ' ' + (MY[2] + 20) + ' V400 H70 V' + CY + ' H' + (CX - 75), 'loop') ];
    s.counter = mono(svg, 24, 24, 'cnt'); s.desc = mono(svg, 24, 46, 'desc');
    s.hd = head(svg, C.violet);
    s.colors = [C.ok, C.err, C.warn]; s.moreColors = [C.off, C.cancel, C.limit, C.empty];
  }
  States.prototype.reset = function(){ var s = this; s.wm.concat(s.we, s.loops).forEach(function(w){ w.style.strokeDashoffset = w._L; w.classList.remove('on'); });
    s.main.concat(s.more).forEach(unpop); unpop(s.core); s.ring.classList.remove('in'); setRing(s.ring, 0); s.checks.forEach(function(t){ t.classList.remove('on'); }); s.counter.textContent = ''; s.desc.textContent = ''; s.hd.classList.remove('on'); };
  States.prototype.still = function(){ var s = this; pop(s.core); s.core._t.textContent = s.cfg.core; s.ring.classList.add('in'); setRing(s.ring, 1); s.checks.forEach(function(t){ t.classList.add('on'); });
    s.wm.forEach(function(w, i){ w.style.strokeDashoffset = 0; w.style.setProperty('--c', s.colors[i]); w.classList.add('on'); }); s.we.forEach(function(w, i){ w.style.strokeDashoffset = 0; w.style.setProperty('--c', s.moreColors[i]); w.classList.add('on'); });
    s.main.forEach(function(g, i){ pop(g); g._t.textContent = g._label; g.style.setProperty('--c', s.colors[i]); g.classList.add('lit'); }); s.more.forEach(function(g, i){ pop(g); g._t.textContent = g._label; g.style.setProperty('--c', s.moreColors[i]); g.classList.add('lit'); }); s.counter.textContent = s.cfg.counter + ' 9 / 9'; };
  States.prototype.process = async function(ctx, upto, color){
    var s = this; s.checks.forEach(function(t){ t.classList.remove('on'); });
    s.ring._a.style.setProperty('--c', color || C.violet);
    var ok = await tween(ctx, 1500, function(k){ setRing(s.ring, Math.min(upto, k)); s.checks.forEach(function(t, i){ t.classList.toggle('on', k > (i + 1) / 3.6 && k <= upto + 0.05); }); }, function(x){ return x; });
    return ok;
  };
  States.prototype.visit = async function(ctx, g, w, color, n, desc){
    var s = this; glow(color);
    await draw(ctx, w, 700, color, s.hd); if (ctx.dead) return false;
    s.hd.classList.remove('on'); pop(g); g.style.setProperty('--c', color); g.classList.add('lit'); type(ctx, g, 180); wave(s.svg, g._x, g._y, color);
    s.counter.textContent = s.cfg.counter + ' ' + n + ' / 9'; typeTo(ctx, s.desc, desc, 420);
    return wait(ctx, 900);
  };
  States.prototype.run = async function(ctx){
    var s = this, cfg = s.cfg; glow(C.violet);
    pop(s.core); await type(ctx, s.core, 240); s.ring.classList.add('in'); if (ctx.dead) return;
    s.counter.textContent = cfg.counter + ' 1 / 9'; typeTo(ctx, s.desc, cfg.core, 300);
    /* 1 success → empty */
    if (!await s.process(ctx, 1, C.violet)) return;
    if (!await s.visit(ctx, s.main[0], s.wm[0], C.ok, 2, cfg.main[0][1])) return;
    if (!await s.visit(ctx, s.more[3], s.we[3], C.empty, 3, cfg.more[3][1])) return;
    await wait(ctx, 300); s.main.concat(s.more).forEach(function(g){ g.classList.remove('lit'); });
    /* 2 error → limit, loop back */
    glow(C.violet); if (!await s.process(ctx, .62, C.violet)) return;
    if (!await s.visit(ctx, s.main[1], s.wm[1], C.err, 4, cfg.main[1][1])) return;
    s.main[1].classList.add('shake'); setTimeout(function(){ s.main[1].classList.remove('shake'); }, 500);
    if (!await s.visit(ctx, s.more[2], s.we[2], C.limit, 5, cfg.more[2][1])) return;
    await draw(ctx, s.loops[0], 800, C.err, s.hd); if (ctx.dead) return; s.hd.classList.remove('on'); setRing(s.ring, 0);
    await undraw(ctx, s.loops[0], 300); s.main.concat(s.more).forEach(function(g){ g.classList.remove('lit'); });
    /* 3 timeout → offline, loop back */
    glow(C.violet); if (!await s.process(ctx, .45, C.violet)) return;
    await wait(ctx, 500);
    if (!await s.visit(ctx, s.main[2], s.wm[2], C.warn, 6, cfg.main[2][1])) return;
    if (!await s.visit(ctx, s.more[0], s.we[0], C.off, 7, cfg.more[0][1])) return;
    await draw(ctx, s.loops[1], 900, C.warn, s.hd); if (ctx.dead) return; s.hd.classList.remove('on'); setRing(s.ring, 0);
    await undraw(ctx, s.loops[1], 300); s.main.concat(s.more).forEach(function(g){ g.classList.remove('lit'); });
    /* 4 cancelled (from error side) */
    glow(C.violet); if (!await s.process(ctx, .3, C.violet)) return;
    if (!await s.visit(ctx, s.main[1], s.wm[1], C.cancel, 8, cfg.main[1][0])) return;
    if (!await s.visit(ctx, s.more[1], s.we[1], C.cancel, 9, cfg.more[1][1])) return;
    await wait(ctx, 1600); if (ctx.dead) return;
    await s.collapse(ctx);
  };
  States.prototype.collapse = async function(ctx){
    var s = this; s.main.concat(s.more).forEach(function(g){ g.classList.remove('in', 'lit'); }); s.core.classList.remove('in'); s.ring.classList.remove('in'); s.counter.textContent = ''; s.desc.textContent = '';
    await Promise.all(s.wm.concat(s.we, s.loops).map(function(w){ return undraw(ctx, w, 420); }));
    s.reset();
  };

  /* ---------- scene 3: accessibility ---------- */
  var MODES = [
    { bg:'#F2F2F0', sf:'#FFFFFF', tx:'#1A1A1A', ac:'#1C7154', sc:1 },
    { bg:'#0E1A14', sf:'#16261D', tx:'#F2F2F0', ac:'#7FD9A8', sc:1 },
    { bg:'#FFFFFF', sf:'#FFFFFF', tx:'#000000', ac:'#0B4F38', sc:1.3 },
    { bg:'#000000', sf:'#0A0A0A', tx:'#FFFFFF', ac:'#B5F2CF', sc:1.6 }
  ];
  function lum(hex){ var c = [1, 3, 5].map(function(i){ var v = parseInt(hex.substr(i, 2), 16) / 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }); return .2126 * c[0] + .7152 * c[1] + .0722 * c[2]; }
  function contrast(a, b){ var la = lum(a), lb = lum(b); var hi = Math.max(la, lb), lo = Math.min(la, lb); return (hi + .05) / (lo + .05); }
  function A11y(stage, cfg){
    var svg = stage.querySelector('svg'); layers(svg); this.svg = svg; this.cfg = cfg; this.stage = stage; var s = this;
    var TX = 24, TY = [96, 156, 216, 276], BUSX = 196, CX = 232, CY = 64, CW = 384;
    s.tok = cfg.tokens.map(function(n, i){ var g = el('g', { 'class':'fz-tok', transform:'translate(' + TX + ' ' + TY[i] + ')' }, svg.nodes); el('rect', { x:0, y:-9, width:18, height:18, 'class':'sw' }, g); var t = el('text', { x:0, y:22, 'class':'fz-mono nm', 'dominant-baseline':'central' }, g); t.textContent = n; var v = el('text', { x:0, y:38, 'class':'fz-mono val', 'dominant-baseline':'central' }, g); g._sw = g.firstChild; g._v = v; return g; });
    s.note = mono(svg, 24, 24, 'cnt'); s.cr = mono(svg, 24, 46, 'val cr');
    s.tw = TY.map(function(y){ return wire(svg, 'M' + (TX + 18) + ' ' + y + ' H' + BUSX + ' V' + 190 + ' H' + CX, 'thin'); });
    s.back = el('rect', { x:CX - 16, y:CY - 24, width:CW + 32, height:340, 'class':'back' }, svg.lines);
    s.card = el('g', { 'class':'fz-card', transform:'translate(' + CX + ' ' + CY + ')' }, svg.nodes);
    s.cbg = el('rect', { x:0, y:0, width:CW, height:200, 'class':'cbg' }, s.card);
    s.ct = el('text', { x:24, y:44, 'class':'ct' }, s.card); s.ct.textContent = cfg.card[0];
    s.cs1 = el('text', { x:24, y:72, 'class':'cs' }, s.card); s.cs2 = el('text', { x:24, y:92, 'class':'cs' }, s.card);
    s.cb = el('rect', { x:24, y:112, width:100, height:32, 'class':'cb' }, s.card);
    s.cbt = el('text', { x:40, y:133, 'class':'cbt' }, s.card); s.cbt.textContent = cfg.card[2];
    s.focus = el('rect', { x:0, y:0, width:0, height:0, 'class':'fz-focus' }, svg.top);
    s.chips = cfg.modes.map(function(m, i){ var g = el('g', { 'class':'fz-chip', transform:'translate(' + (CX + i * 96) + ' ' + 410 + ')' }, svg.ui); var t = el('text', { x:0, y:0, 'dominant-baseline':'central' }, g); t.textContent = m; var tl = t.getComputedTextLength ? t.getComputedTextLength() : 0; var w = (tl > 0 ? tl : m.length * 5.7) + 16; el('rect', { x:-8, y:-13, width:w, height:26 }, g); g.appendChild(t); g._w = w; return g; });
    var x = CX - 8, cy = 404; s.chips.forEach(function(g){ if (x + g._w > 648){ x = CX - 8; cy += 34; } g.setAttribute('transform', 'translate(' + x + ' ' + cy + ')'); x += g._w + 8; });
    s.hd = []; for (var i = 0; i < 4; i++) s.hd.push(head(svg, C.green));
    s.mode = 0; s.cur = -1;
  }
  A11y.prototype.paint = function(m, k){
    var s = this, M = MODES[m], cfg = s.cfg, sc = M.sc * (innerWidth < 768 ? 1.25 : 1);
    s.cbg.setAttribute('fill', M.sf); s.cbg.setAttribute('stroke', M.bg === M.sf ? 'rgba(0,0,0,.25)' : 'transparent');
    s.ct.style.fill = M.tx; s.cs1.style.fill = M.tx; s.cs2.style.fill = M.tx; s.cb.setAttribute('fill', M.ac); s.cbt.style.fill = m === 0 || m === 2 ? '#FFFFFF' : '#0E1A14';
    s.tok[0]._sw.setAttribute('fill', M.bg); s.tok[1]._sw.setAttribute('fill', M.sf); s.tok[2]._sw.setAttribute('fill', M.tx); s.tok[3]._sw.setAttribute('fill', M.ac);
    s.tok[0]._v.textContent = M.bg; s.tok[1]._v.textContent = M.sf; s.tok[2]._v.textContent = M.tx; s.tok[3]._v.textContent = M.ac;
    s.back.setAttribute('fill', M.bg);
    /* reflow: sizes scale, the second line wraps, the button grows, the card gets taller */
    var ft = 22 * sc, fs = 14 * sc, pad = 24;
    s.ct.style.fontSize = ft + 'px'; s.cs1.style.fontSize = fs + 'px'; s.cs2.style.fontSize = fs + 'px'; s.cbt.style.fontSize = (13 * sc) + 'px';
    var words = cfg.card[1].split(' '), l1 = '', l2 = '';
    s.cs1.textContent = cfg.card[1]; var maxW = 384 - pad * 2;
    if (s.cs1.getComputedTextLength() > maxW){ var i = 0; s.cs1.textContent = ''; for (; i < words.length; i++){ var t = (l1 ? l1 + ' ' : '') + words[i]; s.cs1.textContent = t; if (s.cs1.getComputedTextLength() > maxW){ break; } l1 = t; } s.cs1.textContent = l1; l2 = words.slice(i).join(' '); }
    s.cs2.textContent = l2;
    var y = pad + ft; s.ct.setAttribute('y', y); y += fs * 1.8; s.cs1.setAttribute('y', y); if (l2){ y += fs * 1.45; s.cs2.setAttribute('y', y); }
    y += 18; var bh = 32 * sc; s.cb.setAttribute('y', y); s.cb.setAttribute('height', bh); s.cbt.setAttribute('y', y + bh / 2 + 4.5 * sc);
    s.cbt.setAttribute('x', pad + 16 * sc); s.cb.setAttribute('width', s.cbt.getComputedTextLength() + 32 * sc);
    s.cbg.setAttribute('height', y + bh + pad); s.back.setAttribute('height', y + bh + pad + 48);
    s.chips.forEach(function(g, i){ g.classList.toggle('on', i === m); });
    s.mode = m;
  };
  A11y.prototype.reset = function(){ var s = this; s.tw.forEach(function(w){ w.style.strokeDashoffset = w._L; w.classList.remove('on'); }); s.card.classList.remove('in'); s.back.classList.remove('in'); s.tok.forEach(function(g){ g.classList.remove('in'); }); s.chips.forEach(function(g){ g.classList.remove('in'); }); s.focus.classList.remove('on'); s.hd.forEach(function(h){ h.classList.remove('on'); }); s.cr.textContent = ''; s.note.textContent = ''; s.paint(0); };
  A11y.prototype.still = function(){ var s = this; s.tw.forEach(function(w){ w.style.strokeDashoffset = 0; w.classList.add('on'); }); s.card.classList.add('in'); s.back.classList.add('in'); s.tok.forEach(function(g){ g.classList.add('in'); }); s.chips.forEach(function(g){ g.classList.add('in'); }); s.paint(0); s.note.textContent = s.cfg.modes[0]; s.cr.textContent = s.cfg.contrast + ' ' + contrast(MODES[0].tx, MODES[0].sf).toFixed(1) + ':1'; };
  A11y.prototype.feed = async function(ctx, m){
    var s = this; var M = MODES[m];
    s.tw.forEach(function(w){ w.style.strokeDashoffset = w._L; });
    await Promise.all(s.tw.map(function(w, i){ return wait(ctx, i * 60).then(function(){ return draw(ctx, w, 520, C.green, s.hd[i]); }); })); if (ctx.dead) return false;
    s.hd.forEach(function(h){ h.classList.remove('on'); });
    var from = s.mode; s.paint(m); s.card.classList.add('flash'); setTimeout(function(){ s.card.classList.remove('flash'); }, 500);
    typeTo(ctx, s.note, s.cfg.modes[m]);
    var c0 = contrast(MODES[from].tx, MODES[from].sf), c1 = contrast(M.tx, M.sf);
    await tween(ctx, 600, function(k){ s.cr.textContent = s.cfg.contrast + ' ' + (c0 + (c1 - c0) * k).toFixed(1) + ':1'; }); if (ctx.dead) return false;
    /* focus walks the card: title → text → button */
    var targets = [s.ct, s.cs1, s.cb];
    for (var i = 0; i < targets.length; i++){
      var b = targets[i].getBBox(); s.focus.setAttribute('x', 232 + b.x - 6); s.focus.setAttribute('y', 64 + b.y - 4); s.focus.setAttribute('width', b.width + 12); s.focus.setAttribute('height', b.height + 8); s.focus.classList.add('on');
      if (!await wait(ctx, 380)) return false;
    }
    s.focus.classList.remove('on');
    return wait(ctx, 900);
  };
  A11y.prototype.run = async function(ctx){
    var s = this; glow(C.green);
    s.tok.forEach(function(g, i){ setTimeout(function(){ g.classList.add('in'); }, i * 90); }); s.card.classList.add('in'); s.back.classList.add('in'); s.chips.forEach(function(g){ g.classList.add('in'); });
    await wait(ctx, 500); if (ctx.dead) return;
    for (var m = 0; m < 4; m++){ if (!await s.feed(ctx, m)) return; }
    await wait(ctx, 600); if (ctx.dead) return;
    await s.collapse(ctx);
  };
  A11y.prototype.collapse = async function(ctx){ var s = this; s.card.classList.remove('in'); s.back.classList.remove('in'); s.tok.forEach(function(g){ g.classList.remove('in'); }); s.chips.forEach(function(g){ g.classList.remove('in'); }); await Promise.all(s.tw.map(function(w){ return undraw(ctx, w, 380); })); s.reset(); };

  /* ---------- orchestration ---------- */
  var scenes = stages.map(function(st){
    var cfg = JSON.parse(st.querySelector('.fz-cfg').textContent), kind = st.dataset.fz;
    var sc = kind === 'arch' ? new Arch(st, cfg) : kind === 'states' ? new States(st, cfg) : new A11y(st, cfg);
    sc.kind = kind; sc.panel = st.closest('[role="tabpanel"]'); sc.ctx = null; return sc;
  });
  function visible(sc){ return !sc.panel || !sc.panel.hidden; }
  var top = sec.querySelector('.fz-top');
  function caption(){ if (!top) return; var v = scenes.filter(visible)[0]; top.textContent = v ? v.cfg.cap : ''; }
  caption(); document.addEventListener('focustab', function(){ setTimeout(caption, 0); });
  if (RM){ scenes.forEach(function(sc){ sc.still(); }); return; }
  var inView = false;
  function play(sc){ if (sc.ctx) sc.ctx.dead = true; var ctx = sc.ctx = new Ctx(); (async function(){ while (!ctx.dead){ await sc.run(ctx); if (ctx.dead) return; await wait(ctx, 500); } })(); }
  function stop(sc){ if (sc.ctx){ sc.ctx.dead = true; sc.ctx = null; } sc.reset(); }
  function sync(){ scenes.forEach(function(sc){ var go = inView && visible(sc) && !document.hidden; if (go && !sc.ctx) play(sc); if (!go && sc.ctx) stop(sc); }); }
  new IntersectionObserver(function(es){ inView = es[0].isIntersecting; sync(); }, { threshold:.2 }).observe(sec);
  document.addEventListener('visibilitychange', sync);
  document.addEventListener('focustab', function(){ setTimeout(sync, 60); });
  /* parallax: the stage answers the mouse – lines slow, nodes faster */
  stages.forEach(function(st){
    st.addEventListener('pointermove', function(e){ var r = st.getBoundingClientRect(); st.style.setProperty('--mx', ((e.clientX - r.left) / r.width - .5).toFixed(3)); st.style.setProperty('--my', ((e.clientY - r.top) / r.height - .5).toFixed(3)); });
    st.addEventListener('pointerleave', function(){ st.style.setProperty('--mx', 0); st.style.setProperty('--my', 0); });
  });
})();
