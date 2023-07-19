"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[3181],{2503:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(7462),a=n(7294),r=n(6010),i=n(5999),c=n(6668),m=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function o(e){let{as:t,id:n,...o}=e;const{navbar:{hideOnScroll:d}}=(0,c.L)();if("h1"===t||!n)return a.createElement(t,(0,l.Z)({},o,{id:void 0}));const E=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof o.children?o.children:n});return a.createElement(t,(0,l.Z)({},o,{className:(0,r.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,o.className),id:n}),o.children,a.createElement(m.Z,{className:"hash-link",to:`#${n}`,"aria-label":E,title:E},"\u200b"))}},5111:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var l=n(9960),a=n(143),r=n(2263),i=n(2503),c=n(7452),m=n(7294);const s=void 0;function o(){return m.createElement("div",{id:"versionsPage.versionEntry.link"},"Documentation")}function d(){return m.createElement("div",{id:"versionsPage.versionEntry.releaseNotes"},"Release Notes")}function E(){const{siteConfig:e}=(0,r.Z)();return e.baseUrl.includes("/ja/")?"ja":"en"}function u(){return"en"===E()?m.createElement("div",null,"\u203b Please find the version of v0 series",m.createElement("a",{href:"https://kintone-labs.github.io/kintone-ui-component/latest/versions/",target:"_blank",rel:"noreferrer"}," ","here"),"."):m.createElement("div",null,"\u203b v0 \u7cfb\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306f",m.createElement("a",{href:"https://kintone-labs.github.io/kintone-ui-component/latest/versions/",target:"_blank",rel:"noreferrer"},"\u3053\u3061\u3089"),"\u3092\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002")}function h(){const{siteConfig:{title:e,tagline:t,organizationName:n,projectName:h}}=(0,r.Z)(),v=(0,a.gB)(s),g=(0,a.yW)(s),b=v.filter((e=>e!==g&&"current"!==e.name)),p=`https://github.com/${n}/${h}`;return"en"===E()?m.createElement(c.Z,null,m.createElement("main",{className:"container margin-vert--lg"},m.createElement(i.Z,{as:"h1"},m.createElement("div",{id:"versionsPage.title"},"Kintone UI Component versions")),m.createElement("div",{className:"margin-bottom--lg"},"A new version of this project will be released on a regular basis."),m.createElement("div",{className:"margin-bottom--lg"},m.createElement(i.Z,{as:"h3",id:"next",style:{display:"flex"}},m.createElement("div",{id:"versionsPage.current.title"},"Current version (Stable)")),m.createElement("p",null,m.createElement("span",{id:"versionsPage.current.description"},"Here is the current stable version.")),m.createElement("table",null,m.createElement("tbody",null,m.createElement("tr",null,m.createElement("th",null,g.label),m.createElement("td",null,m.createElement(l.Z,{to:g.path+"/"+g.mainDocId},m.createElement(o,null))),m.createElement("td",null,m.createElement(l.Z,{to:`${p}/releases/tag/v${g.name}`},m.createElement(d,null))))))),b.length>0&&m.createElement("div",{className:"margin-bottom--lg"},m.createElement(i.Z,{as:"h3",id:"archive",style:{display:"flex"}},m.createElement("div",{id:"versionsPage.archived.title"},"Past versions")),m.createElement("table",null,m.createElement("tbody",null,b.map((e=>m.createElement("tr",{key:e.name},m.createElement("th",null,e.label),m.createElement("td",null,m.createElement(l.Z,{to:e.path+"/"+g.mainDocId},m.createElement(o,null))),m.createElement("td",null,m.createElement(l.Z,{href:`${p}/releases/tag/v${e.name}`},m.createElement(d,null))))))))),m.createElement(u,null))):m.createElement(c.Z,null,m.createElement("main",{className:"container margin-vert--lg"},m.createElement(i.Z,{as:"h1"},m.createElement("div",{id:"versionsPage.title"},"kintone UI Component versions")),m.createElement("div",{className:"margin-bottom--lg"},"\u672c\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306f\u5b9a\u671f\u7684\u306b\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3059\u3002"),m.createElement("div",{className:"margin-bottom--lg"},m.createElement(i.Z,{as:"h3",id:"next",style:{display:"flex"}},m.createElement("div",{id:"versionsPage.current.title"},"Current version (Stable)")),m.createElement("p",null,m.createElement("span",{id:"versionsPage.current.description"},"\u73fe\u5728\u306e\u6700\u65b0\u306e\u5b89\u5b9a\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u3059\u3002")),m.createElement("table",null,m.createElement("tbody",null,m.createElement("tr",null,m.createElement("th",null,g.label),m.createElement("td",null,m.createElement(l.Z,{to:g.path+"/"+g.mainDocId},m.createElement(o,null))),m.createElement("td",null,m.createElement(l.Z,{to:`${p}/releases/tag/v${g.name}`},m.createElement(d,null))))))),b.length>0&&m.createElement("div",{className:"margin-bottom--lg"},m.createElement(i.Z,{as:"h3",id:"archive",style:{display:"flex"}},m.createElement("div",{id:"versionsPage.archived.title"},"Past versions")),m.createElement("table",null,m.createElement("tbody",null,b.map((e=>m.createElement("tr",{key:e.name},m.createElement("th",null,e.label),m.createElement("td",null,m.createElement(l.Z,{to:e.path+"/"+g.mainDocId},m.createElement(o,null))),m.createElement("td",null,m.createElement(l.Z,{href:`${p}/releases/tag/v${e.name}`},m.createElement(d,null))))))))),m.createElement(u,null)))}}}]);