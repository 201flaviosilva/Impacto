"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[456],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,c(c({ref:t},p),{},{components:n})):a.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8172:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],i={sidebar_position:2},l="Get Started",s={unversionedId:"GetStarted",id:"GetStarted",title:"Get Started",description:"Description",source:"@site/docs/GetStarted.md",sourceDirName:".",slug:"/GetStarted",permalink:"/Impacto/docs/GetStarted",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/GetStarted.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1654630504,formattedLastUpdatedAt:"07/06/2022",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Impacto",permalink:"/Impacto/docs/intro"},next:{title:"AudioPlay.js",permalink:"/Impacto/docs/API/GameObjects/AudioPlay/AudioPlay.js"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Start",id:"start",level:2},{value:"Create a Scene",id:"create-a-scene",level:2},{value:"Create a Rectangle",id:"create-a-rectangle",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-started"},"Get Started"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"This is a simple and basic tutorial to start using Impacto in your project."),(0,o.kt)("h2",{id:"start"},"Start"),(0,o.kt)("p",null,"To start using Impact, you need to have a project I recommend to use the ",(0,o.kt)("a",{parentName:"p",href:"https://vitejs.dev/"},"vite")," templates."),(0,o.kt)("p",null,"After you have created your project, you can import the Impacto library in the project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install impacto\n")),(0,o.kt)("h2",{id:"create-a-scene"},"Create a Scene"),(0,o.kt)("p",null,"In your main javascript project you need to import the Impacto library."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'// Import the Impacto library\nimport Impacto from "impacto";\n')),(0,o.kt)("p",null,"Then you can create a scene."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a scene\nclass MyScene extends Impacto.Scene {\n}\n")),(0,o.kt)("p",null,"After that we need to create a game for the game can start."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// Create a game\nconst myGame = new Impacto.Game({\n    width: 800, // The width of the canvas\n    height: 600, // The height of the canvas\n    scene: MyScene, // The scene that will be used to render the game\n});\n")),(0,o.kt)("h2",{id:"create-a-rectangle"},"Create a Rectangle"),(0,o.kt)("p",null,"So if you go to your browser you should see a canvas with the size of 800x600. But so far nothing is happening. So lets try to add a rectangle to the scene."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'class MyScene extends Impacto.Scene {\n    // This method will be called when the scene is created.\n    start() {\n        // Create a new rectangle at (400, 300) with a width of 100 and a height of 100 and a color of red.\n        const myRect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000"); \n        // Add the rectangle to the scene.\n        this.addChild(myRect); \n    }\n}\n')),(0,o.kt)("p",null,"The all code so far:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'import Impacto from "impacto";\n\nclass MyScene extends Impacto.Scene {\n    start() {\n        const myRect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000"); \n        this.addChild(myRect); \n    }\n}\n\nconst myGame = new Impacto.Game({\n    width: 800,\n    height: 600,\n    scene: MyScene,\n});\n')),(0,o.kt)("p",null,"If everything is working correctly, you should see a red rectangle at (400, 300)."))}m.isMDXComponent=!0}}]);