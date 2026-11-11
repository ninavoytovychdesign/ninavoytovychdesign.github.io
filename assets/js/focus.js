/* Focus: three scenes driven by scroll. The black stage sticks for four screens of scrolling;
   scene 1 fans out a real flow, scene 2 walks one screen through its states, scene 3 flips themes and text size.
   Without JS (or with reduced motion) the scenes simply stack, each in its final state. */
(function(){
  var sec = document.querySelector('.focus.fx2'); if (!sec) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scenes = [].slice.call(sec.querySelectorAll('.fx-scene'));
  var titles = [].slice.call(sec.querySelectorAll('.fx-t'));
  var pos = sec.querySelector('.fx-pos'), bar = sec.querySelector('.fx-bar i');
  var fan = scenes[0].querySelectorAll('.fx-fl'), flow = scenes[0].querySelectorAll('.fx-flow li'), path = scenes[0].querySelector('.fx-path');
  var st = scenes[1].querySelectorAll('.fx-st'), rail = scenes[1].querySelectorAll('.fx-rail li');
  var a11y = scenes[2].querySelectorAll('.fx-st'), segT = scenes[2].querySelectorAll('.fx-seg-t span'), segS = scenes[2].querySelectorAll('.fx-seg-s span'), knob = scenes[2].querySelector('.fx-knob');
  var colors = ['#B5D640', '#6C58CE', '#1C7154'];
  var stateColors = ['#6C58CE', '#6C58CE', '#6C58CE', '#E5484D', '#F5A524'];

  function finalState(){
    // static fallback: every scene fully built
    fan.forEach(function(f){ f.classList.add('in'); }); flow.forEach(function(l){ l.classList.add('in'); }); if (path) path.style.setProperty('--w', 1);
    st.forEach(function(i, k){ i.classList.toggle('is-on', k === st.length - 1); }); rail.forEach(function(l){ l.classList.add('is-on'); });
    a11y.forEach(function(i, k){ i.classList.toggle('is-on', k === a11y.length - 1); }); segT.forEach(function(s, k){ s.classList.toggle('is-on', k === 2); }); segS.forEach(function(s, k){ s.classList.toggle('is-on', k === 2); });
    if (knob) knob.style.setProperty('--x', 2);
    scenes.forEach(function(s){ s.classList.add('is-on'); }); titles.forEach(function(t){ t.classList.add('is-on'); });
  }
  if (reduce){ finalState(); return; }

  sec.classList.add('on');
  var cur = -1, lastStep = [-1, -1, -1];
  function setScene(i){
    if (i === cur) return; cur = i;
    scenes.forEach(function(s, k){ s.classList.toggle('is-on', k === i); });
    titles.forEach(function(t, k){ t.classList.toggle('is-on', k === i); });
    if (pos) pos.textContent = '0' + (i + 1) + ' / 03';
    sec.style.setProperty('--glow', colors[i]);
  }
  function clamp(v){ return v < 0 ? 0 : v > 1 ? 1 : v; }
  function update(){
    var r = sec.getBoundingClientRect(), vh = innerHeight;
    var total = sec.offsetHeight - vh; if (total <= 0) return;
    var p = clamp(-r.top / total);            // 0..1 across the whole runway
    var seg = Math.min(2, Math.floor(p * 3)), t = clamp(p * 3 - seg);  // scene and progress inside it
    setScene(seg);
    if (bar) bar.style.transform = 'scaleX(' + p + ')';
    // scene 1: five screens, one more every fifth of the way; the line draws with them
    var n1 = Math.min(5, Math.floor(t * 6));            // 0..5 screens shown
    if (n1 !== lastStep[0]){ lastStep[0] = n1;
      fan.forEach(function(f, k){ f.classList.toggle('in', k < n1); });
      flow.forEach(function(l, k){ l.classList.toggle('in', k < n1); });
      if (path) path.style.setProperty('--w', Math.max(0, n1 - 1) / 4);
    }
    // scene 2: five states
    var n2 = Math.min(4, Math.floor(t * 5.4));
    if (n2 !== lastStep[1]){ lastStep[1] = n2;
      st.forEach(function(i, k){ i.classList.toggle('is-on', k === n2); });
      rail.forEach(function(l, k){ l.classList.toggle('is-on', k <= n2); l.classList.toggle('is-cur', k === n2); });
      scenes[1].style.setProperty('--sc', stateColors[n2]);
      if (cur === 1) sec.style.setProperty('--glow', stateColors[n2]);
    }
    // scene 3: three themes, then three text sizes
    var n3 = Math.min(5, Math.floor(t * 6.5));
    if (n3 !== lastStep[2]){ lastStep[2] = n3;
      a11y.forEach(function(i, k){ i.classList.toggle('is-on', k === n3); });
      var th = n3 < 3 ? n3 : 1, sz = n3 < 3 ? 0 : n3 - 3;
      segT.forEach(function(s, k){ s.classList.toggle('is-on', k === th); });
      segS.forEach(function(s, k){ s.classList.toggle('is-on', k === sz); });
      if (knob) knob.style.setProperty('--x', sz);
      scenes[2].classList.toggle('is-text', n3 >= 3);
    }
  }
  var ticking = false;
  function onScroll(){ if (!ticking){ ticking = true; requestAnimationFrame(function(){ ticking = false; update(); }); } }
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', onScroll);
  update();
})();
