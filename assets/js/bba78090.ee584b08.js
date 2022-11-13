"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[609],{3905:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return d}});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=o.createContext({}),g=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},k=function(e){var t=g(e.components);return o.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},i=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,m=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),i=g(n),d=l,c=i["".concat(m,".").concat(d)]||i[d]||u[d]||a;return n?o.createElement(c,r(r({ref:t},k),{},{components:n})):o.createElement(c,r({ref:t},k))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=i;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var g=2;g<a;g++)r[g]=n[g];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}i.displayName="MDXCreateElement"},8804:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return m},default:function(){return d},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return u}});var o=n(7462),l=n(3366),a=(n(7294),n(3905)),r=["components"],p={},m=void 0,g={unversionedId:"API/GameObjects/Polygon/Polygon.js",id:"API/GameObjects/Polygon/Polygon.js",title:"Polygon.js",description:"This class will draw a polygon on the canvas.",source:"@site/docs/API/GameObjects/Polygon/Polygon.js.md",sourceDirName:"API/GameObjects/Polygon",slug:"/API/GameObjects/Polygon/Polygon.js",permalink:"/Impacto/docs/API/GameObjects/Polygon/Polygon.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/GameObjects/Polygon/Polygon.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Line.js",permalink:"/Impacto/docs/API/GameObjects/Line/Line.js"},next:{title:"Rectangle.js",permalink:"/Impacto/docs/API/GameObjects/Rectangle/Rectangle.js"}},k={},u=[{value:"new Polygon(x, y, vertices, fillColor, strokeColor)",id:"new-polygonx-y-vertices-fillcolor-strokecolor",level:2},{value:"Polygon.x",id:"polygonx",level:2},{value:"Polygon.y",id:"polygony",level:2},{value:"Polygon.x \u21d2 <code>number</code>",id:"polygonx--number",level:2},{value:"Polygon.y \u21d2 <code>number</code>",id:"polygony--number",level:2},{value:"Polygon.width \u21d2 <code>number</code>",id:"polygonwidth--number",level:2},{value:"Polygon.height \u21d2 <code>number</code>",id:"polygonheight--number",level:2},{value:"Polygon.getTop() \u21d2 <code>number</code>",id:"polygongettop--number",level:2},{value:"Polygon.getBottom() \u21d2 <code>number</code>",id:"polygongetbottom--number",level:2},{value:"Polygon.getLeft() \u21d2 <code>number</code>",id:"polygongetleft--number",level:2},{value:"Polygon.getRight() \u21d2 <code>number</code>",id:"polygongetright--number",level:2},{value:"Polygon.getCenterX() \u21d2 <code>number</code>",id:"polygongetcenterx--number",level:2},{value:"Polygon.getCenterY() \u21d2 <code>number</code>",id:"polygongetcentery--number",level:2},{value:"Polygon.getCenter() \u21d2 <code>Object</code>",id:"polygongetcenter--object",level:2},{value:"Polygon.add(x, y) \u21d2 <code>Polygon</code>",id:"polygonaddx-y--codepolygoncode",level:2},{value:"Polygon.remove(x, y) \u21d2 <code>Polygon</code>",id:"polygonremovex-y--codepolygoncode",level:2},{value:"Polygon.removePoint(point) \u21d2 <code>Polygon</code>",id:"polygonremovepointpoint--codepolygoncode",level:2},{value:"Polygon.removeIndex(index) \u21d2 <code>Polygon</code>",id:"polygonremoveindexindex--codepolygoncode",level:2},{value:"Polygon.setClose(close) \u21d2 <code>Polygon</code>",id:"polygonsetcloseclose--codepolygoncode",level:2},{value:"Polygon.getBounds() \u21d2 <code>Object</code>",id:"polygongetbounds--object",level:2},{value:"Polygon.getVertices() \u21d2 <code>Array.&lt;Object&gt;</code>",id:"polygongetvertices--arrayobject",level:2}],i={toc:u};function d(e){var t=e.components,n=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"Polygon"}),(0,a.kt)("h1",{id:"polygon--impactogameobjectsgameobject2d"},"Polygon \u21d0 ",(0,a.kt)("code",null,"Impacto.GameObjects.GameObject2D")),(0,a.kt)("p",null,"This class will draw a polygon on the canvas."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Extends"),": ",(0,a.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon"},"Polygon")," \u21d0 ",(0,a.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#new_Polygon_new"},"new Polygon(x, y, vertices, [fillColor], [strokeColor])")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.x"},".x")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.y"},".y")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.x"},".x")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.y"},".y")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.width"},".width")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.height"},".height")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getTop"},".getTop()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getBottom"},".getBottom()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getLeft"},".getLeft()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getRight"},".getRight()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getCenterX"},".getCenterX()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getCenterY"},".getCenterY()")," \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getCenter"},".getCenter()")," \u21d2 ",(0,a.kt)("code",null,"Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.add"},".add(x, y)")," \u21d2 ",(0,a.kt)("a",{parentName:"li",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.remove"},".remove(x, y)")," \u21d2 ",(0,a.kt)("a",{parentName:"li",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.removePoint"},".removePoint(point)")," \u21d2 ",(0,a.kt)("a",{parentName:"li",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.removeIndex"},".removeIndex(index)")," \u21d2 ",(0,a.kt)("a",{parentName:"li",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.setClose"},".setClose(close)")," \u21d2 ",(0,a.kt)("a",{parentName:"li",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getBounds"},".getBounds()")," \u21d2 ",(0,a.kt)("code",null,"Object")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#Polygon.getVertices"},".getVertices()")," \u21d2 ",(0,a.kt)("code",null,"Array.","<","Object",">"))))),(0,a.kt)("a",{name:"new_Polygon_new"}),(0,a.kt)("h2",{id:"new-polygonx-y-vertices-fillcolor-strokecolor"},"new Polygon(x, y, vertices, ","[fillColor]",", ","[strokeColor]",")"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The horizontal position of this Polygon in the world."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The vertical position of this Polygon in the world."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vertices"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"vertices")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The vertices of this Polygon."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[fillColor]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0xffffff")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The color the Polygon will be filled with, i.e. 0xff0000 for red."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"[strokeColor]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")," ","|"," ",(0,a.kt)("code",null,"string")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"0x000000")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The color of the border of the Polygon, i.e. 0x00ff00 for green."))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const myPolygon = new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20], "#ff0000", 0x00ff00);\n')),(0,a.kt)("a",{name:"Polygon.x"}),(0,a.kt)("h2",{id:"polygonx"},"Polygon.x"),(0,a.kt)("p",null,"Sets the X position of the Polygon."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The horizontal position of this Polygon in the world."))))),(0,a.kt)("a",{name:"Polygon.y"}),(0,a.kt)("h2",{id:"polygony"},"Polygon.y"),(0,a.kt)("p",null,"Sets the Y position of the Polygon."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The vertical position of this Polygon in the world."))))),(0,a.kt)("a",{name:"Polygon.x"}),(0,a.kt)("h2",{id:"polygonx--number"},"Polygon.x \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The horizontal position of this Polygon in the world relative to the origin."),"  "),(0,a.kt)("a",{name:"Polygon.y"}),(0,a.kt)("h2",{id:"polygony--number"},"Polygon.y \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The vertical position of this Polygon in the world relative to the origin."),"  "),(0,a.kt)("a",{name:"Polygon.width"}),(0,a.kt)("h2",{id:"polygonwidth--number"},"Polygon.width \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The width of this Polygon."),"  "),(0,a.kt)("a",{name:"Polygon.height"}),(0,a.kt)("h2",{id:"polygonheight--number"},"Polygon.height \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The height of this Polygon."),"  "),(0,a.kt)("a",{name:"Polygon.getTop"}),(0,a.kt)("h2",{id:"polygongettop--number"},"Polygon.getTop() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the topmost point of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The topmost point of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getTop(); // 10\n")),(0,a.kt)("a",{name:"Polygon.getBottom"}),(0,a.kt)("h2",{id:"polygongetbottom--number"},"Polygon.getBottom() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the bottommost point of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The bottommost point of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBottom(); // 20\n")),(0,a.kt)("a",{name:"Polygon.getLeft"}),(0,a.kt)("h2",{id:"polygongetleft--number"},"Polygon.getLeft() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the leftmost point of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The leftmost point of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getLeft(); // 10\n")),(0,a.kt)("a",{name:"Polygon.getRight"}),(0,a.kt)("h2",{id:"polygongetright--number"},"Polygon.getRight() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the rightmost point of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The rightmost point of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getRight(); // 20\n")),(0,a.kt)("a",{name:"Polygon.getCenterX"}),(0,a.kt)("h2",{id:"polygongetcenterx--number"},"Polygon.getCenterX() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the horizontal center of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The horizontal center of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterX(); // 15\n")),(0,a.kt)("a",{name:"Polygon.getCenterY"}),(0,a.kt)("h2",{id:"polygongetcentery--number"},"Polygon.getCenterY() \u21d2 ",(0,a.kt)("code",null,"number")),(0,a.kt)("p",null,"Returns the vertical center of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"number")," - ",(0,a.kt)("p",null,"The vertical center of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterY(); // 15\n")),(0,a.kt)("a",{name:"Polygon.getCenter"}),(0,a.kt)("h2",{id:"polygongetcenter--object"},"Polygon.getCenter() \u21d2 ",(0,a.kt)("code",null,"Object")),(0,a.kt)("p",null,"Returns the center of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Object")," - ",(0,a.kt)("p",null,"The center of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenter(); // {x: 15, y: 15}\n")),(0,a.kt)("a",{name:"Polygon.add"}),(0,a.kt)("h2",{id:"polygonaddx-y--codepolygoncode"},"Polygon.add(x, y) \u21d2 ",(0,a.kt)("a",{parentName:"h2",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("p",null,"Add a new point to the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))," - ",(0,a.kt)("p",null,"The polygon itself"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The x coordinate of the point"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The y coordinate of the point"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).addPoint(0, 0);\n")),(0,a.kt)("a",{name:"Polygon.remove"}),(0,a.kt)("h2",{id:"polygonremovex-y--codepolygoncode"},"Polygon.remove(x, y) \u21d2 ",(0,a.kt)("a",{parentName:"h2",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("p",null,"Remove a point from the polygon based in the coordinates"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))," - ",(0,a.kt)("p",null,"The polygon itself"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The x coordinate of the point"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"y"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The y coordinate of the point"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint(10, 10);\n")),(0,a.kt)("a",{name:"Polygon.removePoint"}),(0,a.kt)("h2",{id:"polygonremovepointpoint--codepolygoncode"},"Polygon.removePoint(point) \u21d2 ",(0,a.kt)("a",{parentName:"h2",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("p",null,"Remove a point from the polygon based in the object"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))," - ",(0,a.kt)("p",null,"The polygon itself"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"point"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The point to be removed"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint({x: 10, y: 10});\n")),(0,a.kt)("a",{name:"Polygon.removeIndex"}),(0,a.kt)("h2",{id:"polygonremoveindexindex--codepolygoncode"},"Polygon.removeIndex(index) \u21d2 ",(0,a.kt)("a",{parentName:"h2",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("p",null,"Remove a point from the polygon based in the index"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))," - ",(0,a.kt)("p",null,"The polygon itself"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"The index of the point"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removeIndex(0);\n")),(0,a.kt)("a",{name:"Polygon.setClose"}),(0,a.kt)("h2",{id:"polygonsetcloseclose--codepolygoncode"},"Polygon.setClose(close) \u21d2 ",(0,a.kt)("a",{parentName:"h2",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))),(0,a.kt)("p",null,"Close the last point to the first point"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon"))," - ",(0,a.kt)("p",null,"The polygon itself"),"  "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Param"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"close"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,"Whether the polygon should be closed or not"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).setClose(true);\n")),(0,a.kt)("a",{name:"Polygon.getBounds"}),(0,a.kt)("h2",{id:"polygongetbounds--object"},"Polygon.getBounds() \u21d2 ",(0,a.kt)("code",null,"Object")),(0,a.kt)("p",null,"Returns bounds of the polygon (the most top left and the most bottom right points)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Object")," - ",(0,a.kt)("p",null,"The bounds of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBounds(); // {x: 10, y: 10, width: 20, height: 20}\n")),(0,a.kt)("a",{name:"Polygon.getVertices"}),(0,a.kt)("h2",{id:"polygongetvertices--arrayobject"},"Polygon.getVertices() \u21d2 ",(0,a.kt)("code",null,"Array.","<","Object",">")),(0,a.kt)("p",null,"Returns the vertices of the polygon"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,a.kt)("a",{parentName:"p",href:"#Polygon"},(0,a.kt)("code",null,"Polygon")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Returns"),": ",(0,a.kt)("code",null,"Array.","<","Object",">")," - ",(0,a.kt)("p",null,"The vertices of the polygon"),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Example"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getVertices(); // [{x: 10, y: 10}, {x: 20, y: 20}, {x: 10, y: 20}]\n")))}d.isMDXComponent=!0}}]);