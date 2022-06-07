<a name="Polygon"></a>

# Polygon ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>This class will draw a polygon on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Polygon](#Polygon) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Polygon(x, y, vertices, [fillColor], [strokeColor])](#new_Polygon_new)
    * [.x](#Polygon.x)
    * [.y](#Polygon.y)
    * [.x](#Polygon.x) ⇒ <code>number</code>
    * [.y](#Polygon.y) ⇒ <code>number</code>
    * [.width](#Polygon.width) ⇒ <code>number</code>
    * [.height](#Polygon.height) ⇒ <code>number</code>
    * [.getTop()](#Polygon.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Polygon.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Polygon.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Polygon.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Polygon.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Polygon.getCenterY) ⇒ <code>number</code>
    * [.getCenter()](#Polygon.getCenter) ⇒ <code>Object</code>
    * [.add(x, y)](#Polygon.add) ⇒ [<code>Polygon</code>](#Polygon)
    * [.remove(x, y)](#Polygon.remove) ⇒ [<code>Polygon</code>](#Polygon)
    * [.removePoint(point)](#Polygon.removePoint) ⇒ [<code>Polygon</code>](#Polygon)
    * [.removeIndex(index)](#Polygon.removeIndex) ⇒ [<code>Polygon</code>](#Polygon)
    * [.setClose(close)](#Polygon.setClose) ⇒ [<code>Polygon</code>](#Polygon)
    * [.getBounds()](#Polygon.getBounds) ⇒ <code>Object</code>
    * [.getVertices()](#Polygon.getVertices) ⇒ <code>Array.&lt;Object&gt;</code>

<a name="new_Polygon_new"></a>

## new Polygon(x, y, vertices, [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Polygon in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Polygon in the world.</p> |
| vertices | <code>vertices</code> |  | <p>The vertices of this Polygon.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the Polygon will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the Polygon, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const myPolygon = new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20], "#ff0000", 0x00ff00);
```
<a name="Polygon.x"></a>

## Polygon.x
<p>Sets the X position of the Polygon.</p>

**Kind**: static property of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of this Polygon in the world.</p> |

<a name="Polygon.y"></a>

## Polygon.y
<p>Sets the Y position of the Polygon.</p>

**Kind**: static property of [<code>Polygon</code>](#Polygon)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of this Polygon in the world.</p> |

<a name="Polygon.x"></a>

## Polygon.x ⇒ <code>number</code>
**Kind**: static property of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The horizontal position of this Polygon in the world relative to the origin.</p>  
<a name="Polygon.y"></a>

## Polygon.y ⇒ <code>number</code>
**Kind**: static property of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The vertical position of this Polygon in the world relative to the origin.</p>  
<a name="Polygon.width"></a>

## Polygon.width ⇒ <code>number</code>
**Kind**: static property of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The width of this Polygon.</p>  
<a name="Polygon.height"></a>

## Polygon.height ⇒ <code>number</code>
**Kind**: static property of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The height of this Polygon.</p>  
<a name="Polygon.getTop"></a>

## Polygon.getTop() ⇒ <code>number</code>
<p>Returns the topmost point of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The topmost point of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getTop(); // 10
```
<a name="Polygon.getBottom"></a>

## Polygon.getBottom() ⇒ <code>number</code>
<p>Returns the bottommost point of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The bottommost point of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBottom(); // 20
```
<a name="Polygon.getLeft"></a>

## Polygon.getLeft() ⇒ <code>number</code>
<p>Returns the leftmost point of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The leftmost point of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getLeft(); // 10
```
<a name="Polygon.getRight"></a>

## Polygon.getRight() ⇒ <code>number</code>
<p>Returns the rightmost point of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The rightmost point of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getRight(); // 20
```
<a name="Polygon.getCenterX"></a>

## Polygon.getCenterX() ⇒ <code>number</code>
<p>Returns the horizontal center of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The horizontal center of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterX(); // 15
```
<a name="Polygon.getCenterY"></a>

## Polygon.getCenterY() ⇒ <code>number</code>
<p>Returns the vertical center of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>number</code> - <p>The vertical center of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterY(); // 15
```
<a name="Polygon.getCenter"></a>

## Polygon.getCenter() ⇒ <code>Object</code>
<p>Returns the center of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>Object</code> - <p>The center of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenter(); // {x: 15, y: 15}
```
<a name="Polygon.add"></a>

## Polygon.add(x, y) ⇒ [<code>Polygon</code>](#Polygon)
<p>Add a new point to the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: [<code>Polygon</code>](#Polygon) - <p>The polygon itself</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The x coordinate of the point</p> |
| y | <code>number</code> | <p>The y coordinate of the point</p> |

**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).addPoint(0, 0);
```
<a name="Polygon.remove"></a>

## Polygon.remove(x, y) ⇒ [<code>Polygon</code>](#Polygon)
<p>Remove a point from the polygon based in the coordinates</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: [<code>Polygon</code>](#Polygon) - <p>The polygon itself</p>  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The x coordinate of the point</p> |
| y | <code>number</code> | <p>The y coordinate of the point</p> |

**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint(10, 10);
```
<a name="Polygon.removePoint"></a>

## Polygon.removePoint(point) ⇒ [<code>Polygon</code>](#Polygon)
<p>Remove a point from the polygon based in the object</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: [<code>Polygon</code>](#Polygon) - <p>The polygon itself</p>  

| Param | Type | Description |
| --- | --- | --- |
| point | <code>Object</code> | <p>The point to be removed</p> |

**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint({x: 10, y: 10});
```
<a name="Polygon.removeIndex"></a>

## Polygon.removeIndex(index) ⇒ [<code>Polygon</code>](#Polygon)
<p>Remove a point from the polygon based in the index</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: [<code>Polygon</code>](#Polygon) - <p>The polygon itself</p>  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | <p>The index of the point</p> |

**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removeIndex(0);
```
<a name="Polygon.setClose"></a>

## Polygon.setClose(close) ⇒ [<code>Polygon</code>](#Polygon)
<p>Close the last point to the first point</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: [<code>Polygon</code>](#Polygon) - <p>The polygon itself</p>  

| Param | Type | Description |
| --- | --- | --- |
| close | <code>boolean</code> | <p>Whether the polygon should be closed or not</p> |

**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).setClose(true);
```
<a name="Polygon.getBounds"></a>

## Polygon.getBounds() ⇒ <code>Object</code>
<p>Returns bounds of the polygon (the most top left and the most bottom right points)</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>Object</code> - <p>The bounds of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBounds(); // {x: 10, y: 10, width: 20, height: 20}
```
<a name="Polygon.getVertices"></a>

## Polygon.getVertices() ⇒ <code>Array.&lt;Object&gt;</code>
<p>Returns the vertices of the polygon</p>

**Kind**: static method of [<code>Polygon</code>](#Polygon)  
**Returns**: <code>Array.&lt;Object&gt;</code> - <p>The vertices of the polygon</p>  
**Example**  
```js
new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getVertices(); // [{x: 10, y: 10}, {x: 20, y: 20}, {x: 10, y: 20}]
```
