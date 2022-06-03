<a name="Triangle"></a>

# Triangle ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>This class will draw a triangle on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Triangle](#Triangle) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Triangle(x, y, width, height, [fillColor], [strokeColor])](#new_Triangle_new)
    * [.x](#Triangle.x)
    * [.y](#Triangle.y)
    * [.x](#Triangle.x) ⇒ <code>number</code>
    * [.y](#Triangle.y) ⇒ <code>number</code>
    * [.getTop()](#Triangle.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Triangle.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Triangle.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Triangle.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Triangle.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Triangle.getCenterY) ⇒ <code>number</code>
    * [.getRealTop()](#Triangle.getRealTop) ⇒ <code>number</code>
    * [.getRealBottom()](#Triangle.getRealBottom) ⇒ <code>number</code>
    * [.getRealLeft()](#Triangle.getRealLeft) ⇒ <code>number</code>
    * [.getRealRight()](#Triangle.getRealRight) ⇒ <code>number</code>
    * [.getRealCenterX()](#Triangle.getRealCenterX) ⇒ <code>number</code>
    * [.getRealCenterY()](#Triangle.getRealCenterY) ⇒ <code>number</code>
    * [.setWidth(width)](#Triangle.setWidth) ⇒ [<code>Triangle</code>](#Triangle)
    * [.setHeight(height)](#Triangle.setHeight) ⇒ [<code>Triangle</code>](#Triangle)
    * [.setSize(width, height)](#Triangle.setSize) ⇒ [<code>Triangle</code>](#Triangle)
    * [.getArea()](#Triangle.getArea) ⇒ <code>number</code>
    * [.getPerimeter()](#Triangle.getPerimeter) ⇒ <code>number</code>
    * [.getVertices()](#Triangle.getVertices) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="new_Triangle_new"></a>

## new Triangle(x, y, width, height, [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Triangle in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Triangle in the world.</p> |
| width | <code>number</code> |  | <p>The width of this Triangle.</p> |
| height | <code>number</code> |  | <p>The height of this Triangle.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the Triangle will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the Triangle, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const myTriangle = new Impacto.GameObjects.Triangle(400, 300, 100, 100, "#ff0000", 0x00ff00);
```
<a name="Triangle.x"></a>

## Triangle.x
<p>Sets the X position of the Triangle.</p>

**Kind**: static property of [<code>Triangle</code>](#Triangle)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of this Triangle in the world.</p> |

<a name="Triangle.y"></a>

## Triangle.y
<p>Sets the Y position of the Triangle.</p>

**Kind**: static property of [<code>Triangle</code>](#Triangle)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of this Triangle in the world.</p> |

<a name="Triangle.x"></a>

## Triangle.x ⇒ <code>number</code>
**Kind**: static property of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Triangle in the world relative to the origin.</p>  
<a name="Triangle.y"></a>

## Triangle.y ⇒ <code>number</code>
**Kind**: static property of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The vertical position of this Triangle in the world relative to the origin.</p>  
<a name="Triangle.getTop"></a>

## Triangle.getTop() ⇒ <code>number</code>
<p>Returns the top side position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The topmost point of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getTop(); // 300
```
<a name="Triangle.getBottom"></a>

## Triangle.getBottom() ⇒ <code>number</code>
<p>Returns the bottom side position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The bottommost point of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getBottom(); // 400
```
<a name="Triangle.getLeft"></a>

## Triangle.getLeft() ⇒ <code>number</code>
<p>Returns the left side position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The leftmost point of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getLeft(); // 400
```
<a name="Triangle.getRight"></a>

## Triangle.getRight() ⇒ <code>number</code>
<p>Returns the right side position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The rightmost point of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRight(); // 500
```
<a name="Triangle.getCenterX"></a>

## Triangle.getCenterX() ⇒ <code>number</code>
<p>Returns the center X position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The width of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterX(); // 450
```
<a name="Triangle.getCenterY"></a>

## Triangle.getCenterY() ⇒ <code>number</code>
<p>Returns the center Y position of the triangle, based in the origin.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The height of the triangle</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterY(); // 450
```
<a name="Triangle.getRealTop"></a>

## Triangle.getRealTop() ⇒ <code>number</code>
<p>Returns the real top position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real top position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealTop(); // 300
```
<a name="Triangle.getRealBottom"></a>

## Triangle.getRealBottom() ⇒ <code>number</code>
<p>Returns the real bottom position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real bottom position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealBottom(); // 400
```
<a name="Triangle.getRealLeft"></a>

## Triangle.getRealLeft() ⇒ <code>number</code>
<p>Returns the real left position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real left position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealLeft(); // 400
```
<a name="Triangle.getRealRight"></a>

## Triangle.getRealRight() ⇒ <code>number</code>
<p>Returns the real right position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real right position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealRight(); // 400
```
<a name="Triangle.getRealCenterX"></a>

## Triangle.getRealCenterX() ⇒ <code>number</code>
<p>Returns the real center x position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real center position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterX(); // 450
```
<a name="Triangle.getRealCenterY"></a>

## Triangle.getRealCenterY() ⇒ <code>number</code>
<p>Returns the real center y position of the triangle in the world.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The real center position of the triangle in the world</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterY(); // 450
```
<a name="Triangle.setWidth"></a>

## Triangle.setWidth(width) ⇒ [<code>Triangle</code>](#Triangle)
<p>Change the width of the triangle.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: [<code>Triangle</code>](#Triangle) - <p>The triangle itself.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width of the triangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).setWidth(200); // 200
```
<a name="Triangle.setHeight"></a>

## Triangle.setHeight(height) ⇒ [<code>Triangle</code>](#Triangle)
<p>Change the height of the triangle.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: [<code>Triangle</code>](#Triangle) - <p>The triangle itself.</p>  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | <p>The new height of the triangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).setHeight(200); // 200
```
<a name="Triangle.setSize"></a>

## Triangle.setSize(width, height) ⇒ [<code>Triangle</code>](#Triangle)
<p>Change the size of the triangle.</p>
<p>if the height is not defined, it will be the same as the width.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: [<code>Triangle</code>](#Triangle) - <p>The triangle itself.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width of the triangle.</p> |
| height | <code>number</code> | <p>The new height of the triangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).setSize(200, 200); // 200, 200
```
<a name="Triangle.getArea"></a>

## Triangle.getArea() ⇒ <code>number</code>
<p>Calculate the area of the triangle.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The area of the triangle.</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getArea(); // 5000
```
<a name="Triangle.getPerimeter"></a>

## Triangle.getPerimeter() ⇒ <code>number</code>
<p>Calculate the perimeter of the triangle.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>number</code> - <p>The perimeter of the triangle.</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getPerimeter(); // 300
```
<a name="Triangle.getVertices"></a>

## Triangle.getVertices() ⇒ <code>Array.&lt;Object&gt;</code>
<p>Returns the triangle's vertices.</p>

**Kind**: static method of [<code>Triangle</code>](#Triangle)  
**Returns**: <code>Array.&lt;Object&gt;</code> - <p>The triangle's vertices.</p>  
**Example**  
```js
new Impacto.GameObjects.Triangle(400, 300, 100, 100).getVertices(); // [
 {"x": 100,"y": 100},
 {"x": 200,"y": 100},
 {"x": 150,"y": 200}]
```
