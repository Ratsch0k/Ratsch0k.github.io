_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"5ccv":function(t,e,r){"use strict";r.r(e);var n=r("nKUr"),i=r("3k8n"),c=[{title:"cv.abitur.title",description:function(){return Object(n.jsx)(i.a,{i18nKey:"cv.abitur.description",components:{list:Object(n.jsx)("ul",{}),item:Object(n.jsx)("li",{className:"list-disc ml-8"})}})},type:"cv.type.abitur",from:new Date("2013"),to:new Date("2017")},{title:"cv.moebelmartin.title",description:"cv.moebelmartin.description",type:"cv.type.minijob",from:new Date("2017"),to:new Date("2018")},{title:"cv.bachelor.title",description:function(){return Object(n.jsx)(i.a,{i18nKey:"cv.bachelor.description",components:{list:Object(n.jsx)("ul",{}),item:Object(n.jsx)("li",{className:"list-disc ml-8"})}})},type:"cv.type.bachelor",from:new Date("2017"),to:new Date("2021")},{title:"cv.trutzbox.title",description:"cv.trutzbox.description",type:"cv.type.freelance",from:new Date("2018")},{title:"cv.c++.title",description:"cv.c++.description",type:"cv.type.hiwi",from:new Date("2020"),to:new Date("2021")},{title:"cv.psaf.title",description:"cv.psaf.description",type:"cv.type.hiwi",from:new Date("2021")},{title:"cv.master.title",description:"cv.master.description",type:"cv.type.master",from:new Date("2021"),to:new Date("2023")}],o=r("q1tI"),s=r("ixM7"),a=r("9Koi"),l=r("UOvq"),d=function(t){var e=t.field;if("string"===typeof e)return Object(n.jsx)(i.a,{i18nKey:e});var r=e;return Object(n.jsx)(r,{})},u=function(t){var e,r=t.event,i=Object(a.a)(),c=i.i18n.language,o=i.t;return Object(n.jsxs)("div",{className:"border rounded-3xl shadow-primary-xl dark:shadow-none border-gray-300 dark:border-primary-border bg-white dark:bg-primary-dark p-4 sm:p-8 pt-4 sm:pt-4",style:{transition:"border-color 150ms, background-color 150ms, box-shadow 150ms"},children:[Object(n.jsx)("div",{className:"font-bold text-2xl pb-2 text-center transition-colors text-primary dark:text-secondary",children:Object(n.jsx)(d,{field:r.type})}),Object(n.jsx)("div",{className:"font-bold text-center leading-tight text-md sm:text-lg text-primary-light dark:text-primary-lightest",children:Object(n.jsx)(d,{field:r.title})}),Object(n.jsxs)("div",{className:"font-bold text-lg text-center pb-8 text-md sm:text-lg text-primary-light dark:text-primary-lightest",children:[r.from.toLocaleDateString(c,{month:"long",year:"numeric"})," - ",(null===(e=r.to)||void 0===e?void 0:e.toLocaleDateString(c,{month:"long",year:"numeric"}))||o("cv.noDate")]}),Object(n.jsx)("div",{className:"transition-colors text-gray-700 dark:text-gray-200",children:Object(n.jsx)(d,{field:r.description})})]})},b=function(t){var e=t.event,r=t.isVisible,i=t.index,c=t.lineWidth,a=t.indicatorSize,d=Object(l.a)().theme,b=Object(o.useMemo)((function(){return i%2===0}),[i]);return Object(n.jsxs)("div",{className:"\n        flex\n        h-full\n        space-x-2 sm:space-x-10\n        items-center \n        ".concat(b?"justify-start":"space-x-reverse sm:space-x-reverse flex-row-reverse","\n        ").concat(r?"text-secondary":"text-primary-light","\n      "),style:{marginLeft:"-".concat(a/2-c/2,"px"),marginRight:"-".concat(a/2-c/2,"px")},children:[Object(n.jsx)("svg",{viewBox:"0 0 10 10",width:a,strokeWidth:1.5,stroke:"currentColor",fill:"dark"===d?s.a.theme.backgroundColor.primary.dark:"#e3e3ff",style:{flex:"0 0 "+a+"px",transition:"fill 150ms"},children:Object(n.jsx)("circle",{cx:5,cy:5,r:4})}),Object(n.jsx)("div",{className:"transition-opacity duration-500 ".concat(r?"opacity-100":"opacity-0"),style:{flex:"1 1 auto"},children:Object(n.jsx)(u,{event:e})})]})},p=r("xQut"),j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:400,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(0==t)return"";for(var i=Math.min(e,r)/4,c=2,o="M"+c+" "+c+" V"+(r-2*i),s=0;s<t-1;s++){var a=void 0,l=(s+2)*r-2*i;l=s===t-2?n?(s+2)*r:(s+1)*r+r/2:(s+2)*r-2*i;var d="",u="",b="",p="";s%2==0?(a=e-c-2*i,d+=c,u+=c+2*i,b+=e-c,p+=e-c):(a=c+2*i,d+=e-c,u+=e-c-2*i,b+=c,p+=c),o+=" Q"+(d+=" "+((s+1)*r).toString())+" "+(u+=" "+((s+1)*r).toString())+" H"+a+" Q"+(b+=" "+((s+1)*r).toString())+" "+(p+=" "+((s+1)*r+2*i))+" V"+l}return o},h=function(t){var e,r,i=t.lineHeight,s=t.lineWidth,d=t.indicatorSize,u=Object(o.useRef)(null),h=Object(o.useRef)(null),f=Object(o.useRef)(null),m=Object(o.useState)(400),v=m[0],x=m[1],g=Object(o.useMemo)((function(){return j(c.length,v,i)}),[v,i,c]),y=Object(o.useMemo)((function(){return j(c.length,v,i,!0)}),[v,i,c]),O=Object(o.useState)(0),w=O[0],k=O[1],N=Object(o.useState)(!1),D=N[0],S=N[1];Object(o.useEffect)((function(){var t,e=parseInt(window.sessionStorage.getItem("cv-page")||"",10);isNaN(e)||(null===(t=u.current)||void 0===t||t.scroll(0,e))}),[]);var C=Object(l.a)().theme,E=Object(a.a)().t;Object(o.useEffect)((function(){var t;return f.current&&(t=new ResizeObserver((function(t){var e=t[0];x(e.contentRect.width)}))).observe(f.current),u.current&&!D&&k(_(u.current)),function(){t&&t.disconnect()}}),[]);var _=Object(o.useCallback)((function(t){return t.scrollTop/(t.scrollHeight-t.clientHeight-i/2)}),[]),P=Object(o.useCallback)((function(t){var e=t.target;D||k(_(e)),window.sessionStorage.setItem("cv-page",e.scrollTop.toString())}),[D]),T=Object(o.useCallback)((function(){h.current&&(h.current.style.transition="stroke-dashoffset 2s",getComputedStyle(h.current)),k(1),S(!0)}),[]);return Object(n.jsx)("div",{ref:u,className:"dark"===C?"scrollbar-light":"scrollbar",style:{height:"100vh",overflowY:"auto",paddingLeft:"1rem",paddingRight:"1rem"},onScroll:P,children:Object(n.jsxs)("div",{ref:f,className:"max-w-2xl",style:{display:"grid",gridTemplateColumns:"1fr",paddingTop:"7rem",paddingBottom:"7rem",margin:"auto"},children:[Object(n.jsx)("svg",{width:"100%",height:c.length*i,stroke:"currentColor",strokeWidth:s-1,strokeLinecap:"round",fill:"none",strokeDasharray:"10 20",className:"transition-colors text-primary-light dark:text-primary-lightest",style:{gridArea:"1 / 1"},children:Object(n.jsx)("path",{d:y})}),Object(n.jsx)("svg",{width:"100%",height:c.length*i,stroke:"currentColor",strokeWidth:s,strokeLinecap:"round",fill:"none",strokeDasharray:null===(e=h.current)||void 0===e?void 0:e.getTotalLength(),className:"transition-colors text-secondary dark:text-secondary",style:{gridArea:"1 / 1"},children:Object(n.jsx)("path",{ref:h,d:g,strokeDashoffset:h.current?h.current.getTotalLength()-i/2-((null===(r=h.current)||void 0===r?void 0:r.getTotalLength())-i/2)*w:0})}),Object(n.jsx)("div",{style:{gridArea:"1 / 1",width:"100%"},children:c.map((function(t,e){var r=w>=e/(c.length-1);return Object(n.jsx)("div",{style:{height:i},children:Object(n.jsx)(b,{event:t,isVisible:r||D,index:e,lineWidth:s,indicatorSize:d})},"event-".concat(t.title))}))}),Object(n.jsx)("div",{style:{gridArea:"1 / 1",display:"grid",justifyContent:"end",alignItems:"start",height:"fit-content"},children:Object(n.jsx)(p.a,{className:"rounded-lg "+(D?"opacity-0 cursor-default":""),disabled:D,onClick:T,children:E("cv.revealAll")})})]})})};h.defaultProps={lineHeight:500,lineWidth:4,indicatorSize:24};e.default=function(t){var e=t.setScrollable;return Object(o.useEffect)((function(){return e(!0)}),[]),Object(n.jsx)(h,{})}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},fUEV:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cv",function(){return r("5ccv")}])},xQut:function(t,e,r){"use strict";var n=r("nKUr"),i=r("cpVT"),c=r("dhJC");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(i.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.className,r=t.children,i=t.style,o=t.fullWidth,a=Object(c.a)(t,["className","children","style","fullWidth"]);return Object(n.jsx)("button",s(s({className:"text-md rounded-xl transition-colors text-black hover:bg-primary hover:text-primary-contrast dark:text-primary-contrast dark:hover:text-black dark:hover:bg-white font-bold uppercase p-2 fit-content "+e,style:s({width:o?"100%":"fit-content"},i)},a),{},{children:Object(n.jsx)("span",{children:r})}))}}},[["fUEV",0,1,3,4]]]);