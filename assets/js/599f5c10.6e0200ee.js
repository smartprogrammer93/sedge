"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[237],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),o=n(2389),l=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:h,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[v,O]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=h){const e=w[h];null!=e&&e!==v&&k.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==v&&(C(t),O(a),null!=h&&N(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},6154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),i=n(5488),o=n(5162);const l={sidebar_position:3,id:"install-guide"},s="Installation guide",u={unversionedId:"quickstart/install-guide",id:"quickstart/install-guide",title:"Installation guide",description:"Sedge is currently only available for Linux and macOS, and both amd64 and arm64 architectures. You can use any of the following methods to install Sedge:",source:"@site/docs/quickstart/install-guide.mdx",sourceDirName:"quickstart",slug:"/quickstart/install-guide",permalink:"/docs/quickstart/install-guide",draft:!1,editUrl:"https://github.com/NethermindEth/sedge/tree/main/docs/docs/quickstart/install-guide.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"install-guide"},sidebar:"tutorialSidebar",previous:{title:"Testnets",permalink:"/docs/quickstart/hardware-requirements/testnet-requirements"},next:{title:"Complete quickstart guide",permalink:"/docs/quickstart/complete-guide"}},d={},c=[{value:"Download binary from release page",id:"download-binary-from-release-page",level:2},{value:"Using Homebrew",id:"using-homebrew",level:2},{value:"Using Go",id:"using-go",level:2},{value:"Build from source",id:"build-from-source",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation-guide"},"Installation guide"),(0,r.kt)("p",null,"Sedge is currently only available for Linux and macOS, and both amd64 and arm64 architectures. You can use any of the following methods to install Sedge:"),(0,r.kt)("h2",{id:"download-binary-from-release-page"},"Download binary from release page"),(0,r.kt)("admonition",{title:"Disclaimer",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Downloading any binary from the internet comes with the risk of downloading files which malicious, third-party actors have injected with malware. All users should check that they are downloading the correct, clean binary, from a reputable source.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download correct binary for the machine you want to use for Sedge from the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/NethermindEth/sedge/releases"},"releases page"),", i.e choose the correct target OS / Arch. For example: if your machine is a Intel / M1 mac then download the ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin-amd64")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"darwin-arm64")," binary. You can also download the binary from the CLI (command line interface) or Terminal with ",(0,r.kt)("inlineCode",{parentName:"li"},"curl")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"wget"),":")),(0,r.kt)(i.Z,{groupId:"download-cmds",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"curl",label:"curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L https://github.com/NethermindEth/sedge/releases/download/v<VERSION>/sedge-v<VERSION>-<OS>-<ARCH> --output sedge\n"))),(0,r.kt)(o.Z,{value:"wget",label:"wget",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"wget https://github.com/NethermindEth/sedge/releases/download/v<VERSION>/sedge-v<VERSION>-<OS>-<ARCH> -O sedge\n")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<VERSION>")," with the desired version number, e.g 0.1.2; ",(0,r.kt)("inlineCode",{parentName:"p"},"<OS>")," with your OS, e.g linux; and ",(0,r.kt)("inlineCode",{parentName:"p"},"<ARCH>")," with your architecture, e.g amd64.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open a console or terminal instance on the directory in which you downloaded the binary. "),(0,r.kt)("li",{parentName:"ol"},"Set binary as executable executing ",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x <binary>")," in the terminal. Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<binary>")," with the name of the downloaded binary."),(0,r.kt)("li",{parentName:"ol"},"Run Sedge ",(0,r.kt)("inlineCode",{parentName:"li"},"./sedge --help")," to check if the executable is ok. The ",(0,r.kt)("inlineCode",{parentName:"li"},".")," represents the current directory (where your terminal session is pointing to)"),(0,r.kt)("li",{parentName:"ol"},"(Optional) Put the binary in your ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/PATH_(variable)"},"PATH")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"cp <binary> /usr/local/bin/sedge")," so you can execute Sedge from any directory using the terminal. Try ",(0,r.kt)("inlineCode",{parentName:"li"},"sedge --help")," now.")),(0,r.kt)("h2",{id:"using-homebrew"},"Using Homebrew"),(0,r.kt)("p",null,"First install the Homebrew package manager using the ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"official install script")," located on their homepage. "),(0,r.kt)("p",null,"After installing Homebrew, you are ready to install Sedge by tapping into the official Sedge repository and installing it: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew install nethermindeth/sedge/sedge\n")),(0,r.kt)("p",null,"If you want to update Sedge, you can use the following commands: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew update\nbrew upgrade sedge\n")),(0,r.kt)("p",null,"If you want to remove Sedge, you can use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew uninstall sedge\nbrew untap nethermindeth/sedge\n")),(0,r.kt)("h2",{id:"using-go"},"Using Go"),(0,r.kt)("p",null,"First install the Go programmning language following the ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"official instructions"),". You need at least the ",(0,r.kt)("inlineCode",{parentName:"p"},"1.18.2")," version."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you want to install Sedge in a M1 mac, then you need the ",(0,r.kt)("inlineCode",{parentName:"p"},"darwin-arm64")," package. You can find it clicking on ",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"other downloads")," from the Go install page.")),(0,r.kt)("p",null,"This command will install the ",(0,r.kt)("inlineCode",{parentName:"p"},"sedge")," executable along with the library and its dependencies in your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"go install github.com/NethermindEth/sedge/cmd/sedge@latest\n")),(0,r.kt)("p",null,"The executable will be in your ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOBIN")," (",(0,r.kt)("inlineCode",{parentName:"p"},"$GOPATH/bin"),")."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To check if the ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN")," is not in your PATH, you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"echo $GOBIN")," from the terminal. If it doesn't print anything, then is not in your PATH. To add ",(0,r.kt)("inlineCode",{parentName:"p"},"GOBIN")," to your PATH, add the following lines to your $HOME/.profile:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export GOBIN=$GOPATH/bin\nexport PATH=$GOBIN:$PATH\n")),(0,r.kt)("p",{parentName:"admonition"},"Changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as source $HOME/.profile.")),(0,r.kt)("h2",{id:"build-from-source"},"Build from source"),(0,r.kt)("p",null,"With this method, you generate the binary manually (need Go installed) downloading and compiling the source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/NethermindEth/sedge.git\ncd sedge\nmkdir -p build\ngo build -o build/sedge cmd/sedge/main.go\n")),(0,r.kt)("p",null,"or if you have ",(0,r.kt)("inlineCode",{parentName:"p"},"make")," installed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/NethermindEth/sedge.git\ncd sedge\nmake compile\n")),(0,r.kt)("p",null,"The executable will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In case you want the binary in your PATH (or if you used the ",(0,r.kt)("a",{parentName:"p",href:"#using-go"},"Using Go")," method and you don't have ",(0,r.kt)("inlineCode",{parentName:"p"},"$GOBIN")," in your PATH), please copy the binary to ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Using Go\nsudo cp $GOPATH/bin/sedge /usr/local/bin/\n\n# Build from source\nsudo cp sedge/build/sedge /usr/local/bin/\n")))}m.isMDXComponent=!0}}]);