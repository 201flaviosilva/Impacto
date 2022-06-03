<a name="Circle"></a>

# Circle ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>Circle is a class that will draw a circle on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Circle](#Circle) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Circle(x, y, [radius], [fillColor], [strokeColor])](#new_Circle_new)
    * [.x](#Circle.x)
    * [.y](#Circle.y)
    * [.x](#Circle.x) ⇒ <code>number</code>
    * [.y](#Circle.y) ⇒ <code>number</code>
    * [.setRadius(radius)](#Circle.setRadius) ⇒ [<code>Circle</code>](#Circle)
    * [.getTop()](#Circle.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Circle.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Circle.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Circle.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Circle.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Circle.getCenterY) ⇒ <code>number</code>
    * [.getRealTop()](#Circle.getRealTop) ⇒ <code>number</code>
    * [.getRealBottom()](#Circle.getRealBottom) ⇒ <code>number</code>
    * [.getRealLeft()](#Circle.getRealLeft) ⇒ <code>number</code>
    * [.getRealRight()](#Circle.getRealRight) ⇒ <code>number</code>
    * [.getRealCenterX()](#Circle.getRealCenterX) ⇒ <code>number</code>
    * [.getRealCenterY()](#Circle.getRealCenterY) ⇒ <code>number</code>
    * [.getBounds()](#Circle.getBounds) ⇒ <code>Object</code>

<a name="new_Circle_new"></a>

## new Circle(x, y, [radius], [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Circle in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Circle in the world.</p> |
| [radius] | <code>number</code> | <code>10</code> | <p>The radius of this Circle.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the Circle will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the Circle, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const circ = new Impacto.GameObjects.Circle(400, 300, 50, "#ff0000", 0x00ff00);
```
<a name="Circle.x"></a>

## Circle.x
<p>Sets the X position of the Circle.</p>

**Kind**: static property of [<code>Circle</code>](#Circle)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of this Circle in the world.</p> |

**Example**  
```js
circ.x = 100;
```
<a name="Circle.y"></a>

## Circle.y
<p>Sets the Y position of the Circle.</p>

**Kind**: static property of [<code>Circle</code>](#Circle)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of this Circle in the world.</p> |

**Example**  
```js
circ.y = 100;
```
<a name="Circle.x"></a>

## Circle.x ⇒ <code>number</code>
**Kind**: static property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world relative to the origin.</p>  
<a name="Circle.y"></a>

## Circle.y ⇒ <code>number</code>
**Kind**: static property of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world relative to the origin.</p>  
<a name="Circle.setRadius"></a>

## Circle.setRadius(radius) ⇒ [<code>Circle</code>](#Circle)
<p>Sets the radius of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: [<code>Circle</code>](#Circle) - <p>This Circle.</p>  

| Param | Type | Description |
| --- | --- | --- |
| radius | <code>number</code> | <p>The radius of this Circle.</p> |

**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).setRadius(100); // 100
```
<a name="Circle.getTop"></a>

## Circle.getTop() ⇒ <code>number</code>
<p>Returns the top side position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getTop(); // 275
```
<a name="Circle.getBottom"></a>

## Circle.getBottom() ⇒ <code>number</code>
<p>Returns the bottom side position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getBottom(); // 325
```
<a name="Circle.getLeft"></a>

## Circle.getLeft() ⇒ <code>number</code>
<p>Returns the left side position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getLeft(); // 375
```
<a name="Circle.getRight"></a>

## Circle.getRight() ⇒ <code>number</code>
<p>Returns the right side position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRight(); // 425
```
<a name="Circle.getCenterX"></a>

## Circle.getCenterX() ⇒ <code>number</code>
<p>Returns the center X position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getCenterX(); // 400
```
<a name="Circle.getCenterY"></a>

## Circle.getCenterY() ⇒ <code>number</code>
<p>Returns the center Y position of the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world relative to the origin.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getCenterY(); // 300
```
<a name="Circle.getRealTop"></a>

## Circle.getRealTop() ⇒ <code>number</code>
<p>Returns the real top side position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealTop(); // 275
```
<a name="Circle.getRealBottom"></a>

## Circle.getRealBottom() ⇒ <code>number</code>
<p>Returns the real bottom side position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealBottom(); // 325
```
<a name="Circle.getRealLeft"></a>

## Circle.getRealLeft() ⇒ <code>number</code>
<p>Returns the real left side position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealLeft(); // 375
```
<a name="Circle.getRealRight"></a>

## Circle.getRealRight() ⇒ <code>number</code>
<p>Returns the real right side position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealRight(); // 425
```
<a name="Circle.getRealCenterX"></a>

## Circle.getRealCenterX() ⇒ <code>number</code>
<p>Returns the real center X position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The horizontal position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealCenterX(); // 400
```
<a name="Circle.getRealCenterY"></a>

## Circle.getRealCenterY() ⇒ <code>number</code>
<p>Returns the real center Y position of the Circle (not relative to the origin).</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>number</code> - <p>The vertical position of this Circle in the world.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getRealCenterY(); // 300
```
<a name="Circle.getBounds"></a>

## Circle.getBounds() ⇒ <code>Object</code>
<p>Returns a box that encloses the Circle.</p>

**Kind**: static method of [<code>Circle</code>](#Circle)  
**Returns**: <code>Object</code> - <p>A box that encloses the Circle.</p>  
**Example**  
```js
new Impacto.GameObjects.Circle(400, 300, 50).getBounds(); // { x: 375, y: 275, width: 150, height: 150 }
```
