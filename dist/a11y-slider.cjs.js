/* a11y-slider - v0.4.12
* https://github.com/mmahandev/a11y-slider
* Copyright (c) 2022 mmahandev. Licensed MIT */
"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var i=function(e){return e&&e.Math==Math&&e},n=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||Function("return this")(),r=function(e){try{return!!e()}catch(e){return!0}},s=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,l={f:a&&!o.call({1:2},1)?function(e){var t=a(this,e);return!!t&&t.enumerable}:o},u=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},c={}.toString,d=function(e){return c.call(e).slice(8,-1)},h="".split,f=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==d(e)?h.call(e,""):Object(e)}:Object,p=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},v=function(e){return f(p(e))},y=function(e){return"object"==typeof e?null!==e:"function"==typeof e},b=function(e,t){if(!y(e))return e;var i,n;if(t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;if("function"==typeof(i=e.valueOf)&&!y(n=i.call(e)))return n;if(!t&&"function"==typeof(i=e.toString)&&!y(n=i.call(e)))return n;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,g=function(e,t){return m.call(e,t)},_=n.document,S=y(_)&&y(_.createElement),w=function(e){return S?_.createElement(e):{}},E=!s&&!r((function(){return 7!=Object.defineProperty(w("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,L={f:s?A:function(e,t){if(e=v(e),t=b(t,!0),E)try{return A(e,t)}catch(e){}if(g(e,t))return u(!l.f.call(e,t),e[t])}},O=function(e){if(!y(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,k={f:s?C:function(e,t,i){if(O(e),t=b(t,!0),O(i),E)try{return C(e,t,i)}catch(e){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(e[t]=i.value),e}},x=s?function(e,t,i){return k.f(e,t,u(1,i))}:function(e,t,i){return e[t]=i,e},j=function(e,t){try{x(n,e,t)}catch(i){n[e]=t}return t},T=n["__core-js_shared__"]||j("__core-js_shared__",{}),N=Function.toString;"function"!=typeof T.inspectSource&&(T.inspectSource=function(e){return N.call(e)});var M,P,D,I=T.inspectSource,H=n.WeakMap,B="function"==typeof H&&/native code/.test(I(H)),F=t((function(e){(e.exports=function(e,t){return T[e]||(T[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),R=0,X=Math.random(),V=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++R+X).toString(36)},W=F("keys"),z=function(e){return W[e]||(W[e]=V(e))},q={},G=n.WeakMap;if(B){var U=new G,Y=U.get,$=U.has,K=U.set;M=function(e,t){return K.call(U,e,t),t},P=function(e){return Y.call(U,e)||{}},D=function(e){return $.call(U,e)}}else{var J=z("state");q[J]=!0,M=function(e,t){return x(e,J,t),t},P=function(e){return g(e,J)?e[J]:{}},D=function(e){return g(e,J)}}var Q,Z,ee={set:M,get:P,has:D,enforce:function(e){return D(e)?P(e):M(e,{})},getterFor:function(e){return function(t){var i;if(!y(t)||(i=P(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return i}}},te=t((function(e){var t=ee.get,i=ee.enforce,r=String(String).split("String");(e.exports=function(e,t,s,o){var a=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,u=!!o&&!!o.noTargetGet;"function"==typeof s&&("string"!=typeof t||g(s,"name")||x(s,"name",t),i(s).source=r.join("string"==typeof t?t:"")),e!==n?(a?!u&&e[t]&&(l=!0):delete e[t],l?e[t]=s:x(e,t,s)):l?e[t]=s:j(t,s)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||I(this)}))})),ie=n,ne=function(e){return"function"==typeof e?e:void 0},re=function(e,t){return arguments.length<2?ne(ie[e])||ne(n[e]):ie[e]&&ie[e][t]||n[e]&&n[e][t]},se=Math.ceil,oe=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?oe:se)(e)},le=Math.min,ue=function(e){return e>0?le(ae(e),9007199254740991):0},ce=Math.max,de=Math.min,he=function(e,t){var i=ae(e);return i<0?ce(i+t,0):de(i,t)},fe=function(e){return function(t,i,n){var r,s=v(t),o=ue(s.length),a=he(n,o);if(e&&i!=i){for(;o>a;)if((r=s[a++])!=r)return!0}else for(;o>a;a++)if((e||a in s)&&s[a]===i)return e||a||0;return!e&&-1}},pe={includes:fe(!0),indexOf:fe(!1)},ve=pe.indexOf,ye=function(e,t){var i,n=v(e),r=0,s=[];for(i in n)!g(q,i)&&g(n,i)&&s.push(i);for(;t.length>r;)g(n,i=t[r++])&&(~ve(s,i)||s.push(i));return s},be=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],me=be.concat("length","prototype"),ge={f:Object.getOwnPropertyNames||function(e){return ye(e,me)}},_e={f:Object.getOwnPropertySymbols},Se=re("Reflect","ownKeys")||function(e){var t=ge.f(O(e)),i=_e.f;return i?t.concat(i(e)):t},we=function(e,t){for(var i=Se(t),n=k.f,r=L.f,s=0;s<i.length;s++){var o=i[s];g(e,o)||n(e,o,r(t,o))}},Ee=/#|\.prototype\./,Ae=function(e,t){var i=Oe[Le(e)];return i==ke||i!=Ce&&("function"==typeof t?r(t):!!t)},Le=Ae.normalize=function(e){return String(e).replace(Ee,".").toLowerCase()},Oe=Ae.data={},Ce=Ae.NATIVE="N",ke=Ae.POLYFILL="P",xe=Ae,je=L.f,Te=function(e,t){var i,r,s,o,a,l=e.target,u=e.global,c=e.stat;if(i=u?n:c?n[l]||j(l,{}):(n[l]||{}).prototype)for(r in t){if(o=t[r],s=e.noTargetGet?(a=je(i,r))&&a.value:i[r],!xe(u?r:l+(c?".":"#")+r,e.forced)&&void 0!==s){if(typeof o==typeof s)continue;we(o,s)}(e.sham||s&&s.sham)&&x(o,"sham",!0),te(i,r,o,e)}},Ne=Array.isArray||function(e){return"Array"==d(e)},Me=function(e){return Object(p(e))},Pe=function(e,t,i){var n=b(t);n in e?k.f(e,n,u(0,i)):e[n]=i},De=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())})),Ie=De&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,He=F("wks"),Be=n.Symbol,Fe=Ie?Be:Be&&Be.withoutSetter||V,Re=function(e){return g(He,e)||(De&&g(Be,e)?He[e]=Be[e]:He[e]=Fe("Symbol."+e)),He[e]},Xe=Re("species"),Ve=function(e,t){var i;return Ne(e)&&("function"!=typeof(i=e.constructor)||i!==Array&&!Ne(i.prototype)?y(i)&&null===(i=i[Xe])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===t?0:t)},We=re("navigator","userAgent")||"",ze=n.process,qe=ze&&ze.versions,Ge=qe&&qe.v8;Ge?Z=(Q=Ge.split("."))[0]+Q[1]:We&&(!(Q=We.match(/Edge\/(\d+)/))||Q[1]>=74)&&(Q=We.match(/Chrome\/(\d+)/))&&(Z=Q[1]);var Ue=Z&&+Z,Ye=Re("species"),$e=function(e){return Ue>=51||!r((function(){var t=[];return(t.constructor={})[Ye]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},Ke=Re("isConcatSpreadable"),Je=Ue>=51||!r((function(){var e=[];return e[Ke]=!1,e.concat()[0]!==e})),Qe=$e("concat"),Ze=function(e){if(!y(e))return!1;var t=e[Ke];return void 0!==t?!!t:Ne(e)};Te({target:"Array",proto:!0,forced:!Je||!Qe},{concat:function(e){var t,i,n,r,s,o=Me(this),a=Ve(o,0),l=0;for(t=-1,n=arguments.length;t<n;t++)if(Ze(s=-1===t?o:arguments[t])){if(l+(r=ue(s.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(i=0;i<r;i++,l++)i in s&&Pe(a,l,s[i])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Pe(a,l++,s)}return a.length=l,a}});var et=function(e,t,i){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(i){case 0:return function(){return e.call(t)};case 1:return function(i){return e.call(t,i)};case 2:return function(i,n){return e.call(t,i,n)};case 3:return function(i,n,r){return e.call(t,i,n,r)}}return function(){return e.apply(t,arguments)}},tt=[].push,it=function(e){var t=1==e,i=2==e,n=3==e,r=4==e,s=6==e,o=5==e||s;return function(a,l,u,c){for(var d,h,p=Me(a),v=f(p),y=et(l,u,3),b=ue(v.length),m=0,g=c||Ve,_=t?g(a,b):i?g(a,0):void 0;b>m;m++)if((o||m in v)&&(h=y(d=v[m],m,p),e))if(t)_[m]=h;else if(h)switch(e){case 3:return!0;case 5:return d;case 6:return m;case 2:tt.call(_,d)}else if(r)return!1;return s?-1:n||r?r:_}},nt={forEach:it(0),map:it(1),filter:it(2),some:it(3),every:it(4),find:it(5),findIndex:it(6)},rt=function(e,t){var i=[][e];return!!i&&r((function(){i.call(null,t||function(){throw 1},1)}))},st=Object.defineProperty,ot={},at=function(e){throw e},lt=function(e,t){if(g(ot,e))return ot[e];t||(t={});var i=[][e],n=!!g(t,"ACCESSORS")&&t.ACCESSORS,o=g(t,0)?t[0]:at,a=g(t,1)?t[1]:void 0;return ot[e]=!!i&&!r((function(){if(n&&!s)return!0;var e={length:-1};n?st(e,1,{enumerable:!0,get:at}):e[1]=1,i.call(e,o,a)}))},ut=nt.forEach,ct=rt("forEach"),dt=lt("forEach"),ht=ct&&dt?[].forEach:function(e){return ut(this,e,arguments.length>1?arguments[1]:void 0)};Te({target:"Array",proto:!0,forced:[].forEach!=ht},{forEach:ht});var ft=pe.indexOf,pt=[].indexOf,vt=!!pt&&1/[1].indexOf(1,-0)<0,yt=rt("indexOf"),bt=lt("indexOf",{ACCESSORS:!0,1:0});Te({target:"Array",proto:!0,forced:vt||!yt||!bt},{indexOf:function(e){return vt?pt.apply(this,arguments)||0:ft(this,e,arguments.length>1?arguments[1]:void 0)}});var mt=nt.map,gt=$e("map"),_t=lt("map");Te({target:"Array",proto:!0,forced:!gt||!_t},{map:function(e){return mt(this,e,arguments.length>1?arguments[1]:void 0)}});var St,wt=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,i={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),t=i instanceof Array}catch(e){}return function(i,n){return O(i),function(e){if(!y(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(n),t?e.call(i,n):i.__proto__=n,i}}():void 0),Et=function(e,t,i){var n,r;return wt&&"function"==typeof(n=t.constructor)&&n!==i&&y(r=n.prototype)&&r!==i.prototype&&wt(e,r),e},At=Object.keys||function(e){return ye(e,be)},Lt=s?Object.defineProperties:function(e,t){O(e);for(var i,n=At(t),r=n.length,s=0;r>s;)k.f(e,i=n[s++],t[i]);return e},Ot=re("document","documentElement"),Ct=z("IE_PROTO"),kt=function(){},xt=function(e){return"<script>"+e+"<\/script>"},jt=function(){try{St=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;jt=St?function(e){e.write(xt("")),e.close();var t=e.parentWindow.Object;return e=null,t}(St):((t=w("iframe")).style.display="none",Ot.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(xt("document.F=Object")),e.close(),e.F);for(var i=be.length;i--;)delete jt.prototype[be[i]];return jt()};q[Ct]=!0;var Tt=Object.create||function(e,t){var i;return null!==e?(kt.prototype=O(e),i=new kt,kt.prototype=null,i[Ct]=e):i=jt(),void 0===t?i:Lt(i,t)},Nt="\t\n\v\f\r                　\u2028\u2029\ufeff",Mt="["+Nt+"]",Pt=RegExp("^"+Mt+Mt+"*"),Dt=RegExp(Mt+Mt+"*$"),It=function(e){return function(t){var i=String(p(t));return 1&e&&(i=i.replace(Pt,"")),2&e&&(i=i.replace(Dt,"")),i}},Ht={start:It(1),end:It(2),trim:It(3)},Bt=ge.f,Ft=L.f,Rt=k.f,Xt=Ht.trim,Vt=n.Number,Wt=Vt.prototype,zt="Number"==d(Tt(Wt)),qt=function(e){var t,i,n,r,s,o,a,l,u=b(e,!1);if("string"==typeof u&&u.length>2)if(43===(t=(u=Xt(u)).charCodeAt(0))||45===t){if(88===(i=u.charCodeAt(2))||120===i)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(o=(s=u.slice(2)).length,a=0;a<o;a++)if((l=s.charCodeAt(a))<48||l>r)return NaN;return parseInt(s,n)}return+u};if(xe("Number",!Vt(" 0o1")||!Vt("0b1")||Vt("+0x1"))){for(var Gt,Ut=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof Ut&&(zt?r((function(){Wt.valueOf.call(i)})):"Number"!=d(i))?Et(new Vt(qt(t)),i,Ut):qt(t)},Yt=s?Bt(Vt):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$t=0;Yt.length>$t;$t++)g(Vt,Gt=Yt[$t])&&!g(Ut,Gt)&&Rt(Ut,Gt,Ft(Vt,Gt));Ut.prototype=Wt,Wt.constructor=Ut,te(n,"Number",Ut)}var Kt=Ht.trim,Jt=n.parseInt,Qt=/^[+-]?0[Xx]/,Zt=8!==Jt(Nt+"08")||22!==Jt(Nt+"0x16")?function(e,t){var i=Kt(String(e));return Jt(i,t>>>0||(Qt.test(i)?16:10))}:Jt;Te({target:"Number",stat:!0,forced:Number.parseInt!=Zt},{parseInt:Zt});var ei=Object.assign,ti=Object.defineProperty,ii=!ei||r((function(){if(s&&1!==ei({b:1},ei(ti({},"a",{enumerable:!0,get:function(){ti(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},i=Symbol(),n="abcdefghijklmnopqrst";return e[i]=7,n.split("").forEach((function(e){t[e]=e})),7!=ei({},e)[i]||At(ei({},t)).join("")!=n}))?function(e,t){for(var i=Me(e),n=arguments.length,r=1,o=_e.f,a=l.f;n>r;)for(var u,c=f(arguments[r++]),d=o?At(c).concat(o(c)):At(c),h=d.length,p=0;h>p;)u=d[p++],s&&!a.call(c,u)||(i[u]=c[u]);return i}:ei;Te({target:"Object",stat:!0,forced:Object.assign!==ii},{assign:ii});var ni=l.f,ri=function(e){return function(t){for(var i,n=v(t),r=At(n),o=r.length,a=0,l=[];o>a;)i=r[a++],s&&!ni.call(n,i)||l.push(e?[i,n[i]]:n[i]);return l}},si={entries:ri(!0),values:ri(!1)}.entries;Te({target:"Object",stat:!0},{entries:function(e){return si(e)}});for(var oi in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ai=n[oi],li=ai&&ai.prototype;if(li&&li.forEach!==ht)try{x(li,"forEach",ht)}catch(e){li.forEach=ht}}function ui(e){return(ui="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ci(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function di(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function hi(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function fi(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?hi(Object(i),!0).forEach((function(t){di(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):hi(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function pi(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}function vi(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(e){r=!0,s=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}return i}(e,t)||bi(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function yi(e){return function(e){if(Array.isArray(e))return mi(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||bi(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function bi(e,t){if(e){if("string"==typeof e)return mi(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?mi(e,t):void 0}}function mi(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var gi=function(e,t,i){var n;return void 0===t&&(t=50),void 0===i&&(i={isImmediate:!1}),function(){for(var r=[],s=arguments.length;s--;)r[s]=arguments[s];var o=this,a=i.isImmediate&&void 0===n;void 0!==n&&clearTimeout(n),n=setTimeout((function(){n=void 0,i.isImmediate||e.apply(o,r)}),t),a&&e.apply(o,r)}},_i=$e("slice"),Si=lt("slice",{ACCESSORS:!0,0:0,1:2}),wi=Re("species"),Ei=[].slice,Ai=Math.max;Te({target:"Array",proto:!0,forced:!_i||!Si},{slice:function(e,t){var i,n,r,s=v(this),o=ue(s.length),a=he(e,o),l=he(void 0===t?o:t,o);if(Ne(s)&&("function"!=typeof(i=s.constructor)||i!==Array&&!Ne(i.prototype)?y(i)&&null===(i=i[wi])&&(i=void 0):i=void 0,i===Array||void 0===i))return Ei.call(s,a,l);for(n=new(void 0===i?Array:i)(Ai(l-a,0)),r=0;a<l;a++,r++)a in s&&Pe(n,r,s[a]);return n.length=r,n}});var Li={};Li[Re("toStringTag")]="z";var Oi="[object z]"===String(Li),Ci=Re("toStringTag"),ki="Arguments"==d(function(){return arguments}()),xi=Oi?d:function(e){var t,i,n;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(i=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Ci))?i:ki?d(t):"Object"==(n=d(t))&&"function"==typeof t.callee?"Arguments":n},ji=Oi?{}.toString:function(){return"[object "+xi(this)+"]"};Oi||te(Object.prototype,"toString",ji,{unsafe:!0});var Ti=function(){var e=O(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},Ni=RegExp.prototype,Mi=Ni.toString,Pi=r((function(){return"/a/b"!=Mi.call({source:"a",flags:"b"})})),Di="toString"!=Mi.name;(Pi||Di)&&te(RegExp.prototype,"toString",(function(){var e=O(this),t=String(e.source),i=e.flags;return"/"+t+"/"+String(void 0===i&&e instanceof RegExp&&!("flags"in Ni)?Ti.call(e):i)}),{unsafe:!0});var Ii,Hi,Bi,Fi,Ri=function(e){var t=(new DOMParser).parseFromString(e,"text/html").body.firstChild;if(t instanceof HTMLElement)return t;throw new Error("Supplied markup does not create an HTML Element")},Xi=function(e){var t=e.charCode||e.keyCode,i=e.type;return"click"===i||"keydown"===i&&(32===t||13===t)&&(e.preventDefault(),!0)},Vi=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e&&null!=e&&!isNaN(Number(e.toString()))},Wi=function(e){return"object"===ui(e)&&null!==e},zi=function(e,t){if(void 0!==e){var i=function(e){if(Array.isArray(e))return!0;var t=Object.prototype.toString.call(e);return!("[object HTMLCollection]"!==t&&"[object NodeList]"!==t&&("object"!==ui(e)||!e.hasOwnProperty("length")||e.length<0||0!==e.length&&(!e[0]||!e[0].nodeType)))}(e)?e:[e];Array.prototype.slice.call(i).forEach((function(e){e instanceof HTMLElement&&t&&t(e)}))}},qi=function(e,t,i){var n=!!window.getComputedStyle,r=window.getComputedStyle||function(){},s=function(){if(!n)return!1;var e=document.body||document.documentElement,t=document.createElement("div");t.style.cssText="width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;",e.appendChild(t);var i="10px"===r(t,null).width;return e.removeChild(t),i}(),o=function(e){return e=parseFloat(e),t=e,!isNaN(parseFloat(t))&&isFinite(t)?e:0;var t};return function(e,t,i){if(n){i=i||r(e,null);var a=o(i[t]);return s||"width"!==t?s||"height"!==t||(a+=o(i.paddingTop)+o(i.paddingBottom)+o(i.borderTopWidth)+o(i.borderBottomWidth)):a+=o(i.paddingLeft)+o(i.paddingRight)+o(i.borderLeftWidth)+o(i.borderRightWidth),a}return o(e.style[t])}(e,t,i)},Gi=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=[],n=e.nextSibling;n&&i.length<t;)i.push(n),n=n.nextSibling;return i};!function(e){e[e.Prev=0]="Prev",e[e.Next=1]="Next"}(Ii||(Ii={})),function(e){e[e.Enabled=1]="Enabled",e[e.Disabled=0]="Disabled"}(Hi||(Hi={})),function(e){e[e.Enable=0]="Enable",e[e.Disable=1]="Disable"}(Bi||(Bi={})),function(e){e[e.Yes=0]="Yes",e[e.No=0]="No"}(Fi||(Fi={}));var Ui=function(){function e(t,i){var n=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!(t instanceof HTMLElement))throw new Error("The required input [element] must be an HTMLElement");if(void 0!==i&&!Wi(i))throw new Error("The required input [options] must be an Object");this.slider=t,this.slides=t.children,this.sliderContainer=Ri('<div class="a11y-slider-container"></div>'),this._activeClass="a11y-slider-active",this._visibleClass="a11y-slider-visible",this._dotsClass="a11y-slider-dots",this._sliderClass="a11y-slider",this._focusable="a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]",this._autoplayTimer=Fi.No,this.autoplayBtn=Ri('<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'),this._pauseOnMouseLeave=!1,this._skipBtns=[],this.dots=null,this.swipe=!0,this.activeSlide=this.slides[0],this.visibleSlides=[],this.sliderEnabled=Hi.Disabled,this.modernBrowser=!!HTMLElement.prototype.scrollTo,this.mouseDown=!1,this.swipeStartX=0,this.swipeX=0,this.swipeXCached=0,this._hasCustomArrows=!!(i&&i.prevArrow||i&&i.nextArrow),this.options={container:!0,arrows:!0,prevArrow:i&&i.prevArrow||Ri('<button type="button" class="a11y-slider-prev">Previous slide</button>'),nextArrow:i&&i.nextArrow||Ri('<button type="button" class="a11y-slider-next">Next slide</button>'),dots:!0,adaptiveHeight:!1,skipBtn:!0,slidesToShow:null,autoplay:!1,autoplaySpeed:4e3,autoplayHoverPause:!0,centerMode:!1,infinite:!0,disable:!1,responsive:null,customPaging:null,swipe:!0},this.options=fi(fi({},this.options),i),this._handlePrev=this._handlePrev.bind(this),this._handleNext=this._handleNext.bind(this),this._handleAutoplay=this._handleAutoplay.bind(this),this._handleAutoplayHover=this._handleAutoplayHover.bind(this),this._handleAutoplayEvent=this._handleAutoplayEvent.bind(this),this._checkShouldEnableDebounced=gi(this._checkShouldEnable.bind(this),250),this._updateHeightDebounced=gi(this._updateHeight.bind(this),250),this._generateDotsDebounced=gi(this._generateDots.bind(this),250),this._updateScrollPosition=gi((function(){return n.scrollToSlide(n.activeSlide)}),250),this._handleScroll=gi(this._handleScroll.bind(this),10),this._scrollFinish=gi(this._scrollFinish.bind(this),175),this._swipeMouseDown=this._swipeMouseDown.bind(this),this._swipeMouseUp=this._swipeMouseUp.bind(this),this._swipeMouseMove=this._swipeMouseMove.bind(this),this._init()}var t,i,n;return t=e,(i=[{key:"_init",value:function(){var e=this;setTimeout((function(){return e.slider.scrollLeft=0}),1),Wi(this.options.responsive)&&this._checkResponsive(),this._checkShouldEnable(),window.addEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("init",{a11ySlider:this})}},{key:"_checkShouldEnable",value:function(){var e=this,t=!0;!0===this.options.disable&&(t=!1),this.slides.length<=1&&(t=!1),Vi(this.options.slidesToShow)?this.slides.length===this.options.slidesToShow&&(t=!1):this._getActiveAndVisible(null,(function(i){i.length===e.slides.length&&(t=!1)})),t&&this.sliderEnabled===Hi.Disabled?this._enableSlider():t||this.sliderEnabled!==Hi.Enabled||this._disableSlider(),!t&&this._hasCustomArrows&&(zi(this.options.prevArrow,(function(e){e.classList.add("a11y-slider-hide")})),zi(this.options.nextArrow,(function(e){e.classList.add("a11y-slider-hide")})))}},{key:"_enableSlider",value:function(){var e=this;this.sliderEnabled=Hi.Enabled,this.options.container&&(this.slider.insertAdjacentElement("beforebegin",this.sliderContainer),this.sliderContainer.insertAdjacentElement("afterbegin",this.slider)),this.options.skipBtn&&this._addSkipBtn(),this.options.arrows&&!this._hasCustomArrows&&(this.options.prevArrow instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.prevArrow),this.options.nextArrow instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.nextArrow)),zi(this.options.prevArrow,(function(t){t.addEventListener("click",e._handlePrev,{passive:!0}),t.addEventListener("keypress",e._handlePrev,{passive:!0}),e._hasCustomArrows&&t.classList.remove("a11y-slider-hide")})),zi(this.options.nextArrow,(function(t){t.addEventListener("click",e._handleNext,{passive:!0}),t.addEventListener("keypress",e._handleNext,{passive:!0}),e._hasCustomArrows&&t.classList.remove("a11y-slider-hide")})),this.options.dots&&this._generateDots(),this.slider.addEventListener("scroll",this._handleScroll,!1),this._setCSS(),!0===this.options.adaptiveHeight&&(this._updateHeight(this.activeSlide),window.addEventListener("resize",this._updateHeightDebounced.bind(this))),this.options.autoplay&&this._enableAutoplay(),window.addEventListener("resize",this._updateScrollPosition),this.options.swipe&&this._enableSwipe()}},{key:"_disableSlider",value:function(){var e=this;this.sliderEnabled=Hi.Disabled,document.body.contains(this.sliderContainer)&&(this.sliderContainer.insertAdjacentElement("beforebegin",this.slider),this.sliderContainer.parentNode&&this.sliderContainer.parentNode.removeChild(this.sliderContainer)),this._removeSkipBtn(),zi(this.options.prevArrow,(function(t){t.removeEventListener("click",e._handlePrev),t.removeEventListener("keypress",e._handlePrev),e._hasCustomArrows?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),zi(this.options.nextArrow,(function(t){t.removeEventListener("click",e._handleNext),t.removeEventListener("keypress",e._handleNext),e._hasCustomArrows?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),this._removeDots(),this.slider.removeEventListener("scroll",this._handleScroll,!1),this._removeCSS(),window.removeEventListener("resize",this._updateHeightDebounced),this._updateHeight(!1),this.options.autoplay&&this._disableAutoplay(),this._disableSwipe(),window.removeEventListener("resize",this._updateScrollPosition),this.options.swipe&&this._disableSwipe()}},{key:"_setCSS",value:function(e){var t=this;this._addSlidesWidth(),this._getActiveAndVisible(e||null),this.slider.classList.add(this._sliderClass),zi(this.slides,(function(e){e.classList.remove(t._activeClass),e.classList.remove(t._visibleClass)})),this.activeSlide.classList.add(this._activeClass),zi(this.visibleSlides,(function(e){e.classList.add(t._visibleClass)})),this._updateDots(this.activeSlide),this._updateA11Y()}},{key:"_removeCSS",value:function(){var e=this;this._removeSlidesWidth(),this.slider.classList.remove(this._sliderClass),zi(this.slides,(function(t){t.classList.remove(e._activeClass),t.classList.remove(e._visibleClass)})),this._removeA11Y()}},{key:"_checkResponsive",value:function(){var e=this;if(Wi(this.options.responsive)){var t=this.options,i=(t.responsive,pi(t,["responsive"])),n=[],r=Object.entries(this.options.responsive).sort((function(e,t){return e[1]-t[1]}));n.push({mql:window.matchMedia("screen and (max-width: ".concat(Number.parseInt(r[0][0])-1,"px)")),options:i}),r.forEach((function(t,i){var s=vi(t,2),o=s[0],a=s[1],l=fi({},e.options),u="screen and (min-width: ".concat(o,"px)");i!==r.length-1&&(u=u.concat(" and (max-width: ".concat(Number.parseInt(r[i+1][0])-1,"px)"))),n.forEach((function(e){Object.assign(l,e.options)})),Object.assign(l,a),n.push({mql:window.matchMedia(u),options:l})})),n.map((function(t){t.mql.matches&&Object.assign(e.options,t.options),t.mql.addListener((function(){t.mql.matches&&e.updateOptions(t.options)}))}))}}},{key:"_addSlidesWidth",value:function(){if(Vi(this.options.slidesToShow)){var e=100/this.options.slidesToShow;this.slider.style.display="flex",zi(this.slides,(function(t){t.style.width="".concat(e,"%"),t.style.flex="0 0 auto"}))}else this._removeSlidesWidth()}},{key:"_removeSlidesWidth",value:function(){this.slider.style.removeProperty("display"),zi(this.slides,(function(e){e.style.removeProperty("width"),e.style.removeProperty("flex")}))}},{key:"_updateA11Y",value:function(){var e=this;if(this._removeA11Y(),zi(this.slides,(function(t){var i=t.querySelectorAll(e._focusable);t.classList.contains(e._visibleClass)||(t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true")),zi(i,(function(i){t.classList.contains(e._visibleClass)||i.setAttribute("tabindex","-1")}))})),!1===this.options.infinite){var t=this.slider.firstElementChild,i=this.slider.lastElementChild,n=this.visibleSlides[0],r=this.visibleSlides[this.visibleSlides.length-1];n===t&&zi(this.options.prevArrow,(function(e){e.setAttribute("disabled","")})),r===i&&zi(this.options.nextArrow,(function(e){e.setAttribute("disabled","")}))}}},{key:"_removeA11Y",value:function(){var e=this;zi(this.slides,(function(t){var i=t.querySelectorAll(e._focusable);t.removeAttribute("tabindex"),t.removeAttribute("aria-hidden"),zi(i,(function(e){e.removeAttribute("tabindex")}))})),zi(this.options.prevArrow,(function(e){return e.removeAttribute("disabled")})),zi(this.options.nextArrow,(function(e){return e.removeAttribute("disabled")}))}},{key:"_addSkipBtn",value:function(){var e=Ri('<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'),t=Ri('<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'),i=function(e){!0===Xi(e)&&t.focus()};e.addEventListener("click",i,{passive:!0}),e.addEventListener("keypress",i,{passive:!0}),this.slider.insertAdjacentElement("beforebegin",e),this.slider.insertAdjacentElement("afterend",t),this._skipBtns=[],this._skipBtns.push(e,t)}},{key:"_removeSkipBtn",value:function(){var e=[].concat(yi(function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,i=[],n=e.previousSibling;n&&i.length<t;)i.push(n),n=n.previousSibling;return i}(this.slider)),yi(Gi(this.slider)));zi(this._skipBtns,(function(e){e.parentNode&&e.parentNode.removeChild(e)})),zi(e,(function(e){e.classList.contains("a11y-slider-sr-only")&&e.parentNode&&e.parentNode.removeChild(e)}))}},{key:"_generateDots",value:function(){var e=this;if(!1!==this.options.dots&&(this._removeDots(),this.sliderEnabled!==Hi.Disabled)){this.dots=Ri('<ul class="'.concat(this._dotsClass,'"></ul>'));for(var t=function(t){var i=Ri("<li></li>"),n=void 0;e.options.customPaging?n=Ri(e.options.customPaging(t,e)):(n=Ri('<button type="button"></button>')).textContent="Move slider to item #".concat(t+1);var r=function(i){!0===Xi(i)&&(e.scrollToSlide(e.slides[t]),e._toggleAutoplay(Bi.Disable))};n.addEventListener("click",r,{passive:!0}),n.addEventListener("keypress",r,{passive:!0}),i.insertAdjacentElement("beforeend",n),e.dots.insertAdjacentElement("beforeend",i)},i=0;i<this._getDotCount();i++)t(i);this._updateDots(this.activeSlide),this.slider.insertAdjacentElement("afterend",this.dots),window.addEventListener("resize",this._generateDotsDebounced)}}},{key:"_getDotCount",value:function(){return this.slides.length-(this.options.slidesToShow||this.visibleSlides.length||1)+1}},{key:"_removeDots",value:function(){var e=this;window.removeEventListener("resize",this._generateDotsDebounced);var t=Gi(this.slider);this.dots instanceof HTMLElement&&this.dots.parentNode&&this.dots.parentNode.removeChild(this.dots),zi(t,(function(t){t.classList.contains(e._dotsClass)&&t.parentNode&&t.parentNode.removeChild(t)}))}},{key:"_updateDots",value:function(e){if(this.dots instanceof HTMLElement){var t,i=Array.prototype.indexOf.call(e.parentNode&&e.parentNode.children,e);i>this.dots.children.length&&(i=this.dots.children.length-1),zi(this.dots.children,(function(e){var t;return null===(t=e.querySelector("button"))||void 0===t?void 0:t.classList.remove("active")})),null===(t=this.dots.children[i].querySelector("button"))||void 0===t||t.classList.add("active")}}},{key:"_enableAutoplay",value:function(){this.autoplayBtn.addEventListener("click",this._handleAutoplay,{passive:!0}),this.autoplayBtn.addEventListener("keypress",this._handleAutoplay,{passive:!0}),this.slider.addEventListener("click",this._handleAutoplayEvent,{passive:!0}),this.slider.addEventListener("touchstart",this._handleAutoplayEvent,{passive:!0}),this.options.autoplayHoverPause&&(this.slider.addEventListener("mouseenter",this._handleAutoplayHover,{passive:!0}),this.slider.addEventListener("mouseleave",this._handleAutoplayHover,{passive:!0})),this.slider.insertAdjacentElement("beforebegin",this.autoplayBtn),this._toggleAutoplay(Bi.Enable)}},{key:"_disableAutoplay",value:function(){var e;this._toggleAutoplay(Bi.Disable),this.autoplayBtn.removeEventListener("click",this._handleAutoplay),this.autoplayBtn.removeEventListener("keypress",this._handleAutoplay),this.slider.removeEventListener("click",this._handleAutoplayEvent),this.slider.removeEventListener("touchstart",this._handleAutoplayEvent),this.slider.removeEventListener("mouseenter",this._handleAutoplayHover),this.slider.removeEventListener("mouseleave",this._handleAutoplayHover),null===(e=this.autoplayBtn.parentNode)||void 0===e||e.removeChild(this.autoplayBtn)}},{key:"_enableSwipe",value:function(){this.options.swipe&&(this.slider.addEventListener("mousedown",this._swipeMouseDown),this.slider.addEventListener("mouseleave",this._swipeMouseUp),this.slider.addEventListener("mouseup",this._swipeMouseUp),this.slider.addEventListener("mousemove",this._swipeMouseMove))}},{key:"_swipeMouseDown",value:function(e){this.mouseDown=!0,this.slider.classList.add("a11y-slider-scrolling"),this.swipeStartX=e.pageX-this.slider.offsetLeft,this.swipeX=this.slider.scrollLeft,this.swipeXCached=this.slider.scrollLeft}},{key:"_swipeMouseUp",value:function(){if(this.mouseDown){var e=(this.swipeXCached-(this.swipeX-1))*(this.swipeXCached-(this.swipeX+1))<=0;this.mouseDown=!1,this.slider.classList.remove("a11y-slider-scrolling"),this.modernBrowser&&this.slider.scroll({left:e?this.swipeXCached:this.swipeXCached-1,behavior:"smooth"})}}},{key:"_swipeMouseMove",value:function(e){if(this.mouseDown){e.preventDefault();var t=2*(e.pageX-this.slider.offsetLeft-this.swipeStartX);this.slider.scrollLeft=this.swipeX-t,this.swipeXCached=this.slider.scrollLeft}}},{key:"_disableSwipe",value:function(){this.slider.removeEventListener("mousedown",this._swipeMouseDown),this.slider.removeEventListener("mouseleave",this._swipeMouseUp),this.slider.removeEventListener("mouseup",this._swipeMouseUp),this.slider.removeEventListener("mousemove",this._swipeMouseMove)}},{key:"_toggleAutoplay",value:function(e){var t=this;e===Bi.Enable?(t._autoplayTimer=window.setInterval((function(){t._goPrevOrNext(Ii.Next)}),t.options.autoplaySpeed),t.autoplayBtn.setAttribute("data-autoplaying","true"),t._dispatchEvent("autoplayStart",{currentSlide:t.activeSlide,a11ySlider:t})):e===Bi.Disable&&(window.clearInterval(t._autoplayTimer),t._autoplayTimer=Fi.No,t.autoplayBtn.setAttribute("data-autoplaying","false"),t._dispatchEvent("autoplayStop",{currentSlide:t.activeSlide,a11ySlider:t}))}},{key:"_goPrevOrNext",value:function(e){var t=this;this._getActiveAndVisible(null,(function(i,n){var r=t.slider.firstElementChild,s=t.slider.lastElementChild,o=i[0],a=i[i.length-1];e===Ii.Next?a===s?!0===t.options.infinite&&t.scrollToSlide(r):t.scrollToSlide(n&&n.nextElementSibling):e===Ii.Prev&&(o===r?!0===t.options.infinite&&t.scrollToSlide(s):t.scrollToSlide(n&&n.previousElementSibling))}))}},{key:"scrollToSlide",value:function(e){var t,i=this,n=this.slider.scrollLeft;if(Vi(e))t=this.slides[e];else{if(!(e instanceof HTMLElement))throw new Error("scrollToSlide only accepts an HTMLElement or number");t=e}this._dispatchEvent("beforeChange",{currentSlide:this.activeSlide,nextSlide:t,a11ySlider:this}),!0===this.options.adaptiveHeight&&this._updateHeight(t),this.modernBrowser?this.slider.scroll({left:t.offsetLeft,behavior:"smooth"}):this.slider.scrollLeft=t.offsetLeft,setTimeout((function(){i.slider.scrollLeft===n&&i.sliderEnabled===Hi.Enabled&&i._setCSS(t)}),50),this._updateDots(t)}},{key:"updateOptions",value:function(e){Object.assign(this.options,e),this._disableSlider(),this._checkShouldEnable()}},{key:"_updateHeight",value:function(e){if(e instanceof HTMLElement){var t=qi(e,"height");this.slider.style.height="".concat(t,"px")}else this.slider.style.height=""}},{key:"refreshHeight",value:function(){this._updateHeight(this.activeSlide)}},{key:"_getActiveAndVisible",value:function(e,t){var i=!this.slider.classList.contains(this._sliderClass),n=this.slider.style.borderWidth;this.slider.style.borderWidth="0px",i&&this.slider.classList.add(this._sliderClass);var r=[],s=Math.round(this.slider.getBoundingClientRect().width),o=this.slider.scrollLeft-1<0?0:this.slider.scrollLeft-1;if(zi(this.slides,(function(e){var t=e.offsetLeft;t>=o&&t<o+s&&r.push(e)})),this.slider.style.borderWidth=n,i&&this.slider.classList.remove(this._sliderClass),this.visibleSlides=r,e)this.activeSlide=e;else if(!0===this.options.centerMode)this.activeSlide=this.visibleSlides[Math.floor((this.visibleSlides.length-1)/2)];else{var a;this.activeSlide=null!==(a=r[0])&&void 0!==a?a:this.slides[0]}t&&t(this.visibleSlides,this.activeSlide)}},{key:"_handlePrev",value:function(e){!0===Xi(e)&&(this._goPrevOrNext(Ii.Prev),this._toggleAutoplay(Bi.Disable))}},{key:"_handleNext",value:function(e){!0===Xi(e)&&(this._goPrevOrNext(Ii.Next),this._toggleAutoplay(Bi.Disable))}},{key:"_handleAutoplay",value:function(e){!0===Xi(e)&&(this._autoplayTimer===Fi.No?this._toggleAutoplay(Bi.Enable):this._toggleAutoplay(Bi.Disable))}},{key:"_handleAutoplayHover",value:function(e){"mouseenter"===e.type?this._autoplayTimer!==Fi.No&&(this._toggleAutoplay(Bi.Disable),this._pauseOnMouseLeave=!0):"mouseleave"===e.type&&this._pauseOnMouseLeave&&this._autoplayTimer===Fi.No&&(this._toggleAutoplay(Bi.Enable),this._pauseOnMouseLeave=!1)}},{key:"_handleAutoplayEvent",value:function(e){this._pauseOnMouseLeave=!1,this._toggleAutoplay(Bi.Disable)}},{key:"_handleScroll",value:function(){this._scrollFinish()}},{key:"_scrollFinish",value:function(){this._setCSS(),this._dispatchEvent("afterChange",{currentSlide:this.activeSlide,a11ySlider:this})}},{key:"_dispatchEvent",value:function(e,t){var i=function(e,t){var i=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:void 0},i.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i}(e,{detail:t});this.slider.dispatchEvent(i)}},{key:"destroy",value:function(){this._disableSlider(),window.removeEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("destroy",{a11ySlider:this})}}])&&ci(t.prototype,i),n&&ci(t,n),e}();module.exports=Ui;
