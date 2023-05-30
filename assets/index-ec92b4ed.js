(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Nc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var kl={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(Fc,function(){var t=function(){function n(p){return a.appendChild(p.dom),p}function s(p){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===p?"block":"none";r=p}var r=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(p){p.preventDefault(),s(++r%a.children.length)},!1);var o=(performance||Date).now(),c=o,l=0,u=n(new t.Panel("FPS","#0ff","#002")),h=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:a,addPanel:n,showPanel:s,begin:function(){o=(performance||Date).now()},end:function(){l++;var p=(performance||Date).now();if(h.update(p-o,200),p>c+1e3&&(u.update(1e3*l/(p-c),100),c=p,l=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){o=this.end()},domElement:a,setMode:s}};return t.Panel=function(n,s,r){var a=1/0,o=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,h=48*l,d=3*l,p=2*l,g=3*l,_=15*l,m=74*l,f=30*l,y=document.createElement("canvas");y.width=u,y.height=h,y.style.cssText="width:80px;height:48px";var v=y.getContext("2d");return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=r,v.fillRect(0,0,u,h),v.fillStyle=s,v.fillText(n,d,p),v.fillRect(g,_,m,f),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g,_,m,f),{dom:y,update:function(S,M){a=Math.min(a,S),o=Math.max(o,S),v.fillStyle=r,v.globalAlpha=1,v.fillRect(0,0,u,_),v.fillStyle=s,v.fillText(c(S)+" "+n+" ("+c(a)+"-"+c(o)+")",d,p),v.drawImage(y,g+l,_,m-l,f,g,_,m-l,f),v.fillRect(g+m-l,_,l,f),v.fillStyle=r,v.globalAlpha=.9,v.fillRect(g+m-l,_,l,c((1-S/M)*f))}}},t})})(kl);var Oc=kl.exports;const Bc=Nc(Oc);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ra="152",ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},si={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zc=0,Xa=1,Hc=2,Vl=1,Gc=2,xn=3,on=0,Et=1,Gt=2,Nn=0,Ri=1,qa=2,ja=3,Ya=4,kc=5,bi=100,Vc=101,Wc=102,$a=103,Ka=104,Xc=200,qc=201,jc=202,Yc=203,Wl=204,Xl=205,$c=206,Kc=207,Zc=208,Jc=209,Qc=210,eu=0,tu=1,nu=2,sa=3,iu=4,su=5,ru=6,au=7,Ca=0,ou=1,lu=2,bn=0,cu=1,uu=2,hu=3,du=4,fu=5,ql=300,Pi=301,Di=302,ra=303,aa=304,ar=306,oa=1e3,kt=1001,la=1002,Ye=1003,Za=1004,mr=1005,ut=1006,pu=1007,rs=1008,An=1009,ca=1010,jl=1011,La=1012,Zs=1013,Vt=1014,Tt=1015,as=1016,mu=1017,gu=1018,Ci=1020,_u=1021,bt=1023,vu=1024,xu=1025,Zn=1026,Ii=1027,or=1028,Yl=1029,$l=1030,Pa=1031,tr=1033,gr=33776,_r=33777,vr=33778,xr=33779,Ja=35840,Qa=35841,eo=35842,to=35843,yu=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,co=37813,uo=37814,ho=37815,fo=37816,po=37817,mo=37818,go=37819,_o=37820,vo=37821,yr=36492,Mu=36283,xo=36284,yo=36285,Mo=36286,Kl=3e3,Jn=3001,Su=3200,bu=3201,Da=0,Eu=1,Qn="",Te="srgb",ln="srgb-linear",Zl="display-p3",Mr=7680,Au=519,So=35044,bo="300 es",ua=1035;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,ha=180/Math.PI;function us(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ft[i&255]+ft[i>>8&255]+ft[i>>16&255]+ft[i>>24&255]+"-"+ft[e&255]+ft[e>>8&255]+"-"+ft[e>>16&15|64]+ft[e>>24&255]+"-"+ft[t&63|128]+ft[t>>8&255]+"-"+ft[t>>16&255]+ft[t>>24&255]+ft[n&255]+ft[n>>8&255]+ft[n>>16&255]+ft[n>>24&255]).toLowerCase()}function _t(i,e,t){return Math.max(e,Math.min(t,i))}function Tu(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function Eo(i){return(i&i-1)===0&&i!==0}function wu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ms(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],y=s[1],v=s[4],S=s[7],M=s[2],b=s[5],w=s[8];return r[0]=a*_+o*y+c*M,r[3]=a*m+o*v+c*b,r[6]=a*f+o*S+c*w,r[1]=l*_+u*y+h*M,r[4]=l*m+u*v+h*b,r[7]=l*f+u*S+h*w,r[2]=d*_+p*y+g*M,r[5]=d*m+p*v+g*b,r[8]=d*f+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,p=l*r-a*c,g=t*h+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=p*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Er.makeScale(e,t)),this}rotate(e){return this.premultiply(Er.makeRotation(-e)),this}translate(e,t){return this.premultiply(Er.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new Ne;function Jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const Ao={};function es(i){i in Ao||(Ao[i]=!0,console.warn(i))}function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ar(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ru=new Ne().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Cu=new Ne().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Lu(i){return i.convertSRGBToLinear().applyMatrix3(Cu)}function Pu(i){return i.applyMatrix3(Ru).convertLinearToSRGB()}const Du={[ln]:i=>i,[Te]:i=>i.convertSRGBToLinear(),[Zl]:Lu},Iu={[ln]:i=>i,[Te]:i=>i.convertLinearToSRGB(),[Zl]:Pu},qt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return ln},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Du[e],s=Iu[t];if(n===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let ri;class Ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ri===void 0&&(ri=os("canvas")),ri.width=e.width,ri.height=e.height;const n=ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ec{constructor(e=null){this.isSource=!0,this.uuid=us(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Tr(s[a].image)):r.push(Tr(s[a]))}else r=Tr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ql.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uu=0;class vt extends ni{constructor(e=vt.DEFAULT_IMAGE,t=vt.DEFAULT_MAPPING,n=kt,s=kt,r=ut,a=rs,o=bt,c=An,l=vt.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=us(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?Te:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oa:e.x=e.x-Math.floor(e.x);break;case kt:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oa:e.y=e.y-Math.floor(e.y);break;case kt:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?Jn:Kl}set encoding(e){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?Te:Qn}}vt.DEFAULT_IMAGE=null;vt.DEFAULT_MAPPING=ql;vt.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],_=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(p+1)/2,M=(f+1)/2,b=(u+d)/4,w=(h+_)/4,C=(g+m)/4;return v>S&&v>M?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=w/n):S>M?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=b/s,r=C/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zn extends ni{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Te:Qn),this.texture=new vt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ut,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tc extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia extends vt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=kt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu extends zn{constructor(e=1,t=1,n=1){super(e,t),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Ia(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Hn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==p||u!==g){let m=1-o;const f=c*d+l*p+u*g+h*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const M=Math.sqrt(v),b=Math.atan2(M,f*y);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}const S=o*y;if(c=c*m+d*S,l=l*m+p*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*p-l*d,e[t+1]=c*g+u*d+l*h-o*p,e[t+2]=l*g+u*p+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),p=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=c*t+a*s-o*n,u=c*n+o*t-r*s,h=c*s+r*n-a*t,d=-r*t-a*n-o*s;return this.x=l*c+d*-r+u*-o-h*-a,this.y=u*c+d*-a+h*-r-l*-o,this.z=h*c+d*-o+l*-a-u*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wr.copy(this).projectOnVector(e),this.sub(wr)}reflect(e){return this.sub(wr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_t(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wr=new L,To=new Hn;class Wt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ai.copy(e.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai);else{const s=e.geometry;if(s!==void 0)if(t&&s.attributes!==void 0&&s.attributes.position!==void 0){const r=s.attributes.position;for(let a=0,o=r.count;a<o;a++)dn.fromBufferAttribute(r,a).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else s.boundingBox===null&&s.computeBoundingBox(),ai.copy(s.boundingBox),ai.applyMatrix4(e.matrixWorld),this.union(ai)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),gs.subVectors(this.max,Gi),oi.subVectors(e.a,Gi),li.subVectors(e.b,Gi),ci.subVectors(e.c,Gi),Cn.subVectors(li,oi),Ln.subVectors(ci,li),Wn.subVectors(oi,ci);let t=[0,-Cn.z,Cn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Cn.z,0,-Cn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Cn.y,Cn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!Rr(t,oi,li,ci,gs)||(t=[1,0,0,0,1,0,0,0,1],!Rr(t,oi,li,ci,gs))?!1:(_s.crossVectors(Cn,Ln),t=[_s.x,_s.y,_s.z],Rr(t,oi,li,ci,gs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,ai=new Wt,oi=new L,li=new L,ci=new L,Cn=new L,Ln=new L,Wn=new L,Gi=new L,gs=new L,_s=new L,Xn=new L;function Rr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xn.fromArray(i,r);const o=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),c=e.dot(Xn),l=t.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Nu=new Wt,ki=new L,Cr=new L;class Oi{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Cr)),this.expandByPoint(ki.copy(e.center).sub(Cr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,Lr=new L,vs=new L,Pn=new L,Pr=new L,xs=new L,Dr=new L;class Ua{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fn.copy(this.origin).addScaledVector(this.direction,t),fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lr.copy(e).add(t).multiplyScalar(.5),vs.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(vs),o=Pn.dot(this.direction),c=-Pn.dot(vs),l=Pn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),p=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Lr).addScaledVector(vs,d),p}intersectSphere(e,t){fn.subVectors(e.center,this.origin);const n=fn.dot(this.direction),s=fn.dot(fn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,fn)!==null}intersectTriangle(e,t,n,s,r){Pr.subVectors(t,e),xs.subVectors(n,e),Dr.crossVectors(Pr,xs);let a=this.direction.dot(Dr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pn.subVectors(this.origin,e);const c=o*this.direction.dot(xs.crossVectors(Pn,xs));if(c<0)return null;const l=o*this.direction.dot(Pr.cross(Pn));if(l<0||c+l>a)return null;const u=-o*Pn.dot(Dr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,s,r,a,o,c,l,u,h,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ui.setFromMatrixColumn(e,0).length(),r=1/ui.setFromMatrixColumn(e,1).length(),a=1/ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=p*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,p=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ou,e,Bu)}lookAt(e,t,n){const s=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Dn.crossVectors(n,Pt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Dn.crossVectors(n,Pt)),Dn.normalize(),ys.crossVectors(Pt,Dn),s[0]=Dn.x,s[4]=ys.x,s[8]=Pt.x,s[1]=Dn.y,s[5]=ys.y,s[9]=Pt.y,s[2]=Dn.z,s[6]=ys.z,s[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],v=n[7],S=n[11],M=n[15],b=s[0],w=s[4],C=s[8],x=s[12],E=s[1],N=s[5],F=s[9],P=s[13],O=s[2],z=s[6],q=s[10],k=s[14],V=s[3],Q=s[7],J=s[11],_e=s[15];return r[0]=a*b+o*E+c*O+l*V,r[4]=a*w+o*N+c*z+l*Q,r[8]=a*C+o*F+c*q+l*J,r[12]=a*x+o*P+c*k+l*_e,r[1]=u*b+h*E+d*O+p*V,r[5]=u*w+h*N+d*z+p*Q,r[9]=u*C+h*F+d*q+p*J,r[13]=u*x+h*P+d*k+p*_e,r[2]=g*b+_*E+m*O+f*V,r[6]=g*w+_*N+m*z+f*Q,r[10]=g*C+_*F+m*q+f*J,r[14]=g*x+_*P+m*k+f*_e,r[3]=y*b+v*E+S*O+M*V,r[7]=y*w+v*N+S*z+M*Q,r[11]=y*C+v*F+S*q+M*J,r[15]=y*x+v*P+S*k+M*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*p-n*c*p)+_*(+t*c*p-t*l*d+r*a*d-s*a*p+s*l*u-r*c*u)+m*(+t*l*h-t*o*p-r*a*h+n*a*p+r*o*u-n*l*u)+f*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=h*m*l-_*d*l+_*c*p-o*m*p-h*c*f+o*d*f,v=g*d*l-u*m*l-g*c*p+a*m*p+u*c*f-a*d*f,S=u*_*l-g*h*l+g*o*p-a*_*p-u*o*f+a*h*f,M=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,b=t*y+n*v+s*S+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=y*w,e[1]=(_*d*r-h*m*r-_*s*p+n*m*p+h*s*f-n*d*f)*w,e[2]=(o*m*r-_*c*r+_*s*l-n*m*l-o*s*f+n*c*f)*w,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*p-n*c*p)*w,e[4]=v*w,e[5]=(u*m*r-g*d*r+g*s*p-t*m*p-u*s*f+t*d*f)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*f-t*c*f)*w,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*p+t*c*p)*w,e[8]=S*w,e[9]=(g*h*r-u*_*r-g*n*p+t*_*p+u*n*f-t*h*f)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*f+t*o*f)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*p-t*o*p)*w,e[12]=M*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*_*s-g*n*c+t*_*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,p=r*u,g=r*h,_=a*u,m=a*h,f=o*h,y=c*l,v=c*u,S=c*h,M=n.x,b=n.y,w=n.z;return s[0]=(1-(_+f))*M,s[1]=(p+S)*M,s[2]=(g-v)*M,s[3]=0,s[4]=(p-S)*b,s[5]=(1-(d+f))*b,s[6]=(m+y)*b,s[7]=0,s[8]=(g+v)*w,s[9]=(m-y)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ui.set(s[0],s[1],s[2]).length();const a=ui.set(s[4],s[5],s[6]).length(),o=ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],jt.copy(this);const l=1/r,u=1/a,h=1/o;return jt.elements[0]*=l,jt.elements[1]*=l,jt.elements[2]*=l,jt.elements[4]*=u,jt.elements[5]*=u,jt.elements[6]*=u,jt.elements[8]*=h,jt.elements[9]*=h,jt.elements[10]*=h,t.setFromRotationMatrix(jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a){const o=this.elements,c=2*r/(t-e),l=2*r/(n-s),u=(t+e)/(t-e),h=(n+s)/(n-s),d=-(a+r)/(a-r),p=-2*a*r/(a-r);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,s,r,a){const o=this.elements,c=1/(t-e),l=1/(n-s),u=1/(a-r),h=(t+e)*c,d=(n+s)*l,p=(a+r)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ui=new L,jt=new we,Ou=new L(0,0,0),Bu=new L(1,1,1),Dn=new L,ys=new L,Pt=new L,wo=new we,Ro=new Hn;class lr{constructor(e=0,t=0,n=0,s=lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(_t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-_t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ro.setFromEuler(this),this.setFromQuaternion(Ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}lr.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zu=0;const Co=new L,hi=new Hn,pn=new we,Ms=new L,Vi=new L,Hu=new L,Gu=new Hn,Lo=new L(1,0,0),Po=new L(0,1,0),Do=new L(0,0,1),ku={type:"added"},Io={type:"removed"};class lt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DEFAULT_UP.clone();const e=new L,t=new lr,n=new Hn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new Ne}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Po,e)}rotateZ(e){return this.rotateOnAxis(Do,e)}translateOnAxis(e,t){return Co.copy(e).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Po,e)}translateZ(e){return this.translateOnAxis(Do,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ms.copy(e):Ms.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Vi,Ms,this.up):pn.lookAt(Ms,Vi,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ku)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Io)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Io)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let s=0,r=this.children.length;s<r;s++){const a=this.children[s].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,e,Hu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vi,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}lt.DEFAULT_UP=new L(0,1,0);lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yt=new L,mn=new L,Ir=new L,gn=new L,di=new L,fi=new L,Uo=new L,Ur=new L,Fr=new L,Nr=new L;let Ss=!1;class At{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Yt.subVectors(e,t),s.cross(Yt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Yt.subVectors(s,t),mn.subVectors(n,t),Ir.subVectors(e,t);const a=Yt.dot(Yt),o=Yt.dot(mn),c=Yt.dot(Ir),l=mn.dot(mn),u=mn.dot(Ir),h=a*l-o*o;if(h===0)return r.set(-2,-1,-1);const d=1/h,p=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,n,s,r,a,o,c){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),this.getInterpolation(e,t,n,s,r,a,o,c)}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,gn),c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(o,gn.z),c}static isFrontFacing(e,t,n,s){return Yt.subVectors(n,t),mn.subVectors(e,t),Yt.cross(mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Yt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return At.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return At.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ss=!0),At.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return At.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return At.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return At.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;di.subVectors(s,n),fi.subVectors(r,n),Ur.subVectors(e,n);const c=di.dot(Ur),l=fi.dot(Ur);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,s);const u=di.dot(Fr),h=fi.dot(Fr);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(di,a);Nr.subVectors(e,r);const p=di.dot(Nr),g=fi.dot(Nr);if(g>=0&&p<=g)return t.copy(r);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(fi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Uo.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Uo,o);const f=1/(m+_+d);return a=_*f,o=d*f,t.copy(n).addScaledVector(di,a).addScaledVector(fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Vu=0;class cn extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=us(),this.name="",this.type="Material",this.blending=Ri,this.side=on,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==on&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$t={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Or(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qt.workingColorSpace){if(e=Tu(e,1),t=_t(t,0,1),n=_t(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Or(a,r,e+1/3),this.g=Or(a,r,e),this.b=Or(a,r,e-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(e,t=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=Ar(e.r),this.g=Ar(e.g),this.b=Ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return qt.fromWorkingColorSpace(pt.copy(this),e),Math.round(_t(pt.r*255,0,255))*65536+Math.round(_t(pt.g*255,0,255))*256+Math.round(_t(pt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(pt.copy(this),t);const n=pt.r,s=pt.g,r=pt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=Te){qt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,n=pt.g,s=pt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($t),$t.h+=e,$t.s+=t,$t.l+=n,this.setHSL($t.h,$t.s,$t.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($t),e.getHSL(bs);const n=br($t.h,bs.h,t),s=br($t.s,bs.s,t),r=br($t.l,bs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new He;He.NAMES=ic;class Fa extends cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new L,Es=new be;class wt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=So,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ms(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ms(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ms(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ms(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==So&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class sc extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rc extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class at extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Wu=0;const Nt=new we,Br=new lt,pi=new L,Dt=new Wt,Wi=new Wt,rt=new L;class Rt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?rc:sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Dt.setFromBufferAttribute(r),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(rt.addVectors(Dt.min,Wi.min),Dt.expandByPoint(rt),rt.addVectors(Dt.max,Wi.max),Dt.expandByPoint(rt)):(Dt.expandByPoint(Wi.min),Dt.expandByPoint(Wi.max))}Dt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)rt.fromBufferAttribute(o,l),c&&(pi.fromBufferAttribute(e,l),rt.add(pi)),s=Math.max(s,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<o;E++)l[E]=new L,u[E]=new L;const h=new L,d=new L,p=new L,g=new be,_=new be,m=new be,f=new L,y=new L;function v(E,N,F){h.fromArray(s,E*3),d.fromArray(s,N*3),p.fromArray(s,F*3),g.fromArray(a,E*2),_.fromArray(a,N*2),m.fromArray(a,F*2),d.sub(h),p.sub(h),_.sub(g),m.sub(g);const P=1/(_.x*m.y-m.x*_.y);isFinite(P)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(P),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(P),l[E].add(f),l[N].add(f),l[F].add(f),u[E].add(y),u[N].add(y),u[F].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,N=S.length;E<N;++E){const F=S[E],P=F.start,O=F.count;for(let z=P,q=P+O;z<q;z+=3)v(n[z+0],n[z+1],n[z+2])}const M=new L,b=new L,w=new L,C=new L;function x(E){w.fromArray(r,E*3),C.copy(w);const N=l[E];M.copy(N),M.sub(w.multiplyScalar(w.dot(N))).normalize(),b.crossVectors(C,N);const P=b.dot(u[E])<0?-1:1;c[E*4]=M.x,c[E*4+1]=M.y,c[E*4+2]=M.z,c[E*4+3]=P}for(let E=0,N=S.length;E<N;++E){const F=S[E],P=F.start,O=F.count;for(let z=P,q=P+O;z<q;z+=3)x(n[z+0]),x(n[z+1]),x(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?p=c[_]*o.data.stride+o.offset:p=c[_]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new wt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new we,en=new Ua,As=new Oi,No=new L,mi=new L,gi=new L,_i=new L,zr=new L,Ts=new L,ws=new be,Rs=new be,Cs=new be,Oo=new L,Bo=new L,zo=new L,Ls=new L,Ps=new L;class Ut extends lt{constructor(e=new Rt,t=new Fa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(zr.fromBufferAttribute(h,e),a?Ts.addScaledVector(zr,u):Ts.addScaledVector(zr.sub(t),u))}t.add(Ts)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),en.copy(e.ray).recast(e.near),!(As.containsPoint(en.origin)===!1&&(en.intersectSphere(As,No)===null||en.origin.distanceToSquared(No)>(e.far-e.near)**2))&&(Fo.copy(r).invert(),en.copy(e.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&en.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const s=this.geometry,r=this.material,a=s.index,o=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=f,S=y;v<S;v+=3){const M=a.getX(v),b=a.getX(v+1),w=a.getX(v+2);n=Ds(this,m,e,en,c,l,u,M,b,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=a.getX(_),y=a.getX(_+1),v=a.getX(_+2);n=Ds(this,r,e,en,c,l,u,f,y,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const _=h[p],m=r[_.materialIndex],f=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=f,S=y;v<S;v+=3){const M=v,b=v+1,w=v+2;n=Ds(this,m,e,en,c,l,u,M,b,w),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=p,m=g;_<m;_+=3){const f=_,y=_+1,v=_+2;n=Ds(this,r,e,en,c,l,u,f,y,v),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}}function Xu(i,e,t,n,s,r,a,o){let c;if(e.side===Et?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===on,o),c===null)return null;Ps.copy(o),Ps.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ps);return l<t.near||l>t.far?null:{distance:l,point:Ps.clone(),object:i}}function Ds(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,mi),i.getVertexPosition(c,gi),i.getVertexPosition(l,_i);const u=Xu(i,e,t,n,mi,gi,_i,Ls);if(u){s&&(ws.fromBufferAttribute(s,o),Rs.fromBufferAttribute(s,c),Cs.fromBufferAttribute(s,l),u.uv=At.getInterpolation(Ls,mi,gi,_i,ws,Rs,Cs,new be)),r&&(ws.fromBufferAttribute(r,o),Rs.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,l),u.uv1=At.getInterpolation(Ls,mi,gi,_i,ws,Rs,Cs,new be),u.uv2=u.uv1),a&&(Oo.fromBufferAttribute(a,o),Bo.fromBufferAttribute(a,c),zo.fromBufferAttribute(a,l),u.normal=At.getInterpolation(Ls,mi,gi,_i,Oo,Bo,zo,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};At.getNormal(mi,gi,_i,h.normal),u.face=h}return u}class hs extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(h,2));function g(_,m,f,y,v,S,M,b,w,C,x){const E=S/w,N=M/C,F=S/2,P=M/2,O=b/2,z=w+1,q=C+1;let k=0,V=0;const Q=new L;for(let J=0;J<q;J++){const _e=J*N-P;for(let ie=0;ie<z;ie++){const W=ie*E-F;Q[_]=W*y,Q[m]=_e*v,Q[f]=O,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[f]=b>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(ie/w),h.push(1-J/C),k+=1}}for(let J=0;J<C;J++)for(let _e=0;_e<w;_e++){const ie=d+_e+z*J,W=d+_e+z*(J+1),Z=d+(_e+1)+z*(J+1),se=d+(_e+1)+z*J;c.push(ie,W,se),c.push(W,Z,se),V+=6}o.addGroup(p,V,x),p+=V,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ui(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Mt(i){const e={};for(let t=0;t<i.length;t++){const n=Ui(i[t]);for(const s in n)e[s]=n[s]}return e}function qu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ac(i){return i.getRenderTarget()===null?i.outputColorSpace:ln}const ju={clone:Ui,merge:Mt};var Yu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$u=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jt extends cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yu,this.fragmentShader=$u,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ui(e.uniforms),this.uniformsGroups=qu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,xi=1;class Ku extends lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const s=new Ht(vi,xi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(1,0,0),this.add(s);const r=new Ht(vi,xi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new Ht(vi,xi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ht(vi,xi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new Ht(vi,xi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Ht(vi,xi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[s,r,a,o,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=bn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,s),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class lc extends vt{constructor(e,t,n,s,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Pi,super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zu extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?Te:Qn),this.texture=new lc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hs(5,5,5),r=new Jt({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Et,blending:Nn});r.uniforms.tEquirect.value=t;const a=new Ut(s,r),o=t.minFilter;return t.minFilter===rs&&(t.minFilter=ut),new Ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Hr=new L,Ju=new L,Qu=new Ne;class Mn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Hr.subVectors(n,t).cross(Ju.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Qu.getNormalMatrix(e),s=this.coplanarPoint(Hr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new Oi,Is=new L;class Na{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],p=n[9],g=n[10],_=n[11],m=n[12],f=n[13],y=n[14],v=n[15];return t[0].setComponents(o-s,h-c,_-d,v-m).normalize(),t[1].setComponents(o+s,h+c,_+d,v+m).normalize(),t[2].setComponents(o+r,h+l,_+p,v+f).normalize(),t[3].setComponents(o-r,h-l,_-p,v-f).normalize(),t[4].setComponents(o-a,h-u,_-g,v-y).normalize(),t[5].setComponents(o+a,h+u,_+g,v+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Is.x=s.normal.x>0?e.max.x:e.min.x,Is.y=s.normal.y>0?e.max.y:e.min.y,Is.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function eh(i,e){const t=e.isWebGL2,n=new WeakMap;function s(l,u){const h=l.array,d=l.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const d=u.array,p=u.updateRange;i.bindBuffer(h,l),p.count===-1?i.bufferSubData(h,0,d):(t?i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):i.bufferSubData(h,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,s(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:o,update:c}}class cr extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const y=f*d-a;for(let v=0;v<l;v++){const S=v*h-r;g.push(S,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const v=y+l*f,S=y+l*(f+1),M=y+1+l*(f+1),b=y+1+l*f;p.push(v,S,b),p.push(S,M,b)}this.setIndex(p),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(_,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.widthSegments,e.heightSegments)}}var th=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ih=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ah=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oh="vec3 transformed = vec3( position );",lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,hh=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ph=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Uh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
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
}`,zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Wh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Xh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Kh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sd=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,fd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,md=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,yd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Md=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ed=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Td=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Od=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zd=`#ifdef USE_SKINNING
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
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wd=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,qd=`#ifdef USE_UV
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
#endif`,jd=`#ifdef USE_UV
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
#endif`,Yd=`#ifdef USE_UV
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
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,sf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,af=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hf=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,df=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ff=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,pf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,gf=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Sf=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ef=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`uniform float size;
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
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Cf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:th,alphamap_pars_fragment:nh,alphatest_fragment:ih,alphatest_pars_fragment:sh,aomap_fragment:rh,aomap_pars_fragment:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:uh,bumpmap_pars_fragment:hh,clipping_planes_fragment:dh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:vh,color_vertex:xh,common:yh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:Sh,displacementmap_pars_vertex:bh,displacementmap_vertex:Eh,emissivemap_fragment:Ah,emissivemap_pars_fragment:Th,encodings_fragment:wh,encodings_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Lh,envmap_pars_fragment:Ph,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Wh,envmap_vertex:Ih,fog_vertex:Uh,fog_pars_vertex:Fh,fog_fragment:Nh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Bh,lightmap_fragment:zh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:kh,lights_pars_begin:Vh,lights_toon_fragment:Xh,lights_toon_pars_fragment:qh,lights_phong_fragment:jh,lights_phong_pars_fragment:Yh,lights_physical_fragment:$h,lights_physical_pars_fragment:Kh,lights_fragment_begin:Zh,lights_fragment_maps:Jh,lights_fragment_end:Qh,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphcolor_vertex:ud,morphnormal_vertex:hd,morphtarget_pars_vertex:dd,morphtarget_vertex:fd,normal_fragment_begin:pd,normal_fragment_maps:md,normal_pars_fragment:gd,normal_pars_vertex:_d,normal_vertex:vd,normalmap_pars_fragment:xd,clearcoat_normal_fragment_begin:yd,clearcoat_normal_fragment_maps:Md,clearcoat_pars_fragment:Sd,iridescence_pars_fragment:bd,output_fragment:Ed,packing:Ad,premultiplied_alpha_fragment:Td,project_vertex:wd,dithering_fragment:Rd,dithering_pars_fragment:Cd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Pd,shadowmap_pars_fragment:Dd,shadowmap_pars_vertex:Id,shadowmap_vertex:Ud,shadowmask_pars_fragment:Fd,skinbase_vertex:Nd,skinning_pars_vertex:Od,skinning_vertex:Bd,skinnormal_vertex:zd,specularmap_fragment:Hd,specularmap_pars_fragment:Gd,tonemapping_fragment:kd,tonemapping_pars_fragment:Vd,transmission_fragment:Wd,transmission_pars_fragment:Xd,uv_pars_fragment:qd,uv_pars_vertex:jd,uv_vertex:Yd,worldpos_vertex:$d,background_vert:Kd,background_frag:Zd,backgroundCube_vert:Jd,backgroundCube_frag:Qd,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:sf,distanceRGBA_vert:rf,distanceRGBA_frag:af,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:uf,meshbasic_vert:hf,meshbasic_frag:df,meshlambert_vert:ff,meshlambert_frag:pf,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:vf,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:Mf,meshphysical_frag:Sf,meshtoon_vert:bf,meshtoon_frag:Ef,points_vert:Af,points_frag:Tf,shadow_vert:wf,shadow_frag:Rf,sprite_vert:Cf,sprite_frag:Lf},ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaTest:{value:0}}},nn={basic:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:Mt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:Mt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:Mt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new He(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:Mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:Mt([ae.points,ae.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:Mt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:Mt([ae.common,ae.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:Mt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:Mt([ae.sprite,ae.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Le.backgroundCube_vert,fragmentShader:Le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:Mt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:Mt([ae.lights,ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};nn.physical={uniforms:Mt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};const Us={r:0,b:0,g:0};function Pf(i,e,t,n,s,r,a){const o=new He(0);let c=r===!0?0:1,l,u,h=null,d=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;switch(v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ar)?(u===void 0&&(u=new Ut(new hs(1,1,1),new Jt({name:"BackgroundCubeMaterial",uniforms:Ui(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:Et,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Te,(h!==v||d!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ut(new cr(2,2),new Jt({name:"BackgroundMaterial",uniforms:Ui(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,f){m.getRGB(Us,ac(i)),n.buffers.color.setClear(Us.r,Us.g,Us.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:g}}function Df(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,u=!1;function h(O,z,q,k,V){let Q=!1;if(a){const J=_(k,q,z);l!==J&&(l=J,p(l.object)),Q=f(O,k,q,V),Q&&y(O,k,q,V)}else{const J=z.wireframe===!0;(l.geometry!==k.id||l.program!==q.id||l.wireframe!==J)&&(l.geometry=k.id,l.program=q.id,l.wireframe=J,Q=!0)}V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,C(O,z,q,k),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function p(O){return n.isWebGL2?i.bindVertexArray(O):r.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?i.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function _(O,z,q){const k=q.wireframe===!0;let V=o[O.id];V===void 0&&(V={},o[O.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let J=Q[k];return J===void 0&&(J=m(d()),Q[k]=J),J}function m(O){const z=[],q=[],k=[];for(let V=0;V<s;V++)z[V]=0,q[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:k,object:O,attributes:{},index:null}}function f(O,z,q,k){const V=l.attributes,Q=z.attributes;let J=0;const _e=q.getAttributes();for(const ie in _e)if(_e[ie].location>=0){const Z=V[ie];let se=Q[ie];if(se===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(se=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(se=O.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;J++}return l.attributesNum!==J||l.index!==k}function y(O,z,q,k){const V={},Q=z.attributes;let J=0;const _e=q.getAttributes();for(const ie in _e)if(_e[ie].location>=0){let Z=Q[ie];Z===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(Z=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(Z=O.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),V[ie]=se,J++}l.attributes=V,l.attributesNum=J,l.index=k}function v(){const O=l.newAttributes;for(let z=0,q=O.length;z<q;z++)O[z]=0}function S(O){M(O,0)}function M(O,z){const q=l.newAttributes,k=l.enabledAttributes,V=l.attributeDivisors;q[O]=1,k[O]===0&&(i.enableVertexAttribArray(O),k[O]=1),V[O]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),V[O]=z)}function b(){const O=l.newAttributes,z=l.enabledAttributes;for(let q=0,k=z.length;q<k;q++)z[q]!==O[q]&&(i.disableVertexAttribArray(q),z[q]=0)}function w(O,z,q,k,V,Q){n.isWebGL2===!0&&(q===i.INT||q===i.UNSIGNED_INT)?i.vertexAttribIPointer(O,z,q,V,Q):i.vertexAttribPointer(O,z,q,k,V,Q)}function C(O,z,q,k){if(n.isWebGL2===!1&&(O.isInstancedMesh||k.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const V=k.attributes,Q=q.getAttributes(),J=z.defaultAttributeValues;for(const _e in Q){const ie=Q[_e];if(ie.location>=0){let W=V[_e];if(W===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(W=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(W=O.instanceColor)),W!==void 0){const Z=W.normalized,se=W.itemSize,oe=t.get(W);if(oe===void 0)continue;const U=oe.buffer,Me=oe.type,Se=oe.bytesPerElement;if(W.isInterleavedBufferAttribute){const re=W.data,xe=re.stride,ze=W.offset;if(re.isInstancedInterleavedBuffer){for(let ge=0;ge<ie.locationSize;ge++)M(ie.location+ge,re.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<ie.locationSize;ge++)S(ie.location+ge);i.bindBuffer(i.ARRAY_BUFFER,U);for(let ge=0;ge<ie.locationSize;ge++)w(ie.location+ge,se/ie.locationSize,Me,Z,xe*Se,(ze+se/ie.locationSize*ge)*Se)}else{if(W.isInstancedBufferAttribute){for(let re=0;re<ie.locationSize;re++)M(ie.location+re,W.meshPerAttribute);O.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let re=0;re<ie.locationSize;re++)S(ie.location+re);i.bindBuffer(i.ARRAY_BUFFER,U);for(let re=0;re<ie.locationSize;re++)w(ie.location+re,se/ie.locationSize,Me,Z,se*Se,se/ie.locationSize*re*Se)}}else if(J!==void 0){const Z=J[_e];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(ie.location,Z);break;case 3:i.vertexAttrib3fv(ie.location,Z);break;case 4:i.vertexAttrib4fv(ie.location,Z);break;default:i.vertexAttrib1fv(ie.location,Z)}}}}b()}function x(){F();for(const O in o){const z=o[O];for(const q in z){const k=z[q];for(const V in k)g(k[V].object),delete k[V];delete z[q]}delete o[O]}}function E(O){if(o[O.id]===void 0)return;const z=o[O.id];for(const q in z){const k=z[q];for(const V in k)g(k[V].object),delete k[V];delete z[q]}delete o[O.id]}function N(O){for(const z in o){const q=o[z];if(q[O.id]===void 0)continue;const k=q[O.id];for(const V in k)g(k[V].object),delete k[V];delete q[O.id]}}function F(){P(),u=!0,l!==c&&(l=c,p(l.object))}function P(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:F,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function If(i,e,t,n){const s=n.isWebGL2;let r;function a(l){r=l}function o(l,u){i.drawArrays(r,l,u),t.update(u,r,1)}function c(l,u,h){if(h===0)return;let d,p;if(s)d=i,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,l,u,h),t.update(u,r,h)}this.setMode=a,this.render=o,this.renderInstances=c}function Uf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=a||e.has("OES_texture_float"),M=v&&S,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:M,maxSamples:b}}function Ff(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Mn,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||s;return s=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const y=r?0:n,v=y*4;let S=f.clippingState||null;c.value=S,S=u(g,d,v,p);for(let M=0;M!==v;++M)S[M]=t[M];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)a.copy(h[v]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nf(i){let e=new WeakMap;function t(a,o){return o===ra?a.mapping=Pi:o===aa&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ra||o===aa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Zu(c.height/2);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Oa extends oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ei=4,Ho=[.125,.215,.35,.446,.526,.582],Kn=20,Gr=new Oa,Go=new He;let kr=null;const Yn=(1+Math.sqrt(5))/2,yi=1/Yn,ko=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Yn,yi),new L(0,Yn,-yi),new L(yi,0,Yn),new L(-yi,0,Yn),new L(Yn,yi,0),new L(-Yn,yi,0)];class Vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){kr=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kr),e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:as,format:bt,colorSpace:ln,depthBuffer:!1},s=Wo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Of(r)),this._blurMaterial=Bf(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Gr)}_sceneToCubeUV(e,t,n,s){const o=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Go),u.toneMapping=bn,u.autoClear=!1;const p=new Fa({name:"PMREM.Background",side:Et,depthWrite:!1,depthTest:!1}),g=new Ut(new hs,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Go),_=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;Fs(s,y*v,f>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Pi||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Fs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Gr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ko[(s-1)%ko.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[s],l),d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let y=0;for(let w=0;w<Kn;++w){const C=w/_,x=Math.exp(-C*C/2);f.push(x),w===0?y+=x:w<m&&(y+=2*x)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const S=this._sizeLods[s],M=3*S*(s>v-Ei?s-v+Ei:0),b=4*(this._cubeSize-S);Fs(t,M,b,3*S,2*S),c.setRenderTarget(t),c.render(h,Gr)}}function Of(i){const e=[],t=[],n=[];let s=i;const r=i-Ei+1+Ho.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Ei?c=Ho[a-i+Ei-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,C=b>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(x,_*g*b),v.set(d,m*g*b);const E=[b,b,b,b,b,b];S.set(E,f*g*b)}const M=new Rt;M.setAttribute("position",new wt(y,_)),M.setAttribute("uv",new wt(v,m)),M.setAttribute("faceIndex",new wt(S,f)),e.push(M),s>Ei&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Wo(i,e,t){const n=new zn(i,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Bf(i,e,t){const n=new Float32Array(Kn),s=new L(0,1,0);return new Jt({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Xo(){return new Jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function qo(){return new Jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ra||c===aa,u=c===Pi||c===Di;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Vo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Vo(i));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Hf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gf(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const M=y[v+0],b=y[v+1],w=y[v+2];d.push(M,b,b,w,w,M)}}else{const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const M=v+0,b=v+1,w=v+2;d.push(M,b,b,w,w,M)}}const m=new(Jl(d)?rc:sc)(d,1);m.version=_;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function kf(i,e,t,n){const s=n.isWebGL2;let r;function a(d){r=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,p){i.drawElements(r,p,o,d*c),t.update(p,r,1)}function h(d,p,g){if(g===0)return;let _,m;if(s)_=i,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](r,p,o,d*c,g),t.update(p,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function Vf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Wf(i,e){return i[0]-e[0]}function Xf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function qf(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new ot,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(u);if(m===void 0||m.count!==_){let z=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let x=0;v===!0&&(x=1),S===!0&&(x=2),M===!0&&(x=3);let E=u.attributes.position.count*x,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const F=new Float32Array(E*N*4*_),P=new tc(F,E,N,_);P.type=Tt,P.needsUpdate=!0;const O=x*4;for(let q=0;q<_;q++){const k=b[q],V=w[q],Q=C[q],J=E*N*4*q;for(let _e=0;_e<k.count;_e++){const ie=_e*O;v===!0&&(a.fromBufferAttribute(k,_e),F[J+ie+0]=a.x,F[J+ie+1]=a.y,F[J+ie+2]=a.z,F[J+ie+3]=0),S===!0&&(a.fromBufferAttribute(V,_e),F[J+ie+4]=a.x,F[J+ie+5]=a.y,F[J+ie+6]=a.z,F[J+ie+7]=0),M===!0&&(a.fromBufferAttribute(Q,_e),F[J+ie+8]=a.x,F[J+ie+9]=a.y,F[J+ie+10]=a.z,F[J+ie+11]=Q.itemSize===4?a.w:1)}}m={count:_,texture:P,size:new be(E,N)},r.set(u,m),u.addEventListener("dispose",z)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=u.morphTargetsRelative?1:1-f;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const M=_[S];M[0]=S,M[1]=d[S]}_.sort(Xf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Wf);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const M=o[S],b=M[0],w=M[1];b!==Number.MAX_SAFE_INTEGER&&w?(m&&u.getAttribute("morphTarget"+S)!==m[b]&&u.setAttribute("morphTarget"+S,m[b]),f&&u.getAttribute("morphNormal"+S)!==f[b]&&u.setAttribute("morphNormal"+S,f[b]),s[S]=w,y+=w):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),s[S]=0)}const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function jf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER)),h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const uc=new vt,hc=new tc,dc=new Ia,fc=new lc,jo=[],Yo=[],$o=new Float32Array(16),Ko=new Float32Array(9),Zo=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=jo[s];if(r===void 0&&(r=new Float32Array(s),jo[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function it(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ur(i,e){let t=Yo[e];t===void 0&&(t=new Int32Array(e),Yo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Yf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2fv(this.addr,e),it(t,e)}}function Kf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;i.uniform3fv(this.addr,e),it(t,e)}}function Zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4fv(this.addr,e),it(t,e)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),it(t,n)}}function Qf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Ko.set(n),i.uniformMatrix3fv(this.addr,!1,Ko),it(t,n)}}function ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;$o.set(n),i.uniformMatrix4fv(this.addr,!1,$o),it(t,n)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2iv(this.addr,e),it(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3iv(this.addr,e),it(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4iv(this.addr,e),it(t,e)}}function rp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ap(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;i.uniform2uiv(this.addr,e),it(t,e)}}function op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;i.uniform3uiv(this.addr,e),it(t,e)}}function lp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;i.uniform4uiv(this.addr,e),it(t,e)}}function cp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2D(e||uc,s)}function up(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||dc,s)}function hp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fc,s)}function dp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hc,s)}function fp(i){switch(i){case 5126:return Yf;case 35664:return $f;case 35665:return Kf;case 35666:return Zf;case 35674:return Jf;case 35675:return Qf;case 35676:return ep;case 5124:case 35670:return tp;case 35667:case 35671:return np;case 35668:case 35672:return ip;case 35669:case 35673:return sp;case 5125:return rp;case 36294:return ap;case 36295:return op;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return cp;case 35679:case 36299:case 36307:return up;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return dp}}function pp(i,e){i.uniform1fv(this.addr,e)}function mp(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function gp(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function _p(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function vp(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xp(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function yp(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mp(i,e){i.uniform1iv(this.addr,e)}function Sp(i,e){i.uniform2iv(this.addr,e)}function bp(i,e){i.uniform3iv(this.addr,e)}function Ep(i,e){i.uniform4iv(this.addr,e)}function Ap(i,e){i.uniform1uiv(this.addr,e)}function Tp(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function Rp(i,e){i.uniform4uiv(this.addr,e)}function Cp(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);nt(n,r)||(i.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||uc,r[a])}function Lp(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);nt(n,r)||(i.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||dc,r[a])}function Pp(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);nt(n,r)||(i.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fc,r[a])}function Dp(i,e,t){const n=this.cache,s=e.length,r=ur(t,s);nt(n,r)||(i.uniform1iv(this.addr,r),it(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hc,r[a])}function Ip(i){switch(i){case 5126:return pp;case 35664:return mp;case 35665:return gp;case 35666:return _p;case 35674:return vp;case 35675:return xp;case 35676:return yp;case 5124:case 35670:return Mp;case 35667:case 35671:return Sp;case 35668:case 35672:return bp;case 35669:case 35673:return Ep;case 5125:return Ap;case 36294:return Tp;case 36295:return wp;case 36296:return Rp;case 35678:case 36198:case 36298:case 36306:case 35682:return Cp;case 35679:case 36299:case 36307:return Lp;case 35680:case 36300:case 36308:case 36293:return Pp;case 36289:case 36303:case 36311:case 36292:return Dp}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=fp(t.type)}}class Fp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Ip(t.type)}}class Np{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function Jo(i,e){i.seq.push(e),i.map[e.id]=e}function Op(i,e,t){const n=i.name,s=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jo(t,l===void 0?new Up(o,i,e):new Fp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Np(o),Jo(t,h)),t=h}}}class Js{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Op(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Qo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Bp=0;function zp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Hp(i){switch(i){case ln:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function el(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zp(i.getShaderSource(e),a)}else return s}function Gp(i,e){const t=Hp(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function kp(i,e){let t;switch(e){case cu:t="Linear";break;case uu:t="Reinhard";break;case hu:t="OptimizedCineon";break;case du:t="ACESFilmic";break;case fu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Vp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter($i).join(`
`)}function Wp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function $i(i){return i!==""}function tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qp=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(i){return i.replace(qp,jp)}function jp(i,e){const t=Le[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return da(t)}const Yp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(Yp,$p)}function $p(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Kp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Di:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Qp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ca:e="ENVMAP_BLENDING_MULTIPLY";break;case ou:e="ENVMAP_BLENDING_MIX";break;case lu:e="ENVMAP_BLENDING_ADD";break}return e}function em(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function tm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Kp(t),l=Zp(t),u=Jp(t),h=Qp(t),d=em(t),p=t.isWebGL2?"":Vp(t),g=Wp(r),_=s.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter($i).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter($i).join(`
`),f.length>0&&(f+=`
`)):(m=[sl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($i).join(`
`),f=[p,sl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bn?"#define TONE_MAPPING":"",t.toneMapping!==bn?Le.tonemapping_pars_fragment:"",t.toneMapping!==bn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,Gp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($i).join(`
`)),a=da(a),a=tl(a,t),a=nl(a,t),o=da(o),o=tl(o,t),o=nl(o,t),a=il(a),o=il(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+a,S=y+f+o,M=Qo(s,s.VERTEX_SHADER,v),b=Qo(s,s.FRAGMENT_SHADER,S);if(s.attachShader(_,M),s.attachShader(_,b),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_),i.debug.checkShaderErrors){const x=s.getProgramInfoLog(_).trim(),E=s.getShaderInfoLog(M).trim(),N=s.getShaderInfoLog(b).trim();let F=!0,P=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,b);else{const O=el(s,M,"vertex"),z=el(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+O+`
`+z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||N==="")&&(P=!1);P&&(this.diagnostics={runnable:F,programLog:x,vertexShader:{log:E,prefix:m},fragmentShader:{log:N,prefix:f}})}s.deleteShader(M),s.deleteShader(b);let w;this.getUniforms=function(){return w===void 0&&(w=new Js(s,_)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=Xp(s,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=Bp++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new sm(e),t.set(e,n)),n}}class sm{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}}function rm(i,e,t,n,s,r,a){const o=new nc,c=new im,l=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,E,N,F,P){const O=F.fog,z=P.geometry,q=x.isMeshStandardMaterial?F.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),V=k&&k.mapping===ar?k.image.height:null,Q=g[x.type];x.precision!==null&&(p=s.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const J=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,_e=J!==void 0?J.length:0;let ie=0;z.morphAttributes.position!==void 0&&(ie=1),z.morphAttributes.normal!==void 0&&(ie=2),z.morphAttributes.color!==void 0&&(ie=3);let W,Z,se,oe;if(Q){const ke=nn[Q];W=ke.vertexShader,Z=ke.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,c.update(x),se=c.getVertexShaderID(x),oe=c.getFragmentShaderID(x);const U=i.getRenderTarget(),Me=P.isInstancedMesh===!0,Se=!!x.map,re=!!x.matcap,xe=!!k,ze=!!x.aoMap,ge=!!x.lightMap,Re=!!x.bumpMap,$e=!!x.normalMap,je=!!x.displacementMap,Qe=!!x.emissiveMap,Ke=!!x.metalnessMap,Be=!!x.roughnessMap,We=x.clearcoat>0,ht=x.iridescence>0,R=x.sheen>0,A=x.transmission>0,X=We&&!!x.clearcoatMap,ee=We&&!!x.clearcoatNormalMap,ne=We&&!!x.clearcoatRoughnessMap,le=ht&&!!x.iridescenceMap,D=ht&&!!x.iridescenceThicknessMap,K=R&&!!x.sheenColorMap,G=R&&!!x.sheenRoughnessMap,ce=!!x.specularMap,de=!!x.specularColorMap,pe=!!x.specularIntensityMap,ue=A&&!!x.transmissionMap,fe=A&&!!x.thicknessMap,Ee=!!x.gradientMap,Pe=!!x.alphaMap,Ze=x.alphaTest>0,I=!!x.extensions,j=!!z.attributes.uv1,te=!!z.attributes.uv2,he=!!z.attributes.uv3;return{isWebGL2:u,shaderID:Q,shaderName:x.type,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Me,instancingColor:Me&&P.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:U===null?i.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ln,map:Se,matcap:re,envMap:xe,envMapMode:xe&&k.mapping,envMapCubeUVHeight:V,aoMap:ze,lightMap:ge,bumpMap:Re,normalMap:$e,displacementMap:d&&je,emissiveMap:Qe,normalMapObjectSpace:$e&&x.normalMapType===Eu,normalMapTangentSpace:$e&&x.normalMapType===Da,metalnessMap:Ke,roughnessMap:Be,clearcoat:We,clearcoatMap:X,clearcoatNormalMap:ee,clearcoatRoughnessMap:ne,iridescence:ht,iridescenceMap:le,iridescenceThicknessMap:D,sheen:R,sheenColorMap:K,sheenRoughnessMap:G,specularMap:ce,specularColorMap:de,specularIntensityMap:pe,transmission:A,transmissionMap:ue,thicknessMap:fe,gradientMap:Ee,opaque:x.transparent===!1&&x.blending===Ri,alphaMap:Pe,alphaTest:Ze,combine:x.combine,mapUv:Se&&_(x.map.channel),aoMapUv:ze&&_(x.aoMap.channel),lightMapUv:ge&&_(x.lightMap.channel),bumpMapUv:Re&&_(x.bumpMap.channel),normalMapUv:$e&&_(x.normalMap.channel),displacementMapUv:je&&_(x.displacementMap.channel),emissiveMapUv:Qe&&_(x.emissiveMap.channel),metalnessMapUv:Ke&&_(x.metalnessMap.channel),roughnessMapUv:Be&&_(x.roughnessMap.channel),clearcoatMapUv:X&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:D&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:K&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:G&&_(x.sheenRoughnessMap.channel),specularMapUv:ce&&_(x.specularMap.channel),specularColorMapUv:de&&_(x.specularColorMap.channel),specularIntensityMapUv:pe&&_(x.specularIntensityMap.channel),transmissionMapUv:ue&&_(x.transmissionMap.channel),thicknessMapUv:fe&&_(x.thicknessMap.channel),alphaMapUv:Pe&&_(x.alphaMap.channel),vertexTangents:$e&&!!z.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:j,vertexUv2s:te,vertexUv3s:he,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Se||Pe),fog:!!O,useFog:x.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:bn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gt,flipSided:x.side===Et,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:I&&x.extensions.derivatives===!0,extensionFragDepth:I&&x.extensions.fragDepth===!0,extensionDrawBuffers:I&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(y(E,x),v(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function v(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),x.push(o.mask)}function S(x){const E=g[x.type];let N;if(E){const F=nn[E];N=ju.clone(F.uniforms)}else N=x.uniforms;return N}function M(x,E){let N;for(let F=0,P=l.length;F<P;F++){const O=l[F];if(O.cacheKey===E){N=O,++N.usedTimes;break}}return N===void 0&&(N=new tm(i,E,x,r),l.push(N)),N}function b(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function w(x){c.remove(x)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:M,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:C}}function am(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function al(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),e++,f}function o(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function c(h,d,p,g,_,m){const f=a(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||om),n.length>1&&n.sort(d||rl),s.length>1&&s.sort(d||rl)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function lm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new al,i.set(n,[a])):s>=r.length?(a=new al,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new He};break;case"SpotLight":t={position:new L,direction:new L,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function um(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let hm=0;function dm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fm(i,e){const t=new cm,n=um(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,a=new we,o=new we;function c(u,h){let d=0,p=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,S=0,M=0,b=0,w=0,C=0;u.sort(dm);const x=h===!0?Math.PI:1;for(let N=0,F=u.length;N<F;N++){const P=u[N],O=P.color,z=P.intensity,q=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=O.r*z*x,p+=O.g*z*x,g+=O.b*z*x;else if(P.isLightProbe)for(let V=0;V<9;V++)s.probe[V].addScaledVector(P.sh.coefficients[V],z);else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const Q=P.shadow,J=n.get(P);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,s.directionalShadow[_]=J,s.directionalShadowMap[_]=k,s.directionalShadowMatrix[_]=P.shadow.matrix,S++}s.directional[_]=V,_++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(O).multiplyScalar(z*x),V.distance=q,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,s.spot[f]=V;const Q=P.shadow;if(P.map&&(s.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&C++),s.spotLightMatrix[f]=Q.matrix,P.castShadow){const J=n.get(P);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,s.spotShadow[f]=J,s.spotShadowMap[f]=k,b++}f++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(O).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),s.rectArea[y]=V,y++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*x),V.distance=P.distance,V.decay=P.decay,P.castShadow){const Q=P.shadow,J=n.get(P);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=P.shadow.matrix,M++}s.point[m]=V,m++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(z*x),V.groundColor.copy(P.groundColor).multiplyScalar(z*x),s.hemi[v]=V,v++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_FLOAT_1,s.rectAreaLTC2=ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ae.LTC_HALF_1,s.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=p,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==_||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==y||E.hemiLength!==v||E.numDirectionalShadows!==S||E.numPointShadows!==M||E.numSpotShadows!==b||E.numSpotMaps!==w)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=y,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=S,s.directionalShadowMap.length=S,s.pointShadow.length=M,s.pointShadowMap.length=M,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=S,s.pointShadowMatrix.length=M,s.spotLightMatrix.length=b+w-C,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=C,E.directionalLength=_,E.pointLength=m,E.spotLength=f,E.rectAreaLength=y,E.hemiLength=v,E.numDirectionalShadows=S,E.numPointShadows=M,E.numSpotShadows=b,E.numSpotMaps=w,s.version=hm++)}function l(u,h){let d=0,p=0,g=0,_=0,m=0;const f=h.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const M=s.directional[d];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),d++}else if(S.isSpotLight){const M=s.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const M=s.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const M=s.point[p];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const M=s.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:s}}function ol(i,e){const t=new fm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(h){n.push(h)}function o(h){s.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function pm(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new ol(i,e),t.set(r,[c])):a>=o.length?(c=new ol(i,e),o.push(c)):c=o[a],c}function s(){t=new WeakMap}return{get:n,dispose:s}}class mm extends cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gm extends cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xm(i,e,t){let n=new Na;const s=new be,r=new be,a=new ot,o=new mm({depthPacking:bu}),c=new gm,l={},u=t.maxTextureSize,h={[on]:Et,[Et]:on,[Gt]:Gt},d=new Jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:_m,fragmentShader:vm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let f=this.type;this.render=function(M,b,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const C=i.getRenderTarget(),x=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Nn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=f!==xn&&this.type===xn,P=f===xn&&this.type!==xn;for(let O=0,z=M.length;O<z;O++){const q=M[O],k=q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const V=k.getFrameExtents();if(s.multiply(V),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/V.x),s.x=r.x*V.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/V.y),s.y=r.y*V.y,k.mapSize.y=r.y)),k.map===null||F===!0||P===!0){const J=this.type!==xn?{minFilter:Ye,magFilter:Ye}:{};k.map!==null&&k.map.dispose(),k.map=new zn(s.x,s.y,J),k.map.texture.name=q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Q=k.getViewportCount();for(let J=0;J<Q;J++){const _e=k.getViewport(J);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),N.viewport(a),k.updateMatrices(q,J),n=k.getFrustum(),S(b,w,k.camera,q,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&y(k,w),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,x,E)};function y(M,b){const w=e.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new zn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(b,null,w,d,_,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(b,null,w,p,_,null)}function v(M,b,w,C){let x=null;const E=w.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(E!==void 0)x=E;else if(x=w.isPointLight===!0?c:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=x.uuid,F=b.uuid;let P=l[N];P===void 0&&(P={},l[N]=P);let O=P[F];O===void 0&&(O=x.clone(),P[F]=O),x=O}if(x.visible=b.visible,x.wireframe=b.wireframe,C===xn?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:h[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=i.properties.get(x);N.light=w}return x}function S(M,b,w,C,x){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&x===xn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,M.matrixWorld);const F=e.update(M),P=M.material;if(Array.isArray(P)){const O=F.groups;for(let z=0,q=O.length;z<q;z++){const k=O[z],V=P[k.materialIndex];if(V&&V.visible){const Q=v(M,V,C,x);i.renderBufferDirect(w,null,F,Q,M,k)}}}else if(P.visible){const O=v(M,P,C,x);i.renderBufferDirect(w,null,F,O,M,null)}}const N=M.children;for(let F=0,P=N.length;F<P;F++)S(N[F],b,w,C,x)}}function ym(i,e,t){const n=t.isWebGL2;function s(){let I=!1;const j=new ot;let te=null;const he=new ot(0,0,0,0);return{setMask:function(me){te!==me&&!I&&(i.colorMask(me,me,me,me),te=me)},setLocked:function(me){I=me},setClear:function(me,ke,Ve,dt,Rn){Rn===!0&&(me*=dt,ke*=dt,Ve*=dt),j.set(me,ke,Ve,dt),he.equals(j)===!1&&(i.clearColor(me,ke,Ve,dt),he.copy(j))},reset:function(){I=!1,te=null,he.set(-1,0,0,0)}}}function r(){let I=!1,j=null,te=null,he=null;return{setTest:function(me){me?U(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(me){j!==me&&!I&&(i.depthMask(me),j=me)},setFunc:function(me){if(te!==me){switch(me){case eu:i.depthFunc(i.NEVER);break;case tu:i.depthFunc(i.ALWAYS);break;case nu:i.depthFunc(i.LESS);break;case sa:i.depthFunc(i.LEQUAL);break;case iu:i.depthFunc(i.EQUAL);break;case su:i.depthFunc(i.GEQUAL);break;case ru:i.depthFunc(i.GREATER);break;case au:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}te=me}},setLocked:function(me){I=me},setClear:function(me){he!==me&&(i.clearDepth(me),he=me)},reset:function(){I=!1,j=null,te=null,he=null}}}function a(){let I=!1,j=null,te=null,he=null,me=null,ke=null,Ve=null,dt=null,Rn=null;return{setTest:function(Je){I||(Je?U(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(Je){j!==Je&&!I&&(i.stencilMask(Je),j=Je)},setFunc:function(Je,Ft,Qt){(te!==Je||he!==Ft||me!==Qt)&&(i.stencilFunc(Je,Ft,Qt),te=Je,he=Ft,me=Qt)},setOp:function(Je,Ft,Qt){(ke!==Je||Ve!==Ft||dt!==Qt)&&(i.stencilOp(Je,Ft,Qt),ke=Je,Ve=Ft,dt=Qt)},setLocked:function(Je){I=Je},setClear:function(Je){Rn!==Je&&(i.clearStencil(Je),Rn=Je)},reset:function(){I=!1,j=null,te=null,he=null,me=null,ke=null,Ve=null,dt=null,Rn=null}}}const o=new s,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,M=null,b=null,w=null,C=null,x=!1,E=null,N=null,F=null,P=null,O=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,k=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=k>=1):V.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=k>=2);let Q=null,J={};const _e=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),W=new ot().fromArray(_e),Z=new ot().fromArray(ie);function se(I,j,te,he){const me=new Uint8Array(4),ke=i.createTexture();i.bindTexture(I,ke),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<te;Ve++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(j,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(j+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return ke}const oe={};oe[i.TEXTURE_2D]=se(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(oe[i.TEXTURE_2D_ARRAY]=se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=se(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),U(i.DEPTH_TEST),c.setFunc(sa),je(!1),Qe(Xa),U(i.CULL_FACE),Re(Nn);function U(I){d[I]!==!0&&(i.enable(I),d[I]=!0)}function Me(I){d[I]!==!1&&(i.disable(I),d[I]=!1)}function Se(I,j){return p[I]!==j?(i.bindFramebuffer(I,j),p[I]=j,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=j),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=j)),!0):!1}function re(I,j){let te=_,he=!1;if(I)if(te=g.get(j),te===void 0&&(te=[],g.set(j,te)),I.isWebGLMultipleRenderTargets){const me=I.texture;if(te.length!==me.length||te[0]!==i.COLOR_ATTACHMENT0){for(let ke=0,Ve=me.length;ke<Ve;ke++)te[ke]=i.COLOR_ATTACHMENT0+ke;te.length=me.length,he=!0}}else te[0]!==i.COLOR_ATTACHMENT0&&(te[0]=i.COLOR_ATTACHMENT0,he=!0);else te[0]!==i.BACK&&(te[0]=i.BACK,he=!0);he&&(t.isWebGL2?i.drawBuffers(te):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(te))}function xe(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const ze={[bi]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[Wc]:i.FUNC_REVERSE_SUBTRACT};if(n)ze[$a]=i.MIN,ze[Ka]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ze[$a]=I.MIN_EXT,ze[Ka]=I.MAX_EXT)}const ge={[Xc]:i.ZERO,[qc]:i.ONE,[jc]:i.SRC_COLOR,[Wl]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[Zc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[Xl]:i.ONE_MINUS_SRC_ALPHA,[Jc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA};function Re(I,j,te,he,me,ke,Ve,dt){if(I===Nn){f===!0&&(Me(i.BLEND),f=!1);return}if(f===!1&&(U(i.BLEND),f=!0),I!==kc){if(I!==y||dt!==x){if((v!==bi||b!==bi)&&(i.blendEquation(i.FUNC_ADD),v=bi,b=bi),dt)switch(I){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ja:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,M=null,w=null,C=null,y=I,x=dt}return}me=me||j,ke=ke||te,Ve=Ve||he,(j!==v||me!==b)&&(i.blendEquationSeparate(ze[j],ze[me]),v=j,b=me),(te!==S||he!==M||ke!==w||Ve!==C)&&(i.blendFuncSeparate(ge[te],ge[he],ge[ke],ge[Ve]),S=te,M=he,w=ke,C=Ve),y=I,x=!1}function $e(I,j){I.side===Gt?Me(i.CULL_FACE):U(i.CULL_FACE);let te=I.side===Et;j&&(te=!te),je(te),I.blending===Ri&&I.transparent===!1?Re(Nn):Re(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const he=I.stencilWrite;l.setTest(he),he&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Be(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?U(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(I){E!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),E=I)}function Qe(I){I!==zc?(U(i.CULL_FACE),I!==N&&(I===Xa?i.cullFace(i.BACK):I===Hc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),N=I}function Ke(I){I!==F&&(q&&i.lineWidth(I),F=I)}function Be(I,j,te){I?(U(i.POLYGON_OFFSET_FILL),(P!==j||O!==te)&&(i.polygonOffset(j,te),P=j,O=te)):Me(i.POLYGON_OFFSET_FILL)}function We(I){I?U(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function ht(I){I===void 0&&(I=i.TEXTURE0+z-1),Q!==I&&(i.activeTexture(I),Q=I)}function R(I,j,te){te===void 0&&(Q===null?te=i.TEXTURE0+z-1:te=Q);let he=J[te];he===void 0&&(he={type:void 0,texture:void 0},J[te]=he),(he.type!==I||he.texture!==j)&&(Q!==te&&(i.activeTexture(te),Q=te),i.bindTexture(I,j||oe[I]),he.type=I,he.texture=j)}function A(){const I=J[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function D(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(I){W.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),W.copy(I))}function fe(I){Z.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Z.copy(I))}function Ee(I,j){let te=h.get(j);te===void 0&&(te=new WeakMap,h.set(j,te));let he=te.get(I);he===void 0&&(he=i.getUniformBlockIndex(j,I.name),te.set(I,he))}function Pe(I,j){const he=h.get(j).get(I);u.get(j)!==he&&(i.uniformBlockBinding(j,he,I.__bindingPointIndex),u.set(j,he))}function Ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Q=null,J={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,M=null,b=null,w=null,C=null,x=!1,E=null,N=null,F=null,P=null,O=null,W.set(0,0,i.canvas.width,i.canvas.height),Z.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:U,disable:Me,bindFramebuffer:Se,drawBuffers:re,useProgram:xe,setBlending:Re,setMaterial:$e,setFlipSided:je,setCullFace:Qe,setLineWidth:Ke,setPolygonOffset:Be,setScissorTest:We,activeTexture:ht,bindTexture:R,unbindTexture:A,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:de,texImage3D:pe,updateUBOMapping:Ee,uniformBlockBinding:Pe,texStorage2D:G,texStorage3D:ce,texSubImage2D:ne,texSubImage3D:le,compressedTexSubImage2D:D,compressedTexSubImage3D:K,scissor:ue,viewport:fe,reset:Ze}}function Mm(i,e,t,n,s,r,a){const o=s.isWebGL2,c=s.maxTextures,l=s.maxCubemapSize,u=s.maxTextureSize,h=s.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,A){return f?new OffscreenCanvas(R,A):os("canvas")}function v(R,A,X,ee){let ne=1;if((R.width>ee||R.height>ee)&&(ne=ee/Math.max(R.width,R.height)),ne<1||A===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const le=A?wu:Math.floor,D=le(ne*R.width),K=le(ne*R.height);_===void 0&&(_=y(D,K));const G=X?y(D,K):_;return G.width=D,G.height=K,G.getContext("2d").drawImage(R,0,0,D,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+D+"x"+K+")."),G}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function S(R){return Eo(R.width)&&Eo(R.height)}function M(R){return o?!1:R.wrapS!==kt||R.wrapT!==kt||R.minFilter!==Ye&&R.minFilter!==ut}function b(R,A){return R.generateMipmaps&&A&&R.minFilter!==Ye&&R.minFilter!==ut}function w(R){i.generateMipmap(R)}function C(R,A,X,ee,ne=!1){if(o===!1)return A;if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=A;return A===i.RED&&(X===i.FLOAT&&(le=i.R32F),X===i.HALF_FLOAT&&(le=i.R16F),X===i.UNSIGNED_BYTE&&(le=i.R8)),A===i.RG&&(X===i.FLOAT&&(le=i.RG32F),X===i.HALF_FLOAT&&(le=i.RG16F),X===i.UNSIGNED_BYTE&&(le=i.RG8)),A===i.RGBA&&(X===i.FLOAT&&(le=i.RGBA32F),X===i.HALF_FLOAT&&(le=i.RGBA16F),X===i.UNSIGNED_BYTE&&(le=ee===Te&&ne===!1?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)),(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(R,A,X){return b(R,X)===!0||R.isFramebufferTexture&&R.minFilter!==Ye&&R.minFilter!==ut?Math.log2(Math.max(A.width,A.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?A.mipmaps.length:1}function E(R){return R===Ye||R===Za||R===mr?i.NEAREST:i.LINEAR}function N(R){const A=R.target;A.removeEventListener("dispose",N),P(A),A.isVideoTexture&&g.delete(A)}function F(R){const A=R.target;A.removeEventListener("dispose",F),z(A)}function P(R){const A=n.get(R);if(A.__webglInit===void 0)return;const X=R.source,ee=m.get(X);if(ee){const ne=ee[A.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&O(R),Object.keys(ee).length===0&&m.delete(X)}n.remove(R)}function O(R){const A=n.get(R);i.deleteTexture(A.__webglTexture);const X=R.source,ee=m.get(X);delete ee[A.__cacheKey],a.memory.textures--}function z(R){const A=R.texture,X=n.get(R),ee=n.get(A);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)i.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else{if(i.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ne=0;ne<X.__webglColorRenderbuffer.length;ne++)X.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[ne]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ne=0,le=A.length;ne<le;ne++){const D=n.get(A[ne]);D.__webglTexture&&(i.deleteTexture(D.__webglTexture),a.memory.textures--),n.remove(A[ne])}n.remove(A),n.remove(R)}let q=0;function k(){q=0}function V(){const R=q;return R>=c&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+c),q+=1,R}function Q(R){const A=[];return A.push(R.wrapS),A.push(R.wrapT),A.push(R.wrapR||0),A.push(R.magFilter),A.push(R.minFilter),A.push(R.anisotropy),A.push(R.internalFormat),A.push(R.format),A.push(R.type),A.push(R.generateMipmaps),A.push(R.premultiplyAlpha),A.push(R.flipY),A.push(R.unpackAlignment),A.push(R.colorSpace),A.join()}function J(R,A){const X=n.get(R);if(R.isVideoTexture&&We(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(X,R,A);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function _e(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Me(X,R,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function ie(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Me(X,R,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function W(R,A){const X=n.get(R);if(R.version>0&&X.__version!==R.version){Se(X,R,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}const Z={[oa]:i.REPEAT,[kt]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},se={[Ye]:i.NEAREST,[Za]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[ut]:i.LINEAR,[pu]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR};function oe(R,A,X){if(X?(i.texParameteri(R,i.TEXTURE_WRAP_S,Z[A.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Z[A.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Z[A.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,se[A.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,se[A.minFilter])):(i.texParameteri(R,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(R,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==kt||A.wrapT!==kt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(R,i.TEXTURE_MAG_FILTER,E(A.magFilter)),i.texParameteri(R,i.TEXTURE_MIN_FILTER,E(A.minFilter)),A.minFilter!==Ye&&A.minFilter!==ut&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===Ye||A.minFilter!==mr&&A.minFilter!==rs||A.type===Tt&&e.has("OES_texture_float_linear")===!1||o===!1&&A.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(R,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function U(R,A){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,A.addEventListener("dispose",N));const ee=A.source;let ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));const le=Q(A);if(le!==R.__cacheKey){ne[le]===void 0&&(ne[le]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[le].usedTimes++;const D=ne[R.__cacheKey];D!==void 0&&(ne[R.__cacheKey].usedTimes--,D.usedTimes===0&&O(A)),R.__cacheKey=le,R.__webglTexture=ne[le].texture}return X}function Me(R,A,X){let ee=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ee=i.TEXTURE_3D);const ne=U(R,A),le=A.source;t.bindTexture(ee,R.__webglTexture,i.TEXTURE0+X);const D=n.get(le);if(le.version!==D.__version||ne===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const K=M(A)&&S(A.image)===!1;let G=v(A.image,K,!1,u);G=ht(A,G);const ce=S(G)||o,de=r.convert(A.format,A.colorSpace);let pe=r.convert(A.type),ue=C(A.internalFormat,de,pe,A.colorSpace);oe(ee,A,ce);let fe;const Ee=A.mipmaps,Pe=o&&A.isVideoTexture!==!0,Ze=D.__version===void 0||ne===!0,I=x(A,G,ce);if(A.isDepthTexture)ue=i.DEPTH_COMPONENT,o?A.type===Tt?ue=i.DEPTH_COMPONENT32F:A.type===Vt?ue=i.DEPTH_COMPONENT24:A.type===Ci?ue=i.DEPTH24_STENCIL8:ue=i.DEPTH_COMPONENT16:A.type===Tt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Zn&&ue===i.DEPTH_COMPONENT&&A.type!==La&&A.type!==Vt&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Vt,pe=r.convert(A.type)),A.format===Ii&&ue===i.DEPTH_COMPONENT&&(ue=i.DEPTH_STENCIL,A.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ci,pe=r.convert(A.type))),Ze&&(Pe?t.texStorage2D(i.TEXTURE_2D,1,ue,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,ue,G.width,G.height,0,de,pe,null));else if(A.isDataTexture)if(Ee.length>0&&ce){Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,I,ue,Ee[0].width,Ee[0].height);for(let j=0,te=Ee.length;j<te;j++)fe=Ee[j],Pe?t.texSubImage2D(i.TEXTURE_2D,j,0,0,fe.width,fe.height,de,pe,fe.data):t.texImage2D(i.TEXTURE_2D,j,ue,fe.width,fe.height,0,de,pe,fe.data);A.generateMipmaps=!1}else Pe?(Ze&&t.texStorage2D(i.TEXTURE_2D,I,ue,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,de,pe,G.data)):t.texImage2D(i.TEXTURE_2D,0,ue,G.width,G.height,0,de,pe,G.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Pe&&Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,ue,Ee[0].width,Ee[0].height,G.depth);for(let j=0,te=Ee.length;j<te;j++)fe=Ee[j],A.format!==bt?de!==null?Pe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,G.depth,de,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ue,fe.width,fe.height,G.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,G.depth,de,pe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ue,fe.width,fe.height,G.depth,0,de,pe,fe.data)}else{Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,I,ue,Ee[0].width,Ee[0].height);for(let j=0,te=Ee.length;j<te;j++)fe=Ee[j],A.format!==bt?de!==null?Pe?t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ue,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(i.TEXTURE_2D,j,0,0,fe.width,fe.height,de,pe,fe.data):t.texImage2D(i.TEXTURE_2D,j,ue,fe.width,fe.height,0,de,pe,fe.data)}else if(A.isDataArrayTexture)Pe?(Ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,I,ue,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,de,pe,G.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ue,G.width,G.height,G.depth,0,de,pe,G.data);else if(A.isData3DTexture)Pe?(Ze&&t.texStorage3D(i.TEXTURE_3D,I,ue,G.width,G.height,G.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,de,pe,G.data)):t.texImage3D(i.TEXTURE_3D,0,ue,G.width,G.height,G.depth,0,de,pe,G.data);else if(A.isFramebufferTexture){if(Ze)if(Pe)t.texStorage2D(i.TEXTURE_2D,I,ue,G.width,G.height);else{let j=G.width,te=G.height;for(let he=0;he<I;he++)t.texImage2D(i.TEXTURE_2D,he,ue,j,te,0,de,pe,null),j>>=1,te>>=1}}else if(Ee.length>0&&ce){Pe&&Ze&&t.texStorage2D(i.TEXTURE_2D,I,ue,Ee[0].width,Ee[0].height);for(let j=0,te=Ee.length;j<te;j++)fe=Ee[j],Pe?t.texSubImage2D(i.TEXTURE_2D,j,0,0,de,pe,fe):t.texImage2D(i.TEXTURE_2D,j,ue,de,pe,fe);A.generateMipmaps=!1}else Pe?(Ze&&t.texStorage2D(i.TEXTURE_2D,I,ue,G.width,G.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,pe,G)):t.texImage2D(i.TEXTURE_2D,0,ue,de,pe,G);b(A,ce)&&w(ee),D.__version=le.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function Se(R,A,X){if(A.image.length!==6)return;const ee=U(R,A),ne=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+X);const le=n.get(ne);if(ne.version!==le.__version||ee===!0){t.activeTexture(i.TEXTURE0+X),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const D=A.isCompressedTexture||A.image[0].isCompressedTexture,K=A.image[0]&&A.image[0].isDataTexture,G=[];for(let j=0;j<6;j++)!D&&!K?G[j]=v(A.image[j],!1,!0,l):G[j]=K?A.image[j].image:A.image[j],G[j]=ht(A,G[j]);const ce=G[0],de=S(ce)||o,pe=r.convert(A.format,A.colorSpace),ue=r.convert(A.type),fe=C(A.internalFormat,pe,ue,A.colorSpace),Ee=o&&A.isVideoTexture!==!0,Pe=le.__version===void 0||ee===!0;let Ze=x(A,ce,de);oe(i.TEXTURE_CUBE_MAP,A,de);let I;if(D){Ee&&Pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,fe,ce.width,ce.height);for(let j=0;j<6;j++){I=G[j].mipmaps;for(let te=0;te<I.length;te++){const he=I[te];A.format!==bt?pe!==null?Ee?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,fe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,0,0,he.width,he.height,pe,ue,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te,fe,he.width,he.height,0,pe,ue,he.data)}}}else{I=A.mipmaps,Ee&&Pe&&(I.length>0&&Ze++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ze,fe,G[0].width,G[0].height));for(let j=0;j<6;j++)if(K){Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,G[j].width,G[j].height,pe,ue,G[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,fe,G[j].width,G[j].height,0,pe,ue,G[j].data);for(let te=0;te<I.length;te++){const me=I[te].image[j].image;Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,me.width,me.height,pe,ue,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,fe,me.width,me.height,0,pe,ue,me.data)}}else{Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe,ue,G[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,fe,pe,ue,G[j]);for(let te=0;te<I.length;te++){const he=I[te];Ee?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,0,0,pe,ue,he.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,te+1,fe,pe,ue,he.image[j])}}}b(A,de)&&w(i.TEXTURE_CUBE_MAP),le.__version=ne.version,A.onUpdate&&A.onUpdate(A)}R.__version=A.version}function re(R,A,X,ee,ne){const le=r.convert(X.format,X.colorSpace),D=r.convert(X.type),K=C(X.internalFormat,le,D,X.colorSpace);n.get(A).__hasExternalTextures||(ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,K,A.width,A.height,A.depth,0,le,D,null):t.texImage2D(ne,0,K,A.width,A.height,0,le,D,null)),t.bindFramebuffer(i.FRAMEBUFFER,R),Be(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0,Ke(A)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,ne,n.get(X).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(R,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,R),A.depthBuffer&&!A.stencilBuffer){let ee=i.DEPTH_COMPONENT16;if(X||Be(A)){const ne=A.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Tt?ee=i.DEPTH_COMPONENT32F:ne.type===Vt&&(ee=i.DEPTH_COMPONENT24));const le=Ke(A);Be(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,ee,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ee,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,R)}else if(A.depthBuffer&&A.stencilBuffer){const ee=Ke(A);X&&Be(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,A.width,A.height):Be(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,R)}else{const ee=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0;ne<ee.length;ne++){const le=ee[ne],D=r.convert(le.format,le.colorSpace),K=r.convert(le.type),G=C(le.internalFormat,D,K,le.colorSpace),ce=Ke(A);X&&Be(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,G,A.width,A.height):Be(A)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,G,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,G,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(R,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),J(A.depthTexture,0);const ee=n.get(A.depthTexture).__webglTexture,ne=Ke(A);if(A.depthTexture.format===Zn)Be(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(A.depthTexture.format===Ii)Be(A)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ge(R){const A=n.get(R),X=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");ze(A.__webglFramebuffer,R)}else if(X){A.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[ee]),A.__webglDepthbuffer[ee]=i.createRenderbuffer(),xe(A.__webglDepthbuffer[ee],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),xe(A.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(R,A,X){const ee=n.get(R);A!==void 0&&re(ee.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),X!==void 0&&ge(R)}function $e(R){const A=R.texture,X=n.get(R),ee=n.get(A);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=A.version,a.memory.textures++);const ne=R.isWebGLCubeRenderTarget===!0,le=R.isWebGLMultipleRenderTargets===!0,D=S(R)||o;if(ne){X.__webglFramebuffer=[];for(let K=0;K<6;K++)X.__webglFramebuffer[K]=i.createFramebuffer()}else{if(X.__webglFramebuffer=i.createFramebuffer(),le)if(s.drawBuffers){const K=R.texture;for(let G=0,ce=K.length;G<ce;G++){const de=n.get(K[G]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&Be(R)===!1){const K=le?A:[A];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let G=0;G<K.length;G++){const ce=K[G];X.__webglColorRenderbuffer[G]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[G]);const de=r.convert(ce.format,ce.colorSpace),pe=r.convert(ce.type),ue=C(ce.internalFormat,de,pe,ce.colorSpace,R.isXRRenderTarget===!0),fe=Ke(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,ue,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+G,i.RENDERBUFFER,X.__webglColorRenderbuffer[G])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(X.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),oe(i.TEXTURE_CUBE_MAP,A,D);for(let K=0;K<6;K++)re(X.__webglFramebuffer[K],R,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K);b(A,D)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const K=R.texture;for(let G=0,ce=K.length;G<ce;G++){const de=K[G],pe=n.get(de);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),oe(i.TEXTURE_2D,de,D),re(X.__webglFramebuffer,R,de,i.COLOR_ATTACHMENT0+G,i.TEXTURE_2D),b(de,D)&&w(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(K,ee.__webglTexture),oe(K,A,D),re(X.__webglFramebuffer,R,A,i.COLOR_ATTACHMENT0,K),b(A,D)&&w(K),t.unbindTexture()}R.depthBuffer&&ge(R)}function je(R){const A=S(R)||o,X=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ee=0,ne=X.length;ee<ne;ee++){const le=X[ee];if(b(le,A)){const D=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,K=n.get(le).__webglTexture;t.bindTexture(D,K),w(D),t.unbindTexture()}}}function Qe(R){if(o&&R.samples>0&&Be(R)===!1){const A=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],X=R.width,ee=R.height;let ne=i.COLOR_BUFFER_BIT;const le=[],D=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(R),G=R.isWebGLMultipleRenderTargets===!0;if(G)for(let ce=0;ce<A.length;ce++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let ce=0;ce<A.length;ce++){le.push(i.COLOR_ATTACHMENT0+ce),R.depthBuffer&&le.push(D);const de=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(de===!1&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),G&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[ce]),de===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[D]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])),G){const pe=n.get(A[ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,X,ee,0,0,X,ee,ne,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),G)for(let ce=0;ce<A.length;ce++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,K.__webglColorRenderbuffer[ce]);const de=n.get(A[ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function Ke(R){return Math.min(h,R.samples)}function Be(R){const A=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(R){const A=a.render.frame;g.get(R)!==A&&(g.set(R,A),R.update())}function ht(R,A){const X=R.colorSpace,ee=R.format,ne=R.type;return R.isCompressedTexture===!0||R.format===ua||X!==ln&&X!==Qn&&(X===Te?o===!1?e.has("EXT_sRGB")===!0&&ee===bt?(R.format=ua,R.minFilter=ut,R.generateMipmaps=!1):A=Ql.sRGBToLinear(A):(ee!==bt||ne!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=_e,this.setTexture3D=ie,this.setTextureCube=W,this.rebindTextures=Re,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Be}function Sm(i,e,t){const n=t.isWebGL2;function s(r,a=Qn){let o;if(r===An)return i.UNSIGNED_BYTE;if(r===mu)return i.UNSIGNED_SHORT_4_4_4_4;if(r===gu)return i.UNSIGNED_SHORT_5_5_5_1;if(r===ca)return i.BYTE;if(r===jl)return i.SHORT;if(r===La)return i.UNSIGNED_SHORT;if(r===Zs)return i.INT;if(r===Vt)return i.UNSIGNED_INT;if(r===Tt)return i.FLOAT;if(r===as)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===_u)return i.ALPHA;if(r===bt)return i.RGBA;if(r===vu)return i.LUMINANCE;if(r===xu)return i.LUMINANCE_ALPHA;if(r===Zn)return i.DEPTH_COMPONENT;if(r===Ii)return i.DEPTH_STENCIL;if(r===ua)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===or)return i.RED;if(r===Yl)return i.RED_INTEGER;if(r===$l)return i.RG;if(r===Pa)return i.RG_INTEGER;if(r===tr)return i.RGBA_INTEGER;if(r===gr||r===_r||r===vr||r===xr)if(a===Te)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===gr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===gr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===vr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ja||r===Qa||r===eo||r===to)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===eo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===to)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yu)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===no||r===io)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===no)return a===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===io)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===so||r===ro||r===ao||r===oo||r===lo||r===co||r===uo||r===ho||r===fo||r===po||r===mo||r===go||r===_o||r===vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===so)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ro)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ao)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===co)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ho)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===po)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===go)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_o)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vo)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===yr)return a===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===Mu||r===xo||r===yo||r===Mo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===yr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ci?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class bm extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ki extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Em={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(l,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ki;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Am extends vt{constructor(e,t,n,s,r,a,o,c,l,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=Vt),n===void 0&&u===Ii&&(n=Ci),super(null,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ye,this.minFilter=c!==void 0?c:Ye,this.flipY=!1,this.generateMipmaps=!1}}class Tm extends ni{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],S=new Set,M=new Map,b=new Ht;b.layers.enable(1),b.viewport=new ot;const w=new Ht;w.layers.enable(2),w.viewport=new ot;const C=[b,w],x=new bm;x.layers.enable(1),x.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=y[W];return Z===void 0&&(Z=new Wr,y[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=y[W];return Z===void 0&&(Z=new Wr,y[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=y[W];return Z===void 0&&(Z=new Wr,y[W]=Z),Z.getHandSpace()};function F(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const se=y[Z];se!==void 0&&(se.update(W.inputSource,W.frame,l||a),se.dispatchEvent({type:W.type,data:W.inputSource}))}function P(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",O);for(let W=0;W<y.length;W++){const Z=v[W];Z!==null&&(v[W]=null,y[W].disconnect(Z))}E=null,N=null,e.setRenderTarget(m),p=null,d=null,h=null,s=null,f=null,ie.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",P),s.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Z),s.updateRenderState({baseLayer:p}),f=new zn(p.framebufferWidth,p.framebufferHeight,{format:bt,type:An,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Z=null,se=null,oe=null;_.depth&&(oe=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=_.stencil?Ii:Zn,se=_.stencil?Ci:Vt);const U={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(U),s.updateRenderState({layers:[d]}),f=new zn(d.textureWidth,d.textureHeight,{format:bt,type:An,depthTexture:new Am(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Me=e.properties.get(f);Me.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function O(W){for(let Z=0;Z<W.removed.length;Z++){const se=W.removed[Z],oe=v.indexOf(se);oe>=0&&(v[oe]=null,y[oe].disconnect(se))}for(let Z=0;Z<W.added.length;Z++){const se=W.added[Z];let oe=v.indexOf(se);if(oe===-1){for(let Me=0;Me<y.length;Me++)if(Me>=v.length){v.push(se),oe=Me;break}else if(v[Me]===null){v[Me]=se,oe=Me;break}if(oe===-1)break}const U=y[oe];U&&U.connect(se)}}const z=new L,q=new L;function k(W,Z,se){z.setFromMatrixPosition(Z.matrixWorld),q.setFromMatrixPosition(se.matrixWorld);const oe=z.distanceTo(q),U=Z.projectionMatrix.elements,Me=se.projectionMatrix.elements,Se=U[14]/(U[10]-1),re=U[14]/(U[10]+1),xe=(U[9]+1)/U[5],ze=(U[9]-1)/U[5],ge=(U[8]-1)/U[0],Re=(Me[8]+1)/Me[0],$e=Se*ge,je=Se*Re,Qe=oe/(-ge+Re),Ke=Qe*-ge;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ke),W.translateZ(Qe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Be=Se+Qe,We=re+Qe,ht=$e-Ke,R=je+(oe-Ke),A=xe*re/We*Be,X=ze*re/We*Be;W.projectionMatrix.makePerspective(ht,R,A,X,Be,We),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function V(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;x.near=w.near=b.near=W.near,x.far=w.far=b.far=W.far,(E!==x.near||N!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,N=x.far);const Z=W.parent,se=x.cameras;V(x,Z);for(let oe=0;oe<se.length;oe++)V(se[oe],Z);se.length===2?k(x,b,w):x.projectionMatrix.copy(b.projectionMatrix),Q(W,x,Z)};function Q(W,Z,se){se===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(se.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const oe=W.children;for(let U=0,Me=oe.length;U<Me;U++)oe[U].updateMatrixWorld(!0);W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ha*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.getPlanes=function(){return S};let J=null;function _e(W,Z){if(u=Z.getViewerPose(l||a),g=Z,u!==null){const se=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let oe=!1;se.length!==x.cameras.length&&(x.cameras.length=0,oe=!0);for(let U=0;U<se.length;U++){const Me=se[U];let Se=null;if(p!==null)Se=p.getViewport(Me);else{const xe=h.getViewSubImage(d,Me);Se=xe.viewport,U===0&&(e.setRenderTargetTextures(f,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(f))}let re=C[U];re===void 0&&(re=new Ht,re.layers.enable(U),re.viewport=new ot,C[U]=re),re.matrix.fromArray(Me.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Me.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Se.x,Se.y,Se.width,Se.height),U===0&&(x.matrix.copy(re.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),oe===!0&&x.cameras.push(re)}}for(let se=0;se<y.length;se++){const oe=v[se],U=y[se];oe!==null&&U!==void 0&&U.update(oe,Z,l||a)}if(J&&J(W,Z),Z.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let se=null;for(const oe of S)Z.detectedPlanes.has(oe)||(se===null&&(se=[]),se.push(oe));if(se!==null)for(const oe of se)S.delete(oe),M.delete(oe),n.dispatchEvent({type:"planeremoved",data:oe});for(const oe of Z.detectedPlanes)if(!S.has(oe))S.add(oe),M.set(oe,Z.lastChangedTime),n.dispatchEvent({type:"planeadded",data:oe});else{const U=M.get(oe);oe.lastChangedTime>U&&(M.set(oe,oe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:oe}))}}g=null}const ie=new cc;ie.setAnimationLoop(_e),this.setAnimationLoop=function(W){J=W},this.dispose=function(){}}}function wm(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ac(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,v):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Et&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Et&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Et&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Rm(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function l(y,v){let S=s[y.id];S===void 0&&(g(y),S=u(y),s[y.id]=S,y.addEventListener("dispose",m));const M=v.program;n.updateUBOMapping(y,M);const b=e.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function u(y){const v=h();y.__bindingPointIndex=v;const S=i.createBuffer(),M=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=s[y.id],S=y.uniforms,M=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,w=S.length;b<w;b++){const C=S[b];if(p(C,b,M)===!0){const x=C.__offset,E=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let F=0;F<E.length;F++){const P=E[F],O=_(P);typeof P=="number"?(C.__data[0]=P,i.bufferSubData(i.UNIFORM_BUFFER,x+N,C.__data)):P.isMatrix3?(C.__data[0]=P.elements[0],C.__data[1]=P.elements[1],C.__data[2]=P.elements[2],C.__data[3]=P.elements[0],C.__data[4]=P.elements[3],C.__data[5]=P.elements[4],C.__data[6]=P.elements[5],C.__data[7]=P.elements[0],C.__data[8]=P.elements[6],C.__data[9]=P.elements[7],C.__data[10]=P.elements[8],C.__data[11]=P.elements[0]):(P.toArray(C.__data,N),N+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,C.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,v,S){const M=y.value;if(S[v]===void 0){if(typeof M=="number")S[v]=M;else{const b=Array.isArray(M)?M:[M],w=[];for(let C=0;C<b.length;C++)w.push(b[C].clone());S[v]=w}return!0}else if(typeof M=="number"){if(S[v]!==M)return S[v]=M,!0}else{const b=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(M)?M:[M];for(let C=0;C<b.length;C++){const x=b[C];if(x.equals(w[C])===!1)return x.copy(w[C]),!0}}return!1}function g(y){const v=y.uniforms;let S=0;const M=16;let b=0;for(let w=0,C=v.length;w<C;w++){const x=v[w],E={boundary:0,storage:0},N=Array.isArray(x.value)?x.value:[x.value];for(let F=0,P=N.length;F<P;F++){const O=N[F],z=_(O);E.boundary+=z.boundary,E.storage+=z.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=S,w>0){b=S%M;const F=M-b;b!==0&&F-E.boundary<0&&(S+=M-b,x.__offset=S)}S+=E.storage}return b=S%M,b>0&&(S+=M-b),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}function Cm(){const i=os("canvas");return i.style.display="block",i}class pc{constructor(e={}){const{canvas:t=Cm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let p=null,g=null;const _=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=bn,this.toneMappingExposure=1;const f=this;let y=!1,v=0,S=0,M=null,b=-1,w=null;const C=new ot,x=new ot;let E=null,N=t.width,F=t.height,P=1,O=null,z=null;const q=new ot(0,0,N,F),k=new ot(0,0,N,F);let V=!1;const Q=new Na;let J=!1,_e=!1,ie=null;const W=new we,Z=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function oe(){return M===null?P:1}let U=n;function Me(T,H){for(let Y=0;Y<T.length;Y++){const B=T[Y],$=t.getContext(B,H);if($!==null)return $}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ra}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),U===null){const H=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&H.shift(),U=Me(H,T),U===null)throw Me(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,re,xe,ze,ge,Re,$e,je,Qe,Ke,Be,We,ht,R,A,X,ee,ne,le,D,K,G,ce,de;function pe(){Se=new Hf(U),re=new Uf(U,Se,e),Se.init(re),G=new Sm(U,Se,re),xe=new ym(U,Se,re),ze=new Vf(U),ge=new am,Re=new Mm(U,Se,xe,ge,re,G,ze),$e=new Nf(f),je=new zf(f),Qe=new eh(U,re),ce=new Df(U,Se,Qe,re),Ke=new Gf(U,Qe,ze,ce),Be=new jf(U,Ke,Qe,ze),le=new qf(U,re,Re),X=new Ff(ge),We=new rm(f,$e,je,Se,re,ce,X),ht=new wm(f,ge),R=new lm,A=new pm(Se,re),ne=new Pf(f,$e,je,xe,Be,d,c),ee=new xm(f,Be,re),de=new Rm(U,ze,re,xe),D=new If(U,Se,ze,re),K=new kf(U,Se,ze,re),ze.programs=We.programs,f.capabilities=re,f.extensions=Se,f.properties=ge,f.renderLists=R,f.shadowMap=ee,f.state=xe,f.info=ze}pe();const ue=new Tm(f,U);this.xr=ue,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(T){T!==void 0&&(P=T,this.setSize(N,F,!1))},this.getSize=function(T){return T.set(N,F)},this.setSize=function(T,H,Y=!0){if(ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=T,F=H,t.width=Math.floor(T*P),t.height=Math.floor(H*P),Y===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(N*P,F*P).floor()},this.setDrawingBufferSize=function(T,H,Y){N=T,F=H,P=Y,t.width=Math.floor(T*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,H,Y,B){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,H,Y,B),xe.viewport(C.copy(q).multiplyScalar(P).floor())},this.getScissor=function(T){return T.copy(k)},this.setScissor=function(T,H,Y,B){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,H,Y,B),xe.scissor(x.copy(k).multiplyScalar(P).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){xe.setScissorTest(V=T)},this.setOpaqueSort=function(T){O=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(T=!0,H=!0,Y=!0){let B=0;T&&(B|=U.COLOR_BUFFER_BIT),H&&(B|=U.DEPTH_BUFFER_BIT),Y&&(B|=U.STENCIL_BUFFER_BIT),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),R.dispose(),A.dispose(),ge.dispose(),$e.dispose(),je.dispose(),Be.dispose(),ce.dispose(),de.dispose(),We.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",me),ue.removeEventListener("sessionend",ke),ie&&(ie.dispose(),ie=null),Ve.stop()};function fe(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=ze.autoReset,H=ee.enabled,Y=ee.autoUpdate,B=ee.needsUpdate,$=ee.type;pe(),ze.autoReset=T,ee.enabled=H,ee.autoUpdate=Y,ee.needsUpdate=B,ee.type=$}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ze(T){const H=T.target;H.removeEventListener("dispose",Ze),I(H)}function I(T){j(T),ge.remove(T)}function j(T){const H=ge.get(T).programs;H!==void 0&&(H.forEach(function(Y){We.releaseProgram(Y)}),T.isShaderMaterial&&We.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Y,B,$,ve){H===null&&(H=se);const ye=$.isMesh&&$.matrixWorld.determinant()<0,Ae=Pc(T,H,Y,B,$);xe.setMaterial(B,ye);let Ce=Y.index,Ie=1;B.wireframe===!0&&(Ce=Ke.getWireframeAttribute(Y),Ie=2);const Ue=Y.drawRange,Fe=Y.attributes.position;let Ge=Ue.start*Ie,xt=(Ue.start+Ue.count)*Ie;ve!==null&&(Ge=Math.max(Ge,ve.start*Ie),xt=Math.min(xt,(ve.start+ve.count)*Ie)),Ce!==null?(Ge=Math.max(Ge,0),xt=Math.min(xt,Ce.count)):Fe!=null&&(Ge=Math.max(Ge,0),xt=Math.min(xt,Fe.count));const Xt=xt-Ge;if(Xt<0||Xt===1/0)return;ce.setup($,B,Ae,Y,Ce);let Gn,et=D;if(Ce!==null&&(Gn=Qe.get(Ce),et=K,et.setIndex(Gn)),$.isMesh)B.wireframe===!0?(xe.setLineWidth(B.wireframeLinewidth*oe()),et.setMode(U.LINES)):et.setMode(U.TRIANGLES);else if($.isLine){let Oe=B.linewidth;Oe===void 0&&(Oe=1),xe.setLineWidth(Oe*oe()),$.isLineSegments?et.setMode(U.LINES):$.isLineLoop?et.setMode(U.LINE_LOOP):et.setMode(U.LINE_STRIP)}else $.isPoints?et.setMode(U.POINTS):$.isSprite&&et.setMode(U.TRIANGLES);if($.isInstancedMesh)et.renderInstances(Ge,Xt,$.count);else if(Y.isInstancedBufferGeometry){const Oe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,hr=Math.min(Y.instanceCount,Oe);et.renderInstances(Ge,Xt,hr)}else et.render(Ge,Xt)},this.compile=function(T,H){function Y(B,$,ve){B.transparent===!0&&B.side===Gt&&B.forceSinglePass===!1?(B.side=Et,B.needsUpdate=!0,ps(B,$,ve),B.side=on,B.needsUpdate=!0,ps(B,$,ve),B.side=Gt):ps(B,$,ve)}g=A.get(T),g.init(),m.push(g),T.traverseVisible(function(B){B.isLight&&B.layers.test(H.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(f.useLegacyLights),T.traverse(function(B){const $=B.material;if($)if(Array.isArray($))for(let ve=0;ve<$.length;ve++){const ye=$[ve];Y(ye,T,B)}else Y($,T,B)}),m.pop(),g=null};let te=null;function he(T){te&&te(T)}function me(){Ve.stop()}function ke(){Ve.start()}const Ve=new cc;Ve.setAnimationLoop(he),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(T){te=T,ue.setAnimationLoop(T),T===null?Ve.stop():Ve.start()},ue.addEventListener("sessionstart",me),ue.addEventListener("sessionend",ke),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(H),H=ue.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,H,M),g=A.get(T,m.length),g.init(),m.push(g),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Q.setFromProjectionMatrix(W),_e=this.localClippingEnabled,J=X.init(this.clippingPlanes,_e),p=R.get(T,_.length),p.init(),_.push(p),dt(T,H,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(O,z),J===!0&&X.beginShadows();const Y=g.state.shadowsArray;if(ee.render(Y,T,H),J===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(p,T),g.setupLights(f.useLegacyLights),H.isArrayCamera){const B=H.cameras;for(let $=0,ve=B.length;$<ve;$++){const ye=B[$];Rn(p,T,ye,ye.viewport)}}else Rn(p,T,H);M!==null&&(Re.updateMultisampleRenderTarget(M),Re.updateRenderTargetMipmap(M)),T.isScene===!0&&T.onAfterRender(f,T,H),ce.resetDefaultState(),b=-1,w=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?p=_[_.length-1]:p=null};function dt(T,H,Y,B){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){B&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(W);const ye=Be.update(T),Ae=T.material;Ae.visible&&p.push(T,ye,Ae,Y,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==ze.render.frame&&(T.skeleton.update(),T.skeleton.frame=ze.render.frame);const ye=Be.update(T),Ae=T.material;if(B&&(ye.boundingSphere===null&&ye.computeBoundingSphere(),Z.copy(ye.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(W)),Array.isArray(Ae)){const Ce=ye.groups;for(let Ie=0,Ue=Ce.length;Ie<Ue;Ie++){const Fe=Ce[Ie],Ge=Ae[Fe.materialIndex];Ge&&Ge.visible&&p.push(T,ye,Ge,Y,Z.z,Fe)}}else Ae.visible&&p.push(T,ye,Ae,Y,Z.z,null)}}const ve=T.children;for(let ye=0,Ae=ve.length;ye<Ae;ye++)dt(ve[ye],H,Y,B)}function Rn(T,H,Y,B){const $=T.opaque,ve=T.transmissive,ye=T.transparent;g.setupLightsView(Y),J===!0&&X.setGlobalState(f.clippingPlanes,Y),ve.length>0&&Je($,ve,H,Y),B&&xe.viewport(C.copy(B)),$.length>0&&Ft($,H,Y),ve.length>0&&Ft(ve,H,Y),ye.length>0&&Ft(ye,H,Y),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Je(T,H,Y,B){if(ie===null){const Ae=re.isWebGL2;ie=new zn(1024,1024,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?as:An,minFilter:rs,samples:Ae&&o===!0?4:0})}const $=f.getRenderTarget();f.setRenderTarget(ie),f.clear();const ve=f.toneMapping;f.toneMapping=bn,Ft(T,Y,B),Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie);let ye=!1;for(let Ae=0,Ce=H.length;Ae<Ce;Ae++){const Ie=H[Ae],Ue=Ie.object,Fe=Ie.geometry,Ge=Ie.material,xt=Ie.group;if(Ge.side===Gt&&Ue.layers.test(B.layers)){const Xt=Ge.side;Ge.side=Et,Ge.needsUpdate=!0,Qt(Ue,Y,B,Fe,Ge,xt),Ge.side=Xt,Ge.needsUpdate=!0,ye=!0}}ye===!0&&(Re.updateMultisampleRenderTarget(ie),Re.updateRenderTargetMipmap(ie)),f.setRenderTarget($),f.toneMapping=ve}function Ft(T,H,Y){const B=H.isScene===!0?H.overrideMaterial:null;for(let $=0,ve=T.length;$<ve;$++){const ye=T[$],Ae=ye.object,Ce=ye.geometry,Ie=B===null?ye.material:B,Ue=ye.group;Ae.layers.test(Y.layers)&&Qt(Ae,H,Y,Ce,Ie,Ue)}}function Qt(T,H,Y,B,$,ve){T.onBeforeRender(f,H,Y,B,$,ve),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(f,H,Y,B,T,ve),$.transparent===!0&&$.side===Gt&&$.forceSinglePass===!1?($.side=Et,$.needsUpdate=!0,f.renderBufferDirect(Y,H,B,$,T,ve),$.side=on,$.needsUpdate=!0,f.renderBufferDirect(Y,H,B,$,T,ve),$.side=Gt):f.renderBufferDirect(Y,H,B,$,T,ve),T.onAfterRender(f,H,Y,B,$,ve)}function ps(T,H,Y){H.isScene!==!0&&(H=se);const B=ge.get(T),$=g.state.lights,ve=g.state.shadowsArray,ye=$.state.version,Ae=We.getParameters(T,$.state,ve,H,Y),Ce=We.getProgramCacheKey(Ae);let Ie=B.programs;B.environment=T.isMeshStandardMaterial?H.environment:null,B.fog=H.fog,B.envMap=(T.isMeshStandardMaterial?je:$e).get(T.envMap||B.environment),Ie===void 0&&(T.addEventListener("dispose",Ze),Ie=new Map,B.programs=Ie);let Ue=Ie.get(Ce);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===ye)return ka(T,Ae),Ue}else Ae.uniforms=We.getUniforms(T),T.onBuild(Y,Ae,f),T.onBeforeCompile(Ae,f),Ue=We.acquireProgram(Ae,Ce),Ie.set(Ce,Ue),B.uniforms=Ae.uniforms;const Fe=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Fe.clippingPlanes=X.uniform),ka(T,Ae),B.needsLights=Ic(T),B.lightsStateVersion=ye,B.needsLights&&(Fe.ambientLightColor.value=$.state.ambient,Fe.lightProbe.value=$.state.probe,Fe.directionalLights.value=$.state.directional,Fe.directionalLightShadows.value=$.state.directionalShadow,Fe.spotLights.value=$.state.spot,Fe.spotLightShadows.value=$.state.spotShadow,Fe.rectAreaLights.value=$.state.rectArea,Fe.ltc_1.value=$.state.rectAreaLTC1,Fe.ltc_2.value=$.state.rectAreaLTC2,Fe.pointLights.value=$.state.point,Fe.pointLightShadows.value=$.state.pointShadow,Fe.hemisphereLights.value=$.state.hemi,Fe.directionalShadowMap.value=$.state.directionalShadowMap,Fe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Fe.spotShadowMap.value=$.state.spotShadowMap,Fe.spotLightMatrix.value=$.state.spotLightMatrix,Fe.spotLightMap.value=$.state.spotLightMap,Fe.pointShadowMap.value=$.state.pointShadowMap,Fe.pointShadowMatrix.value=$.state.pointShadowMatrix);const Ge=Ue.getUniforms(),xt=Js.seqWithValue(Ge.seq,Fe);return B.currentProgram=Ue,B.uniformsList=xt,Ue}function ka(T,H){const Y=ge.get(T);Y.outputColorSpace=H.outputColorSpace,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function Pc(T,H,Y,B,$){H.isScene!==!0&&(H=se),Re.resetTextureUnits();const ve=H.fog,ye=B.isMeshStandardMaterial?H.environment:null,Ae=M===null?f.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ln,Ce=(B.isMeshStandardMaterial?je:$e).get(B.envMap||ye),Ie=B.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ue=!!B.normalMap&&!!Y.attributes.tangent,Fe=!!Y.morphAttributes.position,Ge=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color,Xt=B.toneMapped?f.toneMapping:bn,Gn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,et=Gn!==void 0?Gn.length:0,Oe=ge.get(B),hr=g.state.lights;if(J===!0&&(_e===!0||T!==w)){const Ct=T===w&&B.id===b;X.setState(B,T,Ct)}let st=!1;B.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==hr.state.version||Oe.outputColorSpace!==Ae||$.isInstancedMesh&&Oe.instancing===!1||!$.isInstancedMesh&&Oe.instancing===!0||$.isSkinnedMesh&&Oe.skinning===!1||!$.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ce||B.fog===!0&&Oe.fog!==ve||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==X.numPlanes||Oe.numIntersection!==X.numIntersection)||Oe.vertexAlphas!==Ie||Oe.vertexTangents!==Ue||Oe.morphTargets!==Fe||Oe.morphNormals!==Ge||Oe.morphColors!==xt||Oe.toneMapping!==Xt||re.isWebGL2===!0&&Oe.morphTargetsCount!==et)&&(st=!0):(st=!0,Oe.__version=B.version);let kn=Oe.currentProgram;st===!0&&(kn=ps(B,H,$));let Va=!1,Hi=!1,dr=!1;const yt=kn.getUniforms(),Vn=Oe.uniforms;if(xe.useProgram(kn.program)&&(Va=!0,Hi=!0,dr=!0),B.id!==b&&(b=B.id,Hi=!0),Va||w!==T){if(yt.setValue(U,"projectionMatrix",T.projectionMatrix),re.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Hi=!0,dr=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ct=yt.map.cameraPosition;Ct!==void 0&&Ct.setValue(U,Z.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&yt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||$.isSkinnedMesh)&&yt.setValue(U,"viewMatrix",T.matrixWorldInverse)}if($.isSkinnedMesh){yt.setOptional(U,$,"bindMatrix"),yt.setOptional(U,$,"bindMatrixInverse");const Ct=$.skeleton;Ct&&(re.floatVertexTextures?(Ct.boneTexture===null&&Ct.computeBoneTexture(),yt.setValue(U,"boneTexture",Ct.boneTexture,Re),yt.setValue(U,"boneTextureSize",Ct.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const fr=Y.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0&&re.isWebGL2===!0)&&le.update($,Y,kn),(Hi||Oe.receiveShadow!==$.receiveShadow)&&(Oe.receiveShadow=$.receiveShadow,yt.setValue(U,"receiveShadow",$.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Vn.envMap.value=Ce,Vn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Hi&&(yt.setValue(U,"toneMappingExposure",f.toneMappingExposure),Oe.needsLights&&Dc(Vn,dr),ve&&B.fog===!0&&ht.refreshFogUniforms(Vn,ve),ht.refreshMaterialUniforms(Vn,B,P,F,ie),Js.upload(U,Oe.uniformsList,Vn,Re)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Js.upload(U,Oe.uniformsList,Vn,Re),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&yt.setValue(U,"center",$.center),yt.setValue(U,"modelViewMatrix",$.modelViewMatrix),yt.setValue(U,"normalMatrix",$.normalMatrix),yt.setValue(U,"modelMatrix",$.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ct=B.uniformsGroups;for(let pr=0,Uc=Ct.length;pr<Uc;pr++)if(re.isWebGL2){const Wa=Ct[pr];de.update(Wa,kn),de.bind(Wa,kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kn}function Dc(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Ic(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(T,H,Y){ge.get(T.texture).__webglTexture=H,ge.get(T.depthTexture).__webglTexture=Y;const B=ge.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Y===void 0,B.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Y=ge.get(T);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Y=0){M=T,v=H,S=Y;let B=!0,$=null,ve=!1,ye=!1;if(T){const Ce=ge.get(T);Ce.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ce.__webglFramebuffer===void 0?Re.setupRenderTarget(T):Ce.__hasExternalTextures&&Re.rebindTextures(T,ge.get(T.texture).__webglTexture,ge.get(T.depthTexture).__webglTexture);const Ie=T.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ye=!0);const Ue=ge.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?($=Ue[H],ve=!0):re.isWebGL2&&T.samples>0&&Re.useMultisampledRTT(T)===!1?$=ge.get(T).__webglMultisampledFramebuffer:$=Ue,C.copy(T.viewport),x.copy(T.scissor),E=T.scissorTest}else C.copy(q).multiplyScalar(P).floor(),x.copy(k).multiplyScalar(P).floor(),E=V;if(xe.bindFramebuffer(U.FRAMEBUFFER,$)&&re.drawBuffers&&B&&xe.drawBuffers(T,$),xe.viewport(C),xe.scissor(x),xe.setScissorTest(E),ve){const Ce=ge.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ce.__webglTexture,Y)}else if(ye){const Ce=ge.get(T.texture),Ie=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,Y||0,Ie)}b=-1},this.readRenderTargetPixels=function(T,H,Y,B,$,ve,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=ge.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){xe.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Ce=T.texture,Ie=Ce.format,Ue=Ce.type;if(Ie!==bt&&G.convert(Ie)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ue===as&&(Se.has("EXT_color_buffer_half_float")||re.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ue!==An&&G.convert(Ue)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Tt&&(re.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-B&&Y>=0&&Y<=T.height-$&&U.readPixels(H,Y,B,$,G.convert(Ie),G.convert(Ue),ve)}finally{const Ce=M!==null?ge.get(M).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(T,H,Y=0){const B=Math.pow(2,-Y),$=Math.floor(H.image.width*B),ve=Math.floor(H.image.height*B);Re.setTexture2D(H,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,T.x,T.y,$,ve),xe.unbindTexture()},this.copyTextureToTexture=function(T,H,Y,B=0){const $=H.image.width,ve=H.image.height,ye=G.convert(Y.format),Ae=G.convert(Y.type);Re.setTexture2D(Y,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment),H.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,T.x,T.y,$,ve,ye,Ae,H.image.data):H.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,ye,H.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,T.x,T.y,ye,Ae,H.image),B===0&&Y.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Y,B,$=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,ye=T.max.y-T.min.y+1,Ae=T.max.z-T.min.z+1,Ce=G.convert(B.format),Ie=G.convert(B.type);let Ue;if(B.isData3DTexture)Re.setTexture3D(B,0),Ue=U.TEXTURE_3D;else if(B.isDataArrayTexture)Re.setTexture2DArray(B,0),Ue=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),Ge=U.getParameter(U.UNPACK_IMAGE_HEIGHT),xt=U.getParameter(U.UNPACK_SKIP_PIXELS),Xt=U.getParameter(U.UNPACK_SKIP_ROWS),Gn=U.getParameter(U.UNPACK_SKIP_IMAGES),et=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,et.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,T.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,T.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,T.min.z),Y.isDataTexture||Y.isData3DTexture?U.texSubImage3D(Ue,$,H.x,H.y,H.z,ve,ye,Ae,Ce,Ie,et.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ue,$,H.x,H.y,H.z,ve,ye,Ae,Ce,et.data)):U.texSubImage3D(Ue,$,H.x,H.y,H.z,ve,ye,Ae,Ce,Ie,et),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ge),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Gn),$===0&&B.generateMipmaps&&U.generateMipmap(Ue),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Re.setTextureCube(T,0):T.isData3DTexture?Re.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Re.setTexture2DArray(T,0):Re.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){v=0,S=0,M=null,xe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?Jn:Kl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?Te:ln}}class Lm extends pc{}Lm.prototype.isWebGL1Renderer=!0;class Pm extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fa extends vt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Ye,u=Ye,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts extends cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ll=new L,cl=new L,ul=new we,Xr=new Ua,Ns=new Oi;class Dm extends lt{constructor(e=new Rt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ll.fromBufferAttribute(t,s-1),cl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ll.distanceTo(cl);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;ul.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(ul);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,u=new L,h=new L,d=new L,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const f=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){const M=g.getX(v),b=g.getX(v+1);if(l.fromBufferAttribute(m,M),u.fromBufferAttribute(m,b),Xr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let v=f,S=y-1;v<S;v+=p){if(l.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Xr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const hl=new L,dl=new L;class pa extends Dm{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hl.fromBufferAttribute(t,s),dl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hl.distanceTo(dl);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zi extends cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fl=new we,ma=new Ua,Os=new Oi,Bs=new L;class qr extends lt{constructor(e=new Rt,t=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;fl.copy(s).invert(),ma.copy(e.ray).applyMatrix4(fl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=l.getX(g);Bs.fromBufferAttribute(h,m),pl(Bs,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Bs.fromBufferAttribute(h,g),pl(Bs,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function pl(i,e,t,n,s,r,a){const o=ma.distanceSqToPoint(i);if(o<t){const c=new L;ma.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Im extends cn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Um extends cn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const nr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Fm{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Nm=new Fm;class ds{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const _n={};class Om extends Error{constructor(e,t){super(e),this.response=t}}class mc extends ds{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=nr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_n[e]!==void 0){_n[e].push({onLoad:t,onProgress:n,onError:s});return}_n[e]=[],_n[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=_n[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){h.read().then(({done:v,value:S})=>{if(v)f.close();else{_+=S.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let b=0,w=u.length;b<w;b++){const C=u[b];C.onProgress&&C.onProgress(M)}f.enqueue(S),y()}})}}});return new Response(m)}else throw new Om(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(g=>p.decode(g))}}}).then(l=>{nr.add(e,l);const u=_n[e];delete _n[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=_n[e];if(u===void 0)throw this.manager.itemError(e),l;delete _n[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bm extends ds{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=nr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=os("img");function c(){u(),nr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class ml extends ds{constructor(e){super(e)}load(e,t,n,s){const r=new vt,a=new Bm(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class gc extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jr=new we,gl=new L,_l=new L;class zm{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Na,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hm extends zm{constructor(){super(new Oa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DEFAULT_UP),this.updateMatrix(),this.target=new lt,this.shadow=new Hm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class km extends gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class vl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const xl=new L,zs=new L;class En{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){xl.subVectors(e,this.start),zs.subVectors(this.end,this.start);const n=zs.dot(zs);let r=zs.dot(xl)/n;return t&&(r=_t(r,0,1)),r}closestPointToPoint(e,t,n){const s=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Vm extends pa{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),s=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Rt;r.setIndex(new wt(n,1)),r.setAttribute("position",new at(s,3)),super(r,new ts({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ra);const Wm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAABCAIAAAC+O+cgAAAAEklEQVR42mNkYGBgHAWjYKQCAH7BAv8WAlmwAAAAAElFTkSuQmCC",Xm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAABCAIAAAC+O+cgAAAAtUlEQVR42n2Q0W3FMAzEyNNqHaH7j2L1w3ZenDwUMAwedXKA+MMvSqJiiBoiCWqWxKBEXaMZ8Sqs0zcmIv1p2nKwEvpLZMYOe3R4wku+TO7es/O8H+vHlH/KR9zQT8+z8F4531kRe379MIK4oD3v/SP7iplyHTKB5WNPs4AFH3kzO446Y+y6wA4TxqfMXBmzVrtwREY5ZrMY069dxr28Yb+wVjp02QWhSwKFJcHCaGGwTLBIzB9eyYkORwhbNAAAAABJRU5ErkJggg==",_c=0,qm=1,jm=2,yl=2,Yr=1.25,Ml=1,ei=6*4+4+4,ga=65535,Ym=Math.pow(2,-24);class Hs{constructor(){}}function rn(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Sl(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>t&&(t=s,e=n)}return e}function bl(i,e){e.set(i)}function El(i,e,t){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=e[r],t[r]=n<s?n:s,n=i[a],s=e[a],t[a]=n>s?n:s}}function Gs(i,e,t){for(let n=0;n<3;n++){const s=e[i+2*n],r=e[i+2*n+1],a=s-r,o=s+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Xi(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}function $m(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;let s;t>65535?s=new Uint32Array(new n(4*t)):s=new Uint16Array(new n(2*t)),i.setIndex(new wt(s,1));for(let r=0;r<t;r++)s[r]=r}}function Km(i){if(!i.groups||!i.groups.length)return[{offset:0,count:i.index.count/3}];const e=[],t=new Set;for(const s of i.groups)t.add(s.start),t.add(s.start+s.count);const n=Array.from(t.values()).sort((s,r)=>s-r);for(let s=0;s<n.length-1;s++){const r=n[s],a=n[s+1];e.push({offset:r/3,count:(a-r)/3})}return e}function $r(i,e,t,n,s=null){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,h=1/0,d=1/0,p=1/0,g=-1/0,_=-1/0,m=-1/0;const f=s!==null;for(let y=e*6,v=(e+t)*6;y<v;y+=6){const S=i[y+0],M=i[y+1],b=S-M,w=S+M;b<r&&(r=b),w>c&&(c=w),f&&S<h&&(h=S),f&&S>g&&(g=S);const C=i[y+2],x=i[y+3],E=C-x,N=C+x;E<a&&(a=E),N>l&&(l=N),f&&C<d&&(d=C),f&&C>_&&(_=C);const F=i[y+4],P=i[y+5],O=F-P,z=F+P;O<o&&(o=O),z>u&&(u=z),f&&F<p&&(p=F),f&&F>m&&(m=F)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,f&&(s[0]=h,s[1]=d,s[2]=p,s[3]=g,s[4]=_,s[5]=m)}function Zm(i,e,t,n){let s=1/0,r=1/0,a=1/0,o=-1/0,c=-1/0,l=-1/0;for(let u=e*6,h=(e+t)*6;u<h;u+=6){const d=i[u+0];d<s&&(s=d),d>o&&(o=d);const p=i[u+2];p<r&&(r=p),p>c&&(c=p);const g=i[u+4];g<a&&(a=g),g>l&&(l=g)}n[0]=s,n[1]=r,n[2]=a,n[3]=o,n[4]=c,n[5]=l}function Jm(i,e,t,n,s){let r=t,a=t+n-1;const o=s.pos,c=s.axis*2;for(;;){for(;r<=a&&e[r*6+c]<o;)r++;for(;r<=a&&e[a*6+c]>=o;)a--;if(r<a){for(let l=0;l<3;l++){let u=i[r*3+l];i[r*3+l]=i[a*3+l],i[a*3+l]=u;let h=e[r*6+l*2+0];e[r*6+l*2+0]=e[a*6+l*2+0],e[a*6+l*2+0]=h;let d=e[r*6+l*2+1];e[r*6+l*2+1]=e[a*6+l*2+1],e[a*6+l*2+1]=d}r++,a--}else return r}}const yn=32,Qm=(i,e)=>i.candidate-e.candidate,In=new Array(yn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),ks=new Float32Array(6);function eg(i,e,t,n,s,r){let a=-1,o=0;if(r===_c)a=Sl(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===qm)a=Sl(i),a!==-1&&(o=tg(t,n,s,a));else if(r===jm){const c=Xi(i);let l=Yr*s;const u=n*6,h=(n+s)*6;for(let d=0;d<3;d++){const p=e[d],m=(e[d+3]-p)/yn;if(s<yn/4){const f=[...In];f.length=s;let y=0;for(let S=u;S<h;S+=6,y++){const M=f[y];M.candidate=t[S+2*d],M.count=0;const{bounds:b,leftCacheBounds:w,rightCacheBounds:C}=M;for(let x=0;x<3;x++)C[x]=1/0,C[x+3]=-1/0,w[x]=1/0,w[x+3]=-1/0,b[x]=1/0,b[x+3]=-1/0;Gs(S,t,b)}f.sort(Qm);let v=s;for(let S=0;S<v;S++){const M=f[S];for(;S+1<v&&f[S+1].candidate===M.candidate;)f.splice(S+1,1),v--}for(let S=u;S<h;S+=6){const M=t[S+2*d];for(let b=0;b<v;b++){const w=f[b];M>=w.candidate?Gs(S,t,w.rightCacheBounds):(Gs(S,t,w.leftCacheBounds),w.count++)}}for(let S=0;S<v;S++){const M=f[S],b=M.count,w=s-M.count,C=M.leftCacheBounds,x=M.rightCacheBounds;let E=0;b!==0&&(E=Xi(C)/c);let N=0;w!==0&&(N=Xi(x)/c);const F=Ml+Yr*(E*b+N*w);F<l&&(a=d,l=F,o=M.candidate)}}else{for(let v=0;v<yn;v++){const S=In[v];S.count=0,S.candidate=p+m+v*m;const M=S.bounds;for(let b=0;b<3;b++)M[b]=1/0,M[b+3]=-1/0}for(let v=u;v<h;v+=6){let b=~~((t[v+2*d]-p)/m);b>=yn&&(b=yn-1);const w=In[b];w.count++,Gs(v,t,w.bounds)}const f=In[yn-1];bl(f.bounds,f.rightCacheBounds);for(let v=yn-2;v>=0;v--){const S=In[v],M=In[v+1];El(S.bounds,M.rightCacheBounds,S.rightCacheBounds)}let y=0;for(let v=0;v<yn-1;v++){const S=In[v],M=S.count,b=S.bounds,C=In[v+1].rightCacheBounds;M!==0&&(y===0?bl(b,ks):El(b,ks,ks)),y+=M;let x=0,E=0;y!==0&&(x=Xi(ks)/c);const N=s-y;N!==0&&(E=Xi(C)/c);const F=Ml+Yr*(x*y+E*N);F<l&&(a=d,l=F,o=S.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function tg(i,e,t,n){let s=0;for(let r=e,a=e+t;r<a;r++)s+=i[r*6+n*2];return s/t}function ng(i,e){const t=i.attributes.position,n=i.index.array,s=n.length/3,r=new Float32Array(s*6),a=t.normalized,o=t.array,c=t.offset||0;let l=3;t.isInterleavedBufferAttribute&&(l=t.data.stride);const u=["getX","getY","getZ"];for(let h=0;h<s;h++){const d=h*3,p=h*6;let g,_,m;a?(g=n[d+0],_=n[d+1],m=n[d+2]):(g=n[d+0]*l+c,_=n[d+1]*l+c,m=n[d+2]*l+c);for(let f=0;f<3;f++){let y,v,S;a?(y=t[u[f]](g),v=t[u[f]](_),S=t[u[f]](m)):(y=o[g+f],v=o[_+f],S=o[m+f]);let M=y;v<M&&(M=v),S<M&&(M=S);let b=y;v>b&&(b=v),S>b&&(b=S);const w=(b-M)/2,C=f*2;r[p+C+0]=M+w,r[p+C+1]=w+(Math.abs(M)+w)*Ym,M<e[f]&&(e[f]=M),b>e[f+3]&&(e[f+3]=b)}}return r}function ig(i,e){function t(f){d&&d(f/p)}function n(f,y,v,S=null,M=0){if(!g&&M>=c&&(g=!0,l&&(console.warn(`MeshBVH: Max depth of ${c} reached when generating BVH. Consider increasing maxDepth.`),console.warn(i))),v<=u||M>=c)return t(y+v),f.offset=y,f.count=v,f;const b=eg(f.boundingData,S,a,y,v,h);if(b.axis===-1)return t(y+v),f.offset=y,f.count=v,f;const w=Jm(o,a,y,v,b);if(w===y||w===y+v)t(y+v),f.offset=y,f.count=v;else{f.splitAxis=b.axis;const C=new Hs,x=y,E=w-y;f.left=C,C.boundingData=new Float32Array(6),$r(a,x,E,C.boundingData,r),n(C,x,E,r,M+1);const N=new Hs,F=w,P=v-E;f.right=N,N.boundingData=new Float32Array(6),$r(a,F,P,N.boundingData,r),n(N,F,P,r,M+1)}return f}$m(i,e);const s=new Float32Array(6),r=new Float32Array(6),a=ng(i,s),o=i.index.array,c=e.maxDepth,l=e.verbose,u=e.maxLeafTris,h=e.strategy,d=e.onProgress,p=i.index.count/3;let g=!1;const _=[],m=Km(i);if(m.length===1){const f=m[0],y=new Hs;y.boundingData=s,Zm(a,f.offset,f.count,r),n(y,f.offset,f.count,r),_.push(y)}else for(let f of m){const y=new Hs;y.boundingData=new Float32Array(6),$r(a,f.offset,f.count,y.boundingData,r),n(y,f.offset,f.count,r),_.push(y)}return _}function sg(i,e){const t=ig(i,e);let n,s,r;const a=[],o=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let u=0;u<t.length;u++){const h=t[u];let d=c(h);const p=new o(ei*d);n=new Float32Array(p),s=new Uint32Array(p),r=new Uint16Array(p),l(0,h),a.push(p)}return a;function c(u){return u.count?1:1+c(u.left)+c(u.right)}function l(u,h){const d=u/4,p=u/2,g=!!h.count,_=h.boundingData;for(let m=0;m<6;m++)n[d+m]=_[m];if(g){const m=h.offset,f=h.count;return s[d+6]=m,r[p+14]=f,r[p+15]=ga,u+ei}else{const m=h.left,f=h.right,y=h.splitAxis;let v;if(v=l(u+ei,m),v/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[d+6]=v/4,v=l(v,f),s[d+7]=y,v}}}class Tn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(e,t){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],c=e.dot(o);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(e){return this.min>e.max||e.min>this.max}}Tn.prototype.setFromBox=function(){const i=new L;return function(t,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);const h=t.dot(i);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}}();const rg=function(){const i=new L,e=new L,t=new L;return function(s,r,a){const o=s.start,c=i,l=r.start,u=e;t.subVectors(o,l),i.subVectors(s.end,s.start),e.subVectors(r.end,r.start);const h=t.dot(u),d=u.dot(c),p=u.dot(u),g=t.dot(c),m=c.dot(c)*p-d*d;let f,y;m!==0?f=(h*d-g*p)/m:f=0,y=(h+f*d)/p,a.x=f,a.y=y}}(),za=function(){const i=new be,e=new L,t=new L;return function(s,r,a,o){rg(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=s.start:u=s.end;let h;l<0?h=r.start:h=r.end;const d=e,p=t;if(s.closestPointToPoint(h,!0,e),r.closestPointToPoint(u,!0,t),d.distanceToSquared(h)<=p.distanceToSquared(u)){a.copy(d),o.copy(h);return}else{a.copy(u),o.copy(p);return}}}}(),ag=function(){const i=new L,e=new L,t=new Mn,n=new En;return function(r,a){const{radius:o,center:c}=r,{a:l,b:u,c:h}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=h,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const f=_.projectPoint(c,e);if(a.containsPoint(f))return!0}return!1}}(),og=1e-15;function Mi(i){return Math.abs(i)<og}class wn extends At{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Tn),this.points=[this.a,this.b,this.c],this.sphere=new Oi,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(e){return ag(e,this)}update(){const e=this.a,t=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,s);const l=r[1],u=a[1];l.subVectors(e,t),u.setFromPoints(l,s);const h=r[2],d=a[2];h.subVectors(t,n),d.setFromPoints(h,s);const p=r[3],g=a[3];p.subVectors(n,e),g.setFromPoints(p,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}wn.prototype.closestPointToSegment=function(){const i=new L,e=new L,t=new En;return function(s,r=null,a=null){const{start:o,end:c}=s,l=this.points;let u,h=1/0;for(let d=0;d<3;d++){const p=(d+1)%3;t.start.copy(l[d]),t.end.copy(l[p]),za(t,s,i,e),u=i.distanceToSquared(e),u<h&&(h=u,r&&r.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<h&&(h=u,r&&r.copy(i),a&&a.copy(c)),Math.sqrt(h)}}();wn.prototype.intersectsTriangle=function(){const i=new wn,e=new Array(3),t=new Array(3),n=new Tn,s=new Tn,r=new L,a=new L,o=new L,c=new L,l=new En,u=new En,h=new En;return function(p,g=null,_=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);const m=this.plane,f=p.plane;if(Math.abs(m.normal.dot(f.normal))>1-1e-10){const y=this.satBounds,v=this.satAxes;t[0]=p.a,t[1]=p.b,t[2]=p.c;for(let b=0;b<4;b++){const w=y[b],C=v[b];if(n.setFromPoints(C,t),w.isSeparated(n))return!1}const S=p.satBounds,M=p.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let b=0;b<4;b++){const w=S[b],C=M[b];if(n.setFromPoints(C,e),w.isSeparated(n))return!1}for(let b=0;b<4;b++){const w=v[b];for(let C=0;C<4;C++){const x=M[C];if(r.crossVectors(w,x),n.setFromPoints(r,e),s.setFromPoints(r,t),n.isSeparated(s))return!1}}return g&&(_||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),g.start.set(0,0,0),g.end.set(0,0,0)),!0}else{const y=this.points;let v=!1,S=0;for(let O=0;O<3;O++){const z=y[O],q=y[(O+1)%3];l.start.copy(z),l.end.copy(q),l.delta(a);const k=v?u.start:u.end,V=Mi(f.distanceToPoint(z));if(Mi(f.normal.dot(a))&&V){u.copy(l),S=2;break}if((f.intersectLine(l,k)||V)&&!Mi(k.distanceTo(q))){if(S++,v)break;v=!0}}if(S===1&&p.containsPoint(u.end))return g&&(g.start.copy(u.end),g.end.copy(u.end)),!0;if(S!==2)return!1;const M=p.points;let b=!1,w=0;for(let O=0;O<3;O++){const z=M[O],q=M[(O+1)%3];l.start.copy(z),l.end.copy(q),l.delta(o);const k=b?h.start:h.end,V=Mi(m.distanceToPoint(z));if(Mi(m.normal.dot(o))&&V){h.copy(l),w=2;break}if((m.intersectLine(l,k)||V)&&!Mi(k.distanceTo(q))){if(w++,b)break;b=!0}}if(w===1&&this.containsPoint(h.end))return g&&(g.start.copy(h.end),g.end.copy(h.end)),!0;if(w!==2)return!1;if(u.delta(a),h.delta(o),a.dot(o)<0){let O=h.start;h.start=h.end,h.end=O}const C=u.start.dot(a),x=u.end.dot(a),E=h.start.dot(a),N=h.end.dot(a),F=x<E,P=C<N;return C!==N&&E!==x&&F===P?!1:(g&&(c.subVectors(u.start,h.start),c.dot(a)>0?g.start.copy(u.start):g.start.copy(h.start),c.subVectors(u.end,h.end),c.dot(a)<0?g.end.copy(u.end):g.end.copy(h.end)),!0)}}}();wn.prototype.distanceToPoint=function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();wn.prototype.distanceToTriangle=function(){const i=new L,e=new L,t=["a","b","c"],n=new En,s=new En;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let h=0;h<3;h++){let d;const p=t[h],g=a[p];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<u&&(u=d,o&&o.copy(i),c&&c.copy(g));const _=this[p];a.closestPointToPoint(_,i),d=_.distanceToSquared(i),d<u&&(u=d,o&&o.copy(_),c&&c.copy(i))}for(let h=0;h<3;h++){const d=t[h],p=t[(h+1)%3];n.set(this[d],this[p]);for(let g=0;g<3;g++){const _=t[g],m=t[(g+1)%3];s.set(a[_],a[m]),za(n,s,i,e);const f=i.distanceToSquared(e);f<u&&(u=f,o&&o.copy(i),c&&c.copy(e))}}return Math.sqrt(u)}}();class un{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new we,this.invMatrix=new we,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Tn),this.alignedSatBounds=new Array(3).fill().map(()=>new Tn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}un.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){const d=1*l|2*u|4*h,p=s[d];p.x=l?n.x:t.x,p.y=u?n.y:t.y,p.z=h?n.z:t.z,p.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let l=0;l<3;l++){const u=a[l],h=r[l],d=1<<l,p=s[d];u.subVectors(o,p),h.setFromPoints(u,s)}const c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();un.prototype.intersectsBox=function(){const i=new Tn;return function(t){this.needsUpdate&&this.update();const n=t.min,s=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=r[c];if(i.setFromBox(l,t),u.isSeparated(i))return!1}return!0}}();un.prototype.intersectsTriangle=function(){const i=new wn,e=new Array(3),t=new Tn,n=new Tn,s=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const p=o[d],g=c[d];if(t.setFromPoints(g,e),p.isSeparated(t))return!1}const l=a.satBounds,u=a.satAxes,h=this.points;for(let d=0;d<3;d++){const p=l[d],g=u[d];if(t.setFromPoints(g,h),p.isSeparated(t))return!1}for(let d=0;d<3;d++){const p=c[d];for(let g=0;g<4;g++){const _=u[g];if(s.crossVectors(p,_),t.setFromPoints(s,e),n.setFromPoints(s,h),t.isSeparated(n))return!1}}return!0}}();un.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();un.prototype.distanceToPoint=function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();un.prototype.distanceToBox=function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new En),t=new Array(12).fill().map(()=>new En),n=new L,s=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;const u=o*o,h=a.min,d=a.max,p=this.points;let g=1/0;for(let m=0;m<8;m++){const f=p[m];s.copy(f).clamp(h,d);const y=f.distanceToSquared(s);if(y<g&&(g=y,c&&c.copy(f),l&&l.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let f=0;f<=1;f++)for(let y=0;y<=1;y++){const v=(m+1)%3,S=(m+2)%3,M=f<<v|y<<S,b=1<<m|f<<v|y<<S,w=p[M],C=p[b];e[_].set(w,C);const E=i[m],N=i[v],F=i[S],P=t[_],O=P.start,z=P.end;O[E]=h[E],O[N]=f?h[N]:d[N],O[F]=y?h[F]:d[N],z[E]=d[E],z[N]=f?h[N]:d[N],z[F]=y?h[F]:d[N],_++}for(let m=0;m<=1;m++)for(let f=0;f<=1;f++)for(let y=0;y<=1;y++){s.x=m?d.x:h.x,s.y=f?d.y:h.y,s.z=y?d.z:h.z,this.closestPointToPoint(s,n);const v=s.distanceToSquared(n);if(v<g&&(g=v,c&&c.copy(n),l&&l.copy(s),v<u))return Math.sqrt(v)}for(let m=0;m<12;m++){const f=e[m];for(let y=0;y<12;y++){const v=t[y];za(f,v,n,s);const S=n.distanceToSquared(s);if(S<g&&(g=S,c&&c.copy(n),l&&l.copy(s),S<u))return Math.sqrt(S)}}return Math.sqrt(g)}}();const Vs=new L,Ws=new L,Xs=new L,Al=new be,Tl=new be,wl=new be,Rl=new L;function lg(i,e,t,n,s,r){let a;return r===Et?a=i.intersectTriangle(n,t,e,!0,s):a=i.intersectTriangle(e,t,n,r!==Gt,s),a===null?null:{distance:i.origin.distanceTo(s),point:s.clone()}}function cg(i,e,t,n,s,r,a){Vs.fromBufferAttribute(e,n),Ws.fromBufferAttribute(e,s),Xs.fromBufferAttribute(e,r);const o=lg(i,Vs,Ws,Xs,Rl,a);if(o){t&&(Al.fromBufferAttribute(t,n),Tl.fromBufferAttribute(t,s),wl.fromBufferAttribute(t,r),o.uv=At.getUV(Rl,Vs,Ws,Xs,Al,Tl,wl,new be));const c={a:n,b:s,c:r,normal:new L,materialIndex:0};At.getNormal(Vs,Ws,Xs,c.normal),o.face=c,o.faceIndex=n}return o}function vc(i,e,t,n,s){const r=n*3,a=i.index.getX(r),o=i.index.getX(r+1),c=i.index.getX(r+2),l=cg(t,i.attributes.position,i.attributes.uv,a,o,c,e);return l?(l.faceIndex=n,s&&s.push(l),l):null}function ug(i,e,t,n,s,r){for(let a=n,o=n+s;a<o;a++)vc(i,e,t,a,r)}function hg(i,e,t,n,s){let r=1/0,a=null;for(let o=n,c=n+s;o<c;o++){const l=vc(i,e,t,o);l&&l.distance<r&&(a=l,r=l.distance)}return a}function sn(i,e,t,n){const s=i.a,r=i.b,a=i.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(e),c=t.getX(e+1),l=t.getX(e+2)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function Cl(i,e,t,n,s,r,a){const o=t.index,c=t.attributes.position;for(let l=i,u=e+i;l<u;l++)if(sn(a,l*3,o,c),a.needsUpdate=!0,n(a,l,s,r))return!0;return!1}class xc{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}function Sn(i,e){return e[i+15]===65535}function ti(i,e){return e[i+6]}function Fi(i,e){return e[i+14]}function ls(i){return i+8}function Ni(i,e){return e[i+6]}function yc(i,e){return e[i+7]}const Ai=new Wt,ir=new L,dg=["x","y","z"];function _a(i,e,t,n,s){let r=i*2,a=zi,o=On,c=Bn;if(Sn(r,o)){const u=ti(i,c),h=Fi(r,o);ug(e,t,n,u,h,s)}else{const u=ls(i);sr(u,a,n,ir)&&_a(u,e,t,n,s);const h=Ni(i,c);sr(h,a,n,ir)&&_a(h,e,t,n,s)}}function va(i,e,t,n){let s=i*2,r=zi,a=On,o=Bn;if(Sn(s,a)){const l=ti(i,o),u=Fi(s,a);return hg(e,t,n,l,u)}else{const l=yc(i,o),u=dg[l],d=n.direction[u]>=0;let p,g;d?(p=ls(i),g=Ni(i,o)):(p=Ni(i,o),g=ls(i));const m=sr(p,r,n,ir)?va(p,e,t,n):null;if(m){const v=m.point[u];if(d?v<=r[g+l]:v>=r[g+l+3])return m}const y=sr(g,r,n,ir)?va(g,e,t,n):null;return m&&y?m.distance<=y.distance?m:y:m||y||null}}const fg=function(){let i,e;const t=[],n=new xc(()=>new Wt);return function(...a){i=n.getPrimitive(),e=n.getPrimitive(),t.push(i,e);const o=s(...a);n.releasePrimitive(i),n.releasePrimitive(e),t.pop(),t.pop();const c=t.length;return c>0&&(e=t[c-1],i=t[c-2]),o};function s(r,a,o,c,l=null,u=0,h=0){function d(v){let S=v*2,M=On,b=Bn;for(;!Sn(S,M);)v=ls(v),S=v*2;return ti(v,b)}function p(v){let S=v*2,M=On,b=Bn;for(;!Sn(S,M);)v=Ni(v,b),S=v*2;return ti(v,b)+Fi(S,M)}let g=r*2,_=zi,m=On,f=Bn;if(Sn(g,m)){const v=ti(r,f),S=Fi(g,m);return rn(r,_,i),c(v,S,!1,h,u+r,i)}else{const v=ls(r),S=Ni(r,f);let M=v,b=S,w,C,x,E;if(l&&(x=i,E=e,rn(M,_,x),rn(b,_,E),w=l(x),C=l(E),C<w)){M=S,b=v;const k=w;w=C,C=k,x=E}x||(x=i,rn(M,_,x));const N=Sn(M*2,m),F=o(x,N,w,h+1,u+M);let P;if(F===yl){const k=d(M),Q=p(M)-k;P=c(k,Q,!0,h+1,u+M,x)}else P=F&&s(M,a,o,c,l,u,h+1);if(P)return!0;E=e,rn(b,_,E);const O=Sn(b*2,m),z=o(E,O,C,h+1,u+b);let q;if(z===yl){const k=d(b),Q=p(b)-k;q=c(k,Q,!0,h+1,u+b,E)}else q=z&&s(b,a,o,c,l,u,h+1);return!!q}}}(),pg=function(){const i=new wn,e=new wn,t=new we,n=new un,s=new un;return function r(a,o,c,l,u=null){let h=a*2,d=zi,p=On,g=Bn;if(u===null&&(c.boundingBox||c.computeBoundingBox(),n.set(c.boundingBox.min,c.boundingBox.max,l),u=n),Sn(h,p)){const m=o,f=m.index,y=m.attributes.position,v=c.index,S=c.attributes.position,M=ti(a,g),b=Fi(h,p);if(t.copy(l).invert(),c.boundsTree)return rn(a,d,s),s.matrix.copy(t),s.needsUpdate=!0,c.boundsTree.shapecast({intersectsBounds:C=>s.intersectsBox(C),intersectsTriangle:C=>{C.a.applyMatrix4(l),C.b.applyMatrix4(l),C.c.applyMatrix4(l),C.needsUpdate=!0;for(let x=M*3,E=(b+M)*3;x<E;x+=3)if(sn(e,x,f,y),e.needsUpdate=!0,C.intersectsTriangle(e))return!0;return!1}});for(let w=M*3,C=b+M*3;w<C;w+=3){sn(i,w,f,y),i.a.applyMatrix4(t),i.b.applyMatrix4(t),i.c.applyMatrix4(t),i.needsUpdate=!0;for(let x=0,E=v.count;x<E;x+=3)if(sn(e,x,v,S),e.needsUpdate=!0,i.intersectsTriangle(e))return!0}}else{const m=a+8,f=g[a+6];return rn(m,d,Ai),!!(u.intersectsBox(Ai)&&r(m,o,c,l,u)||(rn(f,d,Ai),u.intersectsBox(Ai)&&r(f,o,c,l,u)))}}}();function sr(i,e,t,n){return rn(i,e,Ai),t.intersectBox(Ai,n)}const xa=[];let Qs,zi,On,Bn;function Ji(i){Qs&&xa.push(Qs),Qs=i,zi=new Float32Array(i),On=new Uint16Array(i),Bn=new Uint32Array(i)}function qs(){Qs=null,zi=null,On=null,Bn=null,xa.length&&Ji(xa.pop())}const Kr=Symbol("skip tree generation"),Zr=new Wt,Jr=new Wt,Si=new we,jn=new un,qi=new un,ji=new L,js=new L,mg=new L,gg=new L,_g=new L,Ll=new Wt,tn=new xc(()=>new wn);class ns{static serialize(e,t={}){if(t.isBufferGeometry)return console.warn("MeshBVH.serialize: The arguments for the function have changed. See documentation for new signature."),ns.serialize(arguments[0],{cloneBuffers:arguments[2]===void 0?!0:arguments[2]});t={cloneBuffers:!0,...t};const n=e.geometry,s=e._roots,r=n.getIndex();let a;return t.cloneBuffers?a={roots:s.map(o=>o.slice()),index:r.array.slice()}:a={roots:s,index:r.array},a}static deserialize(e,t,n={}){if(typeof n=="boolean")return console.warn("MeshBVH.deserialize: The arguments for the function have changed. See documentation for new signature."),ns.deserialize(arguments[0],arguments[1],{setIndex:arguments[2]===void 0?!0:arguments[2]});n={setIndex:!0,...n};const{index:s,roots:r}=e,a=new ns(t,{...n,[Kr]:!0});if(a._roots=r,n.setIndex){const o=t.getIndex();if(o===null){const c=new wt(e.index,1,!1);t.setIndex(c)}else o.array!==s&&(o.array.set(s),o.needsUpdate=!0)}return a}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({strategy:_c,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,[Kr]:!1},t),t.useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this._roots=null,t[Kr]||(this._roots=sg(e,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Wt))),this.geometry=e}refit(e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=this.geometry,n=t.index.array,s=t.attributes.position;let r,a,o,c,l=0;const u=this._roots;for(let d=0,p=u.length;d<p;d++)r=u[d],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),h(0,l),l+=r.byteLength;function h(d,p,g=!1){const _=d*2;if(o[_+15]===ga){const f=a[d+6],y=o[_+14];let v=1/0,S=1/0,M=1/0,b=-1/0,w=-1/0,C=-1/0;for(let x=3*f,E=3*(f+y);x<E;x++){const N=n[x],F=s.getX(N),P=s.getY(N),O=s.getZ(N);F<v&&(v=F),F>b&&(b=F),P<S&&(S=P),P>w&&(w=P),O<M&&(M=O),O>C&&(C=O)}return c[d+0]!==v||c[d+1]!==S||c[d+2]!==M||c[d+3]!==b||c[d+4]!==w||c[d+5]!==C?(c[d+0]=v,c[d+1]=S,c[d+2]=M,c[d+3]=b,c[d+4]=w,c[d+5]=C,!0):!1}else{const f=d+8,y=a[d+6],v=f+p,S=y+p;let M=g,b=!1,w=!1;e?M||(b=e.has(v),w=e.has(S),M=!b&&!w):(b=!0,w=!0);const C=M||b,x=M||w;let E=!1;C&&(E=h(f,p,M));let N=!1;x&&(N=h(y,p,M));const F=E||N;if(F)for(let P=0;P<3;P++){const O=f+P,z=y+P,q=c[O],k=c[O+3],V=c[z],Q=c[z+3];c[d+P]=q<V?q:V,c[d+P+3]=k>Q?k:Q}return F}}}traverse(e,t=0){const n=this._roots[t],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=r[l+15]===ga;if(u){const h=s[o+6],d=r[l+14];e(c,u,new Float32Array(n,o*4,6),h,d)}else{const h=o+ei/4,d=s[o+6],p=s[o+7];e(c,u,new Float32Array(n,o*4,6),p)||(a(h,c+1),a(d,c+1))}}}raycast(e,t=on){const n=this._roots,s=this.geometry,r=[],a=t.isMaterial,o=Array.isArray(t),c=s.groups,l=a?t.side:t;for(let u=0,h=n.length;u<h;u++){const d=o?t[c[u].materialIndex].side:l,p=r.length;if(Ji(n[u]),_a(0,s,d,e,r),qs(),o){const g=c[u].materialIndex;for(let _=p,m=r.length;_<m;_++)r[_].face.materialIndex=g}}return r}raycastFirst(e,t=on){const n=this._roots,s=this.geometry,r=t.isMaterial,a=Array.isArray(t);let o=null;const c=s.groups,l=r?t.side:t;for(let u=0,h=n.length;u<h;u++){const d=a?t[c[u].materialIndex].side:l;Ji(n[u]);const p=va(0,s,d,e);qs(),p!=null&&(o==null||p.distance<o.distance)&&(o=p,a&&(p.face.materialIndex=c[u].materialIndex))}return o}intersectsGeometry(e,t){const n=this.geometry;let s=!1;for(const r of this._roots)if(Ji(r),s=pg(0,n,e,t),qs(),s)break;return s}shapecast(e,t,n){const s=this.geometry;if(e instanceof Function){if(t){const d=t;t=(p,g,_,m)=>{const f=g*3;return d(p,f,f+1,f+2,_,m)}}e={boundsTraverseOrder:n,intersectsBounds:e,intersectsTriangle:t,intersectsRange:null},console.warn("MeshBVH: Shapecast function signature has changed and now takes an object of callbacks as a second argument. See docs for new signature.")}const r=tn.getPrimitive();let{boundsTraverseOrder:a,intersectsBounds:o,intersectsRange:c,intersectsTriangle:l}=e;if(c&&l){const d=c;c=(p,g,_,m,f)=>d(p,g,_,m,f)?!0:Cl(p,g,s,l,_,m,r)}else c||(l?c=(d,p,g,_)=>Cl(d,p,s,l,g,_,r):c=(d,p,g)=>g);let u=!1,h=0;for(const d of this._roots){if(Ji(d),u=fg(0,s,o,c,a,h),qs(),u)break;h+=d.byteLength}return tn.releasePrimitive(r),u}bvhcast(e,t,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=this.geometry.index,o=this.geometry.attributes.position,c=e.geometry.index,l=e.geometry.attributes.position;Si.copy(t).invert();const u=tn.getPrimitive(),h=tn.getPrimitive();if(r){let g=function(_,m,f,y,v,S,M,b){for(let w=f,C=f+y;w<C;w++){sn(h,w*3,c,l),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let x=_,E=_+m;x<E;x++)if(sn(u,x*3,a,o),u.needsUpdate=!0,r(u,h,x,w,v,S,M,b))return!0}return!1};var p=g;if(s){const _=s;s=function(m,f,y,v,S,M,b,w){return _(m,f,y,v,S,M,b,w)?!0:g(m,f,y,v,S,M,b,w)}}else s=g}e.getBoundingBox(Jr),Jr.applyMatrix4(t);const d=this.shapecast({intersectsBounds:g=>Jr.intersectsBox(g),intersectsRange:(g,_,m,f,y,v)=>(Zr.copy(v),Zr.applyMatrix4(Si),e.shapecast({intersectsBounds:S=>Zr.intersectsBox(S),intersectsRange:(S,M,b,w,C)=>s(g,_,S,M,f,y,w,C)}))});return tn.releasePrimitive(u),tn.releasePrimitive(h),d}intersectsBox(e,t){return jn.set(e.min,e.max,t),jn.needsUpdate=!0,this.shapecast({intersectsBounds:n=>jn.intersectsBox(n),intersectsTriangle:n=>jn.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},s={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),jn.set(e.boundingBox.min,e.boundingBox.max,t),jn.needsUpdate=!0;const o=this.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,h=e.index,d=tn.getPrimitive(),p=tn.getPrimitive();let g=js,_=mg,m=null,f=null;s&&(m=gg,f=_g);let y=1/0,v=null,S=null;return Si.copy(t).invert(),qi.matrix.copy(Si),this.shapecast({boundsTraverseOrder:M=>jn.distanceToBox(M),intersectsBounds:(M,b,w)=>w<y&&w<a?(b&&(qi.min.copy(M.min),qi.max.copy(M.max),qi.needsUpdate=!0),!0):!1,intersectsRange:(M,b)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:w=>qi.distanceToBox(w),intersectsBounds:(w,C,x)=>x<y&&x<a,intersectsRange:(w,C)=>{for(let x=w*3,E=(w+C)*3;x<E;x+=3){sn(p,x,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let N=M*3,F=(M+b)*3;N<F;N+=3){sn(d,N,l,c),d.needsUpdate=!0;const P=d.distanceToTriangle(p,g,m);if(P<y&&(_.copy(g),f&&f.copy(m),y=P,v=N/3,S=x/3),P<r)return!0}}}});{const w=h?h.count:u.count;for(let C=0,x=w;C<x;C+=3){sn(p,C,h,u),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=M*3,N=(M+b)*3;E<N;E+=3){sn(d,E,l,c),d.needsUpdate=!0;const F=d.distanceToTriangle(p,g,m);if(F<y&&(_.copy(g),f&&f.copy(m),y=F,v=E/3,S=C/3),F<r)return!0}}}}}),tn.releasePrimitive(d),tn.releasePrimitive(p),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=v,s&&(s.point?s.point.copy(f):s.point=f.clone(),s.point.applyMatrix4(Si),_.applyMatrix4(Si),s.distance=_.sub(s.point).length(),s.faceIndex=S),n)}closestPointToPoint(e,t={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,c=null;if(this.shapecast({boundsTraverseOrder:u=>(ji.copy(e).clamp(u.min,u.max),ji.distanceToSquared(e)),intersectsBounds:(u,h,d)=>d<o&&d<a,intersectsTriangle:(u,h)=>{u.closestPointToPoint(e,ji);const d=e.distanceToSquared(ji);return d<o&&(js.copy(ji),o=d,c=h),d<r}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(js):t.point=js.clone(),t.distance=l,t.faceIndex=c,t}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{rn(0,new Float32Array(n),Ll),e.union(Ll)}),e}}function vg(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function xg(i){switch(i){case 1:return or;case 2:return $l;case 3:return bt;case 4:return bt}}function Pl(i){switch(i){case 1:return Yl;case 2:return Pa;case 3:return tr;case 4:return tr}}class Mc extends fa{constructor(){super(),this.minFilter=Ye,this.magFilter=Ye,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,s=e.count;if(t!==null){if(n*s%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=s*n/t}const r=e.itemSize,a=e.count,o=e.normalized,c=e.array.constructor,l=c.BYTES_PER_ELEMENT;let u=this._forcedType,h=r;if(u===null)switch(c){case Float32Array:u=Tt;break;case Uint8Array:case Uint16Array:case Uint32Array:u=Vt;break;case Int8Array:case Int16Array:case Int32Array:u=Zs;break}let d,p,g,_,m=vg(r);switch(u){case Tt:g=1,p=xg(r),o&&l===1?(_=c,m+="8",c===Uint8Array?d=An:(d=ca,m+="_SNORM")):(_=Float32Array,m+="32F",d=Tt);break;case Zs:m+=l*8+"I",g=o?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,p=Pl(r),l===1?(_=Int8Array,d=ca):l===2?(_=Int16Array,d=jl):(_=Int32Array,d=Zs);break;case Vt:m+=l*8+"UI",g=o?Math.pow(2,c.BYTES_PER_ELEMENT*8-1):1,p=Pl(r),l===1?(_=Uint8Array,d=An):l===2?(_=Uint16Array,d=La):(_=Uint32Array,d=Vt);break}h===3&&(p===bt||p===tr)&&(h=4);const f=Math.ceil(Math.sqrt(a)),y=h*f*f,v=new _(y),S=e.normalized;e.normalized=!1;for(let M=0;M<a;M++){const b=h*M;v[b]=e.getX(M)/g,r>=2&&(v[b+1]=e.getY(M)/g),r>=3&&(v[b+2]=e.getZ(M)/g,h===4&&(v[b+3]=1)),r>=4&&(v[b+3]=e.getW(M)/g)}e.normalized=S,this.internalFormat=m,this.format=p,this.type=d,this.image.width=f,this.image.height=f,this.image.data=v,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=s}}class yg extends Mc{constructor(){super(),this._forcedType=Vt}}class Mg extends Mc{constructor(){super(),this._forcedType=Tt}}function Sg(i,e,t){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),a=new Uint32Array(s),o=new Float32Array(s),c=s.byteLength/ei,l=2*Math.ceil(Math.sqrt(c/2)),u=new Float32Array(4*l*l),h=Math.ceil(Math.sqrt(c)),d=new Uint32Array(2*h*h);for(let p=0;p<c;p++){const g=p*ei/4,_=g*2,m=g;for(let f=0;f<3;f++)u[8*p+0+f]=o[m+0+f],u[8*p+4+f]=o[m+3+f];if(Sn(_,r)){const f=Fi(_,r),y=ti(g,a),v=4294901760|f;d[p*2+0]=v,d[p*2+1]=y}else{const f=4*Ni(g,a)/ei,y=yc(g,a);d[p*2+0]=y,d[p*2+1]=f}}e.image.data=u,e.image.width=l,e.image.height=l,e.format=bt,e.type=Tt,e.internalFormat="RGBA32F",e.minFilter=Ye,e.magFilter=Ye,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=d,t.image.width=h,t.image.height=h,t.format=Pa,t.type=Vt,t.internalFormat="RG32UI",t.minFilter=Ye,t.magFilter=Ye,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}class bg{constructor(){this.autoDispose=!0,this.index=new yg,this.position=new Mg,this.bvhBounds=new fa,this.bvhContents=new fa,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;Sg(e,this.bvhBounds,this.bvhContents),this.index.updateFrom(t.index),this.position.updateFrom(t.attributes.position)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:s}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),s&&s.dispose()}}const Eg=`
#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,Ag=`

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}

// Raycasting
float intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	float dist = max( t0, 0.0 );

	return t1 >= dist ? dist : INFINITY;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection, uint offset, uint count,
	inout float minDistance,

	// output variables
	out uvec4 faceIndices, out vec3 faceNormal, out vec3 barycoord,
	out float side, out float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

float intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax );

}

bool bvhIntersectFirstHit(
	BVH bvh, vec3 rayOrigin, vec3 rayDirection,

	// output variables
	out uvec4 faceIndices, out vec3 faceNormal, out vec3 barycoord,
	out float side, out float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;

	float triangleDistance = 1e20;
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh, currNodeIndex );
		if ( boundsHitDistance == INFINITY || boundsHitDistance > triangleDistance ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh, rayOrigin, rayDirection, offset, count, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Tg=`

float dot2( in vec3 v ) {

	return dot( v, v );

}


// https://www.shadertoy.com/view/ttfGWl
vec3 closestPointToTriangle( vec3 p, vec3 v0, vec3 v1, vec3 v2, out vec3 barycoord ) {

    vec3 v10 = v1 - v0;
    vec3 v21 = v2 - v1;
    vec3 v02 = v0 - v2;

	vec3 p0 = p - v0;
	vec3 p1 = p - v1;
	vec3 p2 = p - v2;

    vec3 nor = cross( v10, v02 );

    // method 2, in barycentric space
    vec3  q = cross( nor, p0 );
    float d = 1.0 / dot2( nor );
    float u = d * dot( q, v02 );
    float v = d * dot( q, v10 );
    float w = 1.0 - u - v;

	if( u < 0.0 ) {

		w = clamp( dot( p2, v02 ) / dot2( v02 ), 0.0, 1.0 );
		u = 0.0;
		v = 1.0 - w;

	} else if( v < 0.0 ) {

		u = clamp( dot( p0, v10 ) / dot2( v10 ), 0.0, 1.0 );
		v = 0.0;
		w = 1.0 - u;

	} else if( w < 0.0 ) {

		v = clamp( dot( p1, v21 ) / dot2( v21 ), 0.0, 1.0 );
		w = 0.0;
		u = 1.0-v;

	}

	barycoord = vec3( u, v, w );
    return u * v1 + v * v2 + w * v0;

}

float distanceToTriangles(
	BVH bvh, vec3 point, uint offset, uint count, float closestDistanceSquared,

	out uvec4 faceIndices, out vec3 faceNormal, out vec3 barycoord, out float side, out vec3 outPoint
) {

	bool found = false;
	uvec3 localIndices;
	vec3 localBarycoord;
	vec3 localNormal;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
		vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
		vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
		vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

		// get the closest point and barycoord
		vec3 closestPoint = closestPointToTriangle( point, a, b, c, localBarycoord );
		vec3 delta = point - closestPoint;
		float sqDist = dot2( delta );
		if ( sqDist < closestDistanceSquared ) {

			// set the output results
			closestDistanceSquared = sqDist;
			faceIndices = uvec4( indices.xyz, i );
			faceNormal = normalize( cross( a - b, b - c ) );
			barycoord = localBarycoord;
			outPoint = closestPoint;
			side = sign( dot( faceNormal, delta ) );

		}

	}

	return closestDistanceSquared;

}

float distanceSqToBounds( vec3 point, vec3 boundsMin, vec3 boundsMax ) {

	vec3 clampedPoint = clamp( point, boundsMin, boundsMax );
	vec3 delta = point - clampedPoint;
	return dot( delta, delta );

}

float distanceSqToBVHNodeBoundsPoint( vec3 point, BVH bvh, uint currNodeIndex ) {

	vec3 boundsMin = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 0u ).xyz;
	vec3 boundsMax = texelFetch1D( bvh.bvhBounds, currNodeIndex * 2u + 1u ).xyz;
	return distanceSqToBounds( point, boundsMin, boundsMax );

}

float bvhClosestPointToPoint(
	BVH bvh, vec3 point,

	// output variables
	out uvec4 faceIndices, out vec3 faceNormal, out vec3 barycoord,
	out float side, out vec3 outPoint
 ) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ 60 ];
	stack[ 0 ] = 0u;
	float closestDistanceSquared = pow( 100000.0, 2.0 );
	bool found = false;
	while ( ptr > - 1 && ptr < 60 ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance = distanceSqToBVHNodeBoundsPoint( point, bvh, currNodeIndex );
		if ( boundsHitDistance > closestDistanceSquared ) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );
		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;
			closestDistanceSquared = distanceToTriangles(
				bvh, point, offset, count, closestDistanceSquared,

				// outputs
				faceIndices, faceNormal, barycoord, side, outPoint
			);

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;
			bool leftToRight = distanceSqToBVHNodeBoundsPoint( point, bvh, leftIndex ) < distanceSqToBVHNodeBoundsPoint( point, bvh, rightIndex );//rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;
			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return sqrt( closestDistanceSquared );

}
`,wg=/^[og]\s*(.+)?/,Rg=/^mtllib /,Cg=/^usemtl /,Lg=/^usemap /,Dl=/\s+/,Il=new L,Qr=new L,Ul=new L,Fl=new L,Ot=new L,Ys=new He;function Pg(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[e+0],s[e+1],s[e+2]),r.push(s[t+0],s[t+1],s[t+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(e,t,n){const s=this.vertices,r=this.object.geometry.normals;Il.fromArray(s,e),Qr.fromArray(s,t),Ul.fromArray(s,n),Ot.subVectors(Ul,Qr),Fl.subVectors(Il,Qr),Ot.cross(Fl),Ot.normalize(),r.push(Ot.x,Ot.y,Ot.z),r.push(Ot.x,Ot.y,Ot.z),r.push(Ot.x,Ot.y,Ot.z)},addColor:function(e,t,n){const s=this.colors,r=this.object.geometry.colors;s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(e,t,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[e+0],s[e+1]),r.push(s[t+0],s[t+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,s,r,a,o,c,l){const u=this.vertices.length;let h=this.parseVertexIndex(e,u),d=this.parseVertexIndex(t,u),p=this.parseVertexIndex(n,u);if(this.addVertex(h,d,p),this.addColor(h,d,p),o!==void 0&&o!==""){const g=this.normals.length;h=this.parseNormalIndex(o,g),d=this.parseNormalIndex(c,g),p=this.parseNormalIndex(l,g),this.addNormal(h,d,p)}else this.addFaceNormal(h,d,p);if(s!==void 0&&s!==""){const g=this.uvs.length;h=this.parseUVIndex(s,g),d=this.parseUVIndex(r,g),p=this.parseUVIndex(a,g),this.addUV(h,d,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,s=e.length;n<s;n++){const r=this.parseVertexIndex(e[n],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=e.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(e[r],n));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],s))}};return i.startObject("",!1),i}class Dg extends ds{constructor(e){super(e),this.materials=null}load(e,t,n,s){const r=this,a=new mc(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Pg;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let s=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const u=l.charAt(0);if(u!=="#")if(u==="v"){const h=l.split(Dl);switch(h[0]){case"v":t.vertices.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),h.length>=7?(Ys.setRGB(parseFloat(h[4]),parseFloat(h[5]),parseFloat(h[6])).convertSRGBToLinear(),t.colors.push(Ys.r,Ys.g,Ys.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));break;case"vt":t.uvs.push(parseFloat(h[1]),parseFloat(h[2]));break}}else if(u==="f"){const d=l.slice(1).trim().split(Dl),p=[];for(let _=0,m=d.length;_<m;_++){const f=d[_];if(f.length>0){const y=f.split("/");p.push(y)}}const g=p[0];for(let _=1,m=p.length-1;_<m;_++){const f=p[_],y=p[_+1];t.addFace(g[0],f[0],y[0],g[1],f[1],y[1],g[2],f[2],y[2])}}else if(u==="l"){const h=l.substring(1).trim().split(" ");let d=[];const p=[];if(l.indexOf("/")===-1)d=h;else for(let g=0,_=h.length;g<_;g++){const m=h[g].split("/");m[0]!==""&&d.push(m[0]),m[1]!==""&&p.push(m[1])}t.addLineGeometry(d,p)}else if(u==="p"){const d=l.slice(1).trim().split(" ");t.addPointGeometry(d)}else if((s=wg.exec(l))!==null){const h=(" "+s[0].slice(1).trim()).slice(1);t.startObject(h)}else if(Cg.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Rg.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Lg.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(s=l.split(" "),s.length>1){const d=s[1].trim().toLowerCase();t.object.smooth=d!=="0"&&d!=="off"}else t.object.smooth=!0;const h=t.object.currentMaterial();h&&(h.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const r=new Ki;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],u=l.geometry,h=l.materials,d=u.type==="Line",p=u.type==="Points";let g=!1;if(u.vertices.length===0)continue;const _=new Rt;_.setAttribute("position",new at(u.vertices,3)),u.normals.length>0&&_.setAttribute("normal",new at(u.normals,3)),u.colors.length>0&&(g=!0,_.setAttribute("color",new at(u.colors,3))),u.hasUVIndices===!0&&_.setAttribute("uv",new at(u.uvs,2));const m=[];for(let y=0,v=h.length;y<v;y++){const S=h[y],M=S.name+"_"+S.smooth+"_"+g;let b=t.materials[M];if(this.materials!==null){if(b=this.materials.create(S.name),d&&b&&!(b instanceof ts)){const w=new ts;cn.prototype.copy.call(w,b),w.color.copy(b.color),b=w}else if(p&&b&&!(b instanceof Zi)){const w=new Zi({size:10,sizeAttenuation:!1});cn.prototype.copy.call(w,b),w.color.copy(b.color),w.map=b.map,b=w}}b===void 0&&(d?b=new ts:p?b=new Zi({size:1,sizeAttenuation:!1}):b=new Im,b.name=S.name,b.flatShading=!S.smooth,b.vertexColors=g,t.materials[M]=b),m.push(b)}let f;if(m.length>1){for(let y=0,v=h.length;y<v;y++){const S=h[y];_.addGroup(S.groupStart,S.groupCount,y)}d?f=new pa(_,m):p?f=new qr(_,m):f=new Ut(_,m)}else d?f=new pa(_,m[0]):p?f=new qr(_,m[0]):f=new Ut(_,m[0]);f.name=l.name,r.add(f)}else if(t.vertices.length>0){const o=new Zi({size:1,sizeAttenuation:!1}),c=new Rt;c.setAttribute("position",new at(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new at(t.colors,3)),o.vertexColors=!0);const l=new qr(c,o);r.add(l)}return r}}const Ig=new Oa(-1,1,1,-1,0,1),Ha=new Rt;Ha.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3));Ha.setAttribute("uv",new at([0,2,0,0,2,0],2));class $s{constructor(e){this._mesh=new Ut(Ha,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ig)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class an{constructor(e,t,n,s,r="div"){this.parent=e,this.object=t,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),an.nextNameID=an.nextNameID||0,this.$name.id="lil-gui-name-"+ ++an.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}let Ug=class extends an{constructor(e,t,n){super(e,t,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}};function ya(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Fg={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:ya,toHexString:ya},cs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Ng={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const n=cs.fromHexString(i);e[0]=(n>>16&255)/255*t,e[1]=(n>>8&255)/255*t,e[2]=(255&n)/255*t},toHexString:([i,e,t],n=1)=>cs.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},Og={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const n=cs.fromHexString(i);e.r=(n>>16&255)/255*t,e.g=(n>>8&255)/255*t,e.b=(255&n)/255*t},toHexString:({r:i,g:e,b:t},n=1)=>cs.toHexString(i*(n=255/n)<<16^e*n<<8^t*n<<0)},Bg=[Fg,cs,Ng,Og];class zg extends an{constructor(e,t,n,s){var r;super(e,t,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,Bg.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=ya(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ea extends an{constructor(e,t,n){super(e,t,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Hg extends an{constructor(e,t,n,s,r,a){super(e,t,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+u),this.$input.value=this.getValue())};let t,n,s,r,a,o=!1;const c=u=>{if(o){const h=u.clientX-t,d=u.clientY-n;Math.abs(d)>5?(u.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>5&&l()}if(!o){const h=u.clientY-s;a-=h*this._step*this._arrowKeyMultiplier(u),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=u.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,n=s=u.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const p=this.$slider.getBoundingClientRect();let g=(_=d,m=p.left,f=p.right,y=this._min,v=this._max,(_-m)/(f-m)*(v-y)+y);var _,m,f,y,v;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};let s,r,a=!1;const o=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),a=!1},c=d=>{if(a){const p=d.touches[0].clientX-s,g=d.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?o(d):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l))}else d.preventDefault(),e(d.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",l)},u=this._callOnFinishChange.bind(this);let h;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(s=d.touches[0].clientX,r=d.touches[0].clientY,a=!0):o(d),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(h),h=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:n}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,n=-e.wheelDelta/120,n*=this._stepExplicit?1:10),t+-n}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Gg extends an{constructor(e,t,n,s){super(e,t,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class kg extends an{constructor(e,t,n){super(e,t,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Nl=!1;class Ga{constructor({parent:e,autoPlace:t=e===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Nl&&a&&(function(c){const l=document.createElement("style");l.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(l,u):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Nl=!0),n?n.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,n,s,r){if(Object(n)===n)return new Gg(this,e,t,n);const a=e[t];switch(typeof a){case"number":return new Hg(this,e,t,n,s,r);case"boolean":return new Ug(this,e,t);case"string":return new kg(this,e,t);case"function":return new ea(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,n=1){return new zg(this,e,t,n)}addFolder(e){return new Ga({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(n=>{n instanceof ea||n._name in e.controllers&&n.load(e.controllers[n._name])}),t&&e.folders&&this.folders.forEach(n=>{n._title in e.folders&&n.load(e.folders[n._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ea)){if(n._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);t.controllers[n._name]=n.save()}}),e&&this.folders.forEach(n=>{if(n._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);t.folders[n._title]=n.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Ol=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))};try{URL.revokeObjectURL(Ol(""))}catch{Ol=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)}}var It=Uint8Array,Fn=Uint16Array,Ma=Uint32Array,Sc=new It([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bc=new It([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vg=new It([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ec=function(i,e){for(var t=new Fn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new Ma(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return[t,s]},Ac=Ec(Sc,2),Tc=Ac[0],Wg=Ac[1];Tc[28]=258,Wg[258]=28;var Xg=Ec(bc,0),qg=Xg[0],Sa=new Fn(32768);for(var Xe=0;Xe<32768;++Xe){var Un=(Xe&43690)>>>1|(Xe&21845)<<1;Un=(Un&52428)>>>2|(Un&13107)<<2,Un=(Un&61680)>>>4|(Un&3855)<<4,Sa[Xe]=((Un&65280)>>>8|(Un&255)<<8)>>>1}var is=function(i,e,t){for(var n=i.length,s=0,r=new Fn(e);s<n;++s)++r[i[s]-1];var a=new Fn(e);for(s=0;s<e;++s)a[s]=a[s-1]+r[s-1]<<1;var o;if(t){o=new Fn(1<<e);var c=15-e;for(s=0;s<n;++s)if(i[s])for(var l=s<<4|i[s],u=e-i[s],h=a[i[s]-1]++<<u,d=h|(1<<u)-1;h<=d;++h)o[Sa[h]>>>c]=l}else for(o=new Fn(n),s=0;s<n;++s)i[s]&&(o[s]=Sa[a[i[s]-1]++]>>>15-i[s]);return o},fs=new It(288);for(var Xe=0;Xe<144;++Xe)fs[Xe]=8;for(var Xe=144;Xe<256;++Xe)fs[Xe]=9;for(var Xe=256;Xe<280;++Xe)fs[Xe]=7;for(var Xe=280;Xe<288;++Xe)fs[Xe]=8;var wc=new It(32);for(var Xe=0;Xe<32;++Xe)wc[Xe]=5;var jg=is(fs,9,1),Yg=is(wc,5,1),ta=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Kt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},na=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},$g=function(i){return(i/8|0)+(i&7&&1)},Kg=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof Fn?Fn:i instanceof Ma?Ma:It)(t-e);return n.set(i.subarray(e,t)),n},Zg=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new It(0);var s=!e||t,r=!t||t.i;t||(t={}),e||(e=new It(n*3));var a=function(oe){var U=e.length;if(oe>U){var Me=new It(Math.max(U*2,oe));Me.set(e),e=Me}},o=t.f||0,c=t.p||0,l=t.b||0,u=t.l,h=t.d,d=t.m,p=t.n,g=n*8;do{if(!u){t.f=o=Kt(i,c,1);var _=Kt(i,c+1,3);if(c+=3,_)if(_==1)u=jg,h=Yg,d=9,p=5;else if(_==2){var v=Kt(i,c,31)+257,S=Kt(i,c+10,15)+4,M=v+Kt(i,c+5,31)+1;c+=14;for(var b=new It(M),w=new It(19),C=0;C<S;++C)w[Vg[C]]=Kt(i,c+C*3,7);c+=S*3;for(var x=ta(w),E=(1<<x)-1,N=is(w,x,1),C=0;C<M;){var F=N[Kt(i,c,E)];c+=F&15;var m=F>>>4;if(m<16)b[C++]=m;else{var P=0,O=0;for(m==16?(O=3+Kt(i,c,3),c+=2,P=b[C-1]):m==17?(O=3+Kt(i,c,7),c+=3):m==18&&(O=11+Kt(i,c,127),c+=7);O--;)b[C++]=P}}var z=b.subarray(0,v),q=b.subarray(v);d=ta(z),p=ta(q),u=is(z,d,1),h=is(q,p,1)}else throw"invalid block type";else{var m=$g(c)+4,f=i[m-4]|i[m-3]<<8,y=m+f;if(y>n){if(r)throw"unexpected EOF";break}s&&a(l+f),e.set(i.subarray(m,y),l),t.b=l+=f,t.p=c=y*8;continue}if(c>g){if(r)throw"unexpected EOF";break}}s&&a(l+131072);for(var k=(1<<d)-1,V=(1<<p)-1,Q=c;;Q=c){var P=u[na(i,c)&k],J=P>>>4;if(c+=P&15,c>g){if(r)throw"unexpected EOF";break}if(!P)throw"invalid length/literal";if(J<256)e[l++]=J;else if(J==256){Q=c,u=null;break}else{var _e=J-254;if(J>264){var C=J-257,ie=Sc[C];_e=Kt(i,c,(1<<ie)-1)+Tc[C],c+=ie}var W=h[na(i,c)&V],Z=W>>>4;if(!W)throw"invalid distance";c+=W&15;var q=qg[Z];if(Z>3){var ie=bc[Z];q+=na(i,c)&(1<<ie)-1,c+=ie}if(c>g){if(r)throw"unexpected EOF";break}s&&a(l+131072);for(var se=l+_e;l<se;l+=4)e[l]=e[l-q],e[l+1]=e[l+1-q],e[l+2]=e[l+2-q],e[l+3]=e[l+3-q];l=se}}t.l=u,t.p=Q,t.b=l,u&&(o=1,t.m=d,t.d=h,t.n=p)}while(!o);return l==e.length?e:Kg(e,0,l)},Jg=new It(0),Qg=function(i){if(i[0]!=31||i[1]!=139||i[2]!=8)throw"invalid gzip data";var e=i[3],t=10;e&4&&(t+=i[10]|(i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},e_=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0};function t_(i,e){return Zg(i.subarray(Qg(i),-8),e||new It(e_(i)))}var n_=typeof TextDecoder<"u"&&new TextDecoder,i_=0;try{n_.decode(Jg,{stream:!0}),i_=1}catch{}class s_{constructor(e,t,n){const s=this;this.volume=e,t=t||0,Object.defineProperty(this,"index",{get:function(){return t},set:function(o){return t=o,s.geometryNeedsUpdate=!0,t}}),this.axis=n||"z",this.canvas=document.createElement("canvas"),this.canvasBuffer=document.createElement("canvas"),this.updateGeometry();const r=new vt(this.canvas);r.minFilter=ut,r.wrapS=r.wrapT=kt;const a=new Fa({map:r,side:Gt,transparent:!0});this.mesh=new Ut(this.geometry,a),this.mesh.matrixAutoUpdate=!1,this.geometryNeedsUpdate=!0,this.repaint()}repaint(){this.geometryNeedsUpdate&&this.updateGeometry();const e=this.iLength,t=this.jLength,n=this.sliceAccess,s=this.volume,r=this.canvasBuffer,a=this.ctxBuffer,o=a.getImageData(0,0,e,t),c=o.data,l=s.data,u=s.upperThreshold,h=s.lowerThreshold,d=s.windowLow,p=s.windowHigh;let g=0;if(s.dataType==="label")for(let _=0;_<t;_++)for(let m=0;m<e;m++){let f=l[n(m,_)];f=f>=this.colorMap.length?f%this.colorMap.length+1:f;const y=this.colorMap[f];c[4*g]=y>>24&255,c[4*g+1]=y>>16&255,c[4*g+2]=y>>8&255,c[4*g+3]=y&255,g++}else for(let _=0;_<t;_++)for(let m=0;m<e;m++){let f=l[n(m,_)],y=255;y=u>=f&&h<=f?y:0,f=Math.floor(255*(f-d)/(p-d)),f=f>255?255:f<0?0:f|0,c[4*g]=f,c[4*g+1]=f,c[4*g+2]=f,c[4*g+3]=y,g++}a.putImageData(o,0,0),this.ctx.drawImage(r,0,0,e,t,0,0,this.canvas.width,this.canvas.height),this.mesh.material.map.needsUpdate=!0}updateGeometry(){const e=this.volume.extractPerpendicularPlane(this.axis,this.index);this.sliceAccess=e.sliceAccess,this.jLength=e.jLength,this.iLength=e.iLength,this.matrix=e.matrix,this.canvas.width=e.planeWidth,this.canvas.height=e.planeHeight,this.canvasBuffer.width=this.iLength,this.canvasBuffer.height=this.jLength,this.ctx=this.canvas.getContext("2d"),this.ctxBuffer=this.canvasBuffer.getContext("2d"),this.geometry&&this.geometry.dispose(),this.geometry=new cr(e.planeWidth,e.planeHeight),this.mesh&&(this.mesh.geometry=this.geometry,this.mesh.matrix.identity(),this.mesh.applyMatrix4(this.matrix)),this.geometryNeedsUpdate=!1}}class r_{constructor(e,t,n,s,r){if(e!==void 0){switch(this.xLength=Number(e)||1,this.yLength=Number(t)||1,this.zLength=Number(n)||1,this.axisOrder=["x","y","z"],s){case"Uint8":case"uint8":case"uchar":case"unsigned char":case"uint8_t":this.data=new Uint8Array(r);break;case"Int8":case"int8":case"signed char":case"int8_t":this.data=new Int8Array(r);break;case"Int16":case"int16":case"short":case"short int":case"signed short":case"signed short int":case"int16_t":this.data=new Int16Array(r);break;case"Uint16":case"uint16":case"ushort":case"unsigned short":case"unsigned short int":case"uint16_t":this.data=new Uint16Array(r);break;case"Int32":case"int32":case"int":case"signed int":case"int32_t":this.data=new Int32Array(r);break;case"Uint32":case"uint32":case"uint":case"unsigned int":case"uint32_t":this.data=new Uint32Array(r);break;case"longlong":case"long long":case"long long int":case"signed long long":case"signed long long int":case"int64":case"int64_t":case"ulonglong":case"unsigned long long":case"unsigned long long int":case"uint64":case"uint64_t":throw new Error("Error in Volume constructor : this type is not supported in JavaScript");case"Float32":case"float32":case"float":this.data=new Float32Array(r);break;case"Float64":case"float64":case"double":this.data=new Float64Array(r);break;default:this.data=new Uint8Array(r)}if(this.data.length!==this.xLength*this.yLength*this.zLength)throw new Error("Error in Volume constructor, lengths are not matching arrayBuffer size")}this.spacing=[1,1,1],this.offset=[0,0,0],this.matrix=new Ne,this.matrix.identity();let a=-1/0;Object.defineProperty(this,"lowerThreshold",{get:function(){return a},set:function(c){a=c,this.sliceList.forEach(function(l){l.geometryNeedsUpdate=!0})}});let o=1/0;Object.defineProperty(this,"upperThreshold",{get:function(){return o},set:function(c){o=c,this.sliceList.forEach(function(l){l.geometryNeedsUpdate=!0})}}),this.sliceList=[],this.segmentation=!1}getData(e,t,n){return this.data[n*this.xLength*this.yLength+t*this.xLength+e]}access(e,t,n){return n*this.xLength*this.yLength+t*this.xLength+e}reverseAccess(e){const t=Math.floor(e/(this.yLength*this.xLength)),n=Math.floor((e-t*this.yLength*this.xLength)/this.xLength);return[e-t*this.yLength*this.xLength-n*this.xLength,n,t]}map(e,t){const n=this.data.length;t=t||this;for(let s=0;s<n;s++)this.data[s]=e.call(t,this.data[s],s,this.data);return this}extractPerpendicularPlane(e,t){let n,s,r,a;const o=new L,c=new L,l=new L,u=new we().identity(),h=this,d=new L(this.xLength,this.yLength,this.zLength);switch(e){case"x":o.set(1,0,0),c.set(0,0,-1),l.set(0,-1,0),n=this.spacing[this.axisOrder.indexOf("z")],s=this.spacing[this.axisOrder.indexOf("y")],a=new L(t,0,0),u.multiply(new we().makeRotationY(Math.PI/2)),r=(h.RASDimensions[0]-1)/2,u.setPosition(new L(t-r,0,0));break;case"y":o.set(0,1,0),c.set(1,0,0),l.set(0,0,1),n=this.spacing[this.axisOrder.indexOf("x")],s=this.spacing[this.axisOrder.indexOf("z")],a=new L(0,t,0),u.multiply(new we().makeRotationX(-Math.PI/2)),r=(h.RASDimensions[1]-1)/2,u.setPosition(new L(0,t-r,0));break;case"z":default:o.set(0,0,1),c.set(1,0,0),l.set(0,-1,0),n=this.spacing[this.axisOrder.indexOf("x")],s=this.spacing[this.axisOrder.indexOf("y")],a=new L(0,0,t),r=(h.RASDimensions[2]-1)/2,u.setPosition(new L(0,0,t-r));break}let p,g;this.segmentation||(c.applyMatrix4(h.inverseMatrix).normalize(),l.applyMatrix4(h.inverseMatrix).normalize(),o.applyMatrix4(h.inverseMatrix).normalize()),c.arglet="i",l.arglet="j",p=Math.floor(Math.abs(c.dot(d))),g=Math.floor(Math.abs(l.dot(d)));const _=Math.abs(p*n),m=Math.abs(g*s);a=Math.abs(Math.round(a.applyMatrix4(h.inverseMatrix).dot(o)));const f=[new L(1,0,0),new L(0,1,0),new L(0,0,1)],y=[c,l,o].find(function(b){return Math.abs(b.dot(f[0]))>.9}),v=[c,l,o].find(function(b){return Math.abs(b.dot(f[1]))>.9}),S=[c,l,o].find(function(b){return Math.abs(b.dot(f[2]))>.9});function M(b,w){const C=y===o?a:y.arglet==="i"?b:w,x=v===o?a:v.arglet==="i"?b:w,E=S===o?a:S.arglet==="i"?b:w,N=y.dot(f[0])>0?C:h.xLength-1-C,F=v.dot(f[1])>0?x:h.yLength-1-x,P=S.dot(f[2])>0?E:h.zLength-1-E;return h.access(N,F,P)}return{iLength:p,jLength:g,sliceAccess:M,matrix:u,planeWidth:_,planeHeight:m}}extractSlice(e,t){const n=new s_(this,t,e);return this.sliceList.push(n),n}repaintAllSlices(){return this.sliceList.forEach(function(e){e.repaint()}),this}computeMinMax(){let e=1/0,t=-1/0;const n=this.data.length;let s=0;for(s=0;s<n;s++)if(!isNaN(this.data[s])){const r=this.data[s];e=Math.min(e,r),t=Math.max(t,r)}return this.min=e,this.max=t,[e,t]}}class a_ extends ds{constructor(e){super(e)}load(e,t,n,s){const r=this,a=new mc(r.manager);a.setPath(r.path),a.setResponseType("arraybuffer"),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(o))}catch(c){s?s(c):console.error(c),r.manager.itemError(e)}},n,s)}setSegmentation(e){this.segmentation=e}parse(e){let t=e,n=0;const s=new Int8Array(new Int16Array([1]).buffer)[0]>0,r=!0,a={};function o(C,x){x==null&&(x=1);let E=1,N=Uint8Array;switch(C){case"uchar":break;case"schar":N=Int8Array;break;case"ushort":N=Uint16Array,E=2;break;case"sshort":N=Int16Array,E=2;break;case"uint":N=Uint32Array,E=4;break;case"sint":N=Int32Array,E=4;break;case"float":N=Float32Array,E=4;break;case"complex":N=Float64Array,E=8;break;case"double":N=Float64Array,E=8;break}let F=new N(t.slice(n,n+=x*E));return s!=r&&(F=c(F,E)),x==1?F[0]:F}function c(C,x){const E=new Uint8Array(C.buffer,C.byteOffset,C.byteLength);for(let N=0;N<C.byteLength;N+=x)for(let F=N+x-1,P=N;F>P;F--,P++){const O=E[P];E[P]=E[F],E[F]=O}return C}function l(C){let x,E,N,F,P,O,z,q;const k=C.split(/\r?\n/);for(z=0,q=k.length;z<q;z++)P=k[z],P.match(/NRRD\d+/)?a.isNrrd=!0:!P.match(/^#/)&&(O=P.match(/(.*):(.*)/))&&(E=O[1].trim(),x=O[2].trim(),N=o_[E],N?N.call(a,x):a[E]=x);if(!a.isNrrd)throw new Error("Not an NRRD file");if(a.encoding==="bz2"||a.encoding==="bzip2")throw new Error("Bzip is not supported");if(!a.vectors&&(a.vectors=[],a.vectors.push([1,0,0]),a.vectors.push([0,1,0]),a.vectors.push([0,0,1]),a.spacings)){for(F=0;F<=2;F++)if(!isNaN(a.spacings[F]))for(let V=0;V<=2;V++)a.vectors[F][V]*=a.spacings[F]}}function u(C,x,E){let N="";x=x||0,E=E||C.length;let F;const P=a.sizes.reduce(function(V,Q){return V*Q},1);let O=10;a.encoding==="hex"&&(O=16);const z=new a.__array(P);let q=0,k=parseInt;(a.__array===Float32Array||a.__array===Float64Array)&&(k=parseFloat);for(let V=x;V<E;V++)F=C[V],(F<9||F>13)&&F!==32?N+=String.fromCharCode(F):(N!==""&&(z[q]=k(N,O),q++),N="");return N!==""&&(z[q]=k(N,O),q++),z}const h=o("uchar",e.byteLength),d=h.length;let p=null,g=0,_;for(_=1;_<d;_++)if(h[_-1]==10&&h[_]==10){p=this.parseChars(h,0,_-2),g=_+1;break}if(l(p),t=h.subarray(g),a.encoding.substring(0,2)==="gz")t=t_(new Uint8Array(t));else if(a.encoding==="ascii"||a.encoding==="text"||a.encoding==="txt"||a.encoding==="hex")t=u(t);else if(a.encoding==="raw"){const C=new Uint8Array(t.length);for(let x=0;x<t.length;x++)C[x]=t[x];t=C}t=t.buffer;const m=new r_;m.header=a,m.segmentation=this.segmentation,m.data=new a.__array(t);const f=m.computeMinMax(),y=f[0],v=f[1];if(m.windowLow=y,m.windowHigh=v,m.dimensions=[a.sizes[0],a.sizes[1],a.sizes[2]],m.xLength=m.dimensions[0],m.yLength=m.dimensions[1],m.zLength=m.dimensions[2],a.vectors){const C=a.vectors.findIndex(F=>F[0]!==0),x=a.vectors.findIndex(F=>F[1]!==0),E=a.vectors.findIndex(F=>F[2]!==0),N=[];C!==x&&C!==E&&x!==E?(N[C]="x",N[x]="y",N[E]="z"):(N[0]="x",N[1]="y",N[2]="z"),m.axisOrder=N}else m.axisOrder=["x","y","z"];const S=new L().fromArray(a.vectors[0]).length(),M=new L().fromArray(a.vectors[1]).length(),b=new L().fromArray(a.vectors[2]).length();m.spacing=[S,M,b],m.matrix=new we;const w=new we;if(a.space==="left-posterior-superior"?w.set(-1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1):a.space==="left-anterior-superior"&&w.set(1,0,0,0,0,1,0,0,0,0,-1,0,0,0,0,1),!a.vectors)m.matrix.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);else{const C=a.vectors,x=new we().set(C[0][0],C[1][0],C[2][0],0,C[0][1],C[1][1],C[2][1],0,C[0][2],C[1][2],C[2][2],0,0,0,0,1),E=new we().multiplyMatrices(x,w);m.matrix=E}return m.inverseMatrix=new we,m.inverseMatrix.copy(m.matrix).invert(),m.RASDimensions=[Math.floor(m.xLength*S),Math.floor(m.yLength*M),Math.floor(m.zLength*b)],m.lowerThreshold===-1/0&&(m.lowerThreshold=y),m.upperThreshold===1/0&&(m.upperThreshold=v),m}parseChars(e,t,n){t===void 0&&(t=0),n===void 0&&(n=e.length);let s="",r=0;for(r=t;r<n;++r)s+=String.fromCharCode(e[r]);return s}}const o_={type:function(i){switch(i){case"uchar":case"unsigned char":case"uint8":case"uint8_t":this.__array=Uint8Array;break;case"signed char":case"int8":case"int8_t":this.__array=Int8Array;break;case"short":case"short int":case"signed short":case"signed short int":case"int16":case"int16_t":this.__array=Int16Array;break;case"ushort":case"unsigned short":case"unsigned short int":case"uint16":case"uint16_t":this.__array=Uint16Array;break;case"int":case"signed int":case"int32":case"int32_t":this.__array=Int32Array;break;case"uint":case"unsigned int":case"uint32":case"uint32_t":this.__array=Uint32Array;break;case"float":this.__array=Float32Array;break;case"double":this.__array=Float64Array;break;default:throw new Error("Unsupported NRRD data type: "+i)}return this.type=i},endian:function(i){return this.endian=i},encoding:function(i){return this.encoding=i},dimension:function(i){return this.dim=parseInt(i,10)},sizes:function(i){let e;return this.sizes=function(){const t=i.split(/\s+/),n=[];for(let s=0,r=t.length;s<r;s++)e=t[s],n.push(parseInt(e,10));return n}()},space:function(i){return this.space=i},"space origin":function(i){return this.space_origin=i.split("(")[1].split(")")[0].split(",")},"space directions":function(i){let e,t;const n=i.match(/\(.*?\)/g);return this.vectors=function(){const s=[];for(let r=0,a=n.length;r<a;r++)t=n[r],s.push(function(){const o=t.slice(1,-1).split(/,/),c=[];for(let l=0,u=o.length;l<u;l++)e=o[l],c.push(parseFloat(e));return c}());return s}()},spacings:function(i){let e;const t=i.split(/\s+/);return this.spacings=function(){const n=[];for(let s=0,r=t.length;s<r;s++)e=t[s],n.push(parseFloat(e));return n}()}},Bl={type:"change"},ia={type:"start"},zl={type:"end"};class l_ extends ni{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:si.ROTATE,TWO:si.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",We),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",We),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Bl),n.update(),r=s.NONE},this.update=function(){const D=new L,K=new Hn().setFromUnitVectors(e.up,new L(0,1,0)),G=K.clone().invert(),ce=new L,de=new Hn,pe=2*Math.PI;return function(){const fe=n.object.position;D.copy(fe).sub(n.target),D.applyQuaternion(K),o.setFromVector3(D),n.autoRotate&&r===s.NONE&&x(w()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Ee=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;return isFinite(Ee)&&isFinite(Pe)&&(Ee<-Math.PI?Ee+=pe:Ee>Math.PI&&(Ee-=pe),Pe<-Math.PI?Pe+=pe:Pe>Math.PI&&(Pe-=pe),Ee<=Pe?o.theta=Math.max(Ee,Math.min(Pe,o.theta)):o.theta=o.theta>(Ee+Pe)/2?Math.max(Ee,o.theta):Math.min(Pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),D.setFromSpherical(o),D.applyQuaternion(G),fe.copy(n.target).add(D),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,h||ce.distanceToSquared(n.object.position)>a||8*(1-de.dot(n.object.quaternion))>a?(n.dispatchEvent(Bl),ce.copy(n.object.position),de.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",A),n.domElement.removeEventListener("pointerdown",Re),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",Be),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",We),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new vl,c=new vl;let l=1;const u=new L;let h=!1;const d=new be,p=new be,g=new be,_=new be,m=new be,f=new be,y=new be,v=new be,S=new be,M=[],b={};function w(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function x(D){c.theta-=D}function E(D){c.phi-=D}const N=function(){const D=new L;return function(G,ce){D.setFromMatrixColumn(ce,0),D.multiplyScalar(-G),u.add(D)}}(),F=function(){const D=new L;return function(G,ce){n.screenSpacePanning===!0?D.setFromMatrixColumn(ce,1):(D.setFromMatrixColumn(ce,0),D.crossVectors(n.object.up,D)),D.multiplyScalar(G),u.add(D)}}(),P=function(){const D=new L;return function(G,ce){const de=n.domElement;if(n.object.isPerspectiveCamera){const pe=n.object.position;D.copy(pe).sub(n.target);let ue=D.length();ue*=Math.tan(n.object.fov/2*Math.PI/180),N(2*G*ue/de.clientHeight,n.object.matrix),F(2*ce*ue/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(G*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),F(ce*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(D){n.object.isPerspectiveCamera?l/=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function z(D){n.object.isPerspectiveCamera?l*=D:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/D)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(D){d.set(D.clientX,D.clientY)}function k(D){y.set(D.clientX,D.clientY)}function V(D){_.set(D.clientX,D.clientY)}function Q(D){p.set(D.clientX,D.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const K=n.domElement;x(2*Math.PI*g.x/K.clientHeight),E(2*Math.PI*g.y/K.clientHeight),d.copy(p),n.update()}function J(D){v.set(D.clientX,D.clientY),S.subVectors(v,y),S.y>0?O(C()):S.y<0&&z(C()),y.copy(v),n.update()}function _e(D){m.set(D.clientX,D.clientY),f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m),n.update()}function ie(D){D.deltaY<0?z(C()):D.deltaY>0&&O(C()),n.update()}function W(D){let K=!1;switch(D.code){case n.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,n.keyPanSpeed),K=!0;break;case n.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(0,-n.keyPanSpeed),K=!0;break;case n.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?x(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(n.keyPanSpeed,0),K=!0;break;case n.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?x(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):P(-n.keyPanSpeed,0),K=!0;break}K&&(D.preventDefault(),n.update())}function Z(){if(M.length===1)d.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);d.set(D,K)}}function se(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const D=.5*(M[0].pageX+M[1].pageX),K=.5*(M[0].pageY+M[1].pageY);_.set(D,K)}}function oe(){const D=M[0].pageX-M[1].pageX,K=M[0].pageY-M[1].pageY,G=Math.sqrt(D*D+K*K);y.set(0,G)}function U(){n.enableZoom&&oe(),n.enablePan&&se()}function Me(){n.enableZoom&&oe(),n.enableRotate&&Z()}function Se(D){if(M.length==1)p.set(D.pageX,D.pageY);else{const G=le(D),ce=.5*(D.pageX+G.x),de=.5*(D.pageY+G.y);p.set(ce,de)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);const K=n.domElement;x(2*Math.PI*g.x/K.clientHeight),E(2*Math.PI*g.y/K.clientHeight),d.copy(p)}function re(D){if(M.length===1)m.set(D.pageX,D.pageY);else{const K=le(D),G=.5*(D.pageX+K.x),ce=.5*(D.pageY+K.y);m.set(G,ce)}f.subVectors(m,_).multiplyScalar(n.panSpeed),P(f.x,f.y),_.copy(m)}function xe(D){const K=le(D),G=D.pageX-K.x,ce=D.pageY-K.y,de=Math.sqrt(G*G+ce*ce);v.set(0,de),S.set(0,Math.pow(v.y/y.y,n.zoomSpeed)),O(S.y),y.copy(v)}function ze(D){n.enableZoom&&xe(D),n.enablePan&&re(D)}function ge(D){n.enableZoom&&xe(D),n.enableRotate&&Se(D)}function Re(D){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(D.pointerId),n.domElement.addEventListener("pointermove",$e),n.domElement.addEventListener("pointerup",je)),X(D),D.pointerType==="touch"?ht(D):Qe(D))}function $e(D){n.enabled!==!1&&(D.pointerType==="touch"?R(D):Ke(D))}function je(D){ee(D),M.length===0&&(n.domElement.releasePointerCapture(D.pointerId),n.domElement.removeEventListener("pointermove",$e),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(zl),r=s.NONE}function Qe(D){let K;switch(D.button){case 0:K=n.mouseButtons.LEFT;break;case 1:K=n.mouseButtons.MIDDLE;break;case 2:K=n.mouseButtons.RIGHT;break;default:K=-1}switch(K){case ii.DOLLY:if(n.enableZoom===!1)return;k(D),r=s.DOLLY;break;case ii.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enablePan===!1)return;V(D),r=s.PAN}else{if(n.enableRotate===!1)return;q(D),r=s.ROTATE}break;case ii.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(n.enableRotate===!1)return;q(D),r=s.ROTATE}else{if(n.enablePan===!1)return;V(D),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ia)}function Ke(D){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(D);break;case s.DOLLY:if(n.enableZoom===!1)return;J(D);break;case s.PAN:if(n.enablePan===!1)return;_e(D);break}}function Be(D){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(D.preventDefault(),n.dispatchEvent(ia),ie(D),n.dispatchEvent(zl))}function We(D){n.enabled===!1||n.enablePan===!1||W(D)}function ht(D){switch(ne(D),M.length){case 1:switch(n.touches.ONE){case si.ROTATE:if(n.enableRotate===!1)return;Z(),r=s.TOUCH_ROTATE;break;case si.PAN:if(n.enablePan===!1)return;se(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case si.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(),r=s.TOUCH_DOLLY_PAN;break;case si.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Me(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ia)}function R(D){switch(ne(D),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Se(D),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;re(D),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ze(D),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(D),n.update();break;default:r=s.NONE}}function A(D){n.enabled!==!1&&D.preventDefault()}function X(D){M.push(D)}function ee(D){delete b[D.pointerId];for(let K=0;K<M.length;K++)if(M[K].pointerId==D.pointerId){M.splice(K,1);return}}function ne(D){let K=b[D.pointerId];K===void 0&&(K=new be,b[D.pointerId]=K),K.set(D.pageX,D.pageY)}function le(D){const K=D.pointerId===M[0].pointerId?M[1]:M[0];return b[K.pointerId]}n.domElement.addEventListener("contextmenu",A),n.domElement.addEventListener("pointerdown",Re),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",Be,{passive:!1}),this.update()}}function c_(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Rt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,u),l+=p}}if(t){let u=0;const h=[];for(let d=0;d<i.length;++d){const p=i[d].index;for(let g=0;g<p.count;++g)h.push(p.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Hl(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in a){const h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){const p=[];for(let _=0;_<a[u].length;++_)p.push(a[u][_][d]);const g=Hl(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Hl(i){let e,t,n,s=0;for(let o=0;o<i.length;++o){const c=i[o];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;s+=c.array.length}const r=new e(s);let a=0;for(let o=0;o<i.length;++o)r.set(i[o].array,a),a+=i[o].array.length;return new wt(r,t,n)}class u_ extends Jt{constructor(e){super({uniforms:{matrix:{value:new we},zValue:{value:0},bvh:{value:new bg}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}
			`,fragmentShader:`
        precision highp isampler2D;
        precision highp usampler2D;
        ${Eg}
				${Ag}
				${Tg}
				varying vec2 vUv;
        uniform BVH bvh;
				uniform float zValue;
				uniform mat4 matrix;
				void main() {
          // compute the point in space to check
          vec3 point = vec3( vUv, zValue );
          point -= vec3( 0.5 );
          point = ( matrix * vec4( point, 1.0 ) ).xyz;
          // retrieve the distance and other values
          uvec4 faceIndices;
          vec3 faceNormal;
          vec3 barycoord;
          float side;
          vec3 outPoint;
          float dist = bvhClosestPointToPoint( bvh, point.xyz, faceIndices, faceNormal, barycoord, side, outPoint );
          // if the triangle side is the back then it must be on the inside and the value negative
          gl_FragColor = vec4( dist, 0, 0, 0 );
          // gl_FragColor = vec4( side * dist, 0, 0, 0 );
				}
			`}),this.setValues(e)}}class h_ extends Jt{constructor(e){super({defines:{DISPLAY_GRID:0},uniforms:{inverse:{value:!1},surface:{value:0},voldata:{value:null},sdfTex:{value:null},cmdata:{value:null},layer:{value:0},volumeAspect:{value:0},screenAspect:{value:0},clim:{value:new be}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = vec2(uv.x, 1.0 - uv.y);
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}
			`,fragmentShader:`
        precision highp sampler3D;
				varying vec2 vUv;
        uniform vec2 clim;
        uniform sampler3D voldata;
        uniform sampler3D sdfTex;
        uniform sampler2D cmdata;
        uniform float layer;
        uniform float volumeAspect;
        uniform float screenAspect;
        uniform float surface;
        uniform bool inverse;

        vec4 apply_colormap(float val) {
          val = (val - clim[0]) / (clim[1] - clim[0]);
          return texture2D(cmdata, vec2(val, 0.5));
        }

				void main() {
          float r = screenAspect / volumeAspect;

          #if DISPLAY_GRID
          float dimH = 5.0;
          float dimW = floor(r * dimH);

          float aspect = r / (dimW / dimH);
          vec2 uv = vec2( (vUv.x - 0.5) * aspect, (vUv.y - 0.5)) + vec2(0.5);
          if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 ) return;

					vec2 cell = floor( uv * vec2(dimW, dimH) );
					vec2 frac = uv * vec2(dimW, dimH) - cell;
					float zLayer = ( cell.y * dimW + cell.x ) / ( dimH * dimW );

					float dist = texture( sdfTex, vec3( frac, zLayer ) ).r - surface;
          float intensity = texture( voldata, vec3( frac, zLayer ) ).r;

          gl_FragColor = apply_colormap(intensity);
          if (frac.x < 0.01 || frac.y < 0.01) gl_FragColor = vec4(0, 0, 0, 1.0);

          if (inverse && dist > 0.0) gl_FragColor = vec4(0, 0, 0, 0.0);
          if (!inverse && dist < 0.0) gl_FragColor = vec4(0, 0, 0, 0.0);
          #else
          float aspect = r;
          vec2 uv = vec2( (vUv.x - 0.5) * aspect, (vUv.y - 0.5)) + vec2(0.5);
          if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 ) return;

          float dist = texture( sdfTex, vec3( uv, layer ) ).r - surface;
          float intensity = texture( voldata, vec3( uv, layer ) ).r;

          gl_FragColor = apply_colormap(intensity);

          if (inverse && dist > 0.0) gl_FragColor = vec4(0, 0, 0, 0.0);
          if (!inverse && dist < 0.0) gl_FragColor = vec4(0, 0, 0, 0.0);
          #endif
          #include <encodings_fragment>
				}
			`}),this.setValues(e)}}class d_ extends Jt{constructor(e){super({defines:{MAX_STEPS:500,SURFACE_EPSILON:.001},uniforms:{surface:{value:0},sdfTex:{value:null},normalStep:{value:new L},projectionInverse:{value:new we},sdfTransformInverse:{value:new we}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}
			`,fragmentShader:`
        precision highp sampler3D;
				varying vec2 vUv;
        uniform float surface;
				uniform sampler3D sdfTex;
				uniform vec3 normalStep;
				uniform mat4 projectionInverse;
				uniform mat4 sdfTransformInverse;
        #include <common>
				#include <packing>

        // distance to box bounds
				vec2 rayBoxDist( vec3 boundsMin, vec3 boundsMax, vec3 rayOrigin, vec3 rayDir ) {
					vec3 t0 = ( boundsMin - rayOrigin ) / rayDir;
					vec3 t1 = ( boundsMax - rayOrigin ) / rayDir;
					vec3 tmin = min( t0, t1 );
					vec3 tmax = max( t0, t1 );
					float distA = max( max( tmin.x, tmin.y ), tmin.z );
					float distB = min( tmax.x, min( tmax.y, tmax.z ) );
					float distToBox = max( 0.0, distA );
					float distInsideBox = max( 0.0, distB - distToBox );
					return vec2( distToBox, distInsideBox );
				}

				void main() {
          float fragCoordZ = -1.;

          // get the inverse of the sdf box transform
					mat4 sdfTransform = inverse( sdfTransformInverse );
          // convert the uv to clip space for ray transformation
					vec2 clipSpace = 2.0 * vUv - vec2( 1.0 );
          // get world ray direction
					vec3 rayOrigin = vec3( 0.0 );
          vec4 homogenousDirection = projectionInverse * vec4( clipSpace, - 1.0, 1.0 );
          vec3 rayDirection = normalize( homogenousDirection.xyz / homogenousDirection.w );
          // transform ray into local coordinates of sdf bounds
          vec3 sdfRayOrigin = ( sdfTransformInverse * vec4( rayOrigin, 1.0 ) ).xyz;
          vec3 sdfRayDirection = normalize( ( sdfTransformInverse * vec4( rayDirection, 0.0 ) ).xyz );
          // find whether our ray hits the box bounds in the local box space
          vec2 boxIntersectionInfo = rayBoxDist( vec3( - 0.5 ), vec3( 0.5 ), sdfRayOrigin, sdfRayDirection );
          float distToBox = boxIntersectionInfo.x;
          float distInsideBox = boxIntersectionInfo.y;
					bool intersectsBox = distInsideBox > 0.0;
					gl_FragColor = vec4( 0.0 );

          if ( intersectsBox ) {
            // find the surface point in world space
            bool intersectsSurface = false;
            vec4 localPoint = vec4( sdfRayOrigin + sdfRayDirection * ( distToBox + 1e-5 ), 1.0 );
            vec4 point = sdfTransform * localPoint;
            // ray march
            for ( int i = 0; i < MAX_STEPS; i ++ ) {
              // sdf box extends from - 0.5 to 0.5
              // transform into the local bounds space [ 0, 1 ] and check if we're inside the bounds
              vec3 uv = ( sdfTransformInverse * point ).xyz + vec3( 0.5 );
              if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 || uv.z < 0.0 || uv.z > 1.0 ) {
								break;
							}
              // get the distance to surface and exit the loop if we're close to the surface
              float distanceToSurface = texture2D( sdfTex, uv ).r - surface;
              if ( distanceToSurface < SURFACE_EPSILON ) {
								intersectsSurface = true;
								break;
							}
              // step the ray
							point.xyz += rayDirection * abs( distanceToSurface );
            }
            // find the surface normal
            if ( intersectsSurface ) {
              gl_FragColor = vec4(1.0);
            }
						// if ( intersectsSurface ) {
            if ( false ) {
              fragCoordZ = -point.z;

              // compute the surface normal (performance bottleneck)
              vec3 uv = ( sdfTransformInverse * point ).xyz + vec3( 0.5 );
                           vec2 k = vec2(1, - 1);
              vec3 normal = normalize( k.xyy * texture( sdfTex, uv + k.xyy * normalStep.x ).r + 
                                       k.yyx * texture( sdfTex, uv + k.yyx * normalStep.x ).r + 
                                       k.yxy * texture( sdfTex, uv + k.yxy * normalStep.x ).r + 
                                       k.xxx * texture( sdfTex, uv + k.xxx * normalStep.x ).r );
              // compute some basic lighting effects
              vec3 lightDirection = normalize( vec3( 1.0 ) );
              float lightIntensity =
                saturate( dot( normal, lightDirection ) ) +
                saturate( dot( normal, - lightDirection ) ) * 0.05 +
                0.1;
              gl_FragColor.rgb = vec3( lightIntensity );
              gl_FragColor.a = 1.0;
            }
          }

          float cameraNear = 0.1;
					float cameraFar = 5.0;
					gl_FragDepth = viewZToPerspectiveDepth(-fragCoordZ, cameraNear, cameraFar);

          #include <encodings_fragment>
				}
			`}),this.setValues(e)}}class f_ extends Jt{constructor(e){super({defines:{MAX_STEPS:887,REFINEMENT_STEPS:4,SURFACE_EPSILON:.001},uniforms:{surface:{value:0},sdfTex:{value:null},voldata:{value:null},cmdata:{value:null},size:{value:new L},clim:{value:new be},renderthreshold:{value:0},renderstyle:{value:0},projectionInverse:{value:new we},sdfTransformInverse:{value:new we}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}
			`,fragmentShader:`
        precision highp sampler3D;
				varying vec2 vUv;
        uniform vec2 clim;
        uniform vec3 size;
        uniform sampler3D sdfTex;
        uniform sampler3D voldata;
        uniform sampler2D cmdata;
        uniform mat4 projectionInverse;
				uniform mat4 sdfTransformInverse;
        uniform float renderthreshold;
        uniform float surface;
        uniform int renderstyle;

        const float relative_step_size = 1.0;
        const vec4 ambient_color = vec4(0.2, 0.4, 0.2, 1.0);
        const vec4 diffuse_color = vec4(0.8, 0.2, 0.2, 1.0);
        const vec4 specular_color = vec4(1.0, 1.0, 1.0, 1.0);
        const float shininess = 40.0;

        void cast_mip(vec3 start_loc, vec3 step, int nsteps, vec3 view_ray);
        void cast_iso(vec3 start_loc, vec3 step, int nsteps, vec3 view_ray);

        float sample1(vec3 texcoords);
        vec4 apply_colormap(float val);
        vec4 add_lighting(float val, vec3 loc, vec3 step, vec3 view_ray);

        // distance to box bounds
				vec2 rayBoxDist( vec3 boundsMin, vec3 boundsMax, vec3 rayOrigin, vec3 rayDir ) {
					vec3 t0 = ( boundsMin - rayOrigin ) / rayDir;
					vec3 t1 = ( boundsMax - rayOrigin ) / rayDir;
					vec3 tmin = min( t0, t1 );
					vec3 tmax = max( t0, t1 );
					float distA = max( max( tmin.x, tmin.y ), tmin.z );
					float distB = min( tmax.x, min( tmax.y, tmax.z ) );
					float distToBox = max( 0.0, distA );
					float distInsideBox = max( 0.0, distB - distToBox );
					return vec2( distToBox, distInsideBox );
				}

				void main() {
          float fragCoordZ = -1.;

          // get the inverse of the sdf box transform
					mat4 sdfTransform = inverse( sdfTransformInverse );
          // convert the uv to clip space for ray transformation
					vec2 clipSpace = 2.0 * vUv - vec2( 1.0 );
          // get world ray direction
					vec3 rayOrigin = vec3( 0.0 );
          vec4 homogenousDirection = projectionInverse * vec4( clipSpace, - 1.0, 1.0 );
          vec3 rayDirection = normalize( homogenousDirection.xyz / homogenousDirection.w );
          // transform ray into local coordinates of sdf bounds
          vec3 sdfRayOrigin = ( sdfTransformInverse * vec4( rayOrigin, 1.0 ) ).xyz;
          vec3 sdfRayDirection = normalize( ( sdfTransformInverse * vec4( rayDirection, 0.0 ) ).xyz );
          // find whether our ray hits the box bounds in the local box space
          vec2 boxIntersectionInfo = rayBoxDist( vec3( - 0.5 ), vec3( 0.5 ), sdfRayOrigin, sdfRayDirection );
          float distToBox = boxIntersectionInfo.x;
          float distInsideBox = boxIntersectionInfo.y;
					bool intersectsBox = distInsideBox > 0.0;
					gl_FragColor = vec4( 0.0 );

          if ( intersectsBox ) {
            // Decide how many steps to take
            int nsteps = int(boxIntersectionInfo.y * size.x / relative_step_size + 0.5);
            if ( nsteps < 1 ) discard;

            bool intersectsSurface = false;
            vec4 boxNearPoint = vec4( sdfRayOrigin + sdfRayDirection * ( distToBox + 1e-5 ), 1.0 );
            vec4 boxFarPoint = vec4( sdfRayOrigin + sdfRayDirection * ( distToBox + distInsideBox - 1e-5 ), 1.0 );
            vec4 nearPoint = sdfTransform * boxNearPoint;
            vec4 farPoint = sdfTransform * boxFarPoint;

            // For testing: show the number of steps. This helps to establish whether the rays are correctly oriented
            // gl_FragColor = vec4(0.0, float(nsteps) / size.x, 1.0, 1.0);
            // return;

            // ray march (near -> surface)
            for ( int i = 0; i < MAX_STEPS; i ++ ) {
              // sdf box extends from - 0.5 to 0.5
              // transform into the local bounds space [ 0, 1 ] and check if we're inside the bounds
              vec3 uv = ( sdfTransformInverse * nearPoint ).xyz + vec3( 0.5 );
              if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 || uv.z < 0.0 || uv.z > 1.0 ) {
                break;
              }
              // get the distance to surface and exit the loop if we're close to the surface
              float distanceToSurface = texture2D( sdfTex, uv ).r - surface;
              if ( distanceToSurface < SURFACE_EPSILON ) {
                intersectsSurface = true;
                break;
              }
              // step the ray
              nearPoint.xyz += rayDirection * abs( distanceToSurface );
            }

            // ray march (far -> surface)
            for ( int i = 0; i < MAX_STEPS; i ++ ) {
              // sdf box extends from - 0.5 to 0.5
              // transform into the local bounds space [ 0, 1 ] and check if we're inside the bounds
              vec3 uv = ( sdfTransformInverse * farPoint ).xyz + vec3( 0.5 );
              if ( uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0 || uv.z < 0.0 || uv.z > 1.0 ) {
                break;
              }
              // get the distance to surface and exit the loop if we're close to the surface
              float distanceToSurface = texture2D( sdfTex, uv ).r - surface;
              if ( distanceToSurface < SURFACE_EPSILON ) {
                intersectsSurface = true;
                break;
              }
              // step the ray
              farPoint.xyz -= rayDirection * abs( distanceToSurface );
            }

            // volume rendering
            if ( intersectsSurface ) {
              float thickness = length((sdfTransformInverse * (farPoint - nearPoint)).xyz);
              int nsteps = int(thickness * size.x / relative_step_size + 0.5);
              if ( nsteps < 1 ) discard;

              vec3 step = sdfRayDirection * thickness / float(nsteps);
              vec3 uv = (sdfTransformInverse * nearPoint).xyz + vec3( 0.5 );

              if (renderstyle == 0)
                cast_mip(uv, step, nsteps, sdfRayDirection);
              else if (renderstyle == 1)
                cast_iso(uv, step, nsteps, sdfRayDirection);
            }

            if (gl_FragColor.a < 0.05)
             discard;
          }
				}

        float sample1(vec3 texcoords) {
          /* Sample float value from a 3D texture. Assumes intensity data. */
          return texture(voldata, texcoords.xyz).r;
        }

        vec4 apply_colormap(float val) {
          val = (val - clim[0]) / (clim[1] - clim[0]);
          return texture2D(cmdata, vec2(val, 0.5));
        }

        void cast_mip(vec3 start_loc, vec3 step, int nsteps, vec3 view_ray) {

          float max_val = -1e6;
          int max_i = 100;
          vec3 loc = start_loc;

          // Enter the raycasting loop. In WebGL 1 the loop index cannot be compared with
          // non-constant expression. So we use a hard-coded max, and an additional condition
          // inside the loop.
          for (int iter=0; iter<MAX_STEPS; iter++) {
            if (iter >= nsteps)
              break;
            // Sample from the 3D texture
            float val = sample1(loc);
            // Apply MIP operation
            if (val > max_val) {
              max_val = val;
              max_i = iter;
            }
            // Advance location deeper into the volume
            loc += step;
          }

          // Refine location, gives crispier images
          vec3 iloc = start_loc + step * (float(max_i) - 0.5);
          vec3 istep = step / float(REFINEMENT_STEPS);
          for (int i=0; i<REFINEMENT_STEPS; i++) {
            max_val = max(max_val, sample1(iloc));
            iloc += istep;
          }

          // Resolve final color
          gl_FragColor = apply_colormap(max_val);
        }

        void cast_iso(vec3 start_loc, vec3 step, int nsteps, vec3 view_ray) {

          gl_FragColor = vec4(0.0);   // init transparent
          vec4 color3 = vec4(0.0);    // final color
          vec3 dstep = 1.5 / size;  // step to sample derivative
          vec3 loc = start_loc;

          float low_threshold = renderthreshold - 0.02 * (clim[1] - clim[0]);

          // Enter the raycasting loop. In WebGL 1 the loop index cannot be compared with
          // non-constant expression. So we use a hard-coded max, and an additional condition
          // inside the loop.
          for (int iter=0; iter<MAX_STEPS; iter++) {
            if (iter >= nsteps)
              break;

            // Sample from the 3D texture
            float val = sample1(loc);

            if (val > low_threshold) {
              // Take the last interval in smaller steps
              vec3 iloc = loc - 0.5 * step;
              vec3 istep = step / float(REFINEMENT_STEPS);
              for (int i=0; i<REFINEMENT_STEPS; i++) {
                val = sample1(iloc);
                if (val > renderthreshold) {
                  gl_FragColor = add_lighting(val, iloc, dstep, view_ray);
                    return;
                }
                iloc += istep;
              }
            }

            // Advance location deeper into the volume
            loc += step;
          }
        }

        vec4 add_lighting(float val, vec3 loc, vec3 step, vec3 view_ray)
        {
          // Calculate color by incorporating lighting

          // View direction
          vec3 V = normalize(view_ray);

          // calculate normal vector from gradient
          vec3 N;
          float val1, val2;
          val1 = sample1(loc + vec3(-step[0], 0.0, 0.0));
          val2 = sample1(loc + vec3(+step[0], 0.0, 0.0));
          N[0] = val1 - val2;
          val = max(max(val1, val2), val);
          val1 = sample1(loc + vec3(0.0, -step[1], 0.0));
          val2 = sample1(loc + vec3(0.0, +step[1], 0.0));
          N[1] = val1 - val2;
          val = max(max(val1, val2), val);
          val1 = sample1(loc + vec3(0.0, 0.0, -step[2]));
          val2 = sample1(loc + vec3(0.0, 0.0, +step[2]));
          N[2] = val1 - val2;
          val = max(max(val1, val2), val);

          float gm = length(N); // gradient magnitude
          N = normalize(N);

          // Flip normal so it points towards viewer
          float Nselect = float(dot(N, V) > 0.0);
          N = (2.0 * Nselect - 1.0) * N;  // ==   Nselect * N - (1.0-Nselect)*N;

          // Init colors
          vec4 ambient_color = vec4(0.0, 0.0, 0.0, 0.0);
          vec4 diffuse_color = vec4(0.0, 0.0, 0.0, 0.0);
          vec4 specular_color = vec4(0.0, 0.0, 0.0, 0.0);

          // note: could allow multiple lights
          for (int i=0; i<1; i++)
          {
            // Get light direction (make sure to prevent zero devision)
            vec3 L = normalize(view_ray);   //lightDirs[i];
            float lightEnabled = float( length(L) > 0.0 );
            L = normalize(L + (1.0 - lightEnabled));

            // Calculate lighting properties
            float lambertTerm = clamp(dot(N, L), 0.0, 1.0);
            vec3 H = normalize(L+V); // Halfway vector
            float specularTerm = pow(max(dot(H, N), 0.0), shininess);

            // Calculate mask
            float mask1 = lightEnabled;

            // Calculate colors
            ambient_color +=    mask1 * ambient_color;  // * gl_LightSource[i].ambient;
            diffuse_color +=    mask1 * lambertTerm;
            specular_color += mask1 * specularTerm * specular_color;
          }

          // Calculate final color by componing different components
          vec4 final_color;
          vec4 color = apply_colormap(val);
          final_color = color * (ambient_color + diffuse_color) + specular_color;
          final_color.a = color.a;
          return final_color;
        }`}),this.setValues(e)}}const De={gpuGeneration:!0,resolution:1,regenerate:()=>{rr()},mode:"layer",layer:0,surface:.005,inverse:!1,layers:{select:0,options:{}}},zt={clim1:.385,clim2:.715,renderstyle:"iso",renderthreshold:.15,colormap:"viridis",label:.7};let ba,er,Yi,qe,ct,mt,gt,Ti,Ks,Rc,Cc,vn,wi,Ea,St,Bt,Qi,Aa,$n,Zt;const Ta=new we,Gl={viridis:new ml().load(Xm),gray:new ml().load(Wm)};p_();Lc();async function p_(){document.getElementById("output"),mt=new pc({antialias:!0}),mt.setPixelRatio(window.devicePixelRatio),mt.setSize(window.innerWidth,window.innerHeight),mt.setClearColor(0,0),mt.outputColorSpace=Te,document.body.appendChild(mt.domElement),Ti=new Pm;const i=new Gm(16777215,1);i.position.set(1,1,1),Ti.add(i),Ti.add(new km(16777215,.2)),gt=new Ht(75,window.innerWidth/window.innerHeight,.1,50),gt.position.set(.2,-.2,-.5),gt.up.set(0,-1,0),gt.far=5,gt.updateProjectionMatrix(),window.addEventListener("resize",function(){gt.aspect=window.innerWidth/window.innerHeight,gt.updateProjectionMatrix(),mt.setSize(window.innerWidth,window.innerHeight)},!1),new l_(gt,mt.domElement),Rc=new Bc,Ea=new Vm(new Wt),Ti.add(Ea),Qi=new $s(new u_),Aa=new $s(new h_),$n=new $s(new d_),Zt=new $s(new f_),ba=await fetch("segment/meta.json").then(e=>e.json()),er=await fetch("volume/meta.json").then(e=>e.json());for(let e=0;e<er.nrrd.length;e++){const{clip:t}=er.nrrd[e],n=t.z,s=t.z+t.d;De.layers.options[`${n} to ${s}`]=e}await wa(De.layers.select),rr(),ss()}async function wa(i){St&&St.dispose(),Bt&&Bt.dispose(),Yi=er.nrrd[i],ct=Yi.clip,qe=Yi.shape;const e=[];for(let a=0;a<ba.obj.length;a++){const o=ba.obj[a],c=Yi.clip,l=o.clip;c.x+c.w>=l.x&&l.x+l.w>=c.x&&c.y+c.h>=l.y&&l.y+l.h>=c.y&&c.z+c.d>=l.z&&l.z+l.d>=c.z&&e.push(o.id)}const t=[],n=[];for(let a=0;a<e.length;a++){const o=new Dg().loadAsync("segment/"+e[a]+".obj").then(c=>{n.push(c.children[0].geometry)});t.push(o)}const s=Promise.all(t).then(a=>{const o=1/Math.max(qe.w,qe.h,qe.d);vn=c_(n);const c=vn.attributes.position.array;for(let l=0;l<n.length;l++)n[l].dispose();for(let l=0;l<c.length;l+=3){const u=c[l+0],h=c[l+1],d=c[l+2],p=qe.w*o*((u-ct.x)/ct.w-.5),g=qe.h*o*((h-ct.y)/ct.h-.5),_=qe.d*o*((d-ct.z)/ct.d-.5);c[l+0]=p,c[l+1]=g,c[l+2]=_}return vn.attributes.position.needsUpdate=!0,vn.computeBoundingBox(),vn.boundingBox.max.set(qe.w*o/2,qe.h*o/2,qe.d*o/2),vn.boundingBox.min.set(-qe.w*o/2,-qe.h*o/2,-qe.d*o/2),Ea.box.copy(vn.boundingBox),new ns(vn,{maxLeafTris:1})}).then(a=>{Cc=a,wi=new Ut(vn,new Um({side:Gt})),Ti.add(wi)}),r=new a_().loadAsync("volume/"+Yi.id+".nrrd").then(a=>{Bt=new Ia(a.data,a.xLength,a.yLength,a.zLength),Bt.format=or,Bt.type=Tt,Bt.minFilter=ut,Bt.magFilter=ut,Bt.unpackAlignment=1,Bt.needsUpdate=!0;const o=Zt.material;o.uniforms.voldata.value=Bt,o.uniforms.size.value.set(a.xLength,a.yLength,a.zLength)});return Promise.all([s,r])}function ss(){Ks&&Ks.destroy(),De.layer=Math.max(ct.z,De.layer),De.layer=Math.min(ct.z+ct.d,De.layer),Ks=new Ga;const i=Ks.addFolder("display");i.add(De,"mode",["geometry","layer","grid layers"]).onChange(()=>{ss()}),De.mode,De.mode==="layer"&&(i.add(De,"inverse"),i.add(De,"surface",.001,.02),i.add(De,"layer",ct.z,ct.z+ct.d,1),i.add(De.layers,"select",De.layers.options).name("layers").onChange(async()=>{await wa(De.layers.select),rr(),ss()})),De.mode==="grid layers"&&(i.add(De,"inverse"),i.add(De,"surface",.001,.02),i.add(De.layers,"select",De.layers.options).name("layers").onChange(async()=>{await wa(De.layers.select),rr(),ss()})),De.mode==="raymarching"&&i.add(De,"surface",-.2,2),De.mode==="volume"&&(i.add(zt,"renderstyle",["mip","iso"]),i.add(zt,"clim1",0,1),i.add(zt,"clim2",0,1),i.add(De,"surface",-.2,2),i.add(zt,"renderthreshold",0,1))}function rr(){const i=new we,e=new L,t=new Hn,n=new L,s=De.resolution,r=1/Math.max(qe.w,qe.h,qe.d);n.set(qe.w*r,qe.h*r,qe.d*r),i.compose(e,t,n),Ta.copy(i).invert();const a=1/(qe.d*s),o=.5*a,c=window.performance.now();if(De.gpuGeneration){St=new Fu(qe.w*s,qe.h*s,qe.d*s),St.texture.format=or,St.texture.type=Tt,St.texture.minFilter=ut,St.texture.magFilter=ut,Qi.material.uniforms.bvh.value.updateFrom(Cc),Qi.material.uniforms.matrix.value.copy(i);for(let l=0;l<qe.d*s;l++)Qi.material.uniforms.zValue.value=l*a+o,mt.setRenderTarget(St,l),Qi.render(mt);mt.readRenderTargetPixels(St,0,0,1,1,new Float32Array(4)),mt.setRenderTarget(null)}window.performance.now()-c,ss()}function Lc(){if(Rc.update(),requestAnimationFrame(Lc),St){if(De.mode==="geometry")mt.render(Ti,gt);else if(De.mode==="layer"||De.mode==="grid layers"){const i=Aa.material,e=Gl[zt.colormap];Bt&&(i.uniforms.voldata.value=Bt),e&&(i.uniforms.cmdata.value=e),i.uniforms.clim.value.set(zt.clim1,zt.clim2),i.uniforms.inverse.value=De.inverse,i.uniforms.surface.value=De.surface,i.uniforms.layer.value=(De.layer-ct.z)/ct.d,i.uniforms.volumeAspect.value=ct.w/ct.h,i.uniforms.screenAspect.value=gt.aspect,i.uniforms.sdfTex.value=St.texture,St.texture;const t=De.mode==="layer"?0:1;t!==i.defines.DISPLAY_GRID&&(i.defines.DISPLAY_GRID=t,i.needsUpdate=!0),Aa.render(mt)}else if(De.mode==="raymarching"){gt.updateMatrixWorld(),wi.updateMatrixWorld();const{width:i,depth:e,height:t}=St.texture.image;$n.material.uniforms.sdfTex.value=St.texture,$n.material.uniforms.normalStep.value.set(1/i,1/t,1/e),$n.material.uniforms.surface.value=De.surface,$n.material.uniforms.projectionInverse.value.copy(gt.projectionMatrixInverse),$n.material.uniforms.sdfTransformInverse.value.copy(wi.matrixWorld).invert().premultiply(Ta).multiply(gt.matrixWorld),$n.render(mt)}else if(De.mode==="volume"){gt.updateMatrixWorld(),wi.updateMatrixWorld();const i=Gl[zt.colormap];i&&(Zt.material.uniforms.cmdata.value=i),Zt.material.uniforms.sdfTex.value=St.texture,Zt.material.uniforms.surface.value=De.surface,Zt.material.uniforms.clim.value.set(zt.clim1,zt.clim2),Zt.material.uniforms.renderstyle.value=zt.renderstyle=="mip"?0:1,Zt.material.uniforms.renderthreshold.value=zt.renderthreshold,Zt.material.uniforms.projectionInverse.value.copy(gt.projectionMatrixInverse),Zt.material.uniforms.sdfTransformInverse.value.copy(wi.matrixWorld).invert().premultiply(Ta).multiply(gt.matrixWorld),Zt.render(mt)}}else return}
