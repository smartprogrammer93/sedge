"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(a,".").concat(y)]||d[y]||u[y]||c;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const c={id:"checkpoint-sync"},i="Checkpoint Sync endpoint",s={unversionedId:"concepts/checkpoint-sync",id:"concepts/checkpoint-sync",title:"Checkpoint Sync endpoint",description:"This document is a work in progress",source:"@site/docs/concepts/checkpoint-sync.md",sourceDirName:"concepts",slug:"/concepts/checkpoint-sync",permalink:"/docs/concepts/checkpoint-sync",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/concepts/checkpoint-sync.md",tags:[],version:"current",frontMatter:{id:"checkpoint-sync"},sidebar:"tutorialSidebar",previous:{title:"Concepts",permalink:"/docs/concepts"},next:{title:"Fee Recipient",permalink:"/docs/concepts/fee-recipient"}},a={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"checkpoint-sync-endpoint"},"Checkpoint Sync endpoint"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This document is a work in progress")),(0,o.kt)("p",null,"According to the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.prylabs.network/docs/getting-started"},"Prysm docs"),", Checkpoint sync is a feature that significantly speeds up the initial sync between your beacon node and the Beacon Chain. With checkpoint sync configured, your beacon node will begin syncing from a recently finalized checkpoint instead of syncing from genesis. This can make installations, validator migrations, recoveries, and testnet deployments way faster."),(0,o.kt)("p",null,"A Checkpoint Sync endpoint is a consensus node endpoint that can be used by other consensus nodes for Checkpoint sync."))}u.isMDXComponent=!0}}]);