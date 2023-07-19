"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[8463],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(a),u=r,f=k["".concat(m,".").concat(u)]||k[u]||c[u]||l;return a?n.createElement(f,i(i({ref:e},d),{},{components:a})):n.createElement(f,i({ref:e},d))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5256:(t,e,a)=>{a.d(e,{J:()=>r});var n=a(7294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kuc.DateTimePicker({value:"2021-11-11T11:30:00"});t.current.appendChild(e)}),[]),n.createElement("div",{className:"sample-container",id:"datetime-picker"},n.createElement("div",{id:"sample-container__components",ref:t}))}},2053:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5256);const i={id:"datetime-picker",title:"DateTimePicker",sidebar_label:"DateTimePicker"},p=void 0,m={unversionedId:"components/desktop/datetime-picker",id:"components/desktop/datetime-picker",title:"DateTimePicker",description:"Overview",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/components/desktop/datetime-picker.md",sourceDirName:"components/desktop",slug:"/components/desktop/datetime-picker",permalink:"/docusaurus/ja/docs/next/components/desktop/datetime-picker",draft:!1,tags:[],version:"current",frontMatter:{id:"datetime-picker",title:"DateTimePicker",sidebar_label:"DateTimePicker"},sidebar:"docs",previous:{title:"DatePicker",permalink:"/docusaurus/ja/docs/next/components/desktop/date-picker"},next:{title:"Dialog",permalink:"/docusaurus/ja/docs/next/components/desktop/dialog"}},o={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],k={toc:d},c="wrapper";function u(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"DateTimePicker \u306f\u65e5\u4ed8\u3068\u6642\u9593\u305d\u308c\u305e\u308c\u306e\u5165\u529b\u30a8\u30ea\u30a2\u3068\u9078\u629e\u80a2\u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,r.kt)(l.J,{mdxType:"DateTimePickerComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"\u4f7f\u7528\u3067\u304d\u308b\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u4e00\u89a7\u3067\u3059\u3002\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3057\u3066\u5024\u3092\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e class \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"error"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30a8\u30e9\u30fc\u306b\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001error \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e id \u540d"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8aac\u660e\u30e9\u30d9\u30eb"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u672a\u6307\u5b9a\u3001\u3042\u308b\u3044\u306f\u7a7a\u6587\u5b57\u306e\u5834\u5408\u3001label \u306f\u8868\u793a\u3055\u308c\u306a\u3044")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"language *1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"auto"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8a00\u8a9e\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},'\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3: "auto", "en", "ja", "zh", "zh-TW"',(0,r.kt)("br",null),'"auto" \u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001HTML \u306e lang \u8a2d\u5b9a\u306b\u5f93\u3046\uff08lang \u8a2d\u5b9a\u304c "en"/"zh"/"zh-TW"/"ja" \u4ee5\u5916\u306e\u5834\u5408\u306f\u3001\u8a00\u8a9e\u8a2d\u5b9a\u304c "en" \u306b\u306a\u308b\uff09')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"max"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6642\u523b\u30ea\u30b9\u30c8\u306e\u7d42\u4e86\u6642\u9593\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f HH:MM",(0,r.kt)("br",null),"\u6642\u523b\u30ea\u30b9\u30c8\u306f\u3001max \u306b\u6307\u5b9a\u3057\u305f\u6642\u523b\u307e\u3067\u8868\u793a\u3055\u308c\u3066\u3001\u305d\u308c\u4ee5\u964d\u306f\u8868\u793a\u3055\u308c\u306a\u3044",(0,r.kt)("br",null),"\u4ee5\u4e0b\u306e\u6642\u9593\u3082\u6307\u5b9a\u3067\u304d\u308b\uff08\u5185\u90e8\u7684\u306b HH:MM \u306b\u5909\u63db\u3055\u308c\u308b\uff09:",(0,r.kt)("li",null,"5:30"),(0,r.kt)("li",null,"05:3"),(0,r.kt)("li",null,"5:3"),"\u6642\u9593\u3084\u5206\u304c 1\u6587\u5b57\u306e\u5834\u5408\u30010 \u304c\u5148\u982d\u306b\u88dc\u5b8c\u3055\u308c\u308b",(0,r.kt)("br",null),"\u4e0d\u6b63\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084\u5024\u3084 min \u6642\u523b\u304c max \u6642\u523b\u3088\u308a\u3082\u5927\u304d\u3044\u5024\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"min"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6642\u523b\u30ea\u30b9\u30c8\u306e\u958b\u59cb\u6642\u9593\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f HH:MM",(0,r.kt)("br",null),"\u6642\u523b\u30ea\u30b9\u30c8\u306f\u3001min \u306b\u6307\u5b9a\u3057\u305f\u6642\u523b\u304b\u3089\u8868\u793a\u3055\u308c\u3066\u3001\u305d\u308c\u4ee5\u524d\u306f\u8868\u793a\u3055\u308c\u306a\u3044",(0,r.kt)("br",null),"\u4ee5\u4e0b\u306e\u6642\u9593\u3082\u6307\u5b9a\u3067\u304d\u308b\uff08\u5185\u90e8\u7684\u306b HH:MM \u306b\u5909\u63db\u3055\u308c\u308b\uff09:",(0,r.kt)("li",null,"5:30"),(0,r.kt)("li",null,"05:3"),(0,r.kt)("li",null,"5:3"),"\u6642\u9593\u3084\u5206\u304c 1\u6587\u5b57\u306e\u5834\u5408\u30010 \u304c\u5148\u982d\u306b\u88dc\u5b8c\u3055\u308c\u308b",(0,r.kt)("br",null),"\u4e0d\u6b63\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084\u5024\u3084 min \u6642\u523b\u304c max \u6642\u523b\u3088\u308a\u3082\u5927\u304d\u3044\u5024\u306e\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u8868\u793a\u3059\u308b\u30c6\u30ad\u30b9\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f YYYY-MM-DDTHH:MM:SS",(0,r.kt)("br",null),"\u4ee5\u4e0b\u306e\u65e5\u6642\u3082\u6307\u5b9a\u3067\u304d\u308b\uff08\u5185\u90e8\u7684\u306b YYYY-MM-DDTHH:MM:SS \u306b\u5909\u63db\u3055\u308c\u308b\uff09:",(0,r.kt)("li",null,"2021"),(0,r.kt)("li",null,"2021T01"),(0,r.kt)("li",null,"2021-06"),(0,r.kt)("li",null,"2021-12-12"),(0,r.kt)("li",null,"2021-12-12T01"),(0,r.kt)("li",null,"2021-12-12T01:01"),"\u65e5\u3084\u6708\u306e\u8a18\u8f09\u304c\u306a\u3044\u5834\u5408\u300101 \u3067\u88dc\u5b8c\u3055\u308c\u308b",(0,r.kt)("br",null),"\u6642\u9593\u3084\u5206\u3084\u79d2\u306e\u8a18\u8f09\u304c\u306a\u3044\u5834\u5408\u300100 \u3067\u88dc\u5b8c\u3055\u308c\u308b",(0,r.kt)("br",null),"\u4e0d\u6b63\u306a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3084\u5024\u3084 min/max \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u6307\u5b9a\u3057\u305f\u6709\u52b9\u306a\u6642\u523b\u306e\u7bc4\u56f2\u3092\u8d85\u3048\u308b\u5024\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u9078\u629e\u53ef/\u4e0d\u53ef\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"hour12"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6642\u523b\u8868\u8a18\u306e\u8a2d\u5b9a (12\u6642\u9593\u8868\u8a18/24\u6642\u9593\u8868\u8a18) \u30c7\u30d5\u30a9\u30eb\u30c8\u306f 24\u6642\u9593\u8868\u8a18"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6307\u5b9a\u3067\u304d\u308b\u30aa\u30d7\u30b7\u30e7\u30f3:",(0,r.kt)("br",null),"true: 12\u6642\u9593\u8868\u8a18",(0,r.kt)("br",null),"false: 24\u6642\u9593\u8868\u8a18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requiredIcon"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u5fc5\u9808\u30a2\u30a4\u30b3\u30f3\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u8868\u793a/\u975e\u8868\u793a\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeStep"),(0,r.kt)("td",{parentName:"tr",align:"left"},"number"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u6642\u523b\u30ea\u30b9\u30c8\u5185\u306e\u6642\u523b\u9593\u9694\u306e\u8a2d\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5358\u4f4d\u306f\u5206\uff08\u6b63\u306e\u6574\u6570\uff09",(0,r.kt)("br",null),"\u5c0f\u6570\u70b9\u4ee5\u4e0b\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306f\u3001\u6700\u3082\u8fd1\u3044\u6574\u6570\u306b\u4e38\u3081\u3089\u308c\u308b",(0,r.kt)("br",null),"\u6570\u5024\u4ee5\u5916\u306e\u5024\u3084 max \u3068 min \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u6642\u523b\u5dee\u7570\u3088\u308a\u3082\u5927\u304d\u306a\u5024\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u3001\u30a8\u30e9\u30fc\u3092\u51fa\u529b\u3059\u308b")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"*1: \u8868\u793a\u3055\u308c\u308b\u65e5\u4ed8\u306e\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306f\u3001language \u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8a2d\u5b9a\u306b\u5fdc\u3058\u3066\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u81ea\u52d5\u7684\u306b\u5207\u308a\u66ff\u308f\u308b\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},'"en" \u306e\u5834\u5408: MM/DD/YYYY'),(0,r.kt)("li",{parentName:"ul"},'"ja", "zh", "zh-TW" \u306e\u5834\u5408: YYYY-MM-DD'))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"\u6307\u5b9a\u3067\u304d\u308b\u30a4\u30d9\u30f3\u30c8\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5024\u304c\u5909\u66f4\u3055\u308c\u305f\u6642\u306e\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5f15\u6570\u306b\u306f Event \u306e event \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u3068\u308b",(0,r.kt)("br",null),(0,r.kt)("br",null),"event.detail \u3067\u4ee5\u4e0b\u306e\u5024\u3092\u53d7\u3051\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b",(0,r.kt)("br",null),"event.detail.oldValue : \u5909\u66f4\u524d\u306e value \u306e\u5024",(0,r.kt)("br",null),"event.detail.value : \u5909\u66f4\u5f8c\u306e value \u306e\u5024",(0,r.kt)("br",null),'event.detail.changedPart : \u5909\u66f4\u3055\u308c\u305f\u30d1\u30fc\u30c4 "date" \u3082\u3057\u304f\u306f "time"')))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"DateTimePicker(options)",(0,r.kt)("br",null),"\n\u4f7f\u7528\u3067\u304d\u308b\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306e\u4e00\u89a7\u3067\u3059\u3002"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u542b\u3080\u30aa\u30d6\u30b8\u30a7\u30af\u30c8"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docusaurus/ja/docs/next/getting-started/quick-start#%E5%B0%8E%E5%85%A5%E3%81%A8%E5%AE%9F%E8%A3%85%E6%96%B9%E6%B3%95"},"\u5c0e\u5165\u3068\u5b9f\u88c5\u65b9\u6cd5")," \u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")),(0,r.kt)("p",null,"\u5168\u3066\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u3092\u6307\u5b9a\u3057\u305f\u5834\u5408\u306e\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\nconst dateTimePicker = new Kuc.DateTimePicker({\n  label: 'DateTime',\n  requiredIcon: true,\n  language: 'auto',\n  hour12: false,\n  value: '2021-11-11T11:30:00',\n  error: 'Error occurred!',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  disabled: false,\n  timeStep: 30,\n  max: '23:59',\n  min: '00:00'\n});\nspace.appendChild(dateTimePicker);\n\ndateTimePicker.addEventListener('change', event => {\n  console.log(event);\n});\n")))}u.isMDXComponent=!0}}]);