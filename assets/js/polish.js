/* Polish: line-height scale (home), header gap (home), arrow icons (all pages), radar names open 3D */
(function(){ if(!document.querySelector('.hero.wrap')) return;
(function(){function lh(fs){ if(fs<14) return null; if(fs<=18) return 1.5; if(fs<=28) return 1.3; if(fs<=44) return 1.35; if(fs<=64) return 1.2; return 1; }
 function run(){ var els=document.querySelectorAll('body *'); for(var i=0;i<els.length;i++){ var el=els[i]; if(el.closest('svg')) continue; el.style.removeProperty('line-height'); }
  for(var i=0;i<els.length;i++){ var el=els[i]; if(el.closest('svg')) continue; var has=false; for(var n=el.firstChild;n;n=n.nextSibling){ if(n.nodeType===3 && n.textContent.trim()){has=true;break;} } if(!has) continue;
   var fs=parseFloat(getComputedStyle(el).fontSize), r=lh(fs); if(r) el.style.setProperty('line-height', String(r), 'important'); } }
 addEventListener('load',run); var t; addEventListener('resize',function(){clearTimeout(t); t=setTimeout(run,150);}); if(document.fonts) document.fonts.ready.then(run);})();
(function(){function g(){var h=document.querySelector('.hero.wrap'), n=document.querySelector('.nav-bar'), f=document.querySelector('.hero-status'); if(f&&getComputedStyle(f).display==='none') f=h.querySelector('.hero-title'); if(!h||!n||!f) return;
 f.style.removeProperty('top'); h.style.removeProperty('padding-top');
 if(getComputedStyle(f).position==='absolute'){ var nb=n.getBoundingClientRect().bottom-h.getBoundingClientRect().top-window.scrollY; f.style.setProperty('top',(nb+60)+'px','important'); var ttl=h.querySelector('.hero-title'); return; }
 var pad=parseFloat(getComputedStyle(h).paddingTop); /* the title's position in document coordinates: taken from the viewport it shrinks as the page scrolls, while the header is fixed, so every resize fired mid-scroll turned the whole scroll distance into padding and the first screen came back empty */
 var d=f.getBoundingClientRect().top+window.scrollY-n.getBoundingClientRect().bottom-60;
 h.style.setProperty('padding-top',Math.max(0,pad-d)+'px','important');}
 function g2(){g();g();g();} addEventListener('load',g2); var t; addEventListener('resize',function(){clearTimeout(t);t=setTimeout(g2,150)}); if(document.fonts) document.fonts.ready.then(g2);})();
})();
(function(){var NS='http://www.w3.org/2000/svg', MAP={'→':'','←':'l','↗':'ne'};
 function icon(k){var v=document.createElementNS(NS,'svg'); v.setAttribute('viewBox','0 0 16 16'); v.setAttribute('aria-hidden','true'); v.setAttribute('class','ico-arr '+k); var p=document.createElementNS(NS,'path'); p.setAttribute('d','M2 8h11M8.5 3.5 13 8l-4.5 4.5'); v.appendChild(p); return v;}
 function fix(root){ (root.querySelectorAll?root:document).querySelectorAll('a, button, [role=button]').forEach(function(el){
   var w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT), list=[]; while(w.nextNode()) list.push(w.currentNode);
   list.forEach(function(t){ if(!/[→←↗]/.test(t.nodeValue)||t.parentNode.closest('svg')) return; var frag=document.createDocumentFragment();
     var parts=t.nodeValue.split(/([→←↗])/); parts.forEach(function(part,i){ if(MAP.hasOwnProperty(part)){ var ic=icon(MAP[part]); if(i>0&&parts[i-1].trim()) ic.classList.add('after-text'); if(i<parts.length-1&&parts[i+1].trim()) ic.classList.add('before-text'); frag.appendChild(ic); } else { if(i>0&&MAP.hasOwnProperty(parts[i-1])) part=part.replace(/^[\s\u00a0]+/,''); if(i<parts.length-1&&MAP.hasOwnProperty(parts[i+1])) part=part.replace(/[\s\u00a0]+$/,''); if(part) frag.appendChild(document.createTextNode(part)); } });
     t.parentNode.replaceChild(frag,t); }); });
   // an arrow in its own span: 6px from the text, no extra space character
   (root.querySelectorAll?root:document).querySelectorAll('.ico-arr:only-child').forEach(function(v){ var sp=v.parentElement; if(sp.textContent.trim()) return; var ps=sp.previousSibling, ns=sp.nextSibling; var a; if(ps&&ps.nodeType===3&&(a=ps.nodeValue.replace(/[\s\u00a0]+$/,''))!==ps.nodeValue) ps.nodeValue=a; if(ns&&ns.nodeType===3&&(a=ns.nodeValue.replace(/^[\s\u00a0]+/,''))!==ns.nodeValue) ns.nodeValue=a; var hasP=ps&&(ps.nodeType===1||ps.nodeValue.trim()), hasN=ns&&(ns.nodeType===1||ns.nodeValue.trim()); if(hasP||hasN){ sp.classList.add('arr-wrap'); if(!hasP) sp.classList.add('arr-first'); } }); }
 function run(){ fix(document); new MutationObserver(function(ms){ ms.forEach(function(m){ m.addedNodes.forEach(function(n){ if(n.nodeType===1) fix(n.parentNode||n); else if(n.nodeType===3&&n.parentNode) fix(n.parentNode.parentNode||n.parentNode); }); if(m.type==='characterData'&&m.target.parentNode) fix(m.target.parentNode.parentNode||m.target.parentNode); }); }).observe(document.body,{childList:true,subtree:true,characterData:true}); }
 if(document.readyState!=='loading') run(); else document.addEventListener('DOMContentLoaded',run);})();
