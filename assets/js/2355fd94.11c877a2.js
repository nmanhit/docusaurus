"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[8208],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={id:"attachment-customization",title:"Attachment customization",sidebar_label:"Attachment customization"},l=void 0,r={unversionedId:"guides/attachment-customization",id:"version-1.11.0/guides/attachment-customization",title:"Attachment customization",description:"Overview",source:"@site/versioned_docs/version-1.11.0/guides/attachment-customization.md",sourceDirName:"guides",slug:"/guides/attachment-customization",permalink:"/docusaurus/docs/guides/attachment-customization",draft:!1,tags:[],version:"1.11.0",frontMatter:{id:"attachment-customization",title:"Attachment customization",sidebar_label:"Attachment customization"},sidebar:"docs",previous:{title:"Version conflicts issue and solution",permalink:"/docusaurus/docs/guides/version-conflicts-issue-solution"},next:{title:"Table and ReadOnlyTable customization",permalink:"/docusaurus/docs/guides/table-readonly-table-customization"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Components to use",id:"components-to-use",level:3},{value:"Completed image",id:"completed-image",level:2},{value:"What you will need to have ready",id:"what-you-will-need-to-have-ready",level:2},{value:"JavaScript and CSS Customization",id:"javascript-and-css-customization",level:2},{value:"Display custom attachment area",id:"display-custom-attachment-area",level:3},{value:"Create some file objects and apply them to the KUC Attachment component",id:"create-some-file-objects-and-apply-them-to-the-kuc-attachment-component",level:3},{value:"Get the files info selected by a user and validate the type and size of them",id:"get-the-files-info-selected-by-a-user-and-validate-the-type-and-size-of-them",level:3},{value:"Upload KUC Attachment component files into the native Kintone Attachment field",id:"upload-kuc-attachment-component-files-into-the-native-kintone-attachment-field",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This article explains how to utilize and customize the Attachment component.",(0,o.kt)("br",null),"\nWe assume the following scenario:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a file object (Blob/ArrayBuffer pattern and simple object pattern) and add it to the KUC (Kintone UI Component) Attachment component"),(0,o.kt)("li",{parentName:"ol"},"Get the file info that the user attached"),(0,o.kt)("li",{parentName:"ol"},"Validate the file type/size and show an error in case it is invalid"),(0,o.kt)("li",{parentName:"ol"},"Upload KUC Attachment component files into the native Kintone Attachment field")),(0,o.kt)("h3",{id:"components-to-use"},"Components to use"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus/docs/components/desktop/attachment"},"Attachment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus/docs/components/desktop/button"},"Button")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docusaurus/docs/components/desktop/spinner"},"Spinner"))),(0,o.kt)("h2",{id:"completed-image"},"Completed image"),(0,o.kt)("p",null,"The completed image of the customized page is as follows:\n",(0,o.kt)("img",{alt:"attachment customize",src:n(939).Z,width:"1901",height:"1111"})),(0,o.kt)("h2",{id:"what-you-will-need-to-have-ready"},"What you will need to have ready"),(0,o.kt)("p",null,'Create an app that includes an attachment field with the id "Attachment" and a blank space field with the id "space".'),(0,o.kt)("h2",{id:"javascript-and-css-customization"},"JavaScript and CSS Customization"),(0,o.kt)("p",null,"When you import the UMD file of Kintone UI Component to the app, you can upload the JavaScript files by following these steps:",(0,o.kt)("br",null),"\nYou can see how to upload a file in the ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus/docs/getting-started/quick-start"},"Quick Start"),"."),(0,o.kt)("h3",{id:"display-custom-attachment-area"},"Display custom attachment area"),(0,o.kt)("p",null,"Display the KUC Attachment component and two Button components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add custom files to KUC Attachment"),(0,o.kt)("li",{parentName:"ul"},"upload to native kintone Attachment")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID\nconst SPACE_ID = 'space'; // kintone space ID\nconst Kuc = Kucs['1.x.x'];\nkintone.events.on('app.record.detail.show', async event => {\n  if (event.record[`${KINTONE_ATTACHMENT_FIELD}`]) {\n    const attachment = new Kuc.Attachment({\n      files: record[`${KINTONE_ATTACHMENT_FIELD}`].value,\n      label: 'KUC Attachment'\n    });\n    const addCustomFilesButton = new Kuc.Button({\n      text: 'add custom files to KUC Attachment'\n    });\n    const uploadButton = new Kuc.Button({\n      text: 'upload to native kintone Attachment',\n      type: 'submit'\n    });\n    const spinner = new Kuc.Spinner();\n    const spaceElement = kintone.app.record.getSpaceElement(SPACE_ID);\n    const container = document.createElement('div');\n    container.appendChild(attachment);\n    container.appendChild(addCustomFilesButton);\n    container.appendChild(uploadButton);\n    spaceElement.appendChild(container);\n  }\n  return event;\n});\n")),(0,o.kt)("h3",{id:"create-some-file-objects-and-apply-them-to-the-kuc-attachment-component"},"Create some file objects and apply them to the KUC Attachment component"),(0,o.kt)("p",null,"Add a click event listener for ",(0,o.kt)("inlineCode",{parentName:"p"},"addCustomFilesButton"),".",(0,o.kt)("br",null),"\nWhen the button is clicked, it will create three types of file objects as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Blob/ArrayBuffer files modified to ",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/File"},"File object")),(0,o.kt)("li",{parentName:"ul"},"Simple object (",(0,o.kt)("inlineCode",{parentName:"li"},'{name: "xx", size: "xx"}'),")\nAnd add them to the ",(0,o.kt)("inlineCode",{parentName:"li"},"files")," property of the KUC Attachment component.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const addCustomFilesButton = new Kuc.Button({\n  text: 'add custom files to KUC Attachment'\n});\naddCustomFilesButton.addEventListener('click', () => {\n  attachment.files = attachment.files.concat(initCustomFiles());\n});\nfunction initCustomFiles() {\n  const blob = new Blob(['this type is blob'], { type: 'text' });\n  const buffer = new ArrayBuffer(8);\n  const customFiles = [\n    arrayBufferToFile(buffer, 'array-buffer-file.txt', 'text'),\n    blobToFile(blob, 'blob-file.txt'),\n    { name: 'custom-file.txt', size: '150', type: 'text' }\n  ];\n  return customFiles;\n}\n\nfunction arrayBufferToFile(buffer, filename, type) {\n  const blob = new Blob([buffer], { type: type });\n  return new File([blob], filename, { type: type });\n}\n\nfunction blobToFile(blob, filename) {\n  return new File([blob], filename, { type: blob.type });\n}\n")),(0,o.kt)("h3",{id:"get-the-files-info-selected-by-a-user-and-validate-the-type-and-size-of-them"},"Get the files info selected by a user and validate the type and size of them"),(0,o.kt)("p",null,"Add a change event listener for ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment"),".",(0,o.kt)("br",null),"\nWhen a user selects/deletes any files, we can get the file info by the callback of the change event.",(0,o.kt)("br",null),'\nValidate the type/size("text/50MB") of the files and get the index of invalid files.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"attachment.addEventListener('change', event => {\n  console.log(event.detail); // The changed file info\n  attachment.error = validateAttachmentFiles(event.detail.files);\n});\nfunction validateAttachmentFiles(files) {\n  const acceptType = 'text';\n  const maxSize = 1024 * 1024 * 50; // 50Mb\n  let error = '';\n  let typeErrorCount = 0;\n  let sizeErrorCount = 0;\n  files.forEach((file, index) => {\n    let types = [];\n    if (file.type) {\n      types = file.type.split('/');\n    }\n    // The file type in the native kintone attachment field file is \"contentType\"\n    if (file.contentType) {\n      types = file.contentType.split('/');\n    }\n    if (!types.includes(acceptType)) {\n      typeErrorCount++;\n      console.log(`Invalid type file index is ${index}`);\n    }\n    if (!file.size || parseInt(file.size, 10) > maxSize) {\n      sizeErrorCount++;\n      console.log(`Invalid size file index is ${index}`);\n    }\n  });\n  if (typeErrorCount > 0) {\n    error = `There ${\n      typeErrorCount === 1\n        ? 'is an invalid type file'\n        : 'are ' + typeErrorCount + ' invalid type files'\n    }!`;\n  }\n  if (sizeErrorCount > 0) {\n    error = `There ${\n      sizeErrorCount === 1\n        ? 'is an invalid size file'\n        : 'are ' + sizeErrorCount + ' invalid size files'\n    }!`;\n  }\n  return error;\n}\n")),(0,o.kt)("h3",{id:"upload-kuc-attachment-component-files-into-the-native-kintone-attachment-field"},"Upload KUC Attachment component files into the native Kintone Attachment field"),(0,o.kt)("p",null,"Add a click event listener for ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadButton"),".",(0,o.kt)("br",null),"\nWhen the button is clicked, show the KUC Spinner component.",(0,o.kt)("br",null),"\nUse the ",(0,o.kt)("inlineCode",{parentName:"p"},"uploadFile")," method of KintoneRestApiClient to upload files to Kintone.",(0,o.kt)("br",null),"\nThen use the fileKeys returned by the upload method to update the Kintone record.",(0,o.kt)("br",null),"\nFinally, close the KUC Spinner component and refresh the page.",(0,o.kt)("br",null),"\nAll API calls use ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest"},"XMLHttpRequest")," or ",(0,o.kt)("a",{parentName:"p",href:"https://kintone.dev/en/docs/kintone/rest-api/"},"kintone REST API"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const KINTONE_ATTACHMENT_FIELD = 'Attachment'; // kintone attachment field ID\nconst ID = '$id';\nconst uploadButton = new Kuc.Button({\n  text: 'upload to native kintone Attachment',\n  type: 'submit'\n});\nuploadButton.addEventListener('click', async () => {\n  spinner.open();\n  const fileKeys = await uploadFiles(attachment.files);\n  const params = generateRecordParams(fileKeys, record[`${ID}`].value);\n  await updateRecord(params);\n  spinner.close();\n  location.reload();\n});\n\nfunction generateRecordParams(fileKeys, recordId) {\n  const app = kintone.app.getId();\n  const record = {};\n  record[`${KINTONE_ATTACHMENT_FIELD}`] = { value: fileKeys };\n  return { app: app, id: recordId, record: record };\n}\n\nasync function uploadFiles(files) {\n  const fileKeys = [];\n  for (const file of files) {\n    if (!file.fileKey) {\n      const response = await uploadFile(file);\n      file.fileKey = response.fileKey;\n    }\n    fileKeys.push({ fileKey: file.fileKey });\n  }\n  return fileKeys;\n}\n\nfunction uploadFile(file) {\n  return new Promise((resolve, reject) => {\n    const formData = new FormData();\n    const blob = new Blob([file], { type: file.type ?? '' });\n    formData.append('__REQUEST_TOKEN__', kintone.getRequestToken());\n    formData.append('file', blob, file.name);\n    const url = 'https://{domain}//k/v1/file.json';\n    const xhr = new XMLHttpRequest();\n    xhr.open('POST', url);\n    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');\n    xhr.onload = () => {\n      if (xhr.status === 200) {\n        // success\n        resolve(JSON.parse(xhr.responseText));\n      } else {\n        // error\n        reject(JSON.parse(xhr.responseText));\n      }\n    };\n    xhr.send(formData);\n  });\n}\n\nfunction updateRecord(params) {\n  return kintone.api(\n    kintone.api.url('/k/v1/record.json', true),\n    'PUT',\n    params\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This article was reviewed by Kintone and Google Chrome as of February, 2023.",(0,o.kt)("br",null),"\nIn addition, the version of Kintone UI Component that is used for customizations is v1.9.0.")))}d.isMDXComponent=!0},939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/attachment_customize-b32f3e6d9a9831d5adf7a82ddabe30ad.gif"}}]);