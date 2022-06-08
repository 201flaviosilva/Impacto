<a name="Rectangle"></a>

# Rectangle ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>The Rectangle Shape is a 2D Game Object that can be added to a Scene.
Its possible to set a rounder corner radius.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Rectangle](#Rectangle) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Rectangle(x, y, [width], [height], [fillColor], [strokeColor])](#new_Rectangle_new)
    * [.x](#Rectangle.x)
    * [.y](#Rectangle.y)
    * [.x](#Rectangle.x) ⇒ <code>number</code>
    * [.y](#Rectangle.y) ⇒ <code>number</code>
    * [.getTop()](#Rectangle.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Rectangle.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Rectangle.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Rectangle.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Rectangle.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Rectangle.getCenterY) ⇒ <code>number</code>
    * [.getRealTop()](#Rectangle.getRealTop) ⇒ <code>number</code>
    * [.getRealBottom()](#Rectangle.getRealBottom) ⇒ <code>number</code>
    * [.getRealLeft()](#Rectangle.getRealLeft) ⇒ <code>number</code>
    * [.getRealRight()](#Rectangle.getRealRight) ⇒ <code>number</code>
    * [.getRealCenterX()](#Rectangle.getRealCenterX) ⇒ <code>number</code>
    * [.getRealCenterY()](#Rectangle.getRealCenterY) ⇒ <code>number</code>
    * [.setWidth(width)](#Rectangle.setWidth) ⇒ [<code>Rectangle</code>](#Rectangle)
    * [.setHeight(height)](#Rectangle.setHeight) ⇒ [<code>Rectangle</code>](#Rectangle)
    * [.setSize(width, height)](#Rectangle.setSize) ⇒ [<code>Rectangle</code>](#Rectangle)
    * [.refresh(x, y, width, height)](#Rectangle.refresh) ⇒ [<code>Rectangle</code>](#Rectangle)
    * [.setRound(topLeft, topRight, bottomLeft, bottomRight)](#Rectangle.setRound) ⇒ [<code>Rectangle</code>](#Rectangle)
    * [.getBounds()](#Rectangle.getBounds) ⇒ <code>Object</code>
    * [.getArea()](#Rectangle.getArea) ⇒ <code>number</code>
    * [.getPerimeter()](#Rectangle.getPerimeter) ⇒ <code>number</code>
    * [.getVertices()](#Rectangle.getVertices) ⇒ <code>Array</code>

<a name="new_Rectangle_new"></a>

## new Rectangle(x, y, [width], [height], [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Rectangle in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Rectangle in the world.</p> |
| [width] | <code>number</code> | <code>100</code> | <p>The width of the rectangle.</p> |
| [height] | <code>number</code> | <code>100</code> | <p>The height of the rectangle.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the rectangle will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the rectangle, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const rect = new Impacto.GameObjects.Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);
```
<a name="Rectangle.x"></a>

## Rectangle.x
<p>Sets the X position of the rectangle.</p>

**Kind**: static property of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of this Rectangle in the world.</p> |

<a name="Rectangle.y"></a>

## Rectangle.y
<p>Gets the Y position of the rectangle.</p>

**Kind**: static property of [<code>Rectangle</code>](#Rectangle)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of this Rectangle in the world.</p> |

<a name="Rectangle.x"></a>

## Rectangle.x ⇒ <code>number</code>
**Kind**: static property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.y"></a>

## Rectangle.y ⇒ <code>number</code>
**Kind**: static property of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The vertical position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.getTop"></a>

## Rectangle.getTop() ⇒ <code>number</code>
<p>Returns the top side position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The vertical position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.getBottom"></a>

## Rectangle.getBottom() ⇒ <code>number</code>
<p>Returns the bottom side position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The vertical position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.getLeft"></a>

## Rectangle.getLeft() ⇒ <code>number</code>
<p>Returns the left side position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.getRight"></a>

## Rectangle.getRight() ⇒ <code>number</code>
<p>Returns the right side position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Rectangle in the world relative to the origin.</p>  
<a name="Rectangle.getCenterX"></a>

## Rectangle.getCenterX() ⇒ <code>number</code>
<p>Returns the center X position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Rectangle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5
```
<a name="Rectangle.getCenterY"></a>

## Rectangle.getCenterY() ⇒ <code>number</code>
<p>Returns the center Y position of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The vertical position of this Rectangle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5
```
<a name="Rectangle.getRealTop"></a>

## Rectangle.getRealTop() ⇒ <code>number</code>
<p>Returns the real top side position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real vertical position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealTop(); // 10
```
<a name="Rectangle.getRealBottom"></a>

## Rectangle.getRealBottom() ⇒ <code>number</code>
<p>Returns the real bottom side position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real vertical position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealBottom(); // 110
```
<a name="Rectangle.getRealLeft"></a>

## Rectangle.getRealLeft() ⇒ <code>number</code>
<p>Returns the real left side position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real horizontal position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealLeft(); // 10
```
<a name="Rectangle.getRealRight"></a>

## Rectangle.getRealRight() ⇒ <code>number</code>
<p>Returns the real right side position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real horizontal position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealRight(); // 110
```
<a name="Rectangle.getRealCenterX"></a>

## Rectangle.getRealCenterX() ⇒ <code>number</code>
<p>Returns the real center X position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real horizontal position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterX(); // 55
```
<a name="Rectangle.getRealCenterY"></a>

## Rectangle.getRealCenterY() ⇒ <code>number</code>
<p>Returns the real center Y position of the rectangle. (Not relative to the origin)</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The real vertical position of this Rectangle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterY(); // 55
```
<a name="Rectangle.setWidth"></a>

## Rectangle.setWidth(width) ⇒ [<code>Rectangle</code>](#Rectangle)
<p>Sets the width of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Rectangle</code>](#Rectangle) - <p>This Rectangle.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width of this Rectangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setWidth(200);
```
<a name="Rectangle.setHeight"></a>

## Rectangle.setHeight(height) ⇒ [<code>Rectangle</code>](#Rectangle)
<p>Sets the height of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Rectangle</code>](#Rectangle) - <p>This Rectangle.</p>  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | <p>The new height of this Rectangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setHeight(200);
```
<a name="Rectangle.setSize"></a>

## Rectangle.setSize(width, height) ⇒ [<code>Rectangle</code>](#Rectangle)
<p>Sets the size of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Rectangle</code>](#Rectangle) - <p>This Rectangle.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width of this Rectangle.</p> |
| height | <code>number</code> | <p>The new height of this Rectangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setSize(50, 50);
```
<a name="Rectangle.refresh"></a>

## Rectangle.refresh(x, y, width, height) ⇒ [<code>Rectangle</code>](#Rectangle)
<p>Sets the position  and size of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Rectangle</code>](#Rectangle) - <p>This Rectangle.</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The new horizontal position of this Rectangle.</p> |
| y | <code>number</code> | <p>The new vertical position of this Rectangle.</p> |
| width | <code>number</code> | <p>The new width of this Rectangle.</p> |
| height | <code>number</code> | <p>The new height of this Rectangle.</p> |

**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setPositionAndSize(20, 30, 50, 75);
```
<a name="Rectangle.setRound"></a>

## Rectangle.setRound(topLeft, topRight, bottomLeft, bottomRight) ⇒ [<code>Rectangle</code>](#Rectangle)
<p>Sets the roundedness of the rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: [<code>Rectangle</code>](#Rectangle) - <p>This Rectangle.</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| topLeft | <code>number</code> | <code>0</code> | <p>The new roundedness of the top left corner.</p> |
| topRight | <code>number</code> |  | <p>The new roundedness of the top right corner.</p> |
| bottomLeft | <code>number</code> |  | <p>The new roundedness of the bottom left corner.</p> |
| bottomRight | <code>number</code> |  | <p>The new roundedness of the bottom right corner.</p> |

**Example**  
```js
new Impacto.GameObjects.Rectangle(10, 10).setRoundedness(10);
```
<a name="Rectangle.getBounds"></a>

## Rectangle.getBounds() ⇒ <code>Object</code>
<p>Gets the bounding box of this Rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>Object</code> - <p>The bounding box of this Rectangle.</p>  
**Example**  
```js
new Impacto.GameObjects.Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }
```
<a name="Rectangle.getArea"></a>

## Rectangle.getArea() ⇒ <code>number</code>
<p>Gets the area of this Rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The area of this Rectangle.</p>  
**Read only**: true  
**Example**  
```js
new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getArea(); // 10000
```
<a name="Rectangle.getPerimeter"></a>

## Rectangle.getPerimeter() ⇒ <code>number</code>
<p>Gets the perimeter of this Rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>number</code> - <p>The perimeter of this Rectangle.</p>  
**Read only**: true  
**Example**  
```js
new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getPerimeter(); // 200
```
<a name="Rectangle.getVertices"></a>

## Rectangle.getVertices() ⇒ <code>Array</code>
<p>Gets the point of all vertices of this Rectangle.</p>

**Kind**: static method of [<code>Rectangle</code>](#Rectangle)  
**Returns**: <code>Array</code> - <p>All vertices of this Rectangle.</p>  
**Read only**: true  
**Example**  
```js
new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getVertices(); // [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]
```
