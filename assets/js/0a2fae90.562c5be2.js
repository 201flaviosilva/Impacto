"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[381],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(a),d=l,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(g,o(o({ref:t},s),{},{components:a})):n.createElement(g,o({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5824:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),o=["components"],u={},i=void 0,p={unversionedId:"API/State/GlobalStateManager.js",id:"API/State/GlobalStateManager.js",title:"GlobalStateManager.js",description:"Kind: global class",source:"@site/docs/API/State/GlobalStateManager.js.md",sourceDirName:"API/State",slug:"/API/State/GlobalStateManager.js",permalink:"/Impacto/docs/API/State/GlobalStateManager.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/State/GlobalStateManager.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CanvasState.js",permalink:"/Impacto/docs/API/State/CanvasState.js"},next:{title:"Utils.js",permalink:"/Impacto/docs/API/Utils/Utils.js"}},s={},m=[{value:"new GlobalStateManager()",id:"new-globalstatemanager",level:2},{value:"GlobalStateManager.setPause(pause) \u21d2 <code>void</code>",id:"globalstatemanagersetpausepause--void",level:2},{value:"GlobalStateManager.setVolume(volume) \u21d2 <code>void</code>",id:"globalstatemanagersetvolumevolume--void",level:2}],c={toc:m};function d(e){var t=e.components,a=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"GlobalStateManager"}),(0,r.kt)("h1",{id:"globalstatemanager"},"GlobalStateManager"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#GlobalStateManager"},"GlobalStateManager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_GlobalStateManager_new"},"new GlobalStateManager()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#GlobalStateManager.setPause"},".setPause(pause)")," \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#GlobalStateManager.setVolume"},".setVolume(volume)")," \u21d2 ",(0,r.kt)("code",null,"void"))))),(0,r.kt)("a",{name:"new_GlobalStateManager_new"}),(0,r.kt)("h2",{id:"new-globalstatemanager"},"new GlobalStateManager()"),(0,r.kt)("p",null,"A class to manage all global states."),(0,r.kt)("a",{name:"GlobalStateManager.setPause"}),(0,r.kt)("h2",{id:"globalstatemanagersetpausepause--void"},"GlobalStateManager.setPause(pause) \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("p",null,"Pauses/Unpauses the game."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#GlobalStateManager"},(0,r.kt)("code",null,"GlobalStateManager")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pause"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Pause the game"))))),(0,r.kt)("a",{name:"GlobalStateManager.setVolume"}),(0,r.kt)("h2",{id:"globalstatemanagersetvolumevolume--void"},"GlobalStateManager.setVolume(volume) \u21d2 ",(0,r.kt)("code",null,"void")),(0,r.kt)("p",null,"Change the volume of the audio."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#GlobalStateManager"},(0,r.kt)("code",null,"GlobalStateManager")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"volume"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The volume of the audio. Default 1"))))))}d.isMDXComponent=!0}}]);