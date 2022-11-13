"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[754],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):m(m({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=p(n),d=r,N=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return n?a.createElement(N,m(m({ref:e},s),{},{components:n})):a.createElement(N,m({ref:e},s))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,m=new Array(l);m[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,m[1]=i;for(var p=2;p<l;p++)m[p]=n[p];return a.createElement.apply(null,m)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6804:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),m=["components"],i={},o=void 0,p={unversionedId:"API/GameObjects/Sprite/Animations.js",id:"API/GameObjects/Sprite/Animations.js",title:"Animations.js",description:"A class to manage the animations of a sprite",source:"@site/docs/API/GameObjects/Sprite/Animations.js.md",sourceDirName:"API/GameObjects/Sprite",slug:"/API/GameObjects/Sprite/Animations.js",permalink:"/Impacto/docs/API/GameObjects/Sprite/Animations.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/GameObjects/Sprite/Animations.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Animation.js",permalink:"/Impacto/docs/API/GameObjects/Sprite/Animation.js"},next:{title:"Sprite.js",permalink:"/Impacto/docs/API/GameObjects/Sprite/Sprite.js"}},s={},u=[{value:"new Animations(parent, name, startFrame, numberOfFrames, speed, loop)",id:"new-animationsparent-name-startframe-numberofframes-speed-loop",level:2},{value:"Animations.get(name) \u21d2 <code>Animation</code>",id:"animationsgetname--animation",level:2},{value:"Animations.add(name, numberOfFrames, startFrame, speed, loop)",id:"animationsaddname-numberofframes-startframe-speed-loop",level:2},{value:"Animations.getAnimationsNames() \u21d2 <code>Array.&lt;string&gt;</code>",id:"animationsgetanimationsnames--arraystring",level:2},{value:"Animations.reset() \u21d2 <code>Animation</code>",id:"animationsreset--animation",level:2},{value:"Animations.play(name) \u21d2 <code>Animation</code>",id:"animationsplayname--animation",level:2},{value:"Animations.pause() \u21d2 <code>Animation</code>",id:"animationspause--animation",level:2},{value:"Animations.resume() \u21d2 <code>Animation</code>",id:"animationsresume--animation",level:2},{value:"Animations.setName(oldName, newName) \u21d2 <code>Animation</code>",id:"animationssetnameoldname-newname--animation",level:2},{value:"Animations.setSpeed(name, speed) \u21d2 <code>Animation</code>",id:"animationssetspeedname-speed--animation",level:2},{value:"Animations.setNumberOfFrames(name, numberOfFrames) \u21d2 <code>Animation</code>",id:"animationssetnumberofframesname-numberofframes--animation",level:2},{value:"Animations.setLoop(name, loop) \u21d2 <code>Animation</code>",id:"animationssetloopname-loop--animation",level:2}],k={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,m);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"Animations"}),(0,l.kt)("h1",{id:"animations"},"Animations"),(0,l.kt)("p",null,"A class to manage the animations of a sprite"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations"},"Animations"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_Animations_new"},"new Animations(parent, name, startFrame, numberOfFrames, [speed], [loop])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.get"},".get(name)")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.add"},".add(name, numberOfFrames, [startFrame], [speed], [loop])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.getAnimationsNames"},".getAnimationsNames()")," \u21d2 ",(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.reset"},".reset()")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.play"},".play(name)")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.pause"},".pause()")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.resume"},".resume()")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.setName"},".setName(oldName, newName)")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.setSpeed"},".setSpeed(name, speed)")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.setNumberOfFrames"},".setNumberOfFrames(name, numberOfFrames)")," \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Animations.setLoop"},".setLoop(name, loop)")," \u21d2 ",(0,l.kt)("code",null,"Animation"))))),(0,l.kt)("a",{name:"new_Animations_new"}),(0,l.kt)("h2",{id:"new-animationsparent-name-startframe-numberofframes-speed-loop"},"new Animations(parent, name, startFrame, numberOfFrames, ","[speed]",", ","[loop]",")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"parent"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Impacto.GameObjects.Sprite")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The parent Sprite."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animations."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startFrame"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The first frame of the Animations."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfFrames"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Number of frames of the Animations."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[speed]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The speed of the Animations."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[loop]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Whether the Animations should loop or not."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);\n')),(0,l.kt)("a",{name:"Animations.get"}),(0,l.kt)("h2",{id:"animationsgetname--animation"},"Animations.get(name) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Returns the animation state"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);\nconsole.log(mySprite.animations.get(""Default""));\n')),(0,l.kt)("a",{name:"Animations.add"}),(0,l.kt)("h2",{id:"animationsaddname-numberofframes-startframe-speed-loop"},"Animations.add(name, numberOfFrames, ","[startFrame]",", ","[speed]",", ","[loop]",")"),(0,l.kt)("p",null,"Add a new animation to the sprite"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfFrames"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Number of frames of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[startFrame]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The first frame of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[speed]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"100")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The speed of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[loop]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"true")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"Whether the Animation should loop or not."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);\n')),(0,l.kt)("a",{name:"Animations.getAnimationsNames"}),(0,l.kt)("h2",{id:"animationsgetanimationsnames--arraystring"},"Animations.getAnimationsNames() \u21d2 ",(0,l.kt)("code",null,"Array.","<","string",">")),(0,l.kt)("p",null,"Returns all animations names"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Array.","<","string",">")," - ",(0,l.kt)("p",null,"The names of the animations"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth());\nconsole.log(mySprite.animations.getAnimationsNames());\n')),(0,l.kt)("a",{name:"Animations.reset"}),(0,l.kt)("h2",{id:"animationsreset--animation"},"Animations.reset() \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Reset the animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).reset();\n')),(0,l.kt)("a",{name:"Animations.play"}),(0,l.kt)("h2",{id:"animationsplayname--animation"},"Animations.play(name) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Play the animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).play("Default");\n')),(0,l.kt)("a",{name:"Animations.pause"}),(0,l.kt)("h2",{id:"animationspause--animation"},"Animations.pause() \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Pause the animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).pause();\n')),(0,l.kt)("a",{name:"Animations.resume"}),(0,l.kt)("h2",{id:"animationsresume--animation"},"Animations.resume() \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Resume the animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).resume();\n')),(0,l.kt)("a",{name:"Animations.setName"}),(0,l.kt)("h2",{id:"animationssetnameoldname-newname--animation"},"Animations.setName(oldName, newName) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Change the name of a animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oldName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"newName"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new name of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeName("NewName");\n')),(0,l.kt)("a",{name:"Animations.setSpeed"}),(0,l.kt)("h2",{id:"animationssetspeedname-speed--animation"},"Animations.setSpeed(name, speed) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Change the speed of a animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"speed"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new speed of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeSpeed(100);\n')),(0,l.kt)("a",{name:"Animations.setNumberOfFrames"}),(0,l.kt)("h2",{id:"animationssetnumberofframesname-numberofframes--animation"},"Animations.setNumberOfFrames(name, numberOfFrames) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Change the number of frame of a animation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numberOfFrames"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new number of frames of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeNumberOfFrames(10);\n')),(0,l.kt)("a",{name:"Animations.setLoop"}),(0,l.kt)("h2",{id:"animationssetloopname-loop--animation"},"Animations.setLoop(name, loop) \u21d2 ",(0,l.kt)("code",null,"Animation")),(0,l.kt)("p",null,"Change if animation if in loop or not"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Animations"},(0,l.kt)("code",null,"Animations")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Animation")," - ",(0,l.kt)("p",null,"The animation state"),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The name of the Animation."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new loop state of the Animation."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");\nmySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeLoop(false);\n')))}d.isMDXComponent=!0}}]);