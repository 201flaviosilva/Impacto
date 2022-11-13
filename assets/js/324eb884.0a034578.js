"use strict";(self.webpackChunkimpacto_docs=self.webpackChunkimpacto_docs||[]).push([[259],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return u}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),g=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=g(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=g(n),u=l,d=k["".concat(c,".").concat(u)]||k[u]||m[u]||r;return n?a.createElement(d,o(o({ref:t},i),{},{components:n})):a.createElement(d,o({ref:t},i))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var g=2;g<r;g++)o[g]=n[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9498:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return p},metadata:function(){return g},toc:function(){return m}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],p={},c=void 0,g={unversionedId:"API/GameObjects/Rectangle/Rectangle.js",id:"API/GameObjects/Rectangle/Rectangle.js",title:"Rectangle.js",description:"The Rectangle Shape is a 2D Game Object that can be added to a Scene.",source:"@site/docs/API/GameObjects/Rectangle/Rectangle.js.md",sourceDirName:"API/GameObjects/Rectangle",slug:"/API/GameObjects/Rectangle/Rectangle.js",permalink:"/Impacto/docs/API/GameObjects/Rectangle/Rectangle.js",draft:!1,editUrl:"https://github.com/201flaviosilva/Impacto/docs/API/GameObjects/Rectangle/Rectangle.js.md",tags:[],version:"current",lastUpdatedBy:"Fl\xe1vio Silva",lastUpdatedAt:1668350470,formattedLastUpdatedAt:"13/11/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Polygon.js",permalink:"/Impacto/docs/API/GameObjects/Polygon/Polygon.js"},next:{title:"Animation.js",permalink:"/Impacto/docs/API/GameObjects/Sprite/Animation.js"}},i={},m=[{value:"new Rectangle(x, y, width, height, fillColor, strokeColor)",id:"new-rectanglex-y-width-height-fillcolor-strokecolor",level:2},{value:"Rectangle.x",id:"rectanglex",level:2},{value:"Rectangle.y",id:"rectangley",level:2},{value:"Rectangle.x \u21d2 <code>number</code>",id:"rectanglex--number",level:2},{value:"Rectangle.y \u21d2 <code>number</code>",id:"rectangley--number",level:2},{value:"Rectangle.getTop() \u21d2 <code>number</code>",id:"rectanglegettop--number",level:2},{value:"Rectangle.getBottom() \u21d2 <code>number</code>",id:"rectanglegetbottom--number",level:2},{value:"Rectangle.getLeft() \u21d2 <code>number</code>",id:"rectanglegetleft--number",level:2},{value:"Rectangle.getRight() \u21d2 <code>number</code>",id:"rectanglegetright--number",level:2},{value:"Rectangle.getCenterX() \u21d2 <code>number</code>",id:"rectanglegetcenterx--number",level:2},{value:"Rectangle.getCenterY() \u21d2 <code>number</code>",id:"rectanglegetcentery--number",level:2},{value:"Rectangle.getRealTop() \u21d2 <code>number</code>",id:"rectanglegetrealtop--number",level:2},{value:"Rectangle.getRealBottom() \u21d2 <code>number</code>",id:"rectanglegetrealbottom--number",level:2},{value:"Rectangle.getRealLeft() \u21d2 <code>number</code>",id:"rectanglegetrealleft--number",level:2},{value:"Rectangle.getRealRight() \u21d2 <code>number</code>",id:"rectanglegetrealright--number",level:2},{value:"Rectangle.getRealCenterX() \u21d2 <code>number</code>",id:"rectanglegetrealcenterx--number",level:2},{value:"Rectangle.getRealCenterY() \u21d2 <code>number</code>",id:"rectanglegetrealcentery--number",level:2},{value:"Rectangle.setWidth(width) \u21d2 <code>Rectangle</code>",id:"rectanglesetwidthwidth--coderectanglecode",level:2},{value:"Rectangle.setHeight(height) \u21d2 <code>Rectangle</code>",id:"rectanglesetheightheight--coderectanglecode",level:2},{value:"Rectangle.setSize(width, height) \u21d2 <code>Rectangle</code>",id:"rectanglesetsizewidth-height--coderectanglecode",level:2},{value:"Rectangle.refresh(x, y, width, height) \u21d2 <code>Rectangle</code>",id:"rectanglerefreshx-y-width-height--coderectanglecode",level:2},{value:"Rectangle.setRound(topLeft, topRight, bottomLeft, bottomRight) \u21d2 <code>Rectangle</code>",id:"rectanglesetroundtopleft-topright-bottomleft-bottomright--coderectanglecode",level:2},{value:"Rectangle.getBounds() \u21d2 <code>Object</code>",id:"rectanglegetbounds--object",level:2},{value:"Rectangle.getArea() \u21d2 <code>number</code>",id:"rectanglegetarea--number",level:2},{value:"Rectangle.getPerimeter() \u21d2 <code>number</code>",id:"rectanglegetperimeter--number",level:2},{value:"Rectangle.getVertices() \u21d2 <code>Array</code>",id:"rectanglegetvertices--array",level:2}],k={toc:m};function u(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{name:"Rectangle"}),(0,r.kt)("h1",{id:"rectangle--impactogameobjectsgameobject2d"},"Rectangle \u21d0 ",(0,r.kt)("code",null,"Impacto.GameObjects.GameObject2D")),(0,r.kt)("p",null,"The Rectangle Shape is a 2D Game Object that can be added to a Scene. Its possible to set a rounder corner radius."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": global class",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Extends"),": ",(0,r.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Constructors"),":   "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},"Rectangle")," \u21d0 ",(0,r.kt)("code",null,"Impacto.GameObjects.GameObject2D"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#new_Rectangle_new"},"new Rectangle(x, y, [width], [height], [fillColor], [strokeColor])")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.x"},".x")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.y"},".y")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.x"},".x")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.y"},".y")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getTop"},".getTop()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getBottom"},".getBottom()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getLeft"},".getLeft()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRight"},".getRight()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getCenterX"},".getCenterX()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getCenterY"},".getCenterY()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealTop"},".getRealTop()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealBottom"},".getRealBottom()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealLeft"},".getRealLeft()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealRight"},".getRealRight()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealCenterX"},".getRealCenterX()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getRealCenterY"},".getRealCenterY()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.setWidth"},".setWidth(width)")," \u21d2 ",(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.setHeight"},".setHeight(height)")," \u21d2 ",(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.setSize"},".setSize(width, height)")," \u21d2 ",(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.refresh"},".refresh(x, y, width, height)")," \u21d2 ",(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.setRound"},".setRound(topLeft, topRight, bottomLeft, bottomRight)")," \u21d2 ",(0,r.kt)("a",{parentName:"li",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getBounds"},".getBounds()")," \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getArea"},".getArea()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getPerimeter"},".getPerimeter()")," \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Rectangle.getVertices"},".getVertices()")," \u21d2 ",(0,r.kt)("code",null,"Array"))))),(0,r.kt)("a",{name:"new_Rectangle_new"}),(0,r.kt)("h2",{id:"new-rectanglex-y-width-height-fillcolor-strokecolor"},"new Rectangle(x, y, ","[width]",", ","[height]",", ","[fillColor]",", ","[strokeColor]",")"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The vertical position of this Rectangle in the world."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[width]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The width of the rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[height]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"100")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The height of the rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[fillColor]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")," ","|"," ",(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0xffffff")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The color the rectangle will be filled with, i.e. 0xff0000 for red."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"[strokeColor]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")," ","|"," ",(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0x000000")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The color of the border of the rectangle, i.e. 0x00ff00 for green."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const rect = new Impacto.GameObjects.Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);\n')),(0,r.kt)("a",{name:"Rectangle.x"}),(0,r.kt)("h2",{id:"rectanglex"},"Rectangle.x"),(0,r.kt)("p",null,"Sets the X position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world."))))),(0,r.kt)("a",{name:"Rectangle.y"}),(0,r.kt)("h2",{id:"rectangley"},"Rectangle.y"),(0,r.kt)("p",null,"Gets the Y position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The vertical position of this Rectangle in the world."))))),(0,r.kt)("a",{name:"Rectangle.x"}),(0,r.kt)("h2",{id:"rectanglex--number"},"Rectangle.x \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.y"}),(0,r.kt)("h2",{id:"rectangley--number"},"Rectangle.y \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static property of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The vertical position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.getTop"}),(0,r.kt)("h2",{id:"rectanglegettop--number"},"Rectangle.getTop() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the top side position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The vertical position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.getBottom"}),(0,r.kt)("h2",{id:"rectanglegetbottom--number"},"Rectangle.getBottom() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the bottom side position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The vertical position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.getLeft"}),(0,r.kt)("h2",{id:"rectanglegetleft--number"},"Rectangle.getLeft() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the left side position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.getRight"}),(0,r.kt)("h2",{id:"rectanglegetright--number"},"Rectangle.getRight() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the right side position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world relative to the origin."),"  "),(0,r.kt)("a",{name:"Rectangle.getCenterX"}),(0,r.kt)("h2",{id:"rectanglegetcenterx--number"},"Rectangle.getCenterX() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the center X position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The horizontal position of this Rectangle in the world relative to the origin."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5\n")),(0,r.kt)("a",{name:"Rectangle.getCenterY"}),(0,r.kt)("h2",{id:"rectanglegetcentery--number"},"Rectangle.getCenterY() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the center Y position of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The vertical position of this Rectangle in the world relative to the origin."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5\n")),(0,r.kt)("a",{name:"Rectangle.getRealTop"}),(0,r.kt)("h2",{id:"rectanglegetrealtop--number"},"Rectangle.getRealTop() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real top side position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real vertical position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealTop(); // 10\n")),(0,r.kt)("a",{name:"Rectangle.getRealBottom"}),(0,r.kt)("h2",{id:"rectanglegetrealbottom--number"},"Rectangle.getRealBottom() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real bottom side position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real vertical position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealBottom(); // 110\n")),(0,r.kt)("a",{name:"Rectangle.getRealLeft"}),(0,r.kt)("h2",{id:"rectanglegetrealleft--number"},"Rectangle.getRealLeft() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real left side position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real horizontal position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealLeft(); // 10\n")),(0,r.kt)("a",{name:"Rectangle.getRealRight"}),(0,r.kt)("h2",{id:"rectanglegetrealright--number"},"Rectangle.getRealRight() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real right side position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real horizontal position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealRight(); // 110\n")),(0,r.kt)("a",{name:"Rectangle.getRealCenterX"}),(0,r.kt)("h2",{id:"rectanglegetrealcenterx--number"},"Rectangle.getRealCenterX() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real center X position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real horizontal position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterX(); // 55\n")),(0,r.kt)("a",{name:"Rectangle.getRealCenterY"}),(0,r.kt)("h2",{id:"rectanglegetrealcentery--number"},"Rectangle.getRealCenterY() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Returns the real center Y position of the rectangle. (Not relative to the origin)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The real vertical position of this Rectangle in the world."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterY(); // 55\n")),(0,r.kt)("a",{name:"Rectangle.setWidth"}),(0,r.kt)("h2",{id:"rectanglesetwidthwidth--coderectanglecode"},"Rectangle.setWidth(width) \u21d2 ",(0,r.kt)("a",{parentName:"h2",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("p",null,"Sets the width of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))," - ",(0,r.kt)("p",null,"This Rectangle."),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new width of this Rectangle."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setWidth(200);\n")),(0,r.kt)("a",{name:"Rectangle.setHeight"}),(0,r.kt)("h2",{id:"rectanglesetheightheight--coderectanglecode"},"Rectangle.setHeight(height) \u21d2 ",(0,r.kt)("a",{parentName:"h2",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("p",null,"Sets the height of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))," - ",(0,r.kt)("p",null,"This Rectangle."),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new height of this Rectangle."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setHeight(200);\n")),(0,r.kt)("a",{name:"Rectangle.setSize"}),(0,r.kt)("h2",{id:"rectanglesetsizewidth-height--coderectanglecode"},"Rectangle.setSize(width, height) \u21d2 ",(0,r.kt)("a",{parentName:"h2",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("p",null,"Sets the size of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))," - ",(0,r.kt)("p",null,"This Rectangle."),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new width of this Rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new height of this Rectangle."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setSize(50, 50);\n")),(0,r.kt)("a",{name:"Rectangle.refresh"}),(0,r.kt)("h2",{id:"rectanglerefreshx-y-width-height--coderectanglecode"},"Rectangle.refresh(x, y, width, height) \u21d2 ",(0,r.kt)("a",{parentName:"h2",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("p",null,"Sets the position  and size of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))," - ",(0,r.kt)("p",null,"This Rectangle."),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new horizontal position of this Rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"y"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new vertical position of this Rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"width"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new width of this Rectangle."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new height of this Rectangle."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setPositionAndSize(20, 30, 50, 75);\n")),(0,r.kt)("a",{name:"Rectangle.setRound"}),(0,r.kt)("h2",{id:"rectanglesetroundtopleft-topright-bottomleft-bottomright--coderectanglecode"},"Rectangle.setRound(topLeft, topRight, bottomLeft, bottomRight) \u21d2 ",(0,r.kt)("a",{parentName:"h2",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))),(0,r.kt)("p",null,"Sets the roundedness of the rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle"))," - ",(0,r.kt)("p",null,"This Rectangle."),"  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topLeft"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new roundedness of the top left corner."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topRight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new roundedness of the top right corner."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomLeft"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new roundedness of the bottom left corner."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bottomRight"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"number")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"The new roundedness of the bottom right corner."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(10, 10).setRoundedness(10);\n")),(0,r.kt)("a",{name:"Rectangle.getBounds"}),(0,r.kt)("h2",{id:"rectanglegetbounds--object"},"Rectangle.getBounds() \u21d2 ",(0,r.kt)("code",null,"Object")),(0,r.kt)("p",null,"Gets the bounding box of this Rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Object")," - ",(0,r.kt)("p",null,"The bounding box of this Rectangle."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }\n")),(0,r.kt)("a",{name:"Rectangle.getArea"}),(0,r.kt)("h2",{id:"rectanglegetarea--number"},"Rectangle.getArea() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Gets the area of this Rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The area of this Rectangle."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Read only"),": true",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getArea(); // 10000\n")),(0,r.kt)("a",{name:"Rectangle.getPerimeter"}),(0,r.kt)("h2",{id:"rectanglegetperimeter--number"},"Rectangle.getPerimeter() \u21d2 ",(0,r.kt)("code",null,"number")),(0,r.kt)("p",null,"Gets the perimeter of this Rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"number")," - ",(0,r.kt)("p",null,"The perimeter of this Rectangle."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Read only"),": true",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getPerimeter(); // 200\n")),(0,r.kt)("a",{name:"Rectangle.getVertices"}),(0,r.kt)("h2",{id:"rectanglegetvertices--array"},"Rectangle.getVertices() \u21d2 ",(0,r.kt)("code",null,"Array")),(0,r.kt)("p",null,"Gets the point of all vertices of this Rectangle."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Kind"),": static method of ",(0,r.kt)("a",{parentName:"p",href:"#Rectangle"},(0,r.kt)("code",null,"Rectangle")),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("code",null,"Array")," - ",(0,r.kt)("p",null,"All vertices of this Rectangle."),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Read only"),": true",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example"),"  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getVertices(); // [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]\n")))}u.isMDXComponent=!0}}]);