"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1,id:"run-validator"},i="Run a validator on Mainnet",l={unversionedId:"quickstart/samples/run-validator",id:"quickstart/samples/run-validator",title:"Run a validator on Mainnet",description:"This guide shows you how to setup and run a validator on Mainnet using random execution, consensus, and validator clients.",source:"@site/docs/quickstart/samples/run-validator.md",sourceDirName:"quickstart/samples",slug:"/quickstart/samples/run-validator",permalink:"/docs/quickstart/samples/run-validator",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/quickstart/samples/run-validator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"run-validator"},sidebar:"tutorialSidebar",previous:{title:"Key Management",permalink:"/docs/quickstart/keys-management"},next:{title:"Run a validator with mev-boost on Goerli",permalink:"/docs/quickstart/samples/run-mev-boost-goerli"}},s={},u=[],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run-a-validator-on-mainnet"},"Run a validator on Mainnet"),(0,a.kt)("p",null,"This guide shows you how to setup and run a validator on Mainnet using random execution, consensus, and validator clients."),(0,a.kt)("p",null,"First make sure you have Sedge installed and in your PATH following the ",(0,a.kt)("a",{parentName:"p",href:"/docs/quickstart/install-guide"},"installation guide"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don't have Sedge in your PATH, just open your terminal on the folder which Sedge's executable / binary is and run ",(0,a.kt)("inlineCode",{parentName:"p"},"./sedge")," instead of only ",(0,a.kt)("inlineCode",{parentName:"p"},"sedge"),".")),(0,a.kt)("p",null,"Run the following command from your terminal to generate your setup on Mainnet (default network):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sedge generate full-node\n")),(0,a.kt)("p",null,"As an alternative way, you can provide a fee recipient address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sedge generate full-node --fee-recipient <your_address>\n")),(0,a.kt)("p",null,"Set up your keys running the following command from your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sedge keys\n")),(0,a.kt)("p",null,"Import the keys that you just generate in the command above using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sedge import-key\n")),(0,a.kt)("p",null,"After that, you just need to run your setup with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sedge run\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Your validator will not start right away, it will wait until the consensus get synced and 1 more epoch, to avoid slashing.")))}p.isMDXComponent=!0}}]);