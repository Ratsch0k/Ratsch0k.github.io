(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/F++":function(e,n,t){"use strict";var r=t("cpVT"),i=t("nKUr"),c=t("dhJC"),s=t("q1tI"),a=t.n(s),o=t("48NU");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=a.a.forwardRef((function(e,n){var t=e.children,r=e.className,s=e.tooltip,a=e.tooltipProps,l=Object(c.a)(e,["children","className","tooltip","tooltipProps"]),d=Object(i.jsx)("button",u(u({ref:n,className:"".concat("p-2 rounded-lg text-primary dark:text-primary-lightest hover:text-primary-contrast hover:bg-primary dark:hover:text-primary dark:hover:bg-primary-lightest transition-all duration-250"," ").concat(r)},l),{},{children:t}));return s?Object(i.jsx)(o.a,u(u({label:s},a),{},{children:d})):d}));d.displayName="IconButton",n.a=d},"48NU":function(e,n,t){"use strict";var r=t("nKUr"),i=t("cpVT"),c=t("dhJC"),s=t("q1tI"),a=t("i8i4"),o=t.n(a);function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.children,t=e.label,i=e.position,a=e.spacing,l=e.disappearTimeout,d=e.style,h=Object(c.a)(e,["children","label","position","spacing","disappearTimeout","style"]),b=Object(s.useState)(!1),f=b[0],g=b[1],j=Object(s.useState)(!1),p=j[0],O=j[1],m=Object(s.useState)(null),E=m[0],w=m[1],D=Object(s.useState)(null)[1],v=Object(s.useState)(null)[1],y=Object(s.useState)([0,0]),S=y[0],I=y[1],x=Object(s.useRef)(document.createElement("div")),N=Object(s.useRef)(null),z=Object(s.useRef)(null);Object(s.useEffect)((function(){if(f)document.body.appendChild(x.current);else try{document.body.removeChild(x.current)}catch(e){}return function(){try{document.body.removeChild(x.current)}catch(e){}}}),[f]);var R=Object(s.useCallback)((function(e){e.preventDefault(),e.stopPropagation(),D((function(e){return e&&clearTimeout(e),null})),v((function(e){return e&&clearTimeout(e),null})),g(!0),w(setTimeout((function(){O(!0),w(null)}),10))}),[]),k=Object(s.useCallback)((function(){D(setTimeout((function(){O(!1)}),l)),v(setTimeout((function(){g(!1)}),l+250))}),[l]),P=Object(s.useCallback)((function(){f&&E&&(clearTimeout(E),g(!1),O(!1),w(null))}),[f,E]),T=Object(s.useCallback)((function(e,n){var t=0,r=0;switch(i){case"top":t=-(e.clientHeight+a),r=(n.clientWidth-e.clientWidth)/2;break;case"bottom":t=n.clientHeight+a,r=(n.clientWidth-e.clientWidth)/2;break;case"left":t=n.clientHeight/2-e.clientHeight/2,r=-(e.clientWidth+a);break;case"right":t=n.clientHeight/2-e.clientHeight/2,r=n.clientWidth+a}var c=n;do{r+=c.offsetLeft,t+=c.offsetTop,c=c.offsetParent}while(null!==c);return t=Math.max(0,t),t=Math.min(t,window.innerHeight-e.clientHeight),r=Math.max(0,r),[t,r=Math.min(r,window.innerWidth-e.clientWidth)]}),[i,a]);Object(s.useEffect)((function(){N.current&&z.current&&I(T(z.current,N.current))}),[f,T]);var A=Object(r.jsx)("div",{className:"z-[70] absolute border border-gray-300 text-gray-700 dark:text-primary-contrast dark:border-primary-border bg-white dark:bg-primary-dark p-2 rounded-2xl shadow-primary-xl max-w-xs",style:{top:S[0],left:S[1],opacity:p?1:0,transition:"opacity 250ms"},ref:z,children:t});return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",u(u({ref:N,onMouseEnter:R,onMouseLeave:k,onMouseDown:P,style:u({userSelect:"all"},d)},h),{},{children:n})),x.current&&o.a.createPortal(A,x.current)]})};d.defaultProps={position:"bottom",spacing:4,disappearTimeout:250},n.a=d},DVid:function(e,n,t){"use strict";var r=t("nKUr"),i=t("cpVT"),c=t("i8i4"),s=t.n(c),a=t("q1tI");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){var n=e.children,t=e.open,i=e.noFullscreen,c=e.zIndex,o=e.className,u=e.style,d=Object(a.useRef)(document.createElement("div"));return Object(a.useEffect)((function(){var e=document.getElementById("modal-root");if(t)e.appendChild(d.current);else try{e.removeChild(d.current)}catch(n){}return function(){try{e.removeChild(d.current)}catch(n){}}}),[t]),s.a.createPortal(Object(r.jsx)("div",{className:"absolute ".concat(i?"":"h-full w-full"," ").concat(o||""),style:l({zIndex:c},u),children:n}),d.current)};u.defaultProps={zIndex:40},n.a=u},MyoK:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),i=t("9Koi"),c=t("YpTl"),s=t("q1tI"),a=t("cpVT"),o=t("dhJC"),l=t("PSZa"),u=t("Sct1"),d=t("/F++");function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.children,t=e.close,i=e.noClose,c=Object(o.a)(e,["children","close","noClose"]);return Object(r.jsxs)("h2",b(b({className:"text-2xl font-bold align-baseline mb-4"},c),{},{children:[n,!i&&Object(r.jsx)(d.a,{onClick:t,className:"float-right",children:Object(r.jsx)(u.a,{})})]}))};function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p=function(e){var n=e.close,t=Object(o.a)(e,["close"]),c=Object(i.a)().t;return Object(r.jsxs)(l.a,j(j({},t),{},{children:[Object(r.jsx)(f,{close:n,children:c("imprint.title")}),"Simon Lukas Kurz",Object(r.jsx)("br",{}),"Kornweg, 1A",Object(r.jsx)("br",{}),"64291 Darmstadt",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("h3",{className:"text-xl font-bold",children:c("imprint.contact")}),c("imprint.phone"),": +49 06151 2739858",Object(r.jsx)("br",{}),c("imprint.telefax"),": +49 06151 2739858",Object(r.jsx)("br",{}),c("imprint.mail"),": simon.kurz@rocketmail.com",Object(r.jsx)("br",{})]}))},O=t("xQut"),m=t("UOvq");function E(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?E(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var D,v=function(e){var n=e.close,t=Object(o.a)(e,["close"]),c=Object(i.a)().t,s=Object(m.a)().theme;return Object(r.jsxs)(l.a,w(w({},t),{},{className:"max-w-4xl",children:[Object(r.jsx)(f,{close:n,children:c("privacyPolicy.title")}),Object(r.jsxs)("div",{className:"overflow-y-auto ".concat("dark"===s?"scrollbar-light":"scrollbar"," max-h-[80vh]"),children:[Object(r.jsx)("h2",{children:"1. Datenschutz auf einen Blick"}),Object(r.jsx)("h3",{children:"Allgemeine Hinweise"})," ",Object(r.jsx)("p",{children:"Die folgenden Hinweise geben einen einfachen \xdcberblick dar\xfcber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie pers\xf6nlich identifiziert werden k\xf6nnen. Ausf\xfchrliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgef\xfchrten Datenschutzerkl\xe4rung."}),Object(r.jsx)("h3",{children:"Datenerfassung auf dieser Website"})," ",Object(r.jsx)("h4",{children:"Wer ist verantwortlich f\xfcr die Datenerfassung auf dieser Website?"})," ",Object(r.jsx)("p",{children:"Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten k\xf6nnen Sie dem Abschnitt \u201eHinweis zur Verantwortlichen Stelle\u201c in dieser Datenschutzerkl\xe4rung entnehmen."})," ",Object(r.jsx)("h4",{children:"Wie erfassen wir Ihre Daten?"})," ",Object(r.jsx)("p",{children:"Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.\xa0B. um Daten handeln, die Sie in ein Kontaktformular eingeben."})," ",Object(r.jsx)("p",{children:"Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.\xa0B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."})," ",Object(r.jsx)("h4",{children:"Wof\xfcr nutzen wir Ihre Daten?"})," ",Object(r.jsx)("p",{children:"Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gew\xe4hrleisten. Andere Daten k\xf6nnen zur Analyse Ihres Nutzerverhaltens verwendet werden."})," ",Object(r.jsx)("h4",{children:"Welche Rechte haben Sie bez\xfcglich Ihrer Daten?"})," ",Object(r.jsx)("p",{children:"Sie haben jederzeit das Recht, unentgeltlich Auskunft \xfcber Herkunft, Empf\xe4nger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben au\xdferdem ein Recht, die Berichtigung oder L\xf6schung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, k\xf6nnen Sie diese Einwilligung jederzeit f\xfcr die Zukunft widerrufen. Au\xdferdem haben Sie das Recht, unter bestimmten Umst\xe4nden die Einschr\xe4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zust\xe4ndigen Aufsichtsbeh\xf6rde zu."})," ",Object(r.jsx)("p",{children:"Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k\xf6nnen Sie sich jederzeit an uns wenden."}),Object(r.jsx)("h2",{children:"2. Hosting"}),Object(r.jsx)("h3",{children:"Externes Hosting"})," ",Object(r.jsx)("p",{children:"Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die \xfcber eine Website generiert werden, handeln."})," ",Object(r.jsx)("p",{children:"Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserf\xfcllung gegen\xfcber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschlie\xdflich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und \xa7 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endger\xe4t des Nutzers (z.\xa0B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar."})," ",Object(r.jsx)("p",{children:"Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erf\xfcllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen."})," ",Object(r.jsx)("p",{children:"Wir setzen folgenden Hoster ein:"}),Object(r.jsxs)("p",{className:"p-4 rounded bg-gray-50 text-gray-800 font-bold",style:{width:"fit-content"},children:["DigitalOcean",Object(r.jsx)("br",{}),"New York (HQ), NY",Object(r.jsx)("br",{}),"United States",Object(r.jsx)("br",{}),"101 6th Ave"]}),Object(r.jsx)("h2",{children:"3. Allgemeine Hinweise und Pflicht\xadinformationen"}),Object(r.jsx)("h3",{children:"Datenschutz"})," ",Object(r.jsx)("p",{children:"Die Betreiber dieser Seiten nehmen den Schutz Ihrer pers\xf6nlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerkl\xe4rung."})," ",Object(r.jsx)("p",{children:"Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie pers\xf6nlich identifiziert werden k\xf6nnen. Die vorliegende Datenschutzerkl\xe4rung erl\xe4utert, welche Daten wir erheben und wof\xfcr wir sie nutzen. Sie erl\xe4utert auch, wie und zu welchem Zweck das geschieht."})," ",Object(r.jsx)("p",{children:"Wir weisen darauf hin, dass die Daten\xfcbertragung im Internet (z.\xa0B. bei der Kommunikation per E-Mail) Sicherheitsl\xfccken aufweisen kann. Ein l\xfcckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht m\xf6glich."}),Object(r.jsx)("h3",{children:"Hinweis zur verantwortlichen Stelle"})," ",Object(r.jsx)("p",{children:"Die verantwortliche Stelle f\xfcr die Datenverarbeitung auf dieser Website ist:"}),Object(r.jsxs)("p",{className:"p-4 rounded bg-gray-50 text-gray-800 font-bold",style:{width:"fit-content"},children:["Simon Lukas Kurz",Object(r.jsx)("br",{}),"Kornweg 1A",Object(r.jsx)("br",{}),"64291 Darmstadt",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Telefon: +49 175 6127160",Object(r.jsx)("br",{}),"E-Mail: simon.kurz@rocketmail.com"]}),Object(r.jsx)("p",{children:"Verantwortliche Stelle ist die nat\xfcrliche oder juristische Person, die allein oder gemeinsam mit anderen \xfcber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.\xa0B. Namen, E-Mail-Adressen o. \xc4.) entscheidet."}),Object(r.jsx)("h3",{children:"Speicherdauer"})," ",Object(r.jsx)("p",{children:"Soweit innerhalb dieser Datenschutzerkl\xe4rung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck f\xfcr die Datenverarbeitung entf\xe4llt. Wenn Sie ein berechtigtes L\xf6schersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gel\xf6scht, sofern wir keine anderen rechtlich zul\xe4ssigen Gr\xfcnde f\xfcr die Speicherung Ihrer personenbezogenen Daten haben (z.\xa0B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die L\xf6schung nach Fortfall dieser Gr\xfcnde."}),Object(r.jsx)("h3",{children:"Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website"})," ",Object(r.jsx)("p",{children:"Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endger\xe4t (z.\xa0B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zus\xe4tzlich auf Grundlage von \xa7 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserf\xfcllung oder zur Durchf\xfchrung vorvertraglicher Ma\xdfnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erf\xfcllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. \xdcber die jeweils im Einzelfall einschl\xe4gigen Rechtsgrundlagen wird in den folgenden Abs\xe4tzen dieser Datenschutzerkl\xe4rung informiert."}),Object(r.jsx)("h3",{children:"Widerruf Ihrer Einwilligung zur Datenverarbeitung"})," ",Object(r.jsx)("p",{children:"Viele Datenverarbeitungsvorg\xe4nge sind nur mit Ihrer ausdr\xfccklichen Einwilligung m\xf6glich. Sie k\xf6nnen eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtm\xe4\xdfigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xfchrt."}),Object(r.jsx)("h3",{children:"Widerspruchsrecht gegen die Datenerhebung in besonderen F\xe4llen sowie gegen Direktwerbung (Art. 21 DSGVO)"})," ",Object(r.jsx)("p",{children:"WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GR\xdcNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH F\xdcR EIN AUF DIESE BESTIMMUNGEN GEST\xdcTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKL\xc4RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR K\xd6NNEN ZWINGENDE SCHUTZW\xdcRDIGE GR\xdcNDE F\xdcR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN \xdcBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUS\xdcBUNG ODER VERTEIDIGUNG VON RECHTSANSPR\xdcCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO)."})," ",Object(r.jsx)("p",{children:"WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH F\xdcR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO)."}),Object(r.jsx)("h3",{children:"Beschwerde\xadrecht bei der zust\xe4ndigen Aufsichts\xadbeh\xf6rde"})," ",Object(r.jsx)("p",{children:"Im Falle von Verst\xf6\xdfen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh\xf6rde, insbesondere in dem Mitgliedstaat ihres gew\xf6hnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutma\xdflichen Versto\xdfes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe."}),Object(r.jsx)("h3",{children:"Recht auf Daten\xad\xfcbertrag\xadbarkeit"})," ",Object(r.jsx)("p",{children:"Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xfcllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem g\xe4ngigen, maschinenlesbaren Format aush\xe4ndigen zu lassen. Sofern Sie die direkte \xdcbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."}),Object(r.jsx)("h3",{children:"SSL- bzw. TLS-Verschl\xfcsselung"})," ",Object(r.jsx)("p",{children:"Diese Seite nutzt aus Sicherheitsgr\xfcnden und zum Schutz der \xdcbertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschl\xfcsselung. Eine verschl\xfcsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201ehttp://\u201c auf \u201ehttps://\u201c wechselt und an dem Schloss-Symbol in Ihrer Browserzeile."})," ",Object(r.jsx)("p",{children:"Wenn die SSL- bzw. TLS-Verschl\xfcsselung aktiviert ist, k\xf6nnen die Daten, die Sie an uns \xfcbermitteln, nicht von Dritten mitgelesen werden."}),Object(r.jsx)("h3",{children:"Auskunft, L\xf6schung und Berichtigung"})," ",Object(r.jsx)("p",{children:"Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft \xfcber Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empf\xe4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder L\xf6schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten k\xf6nnen Sie sich jederzeit an uns wenden."}),Object(r.jsx)("h3",{children:"Recht auf Einschr\xe4nkung der Verarbeitung"})," ",Object(r.jsx)("p",{children:"Sie haben das Recht, die Einschr\xe4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu k\xf6nnen Sie sich jederzeit an uns wenden. Das Recht auf Einschr\xe4nkung der Verarbeitung besteht in folgenden F\xe4llen:"})," ",Object(r.jsxs)("ul",{children:[" ",Object(r.jsx)("li",{children:"Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, ben\xf6tigen wir in der Regel Zeit, um dies zu \xfcberpr\xfcfen. F\xfcr die Dauer der Pr\xfcfung haben Sie das Recht, die Einschr\xe4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."})," ",Object(r.jsx)("li",{children:"Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtm\xe4\xdfig geschah/geschieht, k\xf6nnen Sie statt der L\xf6schung die Einschr\xe4nkung der Datenverarbeitung verlangen."})," ",Object(r.jsx)("li",{children:"Wenn wir Ihre personenbezogenen Daten nicht mehr ben\xf6tigen, Sie sie jedoch zur Aus\xfcbung, Verteidigung oder Geltendmachung von Rechtsanspr\xfcchen ben\xf6tigen, haben Sie das Recht, statt der L\xf6schung die Einschr\xe4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."})," ",Object(r.jsx)("li",{children:"Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abw\xe4gung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen \xfcberwiegen, haben Sie das Recht, die Einschr\xe4nkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen."})," "]})," ",Object(r.jsx)("p",{children:"Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschr\xe4nkt haben, d\xfcrfen diese Daten \u2013 von ihrer Speicherung abgesehen \u2013 nur mit Ihrer Einwilligung oder zur Geltendmachung, Aus\xfcbung oder Verteidigung von Rechtsanspr\xfcchen oder zum Schutz der Rechte einer anderen nat\xfcrlichen oder juristischen Person oder aus Gr\xfcnden eines wichtigen \xf6ffentlichen Interesses der Europ\xe4ischen Union oder eines Mitgliedstaats verarbeitet werden."}),Object(r.jsx)("h2",{children:"4. Datenerfassung auf dieser Website"}),Object(r.jsx)("h3",{children:"Server-Log-Dateien"})," ",Object(r.jsx)("p",{children:"Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns \xfcbermittelt. Dies sind:"}),Object(r.jsxs)("ul",{className:"p-4 rounded bg-gray-50 text-gray-800 font-bold",style:{width:"fit-content"},children:[Object(r.jsx)("li",{children:"Browsertyp und Browserversion"}),Object(r.jsx)("li",{children:"Verwendetes Betriebssystem"}),Object(r.jsx)("li",{children:"Referrer URL"}),Object(r.jsx)("li",{children:"Hostname des zugreifenden Rechners"}),Object(r.jsx)("li",{children:"Uhrzeit der Serveranfrage"}),Object(r.jsx)("li",{children:"IP-Adresse"})]})," ",Object(r.jsx)("p",{children:"Eine Zusammenf\xfchrung dieser Daten mit anderen Datenquellen wird nicht vorgenommen."})," ",Object(r.jsx)("p",{children:"Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website \u2013 hierzu m\xfcssen die Server-Log-Files erfasst werden."}),Object(r.jsx)("h3",{children:"Anfrage per E-Mail, Telefon oder Telefax"})," ",Object(r.jsx)("p",{children:"Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter."})," ",Object(r.jsx)("p",{children:"Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf\xfcllung eines Vertrags zusammenh\xe4ngt oder zur Durchf\xfchrung vorvertraglicher Ma\xdfnahmen erforderlich ist. In allen \xfcbrigen F\xe4llen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde."})," ",Object(r.jsx)("p",{children:"Die von Ihnen an uns per Kontaktanfragen \xfcbersandten Daten verbleiben bei uns, bis Sie uns zur L\xf6schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f\xfcr die Datenspeicherung entf\xe4llt (z.\xa0B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen \u2013 insbesondere gesetzliche Aufbewahrungsfristen \u2013 bleiben unber\xfchrt."}),Object(r.jsxs)("p",{children:["Quelle: ",Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",className:"text-primary hover:text-primary-dark hover:underline hover:visited:text-purple-800 visited:text-purple-800",href:"https://www.e-recht24.de",children:"https://www.e-recht24.de"})]})]})]}))},y=t("nOHt");!function(e){e.IMPRINT="imprint",e.PRIVACY_POLICY="privacy-policy"}(D||(D={}));n.default=function(){var e=Object(i.a)().t,n=Object(s.useState)(null),t=n[0],a=n[1],o=Object(y.useRouter)(),l=Object(s.useCallback)((function(){o.push("/legal"),a(null)}),[]),u=Object(s.useCallback)((function(e){o.push("/legal/"+e),a(e)}),[o]),d=Object(s.useCallback)((function(e){return function(){return u(e)}}),[u]);return Object(s.useEffect)((function(){switch(o.asPath.replace("/legal/","")){case D.IMPRINT:a(D.IMPRINT);break;case D.PRIVACY_POLICY:a(D.PRIVACY_POLICY)}}),[o.asPath]),Object(r.jsxs)("div",{children:[Object(r.jsx)(c.a,{id:"legal-page",children:Object(r.jsxs)("div",{className:"flex flex-col justify-center m-auto max-w-xs items-stretch space-y-2",children:[Object(r.jsx)(O.a,{fullWidth:!0,onClick:d(D.IMPRINT),children:e("imprint.title")}),Object(r.jsx)(O.a,{fullWidth:!0,onClick:d(D.PRIVACY_POLICY),children:e("privacyPolicy.title")})]})}),Object(r.jsx)(p,{open:t===D.IMPRINT,close:l}),Object(r.jsx)(v,{open:t===D.PRIVACY_POLICY,close:l})]})}},PSZa:function(e,n,t){"use strict";(function(e){var r=t("cpVT"),i=t("nKUr"),c=t("dhJC"),s=t("q1tI"),a=t("DVid");function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(n){var t=n.open,r=n.children,o=n.className,u=Object(c.a)(n,["open","children","className"]),d=Object(s.useState)(!1),h=d[0],b=d[1];return Object(s.useEffect)((function(){t?e((function(){return b(t)})):setTimeout((function(){return b(!1)}),150)}),[t]),Object(i.jsx)(a.a,{open:t||h,children:Object(i.jsx)("div",{className:"h-full w-full flex items-center transition-opacity",style:{backgroundColor:"rgba(0.0, 0.0, 0.0, 0.3)",opacity:t&&h?1:0},children:Object(i.jsx)("div",l(l({className:"bg-white dark:bg-background-dark text-black dark:text-primary-contrast rounded-xl z-40 m-auto text-black p-4 ".concat(void 0!==o?o:""),style:{opacity:t&&h?1:0,transition:"color, background-color, opacity",transitionDuration:"150ms"}},u),{},{children:r}))})})}}).call(this,t("URgk").setImmediate)},Sct1:function(e,n,t){"use strict";var r=t("cpVT"),i=t("nKUr"),c=t("hyGL");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var o=function(e){var n=c.b[e.size];return Object(i.jsx)("svg",a(a({fill:"currentColor",stroke:"currentColor",height:n,width:n,version:"1.1",viewBox:"0 0 26.458 26.458",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(i.jsx)("path",{d:"m3.175 1.3229-1.8521 1.8521 21.96 21.96 1.8521-1.8521zm21.96 1.8521-1.8521-1.8521-21.96 21.96 1.8521 1.8521z",strokeWidth:".26458px"})}))};o.defaultProps=c.a,n.a=o},URgk:function(e,n,t){(function(e){var r="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function c(e,n){this._id=e,this._clearFn=n}n.setTimeout=function(){return new c(i.call(setTimeout,r,arguments),clearTimeout)},n.setInterval=function(){return new c(i.call(setInterval,r,arguments),clearInterval)},n.clearTimeout=n.clearInterval=function(e){e&&e.close()},c.prototype.unref=c.prototype.ref=function(){},c.prototype.close=function(){this._clearFn.call(r,this._id)},n.enroll=function(e,n){clearTimeout(e._idleTimeoutId),e._idleTimeout=n},n.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},n._unrefActive=n.active=function(e){clearTimeout(e._idleTimeoutId);var n=e._idleTimeout;n>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),n))},t("YBdB"),n.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,n.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,t("ntbh"))},YBdB:function(e,n,t){(function(e,n){!function(e,t){"use strict";if(!e.setImmediate){var r,i=1,c={},s=!1,a=e.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(e);o=o&&o.setTimeout?o:e,"[object process]"==={}.toString.call(e.process)?r=function(e){n.nextTick((function(){u(e)}))}:function(){if(e.postMessage&&!e.importScripts){var n=!0,t=e.onmessage;return e.onmessage=function(){n=!1},e.postMessage("","*"),e.onmessage=t,n}}()?function(){var n="setImmediate$"+Math.random()+"$",t=function(t){t.source===e&&"string"===typeof t.data&&0===t.data.indexOf(n)&&u(+t.data.slice(n.length))};e.addEventListener?e.addEventListener("message",t,!1):e.attachEvent("onmessage",t),r=function(t){e.postMessage(n+t,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){u(e.data)},r=function(n){e.port2.postMessage(n)}}():a&&"onreadystatechange"in a.createElement("script")?function(){var e=a.documentElement;r=function(n){var t=a.createElement("script");t.onreadystatechange=function(){u(n),t.onreadystatechange=null,e.removeChild(t),t=null},e.appendChild(t)}}():r=function(e){setTimeout(u,0,e)},o.setImmediate=function(e){"function"!==typeof e&&(e=new Function(""+e));for(var n=new Array(arguments.length-1),t=0;t<n.length;t++)n[t]=arguments[t+1];var s={callback:e,args:n};return c[i]=s,r(i),i++},o.clearImmediate=l}function l(e){delete c[e]}function u(e){if(s)setTimeout(u,0,e);else{var n=c[e];if(n){s=!0;try{!function(e){var n=e.callback,t=e.args;switch(t.length){case 0:n();break;case 1:n(t[0]);break;case 2:n(t[0],t[1]);break;case 3:n(t[0],t[1],t[2]);break;default:n.apply(void 0,t)}}(n)}finally{l(e),s=!1}}}}}("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,t("ntbh"),t("8oxB"))},YpTl:function(e,n,t){"use strict";var r=t("cpVT"),i=t("nKUr"),c=t("dhJC"),s=t("q1tI"),a=t("UOvq"),o=t("nOHt");function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=Object(s.forwardRef)((function(e,n){var t=e.children,r=e.className,l=e.contentClassname,d=Object(c.a)(e,["children","className","contentClassname"]),h=Object(a.a)().theme,b=Object(o.useRouter)(),f=Object(s.useRef)(null);Object(s.useEffect)((function(){var e,n=parseInt(window.sessionStorage.getItem(d.id)||"",10);(console.log(n),isNaN(n))||f.current&&(null===(e=f.current)||void 0===e||e.scrollTo(0,n))}),[b.asPath]);var g=Object(s.useCallback)((function(e){var n=e.currentTarget.scrollTop;window.sessionStorage.setItem(d.id,n.toString())}),[b.asPath]);return Object(i.jsx)("div",u(u({className:"h-full w-full overflow-auto pt-20 md:pt-28 ".concat("dark"===h?"scrollbar-light":"scrollbar"," ").concat(void 0!==r?r:""),ref:function(e){f.current=e,"function"===typeof n?n(e):n&&e&&(n.current=e)},onScroll:g},d),{},{children:Object(i.jsx)("div",{className:null!==l&&void 0!==l?l:"max-w-4xl mx-auto",children:t})}))}));d.displayName="PageContent",n.a=d},hyGL:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return i}));var r={small:16,medium:24,large:32},i={size:"medium"}},ntbh:function(e,n){(function(n){e.exports=function(){var e={149:function(e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"===typeof window&&(n=window)}e.exports=n}},t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={exports:{}},c=!0;try{e[n](i,i.exports,r),c=!1}finally{c&&delete t[n]}return i.exports}return r.ab=n+"/",r(149)}()}).call(this,"/")},xQut:function(e,n,t){"use strict";var r=t("nKUr"),i=t("cpVT"),c=t("dhJC");function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){Object(i.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(e){var n=e.className,t=e.children,i=e.style,s=e.fullWidth,o=Object(c.a)(e,["className","children","style","fullWidth"]);return Object(r.jsx)("button",a(a({className:"text-md rounded-xl transition-colors text-black hover:bg-primary hover:text-primary-contrast dark:text-primary-contrast dark:hover:text-black dark:hover:bg-white font-bold uppercase p-2 fit-content "+n,style:a({width:s?"100%":"fit-content"},i)},o),{},{children:Object(r.jsx)("span",{children:t})}))}}}]);