"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[4195],{7698:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(7294),s=n(6010),l=n(9960),r=n(2263),c=n(7452);const o={features:"features_t9lD",featureSvg:"featureSvg_GfXr"};var i=n(614);const m=n.p+"assets/images/usecase_button-9d4837f0bf2b1fe3a9bbed733184414f.png";function u(){return"en"===function(){const{siteConfig:e}=(0,r.Z)();return e.baseUrl.includes("/ja/")?"ja":"en"}()?a.createElement("section",{className:o.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"usecase"},a.createElement("h2",{align:"center"},"Use Case"),a.createElement("div",{className:"usecase_sentense",align:"center"},a.createElement("span",null,"Kintone UI Component allows you to create Kintone-like components easily. This library is useful to build Kintone customization and plug-in.")),a.createElement("div",{className:"usecase_group"},a.createElement("h6",null,"[ Sample code & the Button Component image ]"),a.createElement("div",{className:"usecase_image"},a.createElement("img",{src:m,alt:"button usecase"})),a.createElement("div",{className:"usecase_code"},a.createElement(i.Z,{language:"jsx"},"kintone.events.on('app.record.index.show', event => {\n  const Kuc = Kucs['1.x.x'];\n\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const buttonSubmit = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  buttonSubmit.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  const buttonAlert = new Kuc.Button({\n    text: 'Alert',\n    type: 'alert'\n  });\n  buttonAlert.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(buttonSubmit);\n  header.appendChild(buttonAlert);\n});"))))))):a.createElement("section",{className:o.features},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},a.createElement("div",{className:"usecase"},a.createElement("h2",{align:"center"},"Use Case"),a.createElement("div",{className:"usecase_sentense",align:"center"},a.createElement("span",null,"kintone UI Component \u306f\u3001kintone \u4e00\u89a7\u753b\u9762\u306e\u30d8\u30c3\u30c0\u30fc\u30e1\u30cb\u30e5\u30fc\u8981\u7d20\u306a\u3069\u53d6\u5f97\u3067\u304d\u308b\u8981\u7d20\u3001kintone \u30d7\u30e9\u30b0\u30a4\u30f3\u8a2d\u5b9a\u753b\u9762\u3084\u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u30d3\u30e5\u30fc\u306b\u914d\u7f6e\u3059\u308b\u3053\u3068\u3067\u3001kintone \u30e9\u30a4\u30af\u306a\u898b\u305f\u76ee\u3092\u5b9f\u73fe\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),a.createElement("div",{className:"usecase_group"},a.createElement("h6",null,"[ Button Component \u30a4\u30e1\u30fc\u30b8 & \u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9 ]"),a.createElement("div",{className:"usecase_image"},a.createElement("img",{src:m,alt:"button usecase"})),a.createElement("div",{className:"usecase_code"},a.createElement(i.Z,{language:"jsx"},"kintone.events.on('app.record.index.show', event => {\n  const Kuc = Kucs['1.x.x'];\n\n  const header = kintone.app.getHeaderMenuSpaceElement();\n\n  const buttonSubmit = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit'\n  });\n  buttonSubmit.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  const buttonAlert = new Kuc.Button({\n    text: 'Alert',\n    type: 'alert'\n  });\n  buttonAlert.addEventListener('click', event => {\n    console.log(event);\n  });\n\n  header.appendChild(buttonSubmit);\n  header.appendChild(buttonAlert);\n});")))))))}const d={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};function p(){const{siteConfig:e}=(0,r.Z)();return e.baseUrl.includes("/ja/")?"ja":"en"}function b(){const{siteConfig:e}=(0,r.Z)();return"en"===p()?a.createElement("header",{className:(0,s.Z)("hero hero--primary",d.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},"Be a smart Kintone developer with ",a.createElement("span",{className:"title-text"},"Kintone UI Component"),"."),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:d.buttons},a.createElement(l.Z,{className:"button button--secondary button--md button-top",to:"/docs/getting-started/quick-start"},"Getting Started")))):a.createElement("header",{className:(0,s.Z)("hero hero--primary",d.heroBanner)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},"Be a smart kintone developer with ",a.createElement("span",{className:"title-text"},"kintone UI Component"),"."),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:d.buttons},a.createElement(l.Z,{className:"button button--secondary button--md button-top",to:"/docs/getting-started/quick-start"},"Getting Started"))))}function E(){return"en"===p()?a.createElement("div",{className:"support-policy"},a.createElement("div",{className:"container"},a.createElement("div",{className:"title"},"Support Policy"),a.createElement("div",{className:"github-infomation"},"You can ask questions and/or submit requests on",a.createElement("a",{href:"https://github.com/kintone-labs/kintone-ui-component/issues",target:"_blank",rel:"noreferrer"}," GitHub Issue"),"."),a.createElement("div",{className:"more-infomation"},"You are allowed to change the source code, redistribute it, and use it in accordance with the license.",a.createElement("br",null),"For more details of the license type please refer to the GitHub repository."))):a.createElement("div",{className:"support-policy"},a.createElement("div",{className:"container"},a.createElement("div",{className:"title"},"Support Policy"),a.createElement("div",{className:"github-infomation"},"kintone UI Component \u306e\u4ed5\u69d8\u306b\u3064\u3044\u3066\u306f\u3001\u30c6\u30af\u30cb\u30ab\u30eb\u30b5\u30dd\u30fc\u30c8\u3078\u304a\u554f\u3044\u5408\u308f\u305b\u3044\u305f\u3060\u3051\u307e\u3059\u3002",a.createElement("br",null),a.createElement("a",{href:"https://jp.cybozu.help/k/ja/trouble_shooting/general/support_inquiry.html",target:"_blank",rel:"noreferrer"}," \u30b5\u30dd\u30fc\u30c8\u3078\u306e\u304a\u554f\u3044\u5408\u308f\u305b\u65b9\u6cd5"),"\u3092\u3054\u78ba\u8a8d\u306e\u4e0a\u3001\u304a\u554f\u5408\u305b\u304f\u3060\u3055\u3044\u3002"),a.createElement("div",{className:"github-infomation"},"\u305d\u306e\u4ed6 ",a.createElement("a",{href:"https://github.com/kintone-labs/kintone-ui-component/issues",target:"_blank",rel:"noreferrer"}," GitHub Issue")," ","\u306b\u3066\u3054\u8cea\u554f\u3084\u6a5f\u80fd\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u3066\u304a\u308a\u307e\u3059\u3002"),a.createElement("div",{className:"more-infomation"},"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306e\u5909\u66f4\u3001\u518d\u914d\u5e03\u304a\u3088\u3073\u5546\u7528\u5229\u7528\u7b49\u306f\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u5f93\u3063\u3066\u3054\u5229\u7528\u53ef\u80fd\u3067\u3059\u3002",a.createElement("br",null),"\u30e9\u30a4\u30bb\u30f3\u30b9\u306e\u7a2e\u5225\u306f GitHub \u306e\u30ea\u30dd\u30b8\u30c8\u30ea\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")))}function h(){const{siteConfig:e}=(0,r.Z)();return a.createElement(c.Z,null,a.createElement(b,null),a.createElement("main",null,a.createElement(u,null),a.createElement(E,null)))}}}]);