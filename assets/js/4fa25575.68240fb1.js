"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[504],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),d=s(n),k=o,c=d["".concat(p,".").concat(k)]||d[k]||i[k]||r;return n?a.createElement(c,u(u({ref:e},m),{},{components:n})):a.createElement(c,u({ref:e},m))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,u=new Array(r);u[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,u[1]=l;for(var s=2;s<r;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8623:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return i}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),u=["components"],l={},p=void 0,s={unversionedId:"API/Inputs/Mouse.js",id:"API/Inputs/Mouse.js",title:"Mouse.js",description:"Manages the mouse input.",source:"@site/docs/API/Inputs/Mouse.js.md",sourceDirName:"API/Inputs",slug:"/API/Inputs/Mouse.js",permalink:"/Impacto/docs/API/Inputs/Mouse.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/Inputs/Mouse.js.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675953158,formattedLastUpdatedAt:"09/02/2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Keyboard.js",permalink:"/Impacto/docs/API/Inputs/Keyboard.js"},next:{title:"Scene.js",permalink:"/Impacto/docs/API/Scenes/Scene.js"}},m={},i=[{value:"MouseManager.getPosition() \u21d2 <code>Object</code>",id:"mousemanagergetposition--object",level:2},{value:"MouseManager.getWindowPosition() \u21d2 <code>Object</code>",id:"mousemanagergetwindowposition--object",level:2},{value:"MouseManager.getNameByButtonCode(buttonCode) \u21d2 <code>string</code>",id:"mousemanagergetnamebybuttoncodebuttoncode--string",level:2},{value:"MouseManager.getButtonKeyByName(buttonName) \u21d2 <code>number</code>",id:"mousemanagergetbuttonkeybynamebuttonname--number",level:2},{value:"MouseManager.isButtonDown(button) \u21d2 <code>boolean</code>",id:"mousemanagerisbuttondownbutton--boolean",level:2},{value:"MouseManager.isButtonDownByName(button) \u21d2 <code>boolean</code>",id:"mousemanagerisbuttondownbynamebutton--boolean",level:2},{value:"MouseManager.isButtonDownByButtonCode(button) \u21d2 <code>boolean</code>",id:"mousemanagerisbuttondownbybuttoncodebutton--boolean",level:2}],d={toc:i};function k(t){var e=t.components,n=(0,o.Z)(t,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"MouseManager"}),(0,r.kt)("h1",{id:"mousemanager"},"MouseManager"),(0,r.kt)("p",null,"Manages the mouse input."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager"},"MouseManager"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.getPosition"},".getPosition()")," \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.getWindowPosition"},".getWindowPosition()")," \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.getNameByButtonCode"},".getNameByButtonCode(buttonCode)")," \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.getButtonKeyByName"},".getButtonKeyByName(buttonName)")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.isButtonDown"},".isButtonDown(button)")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.isButtonDownByName"},".isButtonDownByName(button)")," \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#MouseManager.isButtonDownByButtonCode"},".isButtonDownByButtonCode(button)")," \u21d2 ",(0,r.kt)("code",null,"boolean"))))),(0,r.kt)("a",{name:"MouseManager.getPosition"}),(0,r.kt)("h2",{id:"mousemanagergetposition--object"},"MouseManager.getPosition() \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("p",null,"Returns the mouse position relative to the canvas."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Object")," - ",(0,r.kt)("p",null,"The current mouse position {x, y}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { x, y } = Impacto.Inputs.Mouse.getPosition();\n")),(0,r.kt)("a",{name:"MouseManager.getWindowPosition"}),(0,r.kt)("h2",{id:"mousemanagergetwindowposition--object"},"MouseManager.getWindowPosition() \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("p",null,"Returns the mouse position relative to the window."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Object")," - ",(0,r.kt)("p",null,"The current mouse position {x, y}"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { x, y } = Impacto.Inputs.Mouse.getWindowPosition();\n")),(0,r.kt)("a",{name:"MouseManager.getNameByButtonCode"}),(0,r.kt)("h2",{id:"mousemanagergetnamebybuttoncodebuttoncode--string"},"MouseManager.getNameByButtonCode(buttonCode) \u21d2 ",(0,r.kt)("code",null,"string")),(0,r.kt)("p",null,"Returns the name of the button by the button code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"string")," - ",(0,r.kt)("p",null,"The name of the button"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttonCode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The button code"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(Impacto.Inputs.Mouse.getNameByButtonCode(1)); // "middle"\n')),(0,r.kt)("a",{name:"MouseManager.getButtonKeyByName"}),(0,r.kt)("h2",{id:"mousemanagergetbuttonkeybynamebuttonname--number"},"MouseManager.getButtonKeyByName(buttonName) \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the code of the button by the button name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The button code"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"buttonName"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The name of the button"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(Impacto.Inputs.Mouse.getButtonCodeByName("left")); // 0\n')),(0,r.kt)("a",{name:"MouseManager.isButtonDown"}),(0,r.kt)("h2",{id:"mousemanagerisbuttondownbutton--boolean"},"MouseManager.isButtonDown(button) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Returns if the button is pressed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("p",null,"True if the button is pressed"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")," ","|"," ",(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The button name or code"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Impacto.Inputs.Mouse.isButtonPressed("left") // True\n')),(0,r.kt)("a",{name:"MouseManager.isButtonDownByName"}),(0,r.kt)("h2",{id:"mousemanagerisbuttondownbynamebutton--boolean"},"MouseManager.isButtonDownByName(button) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Returns if the button is pressed by the button name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("p",null,"True if the button is pressed"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")," ","|"," ",(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The button name"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'Impacto.Inputs.Mouse.isButtonDownByName("left") // True\n')),(0,r.kt)("a",{name:"MouseManager.isButtonDownByButtonCode"}),(0,r.kt)("h2",{id:"mousemanagerisbuttondownbybuttoncodebutton--boolean"},"MouseManager.isButtonDownByButtonCode(button) \u21d2 ",(0,r.kt)("code",null,"boolean")),(0,r.kt)("p",null,"Returns if the button is pressed by the button code."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#MouseManager"},(0,r.kt)("code",null,"MouseManager")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"boolean")," - ",(0,r.kt)("p",null,"True if the button is pressed"),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")," ","|"," ",(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The button code"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"Impacto.Inputs.Mouse.isButtonDownByName(2) // True\n")))}k.isMDXComponent=!0}}]);