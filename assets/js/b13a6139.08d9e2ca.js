"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[992],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,u=m(t,["components","mdxType","originalType","parentName"]),s=p(n),d=r,c=s["".concat(o,".").concat(d)]||s[d]||k[d]||i;return n?a.createElement(c,l(l({ref:e},u),{},{components:n})):a.createElement(c,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,l[1]=m;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4336:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return m},metadata:function(){return p},toc:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],m={},o=void 0,p={unversionedId:"GameObjects/Sprite/Animation.js",id:"GameObjects/Sprite/Animation.js",title:"Animation.js",description:"A class to animate a sprite",source:"@site/API/GameObjects/Sprite/Animation.js.md",sourceDirName:"GameObjects/Sprite",slug:"/GameObjects/Sprite/Animation.js",permalink:"/Impacto/API/GameObjects/Sprite/Animation.js",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Rectangle.js",permalink:"/Impacto/API/GameObjects/Rectangle/Rectangle.js"},next:{title:"Animations.js",permalink:"/Impacto/API/GameObjects/Sprite/Animations.js"}},u={},k=[{value:"new Animation(parent, name, startFrame, numberOfFrames, speed, loop)",id:"new-animationparent-name-startframe-numberofframes-speed-loop",level:2},{value:"Animation.setName(newName) \u21d2 <code>Animation</code>",id:"animationsetnamenewname--codeanimationcode",level:2},{value:"Animation.setSpeed(name, speed) \u21d2 <code>Animation</code>",id:"animationsetspeedname-speed--codeanimationcode",level:2},{value:"Animation.setStartFrame(startFrame) \u21d2 <code>Animation</code>",id:"animationsetstartframestartframe--codeanimationcode",level:2},{value:"Animation.setNumberOfFrames(numberOfFrames) \u21d2 <code>Animation</code>",id:"animationsetnumberofframesnumberofframes--codeanimationcode",level:2},{value:"Animation.setLoop(loop) \u21d2 <code>Animation</code>",id:"animationsetlooploop--codeanimationcode",level:2},{value:"Animation.reset() \u21d2 <code>Animation</code>",id:"animationreset--codeanimationcode",level:2}],s={toc:k};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"Animation"}),(0,i.kt)("h1",{id:"animation"},"Animation"),(0,i.kt)("p",null,"A class to animate a sprite"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": global class  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation"},"Animation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#new_Animation_new"},"new Animation(parent, name, startFrame, numberOfFrames, speed, [loop])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.setName"},".setName(newName)")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.setSpeed"},".setSpeed(name, speed)")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.setStartFrame"},".setStartFrame(startFrame)")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.setNumberOfFrames"},".setNumberOfFrames(numberOfFrames)")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.setLoop"},".setLoop(loop)")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#Animation.reset"},".reset()")," \u21d2 ",(0,i.kt)("a",{parentName:"li",href:"#Animation"},(0,i.kt)("code",null,"Animation")))))),(0,i.kt)("a",{name:"new_Animation_new"}),(0,i.kt)("h2",{id:"new-animationparent-name-startframe-numberofframes-speed-loop"},"new Animation(parent, name, startFrame, numberOfFrames, speed, ","[loop]",")"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parent"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"Impacto.GameObjects.Sprite")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The parent Sprite."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The name of the Animations."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"startFrame"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The first frame of the Animations."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numberOfFrames"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Number of frames of the Animations."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"speed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The speed of the Animations."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[loop]"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"true")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"Whether the Animations should loop or not."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'new Animation(MySprite, "Default", 0, 10, 100, true);\n')),(0,i.kt)("a",{name:"Animation.setName"}),(0,i.kt)("h2",{id:"animationsetnamenewname--codeanimationcode"},"Animation.setName(newName) \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Change the current animation name"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"newName"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setName("MyNewName");\n')),(0,i.kt)("a",{name:"Animation.setSpeed"}),(0,i.kt)("h2",{id:"animationsetspeedname-speed--codeanimationcode"},"Animation.setSpeed(name, speed) \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Change the speed of a animation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The name of the Animation."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"speed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The new speed of the Animation."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setSpeed(50);\n')),(0,i.kt)("a",{name:"Animation.setStartFrame"}),(0,i.kt)("h2",{id:"animationsetstartframestartframe--codeanimationcode"},"Animation.setStartFrame(startFrame) \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Change the start frame of a animation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"startFrame"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The new start frame of the Animation."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setStartFrame(5);\n')),(0,i.kt)("a",{name:"Animation.setNumberOfFrames"}),(0,i.kt)("h2",{id:"animationsetnumberofframesnumberofframes--codeanimationcode"},"Animation.setNumberOfFrames(numberOfFrames) \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Change the number of frames of a animation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"numberOfFrames"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The new number of frames of the Animation."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setNumberOfFrames(5);\n')),(0,i.kt)("a",{name:"Animation.setLoop"}),(0,i.kt)("h2",{id:"animationsetlooploop--codeanimationcode"},"Animation.setLoop(loop) \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Change the loop of a animation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),"  "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"loop"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,"The new loop of the Animation."))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100, true).setLoop(false);\n')),(0,i.kt)("a",{name:"Animation.reset"}),(0,i.kt)("h2",{id:"animationreset--codeanimationcode"},"Animation.reset() \u21d2 ",(0,i.kt)("a",{parentName:"h2",href:"#Animation"},(0,i.kt)("code",null,"Animation"))),(0,i.kt)("p",null,"Reset the animation to the first frame"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation")),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Returns"),": ",(0,i.kt)("a",{parentName:"p",href:"#Animation"},(0,i.kt)("code",null,"Animation"))," - ",(0,i.kt)("p",null,"The animation state"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Example"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).reset();\n')))}d.isMDXComponent=!0}}]);