(()=>{var Eh=0,Gl=1,Th=2;var Cr=1,wh=2,As=3,Mi=0,Je=1,Xn=2,Oi=0,Rs=1,Hl=2,Vl=3,Wl=4,Ah=5;var Bi=100,Rh=101,Ch=102,Ih=103,Ph=104,Lh=200,Dh=201,Nh=202,Uh=203,Xl=204,ql=205,Fh=206,Oh=207,Bh=208,zh=209,kh=210,Gh=211,Hh=212,Vh=213,Wh=214,Sa=0,ba=1,Ea=2,hs=3,Ta=4,wa=5,Aa=6,Ra=7,lo=0,Xh=1,qh=2,qn=0,Yl=1,Zl=2,Jl=3,Ir=4,$l=5,Kl=6,Ql=7;var jl=300,zi=301,Cs=302,co=303,ho=304,Ca=1e3,Fn=1001,Ia=1002,Xe=1003,Yh=1004;var Pr=1005;var rn=1006,uo=1007;var oi=1008;var ln=1009,tc=1010,ec=1011,Is=1012,fo=1013,In=1014,Mn=1015,Pn=1016,po=1017,mo=1018,ki=1020,nc=35902,ic=35899,sc=1021,rc=1022,Ln=1023,ii=1026,li=1027,go=1028,_o=1029,Si=1030,xo=1031;var vo=1033,Lr=33776,Dr=33777,Nr=33778,Ur=33779,yo=35840,Mo=35841,So=35842,bo=35843,Eo=36196,To=37492,wo=37496,Ao=37488,Ro=37489,Fr=37490,Co=37491,Io=37808,Po=37809,Lo=37810,Do=37811,No=37812,Uo=37813,Fo=37814,Oo=37815,Bo=37816,zo=37817,ko=37818,Go=37819,Ho=37820,Vo=37821,Wo=36492,Xo=36494,qo=36495,Yo=36283,Zo=36284,Or=36285,Jo=36286;var er=2300,Pa=2301,va=2302,Cl=2303,Il=2400,Pl=2401,Ll=2402;var Zh=3200;var Br=0,Jh=1,ci="",Qe="srgb",nr="srgb-linear",ir="linear",Se="srgb";var ya=7680;var $h=519,Kh=512,Qh=513,jh=514,ac=515,tu=516,eu=517,oc=518,lc=519,nu=35044;var cc="300 es",yn=2e3,us=2001;function ju(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function td(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function iu(){let i=ds("canvas");return i.style.display="block",i}var zc={},fs=null;function hc(...i){let t="THREE."+i.shift();fs?fs("log",t,...i):console.log(t,...i)}function su(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Zt(...i){i=su(i);let t="THREE."+i.shift();if(fs)fs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Jt(...i){i=su(i);let t="THREE."+i.shift();if(fs)fs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ii(...i){let t=i.join(" ");t in zc||(zc[t]=!0,Zt(...i))}function ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var au={[Sa]:Sa,[Ea]:Aa,[Ta]:Ta,[hs]:wa,[ba]:ba,[Aa]:Ea,[Ra]:Ra,[wa]:hs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kc=1234567,Ks=Math.PI/180,ps=180/Math.PI;function Gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function uc(i,t){return(i%t+t)%t}function ed(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function nd(i,t,e){return i!==t?(e-i)/(t-i):0}function Qs(i,t,e){return(1-e)*i+e*t}function id(i,t,e,n){return Qs(i,t,1-Math.exp(-e*n))}function sd(i,t=1){return t-Math.abs(uc(i,t*2)-t)}function rd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ad(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function od(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ld(i,t){return i+Math.random()*(t-i)}function cd(i){return i*(.5-Math.random())}function hd(i){i!==void 0&&(kc=i);let t=kc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ud(i){return i*Ks}function dd(i){return i*ps}function fd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function md(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),d=a((t-n)/2),u=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*u,o*h,o*l);break;default:Zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ou(i,t){if(t.constructor===Float32Array)return i;let e=fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function lu(i,t){if(t.constructor===Float32Array)return i;let e=fc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var zr={DEG2RAD:Ks,RAD2DEG:ps,generateUUID:Gi,clamp:fe,euclideanModulo:uc,mapLinear:ed,inverseLerp:nd,lerp:Qs,damp:id,pingpong:sd,smoothstep:rd,smootherstep:ad,randInt:od,randFloat:ld,randFloatSpread:cd,seededRandom:hd,degToRad:ud,radToDeg:dd,isPowerOfTwo:fd,ceilPowerOfTwo:pd,floorPowerOfTwo:dc,setQuaternionFromProperEuler:md,normalize:lu,denormalize:ou},vc=class vc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vc.prototype.isVector2=!0;var bt=vc,zn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||c!==d||l!==u||h!==g){let p=c*d+l*u+h*g+f*M;p<0&&(d=-d,u=-u,g=-g,M=-M,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+M*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+g*o,f=f*m+M*o;let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return t[e]=o*g+h*f+c*u-l*d,t[e+1]=c*g+h*d+l*f-o*u,t[e+2]=l*g+h*u+o*d-c*f,t[e+3]=h*g-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},yc=class yc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return rl.copy(this).projectOnVector(t),this.sub(rl)}reflect(t){return this.sub(rl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yc.prototype.isVector3=!0;var U=yc,rl=new U,Gc=new zn,Mc=class Mc{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],M=s[0],p=s[3],m=s[6],S=s[1],w=s[4],b=s[7],R=s[2],A=s[5],_=s[8];return r[0]=a*M+o*S+c*R,r[3]=a*p+o*w+c*A,r[6]=a*m+o*b+c*_,r[1]=l*M+h*S+f*R,r[4]=l*p+h*w+f*A,r[7]=l*m+h*b+f*_,r[2]=d*M+u*S+g*R,r[5]=d*p+u*w+g*A,r[8]=d*m+u*b+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=e*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*l-h*n)*M,t[2]=(o*n-s*a)*M,t[3]=d*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-o*e)*M,t[6]=u*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(al.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(al.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mc.prototype.isMatrix3=!0;var ee=Mc,al=new ee,Hc=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){let i={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Se&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Se&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?ir:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nr]:{primaries:t,whitePoint:n,transfer:ir,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:Hc,fromXYZ:Vc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}var me=gd();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Zi===void 0&&(Zi=ds("canvas")),Zi.width=t.width,Zi.height=t.height;let s=Zi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Zi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_d=0,ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ol(s[a].image)):r.push(ol(s[a]))}else r=ol(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ol(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?La.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}var xd=0,ll=new U,tn=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Fn,s=Fn,r=rn,a=oi,o=Ln,c=ln,l=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Gi(),this.name="",this.source=new ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ll).x}get height(){return this.source.getSize(ll).y}get depth(){return this.source.getSize(ll).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ca:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ca:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=jl;tn.DEFAULT_ANISOTROPY=1;var Sc=class Sc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],M=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-M)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+M)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,b=(u+1)/2,R=(m+1)/2,A=(h+d)/4,_=(f+M)/4,E=(g+p)/4;return w>b&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=_/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=E/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=E/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(f-M)*(f-M)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-M)/S,this.z=(d-h)/S,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sc.prototype.isVector4=!0;var Ie=Sc,Da=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},sr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var oo=class oo{constructor(t,e,n,s,r,a,o,c,l,h,f,d,u,g,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,M,p)}set(t,e,n,s,r,a,o,c,l,h,f,d,u,g,M,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ji.setFromMatrixColumn(t,0).length(),r=1/Ji.setFromMatrixColumn(t,1).length(),a=1/Ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,g=o*h,M=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+g*l,e[5]=d-M*l,e[9]=-o*c,e[2]=M-d*l,e[6]=g+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,g=l*h,M=l*f;e[0]=d+M*o,e[4]=g*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-g,e[6]=M+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,g=l*h,M=l*f;e[0]=d-M*o,e[4]=-a*f,e[8]=g+u*o,e[1]=u+g*o,e[5]=a*h,e[9]=M-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,g=o*h,M=o*f;e[0]=c*h,e[4]=g*l-u,e[8]=d*l+M,e[1]=c*f,e[5]=M*l+d,e[9]=u*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=M-d*f,e[8]=g*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+g,e[10]=d-M*f}else if(t.order==="XZY"){let d=a*c,u=a*l,g=o*c,M=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+M,e[5]=a*h,e[9]=u*f-g,e[2]=g*f-u,e[6]=o*h,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vd,t,yd)}lookAt(t,e,n){let s=this.elements;return fn.subVectors(t,e),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Zr.crossVectors(fn,ui),s[0]=ui.x,s[4]=Zr.x,s[8]=fn.x,s[1]=ui.y,s[5]=Zr.y,s[9]=fn.y,s[2]=ui.z,s[6]=Zr.z,s[10]=fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],M=n[6],p=n[10],m=n[14],S=n[3],w=n[7],b=n[11],R=n[15],A=s[0],_=s[4],E=s[8],B=s[12],L=s[1],D=s[5],k=s[9],q=s[13],P=s[2],H=s[6],J=s[10],V=s[14],ct=s[3],Y=s[7],nt=s[11],rt=s[15];return r[0]=a*A+o*L+c*P+l*ct,r[4]=a*_+o*D+c*H+l*Y,r[8]=a*E+o*k+c*J+l*nt,r[12]=a*B+o*q+c*V+l*rt,r[1]=h*A+f*L+d*P+u*ct,r[5]=h*_+f*D+d*H+u*Y,r[9]=h*E+f*k+d*J+u*nt,r[13]=h*B+f*q+d*V+u*rt,r[2]=g*A+M*L+p*P+m*ct,r[6]=g*_+M*D+p*H+m*Y,r[10]=g*E+M*k+p*J+m*nt,r[14]=g*B+M*q+p*V+m*rt,r[3]=S*A+w*L+b*P+R*ct,r[7]=S*_+w*D+b*H+R*Y,r[11]=S*E+w*k+b*J+R*nt,r[15]=S*B+w*q+b*V+R*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],g=t[3],M=t[7],p=t[11],m=t[15],S=c*u-l*d,w=o*u-l*f,b=o*d-c*f,R=a*u-l*h,A=a*d-c*h,_=a*f-o*h;return e*(M*S-p*w+m*b)-n*(g*S-p*R+m*A)+s*(g*w-M*R+m*_)-r*(g*b-M*A+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],g=t[12],M=t[13],p=t[14],m=t[15],S=e*o-n*a,w=e*c-s*a,b=e*l-r*a,R=n*c-s*o,A=n*l-r*o,_=s*l-r*c,E=h*M-f*g,B=h*p-d*g,L=h*m-u*g,D=f*p-d*M,k=f*m-u*M,q=d*m-u*p,P=S*q-w*k+b*D+R*L-A*B+_*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(o*q-c*k+l*D)*H,t[1]=(s*k-n*q-r*D)*H,t[2]=(M*_-p*A+m*R)*H,t[3]=(d*A-f*_-u*R)*H,t[4]=(c*L-a*q-l*B)*H,t[5]=(e*q-s*L+r*B)*H,t[6]=(p*b-g*_-m*w)*H,t[7]=(h*_-d*b+u*w)*H,t[8]=(a*k-o*L+l*E)*H,t[9]=(n*L-e*k-r*E)*H,t[10]=(g*A-M*b+m*S)*H,t[11]=(f*b-h*A-u*S)*H,t[12]=(o*B-a*D-c*E)*H,t[13]=(e*D-n*B+s*E)*H,t[14]=(M*w-g*R-p*S)*H,t[15]=(h*R-f*w+d*S)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,M=a*h,p=a*f,m=o*f,S=c*l,w=c*h,b=c*f,R=n.x,A=n.y,_=n.z;return s[0]=(1-(M+m))*R,s[1]=(u+b)*R,s[2]=(g-w)*R,s[3]=0,s[4]=(u-b)*A,s[5]=(1-(d+m))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+w)*_,s[9]=(p-S)*_,s[10]=(1-(d+M))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ji.set(s[0],s[1],s[2]).length(),o=Ji.set(s[4],s[5],s[6]).length(),c=Ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),bn.copy(this);let l=1/a,h=1/o,f=1/c;return bn.elements[0]*=l,bn.elements[1]*=l,bn.elements[2]*=l,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,e.setFromRotationMatrix(bn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===us)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,c=!1){let l=this.elements,h=2/(e-t),f=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(o===yn)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===us)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};oo.prototype.isMatrix4=!0;var be=oo,Ji=new U,bn=new be,vd=new U(0,0,0),yd=new U(1,1,1),ui=new U,Zr=new U,fn=new U,Wc=new be,Xc=new zn,kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(fe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xc.setFromEuler(this),this.setFromQuaternion(Xc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Md=0,qc=new U,$i=new zn,Kn=new be,Jr=new U,Vs=new U,Sd=new U,bd=new zn,Yc=new U(1,0,0),Zc=new U(0,1,0),Jc=new U(0,0,1),$c={type:"added"},Ed={type:"removed"},Ki={type:"childadded",child:null},cl={type:"childremoved",child:null},en=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new kn,n=new zn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new ee}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Yc,t)}rotateY(t){return this.rotateOnAxis(Zc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return qc.copy(t).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yc,t)}translateY(t){return this.translateOnAxis(Zc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Vs,Jr,this.up):Kn.lookAt(Jr,Vs,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Kn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent($c),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):Jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ed),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent($c),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,t,Sd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vs,bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new U(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ze=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Td={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let M of t.hand.values()){let p=e.getJointPose(M,n),m=this._getHandJoint(l,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Td)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},$r={h:0,s:0,l:0};function hl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=me.workingColorSpace){if(t=uc(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=hl(a,r,t+1/3),this.g=hl(a,r,t),this.b=hl(a,r,t-1/3)}return me.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function n(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return me.workingToColorSpace(Ke.copy(this),t),Math.round(fe(Ke.r*255,0,255))*65536+Math.round(fe(Ke.g*255,0,255))*256+Math.round(fe(Ke.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Ke.copy(this),e);let n=Ke.r,s=Ke.g,r=Ke.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=Qe){me.workingToColorSpace(Ke.copy(this),t);let e=Ke.r,n=Ke.g,s=Ke.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL($r);let n=Qs(di.h,$r.h,e),s=Qs(di.s,$r.s,e),r=Qs(di.l,$r.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ke=new Qt;Qt.NAMES=cu;var rr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Pi=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},En=new U,Qn=new U,ul=new U,jn=new U,Qi=new U,ji=new U,Kc=new U,dl=new U,fl=new U,pl=new U,ml=new Ie,gl=new Ie,_l=new Ie,gi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),En.subVectors(t,e),s.cross(En);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){En.subVectors(s,e),Qn.subVectors(n,e),ul.subVectors(t,e);let a=En.dot(En),o=En.dot(Qn),c=En.dot(ul),l=Qn.dot(Qn),h=Qn.dot(ul),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(t,e),gl.fromBufferAttribute(t,n),_l.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(t,e,n,s){return En.subVectors(n,e),Qn.subVectors(t,e),En.cross(Qn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),En.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Qi.subVectors(s,n),ji.subVectors(r,n),dl.subVectors(t,n);let c=Qi.dot(dl),l=ji.dot(dl);if(c<=0&&l<=0)return e.copy(n);fl.subVectors(t,s);let h=Qi.dot(fl),f=ji.dot(fl);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(Qi,a);pl.subVectors(t,r);let u=Qi.dot(pl),g=ji.dot(pl);if(g>=0&&u<=g)return e.copy(r);let M=u*l-c*g;if(M<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ji,o);let p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return Kc.subVectors(r,s),o=(f-h)/(f-h+(u-g)),e.copy(s).addScaledVector(Kc,o);let m=1/(p+M+d);return a=M*m,o=d*m,e.copy(n).addScaledVector(Qi,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gn=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Kr.copy(n.boundingBox)),Kr.applyMatrix4(t.matrixWorld),this.union(Kr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ws),Qr.subVectors(this.max,Ws),ts.subVectors(t.a,Ws),es.subVectors(t.b,Ws),ns.subVectors(t.c,Ws),fi.subVectors(es,ts),pi.subVectors(ns,es),wi.subVectors(ts,ns);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-wi.z,wi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,wi.z,0,-wi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-wi.y,wi.x,0];return!xl(e,ts,es,ns,Qr)||(e=[1,0,0,0,1,0,0,0,1],!xl(e,ts,es,ns,Qr))?!1:(jr.crossVectors(fi,pi),e=[jr.x,jr.y,jr.z],xl(e,ts,es,ns,Qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new U,new U,new U,new U,new U,new U,new U,new U],Tn=new U,Kr=new Gn,ts=new U,es=new U,ns=new U,fi=new U,pi=new U,wi=new U,Ws=new U,Qr=new U,jr=new U,Ai=new U;function xl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Fe=new U,ta=new bt,wd=0,An=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=Mn,this.version=0,this._normalizationScale=t!==void 0?fc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):ou(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):lu(t,this.array)}};var ar=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ad=new Gn,Xs=new U,vl=new U,si=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ad.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xs.subVectors(t,this.center);let e=Xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Xs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xs.copy(t.center).add(vl)),this.expandByPoint(Xs.copy(t.center).sub(vl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rd=0,vn=new be,yl=new en,is=new U,pn=new Gn,qs=new Gn,We=new U,Ze=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?or:ar)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ee().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return yl.lookAt(t),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(pn.min,qs.min),pn.expandByPoint(We),We.addVectors(pn.max,qs.max),pn.expandByPoint(We)):(pn.expandByPoint(qs.min),pn.expandByPoint(qs.max))}pn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)We.fromBufferAttribute(o,l),c&&(is.fromBufferAttribute(t,l),We.add(is)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new U,c[B]=new U;let h=new U,f=new U,d=new U,u=new bt,g=new bt,M=new bt,p=new U,m=new U;function S(B,L,D){l[B]=l[L]=l[D]=1,h.fromBufferAttribute(n,B),f.fromBufferAttribute(n,L),d.fromBufferAttribute(n,D),u.fromBufferAttribute(r,B),g.fromBufferAttribute(r,L),M.fromBufferAttribute(r,D),f.sub(h),d.sub(h),g.sub(u),M.sub(u);let k=1/(g.x*M.y-M.x*g.y);isFinite(k)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(d,-g.y).multiplyScalar(k),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-M.x).multiplyScalar(k),o[B].add(p),o[L].add(p),o[D].add(p),c[B].add(m),c[L].add(m),c[D].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let B=0,L=w.length;B<L;++B){let D=w[B],k=D.start,q=D.count;for(let P=k,H=k+q;P<H;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let b=new U,R=new U,A=new U,_=new U;function E(B){A.fromBufferAttribute(s,B),_.copy(A);let L=o[B];b.copy(L),b.sub(A.multiplyScalar(A.dot(L))).normalize(),R.crossVectors(_,L);let k=R.dot(c[B])<0?-1:1;a.setXYZW(B,b.x,b.y,b.z,k)}for(let B=0,L=n.count;B<L;++B)l[B]&&E(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,f=new U;if(t)for(let d=0,u=t.count;d<u;d+=3){let g=t.getX(d+0),M=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?u=c[M]*o.data.stride+o.offset:u=c[M]*h;for(let m=0;m<h;m++)d[g++]=l[u++]}return new An(d,h,f)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ml=new U,Cd=new U,Id=new ee,wn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ml.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Ml),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Id.getNormalMatrix(t),s=this.coplanarPoint(Ml).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pd=0,Hn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Gi(),this.name="",this.type="Material",this.blending=Rs,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new wn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new bt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new bt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ei=new U,Sl=new U,ea=new U,na=new U,xs=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sl.copy(t).add(e).multiplyScalar(.5),ea.copy(e).sub(t).normalize(),na.copy(this.origin).sub(Sl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ea),o=na.dot(this.direction),c=-na.dot(ea),l=na.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let M=1/h;f*=M,d*=M,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Sl).addScaledVector(ea,d),u}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),s=ei.dot(ei)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,g=e.x-a.x,M=e.y-a.y,p=e.z-a.z,m=n.x-a.x,S=n.y-a.y,w=n.z-a.z,b=Math.abs(c),R=Math.abs(l),A=Math.abs(h),_,E,B,L,D,k,q,P,H,J,V,ct;if(b>=R&&b>=A?(B=c,k=f,H=g,ct=m,c>=0?(_=l,E=h,L=d,D=u,q=M,P=p,J=S,V=w):(_=h,E=l,L=u,D=d,q=p,P=M,J=w,V=S)):R>=A?(B=l,k=d,H=M,ct=S,l>=0?(_=h,E=c,L=u,D=f,q=p,P=g,J=w,V=m):(_=c,E=h,L=f,D=u,q=g,P=p,J=m,V=w)):(B=h,k=u,H=p,ct=w,h>=0?(_=c,E=l,L=f,D=d,q=g,P=M,J=m,V=S):(_=l,E=c,L=d,D=f,q=M,P=g,J=S,V=m)),B===0)return null;let Y=_/B,nt=E/B,rt=1/B,Ut=L-Y*k,Vt=D-nt*k,Q=q-Y*H,Rt=P-nt*H,Ft=J-Y*ct,Wt=V-nt*ct,dt=Ft*Rt-Wt*Q,Xt=Ut*Wt-Vt*Ft,pe=Q*Vt-Rt*Ut;if(s){if(dt<0||Xt<0||pe<0)return null}else if((dt<0||Xt<0||pe<0)&&(dt>0||Xt>0||pe>0))return null;let qt=dt+Xt+pe;if(qt===0)return null;let ie=rt*(dt*k+Xt*H+pe*ct);return(qt>0?ie<0:ie>0)?null:this.at(ie/qt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rn=class extends Hn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Qc=new be,Ri=new xs,ia=new si,jc=new U,sa=new U,ra=new U,aa=new U,bl=new U,oa=new U,th=new U,la=new U,Kt=class extends en{constructor(t=new Ze,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){oa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(bl.fromBufferAttribute(f,t),a?oa.addScaledVector(bl,h):oa.addScaledVector(bl.sub(e),h))}e.add(oa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(ia.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(ia,jc)===null||Ri.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Qc.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Qc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,u.start),w=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let b=S,R=w;b<R;b+=3){let A=o.getX(b),_=o.getX(b+1),E=o.getX(b+2);s=ca(this,m,t,n,l,h,f,A,_,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),M=Math.min(o.count,u.start+u.count);for(let p=g,m=M;p<m;p+=3){let S=o.getX(p),w=o.getX(p+1),b=o.getX(p+2);s=ca(this,a,t,n,l,h,f,S,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=d.length;g<M;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,u.start),w=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let b=S,R=w;b<R;b+=3){let A=b,_=b+1,E=b+2;s=ca(this,m,t,n,l,h,f,A,_,E),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,u.start),M=Math.min(c.count,u.start+u.count);for(let p=g,m=M;p<m;p+=3){let S=p,w=p+1,b=p+2;s=ca(this,a,t,n,l,h,f,S,w,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Ld(i,t,e,n,s,r,a,o){let c;if(t.side===Je?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Mi,o),c===null)return null;la.copy(o),la.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(la);return l<e.near||l>e.far?null:{distance:l,point:la.clone(),object:i}}function ca(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,sa),i.getVertexPosition(c,ra),i.getVertexPosition(l,aa);let h=Ld(i,t,e,n,sa,ra,aa,th);if(h){let f=new U;gi.getBarycoord(th,sa,ra,aa,f),s&&(h.uv=gi.getInterpolatedAttribute(s,o,c,l,f,new bt)),r&&(h.uv1=gi.getInterpolatedAttribute(r,o,c,l,f,new bt)),a&&(h.normal=gi.getInterpolatedAttribute(a,o,c,l,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new U,materialIndex:0};gi.getNormal(sa,ra,aa,d.normal),h.face=d,h.barycoord=f}return h}var lr=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Xe,h=Xe,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends An{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ss=new be,eh=new be,ha=[],nh=new Gn,Dd=new be,Ys=new Kt,Zs=new si,hr=class extends Kt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),nh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(nh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Zs.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),eh.multiplyMatrices(n,ss),Ys.matrixWorld=eh,Ys.raycast(t,ha);for(let a=0,o=ha.length;a<o;a++){let c=ha[a];c.instanceId=r,c.object=this,e.push(c)}ha.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,go,Mn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ci=new si,Nd=new bt(.5,.5),ua=new U,_i=class{constructor(t=new wn,e=new wn,n=new wn,s=new wn,r=new wn,a=new wn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],M=r[9],p=r[10],m=r[11],S=r[12],w=r[13],b=r[14],R=r[15];if(s[0].setComponents(l-a,u-h,m-g,R-S).normalize(),s[1].setComponents(l+a,u+h,m+g,R+S).normalize(),s[2].setComponents(l+o,u+f,m+M,R+w).normalize(),s[3].setComponents(l-o,u-f,m-M,R-w).normalize(),n)s[4].setComponents(c,d,p,b).normalize(),s[5].setComponents(l-c,u-d,m-p,R-b).normalize();else if(s[4].setComponents(l-c,u-d,m-p,R-b).normalize(),e===yn)s[5].setComponents(l+c,u+d,m+p,R+b).normalize();else if(e===us)s[5].setComponents(c,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=Nd.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ua.x=s.normal.x>0?t.max.x:t.min.x,ua.y=s.normal.y>0?t.max.y:t.min.y,ua.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ih=new be,Ua=class i{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];ih.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _i),n[s].setFromProjectionMatrix(ih,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new _i),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var vs=class extends Hn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Fa=new U,Oa=new U,sh=new be,Js=new xs,da=new si,El=new U,rh=new U,Li=class extends en{constructor(t=new Ze,e=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Fa.fromBufferAttribute(e,s-1),Oa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Fa.distanceTo(Oa);t.setAttribute("lineDistance",new Ce(n,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;sh.copy(s).invert(),Js.copy(t.ray).applyMatrix4(sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=u,p=g-1;M<p;M+=l){let m=h.getX(M),S=h.getX(M+1),w=fa(this,t,Js,c,m,S,M);w&&e.push(w)}if(this.isLineLoop){let M=h.getX(g-1),p=h.getX(u),m=fa(this,t,Js,c,M,p,g-1);m&&e.push(m)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let M=u,p=g-1;M<p;M+=l){let m=fa(this,t,Js,c,M,M+1,M);m&&e.push(m)}if(this.isLineLoop){let M=fa(this,t,Js,c,g-1,u,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fa(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Fa.fromBufferAttribute(o,s),Oa.fromBufferAttribute(o,r),e.distanceSqToSegment(Fa,Oa,El,rh)>n)return;El.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(El);if(!(l<t.near||l>t.far))return{distance:l,point:rh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ah=new U,oh=new U,ys=class extends Li{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)ah.fromBufferAttribute(e,s),oh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ah.distanceTo(oh);t.setAttribute("lineDistance",new Ce(n,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ur=class extends tn{constructor(t=[],e=zi,n,s,r,a,o,c,l,h){super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Di=class extends tn{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends tn{constructor(t,e,n=In,s,r,a,o=Xe,c=Xe,l,h=ii,f=1){if(h!==ii&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},dr=class extends ri{constructor(t,e=In,n=zi,s,r,a=Xe,o=Xe,c,l=ii){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fr=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Vn=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ce(l,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function g(M,p,m,S,w,b,R,A,_,E,B){let L=b/_,D=R/E,k=b/2,q=R/2,P=A/2,H=_+1,J=E+1,V=0,ct=0,Y=new U;for(let nt=0;nt<J;nt++){let rt=nt*D-q;for(let Ut=0;Ut<H;Ut++){let Vt=Ut*L-k;Y[M]=Vt*S,Y[p]=rt*w,Y[m]=P,l.push(Y.x,Y.y,Y.z),Y[M]=0,Y[p]=0,Y[m]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ut/_),f.push(1-nt/E),V+=1}}for(let nt=0;nt<E;nt++)for(let rt=0;rt<_;rt++){let Ut=d+rt+H*nt,Vt=d+rt+H*(nt+1),Q=d+(rt+1)+H*(nt+1),Rt=d+(rt+1)+H*nt;c.push(Ut,Vt,Rt),c.push(Vt,Q,Rt),ct+=6}o.addGroup(u,ct,B),u+=ct,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ms=class i extends Ze{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new U,h=new bt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=n+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ai=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,M=[],p=n/2,m=0;S(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new Ce(f,3)),this.setAttribute("normal",new Ce(d,3)),this.setAttribute("uv",new Ce(u,2));function S(){let b=new U,R=new U,A=0,_=(e-t)/n;for(let E=0;E<=r;E++){let B=[],L=E/r,D=L*(e-t)+t;for(let k=0;k<=s;k++){let q=k/s,P=q*c+o,H=Math.sin(P),J=Math.cos(P);R.x=D*H,R.y=-L*n+p,R.z=D*J,f.push(R.x,R.y,R.z),b.set(H,_,J).normalize(),d.push(b.x,b.y,b.z),u.push(q,1-L),B.push(g++)}M.push(B)}for(let E=0;E<s;E++)for(let B=0;B<r;B++){let L=M[B][E],D=M[B+1][E],k=M[B+1][E+1],q=M[B][E+1];(t>0||B!==0)&&(h.push(L,D,q),A+=3),(e>0||B!==r-1)&&(h.push(D,k,q),A+=3)}l.addGroup(m,A,0),m+=A}function w(b){let R=g,A=new bt,_=new U,E=0,B=b===!0?t:e,L=b===!0?1:-1;for(let k=1;k<=s;k++)f.push(0,p*L,0),d.push(0,L,0),u.push(.5,.5),g++;let D=g;for(let k=0;k<=s;k++){let P=k/s*c+o,H=Math.cos(P),J=Math.sin(P);_.x=B*J,_.y=p*L,_.z=B*H,f.push(_.x,_.y,_.z),d.push(0,L,0),A.x=H*.5+.5,A.y=J*.5*L+.5,u.push(A.x,A.y),g++}for(let k=0;k<s;k++){let q=R+k,P=D+k;b===!0?h.push(P,P+1,q):h.push(P+1,P,q),E+=3}l.addGroup(m,E,b===!0?1:2),m+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new bt:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,c=new be;for(let u=0;u<=t;u++){let g=u/t;s[u]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(fe(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(fe(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ss=class extends gn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new bt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ba=class extends Ss{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pc(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var lh=new U,ch=new U,Tl=new pc,wl=new pc,Al=new pc,za=class extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ch.subVectors(s[0],s[1]).add(s[0]),l=ch);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(lh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),M=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);M<1e-4&&(M=1),g<1e-4&&(g=M),p<1e-4&&(p=M),Tl.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,M,p),wl.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,M,p),Al.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,M,p)}else this.curveType==="catmullrom"&&(Tl.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),wl.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Al.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Tl.calc(c),wl.calc(c),Al.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function hh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ud(i,t){let e=1-i;return e*e*t}function Fd(i,t){return 2*(1-i)*i*t}function Od(i,t){return i*i*t}function js(i,t,e,n){return Ud(i,t)+Fd(i,e)+Od(i,n)}function Bd(i,t){let e=1-i;return e*e*e*t}function zd(i,t){let e=1-i;return 3*e*e*i*t}function kd(i,t){return 3*(1-i)*i*i*t}function Gd(i,t){return i*i*i*t}function tr(i,t,e,n,s){return Bd(i,t)+zd(i,e)+kd(i,n)+Gd(i,s)}var pr=class extends gn{constructor(t=new bt,e=new bt,n=new bt,s=new bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(tr(t,s.x,r.x,a.x,o.x),tr(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends gn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(tr(t,s.x,r.x,a.x,o.x),tr(t,s.y,r.y,a.y,o.y),tr(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},mr=class extends gn{constructor(t=new bt,e=new bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new bt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends gn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gr=class extends gn{constructor(t=new bt,e=new bt,n=new bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new bt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends gn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new bt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(hh(o,c.x,l.x,h.x,f.x),hh(o,c.y,l.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new bt().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:za,CubicBezierCurve:pr,CubicBezierCurve3:ka,EllipseCurve:Ss,LineCurve:mr,LineCurve3:Ga,QuadraticBezierCurve:gr,QuadraticBezierCurve3:Ha,SplineCurve:_r}),Va=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},xr=class extends Va{constructor(t){super(),this.type="Path",this.currentPoint=new bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new mr(this.currentPoint.clone(),new bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new gr(this.currentPoint.clone(),new bt(t,e),new bt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new pr(this.currentPoint.clone(),new bt(t,e),new bt(n,s),new bt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new _r(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){let l=new Ss(t,e,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ni=class extends xr{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new xr().fromJSON(s))}return this}};function Hd(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=hu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Yd(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let h=o,f=c;for(let d=e;d<s;d+=e){let u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return vr(r,a,e,o,c,l,0),a}function hu(i,t,e,n,s){let r;if(s===rf(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=uh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=uh(a/n|0,i[a],i[a+1],r);return r&&bs(r,r.next)&&(Mr(r),r=r.next),r}function Ui(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(bs(e,e.next)||De(e.prev,e,e.next)===0)){if(Mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Qd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Wd(i,n,s,r):Vd(i)){t.push(c.i,i.i,l.i),Mr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Xd(Ui(i),t),vr(i,t,e,n,s,r,2)):a===2&&qd(i,t,e,n,s,r):vr(Ui(i),t,e,n,s,r,1);break}}}function Vd(i){let t=i.prev,e=i,n=i.next;if(De(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&$s(s,o,r,c,a,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Wd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(De(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,f,d),M=Math.max(o,c,l),p=Math.max(h,f,d),m=Nl(u,g,t,e,n),S=Nl(M,p,t,e,n),w=i.prevZ,b=i.nextZ;for(;w&&w.z>=m&&b&&b.z<=S;){if(w.x>=u&&w.x<=M&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&$s(o,h,c,f,l,d,w.x,w.y)&&De(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=u&&b.x<=M&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&$s(o,h,c,f,l,d,b.x,b.y)&&De(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=m;){if(w.x>=u&&w.x<=M&&w.y>=g&&w.y<=p&&w!==s&&w!==a&&$s(o,h,c,f,l,d,w.x,w.y)&&De(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=S;){if(b.x>=u&&b.x<=M&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&$s(o,h,c,f,l,d,b.x,b.y)&&De(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Xd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!bs(n,s)&&du(n,e,e.next,s)&&yr(n,s)&&yr(s,n)&&(t.push(n.i,e.i,s.i),Mr(e),Mr(e.next),e=i=s),e=e.next}while(e!==i);return Ui(e)}function qd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ef(a,o)){let c=fu(a,o);a=Ui(a,a.next),c=Ui(c,c.next),vr(a,t,e,n,s,r,0),vr(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=hu(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(tf(l))}s.sort(Zd);for(let r=0;r<s.length;r++)e=Jd(s[r],e);return e}function Zd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Jd(i,t){let e=$d(i,t);if(!e)return t;let n=fu(e,i);return Ui(n,n.next),Ui(e,e.next)}function $d(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(bs(i,e))return e;do{if(bs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&uu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);yr(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Kd(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Kd(i,t){return De(i.prev,i,t.prev)<0&&De(t.next,i,i.next)<0}function Qd(i,t,e,n){let s=i;do s.z===0&&(s.z=Nl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,jd(s)}function jd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Nl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function uu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function $s(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&uu(i,t,e,n,s,r,a,o)}function ef(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nf(i,t)&&(yr(i,t)&&yr(t,i)&&sf(i,t)&&(De(i.prev,i,t.prev)||De(i,t.prev,t))||bs(i,t)&&De(i.prev,i,i.next)>0&&De(t.prev,t,t.next)>0)}function De(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function bs(i,t){return i.x===t.x&&i.y===t.y}function du(i,t,e,n){let s=ma(De(i,t,e)),r=ma(De(i,t,n)),a=ma(De(e,n,i)),o=ma(De(e,n,t));return!!(s!==r&&a!==o||s===0&&pa(i,e,t)||r===0&&pa(i,n,t)||a===0&&pa(e,i,n)||o===0&&pa(e,t,n))}function pa(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ma(i){return i>0?1:i<0?-1:0}function nf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function yr(i,t){return De(i.prev,i,i.next)<0?De(i,t,i.next)>=0&&De(i,i.prev,t)>=0:De(i,t,i.prev)<0||De(i,i.next,t)<0}function sf(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function fu(i,t){let e=Ul(i.i,i.x,i.y),n=Ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function uh(i,t,e,n){let s=Ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Mr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ul(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rf(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fl=class{static triangulate(t,e,n=2){return Hd(t,e,n)}},On=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];dh(t),fh(n,t);let a=t.length;e.forEach(dh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,fh(n,e[c]);let o=Fl.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function dh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function fh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Es=class i extends Ze{constructor(t=new Ni([new bt(.5,.5),new bt(-.5,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:af,w,b=!1,R,A,_,E;if(m){w=m.getSpacedPoints(h),b=!0,d=!1;let et=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,et),A=new U,_=new U,E=new U}d||(p=0,u=0,g=0,M=0);let B=o.extractPoints(l),L=B.shape,D=B.holes;if(!On.isClockWise(L)){L=L.reverse();for(let et=0,yt=D.length;et<yt;et++){let Mt=D[et];On.isClockWise(Mt)&&(D[et]=Mt.reverse())}}function q(et){let Mt=10000000000000001e-36,wt=et[0];for(let Et=1;Et<=et.length;Et++){let Dt=Et%et.length,Ot=et[Dt],ae=Ot.x-wt.x,ce=Ot.y-wt.y,ge=ae*ae+ce*ce,N=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(wt.x),Math.abs(wt.y)),Pe=Mt*N*N;if(ge<=Pe){et.splice(Dt,1),Et--;continue}wt=Ot}}q(L),D.forEach(q);let P=D.length,H=L;for(let et=0;et<P;et++){let yt=D[et];L=L.concat(yt)}function J(et,yt,Mt){return yt||Jt("ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(yt,Mt)}let V=L.length;function ct(et,yt,Mt){let wt,Et,Dt,Ot=et.x-yt.x,ae=et.y-yt.y,ce=Mt.x-et.x,ge=Mt.y-et.y,N=Ot*Ot+ae*ae,Pe=Ot*ge-ae*ce;if(Math.abs(Pe)>Number.EPSILON){let he=Math.sqrt(N),Ee=Math.sqrt(ce*ce+ge*ge),Tt=yt.x-ae/he,Pt=yt.y+Ot/he,zt=Mt.x-ge/Ee,Yt=Mt.y+ce/Ee,T=((zt-Tt)*ge-(Yt-Pt)*ce)/(Ot*ge-ae*ce);wt=Tt+Ot*T-et.x,Et=Pt+ae*T-et.y;let v=wt*wt+Et*Et;if(v<=2)return new bt(wt,Et);Dt=Math.sqrt(v/2)}else{let he=!1;Ot>Number.EPSILON?ce>Number.EPSILON&&(he=!0):Ot<-Number.EPSILON?ce<-Number.EPSILON&&(he=!0):Math.sign(ae)===Math.sign(ge)&&(he=!0),he?(wt=-ae,Et=Ot,Dt=Math.sqrt(N)):(wt=Ot,Et=ae,Dt=Math.sqrt(N/2))}return new bt(wt/Dt,Et/Dt)}let Y=[];for(let et=0,yt=H.length,Mt=yt-1,wt=et+1;et<yt;et++,Mt++,wt++)Mt===yt&&(Mt=0),wt===yt&&(wt=0),Y[et]=ct(H[et],H[Mt],H[wt]);let nt=[],rt,Ut=Y.concat();for(let et=0,yt=P;et<yt;et++){let Mt=D[et];rt=[];for(let wt=0,Et=Mt.length,Dt=Et-1,Ot=wt+1;wt<Et;wt++,Dt++,Ot++)Dt===Et&&(Dt=0),Ot===Et&&(Ot=0),rt[wt]=ct(Mt[wt],Mt[Dt],Mt[Ot]);nt.push(rt),Ut=Ut.concat(rt)}let Vt;if(p===0)Vt=On.triangulateShape(H,D);else{let et=[],yt=[];for(let Mt=0;Mt<p;Mt++){let wt=Mt/p,Et=u*Math.cos(wt*Math.PI/2),Dt=g*Math.sin(wt*Math.PI/2)+M;for(let Ot=0,ae=H.length;Ot<ae;Ot++){let ce=J(H[Ot],Y[Ot],Dt);Xt(ce.x,ce.y,-Et),wt===0&&et.push(ce)}for(let Ot=0,ae=P;Ot<ae;Ot++){let ce=D[Ot];rt=nt[Ot];let ge=[];for(let N=0,Pe=ce.length;N<Pe;N++){let he=J(ce[N],rt[N],Dt);Xt(he.x,he.y,-Et),wt===0&&ge.push(he)}wt===0&&yt.push(ge)}}Vt=On.triangulateShape(et,yt)}let Q=Vt.length,Rt=g+M;for(let et=0;et<V;et++){let yt=d?J(L[et],Ut[et],Rt):L[et];b?(_.copy(R.normals[0]).multiplyScalar(yt.x),A.copy(R.binormals[0]).multiplyScalar(yt.y),E.copy(w[0]).add(_).add(A),Xt(E.x,E.y,E.z)):Xt(yt.x,yt.y,0)}for(let et=1;et<=h;et++)for(let yt=0;yt<V;yt++){let Mt=d?J(L[yt],Ut[yt],Rt):L[yt];b?(_.copy(R.normals[et]).multiplyScalar(Mt.x),A.copy(R.binormals[et]).multiplyScalar(Mt.y),E.copy(w[et]).add(_).add(A),Xt(E.x,E.y,E.z)):Xt(Mt.x,Mt.y,f/h*et)}for(let et=p-1;et>=0;et--){let yt=et/p,Mt=u*Math.cos(yt*Math.PI/2),wt=g*Math.sin(yt*Math.PI/2)+M;for(let Et=0,Dt=H.length;Et<Dt;Et++){let Ot=J(H[Et],Y[Et],wt);Xt(Ot.x,Ot.y,f+Mt)}for(let Et=0,Dt=D.length;Et<Dt;Et++){let Ot=D[Et];rt=nt[Et];for(let ae=0,ce=Ot.length;ae<ce;ae++){let ge=J(Ot[ae],rt[ae],wt);b?Xt(ge.x,ge.y+w[h-1].y,w[h-1].x+Mt):Xt(ge.x,ge.y,f+Mt)}}}Ft(),Wt();function Ft(){let et=s.length/3;if(d){let yt=0,Mt=V*yt;for(let wt=0;wt<Q;wt++){let Et=Vt[wt];pe(Et[2]+Mt,Et[1]+Mt,Et[0]+Mt)}yt=h+p*2,Mt=V*yt;for(let wt=0;wt<Q;wt++){let Et=Vt[wt];pe(Et[0]+Mt,Et[1]+Mt,Et[2]+Mt)}}else{for(let yt=0;yt<Q;yt++){let Mt=Vt[yt];pe(Mt[2],Mt[1],Mt[0])}for(let yt=0;yt<Q;yt++){let Mt=Vt[yt];pe(Mt[0]+V*h,Mt[1]+V*h,Mt[2]+V*h)}}n.addGroup(et,s.length/3-et,0)}function Wt(){let et=s.length/3,yt=0;dt(H,yt),yt+=H.length;for(let Mt=0,wt=D.length;Mt<wt;Mt++){let Et=D[Mt];dt(Et,yt),yt+=Et.length}n.addGroup(et,s.length/3-et,1)}function dt(et,yt){let Mt=et.length;for(;--Mt>=0;){let wt=Mt,Et=Mt-1;Et<0&&(Et=et.length-1);for(let Dt=0,Ot=h+p*2;Dt<Ot;Dt++){let ae=V*Dt,ce=V*(Dt+1),ge=yt+wt+ae,N=yt+Et+ae,Pe=yt+Et+ce,he=yt+wt+ce;qt(ge,N,Pe,he)}}}function Xt(et,yt,Mt){c.push(et),c.push(yt),c.push(Mt)}function pe(et,yt,Mt){ie(et),ie(yt),ie(Mt);let wt=s.length/3,Et=S.generateTopUV(n,s,wt-3,wt-2,wt-1);le(Et[0]),le(Et[1]),le(Et[2])}function qt(et,yt,Mt,wt){ie(et),ie(yt),ie(wt),ie(yt),ie(Mt),ie(wt);let Et=s.length/3,Dt=S.generateSideWallUV(n,s,Et-6,Et-3,Et-2,Et-1);le(Dt[0]),le(Dt[1]),le(Dt[3]),le(Dt[1]),le(Dt[2]),le(Dt[3])}function ie(et){s.push(c[et*3+0]),s.push(c[et*3+1]),s.push(c[et*3+2])}function le(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return of(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new i(n,t.options)}},af={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new bt(r,a),new bt(o,c),new bt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],f=t[n*3+2],d=t[s*3],u=t[s*3+1],g=t[s*3+2],M=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new bt(a,1-c),new bt(l,1-f),new bt(d,1-g),new bt(M,1-m)]:[new bt(o,1-c),new bt(h,1-f),new bt(u,1-g),new bt(p,1-m)]}};function of(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cn=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],g=[],M=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let w=0;w<l;w++){let b=w*f-r;g.push(b,-S,0),M.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let w=S+l*m,b=S+l*(m+1),R=S+1+l*(m+1),A=S+1+l*m;u.push(w,b,A),u.push(b,R,A)}this.setIndex(u),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Sr=class i extends Ze{constructor(t=new Ni([new bt(0,.5),new bt(-.5,-.5),new bt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Ce(s,3)),this.setAttribute("normal",new Ce(r,3)),this.setAttribute("uv",new Ce(a,2));function l(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,g=d.holes;On.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let S=g[p];On.isClockWise(S)===!0&&(g[p]=S.reverse())}let M=On.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let S=g[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){let S=u[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=M.length;p<m;p++){let S=M[p],w=S[0]+f,b=S[1]+f,R=S[2]+f;n.push(w,b,R),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return lf(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function lf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}function Hi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(ph(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(ph(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function nn(i){let t={};for(let e=0;e<i.length;e++){let n=Hi(i[e]);for(let s in n)t[s]=n[s]}return t}function ph(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function cf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function mc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var pu={clone:Hi,merge:nn},hf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends Hn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hi(t.uniforms),this.uniformsGroups=cf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new bt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ee().fromArray(s.value);break;case"m4":this.uniforms[n].value=new be().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fi=class extends Hn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},on=class extends Fi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new bt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ii('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ii('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var br=class extends Hn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Br,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=lo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends Hn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends Hn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function rs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Il,endingEnd:Il}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Pl:r=t,o=2*e-n;break;case Ll:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pl:a=t,c=2*n-e;break;case Ll:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-e)/(s-e),M=g*g,p=M*g,m=-d*p+2*d*M-d*g,S=(1+d)*p+(-1.5-2*d)*M+(-.5+d)*g+1,w=(-1-u)*p+(1.5+u)*M+.5*g,b=u*p-u*M;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+S*a[l+R]+w*a[c+R]+b*a[f+R];return r}},Za=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Ja=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},$a=class extends xi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),M=1-g;for(let p=0;p!==o;++p)r[p]=a[l+p]*M+a[c+p]*g;return r}let d=o*2,u=t-1;for(let g=0;g!==o;++g){let M=a[l+g],p=a[c+g],m=u*d+g*2,S=f[m],w=f[m+1],b=t*d+g*2,R=h[b],A=h[b+1],_=ff(n,e,S,R,s);r[g]=mu(_,M,w,A,p)}return r}};function mu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function df(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ff(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=mu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=df(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var _n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=rs(e,this.TimeBufferType),this.values=rs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:rs(t.times,Array),values:rs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ga(t.settings)&&(n.settings={inTangents:rs(t.settings.inTangents,Array),outTangents:rs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $a(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case er:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Cl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return er;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Cl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;ga(this.settings)&&(mh(this.settings.inTangents,t),mh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ga(this.settings)&&(gh(this.settings.inTangents,t),gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Jt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Jt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Jt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&td(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Jt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let M=e[f+g];if(M!==e[d+g]||M!==e[u+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function mh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Pa;var vi=class extends _n{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=er;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="color";var Qa=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};Qa.prototype.ValueTypeName="number";var ja=class extends xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Er=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends _n{constructor(t,e,n){super(t,e,n)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=er;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends _n{constructor(t,e,n,s){super(t,e,n,s)}};to.prototype.ValueTypeName="vector";var Ma={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(_h(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!_h(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _h(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var eo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},gu=new eo,Ts=class{constructor(t){this.manager=t!==void 0?t:gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=new WeakMap,no=class extends Ts{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ma.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=as.get(a);f===void 0&&(f=[],as.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=ds("img");function c(){h(),e&&e(this);let f=as.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}as.delete(this),r.manager.itemEnd(t)}function l(f){h(),s&&s(f),Ma.remove(`image:${t}`);let d=as.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(f)}as.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ma.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Tr=class extends Ts{constructor(t){super(t)}load(t,e,n,s){let r=new tn,a=new no(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},io=class extends en{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Rl=new be,xh=new U,vh=new U,so=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;xh.setFromMatrixPosition(t.matrixWorld),e.position.copy(xh),vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Rl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===us||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},_a=new U,xa=new zn,Un=new U,wr=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(_a,xa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(_a,xa,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_a,xa,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new U,yh=new bt,Mh=new bt,je=class extends wr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,yh,Mh),e.subVectors(Mh,yh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ol=class extends so{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}},Ar=class extends io{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ol}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ro=class extends wr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var os=-90,ls=1,ws=class extends en{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(os,ls,t,e);s.layers=this.layers,this.add(s);let r=new je(os,ls,t,e);r.layers=this.layers,this.add(r);let a=new je(os,ls,t,e);a.layers=this.layers,this.add(a);let o=new je(os,ls,t,e);o.layers=this.layers,this.add(o);let c=new je(os,ls,t,e);c.layers=this.layers,this.add(c);let l=new je(os,ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=M,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ao=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var gc="\\[\\]\\.:\\/",pf=new RegExp("["+gc+"]","g"),_c="[^"+gc+"]",mf="[^"+gc.replace("\\.","")+"]",gf=/((?:WC+[\/:])*)/.source.replace("WC",_c),_f=/(WCOD+)?/.source.replace("WCOD",mf),xf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_c),vf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_c),yf=new RegExp("^"+gf+_f+xf+vf+"$"),Mf=["material","materials","bones","map"],Bl=class{constructor(t,e,n){let s=n||Re.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Re=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(pf,"")}static parseTrackName(t){let e=yf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Jt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Re.Composite=Bl;Re.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Re.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Re.prototype.GetterByBindingType=[Re.prototype._getValue_direct,Re.prototype._getValue_array,Re.prototype._getValue_arrayElement,Re.prototype._getValue_toArray];Re.prototype.SetterByBindingTypeAndVersioning=[[Re.prototype._setValue_direct,Re.prototype._setValue_direct_setNeedsUpdate,Re.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_array,Re.prototype._setValue_array_setNeedsUpdate,Re.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_arrayElement,Re.prototype._setValue_arrayElement_setNeedsUpdate,Re.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Re.prototype._setValue_fromArray,Re.prototype._setValue_fromArray_setNeedsUpdate,Re.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var Sh=new be,Rr=class{constructor(t,e,n=0,s=1/0){this.ray=new xs(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Sh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sh),this}intersectObject(t,e=!0,n=[]){return zl(t,this,n,e),n.sort(bh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zl(t[s],this,n,e);return n.sort(bh),n}};function bh(i,t){return i.distance-t.distance}function zl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)zl(r[a],t,e,!0)}}var bc=class bc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};bc.prototype.isMatrix2=!0;var kl=bc;function xc(i,t,e,n){let s=Sf(n);switch(e){case sc:return i*t;case go:return i*t/s.components*s.byteLength;case _o:return i*t/s.components*s.byteLength;case Si:return i*t*2/s.components*s.byteLength;case xo:return i*t*2/s.components*s.byteLength;case rc:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case vo:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Nr:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case bo:return Math.max(i,16)*Math.max(t,8)/4;case yo:case So:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:case Ao:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Fr:case Co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wo:case Xo:case qo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Yo:case Zo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case Jo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Sf(i){switch(i){case ln:case tc:return{byteLength:1,components:1};case Is:case ec:case Pn:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case In:case fo:case Mn:return{byteLength:4,components:1};case nc:case ic:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Bu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ef(i){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],M=f[u];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,f[d]=M)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let M=f[u];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Af=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,If=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Pf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Df=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Of=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",ep=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,up=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ep=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Tp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Np=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Op=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Yp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$p=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,im=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,am=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,um=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_m=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Im=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Lm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ym=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Jm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Km=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ng=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ig=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:Tf,alphahash_pars_fragment:wf,alphamap_fragment:Af,alphamap_pars_fragment:Rf,alphatest_fragment:Cf,alphatest_pars_fragment:If,aomap_fragment:Pf,aomap_pars_fragment:Lf,batching_pars_vertex:Df,batching_vertex:Nf,begin_vertex:Uf,beginnormal_vertex:Ff,bsdfs:Of,iridescence_fragment:Bf,bumpmap_pars_fragment:zf,clipping_planes_fragment:kf,clipping_planes_pars_fragment:Gf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:Vf,color_fragment:Wf,color_pars_fragment:Xf,color_pars_vertex:qf,color_vertex:Yf,common:Zf,defaultnormal_vertex:Jf,displacementmap_pars_vertex:$f,displacementmap_vertex:Kf,emissivemap_fragment:Qf,emissivemap_pars_fragment:jf,colorspace_fragment:tp,colorspace_pars_fragment:ep,envmap_fragment:np,envmap_common_pars_fragment:ip,envmap_pars_fragment:sp,envmap_pars_vertex:rp,envmap_physical_pars_fragment:gp,envmap_vertex:ap,fog_vertex:op,fog_pars_vertex:lp,fog_fragment:cp,fog_pars_fragment:hp,gradientmap_pars_fragment:up,lightmap_pars_fragment:dp,lights_lambert_fragment:fp,lights_lambert_pars_fragment:pp,lights_pars_begin:mp,lights_toon_fragment:_p,lights_toon_pars_fragment:xp,lights_phong_fragment:vp,lights_phong_pars_fragment:yp,lights_physical_fragment:Mp,lights_physical_pars_fragment:Sp,lights_fragment_begin:bp,lights_fragment_maps:Ep,lights_fragment_end:Tp,lightprobes_pars_fragment:wp,logdepthbuf_fragment:Ap,logdepthbuf_pars_fragment:Rp,logdepthbuf_pars_vertex:Cp,logdepthbuf_vertex:Ip,map_fragment:Pp,map_pars_fragment:Lp,map_particle_fragment:Dp,map_particle_pars_fragment:Np,metalnessmap_fragment:Up,metalnessmap_pars_fragment:Fp,morphinstance_vertex:Op,morphcolor_vertex:Bp,morphnormal_vertex:zp,morphtarget_pars_vertex:kp,morphtarget_vertex:Gp,normal_fragment_begin:Hp,normal_fragment_maps:Vp,normal_pars_fragment:Wp,normal_pars_vertex:Xp,normal_vertex:qp,normalmap_pars_fragment:Yp,clearcoat_normal_fragment_begin:Zp,clearcoat_normal_fragment_maps:Jp,clearcoat_pars_fragment:$p,iridescence_pars_fragment:Kp,opaque_fragment:Qp,packing:jp,premultiplied_alpha_fragment:tm,project_vertex:em,dithering_fragment:nm,dithering_pars_fragment:im,roughnessmap_fragment:sm,roughnessmap_pars_fragment:rm,shadowmap_pars_fragment:am,shadowmap_pars_vertex:om,shadowmap_vertex:lm,shadowmask_pars_fragment:cm,skinbase_vertex:hm,skinning_pars_vertex:um,skinning_vertex:dm,skinnormal_vertex:fm,specularmap_fragment:pm,specularmap_pars_fragment:mm,tonemapping_fragment:gm,tonemapping_pars_fragment:_m,transmission_fragment:xm,transmission_pars_fragment:vm,uv_pars_fragment:ym,uv_pars_vertex:Mm,uv_vertex:Sm,worldpos_vertex:bm,background_vert:Em,background_frag:Tm,backgroundCube_vert:wm,backgroundCube_frag:Am,cube_vert:Rm,cube_frag:Cm,depth_vert:Im,depth_frag:Pm,distance_vert:Lm,distance_frag:Dm,equirect_vert:Nm,equirect_frag:Um,linedashed_vert:Fm,linedashed_frag:Om,meshbasic_vert:Bm,meshbasic_frag:zm,meshlambert_vert:km,meshlambert_frag:Gm,meshmatcap_vert:Hm,meshmatcap_frag:Vm,meshnormal_vert:Wm,meshnormal_frag:Xm,meshphong_vert:qm,meshphong_frag:Ym,meshphysical_vert:Zm,meshphysical_frag:Jm,meshtoon_vert:$m,meshtoon_frag:Km,points_vert:Qm,points_frag:jm,shadow_vert:tg,shadow_frag:eg,sprite_vert:ng,sprite_frag:ig},It={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Zn={basic:{uniforms:nn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:nn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:nn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:nn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:nn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Qt(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:nn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:nn([It.points,It.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:nn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:nn([It.common,It.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:nn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:nn([It.sprite,It.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:nn([It.common,It.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:nn([It.lights,It.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Zn.physical={uniforms:nn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ee},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};var $o={r:0,b:0,g:0},sg=new be,zu=new ee;zu.set(-1,0,0,0,1,0,0,0,1);function rg(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){let b=S.backgroundBlurriness>0;w=t.get(w,b)}return w}function g(S){let w=!1,b=u(S);b===null?p(a,o):b&&b.isColor&&(p(b,1),w=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(S,w){let b=u(w);b&&b.isCubeTexture?(l===void 0&&(l=new Kt(new Vn(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Hi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sg.makeRotationFromEuler(w.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zu),l.material.toneMapped=me.getTransfer(b.colorSpace)!==Se,(h!==b||f!==b.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Kt(new Cn(2,2),new Wn({name:"BackgroundMaterial",uniforms:Hi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=me.getTransfer(b.colorSpace)!==Se,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,w){S.getRGB($o,mc(i)),e.buffers.color.setClear($o.r,$o.g,$o.b,w,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:M,dispose:m}}function ag(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,k,q,P,H){let J=!1,V=f(D,P,q,k);r!==V&&(r=V,l(r.object)),J=u(D,P,q,H),J&&g(D,P,q,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,b(D,k,q,P),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,k,q,P){let H=P.wireframe===!0,J=n[k.id];J===void 0&&(J={},n[k.id]=J);let V=D.isInstancedMesh===!0?D.id:0,ct=J[V];ct===void 0&&(ct={},J[V]=ct);let Y=ct[q.id];Y===void 0&&(Y={},ct[q.id]=Y);let nt=Y[H];return nt===void 0&&(nt=d(c()),Y[H]=nt),nt}function d(D){let k=[],q=[],P=[];for(let H=0;H<e;H++)k[H]=0,q[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,k,q,P){let H=r.attributes,J=k.attributes,V=0,ct=q.getAttributes();for(let Y in ct)if(ct[Y].location>=0){let rt=H[Y],Ut=J[Y];if(Ut===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(Ut=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(Ut=D.instanceColor)),rt===void 0||rt.attribute!==Ut||Ut&&rt.data!==Ut.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function g(D,k,q,P){let H={},J=k.attributes,V=0,ct=q.getAttributes();for(let Y in ct)if(ct[Y].location>=0){let rt=J[Y];rt===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(rt=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(rt=D.instanceColor));let Ut={};Ut.attribute=rt,rt&&rt.data&&(Ut.data=rt.data),H[Y]=Ut,V++}r.attributes=H,r.attributesNum=V,r.index=P}function M(){let D=r.newAttributes;for(let k=0,q=D.length;k<q;k++)D[k]=0}function p(D){m(D,0)}function m(D,k){let q=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;q[D]=1,P[D]===0&&(i.enableVertexAttribArray(D),P[D]=1),H[D]!==k&&(i.vertexAttribDivisor(D,k),H[D]=k)}function S(){let D=r.newAttributes,k=r.enabledAttributes;for(let q=0,P=k.length;q<P;q++)k[q]!==D[q]&&(i.disableVertexAttribArray(q),k[q]=0)}function w(D,k,q,P,H,J,V){V===!0?i.vertexAttribIPointer(D,k,q,H,J):i.vertexAttribPointer(D,k,q,P,H,J)}function b(D,k,q,P){M();let H=P.attributes,J=q.getAttributes(),V=k.defaultAttributeValues;for(let ct in J){let Y=J[ct];if(Y.location>=0){let nt=H[ct];if(nt===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor)),nt!==void 0){let rt=nt.normalized,Ut=nt.itemSize,Vt=t.get(nt);if(Vt===void 0)continue;let Q=Vt.buffer,Rt=Vt.type,Ft=Vt.bytesPerElement,Wt=Rt===i.INT||Rt===i.UNSIGNED_INT||nt.gpuType===fo;if(nt.isInterleavedBufferAttribute){let dt=nt.data,Xt=dt.isInterleavedBuffer===!0?dt.stride:dt.itemSize,pe=nt.offset;if(dt.isInstancedInterleavedBuffer||dt.isInstancedBufferAttribute){for(let qt=0;qt<Y.locationSize;qt++)m(Y.location+qt,dt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let qt=0;qt<Y.locationSize;qt++)p(Y.location+qt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let qt=0;qt<Y.locationSize;qt++)w(Y.location+qt,Ut/Y.locationSize,Rt,rt,Xt*Ft,(pe+Ut/Y.locationSize*qt)*Ft,Wt)}else{if(nt.isInstancedBufferAttribute){for(let dt=0;dt<Y.locationSize;dt++)m(Y.location+dt,nt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let dt=0;dt<Y.locationSize;dt++)p(Y.location+dt);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let dt=0;dt<Y.locationSize;dt++)w(Y.location+dt,Ut/Y.locationSize,Rt,rt,Ut*Ft,Ut/Y.locationSize*dt*Ft,Wt)}}else if(V!==void 0){let rt=V[ct];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv(Y.location,rt);break;case 3:i.vertexAttrib3fv(Y.location,rt);break;case 4:i.vertexAttrib4fv(Y.location,rt);break;default:i.vertexAttrib1fv(Y.location,rt)}}}}S()}function R(){B();for(let D in n){let k=n[D];for(let q in k){let P=k[q];for(let H in P){let J=P[H];for(let V in J)h(J[V].object),delete J[V];delete P[H]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let k=n[D.id];for(let q in k){let P=k[q];for(let H in P){let J=P[H];for(let V in J)h(J[V].object),delete J[V];delete P[H]}}delete n[D.id]}function _(D){for(let k in n){let q=n[k];for(let P in q){let H=q[P];if(H[D.id]===void 0)continue;let J=H[D.id];for(let V in J)h(J[V].object),delete J[V];delete H[D.id]}}}function E(D){for(let k in n){let q=n[k],P=D.isInstancedMesh===!0?D.id:0,H=q[P];if(H!==void 0){for(let J in H){let V=H[J];for(let ct in V)h(V[ct].object),delete V[ct];delete H[J]}delete q[P],Object.keys(q).length===0&&delete n[k]}}}function B(){L(),a=!0,r!==s&&(r=s,l(r.object))}function L(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:L,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:S}}function og(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function lg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ln&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let E=_===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==ln&&_!==Mn&&!E&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Zt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:b,maxSamples:R,samples:A}}function cg(i){let t=this,e=null,n=0,s=!1,r=!1,a=new wn,o=new ee,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let S=r?0:n,w=S*4,b=m.clippingState||null;c.value=b,b=h(g,d,w,u);for(let R=0;R!==w;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,d,u,g){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=c.value,g!==!0||p===null){let m=u+M*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,b=u;w!==M;++w,b+=4)a.copy(f[w]).applyMatrix4(S,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}var Hr=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ur(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Vn(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:Oi});r.uniforms.tEquirect.value=e;let a=new Kt(s,r),o=e.minFilter;return e.minFilter===oi&&(e.minFilter=rn),new ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},_u=256,hg=3,ug=20,ku=256,Gu=16,dg=3,fg=new U,pg=new Qt,Ls=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new Kt(new Vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=fg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,g=c.autoClearStencil,M=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(t.background=c.getClearColor(pg));let p=new ws(n,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=g,t.background=M,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(_u,dc(t))}_fromTexture(t,e){t.mapping===zi||t.mapping===Cs?this._setSize(t.image.length===0?_u:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=xu(t,!1,!1),n=Math.log2(t)-hg;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=xu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===zi||t.mapping===Cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=vu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=mg(),this._integrationMaterial=gg());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Gu);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-dg)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(ku*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=_g());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function xu(i,t,e){return new Hr(i,{minFilter:oi,generateMipmaps:t,type:Pn,colorSpace:nr,depthBuffer:e})}function Vr(i,t,e){return new Wn({name:i,uniforms:t,vertexShader:de.cube_vert,fragmentShader:e,side:Je,blending:Oi,depthTest:!1,depthWrite:!1})}function mg(){return Vr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ku}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function gg(){return Vr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _g(){return Vr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ug}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function vu(){return Vr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function yu(){return Vr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function xg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===co||u===ho)if(t.has(d)){let g=t.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let M=new Hr(g.height);return M.fromEquirectangularTexture(i,d),t.set(d,M),d.addEventListener("dispose",l),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===co||u===ho,M=u===zi||u===Cs;if(g||M){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return n===null&&(n=new Ls(i)),p=g?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return g&&S&&S.height>0||M&&S&&c(S)?(n===null&&(n=new Ls(i)),p=g?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===co?d.mapping=zi:u===ho&&(d.mapping=Cs),d}function c(d){let u=0,g=6;for(let M=0;M<g;M++)d[M]!==void 0&&u++;return u===g}function l(d){let u=d.target;u.removeEventListener("dispose",l);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function yg(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let M=r.get(g);M&&(t.remove(M),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function l(g,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),e.memory.geometries++),M}function h(g){let M=g.attributes;for(let p in M)t.update(M[p],i.ARRAY_BUFFER)}function f(g){let M=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=M!==null?M.array.length:p.array.length/3-1,w=p.count>=65535?or:ar,b=new w(Math.ceil(S/3)*6,1),R=b.array;if(M!==null){let _=M.array;m=M.version;for(let E=0,B=0;E<S;E+=3){let L=_[E+0],D=_[E+1],k=_[E+2];R[B++]=L,R[B++]=D,R[B++]=D,R[B++]=k,R[B++]=k,R[B++]=L}}else{m=p.version;for(let _=0,E=0;_<S;_+=3){let B=_+0,L=_+1,D=_+2;R[E++]=B,R[E++]=L,R[E++]=L,R[E++]=D,R[E++]=D,R[E++]=B}}b.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,b)}function d(g){let M=r.get(g);if(M){let p=g.index;p!==null&&M.version<p.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let M=s[g].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Mg(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),e.update(d,n,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let M=0;for(let p=0;p<u;p++)M+=d[p];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Sg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Jt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bg(i,t,e){let n=new WeakMap,s=new Ie;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let B=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],w=0;u===!0&&(w=1),g===!0&&(w=2),M===!0&&(w=3);let b=o.attributes.position.count*w,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let A=new Float32Array(b*R*4*f),_=new sr(A,b,R,f);_.type=Mn,_.needsUpdate=!0;let E=w*4;for(let L=0;L<f;L++){let D=p[L],k=m[L],q=S[L],P=b*R*4*L;for(let H=0;H<D.count;H++){let J=H*E;u===!0&&(s.fromBufferAttribute(D,H),A[P+J+0]=s.x,A[P+J+1]=s.y,A[P+J+2]=s.z,A[P+J+3]=0),g===!0&&(s.fromBufferAttribute(k,H),A[P+J+4]=s.x,A[P+J+5]=s.y,A[P+J+6]=s.z,A[P+J+7]=0),M===!0&&(s.fromBufferAttribute(q,H),A[P+J+8]=s.x,A[P+J+9]=s.y,A[P+J+10]=s.z,A[P+J+11]=q.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new bt(b,R)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let M=0;M<l.length;M++)u+=l[M];let g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Eg(i,t,e,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Tg={[Yl]:"LINEAR_TONE_MAPPING",[Zl]:"REINHARD_TONE_MAPPING",[Jl]:"CINEON_TONE_MAPPING",[Ir]:"ACES_FILMIC_TONE_MAPPING",[Kl]:"AGX_TONE_MAPPING",[Ql]:"NEUTRAL_TONE_MAPPING",[$l]:"CUSTOM_TONE_MAPPING"};function wg(i,t,e,n,s,r){let a=new mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ze;h.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ce([0,2,0,0,2,0],2));let f=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Kt(h,f),u=new ro(-1,1,1,-1,0,1),g=null,M=null,p=!1,m,S=null,w=[],b=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),c!==null&&c.setSize(R,A);for(let _=0;_<w.length;_++){let E=w[_];E.setSize&&E.setSize(R,A)}},this.setEffects=function(R){w=R,b=w.length>0&&w[0].isRenderPass===!0;let A=a.width,_=a.height;w.length>0&&o===null&&(o=new mn(A,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),c=new mn(A,_,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&w.some(B=>B.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&l===null&&(l=new ri(A,_),r===!0&&(l.format=li,l.type=ki)),a.dispose(),a.depthTexture=E?l:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let B=0;B<w.length;B++){let L=w[B];L.setSize&&L.setSize(A,_),E&&L.needsDepthTexture===!0&&L.setDepthTexture&&L.setDepthTexture(l)}},this.begin=function(R,A){if(p||R.toneMapping===qn&&w.length===0)return!1;if(S=A,A!==null){let _=A.width,E=A.height;(a.width!==_||a.height!==E)&&this.setSize(_,E)}return b===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=qn,!0},this.hasRenderPass=function(){return b},this.end=function(R,A){R.toneMapping=m,p=!0;let _=a,E=o;for(let B=0;B<w.length;B++){let L=w[B];L.enabled!==!1&&(L.render(R,E,_,A),L.needsSwap!==!1&&(_=E,E=E===o?c:o))}if(g!==R.outputColorSpace||M!==R.toneMapping){g=R.outputColorSpace,M=R.toneMapping,f.defines={},me.getTransfer(g)===Se&&(f.defines.SRGB_TRANSFER="");let B=Tg[M];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(S),R.render(d,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Hu=new tn,Vu=new ri(1,1),Wu=new dr(1),Xu=new sr,qu=new Na,Yu=new ur,Mu=[],Su=[],bu=new Float32Array(16),Eu=new Float32Array(9),Tu=new Float32Array(4);function Ds(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ke(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function jo(i,t){let e=Su[t];e===void 0&&(e=new Int32Array(t),Su[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ag(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ke(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Pg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Tu.set(n),i.uniformMatrix2fv(this.addr,!1,Tu),Ge(e,n)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;Eu.set(n),i.uniformMatrix3fv(this.addr,!1,Eu),Ge(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ke(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(ke(e,n))return;bu.set(n),i.uniformMatrix4fv(this.addr,!1,bu),Ge(e,n)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ke(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ke(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ke(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function tl(i){return i.version===0&&(i.compareFunction=lc,i.needsUpdate=!0),i}function Hg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=tl(Vu):r=Hu,e.setTexture2D(t||r,s)}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qu,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=tl(Wu):r=Yu,e.setTextureCube(t||r,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Xu,s)}function qg(i){switch(i){case 5126:return Ag;case 35664:return Rg;case 35665:return Cg;case 35666:return Ig;case 35674:return Pg;case 35675:return Lg;case 35676:return Dg;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}function Yg(i,t){i.uniform1fv(this.addr,t)}function Zg(i,t){let e=Ds(t,this.size,2);i.uniform2fv(this.addr,e)}function Jg(i,t){let e=Ds(t,this.size,3);i.uniform3fv(this.addr,e)}function $g(i,t){let e=Ds(t,this.size,4);i.uniform4fv(this.addr,e)}function Kg(i,t){let e=Ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){let e=Ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jg(i,t){let e=Ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function t0(i,t){i.uniform1iv(this.addr,t)}function e0(i,t){i.uniform2iv(this.addr,t)}function n0(i,t){i.uniform3iv(this.addr,t)}function i0(i,t){i.uniform4iv(this.addr,t)}function s0(i,t){i.uniform1uiv(this.addr,t)}function r0(i,t){i.uniform2uiv(this.addr,t)}function a0(i,t){i.uniform3uiv(this.addr,t)}function o0(i,t){i.uniform4uiv(this.addr,t)}function l0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=tl(Vu):a=Hu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function c0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||qu,r[a])}function h0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=tl(Wu):a=Yu;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function u0(i,t,e){let n=this.cache,s=t.length,r=jo(e,s);ke(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Xu,r[a])}function d0(i){switch(i){case 5126:return Yg;case 35664:return Zg;case 35665:return Jg;case 35666:return $g;case 35674:return Kg;case 35675:return Qg;case 35676:return jg;case 5124:case 35670:return t0;case 35667:case 35671:return e0;case 35668:case 35672:return n0;case 35669:case 35673:return i0;case 5125:return s0;case 36294:return r0;case 36295:return a0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return l0;case 35679:case 36299:case 36307:return c0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}var wc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},Ac=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=d0(e.type)}},Rc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ec=/(\w+)(\])?(\[|\.)?/g;function wu(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){let n=i.name,s=n.length;for(Ec.lastIndex=0;;){let r=Ec.exec(n),a=Ec.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){wu(e,l===void 0?new wc(o,i,t):new Ac(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Rc(o),wu(e,f)),e=f}}}var Ps=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);f0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var p0=37297,m0=0;function g0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ru=new ee;function _0(i){me._getMatrix(Ru,me.workingColorSpace,i);let t=`mat3( ${Ru.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Cu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+g0(i.getShaderSource(t),o)}else return r}function x0(i,t){let e=_0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var v0={[Yl]:"Linear",[Zl]:"Reinhard",[Jl]:"Cineon",[Ir]:"ACESFilmic",[Kl]:"AgX",[Ql]:"Neutral",[$l]:"Custom"};function y0(i,t){let e=v0[t];return e===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ko=new U;function M0(){me.getLuminanceCoefficients(Ko);let i=Ko.x.toFixed(4),t=Ko.y.toFixed(4),e=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function b0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function E0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gr(i){return i!==""}function Iu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Pu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(i){return i.replace(T0,w0)}function w0(i,t){let e=de[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Cc(e)}var A0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(i){return i.replace(A0,R0)}function R0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Du(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var C0={[Cr]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function I0(i){return C0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var P0={[Cs]:"ENVMAP_MODE_REFRACTION"};function L0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":P0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var D0={[lo]:"ENVMAP_BLENDING_MULTIPLY",[Xh]:"ENVMAP_BLENDING_MIX",[qh]:"ENVMAP_BLENDING_ADD"};function N0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":D0[i.combine]||"ENVMAP_BLENDING_NONE"}function U0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=I0(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=L0(e),f=N0(e),d=S0(e),u=b0(r),g=s.createProgram(),M,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Gr).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Gr).join(`
`),p.length>0&&(p+=`
`)):(M=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),p=[Du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?de.tonemapping_pars_fragment:"",e.toneMapping!==qn?y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),M0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=Cc(a),a=Iu(a,e),a=Pu(a,e),o=Cc(o),o=Iu(o,e),o=Pu(o,e),a=Lu(a),o=Lu(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",e.glslVersion===cc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+M+a,w=m+p+o,b=Au(s,s.VERTEX_SHADER,S),R=Au(s,s.FRAGMENT_SHADER,w);s.attachShader(g,b),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(L){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(b)||"",q=s.getShaderInfoLog(R)||"",P=D.trim(),H=k.trim(),J=q.trim(),V=!0,ct=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,R);else{let Y=Cu(s,b,"vertex"),nt=Cu(s,R,"fragment");Jt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+P+`
`+Y+`
`+nt)}else P!==""?Zt("WebGLProgram: Program Info Log:",P):(H===""||J==="")&&(ct=!1);ct&&(L.diagnostics={runnable:V,programLog:P,vertexShader:{log:H,prefix:M},fragmentShader:{log:J,prefix:p}})}s.deleteShader(b),s.deleteShader(R),_=new Ps(s,g),E=E0(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,p0)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=R,this}var F0=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pc(t),e.set(t,n)),n}},Pc=class{constructor(t){this.id=F0++,this.code=t,this.usedTimes=0}};function O0(i){return i===Si||i===Fr||i===Or}function B0(i,t,e,n,s,r){let a=new gs,o=new Ic,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,E,B,L,D,k){let q=L.fog,P=D.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=t.get(_.envMap||H,J),ct=d[_.type],Y=n.precision;_.precision!==null&&(Y=n.getMaxPrecision(_.precision),Y!==_.precision&&Zt("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let nt=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,rt=nt!==void 0?nt.length:0,Ut=0;P.morphAttributes.position!==void 0&&(Ut=1),P.morphAttributes.normal!==void 0&&(Ut=2),P.morphAttributes.color!==void 0&&(Ut=3);let Vt,Q,Rt,Ft;if(ct){let At=Zn[ct];Vt=At.vertexShader,Q=At.fragmentShader}else{Vt=_.vertexShader,Q=_.fragmentShader;let At=o.getVertexShaderStage(_),ye=o.getFragmentShaderStage(_);o.update(_,At,ye),Rt=At.id,Ft=ye.id}let Wt=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),Xt=D.isInstancedMesh===!0,pe=D.isBatchedMesh===!0,qt=!!_.map,ie=!!_.matcap,le=!!V,et=le&&V.isPMREMTexture===!0,yt=!!_.aoMap,Mt=!!_.lightMap,wt=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,Dt=!!_.displacementMap,Ot=!!_.emissiveMap,ae=!!_.metalnessMap,ce=!!_.roughnessMap,ge=_.anisotropy>0,N=_.clearcoat>0,Pe=_.diffuseRoughness>0,he=_.dispersion>0,Ee=_.retroreflectivity>0,Tt=_.iridescence>0,Pt=_.sheen>0,zt=_.transmission>0,Yt=ge&&!!_.anisotropyMap,T=N&&!!_.clearcoatMap,v=N&&!!_.clearcoatNormalMap,G=N&&!!_.clearcoatRoughnessMap,ht=Pe&&!!_.diffuseRoughnessMap,$=Tt&&!!_.iridescenceMap,vt=Tt&&!!_.iridescenceThicknessMap,pt=Pt&&!!_.sheenColorMap,W=Pt&&!!_.sheenRoughnessMap,K=!!_.specularMap,ft=!!_.specularColorMap,C=!!_.specularIntensityMap,tt=zt&&!!_.transmissionMap,Z=zt&&!!_.thicknessMap,xt=!!_.gradientMap,gt=!!_.alphaMap,St=_.alphaTest>0,kt=!!_.alphaHash,jt=!!_.extensions,ut=qn;_.toneMapped&&(Wt===null||Wt.isXRRenderTarget===!0)&&(ut=i.toneMapping);let Gt=et?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,re={shaderID:ct,shaderType:_.type,shaderName:_.name,vertexShader:Vt,fragmentShader:Q,defines:_.defines,customVertexShaderID:Rt,customFragmentShaderID:Ft,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:pe,batchingColor:pe&&D._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&D.instanceColor!==null,instancingMorph:Xt&&D.morphTexture!==null,outputColorSpace:Wt===null?i.outputColorSpace:Wt.isXRRenderTarget===!0?Wt.texture.colorSpace:me.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qt,matcap:ie,envMap:le,envMapMode:le&&V.mapping,envMapPMREM:et,envMapMaxLod:et?Gt.length-1:null,envMapSize:et?Gt[0].width:null,aoMap:yt,lightMap:Mt,bumpMap:wt,normalMap:Et,displacementMap:Dt,emissiveMap:Ot,normalMapObjectSpace:Et&&_.normalMapType===Jh,normalMapTangentSpace:Et&&_.normalMapType===Br,packedNormalMap:Et&&_.normalMapType===Br&&O0(_.normalMap.format),metalnessMap:ae,roughnessMap:ce,anisotropy:ge,anisotropyMap:Yt,clearcoat:N,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:G,diffuseRoughness:Pe,diffuseRoughnessMap:ht,dispersion:he,retroreflection:Ee,iridescence:Tt,iridescenceMap:$,iridescenceThicknessMap:vt,sheen:Pt,sheenColorMap:pt,sheenRoughnessMap:W,specularMap:K,specularColorMap:ft,specularIntensityMap:C,transmission:zt,transmissionMap:tt,thicknessMap:Z,gradientMap:xt,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:gt,alphaTest:St,alphaHash:kt,combine:_.combine,mapUv:qt&&u(_.map.channel),aoMapUv:yt&&u(_.aoMap.channel),lightMapUv:Mt&&u(_.lightMap.channel),bumpMapUv:wt&&u(_.bumpMap.channel),normalMapUv:Et&&u(_.normalMap.channel),displacementMapUv:Dt&&u(_.displacementMap.channel),emissiveMapUv:Ot&&u(_.emissiveMap.channel),metalnessMapUv:ae&&u(_.metalnessMap.channel),roughnessMapUv:ce&&u(_.roughnessMap.channel),anisotropyMapUv:Yt&&u(_.anisotropyMap.channel),clearcoatMapUv:T&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ht&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:$&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:W&&u(_.sheenRoughnessMap.channel),specularMapUv:K&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:C&&u(_.specularIntensityMap.channel),transmissionMapUv:tt&&u(_.transmissionMap.channel),thicknessMapUv:Z&&u(_.thicknessMap.channel),alphaMapUv:gt&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Et||ge),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(qt||gt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Ut,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:k.filter(At=>At.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:qt&&_.map.isVideoTexture===!0&&me.getTransfer(_.map.colorSpace)===Se,decodeVideoTextureEmissive:Ot&&_.emissiveMap.isVideoTexture===!0&&me.getTransfer(_.emissiveMap.colorSpace)===Se,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Xn,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:jt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&_.extensions.multiDraw===!0||pe)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function M(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)E.push(B),E.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(p(E,_),m(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapPMREM),_.push(E.envMapMaxLod),_.push(E.envMapSize),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.diffuseRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.numLightProbeGrids),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function m(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let E=d[_.type],B;if(E){let L=Zn[E];B=pu.clone(L.uniforms)}else B=_.uniforms;return B}function w(_,E){let B=h.get(E);return B!==void 0?++B.usedTimes:(B=new U0(i,E,_,s),l.push(B),h.set(E,B)),B}function b(_){if(--_.usedTimes===0){let E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:M,getUniforms:S,acquireProgram:w,releaseProgram:b,releaseShaderCache:R,programs:l,dispose:A}}function z0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function k0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Uu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,M,p,m){let S=i[t];return S===void 0?(S={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:p,group:m},i[t]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=g,S.materialVariant=a(d),S.groupOrder=M,S.renderOrder=d.renderOrder,S.z=p,S.group=m),t++,S}function c(d,u,g,M,p,m,S){S.reversedDepth===!0&&(p=-p);let w=o(d,u,g,M,p,m);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(d,u,g,M,p,m){let S=o(d,u,g,M,p,m);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,u){e.length>1&&e.sort(d||k0),n.length>1&&n.sort(u||Nu),s.length>1&&s.sort(u||Nu)}function f(){for(let d=t,u=i.length;d<u;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function G0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Uu,i.set(n,[a])):s>=r.length?(a=new Uu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function H0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Qt};break;case"SpotLight":e={position:new U,direction:new U,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function V0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var W0=0;function X0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function q0(i){let t=new H0,e=V0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new be,a=new be;function o(l){let h=0,f=0,d=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let u=0,g=0,M=0,p=0,m=0,S=0,w=0,b=0,R=0,A=0,_=0,E=0,B=0,L=0;l.sort(X0);for(let k=0,q=l.length;k<q;k++){let P=l[k],H=P.color,J=P.intensity,V=P.distance,ct=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Si?ct=P.shadow.map.texture:ct=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*J,f+=H.g*J,d+=H.b*J;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],J);L++}else if(P.isSunLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,rt=e.get(P);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=rt,n.sunShadowMap[g]=ct;let Ut=nt.getViewportCount();for(let Vt=0;Vt<Ut;Vt++)n.sunShadowMatrix[M+Vt]=nt.getMatrix(Vt),n.sunShadowCascade[M+Vt]=nt._cascadeData[Vt];M+=Ut,g++}n.sun[u]=Y,u++}else if(P.isDirectionalLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let nt=P.shadow,rt=e.get(P);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[p]=rt,n.directionalShadowMap[p]=ct,n.directionalShadowMatrix[p]=P.shadow.matrix,R++}n.directional[p]=Y,p++}else if(P.isSpotLight){let Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(H).multiplyScalar(J),Y.distance=V,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[S]=Y;let nt=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,nt.updateMatrices(P),P.castShadow&&B++),n.spotLightMatrix[S]=nt.matrix,P.castShadow){let rt=e.get(P);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[S]=rt,n.spotShadowMap[S]=ct,_++}S++}else if(P.isRectAreaLight){let Y=t.get(P);Y.color.copy(H).multiplyScalar(J),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=Y,w++}else if(P.isPointLight){let Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){let nt=P.shadow,rt=e.get(P);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[m]=rt,n.pointShadowMap[m]=ct,n.pointShadowMatrix[m]=P.shadow.matrix,A++}n.point[m]=Y,m++}else if(P.isHemisphereLight){let Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(J),Y.groundColor.copy(P.groundColor).multiplyScalar(J),n.hemi[b]=Y,b++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let D=n.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==w||D.hemiLength!==b||D.numSunShadows!==g||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==E||D.numLightProbes!==L)&&(n.sun.length=u,n.directional.length=p,n.spot.length=S,n.rectArea.length=w,n.point.length=m,n.hemi.length=b,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+E-B,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=L,D.sunLength=u,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=w,D.hemiLength=b,D.numSunShadows=g,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=E,D.numLightProbes=L,n.version=W0++)}function c(l,h){let f=0,d=0,u=0,g=0,M=0,p=0,m=h.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){let b=l[S];if(b.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),f++}else if(b.isDirectionalLight){let R=n.directional[d];R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),d++}else if(b.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(b.isRectAreaLight){let R=n.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),M++}else if(b.isPointLight){let R=n.point[u];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let R=n.hemi[p];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:n}}function Fu(i){let t=new q0(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Y0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Fu(i),t.set(s,[o])):r>=a.length?(o=new Fu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$0=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],K0=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Ou=new be,kr=new U,Tc=new U;function Q0(i,t,e){let n=new _i,s=new bt,r=new bt,a=new Ie,o=new Xa,c=new qa,l={},h=e.maxTextureSize,f={[Mi]:Je,[Je]:Mi,[Xn]:Xn},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:Z0,fragmentShader:J0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ze;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Kt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let m=this.type;this.render=function(A,_,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===wh&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);let B=i.getRenderTarget(),L=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Oi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let q=m!==this.type;q&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=A.length;P<H;P++){let J=A[P],V=J.shadow;if(V===void 0){Zt("WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ct=V.getFrameExtents();s.multiply(ct),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,V.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=Y,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===As){if(J.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new mn(s.x,s.y,{format:Si,type:Pn,minFilter:rn,magFilter:rn,generateMipmaps:!1}),V.map.texture.name=J.name+".shadowMap",V.map.depthTexture=new ri(s.x,s.y,Mn),V.map.depthTexture.name=J.name+".shadowMapDepth",V.map.depthTexture.format=ii,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xe,V.map.depthTexture.magFilter=Xe}else J.isPointLight?(V.map=new Hr(s.x),V.map.depthTexture=new dr(s.x,In)):(V.map=new mn(s.x,s.y),V.map.depthTexture=new ri(s.x,s.y,In)),V.map.depthTexture.name=J.name+".shadowMap",V.map.depthTexture.format=ii,this.type===Cr?(V.map.depthTexture.compareFunction=Y?oc:ac,V.map.depthTexture.minFilter=rn,V.map.depthTexture.magFilter=rn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xe,V.map.depthTexture.magFilter=Xe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let nt=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();J.isPointLight!==!0&&V.updateMatrices(J,E);let rt=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:E.layers;for(let Ut=0;Ut<nt;Ut++){let Vt=V.getCamera(Ut);if(J.isPointLight){let Q=V.camera,Rt=V.matrix,Ft=J.distance||Q.far;Ft!==Q.far&&(Q.far=Ft,Q.updateProjectionMatrix()),kr.setFromMatrixPosition(J.matrixWorld),Q.position.copy(kr),Tc.copy(Q.position),Tc.add($0[Ut]),Q.up.copy(K0[Ut]),Q.lookAt(Tc),Q.updateMatrixWorld(),Rt.makeTranslation(-kr.x,-kr.y,-kr.z),Ou.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ou,Q.coordinateSystem,Q.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Ut),i.clear();else{Ut===0&&(i.setRenderTarget(V.map),i.clear());let Q=V.getViewport(Ut);a.set(r.x*Q.x,r.y*Q.y,r.x*Q.z,r.y*Q.w),k.viewport(a)}n=V.getFrustum(Ut),b(_,E,Vt,J,rt,this.type)}V.isPointLightShadow!==!0&&this.type===As&&S(V,E),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(B,L,D)};function S(A,_){let E=t.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new mn(s.x,s.y,{format:Si,type:Pn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,E,d,M,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,E,u,M,null)}function w(A,_,E,B){let L=null,D=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)L=D;else if(L=E.isPointLight===!0?c:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let k=L.uuid,q=_.uuid,P=l[k];P===void 0&&(P={},l[k]=P);let H=P[q];H===void 0&&(H=L.clone(),P[q]=H,_.addEventListener("dispose",R)),L=H}if(L.visible=_.visible,L.wireframe=_.wireframe,B===As?L.side=_.shadowSide!==null?_.shadowSide:_.side:L.side=_.shadowSide!==null?_.shadowSide:f[_.side],L.alphaMap=_.alphaMap,L.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,L.map=_.map,L.clipShadows=_.clipShadows,L.clippingPlanes=_.clippingPlanes,L.clipIntersection=_.clipIntersection,L.displacementMap=_.displacementMap,L.displacementScale=_.displacementScale,L.displacementBias=_.displacementBias,L.wireframeLinewidth=_.wireframeLinewidth,L.linewidth=_.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let k=i.properties.get(L);k.light=E}return L}function b(A,_,E,B,L,D){if(A.visible===!1)return;if(A.layers.test(L)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===As)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);let P=t.update(A),H=A.material;if(Array.isArray(H)){let J=P.groups;for(let V=0,ct=J.length;V<ct;V++){let Y=J[V],nt=H[Y.materialIndex];if(nt&&nt.visible){let rt=w(A,nt,B,D);A.onBeforeShadow(i,A,_,E,P,rt,Y),i.renderBufferDirect(E,null,P,rt,A,Y),A.onAfterShadow(i,A,_,E,P,rt,Y)}}}else if(H.visible){let J=w(A,H,B,D);A.onBeforeShadow(i,A,_,E,P,J,null),i.renderBufferDirect(E,null,P,J,A,null),A.onAfterShadow(i,A,_,E,P,J,null)}}let q=A.children;for(let P=0,H=q.length;P<H;P++)b(q[P],_,E,B,L,D)}function R(A){A.target.removeEventListener("dispose",R);for(let E in l){let B=l[E],L=A.target.uuid;L in B&&(B[L].dispose(),delete B[L])}}}function j0(i,t){function e(){let C=!1,tt=new Ie,Z=null,xt=new Ie(0,0,0,0);return{setMask:function(gt){Z!==gt&&!C&&(i.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){C=gt},setClear:function(gt,St,kt,jt,ut){ut===!0&&(gt*=jt,St*=jt,kt*=jt),tt.set(gt,St,kt,jt),xt.equals(tt)===!1&&(i.clearColor(gt,St,kt,jt),xt.copy(tt))},reset:function(){C=!1,Z=null,xt.set(-1,0,0,0)}}}function n(){let C=!1,tt=!1,Z=null,xt=null,gt=null;return{setReversed:function(St){if(tt!==St){let kt=t.get("EXT_clip_control");St?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),tt=St;let jt=gt;gt=null,this.setClear(jt)}},getReversed:function(){return tt},setTest:function(St){St?dt(i.DEPTH_TEST):Xt(i.DEPTH_TEST)},setMask:function(St){Z!==St&&!C&&(i.depthMask(St),Z=St)},setFunc:function(St){if(tt&&(St=au[St]),xt!==St){switch(St){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Ta:i.depthFunc(i.EQUAL);break;case wa:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=St}},setLocked:function(St){C=St},setClear:function(St){gt!==St&&(gt=St,tt&&(St=1-St),i.clearDepth(St))},reset:function(){C=!1,Z=null,xt=null,gt=null,tt=!1}}}function s(){let C=!1,tt=null,Z=null,xt=null,gt=null,St=null,kt=null,jt=null,ut=null;return{setTest:function(Gt){C||(Gt?dt(i.STENCIL_TEST):Xt(i.STENCIL_TEST))},setMask:function(Gt){tt!==Gt&&!C&&(i.stencilMask(Gt),tt=Gt)},setFunc:function(Gt,re,At){(Z!==Gt||xt!==re||gt!==At)&&(i.stencilFunc(Gt,re,At),Z=Gt,xt=re,gt=At)},setOp:function(Gt,re,At){(St!==Gt||kt!==re||jt!==At)&&(i.stencilOp(Gt,re,At),St=Gt,kt=re,jt=At)},setLocked:function(Gt){C=Gt},setClear:function(Gt){ut!==Gt&&(i.clearStencil(Gt),ut=Gt)},reset:function(){C=!1,tt=null,Z=null,xt=null,gt=null,St=null,kt=null,jt=null,ut=null}}}let r=new e,a=new n,o=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],M=null,p=!1,m=null,S=null,w=null,b=null,R=null,A=null,_=null,E=new Qt(0,0,0),B=0,L=!1,D=null,k=null,q=null,P=null,H=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ct=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=ct>=1):Y.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=ct>=2);let nt=null,rt={},Ut=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),Q=new Ie().fromArray(Ut),Rt=new Ie().fromArray(Vt);function Ft(C,tt,Z,xt){let gt=new Uint8Array(4),St=i.createTexture();i.bindTexture(C,St),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<Z;kt++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(tt+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return St}let Wt={};Wt[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Wt[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Wt[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Wt[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),dt(i.DEPTH_TEST),a.setFunc(hs),wt(!1),Et(Gl),dt(i.CULL_FACE),yt(Oi);function dt(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Xt(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function pe(C,tt){return d[C]!==tt?(i.bindFramebuffer(C,tt),d[C]=tt,C===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=tt),C===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function qt(C,tt){let Z=g,xt=!1;if(C){Z=u.get(tt),Z===void 0&&(Z=[],u.set(tt,Z));let gt=C.textures;if(Z.length!==gt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let St=0,kt=gt.length;St<kt;St++)Z[St]=i.COLOR_ATTACHMENT0+St;Z.length=gt.length,xt=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,xt=!0);xt&&i.drawBuffers(Z)}function ie(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let le={[Bi]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};le[Ih]=i.MIN,le[Ph]=i.MAX;let et={[Lh]:i.ZERO,[Dh]:i.ONE,[Nh]:i.SRC_COLOR,[Xl]:i.SRC_ALPHA,[kh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[ql]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[Gh]:i.CONSTANT_COLOR,[Hh]:i.ONE_MINUS_CONSTANT_COLOR,[Vh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(C,tt,Z,xt,gt,St,kt,jt,ut,Gt){if(C===Oi){p===!0&&(Xt(i.BLEND),p=!1);return}if(p===!1&&(dt(i.BLEND),p=!0),C!==Ah){if(C!==m||Gt!==L){if((S!==Bi||R!==Bi)&&(i.blendEquation(i.FUNC_ADD),S=Bi,R=Bi),Gt)switch(C){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFunc(i.ONE,i.ONE);break;case Vl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Jt("WebGLState: Invalid blending: ",C);break}else switch(C){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Hl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vl:Jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wl:Jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Jt("WebGLState: Invalid blending: ",C);break}w=null,b=null,A=null,_=null,E.set(0,0,0),B=0,m=C,L=Gt}return}gt=gt||tt,St=St||Z,kt=kt||xt,(tt!==S||gt!==R)&&(i.blendEquationSeparate(le[tt],le[gt]),S=tt,R=gt),(Z!==w||xt!==b||St!==A||kt!==_)&&(i.blendFuncSeparate(et[Z],et[xt],et[St],et[kt]),w=Z,b=xt,A=St,_=kt),(jt.equals(E)===!1||ut!==B)&&(i.blendColor(jt.r,jt.g,jt.b,ut),E.copy(jt),B=ut),m=C,L=!1}function Mt(C,tt){C.side===Xn?Xt(i.CULL_FACE):dt(i.CULL_FACE);let Z=C.side===Je;tt&&(Z=!Z),wt(Z),C.blending===Rs&&C.transparent===!1?yt(Oi):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let xt=C.stencilWrite;o.setTest(xt),xt&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ot(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(C){D!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),D=C)}function Et(C){C!==Eh?(dt(i.CULL_FACE),C!==k&&(C===Gl?i.cullFace(i.BACK):C===Th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xt(i.CULL_FACE),k=C}function Dt(C){C!==q&&(V&&i.lineWidth(C),q=C)}function Ot(C,tt,Z){C?(dt(i.POLYGON_OFFSET_FILL),(P!==tt||H!==Z)&&(P=tt,H=Z,a.getReversed()&&(tt=-tt,Z=-Z),i.polygonOffset(tt,Z))):Xt(i.POLYGON_OFFSET_FILL)}function ae(C){C?dt(i.SCISSOR_TEST):Xt(i.SCISSOR_TEST)}function ce(C){C===void 0&&(C=i.TEXTURE0+J-1),nt!==C&&(i.activeTexture(C),nt=C)}function ge(C,tt,Z){Z===void 0&&(nt===null?Z=i.TEXTURE0+J-1:Z=nt);let xt=rt[Z];xt===void 0&&(xt={type:void 0,texture:void 0},rt[Z]=xt),(xt.type!==C||xt.texture!==tt)&&(nt!==Z&&(i.activeTexture(Z),nt=Z),i.bindTexture(C,tt||Wt[C]),xt.type=C,xt.texture=tt)}function N(){let C=rt[nt];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Pe(){try{i.compressedTexImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function he(){try{i.compressedTexImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Ee(){try{i.texSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Tt(){try{i.texSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function Yt(){try{i.texStorage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function T(){try{i.texStorage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Jt("WebGLState:",C)}}function G(){try{i.texImage3D(...arguments)}catch(C){Jt("WebGLState:",C)}}function ht(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function $(C,tt){f[C]!==tt&&(i.pixelStorei(C,tt),f[C]=tt)}function vt(C){Q.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function pt(C){Rt.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),Rt.copy(C))}function W(C,tt){let Z=l.get(tt);Z===void 0&&(Z=new WeakMap,l.set(tt,Z));let xt=Z.get(C);xt===void 0&&(xt=i.getUniformBlockIndex(tt,C.name),i.uniformBlockBinding(tt,xt,xt),Z.set(C,xt))}function K(C,tt,Z){let gt=l.get(tt).get(C);c[gt]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,gt,Z),c[gt]=Z)}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},nt=null,rt={},d={},c={},u=new WeakMap,g=[],M=null,p=!1,m=null,S=null,w=null,b=null,R=null,A=null,_=null,E=new Qt(0,0,0),B=0,L=!1,D=null,k=null,q=null,P=null,H=null,Q.set(0,0,i.canvas.width,i.canvas.height),Rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:dt,disable:Xt,bindFramebuffer:pe,drawBuffers:qt,useProgram:ie,setBlending:yt,setMaterial:Mt,setFlipSided:wt,setCullFace:Et,setLineWidth:Dt,setPolygonOffset:Ot,setScissorTest:ae,activeTexture:ce,bindTexture:ge,unbindTexture:N,compressedTexImage2D:Pe,compressedTexImage3D:he,texImage2D:v,texImage3D:G,pixelStorei:$,getParameter:ht,updateUBOMapping:W,uniformBlockBinding:K,texStorage2D:Yt,texStorage3D:T,texSubImage2D:Ee,texSubImage3D:Tt,compressedTexSubImage2D:Pt,compressedTexSubImage3D:zt,scissor:vt,viewport:pt,reset:ft}}function t_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new bt,h=new WeakMap,f=new Set,d,u=new WeakMap,g=new Set,M=new FinalizationRegistry(T=>g.delete(T)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return p?new OffscreenCanvas(T,v):ds("canvas")}function S(T,v,G){let ht=1,$=Yt(T);if(($.width>G||$.height>G)&&(ht=G/Math.max($.width,$.height)),ht<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let vt=Math.floor(ht*$.width),pt=Math.floor(ht*$.height);d===void 0&&(d=m(vt,pt));let W=v?m(vt,pt):d;return W.width=vt,W.height=pt,W.getContext("2d").drawImage(T,0,0,vt,pt),Zt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+vt+"x"+pt+")."),W}else return"data"in T&&Zt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function w(T){return T.generateMipmaps}function b(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(T,v,G,ht,$,vt=!1){if(T!==null){if(i[T]!==void 0)return i[T];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pt;ht&&(pt=t.get("EXT_texture_norm16"),pt||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let W=v;if(v===i.RED&&(G===i.FLOAT&&(W=i.R32F),G===i.HALF_FLOAT&&(W=i.R16F),G===i.UNSIGNED_BYTE&&(W=i.R8),G===i.UNSIGNED_SHORT&&pt&&(W=pt.R16_EXT),G===i.SHORT&&pt&&(W=pt.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.R8UI),G===i.UNSIGNED_SHORT&&(W=i.R16UI),G===i.UNSIGNED_INT&&(W=i.R32UI),G===i.BYTE&&(W=i.R8I),G===i.SHORT&&(W=i.R16I),G===i.INT&&(W=i.R32I)),v===i.RG&&(G===i.FLOAT&&(W=i.RG32F),G===i.HALF_FLOAT&&(W=i.RG16F),G===i.UNSIGNED_BYTE&&(W=i.RG8),G===i.UNSIGNED_SHORT&&pt&&(W=pt.RG16_EXT),G===i.SHORT&&pt&&(W=pt.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RG8UI),G===i.UNSIGNED_SHORT&&(W=i.RG16UI),G===i.UNSIGNED_INT&&(W=i.RG32UI),G===i.BYTE&&(W=i.RG8I),G===i.SHORT&&(W=i.RG16I),G===i.INT&&(W=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGB8UI),G===i.UNSIGNED_SHORT&&(W=i.RGB16UI),G===i.UNSIGNED_INT&&(W=i.RGB32UI),G===i.BYTE&&(W=i.RGB8I),G===i.SHORT&&(W=i.RGB16I),G===i.INT&&(W=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),G===i.UNSIGNED_INT&&(W=i.RGBA32UI),G===i.BYTE&&(W=i.RGBA8I),G===i.SHORT&&(W=i.RGBA16I),G===i.INT&&(W=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&pt&&(W=pt.RGB16_EXT),G===i.SHORT&&pt&&(W=pt.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),v===i.RGBA){let K=vt?ir:me.getTransfer($);G===i.FLOAT&&(W=i.RGBA32F),G===i.HALF_FLOAT&&(W=i.RGBA16F),G===i.UNSIGNED_BYTE&&(W=K===Se?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&pt&&(W=pt.RGBA16_EXT),G===i.SHORT&&pt&&(W=pt.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function _(T,v){let G;return T?v===null||v===In||v===ki?G=i.DEPTH24_STENCIL8:v===Mn?G=i.DEPTH32F_STENCIL8:v===Is&&(G=i.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===In||v===ki?G=i.DEPTH_COMPONENT24:v===Mn?G=i.DEPTH_COMPONENT32F:v===Is&&(G=i.DEPTH_COMPONENT16),G}function E(T,v){return w(T)===!0||T.isFramebufferTexture&&T.minFilter!==Xe&&T.minFilter!==rn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function B(T){let v=new WeakRef(T);n.get(T).__ref=v,g.add(v),M.register(T,v,v)}function L(T){let v=n.get(T).__ref;v!==void 0&&(g.delete(v),M.unregister(v))}function D(T){q(T.target)}function k(T){P(T.target)}function q(T){T.removeEventListener("dispose",D),L(T),J(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function P(T){T.removeEventListener("dispose",k),L(T),ct(T)}function H(){for(let T of g){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):q(v))}g.clear(),f.clear()}function J(T){let v=n.get(T);if(v.__webglInit===void 0)return;let G=T.source,ht=u.get(G);if(ht){let $=ht[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&V(T),Object.keys(ht).length===0&&u.delete(G)}n.remove(T)}function V(T){let v=n.get(T);i.deleteTexture(v.__webglTexture);let G=T.source,ht=u.get(G);delete ht[v.__cacheKey],a.memory.textures--}function ct(T){let v=n.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let G=T.depthTexture;if(G&&G.renderTarget===T&&q(G),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let vt=0;vt<v.__webglFramebuffer[$].length;vt++)i.deleteFramebuffer(v.__webglFramebuffer[$][vt]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ht=T.textures;for(let $=0,vt=ht.length;$<vt;$++){let pt=n.get(ht[$]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(ht[$])}n.remove(T)}let Y=0;function nt(){Y=0}function rt(){return Y}function Ut(T){Y=T}function Vt(){let T=Y;return T>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,T}function Q(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function Rt(T,v){let G=n.get(T);if(T.isVideoTexture&&Pt(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){let ht=T.image;if(ht===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(G,T,v);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function Ft(T,v){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Mt(G,T,v);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function Wt(T,v){let G=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Mt(G,T,v);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function dt(T,v){let G=n.get(T);if(T.version>0&&G.__version!==T.version){wt(G,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let Xt={[Ca]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},pe={[Xe]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Pr]:i.NEAREST_MIPMAP_LINEAR,[rn]:i.LINEAR,[uo]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},qt={[Kh]:i.NEVER,[lc]:i.ALWAYS,[Qh]:i.LESS,[ac]:i.LEQUAL,[jh]:i.EQUAL,[oc]:i.GEQUAL,[tu]:i.GREATER,[eu]:i.NOTEQUAL};function ie(T,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===rn||v.magFilter===uo||v.magFilter===Pr||v.magFilter===oi||v.minFilter===rn||v.minFilter===uo||v.minFilter===Pr||v.minFilter===oi)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Xt[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Xt[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Xt[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pe[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pe[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,qt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xe||v.minFilter!==Pr&&v.minFilter!==oi||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function le(T,v){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",D),B(v));let ht=v.source,$=u.get(ht);$===void 0&&($={},u.set(ht,$));let vt=Q(v);if(vt!==T.__cacheKey){$[vt]===void 0&&($[vt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),$[vt].usedTimes++;let pt=$[T.__cacheKey];pt!==void 0&&($[T.__cacheKey].usedTimes--,pt.usedTimes===0&&V(v)),T.__cacheKey=vt,T.__webglTexture=$[vt].texture}return G}function et(T,v,G){return Math.floor(Math.floor(T/G)/v)}function yt(T,v,G,ht){let vt=T.updateRanges;if(vt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,ht,v.data);else{vt.sort((C,tt)=>C.start-tt.start);let pt=0;for(let C=1;C<vt.length;C++){let tt=vt[pt],Z=vt[C],xt=tt.start+tt.count,gt=et(Z.start,v.width,4),St=et(tt.start,v.width,4);Z.start<=xt+1&&gt===St&&et(Z.start+Z.count-1,v.width,4)===gt?tt.count=Math.max(tt.count,Z.start+Z.count-tt.start):(++pt,vt[pt]=Z)}vt.length=pt+1;let W=e.getParameter(i.UNPACK_ROW_LENGTH),K=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,tt=vt.length;C<tt;C++){let Z=vt[C],xt=Math.floor(Z.start/4),gt=Math.ceil(Z.count/4),St=xt%v.width,kt=Math.floor(xt/v.width),jt=gt,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,St),e.pixelStorei(i.UNPACK_SKIP_ROWS,kt),e.texSubImage2D(i.TEXTURE_2D,0,St,kt,jt,ut,G,ht,v.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,W),e.pixelStorei(i.UNPACK_SKIP_PIXELS,K),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function Mt(T,v,G){let ht=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ht=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ht=i.TEXTURE_3D);let $=le(T,v),vt=v.source;e.bindTexture(ht,T.__webglTexture,i.TEXTURE0+G);let pt=n.get(vt);if(vt.version!==pt.__version||$===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ut=me.getPrimaries(me.workingColorSpace),Gt=v.colorSpace===ci?null:me.getPrimaries(v.colorSpace),re=v.colorSpace===ci||ut===Gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let K=S(v.image,!1,s.maxTextureSize);K=zt(v,K);let ft=r.convert(v.format,v.colorSpace),C=r.convert(v.type),tt=A(v.internalFormat,ft,C,v.normalized,v.colorSpace,v.isVideoTexture);ie(ht,v);let Z,xt=v.mipmaps,gt=v.isVideoTexture!==!0,St=pt.__version===void 0||$===!0,kt=vt.dataReady,jt=E(v,K);if(v.isDepthTexture)tt=_(v.format===li,v.type),St&&(gt?e.texStorage2D(i.TEXTURE_2D,1,tt,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,tt,K.width,K.height,0,ft,C,null));else if(v.isDataTexture)if(xt.length>0){gt&&St&&e.texStorage2D(i.TEXTURE_2D,jt,tt,xt[0].width,xt[0].height);for(let ut=0,Gt=xt.length;ut<Gt;ut++)Z=xt[ut],gt?kt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Z.width,Z.height,ft,C,Z.data):e.texImage2D(i.TEXTURE_2D,ut,tt,Z.width,Z.height,0,ft,C,Z.data);v.generateMipmaps=!1}else gt?(St&&e.texStorage2D(i.TEXTURE_2D,jt,tt,K.width,K.height),kt&&yt(v,K,ft,C)):e.texImage2D(i.TEXTURE_2D,0,tt,K.width,K.height,0,ft,C,K.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){gt&&St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,tt,xt[0].width,xt[0].height,K.depth);for(let ut=0,Gt=xt.length;ut<Gt;ut++)if(Z=xt[ut],v.format!==Ln)if(ft!==null)if(gt){if(kt)if(v.layerUpdates.size>0){let re=xc(Z.width,Z.height,v.format,v.type);for(let At of v.layerUpdates){let ye=Z.data.subarray(At*re/Z.data.BYTES_PER_ELEMENT,(At+1)*re/Z.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,At,Z.width,Z.height,1,ft,ye)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Z.width,Z.height,K.depth,ft,Z.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,tt,Z.width,Z.height,K.depth,0,Z.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?kt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,Z.width,Z.height,K.depth,ft,C,Z.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,tt,Z.width,Z.height,K.depth,0,ft,C,Z.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{gt&&St&&e.texStorage2D(i.TEXTURE_2D,jt,tt,xt[0].width,xt[0].height);for(let ut=0,Gt=xt.length;ut<Gt;ut++)Z=xt[ut],v.format!==Ln?ft!==null?gt?kt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,Z.width,Z.height,ft,Z.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,tt,Z.width,Z.height,0,Z.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?kt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Z.width,Z.height,ft,C,Z.data):e.texImage2D(i.TEXTURE_2D,ut,tt,Z.width,Z.height,0,ft,C,Z.data)}else if(v.isDataArrayTexture)if(gt){if(St&&e.texStorage3D(i.TEXTURE_2D_ARRAY,jt,tt,K.width,K.height,K.depth),kt)if(v.layerUpdates.size>0){let ut=xc(K.width,K.height,v.format,v.type);for(let Gt of v.layerUpdates){let re=K.data.subarray(Gt*ut/K.data.BYTES_PER_ELEMENT,(Gt+1)*ut/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Gt,K.width,K.height,1,ft,C,re)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ft,C,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,tt,K.width,K.height,K.depth,0,ft,C,K.data);else if(v.isData3DTexture)gt?(St&&e.texStorage3D(i.TEXTURE_3D,jt,tt,K.width,K.height,K.depth),kt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ft,C,K.data)):e.texImage3D(i.TEXTURE_3D,0,tt,K.width,K.height,K.depth,0,ft,C,K.data);else if(v.isFramebufferTexture){if(St)if(gt)e.texStorage2D(i.TEXTURE_2D,jt,tt,K.width,K.height);else{let ut=K.width,Gt=K.height;for(let re=0;re<jt;re++)e.texImage2D(i.TEXTURE_2D,re,tt,ut,Gt,0,ft,C,null),ut>>=1,Gt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),K.parentNode!==ut){ut.appendChild(K),f.add(v),ut.onpaint=Gt=>{let re=Gt.changedElements;for(let At of f)re.includes(At.image)&&(At.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,K);else{let re=i.RGBA,At=i.RGBA,ye=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,re,At,ye,K)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(gt&&St){let ut=Yt(xt[0]);e.texStorage2D(i.TEXTURE_2D,jt,tt,ut.width,ut.height)}for(let ut=0,Gt=xt.length;ut<Gt;ut++)Z=xt[ut],gt?kt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,ft,C,Z):e.texImage2D(i.TEXTURE_2D,ut,tt,ft,C,Z);v.generateMipmaps=!1}else if(gt){if(St){let ut=Yt(K);e.texStorage2D(i.TEXTURE_2D,jt,tt,ut.width,ut.height)}kt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,C,K)}else e.texImage2D(i.TEXTURE_2D,0,tt,ft,C,K);w(v)&&v.mipmapsAutoUpdate===!0&&b(ht),pt.__version=vt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function wt(T,v,G){if(v.image.length!==6)return;let ht=le(T,v),$=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);let vt=n.get($);if($.version!==vt.__version||ht===!0){e.activeTexture(i.TEXTURE0+G);let pt=me.getPrimaries(me.workingColorSpace),W=v.colorSpace===ci?null:me.getPrimaries(v.colorSpace),K=v.colorSpace===ci||pt===W?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ft=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,tt=[];for(let At=0;At<6;At++)!ft&&!C?tt[At]=S(v.image[At],!0,s.maxCubemapSize):tt[At]=C?v.image[At].image:v.image[At],tt[At]=zt(v,tt[At]);let Z=tt[0],xt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),St=A(v.internalFormat,xt,gt,v.normalized,v.colorSpace),kt=v.isVideoTexture!==!0,jt=vt.__version===void 0||ht===!0,ut=$.dataReady,Gt=E(v,Z);ie(i.TEXTURE_CUBE_MAP,v);let re;if(v.isDepthTexture){if(St=_(v.format===li,v.type),jt)if(kt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,St,Z.width,Z.height);else for(let At=0;At<6;At++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,St,Z.width,Z.height,0,xt,gt,null)}else if(ft){kt&&jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,St,Z.width,Z.height);for(let At=0;At<6;At++){re=tt[At].mipmaps;for(let ye=0;ye<re.length;ye++){let Ne=re[ye];v.format!==Ln?xt!==null?kt?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye,0,0,Ne.width,Ne.height,xt,Ne.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye,St,Ne.width,Ne.height,0,Ne.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye,0,0,Ne.width,Ne.height,xt,gt,Ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye,St,Ne.width,Ne.height,0,xt,gt,Ne.data)}}}else{if(re=v.mipmaps,kt&&jt){re.length>0&&Gt++;let At=Yt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,St,At.width,At.height)}for(let At=0;At<6;At++)if(C){kt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,tt[At].width,tt[At].height,xt,gt,tt[At].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,St,tt[At].width,tt[At].height,0,xt,gt,tt[At].data);for(let ye=0;ye<re.length;ye++){let He=re[ye].image[At].image;kt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye+1,0,0,He.width,He.height,xt,gt,He.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye+1,St,He.width,He.height,0,xt,gt,He.data)}}else{kt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,xt,gt,tt[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,St,xt,gt,tt[At]);for(let ye=0;ye<re.length;ye++){let Ne=re[ye];kt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye+1,0,0,xt,gt,Ne.image[At]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,ye+1,St,xt,gt,Ne.image[At])}}}w(v)&&v.mipmapsAutoUpdate===!0&&b(i.TEXTURE_CUBE_MAP),vt.__version=$.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Et(T,v,G,ht,$,vt){let pt=r.convert(G.format,G.colorSpace),W=r.convert(G.type),K=A(G.internalFormat,pt,W,G.normalized,G.colorSpace),ft=n.get(v),C=n.get(G);if(C.__renderTarget=v,!ft.__hasExternalTextures){let tt=Math.max(1,v.width>>vt),Z=Math.max(1,v.height>>vt);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,vt,K,tt,Z,v.depth,0,pt,W,null):e.texImage2D($,vt,K,tt,Z,0,pt,W,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,$,C.__webglTexture,0,Ee(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ht,$,C.__webglTexture,vt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(T,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){let ht=v.depthTexture,$=ht&&ht.isDepthTexture?ht.type:null,vt=_(v.stencilBuffer,$),pt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(v),vt,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(v),vt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,vt,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,T)}else{let ht=v.textures;for(let $=0;$<ht.length;$++){let vt=ht[$],pt=r.convert(vt.format,vt.colorSpace),W=r.convert(vt.type),K=A(vt.internalFormat,pt,W,vt.normalized,vt.colorSpace);Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee(v),K,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee(v),K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(T,v,G){let ht=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);$.__renderTarget=v;let vt=ht?v.depthTexture.image[0]:v.depthTexture.image;(!$.__webglTexture||vt.width!==v.width||vt.height!==v.height)&&(vt.width=v.width,vt.height=v.height,v.depthTexture.needsUpdate=!0),ht?dt(v.depthTexture,0):Rt(v.depthTexture,0);let pt=$.__webglTexture,W=Ee(v),K=ht?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ft=v.depthTexture.format===li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ii)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,pt,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,pt,0);else if(v.depthTexture.format===li)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,K,pt,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,ft,K,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(T){let v=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let ht=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ht){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ht.removeEventListener("dispose",$)};ht.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=ht}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let ht=0;ht<6;ht++)Ot(v.__webglFramebuffer[ht],T,ht);else T.texture.mipmaps.length>0?Ot(v.__webglFramebuffer[0],T,0):Ot(v.__webglFramebuffer,T,0);else if(G){v.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ht]),v.__webglDepthbuffer[ht]===void 0)v.__webglDepthbuffer[ht]=i.createRenderbuffer(),Dt(v.__webglDepthbuffer[ht],T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer[ht];i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,vt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Dt(v.__webglDepthbuffer,T,!1);else{let $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,vt),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,vt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(T,v,G){let ht=n.get(T);v!==void 0&&Et(ht.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ae(T)}function ge(T){let v=T.texture,G=n.get(T),ht=n.get(v);T.addEventListener("dispose",k),B(T);let $=T.textures,vt=T.isWebGLCubeRenderTarget===!0,pt=$.length>1;if(pt||(ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture()),ht.__version=v.version,a.memory.textures++),vt){G.__webglFramebuffer=[];for(let W=0;W<6;W++)if(v.mipmaps.length>0){G.__webglFramebuffer[W]=[];for(let K=0;K<v.mipmaps.length;K++)G.__webglFramebuffer[W][K]=i.createFramebuffer()}else G.__webglFramebuffer[W]=i.createFramebuffer()}else{if(v.mipmaps.length>0){G.__webglFramebuffer=[];for(let W=0;W<v.mipmaps.length;W++)G.__webglFramebuffer[W]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(pt)for(let W=0,K=$.length;W<K;W++){let ft=n.get($[W]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let W=0;W<$.length;W++){let K=$[W];G.__webglColorRenderbuffer[W]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[W]);let ft=r.convert(K.format,K.colorSpace),C=r.convert(K.type),tt=A(K.internalFormat,ft,C,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),Z=Ee(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,tt,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+W,i.RENDERBUFFER,G.__webglColorRenderbuffer[W])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(vt){e.bindTexture(i.TEXTURE_CUBE_MAP,ht.__webglTexture),ie(i.TEXTURE_CUBE_MAP,v);for(let W=0;W<6;W++)if(v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Et(G.__webglFramebuffer[W][K],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,K);else Et(G.__webglFramebuffer[W],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0);w(v)?b(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let W=0,K=$.length;W<K;W++){let ft=$[W],C=n.get(ft),tt=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(tt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,C.__webglTexture),ie(tt,ft),Et(G.__webglFramebuffer,T,ft,i.COLOR_ATTACHMENT0+W,tt,0),w(ft)&&b(tt)}e.unbindTexture()}else{let W=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(W=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(W,ht.__webglTexture),ie(W,v),v.mipmaps.length>0)for(let K=0;K<v.mipmaps.length;K++)Et(G.__webglFramebuffer[K],T,v,i.COLOR_ATTACHMENT0,W,K);else Et(G.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,W,0);w(v)?b(W):v.mipmaps.length>0&&i.texParameteri(W,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&ae(T)}function N(T){let v=T.textures;for(let G=0,ht=v.length;G<ht;G++){let $=v[G];if(w($)&&$.mipmapsAutoUpdate===!0){let vt=R(T),pt=n.get($).__webglTexture;e.bindTexture(vt,pt),b(vt),e.unbindTexture()}}}let Pe=[];function he(T){if(T.samples>0){if(Tt(T)===!1){let v=T.textures,G=T.width,ht=T.height,$=i.COLOR_BUFFER_BIT,vt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(T),W=v.length>1;if(W)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),W){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);let C=n.get(v[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,G,ht,0,0,G,ht,$,i.NEAREST),c===!0&&(Pe.length=0,Pe.push(i.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&Pe.push(vt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),W)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ft]);let C=n.get(v[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,C,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ee(T){return Math.min(s.maxSamples,T.samples)}function Tt(T){let v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Pt(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function zt(T,v){let G=T.colorSpace,ht=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==nr&&G!==ci&&(me.getTransfer(G)===Se?(ht!==Ln||$!==ln)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Jt("WebGLTextures: Unsupported texture color space:",G)),v}function Yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Vt,this.resetTextureUnits=nt,this.getTextureUnits=rt,this.setTextureUnits=Ut,this.setTexture2D=Rt,this.setTexture2DArray=Ft,this.setTexture3D=Wt,this.setTextureCube=dt,this.rebindTextures=ce,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Tt,this.dispose=H}function e_(i,t){function e(n,s=ci){let r,a=me.getTransfer(s);if(n===ln)return i.UNSIGNED_BYTE;if(n===po)return i.UNSIGNED_SHORT_4_4_4_4;if(n===mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ic)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===ec)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===fo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===sc)return i.ALPHA;if(n===rc)return i.RGB;if(n===Ln)return i.RGBA;if(n===ii)return i.DEPTH_COMPONENT;if(n===li)return i.DEPTH_STENCIL;if(n===go)return i.RED;if(n===_o)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===xo)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Nr||n===Ur)if(a===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Fr||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return a===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===wo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ao)return r.COMPRESSED_R11_EAC;if(n===Ro)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fr)return r.COMPRESSED_RG11_EAC;if(n===Co)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Go||n===Ho||n===Vo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Io)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ho)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vo)return a===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wo)return a===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yo||n===Zo||n===Or||n===Jo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var n_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,i_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Wn({vertexShader:n_,fragmentShader:i_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Kt(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dc=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,M=typeof XRWebGLBinding<"u",p=new Lc,m={},S=e.getContextAttributes(),w=null,b=null,R=[],A=[],_=new bt,E=null,B=null,L=new je;L.viewport=new Ie;let D=new je;D.viewport=new Ie;let k=[L,D],q=new ao,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let Rt=R[Q];return Rt===void 0&&(Rt=new _s,R[Q]=Rt),Rt.getTargetRaySpace()},this.getControllerGrip=function(Q){let Rt=R[Q];return Rt===void 0&&(Rt=new _s,R[Q]=Rt),Rt.getGripSpace()},this.getHand=function(Q){let Rt=R[Q];return Rt===void 0&&(Rt=new _s,R[Q]=Rt),Rt.getHandSpace()};function J(Q){let Rt=A.indexOf(Q.inputSource);if(Rt===-1)return;let Ft=R[Rt];Ft!==void 0&&(Ft.update(Q.inputSource,Q.frame,l||a),Ft.dispatchEvent({type:Q.type,data:Q.inputSource}))}function V(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ct);for(let Q=0;Q<R.length;Q++){let Rt=A[Q];Rt!==null&&(A[Q]=null,R[Q].disconnect(Rt))}P=null,H=null,p.reset();for(let Q in m)delete m[Q];if(t.setRenderTarget(w),u=null,d=null,f=null,s=null,b=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(_.width,_.height,!1),B!==null){let Q=B.camera;Q.fov=B.fov,Q.zoom=B.zoom,Q.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ft=null,Wt=null,dt=null;S.depth&&(dt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ft=S.stencil?li:ii,Wt=S.stencil?ki:In);let Xt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Xt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new mn(d.textureWidth,d.textureHeight,{format:Ln,type:ln,depthTexture:new ri(d.textureWidth,d.textureHeight,Wt,void 0,void 0,void 0,void 0,void 0,void 0,Ft),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Ft={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,Ft),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new mn(u.framebufferWidth,u.framebufferHeight,{format:Ln,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ct(Q){for(let Rt=0;Rt<Q.removed.length;Rt++){let Ft=Q.removed[Rt],Wt=A.indexOf(Ft);Wt>=0&&(A[Wt]=null,R[Wt].disconnect(Ft))}for(let Rt=0;Rt<Q.added.length;Rt++){let Ft=Q.added[Rt],Wt=A.indexOf(Ft);if(Wt===-1){for(let Xt=0;Xt<R.length;Xt++)if(Xt>=A.length){A.push(Ft),Wt=Xt;break}else if(A[Xt]===null){A[Xt]=Ft,Wt=Xt;break}if(Wt===-1)break}let dt=R[Wt];dt&&dt.connect(Ft)}}function Y(Q,Rt){Rt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(Rt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let Rt=Q.near,Ft=Q.far;p.texture!==null&&(p.depthNear>0&&(Rt=p.depthNear),p.depthFar>0&&(Ft=p.depthFar)),q.near=D.near=L.near=Rt,q.far=D.far=L.far=Ft,(P!==q.near||H!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,H=q.far),q.layers.mask=Q.layers.mask|6,L.layers.mask=q.layers.mask&-5,D.layers.mask=q.layers.mask&-3;let Wt=Q.parent,dt=q.cameras;Y(q,Wt);for(let Xt=0;Xt<dt.length;Xt++)Y(dt[Xt],Wt);q.projectionMatrix.copy(L.projectionMatrix),q.projectionMatrixInverse.copy(L.projectionMatrixInverse),B===null&&Q.isPerspectiveCamera&&(B={camera:Q,fov:Q.fov,zoom:Q.zoom}),nt(Q,q,Wt)};function nt(Q,Rt,Ft){Ft===null?Q.matrix.copy(Rt.matrixWorld):(Q.matrix.copy(Ft.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(Rt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(Rt.projectionMatrix),Q.projectionMatrixInverse.copy(Rt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=ps*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Q){return m[Q]};let rt=null;function Ut(Q,Rt){if(h=Rt.getViewerPose(l||a),g=Rt,h!==null){let Ft=h.views;u!==null&&(t.setRenderTargetFramebuffer(b,u.framebuffer),t.setRenderTarget(b));let Wt=!1;Ft.length!==q.cameras.length&&(q.cameras.length=0,Wt=!0);for(let qt=0;qt<Ft.length;qt++){let ie=Ft[qt],le=null;if(u!==null)le=u.getViewport(ie);else{let yt=f.getViewSubImage(d,ie);le=yt.viewport,qt===0&&(t.setRenderTargetTextures(b,yt.colorTexture,yt.depthStencilTexture),t.setRenderTarget(b))}let et=k[qt];et===void 0&&(et=new je,et.layers.enable(qt),et.viewport=new Ie,k[qt]=et),et.matrix.fromArray(ie.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(ie.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(le.x,le.y,le.width,le.height),qt===0&&(q.matrix.copy(et.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Wt===!0&&q.cameras.push(et)}let dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let qt=f.getDepthInformation(Ft[0]);qt&&qt.isValid&&qt.texture&&p.init(qt,s.renderState)}if(dt&&dt.includes("camera-access")&&M){t.state.unbindTexture(),f=n.getBinding();for(let qt=0;qt<Ft.length;qt++){let ie=Ft[qt].camera;if(ie){let le=m[ie];le||(le=new fr,m[ie]=le);let et=f.getCameraImage(ie);le.sourceTexture=et}}}}for(let Ft=0;Ft<R.length;Ft++){let Wt=A[Ft],dt=R[Ft];Wt!==null&&dt!==void 0&&dt.update(Wt,Rt,l||a)}rt&&rt(Q,Rt),Rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Rt}),g=null}let Vt=new Bu;Vt.setAnimationLoop(Ut),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},s_=new be,Zu=new ee;Zu.set(-1,0,0,0,1,0,0,0,1);function r_(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,mc(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,w,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),w=S.envMap,b=S.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(s_.makeRotationFromEuler(b)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zu),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function a_(i,t,e,n){let s={},r={};function a(S,w){let b=w.program;n.uniformBlockBinding(S,b,s[S.id])}function o(S,w){let b=s[S.id];b===void 0&&(g(S),b=c(S),s[S.id]=b,S.addEventListener("dispose",p));let R=w.program;n.updateUBOMapping(S,R);let A=t.render.frame;r[S.id]!==A&&(l(S),r[S.id]=A)}function c(S){let w=i.createBuffer(),b=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,b,R),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function l(S){let w=s[S.id],b=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,_=b.length;A<_;A++){let E=b[A];if(Array.isArray(E))for(let B=0,L=E.length;B<L;B++)h(E[B],A,B,R);else h(E,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(S,w,b,R){if(d(S,w,b,R)===!0){let A=S.__offset,_=S.value;if(Array.isArray(_)){let E=0;for(let B=0;B<_.length;B++){let L=_[B],D=M(L,!0);f(L,S.__data,E),E+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,S.__data)}}function f(S,w,b){typeof S=="number"||typeof S=="boolean"?w[b]=S:S.isMatrix3?(w[b]=S.elements[0],w[b+1]=S.elements[1],w[b+2]=S.elements[2],w[b+3]=0,w[b+4]=S.elements[3],w[b+5]=S.elements[4],w[b+6]=S.elements[5],w[b+7]=0,w[b+8]=S.elements[6],w[b+9]=S.elements[7],w[b+10]=S.elements[8],w[b+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-b),b):S.toArray(w,b)}function d(S,w,b,R){let A=S.value,_=w+"_"+b;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let E=R[_],B=!1;for(let L=0;L<A.length;L++)u(A[L],E,L)===!0&&(B=!0);return B}return u(A,R,_)}function u(S,w,b){if(w[b]===void 0)return typeof S=="number"||typeof S=="boolean"?w[b]=S:ArrayBuffer.isView(S)?w[b]=S.slice():w[b]=S.clone(),!0;{let R=w[b];if(typeof S=="number"||typeof S=="boolean"){if(R!==S)return w[b]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(R.equals(S)===!1)return R.copy(S),!0}}return!1}function g(S){let w=S.uniforms,b=0,R=16;for(let _=0,E=w.length;_<E;_++){let B=Array.isArray(w[_])?w[_]:[w[_]];for(let L=0,D=B.length;L<D;L++){let k=B[L],q=Array.isArray(k.value)?k.value:[k.value],P=Array.isArray(w[_])||Array.isArray(k.value),H=b;for(let V=0,ct=q.length;V<ct;V++){let Y=q[V],nt=M(Y,P),rt=b%R,Ut=rt%nt.boundary,Vt=rt+Ut;b+=Ut,Vt!==0&&R-Vt<nt.storage&&(b+=R-Vt),V===0&&(H=b),b+=nt.storage}let J=k.type==="int"?Int32Array:k.type==="uint"?Uint32Array:Float32Array;k.__data=new J((b-H)/Float32Array.BYTES_PER_ELEMENT),k.__offset=H}}let A=b%R;return A>0&&(b+=R-A),S.__size=b,S.__cache={},this}function M(S,w){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=16,b.storage=48):S.isMatrix4?(b.boundary=16,b.storage=64):S.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(S){let w=S.target;w.removeEventListener("dispose",p),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function m(){for(let S in s)i.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function l_(){return Yn===null&&(Yn=new lr(o_,16,16,Si,Pn),Yn.name="DFG_LUT",Yn.minFilter=rn,Yn.magFilter=rn,Yn.wrapS=Fn,Yn.wrapT=Fn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var Qo=class{constructor(t={}){let{canvas:e=iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=ln}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=u,p=new Set([vo,xo,_o]),m=new Set([ln,In,Is,ki,po,mo]),S=new Uint32Array(4),w=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],E=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let L=this,D=!1,k=null,q=null,P=null,H=null;this._outputColorSpace=Qe;let J=0,V=0,ct=null,Y=-1,nt=null,rt=new Ie,Ut=new Ie,Vt=null,Q=new Qt(0),Rt=0,Ft=e.width,Wt=e.height,dt=1,Xt=null,pe=null,qt=new Ie(0,0,Ft,Wt),ie=new Ie(0,0,Ft,Wt),le=!1,et=new _i,yt=new Ua,Mt=!1,wt=!1,Et=new be,Dt=new U,Ot=new Ie,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function ge(){return ct===null?dt:1}let N=n;function Pe(x,y){return e.getContext(x,y)}let he,Ee,Tt,Pt,zt,Yt,T,v,G,ht,$,vt,pt,W,K,ft,C,tt,Z,xt,gt,St,kt;try{let x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",At,!1),N===null){let y="webgl2";if(N=Pe(y,x),N===null)throw Pe(y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(x){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",At,!1),Jt("WebGLRenderer: "+x.message),x}function jt(){he=new vg(N),he.init(),gt=new e_(N,he),Ee=new lg(N,he,t,gt),Tt=new j0(N,he),Ee.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),q=N.createFramebuffer(),P=N.createFramebuffer(),H=N.createFramebuffer(),Pt=new Sg(N),zt=new z0,Yt=new t_(N,he,Tt,zt,Ee,gt,Pt),T=new xg(L),v=new Ef(N),St=new ag(N,v),G=new yg(N,v,Pt,St),ht=new Eg(N,G,v,St,Pt),tt=new bg(N,Ee,Yt),K=new cg(zt),$=new B0(L,T,he,Ee,St,K),vt=new r_(L,zt),pt=new G0,W=new Y0(he),C=new rg(L,T,Tt,ht,g,c),ft=new Q0(L,ht,Ee),kt=new a_(N,Pt,Ee,Tt),Z=new og(N,he,Pt),xt=new Mg(N,he,Pt),Pt.programs=$.programs,L.capabilities=Ee,L.extensions=he,L.properties=zt,L.renderLists=pt,L.shadowMap=ft,L.state=Tt,L.info=Pt}M!==ln&&(B=new wg(M,e.width,e.height,o,s,r));let ut=new Dc(L,N);this.xr=ut,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let x=he.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){let x=he.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(x){x!==void 0&&(dt=x,this.setSize(Ft,Wt,!1))},this.getSize=function(x){return x.set(Ft,Wt)},this.setSize=function(x,y,F=!0){if(ut.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ft=x,Wt=y,e.width=Math.floor(x*dt),e.height=Math.floor(y*dt),F===!0&&(e.style.width=x+"px",e.style.height=y+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,x,y)},this.getDrawingBufferSize=function(x){return x.set(Ft*dt,Wt*dt).floor()},this.setDrawingBufferSize=function(x,y,F){Ft=x,Wt=y,dt=F,e.width=Math.floor(x*F),e.height=Math.floor(y*F),this.setViewport(0,0,x,y)},this.setEffects=function(x){if(M===ln){Jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let y=0;y<x.length;y++)if(x[y].isOutputPass===!0){Zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(rt)},this.getViewport=function(x){return x.copy(qt)},this.setViewport=function(x,y,F,I){x.isVector4?qt.set(x.x,x.y,x.z,x.w):qt.set(x,y,F,I),Tt.viewport(rt.copy(qt).multiplyScalar(ge()).round())},this.getScissor=function(x){return x.copy(ie)},this.setScissor=function(x,y,F,I){x.isVector4?ie.set(x.x,x.y,x.z,x.w):ie.set(x,y,F,I),Tt.scissor(Ut.copy(ie).multiplyScalar(ge()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(x){Tt.setScissorTest(le=x)},this.setOpaqueSort=function(x){Xt=x},this.setTransparentSort=function(x){pe=x},this.getClearColor=function(x){return x.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(x=!0,y=!0,F=!0){let I=0;if(x){let O=!1;if(ct!==null){let it=ct.texture.format;O=p.has(it)}if(O){let it=ct.texture.type,_t=m.has(it),j=C.getClearColor(),lt=C.getClearAlpha(),mt=j.r,at=j.g,Ct=j.b;_t?(S[0]=mt,S[1]=at,S[2]=Ct,S[3]=lt,N.clearBufferuiv(N.COLOR,0,S)):(w[0]=mt,w[1]=at,w[2]=Ct,w[3]=lt,N.clearBufferiv(N.COLOR,0,w))}else I|=N.COLOR_BUFFER_BIT}y&&(I|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),F&&(I|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&N.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),k=x},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",At,!1),C.dispose(),pt.dispose(),W.dispose(),Yt.dispose(),zt.dispose(),T.dispose(),ht.dispose(),G.dispose(),St.dispose(),kt.dispose(),$.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Bs),ut.removeEventListener("sessionend",Ei),Dn.stop()};function Gt(x){x.preventDefault(),hc("WebGLRenderer: Context Lost."),D=!0}function re(){hc("WebGLRenderer: Context Restored."),D=!1;let x=Pt.autoReset,y=ft.enabled,F=ft.autoUpdate,I=ft.needsUpdate,O=ft.type;jt(),Pt.autoReset=x,ft.enabled=y,ft.autoUpdate=F,ft.needsUpdate=I,ft.type=O}function At(x){Jt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ye(x){let y=x.target;y.removeEventListener("dispose",ye),Ne(y)}function Ne(x){He(x),zt.remove(x)}function He(x){let y=zt.get(x).programs;y!==void 0&&(y.forEach(function(F){$.releaseProgram(F)}),x.isShaderMaterial&&$.releaseShaderCache(x))}this.renderBufferDirect=function(x,y,F,I,O,it){y===null&&(y=ae);let _t=O.isMesh&&O.matrixWorld.determinantAffine()<0,j=te(x,y,F,I,O);Tt.setMaterial(I,_t);let lt=F.index,mt=1;if(I.wireframe===!0){if(lt=G.getWireframeAttribute(F),lt===void 0)return;mt=2}let at=F.drawRange,Ct=F.attributes.position,ot=at.start*mt,Bt=(at.start+at.count)*mt;it!==null&&(ot=Math.max(ot,it.start*mt),Bt=Math.min(Bt,(it.start+it.count)*mt)),lt!==null?(ot=Math.max(ot,0),Bt=Math.min(Bt,lt.count)):Ct!=null&&(ot=Math.max(ot,0),Bt=Math.min(Bt,Ct.count));let se=Bt-ot;if(se<0||se===1/0)return;St.setup(O,I,j,F,lt);let ne,ue=Z;if(lt!==null&&(ne=v.get(lt),ue=xt,ue.setIndex(ne)),O.isMesh)I.wireframe===!0?(Tt.setLineWidth(I.wireframeLinewidth*ge()),ue.setMode(N.LINES)):ue.setMode(N.TRIANGLES);else if(O.isLine){let Ae=I.linewidth;Ae===void 0&&(Ae=1),Tt.setLineWidth(Ae*ge()),O.isLineSegments?ue.setMode(N.LINES):O.isLineLoop?ue.setMode(N.LINE_LOOP):ue.setMode(N.LINE_STRIP)}else O.isPoints?ue.setMode(N.POINTS):O.isSprite&&ue.setMode(N.TRIANGLES);if(O.isBatchedMesh)if(he.get("WEBGL_multi_draw"))ue.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Ae=O._multiDrawStarts,Lt=O._multiDrawCounts,Ue=O._multiDrawCount,_e=lt?v.get(lt).bytesPerElement:1,Nn=zt.get(I).currentProgram.getUniforms();for(let Be=0;Be<Ue;Be++)Nn.setValue(N,"_gl_DrawID",Be),ue.render(Ae[Be]/_e,Lt[Be])}else if(O.isInstancedMesh)ue.renderInstances(ot,se,O.count);else if(F.isInstancedBufferGeometry){let Ae=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Lt=Math.min(F.instanceCount,Ae);ue.renderInstances(ot,se,Lt)}else ue.render(ot,se)};function Os(x,y,F,I){k!==null&&x.isNodeMaterial&&k.setObject(I,x),Mt===!0&&K.setState(x,F,!1),x.transparent===!0&&x.side===Xn&&x.forceSinglePass===!1?(x.side=Je,x.needsUpdate=!0,z(x,y,I),x.side=Mi,x.needsUpdate=!0,z(x,y,I),x.side=Xn):z(x,y,I)}this.compile=function(x,y,F=null){F===null&&(F=x),k!==null&&k.renderStart(x,y,F),A=W.get(F),A.init(y),E.push(A),F.traverseVisible(function(O){O.isLight&&O.layers.test(y.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),x!==F&&x.traverseVisible(function(O){O.isLight&&O.layers.test(y.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights(),k!==null&&k.updateLights(A.state.lightsArray),wt=this.localClippingEnabled,Mt=K.init(this.clippingPlanes,wt),Mt===!0&&K.setGlobalState(this.clippingPlanes,y),k!==null&&ft.render(A.state.shadowsArray,F,y);let I=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let it=O.material;if(it)if(Array.isArray(it))for(let _t=0;_t<it.length;_t++){let j=it[_t];Os(j,F,y,O),I.add(j)}else Os(it,F,y,O),I.add(it)}),A=E.pop(),k!==null&&k.renderEnd(),I},this.compileAsync=function(x,y,F=null){let I=this.compile(x,y,F);return new Promise(O=>{function it(){if(I.forEach(function(_t){let lt=zt.get(_t).currentProgram;(lt===void 0||lt.isReady())&&I.delete(_t)}),I.size===0){O(x);return}setTimeout(it,10)}he.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Wi=null;function il(x){Wi&&Wi(x)}function Bs(){Dn.stop()}function Ei(){Dn.start()}let Dn=new Bu;Dn.setAnimationLoop(il),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(x){Wi=x,ut.setAnimationLoop(x),x===null?Dn.stop():Dn.start()},ut.addEventListener("sessionstart",Bs),ut.addEventListener("sessionend",Ei),this.render=function(x,y){if(y!==void 0&&y.isCamera!==!0){Jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;k!==null&&k.renderStart(x,y);let F=ut.enabled===!0&&ut.isPresenting===!0,I=B!==null&&(ct===null||F)&&B.begin(L,ct);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(y),y=ut.getCamera()),x.isScene===!0&&x.onBeforeRender(L,x,y,ct),A=W.get(x,E.length),A.init(y),A.state.textureUnits=Yt.getTextureUnits(),E.push(A),Et.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),y.isArrayCamera?yt.setFromArrayCamera(y):et.setFromProjectionMatrix(Et,yn,y.reversedDepth),wt=this.localClippingEnabled,Mt=K.init(this.clippingPlanes,wt),R=pt.get(x,_.length),R.init(),_.push(R),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let _t=L.xr.getDepthSensingMesh();_t!==null&&Oe(_t,y,-1/0,L.sortObjects)}Oe(x,y,0,L.sortObjects),R.finish(),k!==null&&k.updateLights(A.state.lightsArray),L.sortObjects===!0&&R.sort(Xt,pe),ce=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,ce&&C.addToRenderList(R,x),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&K.beginShadows();let O=A.state.shadowsArray;if(ft.render(O,x,y),Mt===!0&&K.endShadows(),(I&&B.hasRenderPass())===!1){let _t=R.opaque,j=R.transmissive;if(A.setupLights(),y.isArrayCamera){let lt=y.cameras;if(j.length>0)for(let mt=0,at=lt.length;mt<at;mt++){let Ct=lt[mt];Xi(_t,j,x,Ct)}ce&&C.render(x);for(let mt=0,at=lt.length;mt<at;mt++){let Ct=lt[mt];hi(R,x,Ct,Ct.viewport)}}else j.length>0&&Xi(_t,j,x,y),ce&&C.render(x),hi(R,x,y)}ct!==null&&V===0&&(Yt.updateMultisampleRenderTarget(ct),Yt.updateRenderTargetMipmap(ct)),I&&B.end(L),x.isScene===!0&&x.onAfterRender(L,x,y),St.resetDefaultState(),Y=-1,nt=null,E.pop(),E.length>0?(A=E[E.length-1],Yt.setTextureUnits(A.state.textureUnits),Mt===!0&&K.setGlobalState(L.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,k!==null&&k.renderEnd()};function Oe(x,y,F,I){if(x.visible===!1)return;if(x.layers.test(y.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(y);else if(x.isLight)A.pushLight(x),x.castShadow&&A.pushShadow(x);else if(x.isSprite){let _t=y.isArrayCamera?yt:et;if(!x.frustumCulled||x.intersectsFrustum(_t)){I&&Ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Et);let j=ht.update(x),lt=x.material;lt.visible&&R.push(x,j,lt,F,Ot.z,null,y)}}else if(x.isMesh||x.isLine||x.isPoints){let _t=y.isArrayCamera?yt:et;if(!x.frustumCulled||x.intersectsFrustum(_t)){let j=ht.update(x),lt=x.material;if(I&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ot.copy(x.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Ot.copy(j.boundingSphere.center)),Ot.applyMatrix4(x.matrixWorld).applyMatrix4(Et)),Array.isArray(lt)){let mt=j.groups;for(let at=0,Ct=mt.length;at<Ct;at++){let ot=mt[at],Bt=lt[ot.materialIndex];Bt&&Bt.visible&&R.push(x,j,Bt,F,Ot.z,ot,y)}}else lt.visible&&R.push(x,j,lt,F,Ot.z,null,y)}}}let it=x.children;for(let _t=0,j=it.length;_t<j;_t++)Oe(it[_t],y,F,I)}function hi(x,y,F,I){let{opaque:O,transmissive:it,transparent:_t}=x;A.setupLightsView(F),Mt===!0&&K.setGlobalState(L.clippingPlanes,F),I&&Tt.viewport(rt.copy(I)),O.length>0&&Ti(O,y,F),it.length>0&&Ti(it,y,F),_t.length>0&&Ti(_t,y,F),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Xi(x,y,F,I){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[I.id]===void 0){let ot=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[I.id]=new mn(1,1,{generateMipmaps:!0,type:ot?Pn:ln,minFilter:oi,samples:Math.max(4,Ee.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:me.workingColorSpace})}let it=A.state.transmissionRenderTarget[I.id],_t=I.viewport||rt;it.setSize(_t.z*L.transmissionResolutionScale,_t.w*L.transmissionResolutionScale);let j=L.getRenderTarget(),lt=L.getActiveCubeFace(),mt=L.getActiveMipmapLevel();L.setRenderTarget(it),L.getClearColor(Q),Rt=L.getClearAlpha(),Rt<1&&L.setClearColor(16777215,.5),L.clear(),ce&&C.render(F);let at=L.toneMapping;L.toneMapping=qn;let Ct=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),A.setupLightsView(I),Mt===!0&&K.setGlobalState(L.clippingPlanes,I),Ti(x,F,I),Yt.updateMultisampleRenderTarget(it),Yt.updateRenderTargetMipmap(it),he.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Bt=0,se=y.length;Bt<se;Bt++){let ne=y[Bt],{object:ue,geometry:Ae,material:Lt,group:Ue}=ne;if(Lt.side===Xn&&ue.layers.test(I.layers)){let _e=Lt.side;Lt.side=Je,Lt.needsUpdate=!0,we(ue,F,I,Ae,Lt,Ue),Lt.side=_e,Lt.needsUpdate=!0,ot=!0}}ot===!0&&(Yt.updateMultisampleRenderTarget(it),Yt.updateRenderTargetMipmap(it))}L.setRenderTarget(j,lt,mt),L.setClearColor(Q,Rt),Ct!==void 0&&(I.viewport=Ct),L.toneMapping=at}function Ti(x,y,F){let I=y.isScene===!0?y.overrideMaterial:null;for(let O=0,it=x.length;O<it;O++){let _t=x[O],{object:j,geometry:lt,group:mt}=_t,at=_t.material;at.allowOverride===!0&&I!==null&&(at=I),j.layers.test(F.layers)&&we(j,y,F,lt,at,mt)}}function we(x,y,F,I,O,it){k!==null&&O.isNodeMaterial&&k.setObject(x,O),x.onBeforeRender(L,y,F,I,O,it),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(L,y,F,I,x,it),O.transparent===!0&&O.side===Xn&&O.forceSinglePass===!1?(O.side=Je,O.needsUpdate=!0,L.renderBufferDirect(F,y,I,O,x,it),O.side=Mi,O.needsUpdate=!0,L.renderBufferDirect(F,y,I,O,x,it),O.side=Xn):L.renderBufferDirect(F,y,I,O,x,it),x.onAfterRender(L,y,F,I,O,it)}function zs(x){let y=0;for(let F of x)F.texture!==null&&y++;return y}function z(x,y,F){y.isScene!==!0&&(y=ae);let I=zt.get(x),O=A.state.lights,it=A.state.shadowsArray,_t=O.state.version,j=$.getParameters(x,O.state,it,y,F,A.state.lightProbeGridArray),lt=$.getProgramCacheKey(j),mt=I.programs;I.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?y.environment:null,I.fog=y.fog;let at=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;I.envMap=T.get(x.envMap||I.environment,at),I.envMapRotation=I.environment!==null&&x.envMap===null?y.environmentRotation:x.envMapRotation,mt===void 0&&(x.addEventListener("dispose",ye),mt=new Map,I.programs=mt,I.programVariants=new Map);let Ct=mt.get(lt);if(Ct!==void 0){if(I.currentProgram===Ct&&I.lightsStateVersion===_t)return Ht(x,j),Ct}else j.uniforms=$.getUniforms(x),k!==null&&x.isNodeMaterial&&k.build(x,F,j),x.onBeforeCompile(j,L),Ct=$.acquireProgram(j,lt),mt.set(lt,Ct),I.uniforms=j.uniforms;let ot=I.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(ot.clippingPlanes=K.uniform),Ht(x,j),I.needsLights=Me(x),I.lightsStateVersion=_t,I.needsLights&&(ot.ambientLightColor.value=O.state.ambient,ot.lightProbe.value=O.state.probe,ot.sunLights.value=O.state.sun,ot.sunLightShadows.value=O.state.sunShadow,ot.directionalLights.value=O.state.directional,ot.directionalLightShadows.value=O.state.directionalShadow,ot.spotLights.value=O.state.spot,ot.spotLightShadows.value=O.state.spotShadow,ot.rectAreaLights.value=O.state.rectArea,ot.ltc_1.value=O.state.rectAreaLTC1,ot.ltc_2.value=O.state.rectAreaLTC2,ot.pointLights.value=O.state.point,ot.pointLightShadows.value=O.state.pointShadow,ot.hemisphereLights.value=O.state.hemi,ot.sunShadowMatrix.value=O.state.sunShadowMatrix,ot.sunShadowCascade.value=O.state.sunShadowCascade,ot.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ot.spotLightMatrix.value=O.state.spotLightMatrix,ot.spotLightMap.value=O.state.spotLightMap,ot.pointShadowMatrix.value=O.state.pointShadowMatrix),I.numLightProbeGrids=zs(A.state.lightProbeGridArray),I.currentProgram=Ct,I.uniformsList=null,Ct}function X(x,y,F,I,O){let it=zt.get(x),_t=it.currentProgram.id+","+I+","+O,j=it.programVariants.get(_t);return j===void 0?(j=z(x,y,F),it.programVariants.set(_t,j)):(it.currentProgram=j,it.uniformsList=null,it.outputColorSpace=I,it.toneMapping=O),j}function st(x){if(x.uniformsList===null){let y=x.currentProgram.getUniforms();x.uniformsList=Ps.seqWithValue(y.seq,x.uniforms)}return x.uniformsList}function Ht(x,y){let F=zt.get(x);F.outputColorSpace=y.outputColorSpace,F.batching=y.batching,F.batchingColor=y.batchingColor,F.instancing=y.instancing,F.instancingColor=y.instancingColor,F.instancingMorph=y.instancingMorph,F.skinning=y.skinning,F.morphTargets=y.morphTargets,F.morphNormals=y.morphNormals,F.morphColors=y.morphColors,F.morphTargetsCount=y.morphTargetsCount,F.numClippingPlanes=y.numClippingPlanes,F.numIntersection=y.numClipIntersection,F.vertexAlphas=y.vertexAlphas,F.vertexTangents=y.vertexTangents,F.toneMapping=y.toneMapping}function te(x,y,F,I,O){y.isScene!==!0&&(y=ae),Yt.resetTextureUnits();let it=y.fog,_t=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?y.environment:null,j=ct===null?L.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:me.workingColorSpace,lt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,mt=T.get(I.envMap||_t,lt),at=I.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Ct=!!F.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),ot=!!F.morphAttributes.position,Bt=!!F.morphAttributes.normal,se=!!F.morphAttributes.color,ne=qn;I.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ne=L.toneMapping);let ue=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ae=ue!==void 0?ue.length:0,Lt=zt.get(I),Ue=A.state.lights;if(Mt===!0&&(wt===!0||x!==nt)){let Te=x===nt&&I.id===Y;K.setState(I,x,Te)}let _e=!1,Nn=!1;I.version===Lt.__version?Lt.needsLights&&Lt.lightsStateVersion!==Ue.state.version||O.isBatchedMesh&&Lt.batching===!1||!O.isBatchedMesh&&Lt.batching===!0||O.isBatchedMesh&&Lt.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Lt.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Lt.instancing===!1||!O.isInstancedMesh&&Lt.instancing===!0||O.isSkinnedMesh&&Lt.skinning===!1||!O.isSkinnedMesh&&Lt.skinning===!0||O.isInstancedMesh&&Lt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Lt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Lt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Lt.instancingMorph===!1&&O.morphTexture!==null||Lt.envMap!==mt||I.fog===!0&&Lt.fog!==it||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==K.numPlanes||Lt.numIntersection!==K.numIntersection)||Lt.vertexAlphas!==at||Lt.vertexTangents!==Ct||Lt.morphTargets!==ot||Lt.morphNormals!==Bt||Lt.morphColors!==se||Lt.morphTargetsCount!==Ae||Lt.numLightProbeGrids!==zs(A.state.lightProbeGridArray)?_e=!0:(Lt.outputColorSpace!==j||Lt.toneMapping!==ne)&&(Nn=!0):(_e=!0,Lt.__version=I.version);let Be=Lt.currentProgram;(_e===!0||Nn===!0)&&(Be=Nn===!0?X(I,y,O,j,ne):z(I,y,O),k&&I.isNodeMaterial&&k.onUpdateProgram(I,Be,Lt));let Nt=!1,sn=!1,Ye=!1,oe=Be.getUniforms(),ve=Lt.uniforms;if(Tt.useProgram(Be.program)&&(Nt=!0,sn=!0,Ye=!0),I.id!==Y&&(Y=I.id,sn=!0),Nt||nt!==x){Tt.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),oe.setValue(N,"projectionMatrix",x.projectionMatrix),oe.setValue(N,"viewMatrix",x.matrixWorldInverse);let Le=oe.map.cameraPosition;Le!==void 0&&Le.setValue(N,Dt.setFromMatrixPosition(x.matrixWorld)),Ee.logarithmicDepthBuffer&&oe.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&oe.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),nt!==x&&(nt=x,sn=!0,Ye=!0)}if(Lt.needsLights&&(Ue.state.sunShadowMap.length>0&&oe.setValue(N,"sunShadowMap",Ue.state.sunShadowMap,Yt),Ue.state.directionalShadowMap.length>0&&oe.setValue(N,"directionalShadowMap",Ue.state.directionalShadowMap,Yt),Ue.state.spotShadowMap.length>0&&oe.setValue(N,"spotShadowMap",Ue.state.spotShadowMap,Yt),Ue.state.pointShadowMap.length>0&&oe.setValue(N,"pointShadowMap",Ue.state.pointShadowMap,Yt)),O.isSkinnedMesh){oe.setOptional(N,O,"bindMatrix"),oe.setOptional(N,O,"bindMatrixInverse");let Te=O.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),oe.setValue(N,"boneTexture",Te.boneTexture,Yt))}O.isBatchedMesh&&(oe.setOptional(N,O,"batchingTexture"),oe.setValue(N,"batchingTexture",O._matricesTexture,Yt),oe.setOptional(N,O,"batchingIdTexture"),oe.setValue(N,"batchingIdTexture",O._indirectTexture,Yt),oe.setOptional(N,O,"batchingColorTexture"),O._colorsTexture!==null&&oe.setValue(N,"batchingColorTexture",O._colorsTexture,Yt));let Ve=F.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&tt.update(O,F,Be),(sn||Lt.receiveShadow!==O.receiveShadow)&&(Lt.receiveShadow=O.receiveShadow,oe.setValue(N,"receiveShadow",O.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&y.environment!==null&&(ve.envMapIntensity.value=y.environmentIntensity),ve.dfgLUT!==void 0&&(ve.dfgLUT.value=l_()),sn){if(oe.setValue(N,"toneMappingExposure",L.toneMappingExposure),Lt.needsLights&&$t(ve,Ye),it&&I.fog===!0&&vt.refreshFogUniforms(ve,it),vt.refreshMaterialUniforms(ve,I,dt,Wt,A.state.transmissionRenderTarget[x.id]),Lt.needsLights&&Lt.numLightProbeGrids>0){let Te=b,Le=0;for(let dn of A.state.lightProbeGridArray)dn.texture!==null&&(Te.textures[Le]=dn.texture,Te.min[Le]=dn.boundingBox.min,Te.max[Le]=dn.boundingBox.max,Te.resolution[Le]=dn.resolution,Le++);for(let dn in Te)Te[dn].length=Le;ve.probesSH.value=Te.textures,ve.probesMin.value=Te.min,ve.probesMax.value=Te.max,ve.probesResolution.value=Te.resolution}Ps.upload(N,st(Lt),ve,Yt)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ps.upload(N,st(Lt),ve,Yt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&oe.setValue(N,"center",O.center),oe.setValue(N,"modelViewMatrix",O.modelViewMatrix),oe.setValue(N,"normalMatrix",O.normalMatrix),oe.setValue(N,"modelMatrix",O.matrixWorld),I.uniformsGroups!==void 0){let Te=I.uniformsGroups;for(let Le=0,dn=Te.length;Le<dn;Le++){let ks=Te[Le];kt.update(ks,Be),kt.bind(ks,Be)}}return Be}function $t(x,y){x.ambientLightColor.needsUpdate=y,x.lightProbe.needsUpdate=y,x.sunLights.needsUpdate=y,x.sunLightShadows.needsUpdate=y,x.directionalLights.needsUpdate=y,x.directionalLightShadows.needsUpdate=y,x.pointLights.needsUpdate=y,x.pointLightShadows.needsUpdate=y,x.spotLights.needsUpdate=y,x.spotLightShadows.needsUpdate=y,x.rectAreaLights.needsUpdate=y,x.hemisphereLights.needsUpdate=y}function Me(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(x,y,F){let I=zt.get(x);I.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),zt.get(x.texture).__webglTexture=y,zt.get(x.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:F,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,y){let F=zt.get(x);F.__webglFramebuffer=y,F.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(x,y=0,F=0){ct=x,J=y,V=F;let I=null,O=!1,it=!1;if(x){let j=zt.get(x);if(j.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(N.FRAMEBUFFER,j.__webglFramebuffer),rt.copy(x.viewport),Ut.copy(x.scissor),Vt=x.scissorTest,Tt.viewport(rt),Tt.scissor(Ut),Tt.setScissorTest(Vt),Y=-1;return}else if(j.__webglFramebuffer===void 0)Yt.setupRenderTarget(x);else if(j.__hasExternalTextures)Yt.rebindTextures(x,zt.get(x.texture).__webglTexture,zt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){let at=x.depthTexture;if(j.__boundDepthTexture!==at){if(at!==null&&zt.has(at)&&(x.width!==at.image.width||x.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Yt.setupDepthRenderbuffer(x)}}let lt=x.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(it=!0);let mt=zt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(mt[y])?I=mt[y][F]:I=mt[y],O=!0):x.samples>0&&Yt.useMultisampledRTT(x)===!1?I=zt.get(x).__webglMultisampledFramebuffer:Array.isArray(mt)?I=mt[F]:I=mt,rt.copy(x.viewport),Ut.copy(x.scissor),Vt=x.scissorTest}else rt.copy(qt).multiplyScalar(dt).floor(),Ut.copy(ie).multiplyScalar(dt).floor(),Vt=le;if(F!==0&&(I=q),Tt.bindFramebuffer(N.FRAMEBUFFER,I)&&Tt.drawBuffers(x,I),Tt.viewport(rt),Tt.scissor(Ut),Tt.setScissorTest(Vt),O){let j=zt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+y,j.__webglTexture,F)}else if(it){let j=y;for(let lt=0;lt<x.textures.length;lt++){let mt=zt.get(x.textures[lt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+lt,mt.__webglTexture,F,j)}}else if(x!==null&&F!==0){let j=zt.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,j.__webglTexture,F)}Y=-1};function xe(x){let y=zt.get(x);return(y.__readFormat!==x.format||y.__readType!==x.type)&&(y.__readFormat=x.format,y.__readType=x.type,y.__formatReadable=Ee.textureFormatReadable(x.format),y.__typeReadable=Ee.textureTypeReadable(x.type)),y}this.readRenderTargetPixels=function(x,y,F,I,O,it,_t,j=0){if(!(x&&x.isWebGLRenderTarget)){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let lt=zt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(lt=lt[_t],Array.isArray(lt)&&(lt=lt[0])),lt){Tt.bindFramebuffer(N.FRAMEBUFFER,lt);try{let mt=x.textures[j],at=mt.format,Ct=mt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+j);let ot=xe(mt);if(ot.__formatReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){Jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=x.width-I&&F>=0&&F<=x.height-O&&N.readPixels(y,F,I,O,gt.convert(at),gt.convert(Ct),it)}finally{let mt=ct!==null?zt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(x,y,F,I,O,it,_t,j=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let lt=zt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&_t!==void 0&&(lt=lt[_t],Array.isArray(lt)&&(lt=lt[0])),lt)if(y>=0&&y<=x.width-I&&F>=0&&F<=x.height-O){Tt.bindFramebuffer(N.FRAMEBUFFER,lt);let mt=x.textures[j],at=mt.format,Ct=mt.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+j);let ot=xe(mt);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Bt),N.bufferData(N.PIXEL_PACK_BUFFER,it.byteLength,N.STREAM_READ),N.readPixels(y,F,I,O,gt.convert(at),gt.convert(Ct),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let se=ct!==null?zt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,se);let ne=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await ru(N,ne,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,it),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(Bt),N.deleteSync(ne),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,y=null,F=0){let I=Math.pow(2,-F),O=Math.floor(x.image.width*I),it=Math.floor(x.image.height*I),_t=y!==null?y.x:0,j=y!==null?y.y:0;Yt.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,_t,j,O,it),Tt.unbindTexture()},this.copyTextureToTexture=function(x,y,F=null,I=null,O=0,it=0){let _t,j,lt,mt,at,Ct,ot,Bt,se,ne=x.isCompressedTexture?x.mipmaps[it]:x.image;if(F!==null)_t=F.max.x-F.min.x,j=F.max.y-F.min.y,lt=F.isBox3?F.max.z-F.min.z:1,mt=F.min.x,at=F.min.y,Ct=F.isBox3?F.min.z:0;else{let oe=Math.pow(2,-O);_t=Math.floor(ne.width*oe),j=Math.floor(ne.height*oe),x.isDataArrayTexture?lt=ne.depth:x.isData3DTexture?lt=Math.floor(ne.depth*oe):lt=1,mt=0,at=0,Ct=0}I!==null?(ot=I.x,Bt=I.y,se=I.z):(ot=0,Bt=0,se=0);let ue=gt.convert(y.format),Ae=gt.convert(y.type),Lt;y.isData3DTexture?(Yt.setTexture3D(y,0),Lt=N.TEXTURE_3D):y.isDataArrayTexture||y.isCompressedArrayTexture?(Yt.setTexture2DArray(y,0),Lt=N.TEXTURE_2D_ARRAY):(Yt.setTexture2D(y,0),Lt=N.TEXTURE_2D),Tt.activeTexture(N.TEXTURE0),Tt.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,y.flipY),Tt.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),Tt.pixelStorei(N.UNPACK_ALIGNMENT,y.unpackAlignment);let Ue=Tt.getParameter(N.UNPACK_ROW_LENGTH),_e=Tt.getParameter(N.UNPACK_IMAGE_HEIGHT),Nn=Tt.getParameter(N.UNPACK_SKIP_PIXELS),Be=Tt.getParameter(N.UNPACK_SKIP_ROWS),Nt=Tt.getParameter(N.UNPACK_SKIP_IMAGES);Tt.pixelStorei(N.UNPACK_ROW_LENGTH,ne.width),Tt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ne.height),Tt.pixelStorei(N.UNPACK_SKIP_PIXELS,mt),Tt.pixelStorei(N.UNPACK_SKIP_ROWS,at),Tt.pixelStorei(N.UNPACK_SKIP_IMAGES,Ct);let sn=x.isDataArrayTexture||x.isData3DTexture,Ye=y.isDataArrayTexture||y.isData3DTexture;if(x.isDepthTexture){let oe=zt.get(x),ve=zt.get(y),Ve=zt.get(oe.__renderTarget),Te=zt.get(ve.__renderTarget);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Le=0;Le<lt;Le++)sn&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(x).__webglTexture,O,Ct+Le),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(y).__webglTexture,it,se+Le)),N.blitFramebuffer(mt,at,mt+_t,at+j,ot,Bt,ot+_t,Bt+j,N.DEPTH_BUFFER_BIT,N.NEAREST);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||zt.has(x)){let oe=zt.get(x),ve=zt.get(y);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,P),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,H);for(let Ve=0;Ve<lt;Ve++)sn?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,oe.__webglTexture,O,Ct+Ve):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,oe.__webglTexture,O),Ye?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,it,se+Ve):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,it),O!==0?N.blitFramebuffer(mt,at,mt+_t,at+j,ot,Bt,ot+_t,Bt+j,N.COLOR_BUFFER_BIT,N.NEAREST):Ye?N.copyTexSubImage3D(Lt,it,ot,Bt,se+Ve,mt,at,_t,j):N.copyTexSubImage2D(Lt,it,ot,Bt,mt,at,_t,j);Tt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ye?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Lt,it,ot,Bt,se,_t,j,lt,ue,Ae,ne.data):y.isCompressedArrayTexture?N.compressedTexSubImage3D(Lt,it,ot,Bt,se,_t,j,lt,ue,ne.data):N.texSubImage3D(Lt,it,ot,Bt,se,_t,j,lt,ue,Ae,ne):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,it,ot,Bt,_t,j,ue,Ae,ne.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,it,ot,Bt,ne.width,ne.height,ue,ne.data):N.texSubImage2D(N.TEXTURE_2D,it,ot,Bt,_t,j,ue,Ae,ne);Tt.pixelStorei(N.UNPACK_ROW_LENGTH,Ue),Tt.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_e),Tt.pixelStorei(N.UNPACK_SKIP_PIXELS,Nn),Tt.pixelStorei(N.UNPACK_SKIP_ROWS,Be),Tt.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt),it===0&&y.generateMipmaps===!0&&y.mipmapsAutoUpdate===!0&&N.generateMipmap(Lt),Tt.unbindTexture()},this.initRenderTarget=function(x){zt.get(x).__webglFramebuffer===void 0&&Yt.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Yt.setTextureCube(x,0):x.isData3DTexture?Yt.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Yt.setTexture2DArray(x,0):Yt.setTexture2D(x,0),Tt.unbindTexture()},this.resetState=function(){J=0,V=0,ct=null,Tt.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var el=class extends Pi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Vn;t.deleteAttribute("uv");let e=new Fi({side:Je}),n=new Fi,s=new Ar(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Kt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new hr(t,n,6),o=new en;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Kt(t,Ns(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Kt(t,Ns(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Kt(t,Ns(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new Kt(t,Ns(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new Kt(t,Ns(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new Kt(t,Ns(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ns(i){return new br({color:0,emissive:16777215,emissiveIntensity:i})}var Wr=new U;function Sn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Wr.copy(t),Wr[n]=0,Wr.normalize();let l=.5*a/(a+o),h=1-Wr.angleTo(i)/c;return Math.sign(Wr[e])===1?h*l:o/(a+o)+l+l*(1-h)}var Jn=class i extends Vn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let c=new U,l=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,g=f.length/6,M=new U,p=.5/a;for(let m=0,S=0;m<f.length;m+=3,S+=2)switch(c.fromArray(f,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[m+0]=h.x*Math.sign(c.x)+l.x*r,f[m+1]=h.y*Math.sign(c.y)+l.y*r,f[m+2]=h.z*Math.sign(c.z)+l.z*r,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/g)){case 0:M.set(1,0,0),u[S+0]=Sn(M,l,"z","y",r,n),u[S+1]=1-Sn(M,l,"y","z",r,e);break;case 1:M.set(-1,0,0),u[S+0]=1-Sn(M,l,"z","y",r,n),u[S+1]=1-Sn(M,l,"y","z",r,e);break;case 2:M.set(0,1,0),u[S+0]=1-Sn(M,l,"x","z",r,t),u[S+1]=Sn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),u[S+0]=1-Sn(M,l,"x","z",r,t),u[S+1]=1-Sn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),u[S+0]=1-Sn(M,l,"x","y",r,t),u[S+1]=1-Sn(M,l,"y","x",r,e);break;case 5:M.set(0,0,-1),u[S+0]=Sn(M,l,"x","y",r,t),u[S+1]=1-Sn(M,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Fs=window.R3D,an=Fs.s,Vi=2.2,h_=[104,190,276],cn=matchMedia("(prefers-reduced-motion: reduce)").matches,nl=matchMedia("(pointer:fine)").matches,un=(i,t,e)=>Math.max(t,Math.min(e,i)),xn=(i,t,e)=>i+(t-i)*e,$n=(i,t,e)=>un((i-t)/(e-t),0,1),Nc=i=>1-Math.pow(1-i,4),Xr=i=>i<.5?16*i**5:1-Math.pow(-2*i+2,5)/2,Ju=i=>(i=(i+Math.PI)%(Math.PI*2),i<0&&(i+=Math.PI*2),i-Math.PI);function bi(i,t,e,n,s){let r=i[t],a=i[t+"V"]||0,o=1+2*s*n,c=n*n,l=s*c,h=s*l,f=1/(o+h);i[t]=(o*r+s*a+h*e)*f,i[t+"V"]=(a+l*(e-r))*f}function Uc(i,t,e){let n=new Ni,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.absarc(s+i-e,r+e,e,-Math.PI/2,0),n.lineTo(s+i,r+t-e),n.absarc(s+i-e,r+t-e,e,0,Math.PI/2),n.lineTo(s+e,r+t),n.absarc(s+e,r+t-e,e,Math.PI/2,Math.PI),n.lineTo(s,r+e),n.absarc(s+e,r+e,e,Math.PI,Math.PI*1.5),n}function Us(i,t,e){let n=new Sr(Uc(i,t,e),24),s=n.attributes.position,r=n.attributes.uv;for(let a=0;a<s.count;a++)r.setXY(a,(s.getX(a)+i/2)/i,(s.getY(a)+t/2)/t);return n}var hn=(i,t,e)=>{let n=document.createElement(i);return t&&(n.className=t),e!=null&&(n.innerHTML=e),n},qe=i=>String(i).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),$u=null;window.Radar3D={open(i){($u||($u=u_())).open(i)}};function u_(){let i=hn("div","r3-veil");i.hidden=!0;let t=hn("div","r3-ui r3-top",`<div class="r3-ttl"><b>${qe(an.title)}</b><span>${qe(an.hint)}</span></div><button class="r3-btn" type="button" data-r3="close">${qe(an.close)}<span class="r3-esc">&nbsp;\xB7 Esc</span></button>`),e=hn("nav","r3-ui r3-nav",`<button class="r3-arw" type="button" data-r3="prev" aria-label="${qe(an.prev)}">\u2190</button><div class="r3-cn" aria-live="polite"><b class="r3-cnt"></b><span class="r3-cname"></span></div><button class="r3-arw" type="button" data-r3="next" aria-label="${qe(an.next)}">\u2192</button>`);e.setAttribute("aria-label",an.cases);let n=hn("div","r3-ui r3-chips");n.setAttribute("role","group"),n.setAttribute("aria-label",an.filters);let s=hn("div","r3-view");s.hidden=!0,s.setAttribute("role","dialog"),s.setAttribute("aria-modal","true"),s.setAttribute("aria-label",an.dialog);let r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.setAttribute("class","r3-lines"),r.setAttribute("aria-hidden","true");let a=hn("div","r3-hud"),o=hn("div","r3-labels"),c=hn("div","r3-tag");a.appendChild(c),s.append(r,o,a);let l=hn("div","r3-panel");l.hidden=!0,l.setAttribute("role","group");let h=hn("div","r3-root");h.append(i,t,e,n,s,l),document.body.appendChild(h);let f=e.querySelector(".r3-cnt"),d=e.querySelector(".r3-cname"),u=null;try{u=new Qo({antialias:!0,alpha:!0})}catch{u=null}if(!u)return{open(){location.href=Fs.fallback}};u.setPixelRatio(Math.min(devicePixelRatio,2)),u.setClearColor(0,0),u.toneMapping=Ir,s.insertBefore(u.domElement,s.firstChild);let g=new Pi;g.fog=new rr(new Qt("#F5F5F5"),1700,4400);let M=new Ls(u);g.environment=M.fromScene(new el,.03).texture;let p=new je(30,1,120,12e3),m=()=>innerWidth<768,S=()=>m()?44:30,w=new Qt("#2A2A33"),b=z=>new vs({color:w,transparent:!0,opacity:z}),R=(z,X)=>{let st=[];for(let Ht=0;Ht<=X;Ht++){let te=Ht/X*Math.PI*2;st.push(new U(Math.cos(te)*z,0,Math.sin(te)*z))}return new Ze().setFromPoints(st)},A=new ze;g.add(A),h_.forEach(z=>A.add(new Li(R(z*Vi,256),b(.2)))),A.add(new Li(R(18*Vi,64),b(.28))),A.add(new ys(new Ze().setFromPoints([new U(-620,0,0),new U(620,0,0),new U(0,0,-620),new U(0,0,620)]),b(.1)));let _=[],E=276*Vi+12;for(let z=0;z<180;z++){let X=z/180*Math.PI*2,st=z%15===0?30:z%5===0?18:8;_.push(new U(Math.cos(X)*E,0,Math.sin(X)*E),new U(Math.cos(X)*(E+st),0,Math.sin(X)*(E+st)))}let B=new Ze().setFromPoints(_);B.setDrawRange(0,0),A.add(new ys(B,b(.3)));let L=document.createElement("canvas");L.width=L.height=512;let D=L.getContext("2d"),k=D.createConicGradient(Math.PI/2-.6,256,256);k.addColorStop(0,"rgba(8,8,11,0)"),k.addColorStop(.09,"rgba(8,8,11,0.08)"),k.addColorStop(.0955,"rgba(8,8,11,0)"),k.addColorStop(1,"rgba(8,8,11,0)"),D.fillStyle=k,D.beginPath(),D.arc(256,256,256,0,Math.PI*2),D.fill(),D.strokeStyle="rgba(8,8,11,.4)",D.lineWidth=.8,D.beginPath(),D.moveTo(256,256),D.lineTo(256,512),D.stroke();let q=new Di(L);q.colorSpace=Qe;let P=new Rn({map:q,transparent:!0,depthWrite:!1,opacity:0,toneMapped:!1}),H=new Kt(new Ms(276*Vi,96),P);H.rotation.x=-Math.PI/2,H.position.y=.5,g.add(H);let J=(()=>{let z=document.createElement("canvas");z.width=z.height=128;let X=z.getContext("2d"),st=X.createRadialGradient(64,64,0,64,64,64);return st.addColorStop(0,"rgba(0,0,0,.55)"),st.addColorStop(.5,"rgba(0,0,0,.18)"),st.addColorStop(1,"rgba(0,0,0,0)"),X.fillStyle=st,X.fillRect(0,0,128,128),new Di(z)})(),V=new Tr,ct={blue:{frame:"#56657A",back:"#46546A",rough:.32},black:{frame:"#46464B",back:"#2C2C30",rough:.3},natural:{frame:"#C9C8CC",back:"#E3E2E6",rough:.3},porcelain:{frame:"#D9D3C7",back:"#EEE9DF",rough:.55},silver:{frame:"#C4C5CA",back:"#CFD0D4",rough:.4},space:{frame:"#7E8086",back:"#8A8C92",rough:.42}},Y=new on({color:"#050506",metalness:0,roughness:.08,clearcoat:1,envMapIntensity:1.2}),nt=new on({color:"#0B0C10",metalness:.5,roughness:.05,clearcoat:1,envMapIntensity:1.6}),rt=new on({color:"#141416",metalness:.2,roughness:.15,clearcoat:1,envMapIntensity:1.2}),Ut=new on({color:"#1A1A1D",metalness:.1,roughness:.6});function Vt(z,X,st,Ht,te){let $t=document.createElement("canvas");$t.width=256,$t.height=Math.round(256*st/X);let Me=$t.getContext("2d");Me.fillStyle="#000",Me.fillRect(0,0,$t.width,$t.height),Me.fillStyle="#fff",Me.beginPath(),Me.roundRect(.5,.5,$t.width-1,$t.height-1,Math.max(1,Ht/X*256)),Me.fill();let xe=new Di($t),x=st/X,y=(j,lt,mt)=>{let at=j.clone();return at.repeat.set(1,lt),at.offset.set(0,mt?1-lt:0),at.needsUpdate=!0,at},F=(j,lt)=>{let mt=xe.clone();return mt.repeat.set(1,j),mt.offset.set(0,lt?1-j:0),mt.needsUpdate=!0,mt},I=(z.screens||[]).map(j=>{let lt=typeof j=="string"?j:j.src,mt=V.load(lt,at=>{let Ct=at.image,ot=Ct.height/Ct.width;if(ot>x*1.02){at.repeat.set(1,x/ot),at.userData.max=1-x/ot,at.offset.y=at.userData.max,at.userData.len=ot/x-1;let Bt=j.top||0,se=j.bot||0;Bt&&(at.userData.hdr={map:y(at,Bt/ot,!0),alpha:F(Bt/x,!0),h:Bt*X}),se&&(at.userData.ftr={map:y(at,se/ot,!1),alpha:F(se/x,!1),h:se*X})}});return mt.colorSpace=Qe,mt.anisotropy=8,mt.userData={max:0,len:0,label:typeof j=="string"?"":j.label||""},mt}),O=(j,lt,mt)=>new Kt(new Cn(X,st),new Rn({map:j,alphaMap:xe,transparent:!0,opacity:lt,toneMapped:!1,depthWrite:lt>0,polygonOffset:!0,polygonOffsetFactor:mt,polygonOffsetUnits:mt})),it=O(I[0],1,-2),_t=O(I[1]||I[0],0,-3);return it.position.z=te,_t.position.z=te+.2,_t.visible=!1,it.renderOrder=1,_t.renderOrder=3,[it,_t].forEach(j=>{let lt=at=>{let Ct=new Kt(new Cn(X,1),new Rn({transparent:!0,toneMapped:!1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:j===it?-4:-5,polygonOffsetUnits:j===it?-4:-5}));return Ct.position.z=.1,Ct.renderOrder=j.renderOrder+1,Ct.visible=!1,Ct.userData.key=at,j.add(Ct),Ct},mt=[lt("hdr"),lt("ftr")];j.onBeforeRender=()=>{let at=j.material.map&&j.material.map.userData;mt.forEach(Ct=>{let ot=at&&at[Ct.userData.key];if(!ot){Ct.visible=!1;return}Ct.visible=!0,Ct.material.map!==ot.map&&(Ct.material.map=ot.map,Ct.material.alphaMap=ot.alpha,Ct.material.needsUpdate=!0),Ct.scale.y=ot.h,Ct.position.y=Ct.userData.key==="hdr"?st/2-ot.h/2:-st/2+ot.h/2,Ct.material.opacity=j.material.opacity,Ct.material.color.copy(j.material.color)})}}),{a:it,b:_t,texs:I}}function Q(z,X,st){let Ht=new on({color:X.frame,metalness:st?.85:1,roughness:X.rough,envMapIntensity:1.25}),te=new on({color:X.back,metalness:.1,roughness:st?.6:.42,clearcoat:st?.3:1,clearcoatRoughness:.25,envMapIntensity:1}),$t=220,Me=$t*2.168,xe=st?8:9,x=st?30:40,y=st?14:16,F=$t+xe*2,I=Me+xe*2,O=st?1.6:3,it=new ze,_t=new Es(Uc(F-O*2,I-O*2,x-O),{depth:y-O*2,bevelEnabled:!0,bevelThickness:O,bevelSize:O,bevelSegments:5,curveSegments:28});_t.translate(0,0,-(y-O*2)/2);let j=new Kt(_t,Ht);it.add(j);let lt=new Kt(Us(F-3,I-3,x-1.5),Y);lt.position.z=y/2+.4,it.add(lt);let mt=new Kt(Us(F-3,I-3,x-1.5),te);mt.position.z=-y/2-.4,mt.rotation.y=Math.PI,it.add(mt);let at=Vt(z,$t,Me,x-xe,y/2+.9);it.add(at.a,at.b);let Ct=(se,ne,ue)=>{let Ae=new Kt(new Jn(3,ne,6,2,1.4),Ht);Ae.position.set(ue*(F/2+.8),se,0),it.add(Ae)};st?(Ct(I*.24,40,1),Ct(I*.08,90,1)):(Ct(I*.22,46,-1),Ct(I*.1,46,-1),Ct(I*.3,18,-1),Ct(I*.16,70,1));let ot=new ze;ot.rotation.y=Math.PI,it.add(ot);let Bt=(se,ne,ue,Ae)=>{let Lt=new Kt(new ai(ue+4,ue+4,4,40),Ht);Lt.rotation.x=Math.PI/2,Lt.position.set(se,ne,Ae),ot.add(Lt);let Ue=new Kt(new ai(ue,ue,4.4,40),nt);Ue.rotation.x=Math.PI/2,Ue.position.set(se,ne,Ae+.3),ot.add(Ue)};if(st){ot.position.set(0,I/2-78,-y/2-.5);let se=new Kt(new Jn(F+1,44,8,4,10),rt);se.position.z=3,ot.add(se),Bt(-30,0,10,7.5),Bt(6,0,10,7.5);let ne=new Kt(new ai(4,4,1,24),new Rn({color:"#E8E4D8"}));ne.rotation.x=Math.PI/2,ne.position.set(40,0,7.4),ot.add(ne)}else{ot.position.set(-F/2+52,I/2-52,-y/2-.5);let se=new Kt(new Jn(84,84,5,4,18),te);se.position.z=2,ot.add(se),[[-18,18],[-18,-18],[18,0]].forEach(([ne,ue])=>Bt(ne,ue,11,5))}return{g:it,scr:at,pick:[lt,at.a,j,mt],box:{minX:-F/2,maxX:F/2,minY:-I/2,maxY:I/2,z:y/2,depth:y}}}function Rt(z,X){let st=new on({color:X.frame,metalness:.9,roughness:X.rough,envMapIntensity:1.2}),Ht=600,te=Ht*.69,$t=14,Me=18,xe=Ht+$t*2,x=te+$t+Me+6,y=7,F=420,I=12,O=new ze,it=-x/2,_t=new ze;_t.position.set(0,it,0),_t.rotation.x=-.16,O.add(_t);let j=new ze;j.position.y=x/2,_t.add(j);let lt=new Kt(new Jn(xe,x,y,4,10),st);j.add(lt);let mt=new Kt(Us(xe-4,x-4,9),Y);mt.position.z=y/2+.4,j.add(mt);let at=Vt(z,Ht,te,4,y/2+.9);at.a.position.y=at.b.position.y=(Me-$t)/2+3,j.add(at.a,at.b);let Ct=new Kt(new Jn(xe+24,I,F,4,6),st);Ct.position.set(0,it-I/2,F/2-4),O.add(Ct);let ot=new Kt(new Cn(xe-60,F*.42),Ut);ot.rotation.x=-Math.PI/2,ot.position.set(0,it+.6,F*.27),O.add(ot);let Bt=new Kt(Us(xe*.36,F*.3,8),new on({color:X.back,metalness:.6,roughness:.5}));return Bt.rotation.x=-Math.PI/2,Bt.position.set(0,it+.6,F*.7),O.add(Bt),{g:O,scr:at,pick:[mt,at.a,lt,Ct],box:{minX:-(xe+24)/2,maxX:(xe+24)/2,minY:it-I,maxY:x/2,z:y/2+20,depth:F},lid:j}}function Ft(z,X){let st=new on({color:X.frame,metalness:.9,roughness:X.rough,envMapIntensity:1.2}),Ht=new on({color:X.back,metalness:.75,roughness:.45,envMapIntensity:1.1}),te=560,$t=te*.69,Me=18,xe=28,x=10,y=te+Me*2,F=$t+Me*2,I=2.4,O=new ze,it=new Es(Uc(y-I*2,F-I*2,xe-I),{depth:x-I*2,bevelEnabled:!0,bevelThickness:I,bevelSize:I,bevelSegments:5,curveSegments:28});it.translate(0,0,-(x-I*2)/2);let _t=new Kt(it,st);O.add(_t);let j=new Kt(Us(y-3,F-3,xe-1.5),Y);j.position.z=x/2+.4,O.add(j);let lt=new Kt(Us(y-3,F-3,xe-1.5),Ht);lt.position.z=-x/2-.4,lt.rotation.y=Math.PI,O.add(lt);let mt=Vt(z,te,$t,10,x/2+.9);O.add(mt.a,mt.b);let at=new Kt(new Ms(2.6,20),nt);at.position.set(0,F/2-Me/2,x/2+.6),O.add(at);let Ct=(ue,Ae)=>{let Lt=new Kt(new Jn(Ae,3,5,2,1.2),st);Lt.position.set(ue,F/2+.8,0),O.add(Lt)};Ct(-y/2+60,36),Ct(y/2-70,30),Ct(y/2-110,30);let ot=new ze;ot.rotation.y=Math.PI,ot.position.set(-y/2+34,F/2-34,-x/2-.5),O.add(ot);let Bt=new Kt(new Jn(40,40,3,4,10),Ht);Bt.position.z=1.2,ot.add(Bt);let se=new Kt(new ai(10,10,3,32),st);se.rotation.x=Math.PI/2,se.position.z=3,ot.add(se);let ne=new Kt(new ai(7,7,3.4,32),nt);return ne.rotation.x=Math.PI/2,ne.position.z=3.3,ot.add(ne),{g:O,scr:mt,pick:[j,mt.a,_t,lt],box:{minX:-y/2,maxX:y/2,minY:-F/2,maxY:F/2,z:x/2,depth:x}}}function Wt(z){let X=ct[z.finish]||ct.natural;return z.dev==="laptop"?Rt(z,X):z.dev==="tablet"?Ft(z,X):Q(z,X,z.dev==="android")}let dt=Fs.cases.map((z,X)=>{let st=Wt(z),Ht=new U(z.x*Vi,0,z.y*Vi),te=new ze;te.position.copy(Ht),A.add(te);let $t=Math.atan2(Ht.x,Ht.z);te.rotation.y=$t;let Me=new ze;te.add(Me);let xe=new ze;Me.add(xe),xe.add(st.g),st.pick.forEach(O=>{O.userData.item=X});let x=new Kt(new Cn(1,1),new Rn({map:J,transparent:!0,depthWrite:!1,opacity:0,toneMapped:!1}));x.rotation.x=-Math.PI/2,x.position.y=.8,te.add(x);let y=new Rn({color:new Qt(z.c),toneMapped:!1,transparent:!0}),F=new Kt(new Cn(16,16),y);F.rotation.x=-Math.PI/2,F.position.set(Ht.x,1,Ht.z),A.add(F);let I=hn("button","r3-lb",`<i style="background:${z.c}"></i>${qe(z.n)}`);return I.type="button",I.tabIndex=-1,o.appendChild(I),I.addEventListener("click",O=>{O.stopPropagation(),Gt(X)}),{o:z,i:X,dev:st,holder:te,lift:Me,spin:xe,shadow:x,mk:F,mkM:y,lb:I,pos:Ht,phi:$t,r:Math.hypot(Ht.x,Ht.z),up:0,hov:0,open:0,openT:0,rotA:0,rotV:0,tx:0,ty:0,tiltX:0,tiltY:0,s:1,seed:X*2.3+1,match:1}}),Xt=dt.length,pe=dt.slice().sort((z,X)=>(-z.phi+Math.PI*4)%(Math.PI*2)-(-X.phi+Math.PI*4)%(Math.PI*2));{let z=pe.findIndex(X=>X.o.k===Fs.first);z>0&&pe.push(...pe.splice(0,z))}pe.forEach((z,X)=>{z.slot=X});let qt="http://www.w3.org/2000/svg";dt.forEach(z=>{let X=z.o,st=z.dev.box,Ht=String(z.slot+1).padStart(2,"0"),te=($t,Me)=>{let xe=hn("div","r3-co "+$t,Me);return a.appendChild(xe),xe};z.callouts=[{el:te("a",'<span class="k"></span><span class="v"></span>'),txt:[an.caseWord+"_"+Ht+" \xB7 "+X.yr,X.n.toUpperCase()],anchor:new U(st.minX,st.maxY-30,st.z),off:[-1,-1]},{el:te("b",'<span class="k"></span><span class="v"></span>'),txt:[X.dom.toUpperCase(),X.t],anchor:new U(st.maxX,(st.minY+st.maxY)*.55,st.z),off:[1,-.5]},{el:te("c",`<span class="k"></span><span class="v"></span><button class="go" type="button" tabindex="-1">${qe(an.open)}</button>`),txt:[X.fact.toUpperCase(),X.role],anchor:new U(st.maxX*.5,st.minY+16,st.z),off:[1,1]}],z.callouts.forEach($t=>{$t.k=$t.el.querySelector(".k"),$t.v=$t.el.querySelector(".v"),$t.path=document.createElementNS(qt,"path"),r.appendChild($t.path),$t.dot=document.createElementNS(qt,"path"),$t.dot.setAttribute("class","plus"),r.appendChild($t.dot)}),z.go=z.callouts[2].el.querySelector(".go"),z.go.addEventListener("click",$t=>{$t.stopPropagation(),Ne(z.i)})});let ie=[],le=[];pe.forEach(z=>{z.o.yr.split(/[–-]/).forEach(X=>{X=X.trim(),X&&ie.indexOf(X)<0&&ie.push(X)}),le.indexOf(z.o.dom)<0&&le.push(z.o.dom)}),ie.sort().reverse();let et=null,yt=(z,X,st)=>{let Ht=hn("button","r3-chip"+(st?" "+st:""),qe(z));return Ht.type="button",Ht.dataset.v=X,Ht.setAttribute("aria-pressed",X?"false":"true"),n.appendChild(Ht),Ht};yt(an.all,"","all"),ie.forEach(z=>yt(z,"y:"+z,"yr")),n.appendChild(hn("span","r3-sep")),le.forEach(z=>yt(z,"d:"+z,"dom"));let Mt=z=>!et||(et[0]==="y"?z.o.yr.indexOf(et.slice(2))>=0:z.o.dom===et.slice(2)),wt=pe.slice();function Et(z){et=z||null,n.querySelectorAll(".r3-chip").forEach(X=>X.setAttribute("aria-pressed",X.dataset.v===(z||"")?"true":"false")),wt=pe.filter(Mt),wt.length||(et=null,wt=pe.slice()),dt.forEach(X=>{X.match=Mt(X)?1:0}),wt.indexOf(W)<0?jt(wt[0]):K=wt.indexOf(W),kt()}n.addEventListener("click",z=>{let X=z.target.closest(".r3-chip");X&&(Pt==="focus"&&He(!0),Pt==="intro"&&At(),Et(X.dataset.v===et?"":X.dataset.v))});let Dt={tx:0,ty:0,tz:0,r:1e3,pol:1e-4,az:0,oy:0,fov:30},Ot={x:0,y:0},ae={x:0,y:0},ce=()=>m()?1700:1500;function ge(z,X){let st=z.dev.box,Ht=zr.degToRad(S()),$t=2*(ce()-X*410)*Math.tan(Ht/2),Me=$t*(innerWidth/innerHeight),xe=st.maxY-st.minY+st.depth*.35,x=(st.maxX-st.minX)*(st.depth>100?1.22:1),y,F;return m()?(y=X?.34:.44,F=X?.8:.74):(y=X?.64:.54,F=X?Math.max(.28,(innerWidth-600)/innerWidth)*.86:.5),Math.min(y*$t/xe,F*Me/x)}function N(z,X){let st=z.dev.box,Ht=z.s,te=22+(st.maxY-st.minY)*Ht/2;return{tx:m()?0:X*250*(2*(ce()-410)*Math.tan(zr.degToRad(S())/2)/innerHeight),ty:te+X*30,tz:Z+X*150,r:ce()-X*260,pol:1.38+X*.08,az:0,oy:m()?X?innerHeight*.2:-innerHeight*.03:innerHeight*.015,fov:S()}}function Pe(){let z=G.getBoundingClientRect(),X=S(),st=276*Vi/(276*z.width/560),Ht=innerHeight*st/(2*Math.tan(zr.degToRad(X/2))),te=z.left+z.width/2-innerWidth/2,$t=z.top+z.height/2-innerHeight/2;return{tx:-te*st,ty:0,tz:-$t*st,r:Ht,pol:1e-4,az:0,oy:0,fov:X}}let he=new U(0,1,0);function Ee(){Math.abs(p.fov-Dt.fov)>.01&&(p.fov=Dt.fov,p.updateProjectionMatrix());let z=Dt.az+Ot.x,X=un(Dt.pol+Ot.y,1e-4,1.55),st=Dt.r;p.position.set(Dt.tx+st*Math.sin(X)*Math.sin(z),Dt.ty+st*Math.cos(X),Dt.tz+st*Math.sin(X)*Math.cos(z)),p.up.set(-Math.sin(z),0,-Math.cos(z)).lerp(he,un(X/.25,0,1)).normalize(),p.lookAt(Dt.tx,Dt.ty,Dt.tz),Dt.oy?p.setViewOffset(innerWidth,innerHeight,0,Dt.oy,innerWidth,innerHeight):p.clearViewOffset()}function Tt(){u.setSize(innerWidth,innerHeight),p.aspect=innerWidth/innerHeight,Dt.fov=S(),p.fov=Dt.fov,p.updateProjectionMatrix(),r.setAttribute("viewBox","0 0 "+innerWidth+" "+innerHeight)}addEventListener("resize",()=>{Pt!=="closed"&&Tt()});let Pt="closed",zt=0,Yt=1,T=null,v=null,G=null,ht=0,$=-1,vt=-1,pt=null,W=pe[0],K=0,ft=0,C=0,tt=0,Z=W.r,xt=0,gt=cn?0:.9,St=gt+2.2;function kt(){f.textContent=String(K+1).padStart(2,"0")+" / "+String(wt.length).padStart(2,"0"),d.textContent=W.o.n}function jt(z){z&&(W=z,K=wt.indexOf(z),K<0&&(K=0),C=ft+Ju(-z.phi-ft),z.scrIdx=0,kt())}let ut=z=>{Pt==="intro"&&At(),Pt==="focus"&&He(!0),Pt==="open"&&(K=(K+z+wt.length)%wt.length,jt(wt[K]))};function Gt(z){Pt==="focus"&&He(!0);let X=dt[z];wt.indexOf(X)<0&&Et(""),jt(X)}function re(z){if(Pt!=="closed")return;v=document.activeElement,G=z;let X=G.getBoundingClientRect();h.style.setProperty("--vx",X.left+X.width/2+"px"),h.style.setProperty("--vy",X.top+X.height/2+"px"),document.documentElement.classList.add("r3-open"),document.documentElement.style.overflow="hidden",Tt(),T=Pe(),Object.assign(Dt,T),zt=0,Yt=1,$=-1,ft=0,tt=0,jt(W),Z=W.r,dt.forEach(st=>{st.up=0,st.upV=0,st.open=st.openT=0,st.rotA=0,st.s=ge(st,0)}),s.hidden=!1,i.hidden=!1,s.classList.remove("full"),i.classList.remove("full"),s.getBoundingClientRect(),i.classList.add("in"),s.classList.add("in"),setTimeout(()=>{s.classList.add("full"),i.classList.add("full")},cn?0:1080),Pt="intro",Ti.start(),(Fs.inert||[]).forEach(st=>document.querySelectorAll(st).forEach(Ht=>{Ht.inert=!0}))}function At(){Pt==="intro"&&(Pt="open",zt=St,dt.forEach(z=>{z.go.tabIndex=0,z.lb.tabIndex=0}),e.querySelector("[data-r3=next]").focus({preventScroll:!0}))}function ye(){Pt==="closed"||Pt==="closing"||($>=0&&He(!0),Pt="closing",pt={from:{...Dt},to:Pe(),t0:performance.now(),dur:cn?0:1e3,rot0:ft},setTimeout(()=>{s.classList.remove("full","in"),i.classList.remove("full","in")},cn?0:900),setTimeout(()=>{s.hidden=!0,i.hidden=!0,Pt="closed",Ti.stop(),pt=null,document.documentElement.classList.remove("r3-open"),document.documentElement.style.overflow="",(Fs.inert||[]).forEach(z=>document.querySelectorAll(z).forEach(X=>{X.inert=!1})),dt.forEach(z=>{z.go.tabIndex=-1,z.lb.tabIndex=-1}),v&&v.focus&&v.focus()},cn?0:2e3))}h.addEventListener("click",z=>{let X=z.target.closest("[data-r3]");if(!X)return;let st=X.dataset.r3;st==="close"?ye():st==="prev"?ut(-1):st==="next"?ut(1):st==="back"&&He()});function Ne(z){if(Pt==="intro"&&At(),Pt!=="open"&&Pt!=="focus")return;let X=dt[z];X!==W&&(wt.indexOf(X)<0&&Et(""),jt(X)),$=z,Pt="focus",X.openT=1;let st=X.o;l.innerHTML=`<span class="pm">${qe(st.dom)} \xB7 ${qe(st.yr)}</span><h2>${qe(st.n)}</h2><p class="pt">${qe(st.t)} \xB7 ${qe(st.role)}</p><ol>`+st.d.map((Ht,te)=>`<li><b>0${te+1}</b><span>${qe(Ht)}</span></li>`).join("")+`</ol><div class="pa"><a class="r3-btn ink" href="${qe(st.url)}">${qe(an.read)}</a><button class="r3-btn" type="button" data-r3="back">${qe(an.back)}</button></div><p class="ph">${qe(X.dev.scr.texs.length>1?an.ph:an.ph1)}</p>`,l.hidden=!1,l.getBoundingClientRect(),l.classList.add("in"),h.classList.add("r3-focus"),setTimeout(()=>{if($===z){let Ht=l.querySelector("a");Ht&&Ht.focus({preventScroll:!0})}},cn?0:600)}function He(z){let X=$;X<0||($=-1,Pt="open",dt[X].openT=0,l.classList.remove("in"),setTimeout(()=>{$<0&&(l.hidden=!0)},350),h.classList.remove("r3-focus"),z||dt[X].go.focus({preventScroll:!0}))}let Os=new Rr,Wi=new bt,il=dt.flatMap(z=>z.dev.pick);function Bs(z){Wi.set(z.clientX/innerWidth*2-1,-(z.clientY/innerHeight)*2+1),Os.setFromCamera(Wi,p);let X=Os.intersectObjects(il)[0];return X?X.object.userData.item:-1}let Ei=0,Dn=0;s.addEventListener("wheel",z=>{if(z.preventDefault(),Pt==="intro"){Yt=3;return}let X=Math.abs(z.deltaX)>Math.abs(z.deltaY)?z.deltaX:z.deltaY;if(Pt==="focus"){Math.abs(X)>30&&He(!0);return}if(Pt!=="open")return;let st=performance.now();st<Dn||(Ei+=X,Math.abs(Ei)>60&&(ut(Ei>0?1:-1),Ei=0,Dn=st+420))},{passive:!1});let Oe=null;s.addEventListener("pointerdown",z=>{if(z.target===u.domElement){if(Pt==="intro"){Yt=3;return}Pt!=="open"&&Pt!=="focus"||(Oe={x:z.clientX,lx:z.clientX,id:z.pointerId,moved:!1})}}),s.addEventListener("pointermove",z=>{if(ae.x=nl&&!cn?(z.clientX/innerWidth-.5)*-.05:0,ae.y=nl&&!cn?(z.clientY/innerHeight-.5)*-.025:0,Oe){let X=z.clientX-Oe.x;if(!Oe.moved&&Math.abs(X)>6){Oe.moved=!0,s.classList.add("drag");try{s.setPointerCapture(Oe.id)}catch{}}if(Oe.moved){if(Pt==="focus"){let st=dt[$],Ht=(z.clientX-Oe.lx)*.012;st.rotA+=Ht,st.rotV=Ht}else xt=un(X/(m()?260:420),-1,1)*.35;Oe.lx=z.clientX}return}Pt==="open"&&z.target===u.domElement&&(vt=Bs(z),u.domElement.style.cursor=vt>=0?"pointer":"grab"),W.tiltY=nl?(z.clientX/innerWidth-.5)*.25:0,W.tiltX=nl?(z.clientY/innerHeight-.5)*.12:0}),s.addEventListener("pointerup",z=>{let X=Oe;if(Oe=null,s.classList.remove("drag"),!X)return;if(X.moved){if(Pt==="open"){let Ht=z.clientX-X.x,te=m()?50:80;xt=0,Math.abs(Ht)>te&&ut(Ht<0?1:-1)}return}let st=Bs(z);st>=0?Pt==="open"?Ne(st):Pt==="focus"&&st===$&&(dt[st].scrNext=!0):Pt==="focus"&&He()}),addEventListener("keydown",z=>{if(Pt!=="closed"){if(z.key==="Escape"){$>=0?He():ye();return}if(Pt==="intro"){Yt=3;return}(z.key==="ArrowRight"||z.key==="ArrowLeft")&&!/INPUT|TEXTAREA/.test(document.activeElement.tagName)&&(z.preventDefault(),Pt==="focus"?dt[$].rotA+=z.key==="ArrowLeft"?-Math.PI:Math.PI:ut(z.key==="ArrowRight"?1:-1))}});let hi=0,Xi=0,Ti={start(){hi||(Xi=performance.now(),hi=requestAnimationFrame(zs))},stop(){cancelAnimationFrame(hi),hi=0}},we=new U;function zs(z){hi=requestAnimationFrame(zs);let X=Math.min(.05,(z-Xi)/1e3);if(Xi=z,ht+=X,cn)ft=C;else{let y={r:ft,rV:tt};bi(y,"r",C,5,X),ft=y.r,tt=y.rV}Z=xn(Z,W.r,1-Math.pow(.02,X));let st=$>=0?un(dt[$].open,0,1):0,Ht=Oe&&Oe.moved?xt:xt=xn(xt,0,1-Math.pow(.001,X));dt.forEach(y=>{y.s=xn(y.s,ge(y,y===W?un(y.open,0,1):0),1-Math.pow(.001,X))});let te=N(W,st);if(Pt==="intro"){zt+=X*Yt*(cn?100:1);let y=Math.max(0,zt-gt),F=Xr($n(y,.15,1.9)),I=Xr($n(y,.15,1.7)),O=Xr($n(y,0,.3));A.rotation.y=xn(0,ft,Xr($n(y,.4,2))),Dt.r=xn(T.r*(1-.05*O),te.r,Nc($n(y,.25,2))),Dt.pol=xn(T.pol,te.pol,F),Dt.tx=xn(T.tx,te.tx,I),Dt.ty=xn(T.ty,te.ty,I),Dt.tz=xn(T.tz,te.tz,I),Dt.oy=xn(0,te.oy,F),Dt.az=0,Dt.fov=te.fov+5*Math.sin(Math.PI*F),zt>=St&&At()}else if(Pt==="open"||Pt==="focus")A.rotation.y=ft+Ht,Object.assign(Dt,te);else if(Pt==="closing"&&pt){let y=pt.dur?un((z-pt.t0)/pt.dur,0,1):1,F=Xr(y);for(let I in pt.to)Dt[I]=xn(pt.from[I],pt.to[I],F);A.rotation.y=xn(pt.rot0,Math.round(pt.rot0/(Math.PI*2))*Math.PI*2,F)}bi(Ot,"x",Pt==="open"?ae.x:0,2.5,X),bi(Ot,"y",Pt==="open"?ae.y:0,2.5,X),Ee();let $t=Pt==="intro"?zt-gt:99,Me=Pt==="closing";B.setDrawRange(0,Math.round(360*Nc($n($t,.5,1.3))*(Me?0:1))),P.opacity=$n($t,1.4,2)*(Me?0:1)*(1-st*.6);let xe=Math.abs(Ju(C-ft))<.06,x=null;if(W.up>.3){let y=W.dev.box;x=[1e9,1e9,-1e9,-1e9];for(let F of[y.minX,y.maxX])for(let I of[y.minY,y.maxY])for(let O of[-y.z,y.z+(y.depth>100?y.depth:0)]){we.set(F,I,O),W.spin.localToWorld(we),we.project(p);let it=(we.x*.5+.5)*innerWidth,_t=(-we.y*.5+.5)*innerHeight;x[0]=Math.min(x[0],it),x[1]=Math.min(x[1],_t),x[2]=Math.max(x[2],it),x[3]=Math.max(x[3],_t)}}dt.forEach((y,F)=>{let I=y===W,O=!Me&&I&&$t>1.2?1:0;bi(y,"up",O,I?7:9,X),bi(y,"hov",vt===F&&I?1:0,12,X),bi(y,"open",y.openT,8,X),bi(y,"tx",I&&Pt==="open"?y.tiltX:0,6,X),bi(y,"ty",I&&Pt==="open"?y.tiltY:0,6,X);let it=un(y.up,0,1.2),_t=un(y.open,0,1),j=y.dev.box;y.holder.visible=it>.003;let lt=y.s*(.04+.96*Math.min(1,it)),mt=cn?0:Math.sin(ht*.8+y.seed)*5*(1-_t);if(y.lift.position.set(0,(22+-j.minY*y.s+mt+y.hov*8)*it+_t*30,_t*150),y.lift.scale.setScalar(lt),!(Oe&&Oe.moved&&Pt==="focus")){y.rotA+=y.rotV,y.rotV*=.9;let Nt=$===F?Math.round(y.rotA/Math.PI)*Math.PI:0;y.rotA=xn(y.rotA,Nt,1-Math.pow(.04,X))}y.spin.rotation.set(-(y.tx||0),(y.ty||0)+y.rotA+(cn?0:Math.sin(ht*.4+y.seed)*.05*(1-_t))+(1-Math.min(1,it))*.6,0),y.shadow.material.opacity=.5*Math.min(1,it)*(1-_t*.5),y.shadow.scale.set((j.maxX-j.minX)*1.2*y.s,110*y.s+(y.dev.box.depth>100?j.depth*y.s:0),1),y.shadow.position.z=_t*150+(j.depth>100?j.depth*.45*y.s:0),y.mkM.opacity=y.match?1:.2;let at=y.dev,Ct=.12+.88*Nc($n(it,.55,1));at.scr.a.material.color.setScalar(Ct),at.scr.b.material.color.setScalar(Ct);let ot=($===F||I&&Pt==="open"&&xe&&it>.95)&&!cn,Bt=at.scr.a.material.map;if(ot){y.scrT0||(y.scrT0=z,Bt&&Bt.userData&&(Bt.offset.y=Bt.userData.max));let Nt=$===F?1400:2600,sn=Bt&&Bt.userData?Bt.userData.len:0,Ye=sn*($===F?5200:7e3),oe=z-y.scrT0;if(sn>0){let ve=un((oe-Nt)/Ye,0,1);Bt.offset.y=Bt.userData.max*(1-(ve<.5?2*ve*ve:1-Math.pow(-2*ve+2,2)/2))}if(at.scr.texs.length>1&&(oe>Nt*2+Ye||y.scrNext)&&(y.fadeK===void 0||y.fadeK>=1)){y.scrNext=!1,y.scrIdx=((y.scrIdx||0)+1)%at.scr.texs.length;let ve=at.scr.texs[y.scrIdx];ve.userData&&(ve.offset.y=ve.userData.max),at.scr.b.material.map=ve,at.scr.b.material.needsUpdate=!0,at.scr.b.visible=!0,y.fadeK=0}y.fadeK!==void 0&&y.fadeK<1&&(y.fadeK=Math.min(1,y.fadeK+X*4),at.scr.b.material.opacity=y.fadeK,y.fadeK>=1&&(at.scr.a.material.map=at.scr.b.material.map,at.scr.a.material.needsUpdate=!0,at.scr.b.material.opacity=0,at.scr.b.visible=!1,y.scrT0=z))}else y.scrT0&&!I&&(y.scrT0=0,y.scrIdx=0,y.fadeK=1,at.scr.texs.forEach(Nt=>{Nt.userData&&(Nt.offset.y=Nt.userData.max)}),at.scr.a.material.map=at.scr.texs[0],at.scr.a.material.needsUpdate=!0,at.scr.b.material.opacity=0,at.scr.b.visible=!1);if(I){let Nt=at.scr.a.material.map&&at.scr.a.material.map.userData.label||"";c.textContent!==Nt&&(c.textContent=Nt)}we.set(y.pos.x,0,y.pos.z),A.localToWorld(we),we.project(p);let se=(we.x*.5+.5)*innerWidth,ne=(-we.y*.5+.5)*innerHeight,ue=x&&y!==W&&se>x[0]-60&&se<x[2]+60&&ne>x[1]-8&&ne<x[3]+8,Ae=Pt!=="closing"&&$t>1&&st<.2&&we.z<1&&!ue?1-Math.min(1,it*1.5):0,Lt=(y.lbW||(y.lbW=y.lb.offsetWidth))/2||40,Ue=un(se,Lt+8,innerWidth-Lt-8);y.lb.style.transform=`translate(${Ue.toFixed(1)}px,${ne.toFixed(1)}px)`,y.lb.style.opacity=(Ae*(y.match?1:.35)).toFixed(2),y.lb.style.visibility=Ae>.02?"visible":"hidden";let _e=I&&Pt==="open"&&xe?un((it-.85)/.15,0,1)*(1-_t):0,Nn=0,Be=innerWidth;if(_e>0){let Nt=y.dev.box;we.set(Nt.maxX,(Nt.minY+Nt.maxY)/2,Nt.z),y.spin.localToWorld(we),we.project(p),Be=(we.x*.5+.5)*innerWidth,we.set(Nt.minX,(Nt.minY+Nt.maxY)/2,Nt.z),y.spin.localToWorld(we),we.project(p),Nn=(we.x*.5+.5)*innerWidth}y.callouts.forEach((Nt,sn)=>{let Ye=m()&&sn>0?0:$n(_e,.2+sn*.15,.7+sn*.1);if(Ye<=0&&!Nt.on)return;Nt.on=Ye>0,we.copy(Nt.anchor),y.spin.localToWorld(we),we.project(p);let oe=(we.x*.5+.5)*innerWidth,ve=(-we.y*.5+.5)*innerHeight,Ve=m()?.5:1,Te=oe+Nt.off[0]*64*Ve,Le=ve+Nt.off[1]*52*Ve,dn=Nt.off[0]>0?Math.max(Te+56*Ve,Be+24*Ve):Math.min(Te-56*Ve,Nn-24*Ve),ks=Math.hypot(Te-oe,Le-ve)+Math.abs(dn-Te);Nt.path.setAttribute("d","M"+oe.toFixed(1)+" "+ve.toFixed(1)+"L"+Te.toFixed(1)+" "+Le.toFixed(1)+"L"+dn.toFixed(1)+" "+Le.toFixed(1)),Nt.path.style.strokeDasharray=ks.toFixed(0),Nt.path.style.strokeDashoffset=(ks*(1-Ye)).toFixed(1),Nt.path.style.opacity=Ye>0?1:0,Nt.dot.setAttribute("d","M"+(oe-5)+" "+ve+"h10M"+oe+" "+(ve-5)+"v10"),Nt.dot.style.opacity=Ye;let Gs=$n(Ye,.5,1),qr=Nt.txt[0],Yr=Nt.txt[1],Fc=!1,Oc=!1;if(Nt.typed)Gs<=0&&(qr="",Yr="");else{Gs>0&&!Nt.tStart&&(Nt.tStart=z),Gs<=0&&(Nt.tStart=0);let qi=Nt.tStart?Math.floor((z-Nt.tStart)/(cn?1:26)):0,Yi=Nt.txt[0].length,sl=Nt.txt[1].length;qr=Nt.txt[0].slice(0,Math.min(qi,Yi)),Yr=Nt.txt[1].slice(0,Math.max(0,Math.min(qi-Yi,sl))),Fc=qi<Yi&&Gs>0,Oc=qi>=Yi&&qi<Yi+sl,qi>=Yi+sl&&(Nt.typed=!0)}Nt.k.textContent!==qr&&(Nt.k.textContent=qr),Nt.v.textContent!==Yr&&(Nt.v.textContent=Yr),Nt.k.classList.toggle("typing",Fc),Nt.v.classList.toggle("typing",Oc),Nt.el.classList.toggle("typed",!!Nt.typed);let Bc=Nt.el.offsetWidth||120,Ku=Nt.el.offsetHeight||40,Hs=dn;Nt.off[0]<0?Hs=Math.max(Bc+8,Hs):Hs=Math.min(innerWidth-Bc-8,Hs);let Qu=un(Le,Ku+72,innerHeight-140);Nt.el.style.transform=`translate(${Hs.toFixed(1)}px,${Qu.toFixed(1)}px)`,Nt.el.classList.toggle("left",Nt.off[0]<0),Nt.el.classList.toggle("show",Gs>0||!!Nt.tStart&&!Nt.typed)})}),x&&c.textContent?(c.style.transform=`translate(${((x[0]+x[2])/2).toFixed(1)}px,${Math.max(80,x[1]-12).toFixed(1)}px)`,c.style.opacity=Pt==="closing"?0:un((W.up-.9)*10,0,1)):c.style.opacity=0,u.render(g,p)}return window.__r3={items:dt,order:pe,focusCase:Ne,unfocus:He,step:ut,goTo:Gt,applyFilter:Et,get state(){return Pt},get active(){return W}},{open:re}}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
