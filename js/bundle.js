!function(){var t={3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1530:function(t,e,n){"use strict";var r=n(8710).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},9670:function(t,e,n){var r=n(111);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},8533:function(t,e,n){"use strict";var r=n(2092).forEach,o=n(9341),i=n(9207),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},1318:function(t,e,n){var r=n(5656),o=n(7466),i=n(1400),c=function(t){return function(e,n,c){var u,a=r(e),s=o(a.length),f=i(c,s);if(t&&n!=n){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},2092:function(t,e,n){var r=n(9974),o=n(8361),i=n(7908),c=n(7466),u=n(5417),a=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,h,g,y){for(var x,m,S=i(d),E=o(S),b=r(h,g,3),w=c(E.length),T=0,O=y||u,R=e?O(d,w):n||p?O(d,0):void 0;w>T;T++)if((v||T in E)&&(m=b(x=E[T],T,S),t))if(e)R[T]=m;else if(m)switch(t){case 3:return!0;case 5:return x;case 6:return T;case 2:a.call(R,x)}else switch(t){case 4:return!1;case 7:a.call(R,x)}return l?-1:s||f?f:R}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},9341:function(t,e,n){"use strict";var r=n(7293);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},9207:function(t,e,n){var r=n(9781),o=n(7293),i=n(6656),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,f,l)}))}},5417:function(t,e,n){var r=n(111),o=n(3157),i=n(5112)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},4326:function(t){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9920:function(t,e,n){var r=n(6656),o=n(3887),i=n(1236),c=n(3070);t.exports=function(t,e){for(var n=o(e),u=c.f,a=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||u(t,f,a(e,f))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},8324:function(t){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),c=n(1320),u=n(3505),a=n(9920),s=n(4705);t.exports=function(t,e){var n,f,l,p,v,d=t.target,h=t.global,g=t.stat;if(n=h?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(n,f))&&v.value:n[f],!s(h?f:d+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(n,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:function(t,e,n){"use strict";n(4916);var r=n(1320),o=n(7293),i=n(5112),c=n(2261),u=n(8880),a=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),v=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var d=i(t),h=!o((function(){var e={};return e[d]=function(){return 7},7!=""[t](e)})),g=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[a]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return e=!0,null},n[d](""),!e}));if(!h||!g||"replace"===t&&(!s||!f||p)||"split"===t&&!v){var y=/./[d],x=n(d,""[t],(function(t,e,n,r,o){return e.exec===c?h&&!o?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],S=x[1];r(String.prototype,t,m),r(RegExp.prototype,d,2==e?function(t,e){return S.call(t,this,e)}:function(t){return S.call(t,this)})}l&&u(RegExp.prototype[d],"sham",!0)}},9974:function(t,e,n){var r=n(3099);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},5005:function(t,e,n){var r=n(857),o=n(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},647:function(t,e,n){var r=n(7908),o=Math.floor,i="".replace,c=/\$([$&'`]|\d\d?|<[^>]*>)/g,u=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,n,a,s,f){var l=n+t.length,p=a.length,v=u;return void 0!==s&&(s=r(s),v=c),i.call(f,v,(function(r,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(l);case"<":c=s[i.slice(1,-1)];break;default:var u=+i;if(0===u)return r;if(u>p){var f=o(u/10);return 0===f?r:f<=p?void 0===a[f-1]?i.charAt(1):a[f-1]+i.charAt(1):r}c=a[u-1]}return void 0===c?"":c}))}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},6656:function(t){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7293),o=n(4326),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,e,n){var r=n(5465),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},9909:function(t,e,n){var r,o,i,c=n(8536),u=n(7854),a=n(111),s=n(8880),f=n(6656),l=n(5465),p=n(6200),v=n(3501),d=u.WeakMap;if(c){var h=l.state||(l.state=new d),g=h.get,y=h.has,x=h.set;r=function(t,e){return e.facade=t,x.call(h,t,e),e},o=function(t){return g.call(h,t)||{}},i=function(t){return y.call(h,t)}}else{var m=p("state");v[m]=!0,r=function(t,e){return e.facade=t,s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!a(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4705:function(t,e,n){var r=n(7293),o=/#|\.prototype\./,i=function(t,e){var n=u[c(t)];return n==s||n!=a&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},133:function(t,e,n){var r=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},8536:function(t,e,n){var r=n(7854),o=n(2788),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},3070:function(t,e,n){var r=n(9781),o=n(4664),i=n(9670),c=n(7593),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(5296),i=n(9114),c=n(5656),u=n(7593),a=n(6656),s=n(4664),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},6324:function(t,e,n){var r=n(6656),o=n(5656),i=n(1318).indexOf,c=n(3501);t.exports=function(t,e){var n,u=o(t),a=0,s=[];for(n in u)!r(c,n)&&r(u,n)&&s.push(n);for(;e.length>a;)r(u,n=e[a++])&&(~i(s,n)||s.push(n));return s}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},3887:function(t,e,n){var r=n(5005),o=n(8006),i=n(5181),c=n(9670);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},857:function(t,e,n){var r=n(7854);t.exports=r},1320:function(t,e,n){var r=n(7854),o=n(8880),i=n(6656),c=n(3505),u=n(2788),a=n(9909),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var a,s=!!u&&!!u.unsafe,p=!!u&&!!u.enumerable,v=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(a=f(n)).source||(a.source=l.join("string"==typeof e?e:""))),t!==r?(s?!v&&t[e]&&(p=!0):delete t[e],p?t[e]=n:o(t,e,n)):p?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},7651:function(t,e,n){var r=n(4326),o=n(2261);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},2261:function(t,e,n){"use strict";var r,o,i=n(7066),c=n(2999),u=RegExp.prototype.exec,a=String.prototype.replace,s=u,f=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var e,n,r,o,c=this,s=l&&c.sticky,v=i.call(c),d=c.source,h=0,g=t;return s&&(-1===(v=v.replace("y","")).indexOf("g")&&(v+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,h++),n=new RegExp("^(?:"+d+")",v)),p&&(n=new RegExp("^"+d+"$(?!\\s)",v)),f&&(e=c.lastIndex),r=u.call(s?n:c,g),s?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:f&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),p&&r&&r.length>1&&a.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},7066:function(t,e,n){"use strict";var r=n(9670);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,n){"use strict";var r=n(7293);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=n(8880);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},8710:function(t,e,n){var r=n(9958),o=n(4488),i=function(t){return function(e,n){var i,c,u=String(o(e)),a=r(n),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},1400:function(t,e,n){var r=n(9958),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9958:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},7466:function(t,e,n){var r=n(9958),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488);t.exports=function(t){return Object(r(t))}},7593:function(t,e,n){var r=n(111);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var e=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+n).toString(36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(6656),c=n(9711),u=n(133),a=n(3307),s=o("wks"),f=r.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},9554:function(t,e,n){"use strict";var r=n(2109),o=n(8533);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},4916:function(t,e,n){"use strict";var r=n(2109),o=n(2261);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:function(t,e,n){"use strict";var r=n(7007),o=n(9670),i=n(7466),c=n(9958),u=n(4488),a=n(1530),s=n(647),f=n(7651),l=Math.max,p=Math.min;r("replace",2,(function(t,e,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,d=r.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!v&&d||"string"==typeof r&&-1===r.indexOf(h)){var u=n(e,t,this,r);if(u.done)return u.value}var g=o(t),y=String(this),x="function"==typeof r;x||(r=String(r));var m=g.global;if(m){var S=g.unicode;g.lastIndex=0}for(var E=[];;){var b=f(g,y);if(null===b)break;if(E.push(b),!m)break;""===String(b[0])&&(g.lastIndex=a(y,i(g.lastIndex),S))}for(var w,T="",O=0,R=0;R<E.length;R++){b=E[R];for(var L=String(b[0]),_=l(p(c(b.index),y.length),0),A=[],I=1;I<b.length;I++)A.push(void 0===(w=b[I])?w:String(w));var P=b.groups;if(x){var C=[L].concat(A,_,y);void 0!==P&&C.push(P);var j=String(r.apply(void 0,C))}else j=s(L,y,_,A,P,r);_>=O&&(T+=y.slice(O,_)+j,O=_+L.length)}return T+y.slice(O)}]}))},4747:function(t,e,n){var r=n(7854),o=n(8324),i=n(8533),c=n(8880);for(var u in o){var a=r[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){"use strict";n(9554),n(4916),n(5306),n(4747);document.addEventListener("DOMContentLoaded",(function(){!function(t){var e=t.container,n=t.fields,r=t.slide,o=t.nextArrow,i=t.prevArrow,c=t.interval,u=t.mouseOverImage,a=t.slidesToShow,s=t.arrowsWrapper,f=t.slidesToScroll,l=t.speed,p=t.mouseOverDots;t.responsive.forEach((function(t){if(document.documentElement.offsetWidth<t.breackpoint){var e=t.settings,n=e.speedR,r=e.intervalR,o=e.mouseOverImageR,i=e.mouseOverDotsR,s=e.slidesToShowR,v=e.slidesToScrollR;l=n,c=r,u=o,p=i,a=s,f=v}}));var v,d,h,g=document.querySelector(e),y=document.querySelector(n),x=document.querySelectorAll(r),m=document.querySelector(o),S=document.querySelector(i),E=document.querySelector(s),b=window.getComputedStyle(g).width,w=0,T=0;v=A(b)*a,d=x.length-a-(f-1),g.style.width="".concat(v,"px"),g.style.overflow="hidden",y.style.width=100*x.length+"%",y.style.display="flex",x.forEach((function(t){t.style.width=b})),E.style.width="".concat(v,"px");var O=document.createElement("div");O.classList.add("div__dots"),O.style.marginTop="15px";for(var R=0;R<=d;R++)O.innerHTML+='\n        <button class="dot__style" data-count = '.concat(R+1,"></button>\n        ");g.append(O);var L=document.querySelectorAll(".dot__style");function _(t,e){t.forEach((function(t){t.classList.remove("dots__active")})),t[e].classList.add("dots__active")}function A(t){return+t.replace(/\D/gi,"")}function I(){w===A(b)*f*(x.length-a-(f-1))?w=0:w+=A(b)*f,y.style.transform="translateX(-".concat(w,"px)"),T=T===d?T=0:++T,_(L,T)}function P(t){t.addEventListener("mouseover",(function(){clearInterval(h)}))}function C(t){t.addEventListener("mouseout",(function e(n){h=setInterval((function(){I()}),l),p&&n.target.matches("button.dot__style")&&t.removeEventListener("mouseout",e)}))}document.querySelector(".div__dots"),_(L,T),m.addEventListener("click",(function(){I()})),S.addEventListener("click",(function(){0===w?w=A(b)*f*(x.length-a-(f-1)):w-=A(b)*f,y.style.transform="translateX(-".concat(w,"px)"),T=0===T?T=d:--T,_(L,T)})),c&&(h=setInterval((function(){I()}),l),u&&(P(y),C(y))),g.addEventListener("click",(function(t){if(t.target&&t.target.getAttribute("data-count")){var e=t.target.getAttribute("data-count"),n=t.target;_(L,T=e-1),P&&(clearInterval(h),C(n)),w=A(b)*f*(e-1),y.style.transform="translateX(-".concat(w,"px)")}}))}({container:".wrapper",fields:".slides__fields",slide:".slide",nextArrow:".next__arrow",prevArrow:".prev__arrow",arrowsWrapper:".inner__arrow",speed:3e3,interval:!0,mouseOverImage:!0,mouseOverDots:!0,slidesToShow:2,slidesToScroll:1,responsive:[{breackpoint:992,settings:{speedR:3e3,intervalR:!0,mouseOverImageR:!0,mouseOverDotsR:!0,slidesToShowR:1,slidesToScrollR:1}},{breackpoint:600,settings:{speedR:3e3,intervalR:!0,mouseOverImageR:!0,mouseOverDotsR:!0,slidesToShowR:1,slidesToScrollR:1}}]})}))}()}();
//# sourceMappingURL=bundle.js.map