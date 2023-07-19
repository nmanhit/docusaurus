"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[5170],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,u=m["".concat(p,".").concat(k)]||m[k]||c[k]||l;return a?n.createElement(u,i(i({ref:e},s),{},{components:a})):n.createElement(u,i({ref:e},s))}));function u(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[m]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7081:(t,e,a)=>{a.d(e,{n:()=>r});var n=a(7294);const r=()=>{const t=(0,n.useRef)();return(0,n.useEffect)((()=>{const e=new Kuc.TextArea({label:"TextArea",value:"This is sample."}),a=new Kuc.TimePicker({label:"Time",value:"11:30"}),n=new Kuc.Tabs({borderVisible:!0,className:"kuc-tabs-class",id:"sample-id",items:[{label:"A",content:e,value:"a",disabled:!1},{label:"B",content:a,value:"b",disabled:!1},{label:"C",content:"This is a sample.",value:"c",disabled:!1}],value:"a",visible:!0});t.current.appendChild(n)}),[]),n.createElement("div",{className:"sample-container",id:"tabs"},n.createElement("div",{id:"sample-container__components",ref:t}))}},3181:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905)),l=a(7081);const i={id:"tabs",title:"Tabs",sidebar_label:"Tabs"},o=void 0,p={unversionedId:"components/desktop/tabs",id:"version-1.11.0/components/desktop/tabs",title:"Tabs",description:"Overview",source:"@site/versioned_docs/version-1.11.0/components/desktop/tabs.md",sourceDirName:"components/desktop",slug:"/components/desktop/tabs",permalink:"/docusaurus/docs/components/desktop/tabs",draft:!1,tags:[],version:"1.11.0",frontMatter:{id:"tabs",title:"Tabs",sidebar_label:"Tabs"},sidebar:"docs",previous:{title:"Table",permalink:"/docusaurus/docs/components/desktop/table"},next:{title:"Text",permalink:"/docusaurus/docs/components/desktop/text"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Item",id:"item",level:4},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2},{value:"Related Articles",id:"related-articles",level:2}],m={toc:s},c="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Tabs component allows the user to display multiple tabs that can switch displaying contents."),(0,r.kt)(l.n,{mdxType:"TabsComponent"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Selected value"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("li",null,"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is matched in the ",(0,r.kt)("inlineCode",{parentName:"td"},"items"),", the tab will be displayed even if it\u2019s disabled"),(0,r.kt)("li",null,"The first visible tab will be displayed in the following cases:",(0,r.kt)("ul",null,(0,r.kt)("li",null,"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is not matched in the ",(0,r.kt)("inlineCode",{parentName:"td"},"items")),(0,r.kt)("li",null,"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is matched in the ",(0,r.kt)("inlineCode",{parentName:"td"},"items"),", but the tab is not visible"))),(0,r.kt)("li",null,"Will result an error if the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is not string type"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"borderVisible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the border surrounding the content"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"items"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Array<",(0,r.kt)("a",{parentName:"td",href:"#item"},"Item"),">"),(0,r.kt)("td",{parentName:"tr",align:"left"},"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of tabs to display"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the value of ",(0,r.kt)("inlineCode",{parentName:"td"},"items")," is not an array")))),(0,r.kt)("h4",{id:"item"},"Item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"content"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string/HTMLElement"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tab content"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"label"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Tab name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"value"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Key of each tab",(0,r.kt)("br",null),"*",(0,r.kt)("inlineCode",{parentName:"td"},"Required")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"Unique")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Will result an error if the ",(0,r.kt)("inlineCode",{parentName:"td"},"value")," is duplicated in ",(0,r.kt)("inlineCode",{parentName:"td"},"items")," or not specified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the tab"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the tab"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"change"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler of when selected tab is changed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument",(0,r.kt)("br",null),(0,r.kt)("br",null),"You can receive the following values in event.detail",(0,r.kt)("br",null),(0,r.kt)("li",null,'event.detail.oldValue : "value" before the change'),(0,r.kt)("li",null,'event.detail.value : "value" after the change'))))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Tabs(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please check the ",(0,r.kt)("a",{parentName:"p",href:"../../getting-started/quick-start#installation"},"package installation")," method first.")),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst space = kintone.app.record.getSpaceElement('space');\n\n// Create each Tab content\nconst textArea = new Kuc.TextArea({\n  label: 'TextArea',\n  value: 'This is sample.'\n});\n\nconst timePicker = new Kuc.TimePicker({\n  label: 'Time',\n  value: '11:30'\n});\n\nconst text = 'This is sample.';\n\nconst tabs = new Kuc.Tabs({\n  items: [\n    {\n      label: 'A',\n      content: textArea,\n      value: 'a',\n      disabled: false\n    },\n    {\n      label: 'B',\n      content: timePicker,\n      value: 'b',\n      disabled: false\n    },\n    {\n      label: 'C',\n      content: text,\n      value: 'c',\n      disabled: false\n    }\n  ],\n  value: 'a',\n  className: 'options-class',\n  id: 'options-id',\n  visible: true,\n  borderVisible: true\n});\nspace.appendChild(tabs);\n\ntabs.addEventListener('change', event => {\n  console.log(event);\n});\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"related-articles"},"Related Articles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../guides/tabs-customization"},"Tabs customization"))))}k.isMDXComponent=!0}}]);