(function(){function init(){ var radar=document.querySelector('.radar'); if(!radar||!window.R3D) return;
 var loading=null; function load(){ if(window.Radar3D) return Promise.resolve(); if(loading) return loading; loading=new Promise(function(res,rej){ var sc=document.createElement('script'); sc.src=window.R3D.src; sc.onload=res; sc.onerror=function(){loading=null;rej();}; document.head.appendChild(sc);}); return loading; }
 function open(from,key,fallback){ load().then(function(){ window.Radar3D.open(from,key); }).catch(function(){ location.href=fallback||window.R3D.fallback; }); }
 radar.querySelectorAll('.radar-node').forEach(function(n){ n.addEventListener('click',function(e){ e.preventDefault(); e.stopPropagation(); open(n, n.dataset.key, n.getAttribute('href')); },true); n.addEventListener('pointerenter',function(){ load().catch(function(){}); },{once:true}); });
}
 if(document.readyState!=='loading') init(); else document.addEventListener('DOMContentLoaded',init);})();

/* Rounds 4–7: lead width follows the title, 3D button in the radar's corner, language dropdown, card square takes the case colour, round 3D cursor over the radar */
(function(){ function run(){
  (function(){ var t=document.querySelector('.hero-title'), l=document.querySelector('.hero-intro .lead'); if(!t||!l) return; function fit(){ if(innerWidth<1200){ l.style.removeProperty('max-width'); l.style.removeProperty('font-size'); l.style.removeProperty('line-height'); return; } var r=document.createRange(); r.selectNodeContents(t); var tw=r.getBoundingClientRect().width; l.style.setProperty('max-width', Math.round(tw)+'px','important'); var fs=Math.max(16, Math.min(20, tw/33)); l.style.setProperty('font-size', fs.toFixed(1)+'px','important'); l.style.setProperty('line-height', Math.round(fs*1.4)+'px','important'); } fit(); addEventListener('load',fit); addEventListener('resize',fit); if(document.fonts) document.fonts.ready.then(fit); setTimeout(fit,300); })();
  (function(){ var h=document.querySelector('.hero'), t=document.querySelector('.hero-title'), g=document.querySelector('.view-tg'); if(!h||!t||!g) return; var cell=document.querySelector('.radar-cell'); function pos(){ if(innerWidth<1024){ h.style.removeProperty('--tg-top'); var rf=cell&&cell.querySelector('.rf-wrap'); if(rf&&g.nextElementSibling!==rf) cell.insertBefore(g,rf); else if(!rf&&cell&&g.parentElement!==cell) cell.insertBefore(g,cell.firstChild); return; } if(g.previousElementSibling!==t) t.insertAdjacentElement('afterend',g); var hr=h.getBoundingClientRect(), tr=t.getBoundingClientRect(); h.style.setProperty('--tg-top', Math.round(tr.top-hr.top+(tr.height-g.offsetHeight)/2)+'px'); } pos(); addEventListener('load',pos); addEventListener('resize',pos); if(document.fonts) document.fonts.ready.then(pos); setTimeout(pos,300); })();
(function(){
  var dd=document.querySelector('.lang-dd'); if(!dd) return;
  var btn=dd.querySelector('.lang-btn'), menu=dd.querySelector('.lang-menu');
  function set(o){ btn.setAttribute('aria-expanded',o?'true':'false'); menu.hidden=!o; }
  btn.addEventListener('click',function(){ set(menu.hidden); if(!menu.hidden){ var a=menu.querySelector('a[aria-current]')||menu.querySelector('a'); a&&a.focus(); } });
  document.addEventListener('click',function(e){ if(!dd.contains(e.target)) set(false); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!menu.hidden){ set(false); btn.focus(); } });
  menu.addEventListener('keydown',function(e){ var as=[].slice.call(menu.querySelectorAll('a')), i=as.indexOf(document.activeElement); if(e.key==='ArrowDown'){ e.preventDefault(); as[(i+1)%as.length].focus(); } if(e.key==='ArrowUp'){ e.preventDefault(); as[(i-1+as.length)%as.length].focus(); } });
})();
(function(){
  /* the card's square takes the colour of the case lit on the radar */
  var radar=document.querySelector('.radar'), card=document.querySelector('.hero-card'); if(!radar||!card) return;
  function sync(){ var c=radar.style.getPropertyValue('--sc'); if(c) card.style.setProperty('--sc',c); }
  sync(); new MutationObserver(sync).observe(radar,{attributes:true,attributeFilter:['style']});
  /* setCard rewrites the title text – put the square back */
  new MutationObserver(function(){ var t=card.querySelector('.title'); if(t&&!t.querySelector('.cdot')){ var i=document.createElement('i'); i.className='cdot'; i.setAttribute('aria-hidden','true'); t.insertBefore(i,t.firstChild); } }).observe(card,{childList:true,subtree:true,characterData:true});
})();
}
 if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run(); })();
