"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||l[m]||i;return t?n.createElement(f,o(o({ref:r},d),{},{components:t})):n.createElement(f,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7260:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={description:"Hardware requirements for Ethereum validators",keywords:["requirements","hardware","Mainnet","Testnet","Storage","CPU","RAM"]},o="Hardware requirements",s={unversionedId:"quickstart/hardware-requirements/index",id:"quickstart/hardware-requirements/index",title:"Hardware requirements",description:"Hardware requirements for Ethereum validators",source:"@site/docs/quickstart/hardware-requirements/index.md",sourceDirName:"quickstart/hardware-requirements",slug:"/quickstart/hardware-requirements/",permalink:"/docs/quickstart/hardware-requirements/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/hardware-requirements/index.md",tags:[],version:"current",frontMatter:{description:"Hardware requirements for Ethereum validators",keywords:["requirements","hardware","Mainnet","Testnet","Storage","CPU","RAM"]},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/docs/quickstart/dependencies"},next:{title:"Mainnet",permalink:"/docs/quickstart/hardware-requirements/mainnet-requirements"}},u={},c=[],d={toc:c};function l(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hardware-requirements"},"Hardware requirements"),(0,a.kt)("p",null,"Hardware requirements are continuously changing from time to time but we can give you an idea of what do you need. "),(0,a.kt)("admonition",{title:"Warning",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We assume you are using Sedge for the validator setup, so all of the nodes needed to run a validator (execution, consensus, and validator) will be installed and executed on a single machine. The requirements will be higher than if you run some of the nodes remotely, but this is a very secure and effective setup. Other setup methods involving a secure distribution of these nodes over different machines will be supported in the future."),(0,a.kt)("p",{parentName:"admonition"},"Don't follow these recommendations if you don't plan to use Sedge for the validator setup."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Running a validator node on a device that does not meet the hardware requirements poses risks to the device, including but not limited to the computer resources being depleted in their entirety. It is your responsibility to ensure you are using a device with sufficient resources."))))}l.isMDXComponent=!0}}]);