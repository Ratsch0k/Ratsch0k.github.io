_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{"/F++":function(e,t,r){"use strict";var n=r("cpVT"),o=r("nKUr"),c=r("dhJC"),i=r("q1tI"),a=r.n(i),u=r("48NU");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=a.a.forwardRef((function(e,t){var r=e.children,n=e.className,i=e.tooltip,a=e.tooltipProps,s=Object(c.a)(e,["children","className","tooltip","tooltipProps"]),f=Object(o.jsx)("button",l(l({ref:t,className:"".concat("p-2 rounded-lg text-primary dark:text-primary-lightest hover:text-primary-contrast hover:bg-primary dark:hover:text-primary dark:hover:bg-primary-lightest transition-all duration-250"," ").concat(n)},s),{},{children:r}));return i?Object(o.jsx)(u.a,l(l({label:i},a),{},{children:f})):f}));f.displayName="IconButton",t.a=f},"3Ddu":function(e,t,r){"use strict";function n(){if(console&&console.warn){for(var e,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];"string"===typeof r[0]&&(r[0]="react-i18next:: ".concat(r[0])),(e=console).warn.apply(e,r)}}r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var o={};function c(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];"string"===typeof t[0]&&o[t[0]]||("string"===typeof t[0]&&(o[t[0]]=new Date),n.apply(void 0,t))}function i(e,t,r){e.loadNamespaces(t,(function(){if(e.isInitialized)r();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),r()}))}}))}function a(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return c("i18n.languages were undefined or empty",t.languages),!0;var n=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===n.toLowerCase())return!0;var a=function(e,r){var n=t.services.backendConnector.state["".concat(e,"|").concat(r)];return-1===n||2===n};return!(r.bindI18n&&r.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(n,e)||(!t.services.backendConnector.backend||!(!a(n,e)||o&&!a(i,e))))}},"48NU":function(e,t,r){"use strict";var n=r("nKUr"),o=r("cpVT"),c=r("dhJC"),i=r("q1tI"),a=r("i8i4"),u=r.n(a);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t=e.children,r=e.label,o=e.position,a=e.spacing,s=e.disappearTimeout,f=e.style,p=Object(c.a)(e,["children","label","position","spacing","disappearTimeout","style"]),d=Object(i.useState)(!1),b=d[0],O=d[1],y=Object(i.useState)(!1),j=y[0],h=y[1],m=Object(i.useState)(null),g=m[0],v=m[1],w=Object(i.useState)(null)[1],x=Object(i.useState)(null)[1],P=Object(i.useState)([0,0]),k=P[0],S=P[1],N=Object(i.useRef)(document.createElement("div")),E=Object(i.useRef)(null),D=Object(i.useRef)(null);Object(i.useEffect)((function(){if(b)document.body.appendChild(N.current);else try{document.body.removeChild(N.current)}catch(e){}return function(){try{document.body.removeChild(N.current)}catch(e){}}}),[b]);var C=Object(i.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),w((function(e){return e&&clearTimeout(e),null})),x((function(e){return e&&clearTimeout(e),null})),O(!0),v(setTimeout((function(){h(!0),v(null)}),10))}),[]),I=Object(i.useCallback)((function(){w(setTimeout((function(){h(!1)}),s)),x(setTimeout((function(){O(!1)}),s+250))}),[s]),T=Object(i.useCallback)((function(){b&&g&&(clearTimeout(g),O(!1),h(!1),v(null))}),[b,g]),_=Object(i.useCallback)((function(e,t){var r=0,n=0;switch(o){case"top":r=-(e.clientHeight+a),n=(t.clientWidth-e.clientWidth)/2;break;case"bottom":r=t.clientHeight+a,n=(t.clientWidth-e.clientWidth)/2;break;case"left":r=t.clientHeight/2-e.clientHeight/2,n=-(e.clientWidth+a);break;case"right":r=t.clientHeight/2-e.clientHeight/2,n=t.clientWidth+a}var c=t;do{n+=c.offsetLeft,r+=c.offsetTop,c=c.offsetParent}while(null!==c);return r=Math.max(0,r),r=Math.min(r,window.innerHeight-e.clientHeight),n=Math.max(0,n),[r,n=Math.min(n,window.innerWidth-e.clientWidth)]}),[o,a]);Object(i.useEffect)((function(){E.current&&D.current&&S(_(D.current,E.current))}),[b,_]);var M=Object(n.jsx)("div",{className:"z-[70] absolute border border-gray-200 text-gray-700 dark:text-primary-contrast dark:border-primary-border bg-white dark:bg-primary-dark p-2 rounded-2xl shadow-primary-xl max-w-xs",style:{top:k[0],left:k[1],opacity:j?1:0,transition:"opacity 250ms"},ref:D,children:r});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",l(l({ref:E,onMouseEnter:C,onMouseLeave:I,onMouseDown:T,style:l({userSelect:"all"},f)},p),{},{children:t})),N.current&&u.a.createPortal(M,N.current)]})};f.defaultProps={position:"bottom",spacing:4,disappearTimeout:250},t.a=f},"7t/y":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("nKUr"),o=r("q1tI"),c=r.n(o),i=r("UOvq"),a=c.a.createContext({theme:null,setTheme:function(){},useSystemPreferences:function(){}});t.b=function(e){var t=e.children,r=Object(i.b)(),c=Object(o.useState)(r()),u=c[0],s=c[1],l=Object(o.useCallback)((function(e){"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),window.localStorage.setItem("theme",e),s(e)}),[]),f=Object(o.useCallback)((function(){window.localStorage.removeItem("theme"),s(r())}),[r]);return Object(n.jsx)(a.Provider,{value:{useSystemPreferences:f,theme:u,setTheme:l},children:t})}},"9Koi":function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r("J4zp"),o=r.n(n),c=r("lSNA"),i=r.n(c),a=r("q1tI"),u=r("QSL9"),s=r("3Ddu");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.i18n,n=Object(a.useContext)(u.a)||{},c=n.i18n,i=n.defaultNS,l=r||c||Object(u.d)();if(l&&!l.reportNamespaces&&(l.reportNamespaces=new u.b),!l){Object(s.d)("You will need to pass in an i18next instance by using initReactI18next");var p=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[p,{},!1];return d.t=p,d.i18n={},d.ready=!1,d}l.options.react&&void 0!==l.options.react.wait&&Object(s.d)("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var b=f(f(f({},Object(u.c)()),l.options.react),t),O=b.useSuspense,y=e||i||l.options&&l.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],l.reportNamespaces.addUsedNamespaces&&l.reportNamespaces.addUsedNamespaces(y);var j=(l.isInitialized||l.initializedStoreOnce)&&y.every((function(e){return Object(s.a)(e,l,b)}));function h(){return l.getFixedT(null,"fallback"===b.nsMode?y:y[0])}var m=Object(a.useState)(h),g=o()(m,2),v=g[0],w=g[1],x=Object(a.useRef)(!0);Object(a.useEffect)((function(){var e=b.bindI18n,t=b.bindI18nStore;function r(){x.current&&w(h)}return x.current=!0,j||O||Object(s.b)(l,y,(function(){x.current&&w(h)})),e&&l&&l.on(e,r),t&&l&&l.store.on(t,r),function(){x.current=!1,e&&l&&e.split(" ").forEach((function(e){return l.off(e,r)})),t&&l&&t.split(" ").forEach((function(e){return l.store.off(e,r)}))}}),[l,y.join()]);var P=Object(a.useRef)(!0);Object(a.useEffect)((function(){x.current&&!P.current&&w(h),P.current=!1}),[l]);var k=[v,l,j];if(k.t=v,k.i18n=l,k.ready=j,j)return k;if(!j&&!O)return k;throw new Promise((function(e){Object(s.b)(l,y,(function(){e()}))}))}},A4R1:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/legal",function(){return r("MyoK")}])},DVid:function(e,t,r){"use strict";var n=r("nKUr"),o=r("cpVT"),c=r("i8i4"),i=r.n(c),a=r("q1tI");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=function(e){var t=e.children,r=e.open,o=e.noFullscreen,c=e.zIndex,u=e.className,l=e.style,f=Object(a.useRef)(document.createElement("div"));return Object(a.useEffect)((function(){var e=document.getElementById("modal-root");if(r)e.appendChild(f.current);else try{e.removeChild(f.current)}catch(t){}return function(){try{e.removeChild(f.current)}catch(t){}}}),[r]),i.a.createPortal(Object(n.jsx)("div",{className:"absolute ".concat(o?"":"h-full w-full"," ").concat(u||""),style:s({zIndex:c},l),children:t}),f.current)};l.defaultProps={zIndex:40},t.a=l},J4zp:function(e,t,r){var n=r("wTVA"),o=r("m0LI"),c=r("ZhPi"),i=r("wkBT");e.exports=function(e,t){return n(e)||o(e,t)||c(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},QSL9:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"c",(function(){return O})),r.d(t,"b",(function(){return y})),r.d(t,"d",(function(){return j})),r.d(t,"e",(function(){return h}));var n=r("lwsE"),o=r.n(n),c=r("W8MJ"),i=r.n(c),a=r("lSNA"),u=r.n(a),s=r("q1tI");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p,d={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},b=r.n(s).a.createContext();function O(){return d}var y=function(){function e(){o()(this,e),this.usedNamespaces={}}return i()(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function j(){return p}var h={type:"3rdParty",init:function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d=f(f({},d),e)}(e.options.react),function(e){p=e}(e)}}},Qetd:function(e,t,r){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},Sct1:function(e,t,r){"use strict";var n=r("cpVT"),o=r("nKUr"),c=r("hyGL");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=c.b[e.size];return Object(o.jsx)("svg",a(a({fill:"currentColor",stroke:"currentColor",height:t,width:t,version:"1.1",viewBox:"0 0 26.458 26.458",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(o.jsx)("path",{d:"m3.175 1.3229-1.8521 1.8521 21.96 21.96 1.8521-1.8521zm21.96 1.8521-1.8521-1.8521-21.96 21.96 1.8521 1.8521z",strokeWidth:".26458px"})}))};u.defaultProps=c.a,t.a=u},UOvq:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r("q1tI"),o=r("7t/y");function c(){return function(){var e=window.localStorage.getItem("theme");return"dark"===e||null===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}}t.a=function(){return Object(n.useContext)(o.a)}},W8MJ:function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e},e.exports.default=e.exports,e.exports.__esModule=!0},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},YpTl:function(e,t,r){"use strict";var n=r("cpVT"),o=r("nKUr"),c=r("dhJC"),i=r("q1tI"),a=r("UOvq");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=Object(i.forwardRef)((function(e,t){var r=e.children,n=e.className,i=Object(c.a)(e,["children","className"]),u=Object(a.a)().theme;return Object(o.jsx)("div",s(s({className:"h-full w-full overflow-auto pt-20 md:pt-28 ".concat("dark"===u?"scrollbar-light":"scrollbar"," ").concat(void 0!==n?n:""),ref:t},i),{},{children:Object(o.jsx)("div",{className:"max-w-4xl mx-auto",children:r})}))}));l.displayName="PageContent",t.a=l},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},cpVT:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",(function(){return n}))},dhJC:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,"a",(function(){return n}))},hyGL:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}));var n={small:16,medium:24,large:32},o={size:"medium"}},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},m0LI:function(e,t){e.exports=function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c=[],i=!0,a=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(c.push(n.value),!t||c.length!==t);i=!0);}catch(u){a=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}},e.exports.default=e.exports,e.exports.__esModule=!0},wTVA:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},wkBT:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0}},[["A4R1",0,1,6]]]);