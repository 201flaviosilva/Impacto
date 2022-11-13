"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[829],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=g(n),d=r,c=u["".concat(o,".").concat(d)]||u[d]||k[d]||l;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5169:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),i=["components"],p={},o=void 0,g={unversionedId:"API/GameObjects/Triangle/Triangle.js",id:"API/GameObjects/Triangle/Triangle.js",title:"Triangle.js",description:"This class will draw a triangle on the canvas.",source:"@site/docs/API/GameObjects/Triangle/Triangle.js.md",sourceDirName:"API/GameObjects/Triangle",slug:"/API/GameObjects/Triangle/Triangle.js",permalink:"/Impacto/docs/API/GameObjects/Triangle/Triangle.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/GameObjects/Triangle/Triangle.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Text.js",permalink:"/Impacto/docs/API/GameObjects/Text/Text.js"},next:{title:"Types.js",permalink:"/Impacto/docs/API/GameObjects/Types.js"}},m={},k=[{value:"new Triangle(x, y, width, height, fillColor, strokeColor)",id:"new-trianglex-y-width-height-fillcolor-strokecolor",level:2},{value:"Triangle.x",id:"trianglex",level:2},{value:"Triangle.y",id:"triangley",level:2},{value:"Triangle.x \u21d2 <code>number</code>",id:"trianglex--number",level:2},{value:"Triangle.y \u21d2 <code>number</code>",id:"triangley--number",level:2},{value:"Triangle.getTop() \u21d2 <code>number</code>",id:"trianglegettop--number",level:2},{value:"Triangle.getBottom() \u21d2 <code>number</code>",id:"trianglegetbottom--number",level:2},{value:"Triangle.getLeft() \u21d2 <code>number</code>",id:"trianglegetleft--number",level:2},{value:"Triangle.getRight() \u21d2 <code>number</code>",id:"trianglegetright--number",level:2},{value:"Triangle.getCenterX() \u21d2 <code>number</code>",id:"trianglegetcenterx--number",level:2},{value:"Triangle.getCenterY() \u21d2 <code>number</code>",id:"trianglegetcentery--number",level:2},{value:"Triangle.getRealTop() \u21d2 <code>number</code>",id:"trianglegetrealtop--number",level:2},{value:"Triangle.getRealBottom() \u21d2 <code>number</code>",id:"trianglegetrealbottom--number",level:2},{value:"Triangle.getRealLeft() \u21d2 <code>number</code>",id:"trianglegetrealleft--number",level:2},{value:"Triangle.getRealRight() \u21d2 <code>number</code>",id:"trianglegetrealright--number",level:2},{value:"Triangle.getRealCenterX() \u21d2 <code>number</code>",id:"trianglegetrealcenterx--number",level:2},{value:"Triangle.getRealCenterY() \u21d2 <code>number</code>",id:"trianglegetrealcentery--number",level:2},{value:"Triangle.setWidth(width) \u21d2 <code>Triangle</code>",id:"trianglesetwidthwidth--codetrianglecode",level:2},{value:"Triangle.setHeight(height) \u21d2 <code>Triangle</code>",id:"trianglesetheightheight--codetrianglecode",level:2},{value:"Triangle.setSize(width, height) \u21d2 <code>Triangle</code>",id:"trianglesetsizewidth-height--codetrianglecode",level:2},{value:"Triangle.getArea() \u21d2 <code>number</code>",id:"trianglegetarea--number",level:2},{value:"Triangle.getPerimeter() \u21d2 <code>number</code>",id:"trianglegetperimeter--number",level:2},{value:"Triangle.getVertices() \u21d2 <code>Array.&lt;Object&gt;</code>",id:"trianglegetvertices--arrayobject",level:2}],u={toc:k};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"Triangle"}),(0,l.kt)("h1",{id:"triangle--impactogameobjectsgameobject2d"},"Triangle \u21d0 ",(0,l.kt)("code",null,"Impacto.GameObjects.GameObject2D")),(0,l.kt)("p",null,"This class will draw a triangle on the canvas."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Extends"),": ",(0,l.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle"},"Triangle")," \u21d0 ",(0,l.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#new_Triangle_new"},"new Triangle(x, y, width, height, [fillColor], [strokeColor])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.x"},".x")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.y"},".y")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.x"},".x")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.y"},".y")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getTop"},".getTop()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getBottom"},".getBottom()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getLeft"},".getLeft()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRight"},".getRight()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getCenterX"},".getCenterX()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getCenterY"},".getCenterY()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealTop"},".getRealTop()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealBottom"},".getRealBottom()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealLeft"},".getRealLeft()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealRight"},".getRealRight()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealCenterX"},".getRealCenterX()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getRealCenterY"},".getRealCenterY()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.setWidth"},".setWidth(width)")," \u21d2 ",(0,l.kt)("a",{parentName:"li",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.setHeight"},".setHeight(height)")," \u21d2 ",(0,l.kt)("a",{parentName:"li",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.setSize"},".setSize(width, height)")," \u21d2 ",(0,l.kt)("a",{parentName:"li",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getArea"},".getArea()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getPerimeter"},".getPerimeter()")," \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Triangle.getVertices"},".getVertices()")," \u21d2 ",(0,l.kt)("code",null,"Array.","<","Object",">"))))),(0,l.kt)("a",{name:"new_Triangle_new"}),(0,l.kt)("h2",{id:"new-trianglex-y-width-height-fillcolor-strokecolor"},"new Triangle(x, y, width, height, ","[fillColor]",", ","[strokeColor]",")"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The horizontal position of this Triangle in the world."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The vertical position of this Triangle in the world."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The width of this Triangle."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The height of this Triangle."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[fillColor]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")," ","|"," ",(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0xffffff")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The color the Triangle will be filled with, i.e. 0xff0000 for red."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[strokeColor]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")," ","|"," ",(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0x000000")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The color of the border of the Triangle, i.e. 0x00ff00 for green."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const myTriangle = new Impacto.GameObjects.Triangle(400, 300, 100, 100, "#ff0000", 0x00ff00);\n')),(0,l.kt)("a",{name:"Triangle.x"}),(0,l.kt)("h2",{id:"trianglex"},"Triangle.x"),(0,l.kt)("p",null,"Sets the X position of the Triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The horizontal position of this Triangle in the world."))))),(0,l.kt)("a",{name:"Triangle.y"}),(0,l.kt)("h2",{id:"triangley"},"Triangle.y"),(0,l.kt)("p",null,"Sets the Y position of the Triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The vertical position of this Triangle in the world."))))),(0,l.kt)("a",{name:"Triangle.x"}),(0,l.kt)("h2",{id:"trianglex--number"},"Triangle.x \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The horizontal position of this Triangle in the world relative to the origin."),"  "),(0,l.kt)("a",{name:"Triangle.y"}),(0,l.kt)("h2",{id:"triangley--number"},"Triangle.y \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The vertical position of this Triangle in the world relative to the origin."),"  "),(0,l.kt)("a",{name:"Triangle.getTop"}),(0,l.kt)("h2",{id:"trianglegettop--number"},"Triangle.getTop() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the top side position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The topmost point of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getTop(); // 300\n")),(0,l.kt)("a",{name:"Triangle.getBottom"}),(0,l.kt)("h2",{id:"trianglegetbottom--number"},"Triangle.getBottom() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the bottom side position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The bottommost point of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getBottom(); // 400\n")),(0,l.kt)("a",{name:"Triangle.getLeft"}),(0,l.kt)("h2",{id:"trianglegetleft--number"},"Triangle.getLeft() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the left side position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The leftmost point of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getLeft(); // 400\n")),(0,l.kt)("a",{name:"Triangle.getRight"}),(0,l.kt)("h2",{id:"trianglegetright--number"},"Triangle.getRight() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the right side position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The rightmost point of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRight(); // 500\n")),(0,l.kt)("a",{name:"Triangle.getCenterX"}),(0,l.kt)("h2",{id:"trianglegetcenterx--number"},"Triangle.getCenterX() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the center X position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The width of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterX(); // 450\n")),(0,l.kt)("a",{name:"Triangle.getCenterY"}),(0,l.kt)("h2",{id:"trianglegetcentery--number"},"Triangle.getCenterY() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the center Y position of the triangle, based in the origin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The height of the triangle"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterY(); // 450\n")),(0,l.kt)("a",{name:"Triangle.getRealTop"}),(0,l.kt)("h2",{id:"trianglegetrealtop--number"},"Triangle.getRealTop() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real top position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real top position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealTop(); // 300\n")),(0,l.kt)("a",{name:"Triangle.getRealBottom"}),(0,l.kt)("h2",{id:"trianglegetrealbottom--number"},"Triangle.getRealBottom() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real bottom position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real bottom position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealBottom(); // 400\n")),(0,l.kt)("a",{name:"Triangle.getRealLeft"}),(0,l.kt)("h2",{id:"trianglegetrealleft--number"},"Triangle.getRealLeft() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real left position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real left position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealLeft(); // 400\n")),(0,l.kt)("a",{name:"Triangle.getRealRight"}),(0,l.kt)("h2",{id:"trianglegetrealright--number"},"Triangle.getRealRight() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real right position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real right position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealRight(); // 400\n")),(0,l.kt)("a",{name:"Triangle.getRealCenterX"}),(0,l.kt)("h2",{id:"trianglegetrealcenterx--number"},"Triangle.getRealCenterX() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real center x position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real center position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterX(); // 450\n")),(0,l.kt)("a",{name:"Triangle.getRealCenterY"}),(0,l.kt)("h2",{id:"trianglegetrealcentery--number"},"Triangle.getRealCenterY() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Returns the real center y position of the triangle in the world."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The real center position of the triangle in the world"),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterY(); // 450\n")),(0,l.kt)("a",{name:"Triangle.setWidth"}),(0,l.kt)("h2",{id:"trianglesetwidthwidth--codetrianglecode"},"Triangle.setWidth(width) \u21d2 ",(0,l.kt)("a",{parentName:"h2",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("p",null,"Change the width of the triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))," - ",(0,l.kt)("p",null,"The triangle itself."),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new width of the triangle."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).setWidth(200); // 200\n")),(0,l.kt)("a",{name:"Triangle.setHeight"}),(0,l.kt)("h2",{id:"trianglesetheightheight--codetrianglecode"},"Triangle.setHeight(height) \u21d2 ",(0,l.kt)("a",{parentName:"h2",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("p",null,"Change the height of the triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))," - ",(0,l.kt)("p",null,"The triangle itself."),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new height of the triangle."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).setHeight(200); // 200\n")),(0,l.kt)("a",{name:"Triangle.setSize"}),(0,l.kt)("h2",{id:"trianglesetsizewidth-height--codetrianglecode"},"Triangle.setSize(width, height) \u21d2 ",(0,l.kt)("a",{parentName:"h2",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))),(0,l.kt)("p",null,"Change the size of the triangle."),(0,l.kt)("p",null,"if the height is not defined, it will be the same as the width."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle"))," - ",(0,l.kt)("p",null,"The triangle itself."),"  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new width of the triangle."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",null,"The new height of the triangle."))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).setSize(200, 200); // 200, 200\n")),(0,l.kt)("a",{name:"Triangle.getArea"}),(0,l.kt)("h2",{id:"trianglegetarea--number"},"Triangle.getArea() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Calculate the area of the triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The area of the triangle."),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getArea(); // 5000\n")),(0,l.kt)("a",{name:"Triangle.getPerimeter"}),(0,l.kt)("h2",{id:"trianglegetperimeter--number"},"Triangle.getPerimeter() \u21d2 ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,"Calculate the perimeter of the triangle."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"number")," - ",(0,l.kt)("p",null,"The perimeter of the triangle."),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Triangle(400, 300, 100, 100).getPerimeter(); // 300\n")),(0,l.kt)("a",{name:"Triangle.getVertices"}),(0,l.kt)("h2",{id:"trianglegetvertices--arrayobject"},"Triangle.getVertices() \u21d2 ",(0,l.kt)("code",null,"Array.","<","Object",">")),(0,l.kt)("p",null,"Returns the triangle's vertices."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,l.kt)("a",{parentName:"p",href:"#Triangle"},(0,l.kt)("code",null,"Triangle")),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("code",null,"Array.","<","Object",">")," - ",(0,l.kt)("p",null,"The triangle's vertices."),(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("strong",{parentName:"p"},"Example"),"  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'new Impacto.GameObjects.Triangle(400, 300, 100, 100).getVertices(); // [\n {"x": 100,"y": 100},\n {"x": 200,"y": 100},\n {"x": 150,"y": 200}]\n')))}d.isMDXComponent=!0}}]);