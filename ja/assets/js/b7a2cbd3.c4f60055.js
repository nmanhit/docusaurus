"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[7485],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return n?a.createElement(f,o(o({ref:e},c),{},{components:n})):a.createElement(f,o({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},616:(t,e,n)=>{n.d(e,{o:()=>r});var a=n(7294);const r=()=>{const t=(0,a.useRef)();return(0,a.useEffect)((()=>{const e=new Kuc.Text({label:"Text",value:"orange"}),n=new Kuc.FieldGroup({className:"options-class",id:"options-id",label:"FieldGroup",disabled:!1,expanded:!1,visible:!0,content:e});t.current.appendChild(n)}),[]),a.createElement("div",{className:"sample-container",id:"field-group"},a.createElement("div",{id:"sample-container__components",ref:t}))}},2796:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(616);const o={id:"field-group",title:"FieldGroup",sidebar_label:"FieldGroup"},i=void 0,p={unversionedId:"components/desktop/field-group",id:"components/desktop/field-group",title:"FieldGroup",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/components/desktop/field-group.md",sourceDirName:"components/desktop",slug:"/components/desktop/field-group",permalink:"/docusaurus/ja/docs/next/components/desktop/field-group",draft:!1,tags:[],version:"current",frontMatter:{id:"field-group",title:"FieldGroup",sidebar_label:"FieldGroup"},sidebar:"docs",previous:{title:"Dropdown",permalink:"/docusaurus/ja/docs/next/components/desktop/dropdown"},next:{title:"MultiChoice",permalink:"/docusaurus/ja/docs/next/components/desktop/multichoice"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],m={toc:c},s="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(s,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"FieldGroup \u306f\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u958b\u9589\u3092\u5207\u308a\u66ff\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)(l.o,{mdxType:"FieldGroupComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Content \u306e DOM"),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML \u304c\u8a18\u8f09\u3055\u308c\u305f string \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u81ea\u52d5\u7684\u306b HTML \u306b\u5909\u63db\u3057\u3066\u305d\u306e\u307e\u307e\u8868\u793a\u3055\u308c\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u7de8\u96c6\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"expanded"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u958b\u9589\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"*1: kintone UI Component \u306f\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u3092\u5185\u90e8\u7684\u306b\u30b5\u30cb\u30bf\u30a4\u30ba\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30e6\u30fc\u30b6\u30fc\u5165\u529b\u3092\u53d7\u3051\u4ed8\u3051\u308b\u3088\u3046\u306a\u5b9f\u88c5\u3067\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001\u958b\u767a\u8005\u81ea\u8eab\u3067 XSS \u5bfe\u7b56\u3092\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u958b\u9589\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.expanded : \u5909\u66f4\u5f8c\u306e expanded \u306e\u5024\uff08boolean\uff09")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"FieldGroup(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docusaurus/ja/docs/next/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst text = new Kuc.Text({\n  label: 'Text',\n  value: 'orange'\n});\nconst fieldGroup = new Kuc.FieldGroup({\n  className: 'options-class',\n  id: 'options-id',\n  label: 'FieldGroup',\n  disabled: false,\n  expanded: false,\n  visible: true,\n  content: text\n});\n\nspace.appendChild(fieldGroup);\n\nfieldGroup.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);