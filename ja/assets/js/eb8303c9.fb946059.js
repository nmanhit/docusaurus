"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[4931],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=a.createContext({}),c=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=s,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=b;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:s,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3594:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(7462),s=(t(7294),t(3905));const o={id:"tabs-customization",title:"Tabs customization",sidebar_label:"Tabs customization"},r=void 0,l={unversionedId:"guides/tabs-customization",id:"guides/tabs-customization",title:"Tabs customization",description:"\u6982\u8981",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/guides/tabs-customization.md",sourceDirName:"guides",slug:"/guides/tabs-customization",permalink:"/docusaurus/ja/docs/next/guides/tabs-customization",draft:!1,tags:[],version:"current",frontMatter:{id:"tabs-customization",title:"Tabs customization",sidebar_label:"Tabs customization"},sidebar:"docs",previous:{title:"Table and ReadOnlyTable customization",permalink:"/docusaurus/ja/docs/next/guides/table-readonly-table-customization"}},i={},c=[{value:"\u6982\u8981",id:"\u6982\u8981",level:2},{value:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8",level:3},{value:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8",level:2},{value:"\u4e8b\u524d\u6e96\u5099",id:"\u4e8b\u524d\u6e96\u5099",level:2},{value:"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba",id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",level:2},{value:"\u5b9a\u6570\u306e\u5b9a\u7fa9",id:"\u5b9a\u6570\u306e\u5b9a\u7fa9",level:3},{value:"\u5171\u901a\u95a2\u6570\u306e\u4f5c\u6210",id:"\u5171\u901a\u95a2\u6570\u306e\u4f5c\u6210",level:3},{value:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e Tabs \u4f5c\u6210",id:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e-tabs-\u4f5c\u6210",level:3},{value:"kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u7528\u306e Tabs \u4f5c\u6210",id:"kintone-\u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u7528\u306e-tabs-\u4f5c\u6210",level:3}],d={toc:c},u="wrapper";function p(e){let{components:n,...o}=e;return(0,s.kt)(u,(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u6982\u8981"},"\u6982\u8981"),(0,s.kt)("p",null,"\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u6d3b\u7528\u3068\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u65b9\u6cd5\u306b\u3064\u3044\u3066\u8aac\u660e\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u4ee5\u4e0b\u306e\u30b7\u30ca\u30ea\u30aa\u3092\u60f3\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Tabs content \u306b KUC \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3059\u308b"),(0,s.kt)("li",{parentName:"ol"},"Tabs content \u306b kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8ffd\u52a0\u3059\u308b")),(0,s.kt)("h3",{id:"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"},"\u4f7f\u7528\u3059\u308b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docusaurus/ja/docs/next/components/desktop/tabs"},"Tabs")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docusaurus/ja/docs/next/components/desktop/readonly-table"},"ReadOnlyTable"))),(0,s.kt)("h2",{id:"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"},"\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u304c\u753b\u9762\u306e\u5b8c\u6210\u30a4\u30e1\u30fc\u30b8\u3067\u3059\u3002"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"tabs customize",src:t(1767).Z,width:"722",height:"656"})),(0,s.kt)("h2",{id:"\u4e8b\u524d\u6e96\u5099"},"\u4e8b\u524d\u6e96\u5099"),(0,s.kt)("p",null,"\u4ee5\u4e0b\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u542b\u3080\u30a2\u30d7\u30ea\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'2\u3064\u306e\u30b9\u30da\u30fc\u30b9\u30d5\u30a3\u30fc\u30eb\u30c9\uff08"space_for_native_kintone" \u3068 "space_for_custom_components" \u3068\u3044\u3046 id \u3092\u6301\u3064\uff09'),(0,s.kt)("li",{parentName:"ul"},'3\u3064\u306e\u30c6\u30fc\u30d6\u30eb\u30d5\u30a3\u30fc\u30eb\u30c9\uff08"sales_record_table", "task_management_table", "sales_order_table" \u3068\u3044\u3046 id \u3092\u6301\u3064\uff09')),(0,s.kt)("h2",{id:"javascriptcss-\u30ab\u30b9\u30bf\u30de\u30a4\u30ba"},"JavaScript/CSS \u30ab\u30b9\u30bf\u30de\u30a4\u30ba"),(0,s.kt)("p",null,"kintone UI Component \u306e UMD \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30d7\u30ea\u306b\u8aad\u307f\u8fbc\u3093\u3060\u4e0a\u3067\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u5b9f\u88c5\u3092\u3057\u305f JavaScript \u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u30d5\u30a1\u30a4\u30eb\u306e\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u65b9\u6cd5\u306a\u3069\u306f\u3001 ",(0,s.kt)("a",{parentName:"p",href:"/docusaurus/ja/docs/next/getting-started/quick-start"},"Quick Start")," \u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"),(0,s.kt)("h3",{id:"\u5b9a\u6570\u306e\u5b9a\u7fa9"},"\u5b9a\u6570\u306e\u5b9a\u7fa9"),(0,s.kt)("p",null,"kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u756a\u53f7\u3001\u30b9\u30da\u30fc\u30b9ID\u3001kintone \u30d5\u30a3\u30fc\u30eb\u30c9\u306a\u3069\u3001\u91cd\u8981\u306a\u8b58\u5225\u5b50\u3084\u5024\u3092\u53c2\u7167\u3059\u308b\u305f\u3081\u306b\u5b9a\u6570\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"const Kuc = Kucs['1.x.x'];\n\nconst SPACE_FOR_NATIVE_KINTONE = 'space_for_native_kintone';\nconst SPACE_FOR_CUSTOM_COMPONENTS = 'space_for_custom_components';\n\nconst SALES_RECORD_TABLE_ID = 'sales_record_table';\nconst TASK_MANAGEMENT_ID = 'task_management_table';\nconst SALES_ORDER_ID = 'sales_order_table';\n\n// A set of Kintone fields that need to be shown/hidden on each tab.\nconst salesRecordTabFields = [SALES_RECORD_TABLE_ID];\nconst taskManagementTabFields = [TASK_MANAGEMENT_ID];\nconst salesOrderTabFields = [SALES_ORDER_ID];\nlet currentTabFields;\n")),(0,s.kt)("h3",{id:"\u5171\u901a\u95a2\u6570\u306e\u4f5c\u6210"},"\u5171\u901a\u95a2\u6570\u306e\u4f5c\u6210"),(0,s.kt)("p",null,"2\u3064\u306e\u5171\u901a\u95a2\u6570\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"KUC Tabs \u3092\u4f5c\u6210\u3059\u308b ",(0,s.kt)("inlineCode",{parentName:"li"},"createContent")," \u95a2\u6570\u3002DOM \u64cd\u4f5c\u3092\u9632\u3050\u305f\u3081\u306b\u3001",(0,s.kt)("inlineCode",{parentName:"li"},"isBorderVisible")," \u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002\n",(0,s.kt)("inlineCode",{parentName:"li"},"isBorderVisible: false")," \u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3001DOM \u64cd\u4f5c\u306a\u3057\u3067 kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u3092 Tabs content \u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f\u30b9\u30da\u30fc\u30b9\u306b Tabs \u3092\u8ffd\u52a0\u3059\u308b ",(0,s.kt)("inlineCode",{parentName:"li"},"addTabsToDom")," \u95a2\u6570\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"function createTabs(contents, isBorderVisible) {\n  const items = [\n    {\n      label: 'Sales Record',\n      value: 'salesRecordTab',\n      content: contents ? contents[0] : ''\n    },\n    {\n      label: 'Task Management',\n      value: 'taskManagementTab',\n      content: contents ? contents[1] : ''\n    },\n    {\n      label: 'Sales Order',\n      value: 'salesOrderTab',\n      content: contents ? contents[2] : ''\n    }\n  ];\n  const tabs = new Kuc.Tabs({\n    value: 'salesRecordTab',\n    borderVisible: isBorderVisible,\n    items\n  });\n  return tabs;\n}\n\nfunction addTabsToDOM(tabs, space_id) {\n  const spaceElement = kintone.app.record.getSpaceElement(space_id);\n  spaceElement.appendChild(tabs);\n}\n")),(0,s.kt)("h3",{id:"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e-tabs-\u4f5c\u6210"},"\u30ab\u30b9\u30bf\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u7528\u306e Tabs \u4f5c\u6210"),(0,s.kt)("p",null,"Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u3001\u30bf\u30d6\u306b\u3088\u3063\u3066\u7570\u306a\u308b\u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\uff08kintone UI Component \u306e ReadOnlyTable \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u4f5c\u6210\uff09\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u30bf\u30d6\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3068\u3001Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u81ea\u52d5\u7684\u306b\u5bfe\u5fdc\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30c6\u30fc\u30d6\u30eb\u3092\u8868\u793a\u3057\u3001\u6b8b\u308a\u306e\u30c6\u30fc\u30d6\u30eb\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"createContent")," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u3001\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u914d\u5217\u3092\u53d7\u3051\u53d6\u308a\u3001\u305d\u308c\u3089\u3092 padding \u3092\u6301\u3064\u30b3\u30f3\u30c6\u30ca\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u6700\u5f8c\u306b\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"createTabs")," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u30bf\u30d6\u3092\u4f5c\u6210\u3057\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"addTabsToDOM()")," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u6307\u5b9a\u3057\u305f\u30b9\u30da\u30fc\u30b9\u306b Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"function initCustomComponentTabs() {\n  const salesRecordTable = new Kuc.ReadOnlyTable({\n    label: 'Sales Record',\n    columns: [\n      { title: 'Create Date', field: 'date' },\n      { title: 'Reporter Account', field: 'account' },\n      { title: 'Communication Content', field: 'communication' }\n    ],\n    data: [\n      {\n        date: 'Feb 28, 2023',\n        account: 'Howard',\n        communication:\n        'Discussed the new product launch strategy with the client and received positive feedback.' +\n        'The client agreed to place an order for 500 units of the new product. They also requested a 10% discount on the total order value.'\n      }\n    ]\n  });\n  const salesRecordContent = createContent([salesRecordTable]);\n\n  const taskManagementTable = new Kuc.ReadOnlyTable({\n    label: 'Task Management',\n    columns: [\n      { title: 'Status', field: 'status' },\n      { title: 'Task Executor', field: 'executor' },\n      { title: 'Task Requirements', field: 'requirements' },\n      { title: 'Result Reporting', field: 'reporting' }\n    ],\n    data: [\n      {\n        status: 'In Progress',\n        executor: 'Mike',\n        requirements:\n        'Conduct market research on the latest trends and consumer behavior in the target market.',\n        reporting: 'Report due by March 15th.'\n      }\n    ]\n  });\n  const taskManagementContent = createContent([taskManagementTable]);\n\n  const salesOrderTable = new Kuc.ReadOnlyTable({\n    label: 'Sales Order',\n    columns: [{ title: 'Order Number', field: 'order' }],\n    data: [{ order: '1' }]\n  });\n  const salesOrderContent = createContent([salesOrderTable]);\n\n  const tabs = createTabs(\n    [salesRecordContent, taskManagementContent, salesOrderContent],\n    true\n  );\n  addTabsToDOM(tabs, SPACE_FOR_CUSTOM_COMPONENTS);\n}\n\nfunction createContent(components) {\n  const content = document.createElement('div');\n  content.style.padding = '16px';\n  components.map(component => content.appendChild(component));\n  return content;\n}\n")),(0,s.kt)("h3",{id:"kintone-\u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u7528\u306e-tabs-\u4f5c\u6210"},"kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u7528\u306e Tabs \u4f5c\u6210"),(0,s.kt)("p",null,"Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u3063\u3066\u3001\u30bf\u30d6\u306b\u3088\u3063\u3066\u7570\u306a\u308b kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8868\u793a\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u30bf\u30d6\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u308b\u3068\u3001\u5bfe\u5fdc\u3059\u308b kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u8868\u793a\u3057\u3001\u305d\u308c\u4ee5\u5916\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u8868\u793a\u306b\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n",(0,s.kt)("inlineCode",{parentName:"p"},"setFieldsShown")," \u95a2\u6570\u3067\u306f\u3001",(0,s.kt)("a",{parentName:"p",href:"https://cybozu.dev/ja/kintone/docs/js-api/record/show-or-hide-a-field/"},"kintone.app.record.setFieldShown()")," API \u3092\u4f7f\u3063\u3066\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u8868\u793a\u30fb\u975e\u8868\u793a\u3092\u884c\u3044\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"addTabsChangeEventListener")," \u95a2\u6570\u3067\u30af\u30ea\u30c3\u30af\u30a4\u30d9\u30f3\u30c8\u3092\u51e6\u7406\u3057\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u66f4\u65b0\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u307e\u305f\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"createTabs")," \u95a2\u6570\u3092\u4f7f\u3063\u3066\u30bf\u30d6\u3092\u4f5c\u6210\u3057\u307e\u3059\u304c\u3001\u4eca\u56de\u306f kintone \u6a19\u6e96\u30d5\u30a3\u30fc\u30eb\u30c9\u3068\u306e\u89aa\u548c\u6027\u3092\u9ad8\u3081\u308b\u305f\u3081\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"isBorderVisible: false")," \u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u6700\u5f8c\u306b\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"addTabsToDom")," \u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u3001\u6307\u5b9a\u3055\u308c\u305f\u30b9\u30da\u30fc\u30b9\u306b Tabs \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"function initNativeKintoneTabs() {\n  setFieldsShown(taskManagementTabFields, false);\n  setFieldsShown(salesOrderTabFields, false);\n  currentTabFields = salesRecordTabFields;\n  const tabs = createTabs(undefined, false);\n  addTabsChangeEventListener(tabs);\n  addTabsToDOM(tabs, SPACE_FOR_NATIVE_KINTONE);\n}\n\nfunction addTabsChangeEventListener(tabs) {\n  tabs.addEventListener('change', event => {\n    switch (event.detail.value) {\n      case 'salesRecordTab':\n        switchDisplayedFields(salesRecordTabFields);\n        break;\n      case 'taskManagementTab':\n        switchDisplayedFields(taskManagementTabFields);\n        break;\n      case 'salesOrderTab':\n        switchDisplayedFields(salesOrderTabFields);\n        break;\n    }\n  });\n}\n\nfunction switchDisplayedFields(displayedFields) {\n  setFieldsShown(displayedFields, true);\n  setFieldsShown(currentTabFields, false);\n  currentTabFields = displayedFields;\n}\n\nfunction setFieldsShown(fields, isShown) {\n  fields.forEach(field => {\n    kintone.app.record.setFieldShown(field, isShown);\n  });\n}\n")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u672c\u8a18\u4e8b\u306f\u3001 2023 \u5e74 5 \u6708\u6642\u70b9\u306e kintone \u3068 Google Chrome \u3067\u78ba\u8a8d\u3057\u305f\u3082\u306e\u306b\u306a\u308a\u307e\u3059\u3002",(0,s.kt)("br",null),"\n\u307e\u305f\u3001\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u306b\u4f7f\u7528\u3057\u305f kintone UI Component \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u3001v1.11.0 \u3067\u3059\u3002")))}p.isMDXComponent=!0},1767:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/tabs_customize-75958d470f479a0ae4d237c7b3e6afbc.gif"}}]);