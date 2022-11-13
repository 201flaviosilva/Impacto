"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[923],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return n?a.createElement(k,c(c({ref:t},i),{},{components:n})):a.createElement(k,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var d=2;d<l;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5566:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),c=["components"],p={},o=void 0,d={unversionedId:"API/Scenes/Scene.js",id:"API/Scenes/Scene.js",title:"Scene.js",description:"Create a new scene",source:"@site/docs/API/Scenes/Scene.js.md",sourceDirName:"API/Scenes",slug:"/API/Scenes/Scene.js",permalink:"/Impacto/docs/API/Scenes/Scene.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/Scenes/Scene.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mouse.js",permalink:"/Impacto/docs/API/Inputs/Mouse.js"},next:{title:"AssetsManager.js",permalink:"/Impacto/docs/API/State/AssetsManager.js"}},i={},s=[{value:"Scene.addChild(child) \u21d2 <code>Scene</code>",id:"sceneaddchildchild--codescenecode",level:2},{value:"Scene.removeChild(child) \u21d2 <code>Scene</code>",id:"sceneremovechildchild--codescenecode",level:2},{value:"Scene.start()",id:"scenestart",level:2},{value:"Scene.update(delta)",id:"sceneupdatedelta",level:2},{value:"Scene.posRender(context)",id:"sceneposrendercontext",level:2}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"Scene"}),(0,l.kt)("h1",{id:"scene"},"Scene"),(0,l.kt)("p",null,"Create a new scene"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene"},"Scene"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene.addChild"},".addChild(child)")," \u21d2 ",(0,l.kt)("a",{parentName:"li",href:"#Scene"},(0,l.kt)("code",null,"Scene"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene.removeChild"},".removeChild(child)")," \u21d2 ",(0,l.kt)("a",{parentName:"li",href:"#Scene"},(0,l.kt)("code",null,"Scene"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene.start"},".start()")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene.update"},".update(delta)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Scene.posRender"},".posRender(context)"))))),(0,l.kt)("a",{name:"Scene.addChild"}),(0,l.kt)("h2",{id:"sceneaddchildchild--codescenecode"},"Scene.addChild(child) \u21d2 ",(0,l.kt)("a",{parentName:"h2",href:"#Scene"},(0,l.kt)("code",null,"Scene"))),(0,l.kt)("p",null,"Add a child to the scene"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene"))," - ",(0,l.kt)("p",null,"This scene"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"child"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Impacto.GameObject")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The child to add"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.addChild(mySprite);\n")),(0,l.kt)("a",{name:"Scene.removeChild"}),(0,l.kt)("h2",{id:"sceneremovechildchild--codescenecode"},"Scene.removeChild(child) \u21d2 ",(0,l.kt)("a",{parentName:"h2",href:"#Scene"},(0,l.kt)("code",null,"Scene"))),(0,l.kt)("p",null,"Remove a child from the scene"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene"))," - ",(0,l.kt)("p",null,"This scene"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"child"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Impacto.GameObject")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The child to remove"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"this.removeChild(mySprite);\n")),(0,l.kt)("a",{name:"Scene.start"}),(0,l.kt)("h2",{id:"scenestart"},"Scene.start()"),(0,l.kt)("p",null,"The entry point of the scene, this function is called once when the scene is loaded Normally, you use this function to create and add your game objects"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class MyScene extends Scene {\n    start() {\n        const sprite = new Sprite();\n        this.addChild(sprite);\n    }\n}\n")),(0,l.kt)("a",{name:"Scene.update"}),(0,l.kt)("h2",{id:"sceneupdatedelta"},"Scene.update(delta)"),(0,l.kt)("p",null,"The update function is called every frame"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delta"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The time since the last frame"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"class MyScene extends Scene {\n    update(delta) {\n   console.log(delta);\n    }\n}\n")),(0,l.kt)("a",{name:"Scene.posRender"}),(0,l.kt)("h2",{id:"sceneposrendercontext"},"Scene.posRender(context)"),(0,l.kt)("p",null,"The render function is called every frame after the update and core render function"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Scene"},(0,l.kt)("code",null,"Scene")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"context"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"CanvasRenderingContext2D")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The canvas context"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'class MyScene extends Scene {\n    render(context) {\n      console.log("render");\n    }\n}\n')))}m.isMDXComponent=!0}}]);