document.addEventListener('DOMContentLoaded',function(){
  if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var radar=document.querySelector('.radar'); if(!radar) return;
  var c=document.createElement('div'); c.className='r3-cur'; c.setAttribute('aria-hidden','true'); var L=({uk:['Відкрити мапу','Мапа проєктів'],it:['Apri la mappa','Mappa dei progetti']})[document.documentElement.lang]||['Open the map','Map of work'];
  c.innerHTML='<i>'+L[0]+'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M8.5 3.5 13 8l-4.5 4.5"/></svg></i>'; document.body.appendChild(c);
  /* the hint belongs in the radar column, between the filters and the radar */
  var cell=document.querySelector('.radar-cell'); if(cell){ var hint=document.createElement('p'); hint.className='r3-hint'; hint.textContent=L[1]; cell.insertBefore(hint, cell.firstChild); }
  var tx=0,ty=0,x=0,y=0,raf=0,on=false;
  function tick(){ x+=(tx-x)*.22; y+=(ty-y)*.22; c.style.transform='translate('+x.toFixed(1)+'px,'+y.toFixed(1)+'px)'; if(on||Math.abs(tx-x)>.5||Math.abs(ty-y)>.5) raf=requestAnimationFrame(tick); else raf=0; }
  function go(){ if(!raf) raf=requestAnimationFrame(tick); }
  radar.addEventListener('pointerenter',function(e){ tx=x=e.clientX; ty=y=e.clientY; on=true; c.classList.add('on'); go(); });
  radar.addEventListener('pointermove',function(e){ tx=e.clientX; ty=e.clientY; var overNode=!!(e.target.closest&&e.target.closest('.radar-node, a, button')); c.classList.toggle('on',!overNode); go(); });
  radar.addEventListener('pointerleave',function(){ on=false; c.classList.remove('on','press'); });
  radar.addEventListener('pointerdown',function(){ c.classList.add('press'); });
  radar.addEventListener('pointerup',function(){ c.classList.remove('press'); });
  radar.addEventListener('click',function(e){ if(e.target.closest&&e.target.closest('.radar-node, a, button')) return; c.classList.remove('press'); c.classList.add('go'); setTimeout(function(){ c.classList.remove('go','on'); on=false; },380); });
});


/* switching language keeps the reader where they were (section + offset), not back at the top */
(function(){
  function save(){ var y=scrollY, cur=null, secs=document.querySelectorAll('[data-spy], section[id]');
    for(var i=0;i<secs.length;i++){ var t=secs[i].getBoundingClientRect().top+y; if(t<=y+120) cur=secs[i]; }
    var off=cur? y-(cur.getBoundingClientRect().top+y) : y;
    try{ sessionStorage.setItem('langpos', JSON.stringify({id:cur?cur.id:'', off:off, y:y})); }catch(e){} }
  document.addEventListener('click',function(e){ var a=e.target.closest&&e.target.closest('a[hreflang][href]'); if(a) save(); });
  var p=null; try{ p=JSON.parse(sessionStorage.getItem('langpos')||'null'); sessionStorage.removeItem('langpos'); }catch(e){}
  if(!p) return;
  if('scrollRestoration' in history) history.scrollRestoration='manual';
  function go(){ var el=p.id&&document.getElementById(p.id); var y=el? el.getBoundingClientRect().top+scrollY+p.off : p.y; scrollTo({top:Math.max(0,y), left:0, behavior:'instant'}); }
  go(); addEventListener('load',function(){ go(); setTimeout(go,150); });
})();

/* The domain menu becomes a dropdown at tablet too, so it has to close on a pick. */
(function(){
  var mq = matchMedia('(min-width:768px) and (max-width:1023px)');
  var wrap = document.querySelector('.rf-wrap'); if (!wrap) return;
  var tg = wrap.querySelector('.rf-toggle'); if (!tg) return;
  wrap.querySelectorAll('.rf').forEach(function(c){
    c.addEventListener('click', function(){
      if (!mq.matches) return;
      wrap.classList.remove('open'); tg.setAttribute('aria-expanded', 'false'); tg.focus();
    });
  });
})();
