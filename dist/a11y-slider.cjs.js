/* a11y-slider - v0.0.10
* https://github.com/mmahandev/a11y-slider
* Copyright (c) 2020 mmahandev. Licensed MIT */
"use strict";var commonjsGlobal="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var O="object",check=function(e){return e&&e.Math==Math&&e},global_1=check(typeof globalThis==O&&globalThis)||check(typeof window==O&&window)||check(typeof self==O&&self)||check(typeof commonjsGlobal==O&&commonjsGlobal)||Function("return this")(),path=global_1,hasOwnProperty={}.hasOwnProperty,has=function(e,t){return hasOwnProperty.call(e,t)},fails=function(e){try{return!!e()}catch(e){return!0}},descriptors=!fails((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),isObject=function(e){return"object"==typeof e?null!==e:"function"==typeof e},document$1=global_1.document,EXISTS=isObject(document$1)&&isObject(document$1.createElement),documentCreateElement=function(e){return EXISTS?document$1.createElement(e):{}},ie8DomDefine=!descriptors&&!fails((function(){return 7!=Object.defineProperty(documentCreateElement("div"),"a",{get:function(){return 7}}).a})),anObject=function(e){if(!isObject(e))throw TypeError(String(e)+" is not an object");return e},toPrimitive=function(e,t){if(!isObject(e))return e;var r,i;if(t&&"function"==typeof(r=e.toString)&&!isObject(i=r.call(e)))return i;if("function"==typeof(r=e.valueOf)&&!isObject(i=r.call(e)))return i;if(!t&&"function"==typeof(r=e.toString)&&!isObject(i=r.call(e)))return i;throw TypeError("Can't convert object to primitive value")},nativeDefineProperty=Object.defineProperty,f=descriptors?nativeDefineProperty:function(e,t,r){if(anObject(e),t=toPrimitive(t,!0),anObject(r),ie8DomDefine)try{return nativeDefineProperty(e,t,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(e[t]=r.value),e},objectDefineProperty={f:f},createPropertyDescriptor=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},hide=descriptors?function(e,t,r){return objectDefineProperty.f(e,t,createPropertyDescriptor(1,r))}:function(e,t,r){return e[t]=r,e},setGlobal=function(e,t){try{hide(global_1,e,t)}catch(r){global_1[e]=t}return t},shared=createCommonjsModule((function(e){var t=global_1["__core-js_shared__"]||setGlobal("__core-js_shared__",{});(e.exports=function(e,r){return t[e]||(t[e]=void 0!==r?r:{})})("versions",[]).push({version:"3.2.1",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),id=0,postfix=Math.random(),uid=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++id+postfix).toString(36)},nativeSymbol=!!Object.getOwnPropertySymbols&&!fails((function(){return!String(Symbol())})),Symbol$1=global_1.Symbol,store=shared("wks"),wellKnownSymbol=function(e){return store[e]||(store[e]=nativeSymbol&&Symbol$1[e]||(nativeSymbol?Symbol$1:uid)("Symbol."+e))},f$1=wellKnownSymbol,wrappedWellKnownSymbol={f:f$1},defineProperty=objectDefineProperty.f,defineWellKnownSymbol=function(e){var t=path.Symbol||(path.Symbol={});has(t,e)||defineProperty(t,e,{value:wrappedWellKnownSymbol.f(e)})};defineWellKnownSymbol("iterator");var set,get,has$1,nativePropertyIsEnumerable={}.propertyIsEnumerable,getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,NASHORN_BUG=getOwnPropertyDescriptor&&!nativePropertyIsEnumerable.call({1:2},1),f$2=NASHORN_BUG?function(e){var t=getOwnPropertyDescriptor(this,e);return!!t&&t.enumerable}:nativePropertyIsEnumerable,objectPropertyIsEnumerable={f:f$2},toString={}.toString,classofRaw=function(e){return toString.call(e).slice(8,-1)},split="".split,indexedObject=fails((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==classofRaw(e)?split.call(e,""):Object(e)}:Object,requireObjectCoercible=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},toIndexedObject=function(e){return indexedObject(requireObjectCoercible(e))},nativeGetOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,f$3=descriptors?nativeGetOwnPropertyDescriptor:function(e,t){if(e=toIndexedObject(e),t=toPrimitive(t,!0),ie8DomDefine)try{return nativeGetOwnPropertyDescriptor(e,t)}catch(e){}if(has(e,t))return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(e,t),e[t])},objectGetOwnPropertyDescriptor={f:f$3},functionToString=shared("native-function-to-string",Function.toString),WeakMap=global_1.WeakMap,nativeWeakMap="function"==typeof WeakMap&&/native code/.test(functionToString.call(WeakMap)),keys=shared("keys"),sharedKey=function(e){return keys[e]||(keys[e]=uid(e))},hiddenKeys={},WeakMap$1=global_1.WeakMap,enforce=function(e){return has$1(e)?get(e):set(e,{})},getterFor=function(e){return function(t){var r;if(!isObject(t)||(r=get(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return r}};if(nativeWeakMap){var store$1=new WeakMap$1,wmget=store$1.get,wmhas=store$1.has,wmset=store$1.set;set=function(e,t){return wmset.call(store$1,e,t),t},get=function(e){return wmget.call(store$1,e)||{}},has$1=function(e){return wmhas.call(store$1,e)}}else{var STATE=sharedKey("state");hiddenKeys[STATE]=!0,set=function(e,t){return hide(e,STATE,t),t},get=function(e){return has(e,STATE)?e[STATE]:{}},has$1=function(e){return has(e,STATE)}}var internalState={set:set,get:get,has:has$1,enforce:enforce,getterFor:getterFor},redefine=createCommonjsModule((function(e){var t=internalState.get,r=internalState.enforce,i=String(functionToString).split("toString");shared("inspectSource",(function(e){return functionToString.call(e)})),(e.exports=function(e,t,n,o){var s=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,l=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||has(n,"name")||hide(n,"name",t),r(n).source=i.join("string"==typeof t?t:"")),e!==global_1?(s?!l&&e[t]&&(a=!0):delete e[t],a?e[t]=n:hide(e,t,n)):a?e[t]=n:setGlobal(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||functionToString.call(this)}))})),aFunction=function(e){return"function"==typeof e?e:void 0},getBuiltIn=function(e,t){return arguments.length<2?aFunction(path[e])||aFunction(global_1[e]):path[e]&&path[e][t]||global_1[e]&&global_1[e][t]},ceil=Math.ceil,floor=Math.floor,toInteger=function(e){return isNaN(e=+e)?0:(e>0?floor:ceil)(e)},min=Math.min,toLength=function(e){return e>0?min(toInteger(e),9007199254740991):0},max=Math.max,min$1=Math.min,toAbsoluteIndex=function(e,t){var r=toInteger(e);return r<0?max(r+t,0):min$1(r,t)},createMethod=function(e){return function(t,r,i){var n,o=toIndexedObject(t),s=toLength(o.length),a=toAbsoluteIndex(i,s);if(e&&r!=r){for(;s>a;)if((n=o[a++])!=n)return!0}else for(;s>a;a++)if((e||a in o)&&o[a]===r)return e||a||0;return!e&&-1}},arrayIncludes={includes:createMethod(!0),indexOf:createMethod(!1)},indexOf=arrayIncludes.indexOf,objectKeysInternal=function(e,t){var r,i=toIndexedObject(e),n=0,o=[];for(r in i)!has(hiddenKeys,r)&&has(i,r)&&o.push(r);for(;t.length>n;)has(i,r=t[n++])&&(~indexOf(o,r)||o.push(r));return o},enumBugKeys=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],hiddenKeys$1=enumBugKeys.concat("length","prototype"),f$4=Object.getOwnPropertyNames||function(e){return objectKeysInternal(e,hiddenKeys$1)},objectGetOwnPropertyNames={f:f$4},f$5=Object.getOwnPropertySymbols,objectGetOwnPropertySymbols={f:f$5},ownKeys=getBuiltIn("Reflect","ownKeys")||function(e){var t=objectGetOwnPropertyNames.f(anObject(e)),r=objectGetOwnPropertySymbols.f;return r?t.concat(r(e)):t},copyConstructorProperties=function(e,t){for(var r=ownKeys(t),i=objectDefineProperty.f,n=objectGetOwnPropertyDescriptor.f,o=0;o<r.length;o++){var s=r[o];has(e,s)||i(e,s,n(t,s))}},replacement=/#|\.prototype\./,isForced=function(e,t){var r=data[normalize(e)];return r==POLYFILL||r!=NATIVE&&("function"==typeof t?fails(t):!!t)},normalize=isForced.normalize=function(e){return String(e).replace(replacement,".").toLowerCase()},data=isForced.data={},NATIVE=isForced.NATIVE="N",POLYFILL=isForced.POLYFILL="P",isForced_1=isForced,getOwnPropertyDescriptor$1=objectGetOwnPropertyDescriptor.f,_export=function(e,t){var r,i,n,o,s,a=e.target,l=e.global,c=e.stat;if(r=l?global_1:c?global_1[a]||setGlobal(a,{}):(global_1[a]||{}).prototype)for(i in t){if(o=t[i],n=e.noTargetGet?(s=getOwnPropertyDescriptor$1(r,i))&&s.value:r[i],!isForced_1(l?i:a+(c?".":"#")+i,e.forced)&&void 0!==n){if(typeof o==typeof n)continue;copyConstructorProperties(o,n)}(e.sham||n&&n.sham)&&hide(o,"sham",!0),redefine(r,i,o,e)}},objectKeys=Object.keys||function(e){return objectKeysInternal(e,enumBugKeys)},toObject=function(e){return Object(requireObjectCoercible(e))},nativeAssign=Object.assign,objectAssign=!nativeAssign||fails((function(){var e={},t={},r=Symbol();return e[r]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=nativeAssign({},e)[r]||"abcdefghijklmnopqrst"!=objectKeys(nativeAssign({},t)).join("")}))?function(e,t){for(var r=toObject(e),i=arguments.length,n=1,o=objectGetOwnPropertySymbols.f,s=objectPropertyIsEnumerable.f;i>n;)for(var a,l=indexedObject(arguments[n++]),c=o?objectKeys(l).concat(o(l)):objectKeys(l),u=c.length,d=0;u>d;)a=c[d++],descriptors&&!s.call(l,a)||(r[a]=l[a]);return r}:nativeAssign;_export({target:"Object",stat:!0,forced:Object.assign!==objectAssign},{assign:objectAssign});var IteratorPrototype,PrototypeOfArrayIteratorPrototype,arrayIterator,createMethod$1=function(e){return function(t,r){var i,n,o=String(requireObjectCoercible(t)),s=toInteger(r),a=o.length;return s<0||s>=a?e?"":void 0:(i=o.charCodeAt(s))<55296||i>56319||s+1===a||(n=o.charCodeAt(s+1))<56320||n>57343?e?o.charAt(s):i:e?o.slice(s,s+2):n-56320+(i-55296<<10)+65536}},stringMultibyte={codeAt:createMethod$1(!1),charAt:createMethod$1(!0)},correctPrototypeGetter=!fails((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),IE_PROTO=sharedKey("IE_PROTO"),ObjectPrototype=Object.prototype,objectGetPrototypeOf=correctPrototypeGetter?Object.getPrototypeOf:function(e){return e=toObject(e),has(e,IE_PROTO)?e[IE_PROTO]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?ObjectPrototype:null},ITERATOR=wellKnownSymbol("iterator"),BUGGY_SAFARI_ITERATORS=!1,returnThis=function(){return this};[].keys&&("next"in(arrayIterator=[].keys())?(PrototypeOfArrayIteratorPrototype=objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator)))!==Object.prototype&&(IteratorPrototype=PrototypeOfArrayIteratorPrototype):BUGGY_SAFARI_ITERATORS=!0),null==IteratorPrototype&&(IteratorPrototype={}),has(IteratorPrototype,ITERATOR)||hide(IteratorPrototype,ITERATOR,returnThis);var iteratorsCore={IteratorPrototype:IteratorPrototype,BUGGY_SAFARI_ITERATORS:BUGGY_SAFARI_ITERATORS},objectDefineProperties=descriptors?Object.defineProperties:function(e,t){anObject(e);for(var r,i=objectKeys(t),n=i.length,o=0;n>o;)objectDefineProperty.f(e,r=i[o++],t[r]);return e},html=getBuiltIn("document","documentElement"),IE_PROTO$1=sharedKey("IE_PROTO"),PROTOTYPE="prototype",Empty=function(){},createDict=function(){var e,t=documentCreateElement("iframe"),r=enumBugKeys.length;for(t.style.display="none",html.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),createDict=e.F;r--;)delete createDict[PROTOTYPE][enumBugKeys[r]];return createDict()},objectCreate=Object.create||function(e,t){var r;return null!==e?(Empty[PROTOTYPE]=anObject(e),r=new Empty,Empty[PROTOTYPE]=null,r[IE_PROTO$1]=e):r=createDict(),void 0===t?r:objectDefineProperties(r,t)};hiddenKeys[IE_PROTO$1]=!0;var defineProperty$1=objectDefineProperty.f,TO_STRING_TAG=wellKnownSymbol("toStringTag"),setToStringTag=function(e,t,r){e&&!has(e=r?e:e.prototype,TO_STRING_TAG)&&defineProperty$1(e,TO_STRING_TAG,{configurable:!0,value:t})},IteratorPrototype$1=iteratorsCore.IteratorPrototype,createIteratorConstructor=function(e,t,r){var i=t+" Iterator";return e.prototype=objectCreate(IteratorPrototype$1,{next:createPropertyDescriptor(1,r)}),setToStringTag(e,i,!1),e},aPossiblePrototype=function(e){if(!isObject(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e},objectSetPrototypeOf=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,r={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),t=r instanceof Array}catch(e){}return function(r,i){return anObject(r),aPossiblePrototype(i),t?e.call(r,i):r.__proto__=i,r}}():void 0),IteratorPrototype$2=iteratorsCore.IteratorPrototype,BUGGY_SAFARI_ITERATORS$1=iteratorsCore.BUGGY_SAFARI_ITERATORS,ITERATOR$1=wellKnownSymbol("iterator"),KEYS="keys",VALUES="values",ENTRIES="entries",returnThis$1=function(){return this},defineIterator=function(e,t,r,i,n,o,s){createIteratorConstructor(r,t,i);var a,l,c,u=function(e){if(e===n&&f)return f;if(!BUGGY_SAFARI_ITERATORS$1&&e in y)return y[e];switch(e){case KEYS:case VALUES:case ENTRIES:return function(){return new r(this,e)}}return function(){return new r(this)}},d=t+" Iterator",h=!1,y=e.prototype,p=y[ITERATOR$1]||y["@@iterator"]||n&&y[n],f=!BUGGY_SAFARI_ITERATORS$1&&p||u(n),v="Array"==t&&y.entries||p;if(v&&(a=objectGetPrototypeOf(v.call(new e)),IteratorPrototype$2!==Object.prototype&&a.next&&(objectGetPrototypeOf(a)!==IteratorPrototype$2&&(objectSetPrototypeOf?objectSetPrototypeOf(a,IteratorPrototype$2):"function"!=typeof a[ITERATOR$1]&&hide(a,ITERATOR$1,returnThis$1)),setToStringTag(a,d,!0))),n==VALUES&&p&&p.name!==VALUES&&(h=!0,f=function(){return p.call(this)}),y[ITERATOR$1]!==f&&hide(y,ITERATOR$1,f),n)if(l={values:u(VALUES),keys:o?f:u(KEYS),entries:u(ENTRIES)},s)for(c in l)!BUGGY_SAFARI_ITERATORS$1&&!h&&c in y||redefine(y,c,l[c]);else _export({target:t,proto:!0,forced:BUGGY_SAFARI_ITERATORS$1||h},l);return l},charAt=stringMultibyte.charAt,STRING_ITERATOR="String Iterator",setInternalState=internalState.set,getInternalState=internalState.getterFor(STRING_ITERATOR);defineIterator(String,"String",(function(e){setInternalState(this,{type:STRING_ITERATOR,string:String(e),index:0})}),(function(){var e,t=getInternalState(this),r=t.string,i=t.index;return i>=r.length?{value:void 0,done:!0}:(e=charAt(r,i),t.index+=e.length,{value:e,done:!1})}));var domIterables={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0},UNSCOPABLES=wellKnownSymbol("unscopables"),ArrayPrototype=Array.prototype;null==ArrayPrototype[UNSCOPABLES]&&hide(ArrayPrototype,UNSCOPABLES,objectCreate(null));var addToUnscopables=function(e){ArrayPrototype[UNSCOPABLES][e]=!0},ARRAY_ITERATOR="Array Iterator",setInternalState$1=internalState.set,getInternalState$1=internalState.getterFor(ARRAY_ITERATOR),es_array_iterator=defineIterator(Array,"Array",(function(e,t){setInternalState$1(this,{type:ARRAY_ITERATOR,target:toIndexedObject(e),index:0,kind:t})}),(function(){var e=getInternalState$1(this),t=e.target,r=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:i,done:!1}:"values"==r?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");addToUnscopables("keys"),addToUnscopables("values"),addToUnscopables("entries");var ITERATOR$2=wellKnownSymbol("iterator"),TO_STRING_TAG$1=wellKnownSymbol("toStringTag"),ArrayValues=es_array_iterator.values;for(var COLLECTION_NAME in domIterables){var Collection=global_1[COLLECTION_NAME],CollectionPrototype=Collection&&Collection.prototype;if(CollectionPrototype){if(CollectionPrototype[ITERATOR$2]!==ArrayValues)try{hide(CollectionPrototype,ITERATOR$2,ArrayValues)}catch(e){CollectionPrototype[ITERATOR$2]=ArrayValues}if(CollectionPrototype[TO_STRING_TAG$1]||hide(CollectionPrototype,TO_STRING_TAG$1,COLLECTION_NAME),domIterables[COLLECTION_NAME])for(var METHOD_NAME in es_array_iterator)if(CollectionPrototype[METHOD_NAME]!==es_array_iterator[METHOD_NAME])try{hide(CollectionPrototype,METHOD_NAME,es_array_iterator[METHOD_NAME])}catch(e){CollectionPrototype[METHOD_NAME]=es_array_iterator[METHOD_NAME]}}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}var SlideDirection,SliderState,AutoplaySwitch,IsAutoplaying,debounce=function(e,t,r){var i;return void 0===t&&(t=50),void 0===r&&(r={isImmediate:!1}),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var s=this,a=r.isImmediate&&void 0===i;void 0!==i&&clearTimeout(i),i=setTimeout((function(){i=void 0,r.isImmediate||e.apply(s,n)}),t),a&&e.apply(s,n)}},createElement=function(e){return(new DOMParser).parseFromString(e,"text/html").body.firstChild},a11yClick=function(e){var t=e.charCode||e.keyCode,r=e.type;return"click"===r||"keydown"===r&&(32===t||13===t)&&(e.preventDefault(),!0)},crossCustomEvent=function(e,t){var r=document.createEvent("CustomEvent");return t=t||{bubbles:!1,cancelable:!1,detail:void 0},r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r},isInteger=function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},everyElement=function(e,t){var r=e instanceof HTMLElement?[e]:e,i=!0,n=!1,o=void 0;try{for(var s,a=r[Symbol.iterator]();!(i=(s=a.next()).done);i=!0){var l=s.value;l instanceof HTMLElement&&t&&t(l)}}catch(e){n=!0,o=e}finally{try{i||null==a.return||a.return()}finally{if(n)throw o}}};!function(e){e[e.Prev=0]="Prev",e[e.Next=1]="Next"}(SlideDirection||(SlideDirection={})),function(e){e[e.Enabled=0]="Enabled",e[e.Disabled=1]="Disabled"}(SliderState||(SliderState={})),function(e){e[e.Enable=0]="Enable",e[e.Disable=1]="Disable"}(AutoplaySwitch||(AutoplaySwitch={})),function(e){e[e.Yes=0]="Yes",e[e.No=0]="No"}(IsAutoplaying||(IsAutoplaying={}));var A11YSlider=function(){function e(t,r){var i=this;_classCallCheck(this,e),this.slider=t,this.slides=t.children,this.sliderContainer=createElement('<div class="a11y-slider-container"></div>'),this._activeClass="a11y-slider-active",this._visibleClass="a11y-slider-visible",this._dotsClass="a11y-slider-dots",this._sliderClass="a11y-slider",this._focusable="a, area, input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]",this._autoplayTimer=IsAutoplaying.No,this._autoplayBtn=createElement('<button type="button" class="a11y-slider-autoplay">Toggle slider autoplay</button>'),this._pauseOnMouseLeave=!1,this.dots=null,this.activeSlide=this.slides[0],this.visibleSlides=[],this.sliderEnabled=SliderState.Disabled,this._hasCustomBtns=!!(r&&r.prevBtn||r&&r.nextBtn),this.options={container:!0,navBtns:!0,prevBtn:r&&r.prevBtn||createElement('<button type="button" class="a11y-slider-prev">Previous slide</button>'),nextBtn:r&&r.nextBtn||createElement('<button type="button" class="a11y-slider-next">Next slide</button>'),dots:!0,adaptiveHeight:!1,skipBtn:!0,slidesToShow:!1,autoplay:!1,autoplaySpeed:4e3,autoplayHoverPause:!0},Object.assign(this.options,r),this._handlePrev=this._handlePrev.bind(this),this._handleNext=this._handleNext.bind(this),this._handleAutoplay=this._handleAutoplay.bind(this),this._handleAutoplayHover=this._handleAutoplayHover.bind(this),this._checkShouldEnableDebounced=debounce(this._checkShouldEnable.bind(this),250),this._updateHeightDebounced=debounce(this._updateHeight.bind(this),250),this._generateDotsDebounced=debounce(this._generateDots.bind(this),250),this._updateScrollPosition=debounce((function(){return i.scrollToSlide(i.activeSlide)}),250),this._handleScroll=debounce(this._handleScroll.bind(this),150),this._init()}return _createClass(e,[{key:"_init",value:function(){this._checkShouldEnable(),window.addEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("init",{a11ySlider:this})}},{key:"_checkShouldEnable",value:function(){var e=this,t=!0;this.slides.length<=1&&(t=!1),this._getActiveAndVisible((function(r){r.length===e.slides.length&&(t=!1)})),this.slides.length===this.options.slidesToShow&&(t=!1),t&&this.sliderEnabled===SliderState.Disabled?this._enableSlider():t||this.sliderEnabled!==SliderState.Enabled||this._disableSlider(),!t&&this._hasCustomBtns&&(everyElement(this.options.prevBtn,(function(e){e.classList.add("a11y-slider-hide")})),everyElement(this.options.nextBtn,(function(e){e.classList.add("a11y-slider-hide")})))}},{key:"_enableSlider",value:function(){var e=this;this.sliderEnabled=SliderState.Enabled,this.options.container&&(this.slider.insertAdjacentElement("beforebegin",this.sliderContainer),this.sliderContainer.insertAdjacentElement("afterbegin",this.slider)),this.options.skipBtn&&this._addSkipBtn(),this.options.navBtns&&!this._hasCustomBtns&&(this.options.prevBtn instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.prevBtn),this.options.nextBtn instanceof HTMLElement&&this.slider.insertAdjacentElement("beforebegin",this.options.nextBtn)),everyElement(this.options.prevBtn,(function(t){t.addEventListener("click",e._handlePrev,{passive:!0}),t.addEventListener("keypress",e._handlePrev,{passive:!0}),e._hasCustomBtns&&t.classList.remove("a11y-slider-hide")})),everyElement(this.options.nextBtn,(function(t){t.addEventListener("click",e._handleNext,{passive:!0}),t.addEventListener("keypress",e._handleNext,{passive:!0}),e._hasCustomBtns&&t.classList.remove("a11y-slider-hide")})),this.options.dots&&this._generateDots(),this.slider.addEventListener("scroll",this._handleScroll,!1),this._setCSS(),!0===this.options.adaptiveHeight&&(this._updateHeight(this.activeSlide),window.addEventListener("resize",this._updateHeightDebounced.bind(this))),this.options.autoplay&&this._enableAutoplay(),window.addEventListener("resize",this._updateScrollPosition)}},{key:"_disableSlider",value:function(){var e=this;this.sliderEnabled=SliderState.Disabled,document.body.contains(this.sliderContainer)&&(this.sliderContainer.insertAdjacentElement("beforebegin",this.slider),this.sliderContainer.parentNode&&this.sliderContainer.parentNode.removeChild(this.sliderContainer)),this._removeSkipBtn(),everyElement(this.options.prevBtn,(function(t){t.removeEventListener("click",e._handlePrev),t.removeEventListener("keypress",e._handlePrev),e._hasCustomBtns?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),everyElement(this.options.nextBtn,(function(t){t.removeEventListener("click",e._handleNext),t.removeEventListener("keypress",e._handleNext),e._hasCustomBtns?t.classList.add("a11y-slider-hide"):t.parentNode&&t.parentNode.removeChild(t)})),this._removeDots(),this.slider.removeEventListener("scroll",this._handleScroll,!1),this._removeCSS(),window.removeEventListener("resize",this._updateHeightDebounced),this._updateHeight(!1),this.options.autoplay&&this._disableAutoplay(),window.removeEventListener("resize",this._updateScrollPosition)}},{key:"_setCSS",value:function(){this._updateItemsCSS(),this._getActiveAndVisible(),this.slider.classList.add(this._sliderClass);var e=!0,t=!1,r=void 0;try{for(var i,n=this.slides[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var o=i.value;o.classList.remove(this._activeClass),o.classList.remove(this._visibleClass)}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}this.activeSlide.classList.add(this._activeClass);var s=!0,a=!1,l=void 0;try{for(var c,u=this.visibleSlides[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){c.value.classList.add(this._visibleClass)}}catch(e){a=!0,l=e}finally{try{s||null==u.return||u.return()}finally{if(a)throw l}}this._updateDots(this.activeSlide),this._addFocusable()}},{key:"_removeCSS",value:function(){this._removeItemsCSS(),this.slider.classList.remove(this._sliderClass);var e=!0,t=!1,r=void 0;try{for(var i,n=this.slides[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var o=i.value;o.classList.remove(this._activeClass),o.classList.remove(this._visibleClass)}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}this._removeFocusable()}},{key:"_updateItemsCSS",value:function(){if(isInteger(this.options.slidesToShow)){var e=100/this.options.slidesToShow;this.slider.style.display="flex";var t=!0,r=!1,i=void 0;try{for(var n,o=this.slides[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){n.value.style.width="".concat(e,"%")}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}else{this.slider.style.removeProperty("display");var s=!0,a=!1,l=void 0;try{for(var c,u=this.slides[Symbol.iterator]();!(s=(c=u.next()).done);s=!0){c.value.style.removeProperty("width")}}catch(e){a=!0,l=e}finally{try{s||null==u.return||u.return()}finally{if(a)throw l}}}}},{key:"_removeItemsCSS",value:function(){this.slider.style.removeProperty("display");var e=!0,t=!1,r=void 0;try{for(var i,n=this.slides[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){i.value.style.removeProperty("width")}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}},{key:"_addFocusable",value:function(){this._removeFocusable();var e=!0,t=!1,r=void 0;try{for(var i,n=this.slides[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var o=i.value,s=o.querySelectorAll(this._focusable);o.classList.contains(this._visibleClass)||(o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"));var a=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){var h=u.value;o.classList.contains(this._visibleClass)||h.setAttribute("tabindex","-1")}}catch(e){l=!0,c=e}finally{try{a||null==d.return||d.return()}finally{if(l)throw c}}}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}},{key:"_removeFocusable",value:function(){var e=!0,t=!1,r=void 0;try{for(var i,n=this.slides[Symbol.iterator]();!(e=(i=n.next()).done);e=!0){var o=i.value,s=o.querySelectorAll(this._focusable);o.removeAttribute("tabindex"),o.removeAttribute("aria-hidden");var a=!0,l=!1,c=void 0;try{for(var u,d=s[Symbol.iterator]();!(a=(u=d.next()).done);a=!0){u.value.removeAttribute("tabindex")}}catch(e){l=!0,c=e}finally{try{a||null==d.return||d.return()}finally{if(l)throw c}}}}catch(e){t=!0,r=e}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}},{key:"_addSkipBtn",value:function(){var e=createElement('<button class="a11y-slider-sr-only" type="button" tabindex="0">Click to skip slider carousel</button>'),t=createElement('<div class="a11y-slider-sr-only" tabindex="-1">End of slider carousel</div>'),r=function(e){!0===a11yClick(e)&&t.focus()};e.addEventListener("click",r,{passive:!0}),e.addEventListener("keypress",r,{passive:!0}),this.slider.insertAdjacentElement("beforebegin",e),this.slider.insertAdjacentElement("afterend",t)}},{key:"_removeSkipBtn",value:function(){var e=document.querySelectorAll("a11y-slider-sr-only"),t=!0,r=!1,i=void 0;try{for(var n,o=e[Symbol.iterator]();!(t=(n=o.next()).done);t=!0){var s=n.value;s instanceof HTMLElement&&s.parentNode&&s.parentNode.removeChild(s)}}catch(e){r=!0,i=e}finally{try{t||null==o.return||o.return()}finally{if(r)throw i}}}},{key:"_generateDots",value:function(){var e=this;this._removeDots(),this.dots=createElement('<ul class="'.concat(this._dotsClass,'"></ul>'));for(var t=function(t){var r=createElement("<li></li>"),i=createElement('<button type="button"></button>');i.textContent="Move slider to item #".concat(t+1);var n=function(r){!0===a11yClick(r)&&(e.scrollToSlide(e.slides[t]),e._toggleAutoplay(AutoplaySwitch.Disable))};i.addEventListener("click",n,{passive:!0}),i.addEventListener("keypress",n,{passive:!0}),r.insertAdjacentElement("beforeend",i),e.dots.insertAdjacentElement("beforeend",r)},r=0;r<this._getDotCount();r++)t(r);this._updateDots(this.activeSlide),this.slider.insertAdjacentElement("afterend",this.dots),window.addEventListener("resize",this._generateDotsDebounced)}},{key:"_getDotCount",value:function(){return this.slides.length-(this.options.slidesToShow||this.visibleSlides.length)+1}},{key:"_removeDots",value:function(){this.dots instanceof HTMLElement&&this.dots.parentNode&&this.dots.parentNode.removeChild(this.dots),window.removeEventListener("resize",this._generateDotsDebounced)}},{key:"_updateDots",value:function(e){if(this.dots instanceof HTMLElement){var t=Array.prototype.indexOf.call(e.parentNode&&e.parentNode.children,e);t>this.dots.children.length&&(t=this.dots.children.length-1);var r=!0,i=!1,n=void 0;try{for(var o,s=this.dots.children[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){o.value.querySelector("button").classList.remove("active")}}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}this.dots.children[t].querySelector("button").classList.add("active")}}},{key:"_enableAutoplay",value:function(){this._autoplayBtn.addEventListener("click",this._handleAutoplay,{passive:!0}),this._autoplayBtn.addEventListener("keypress",this._handleAutoplay,{passive:!0}),this.options.autoplayHoverPause&&(this.slider.addEventListener("mouseenter",this._handleAutoplayHover,{passive:!0}),this.slider.addEventListener("mouseleave",this._handleAutoplayHover,{passive:!0})),this.slider.insertAdjacentElement("beforebegin",this._autoplayBtn),this._toggleAutoplay(AutoplaySwitch.Enable)}},{key:"_disableAutoplay",value:function(){this._toggleAutoplay(AutoplaySwitch.Disable),this._autoplayBtn.removeEventListener("click",this._handleAutoplay),this._autoplayBtn.removeEventListener("keypress",this._handleAutoplay),this.slider.removeEventListener("mouseenter",this._handleAutoplayHover),this.slider.removeEventListener("mouseleave",this._handleAutoplayHover),this._autoplayBtn.parentNode&&this._autoplayBtn.parentNode.removeChild(this._autoplayBtn)}},{key:"_toggleAutoplay",value:function(e){var t=this;e===AutoplaySwitch.Enable?(t._autoplayTimer=window.setInterval((function(){t._goPrevOrNext(SlideDirection.Next)}),t.options.autoplaySpeed),t._autoplayBtn.setAttribute("data-autoplaying","true")):e===AutoplaySwitch.Disable&&(window.clearInterval(t._autoplayTimer),t._autoplayTimer=IsAutoplaying.No,t._autoplayBtn.setAttribute("data-autoplaying","false"))}},{key:"_goPrevOrNext",value:function(e){var t=this;this._getActiveAndVisible((function(r,i){var n=t.slider.firstElementChild,o=t.slider.lastElementChild,s=r[0],a=r[r.length-1];e===SlideDirection.Next?a===o?t.scrollToSlide(n):t.scrollToSlide(i&&i.nextElementSibling):e===SlideDirection.Prev&&(s===n?t.scrollToSlide(o):t.scrollToSlide(i&&i.previousElementSibling))}))}},{key:"scrollToSlide",value:function(e){var t=!!HTMLElement.prototype.scrollTo;this._dispatchEvent("beforeChange",{currentSlide:this.activeSlide,nextSlide:e,a11ySlider:this}),!0===this.options.adaptiveHeight&&this._updateHeight(e),t?this.slider.scroll({left:e.offsetLeft,behavior:"smooth"}):this.slider.scrollLeft=e.offsetLeft,this._updateDots(e)}},{key:"updateOptions",value:function(e){Object.assign(this.options,e),this._disableSlider(),this._checkShouldEnable()}},{key:"_updateHeight",value:function(e){if(e instanceof HTMLElement){var t=e.offsetHeight;this.slider.style.height="".concat(t,"px")}else this.slider.style.height=""}},{key:"refreshHeight",value:function(){this._updateHeight(this.activeSlide)}},{key:"_getActiveAndVisible",value:function(e){var t=[],r=!0,i=!1,n=void 0;try{for(var o,s=this.slides[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var a=o.value,l=this.slider.clientWidth,c=this.slider.scrollLeft,u=a.offsetLeft;u>=c&&u<c+l&&t.push(a)}}catch(e){i=!0,n=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw n}}this.visibleSlides=t,this.activeSlide=t[0],e&&e(this.visibleSlides,this.activeSlide)}},{key:"_handlePrev",value:function(e){!0===a11yClick(e)&&(this._goPrevOrNext(SlideDirection.Prev),this._toggleAutoplay(AutoplaySwitch.Disable))}},{key:"_handleNext",value:function(e){!0===a11yClick(e)&&(this._goPrevOrNext(SlideDirection.Next),this._toggleAutoplay(AutoplaySwitch.Disable))}},{key:"_handleAutoplay",value:function(e){!0===a11yClick(e)&&(this._autoplayTimer===IsAutoplaying.No?this._toggleAutoplay(AutoplaySwitch.Enable):this._toggleAutoplay(AutoplaySwitch.Disable))}},{key:"_handleAutoplayHover",value:function(e){"mouseenter"===e.type?this._autoplayTimer!==IsAutoplaying.No&&(this._toggleAutoplay(AutoplaySwitch.Disable),this._pauseOnMouseLeave=!0):"mouseleave"===e.type&&this._pauseOnMouseLeave&&this._autoplayTimer===IsAutoplaying.No&&(this._toggleAutoplay(AutoplaySwitch.Enable),this._pauseOnMouseLeave=!1)}},{key:"_handleScroll",value:function(){this._setCSS(),this._dispatchEvent("afterChange",{currentSlide:this.activeSlide,a11ySlider:this})}},{key:"_dispatchEvent",value:function(e,t){var r=crossCustomEvent(e,{detail:t});this.slider.dispatchEvent(r)}},{key:"destroy",value:function(){this._disableSlider(),window.removeEventListener("resize",this._checkShouldEnableDebounced),this._dispatchEvent("destroy",{a11ySlider:this})}}]),e}();module.exports=A11YSlider;
