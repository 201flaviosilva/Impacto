<a name="Line"></a>

# Line ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>Line is a class that will draw a line on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Line](#Line) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Line(x, y, endX, endY, [strokeColor])](#new_Line_new)
    * [.width](#Line.width) ⇒ <code>number</code>
    * [.height](#Line.height) ⇒ <code>number</code>
    * [.x](#Line.x)
    * [.y](#Line.y)
    * [.x](#Line.x) ⇒ <code>number</code>
    * [.y](#Line.y) ⇒ <code>number</code>
    * [.getTop()](#Line.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Line.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Line.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Line.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Line.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Line.getCenterY) ⇒ <code>number</code>
    * [.getRealTop()](#Line.getRealTop) ⇒ <code>number</code>
    * [.getRealBottom()](#Line.getRealBottom) ⇒ <code>number</code>
    * [.getRealLeft()](#Line.getRealLeft) ⇒ <code>number</code>
    * [.getRealRight()](#Line.getRealRight) ⇒ <code>number</code>
    * [.getRealCenterX()](#Line.getRealCenterX) ⇒ <code>number</code>
    * [.getRealCenterY()](#Line.getRealCenterY) ⇒ <code>number</code>
    * [.setWidth(width)](#Line.setWidth) ⇒ [<code>Line</code>](#Line)
    * [.setHeight(height)](#Line.setHeight) ⇒ [<code>Line</code>](#Line)
    * [.setSize(width, height)](#Line.setSize) ⇒ [<code>Line</code>](#Line)
    * [.setEndX(endX)](#Line.setEndX) ⇒ [<code>Line</code>](#Line)
    * [.setEndY(endY)](#Line.setEndY) ⇒ [<code>Line</code>](#Line)
    * [.setEnd(endX, endY)](#Line.setEnd) ⇒ [<code>Line</code>](#Line)

<a name="new_Line_new"></a>

## new Line(x, y, endX, endY, [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position in the world.</p> |
| endX | <code>number</code> |  | <p>The horizontal position of the end of the line.</p> |
| endY | <code>number</code> |  | <p>The vertical position of the end of the line.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const myLine = new Impacto.GameObjects.Line(400, 300, 450, 350, 0x00ff00);
```
<a name="Line.width"></a>

## Line.width ⇒ <code>number</code>
**Kind**: static property of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The width of the line.</p>  
<a name="Line.height"></a>

## Line.height ⇒ <code>number</code>
**Kind**: static property of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The height of the line.</p>  
<a name="Line.x"></a>

## Line.x
<p>Sets the X position.</p>

**Kind**: static property of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position in the world.</p> |

**Example**  
```js
const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
myLine.x = 200;
```
<a name="Line.y"></a>

## Line.y
<p>Sets the Y position.</p>

**Kind**: static property of [<code>Line</code>](#Line)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position in the world.</p> |

**Example**  
```js
const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
myLine.y = 200;
```
<a name="Line.x"></a>

## Line.x ⇒ <code>number</code>
**Kind**: static property of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position.</p>  
<a name="Line.y"></a>

## Line.y ⇒ <code>number</code>
**Kind**: static property of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position.</p>  
<a name="Line.getTop"></a>

## Line.getTop() ⇒ <code>number</code>
<p>Returns the top side position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getTop(); // 300
```
<a name="Line.getBottom"></a>

## Line.getBottom() ⇒ <code>number</code>
<p>Returns the bottom side position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getBottom(); // 325
```
<a name="Line.getLeft"></a>

## Line.getLeft() ⇒ <code>number</code>
<p>Returns the left side position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getLeft(); // 400
```
<a name="Line.getRight"></a>

## Line.getRight() ⇒ <code>number</code>
<p>Returns the right side position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRight(); // 450
```
<a name="Line.getCenterX"></a>

## Line.getCenterX() ⇒ <code>number</code>
<p>Returns the center X position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterX(); // 425
```
<a name="Line.getCenterY"></a>

## Line.getCenterY() ⇒ <code>number</code>
<p>Returns the center Y position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterY(); // 325
```
<a name="Line.getRealTop"></a>

## Line.getRealTop() ⇒ <code>number</code>
<p>Returns the real top side position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealTop(); // 300
```
<a name="Line.getRealBottom"></a>

## Line.getRealBottom() ⇒ <code>number</code>
<p>Returns the real bottom side position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealBottom(); // 350
```
<a name="Line.getRealLeft"></a>

## Line.getRealLeft() ⇒ <code>number</code>
<p>Returns the real left side position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealLeft(); // 400
```
<a name="Line.getRealRight"></a>

## Line.getRealRight() ⇒ <code>number</code>
<p>Returns the real right side position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealRight(); // 450
```
<a name="Line.getRealCenterX"></a>

## Line.getRealCenterX() ⇒ <code>number</code>
<p>Returns the real center X position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The horizontal position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterX(); // 425
```
<a name="Line.getRealCenterY"></a>

## Line.getRealCenterY() ⇒ <code>number</code>
<p>Returns the real center Y position of the Line (not relative to the origin).</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: <code>number</code> - <p>The vertical position of this Line in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterY(); // 325
```
<a name="Line.setWidth"></a>

## Line.setWidth(width) ⇒ [<code>Line</code>](#Line)
<p>Sets the end position of the Line based on the width.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setWidth(100);
```
<a name="Line.setHeight"></a>

## Line.setHeight(height) ⇒ [<code>Line</code>](#Line)
<p>Sets the end position of the Line based on the height.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| height | <code>number</code> | <p>The new height.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setHeight(100);
```
<a name="Line.setSize"></a>

## Line.setSize(width, height) ⇒ [<code>Line</code>](#Line)
<p>Sets the end position of the Line based on the size.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The new width.</p> |
| height | <code>number</code> | <p>The new height.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setSize(100, 100);
```
<a name="Line.setEndX"></a>

## Line.setEndX(endX) ⇒ [<code>Line</code>](#Line)
<p>Sets the end horizontal position.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| endX | <code>number</code> | <p>The new horizontal position.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setEndX(500);
```
<a name="Line.setEndY"></a>

## Line.setEndY(endY) ⇒ [<code>Line</code>](#Line)
<p>Sets the end vertical position.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| endY | <code>number</code> | <p>The new vertical position.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setEndY(500);
```
<a name="Line.setEnd"></a>

## Line.setEnd(endX, endY) ⇒ [<code>Line</code>](#Line)
<p>Sets the end position of the Line.</p>

**Kind**: static method of [<code>Line</code>](#Line)  
**Returns**: [<code>Line</code>](#Line) - <p>This Line.</p>  

| Param | Type | Description |
| --- | --- | --- |
| endX | <code>number</code> | <p>The new horizontal position.</p> |
| endY | <code>number</code> | <p>The new vertical position.</p> |

**Example**  
```js
new Impacto.GameObjects.Line(400, 300, 450, 350).setEnd(500, 400);
```
