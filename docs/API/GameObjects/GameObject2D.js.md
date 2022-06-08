<a name="GameObject2D"></a>

# GameObject2D
<p>The base class for a game objects.
Probably you don't need to use this class directly.
Use this class to extend your own game objects.</p>

**Kind**: global class  
**Constructors**:   

* [GameObject2D](#GameObject2D)
    * [new GameObject2D(x, y, [fillColor], [strokeColor])](#new_GameObject2D_new)
    * [.setName(name)](#GameObject2D.setName) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setX(x)](#GameObject2D.setX) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setY(y)](#GameObject2D.setY) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setZ(z)](#GameObject2D.setZ) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.getPosition()](#GameObject2D.getPosition) ⇒ <code>Object</code>
    * [.getRealPosition()](#GameObject2D.getRealPosition) ⇒ <code>Object</code>
    * [.setPosition(x, y, z)](#GameObject2D.setPosition) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setRandomPosition()](#GameObject2D.setRandomPosition) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setRotation(rotation)](#GameObject2D.setRotation) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setAngle(angle)](#GameObject2D.setAngle) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setScaleX(scaleX)](#GameObject2D.setScaleX) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setScaleY(scaleY)](#GameObject2D.setScaleY) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setScale(scale)](#GameObject2D.setScale) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setOriginX(originX)](#GameObject2D.setOriginX) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setOriginY(originY)](#GameObject2D.setOriginY) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setOrigin(origin)](#GameObject2D.setOrigin) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setFillColor(color)](#GameObject2D.setFillColor) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setStrokeColor(color)](#GameObject2D.setStrokeColor) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setStrokeWidth(width)](#GameObject2D.setStrokeWidth) ⇒ [<code>GameObject2D</code>](#GameObject2D)
    * [.setVisible(visible)](#GameObject2D.setVisible) ⇒ [<code>GameObject2D</code>](#GameObject2D)

<a name="new_GameObject2D_new"></a>

## new GameObject2D(x, y, [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Object in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Object in the world.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the Object will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the Object, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
class MyGameObject extends Impacto.GameObject.GameObject2D {
	constructor(x, y, fillColor, strokeColor, ...args) {
		super(x, y, fillColor, strokeColor);
	}
}
```
<a name="GameObject2D.setName"></a>

## GameObject2D.setName(name) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the game object's name.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the game object.</p> |

**Example**  
```js
obj.setName("My Game Object");
```
<a name="GameObject2D.setX"></a>

## GameObject2D.setX(x) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the horizontal position of the game object in the world based on the origin.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of the game object in the world.</p> |

**Example**  
```js
obj.setX(100);
```
<a name="GameObject2D.setY"></a>

## GameObject2D.setY(y) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the vertical position of the game object in the world based on the origin.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of the game object in the world.</p> |

**Example**  
```js
obj.setY(100);
```
<a name="GameObject2D.setZ"></a>

## GameObject2D.setZ(z) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the Z position of the game object in the world based on the origin.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| z | <code>number</code> | <p>The Z position of the game object in the world.</p> |

**Example**  
```js
obj.setZ(100);
```
<a name="GameObject2D.getPosition"></a>

## GameObject2D.getPosition() ⇒ <code>Object</code>
<p>Returns the position of the object's in the world relative on the object origin.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  
**Returns**: <code>Object</code> - <p>{x:number, y:number, z:number} - The position of the object in the world.</p>  
**Example**  
```js
obj.getPosition();
```
<a name="GameObject2D.getRealPosition"></a>

## GameObject2D.getRealPosition() ⇒ <code>Object</code>
<p>Returns the real position of the object's in the world. (Not relative on the object origin)</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  
**Returns**: <code>Object</code> - <p>{x:number, y:number, z:number} - The real position of the object in the world.</p>  
**Example**  
```js
obj.getRealPosition();
```
<a name="GameObject2D.setPosition"></a>

## GameObject2D.setPosition(x, y, z) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the position of the game object in the world.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of the game object in the world.</p> |
| y | <code>number</code> | <p>The vertical position of the game object in the world.</p> |
| z | <code>number</code> | <p>The Z position of the game object in the world.</p> |

**Example**  
```js
obj.setPosition(100, 100, 100);
```
<a name="GameObject2D.setRandomPosition"></a>

## GameObject2D.setRandomPosition() ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set a random position of the game object in the world.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  
**Example**  
```js
obj.setRandomPosition();
```
<a name="GameObject2D.setRotation"></a>

## GameObject2D.setRotation(rotation) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the rotation of the game object in the world based in radians.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| rotation | <code>number</code> | <p>The rotation of the game object in the world in radians.</p> |

**Example**  
```js
obj.setRotation(1.5);
```
<a name="GameObject2D.setAngle"></a>

## GameObject2D.setAngle(angle) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the angle of the game object in the world based in degrees.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| angle | <code>number</code> | <p>The angle of the game object in the world in degrees.</p> |

**Example**  
```js
obj.setAngle(90);
```
<a name="GameObject2D.setScaleX"></a>

## GameObject2D.setScaleX(scaleX) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the horizontal scale of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| scaleX | <code>number</code> | <p>The horizontal scale of the game object.</p> |

**Example**  
```js
obj.setScaleX(2);
```
<a name="GameObject2D.setScaleY"></a>

## GameObject2D.setScaleY(scaleY) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the vertical scale of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| scaleY | <code>number</code> | <p>The vertical scale of the game object.</p> |

**Example**  
```js
obj.setScaleY(2);
```
<a name="GameObject2D.setScale"></a>

## GameObject2D.setScale(scale) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the horizontal and vertical scale of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| scale | <code>number</code> | <p>The scale of the game object.</p> |

**Example**  
```js
obj.setScale(2);
```
<a name="GameObject2D.setOriginX"></a>

## GameObject2D.setOriginX(originX) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the horizontal origin point of the game object.
The origin point is between 0 and 1.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| originX | <code>number</code> | <p>The horizontal origin point of the game object.</p> |

**Example**  
```js
obj.setOriginX(0.5);
```
<a name="GameObject2D.setOriginY"></a>

## GameObject2D.setOriginY(originY) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the vertical origin point of the game object.
The origin point is between 0 and 1.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| originY | <code>number</code> | <p>The vertical origin point of the game object.</p> |

**Example**  
```js
obj.setOriginY(0.5);
```
<a name="GameObject2D.setOrigin"></a>

## GameObject2D.setOrigin(origin) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the horizontal and vertical origin point of the game object.
The origin point is between 0 and 1.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| origin | <code>number</code> | <p>The origin point of the game object.</p> |

**Example**  
```js
obj.setOrigin(0.5);
```
<a name="GameObject2D.setFillColor"></a>

## GameObject2D.setFillColor(color) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the fill color of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | <p>The fill color of the game object.</p> |

**Example**  
```js
obj.setFillColor("#FF0000");
```
<a name="GameObject2D.setStrokeColor"></a>

## GameObject2D.setStrokeColor(color) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the stroke/border color of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>string</code> | <p>The stroke color of the game object.</p> |

**Example**  
```js
obj.setStrokeColor("#FF0000");
```
<a name="GameObject2D.setStrokeWidth"></a>

## GameObject2D.setStrokeWidth(width) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the stroke/border width of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>number</code> | <p>The stroke width of the game object.</p> |

**Example**  
```js
obj.setStrokeWidth(2);
```
<a name="GameObject2D.setVisible"></a>

## GameObject2D.setVisible(visible) ⇒ [<code>GameObject2D</code>](#GameObject2D)
<p>Set the visibility of the game object.</p>

**Kind**: static method of [<code>GameObject2D</code>](#GameObject2D)  

| Param | Type | Description |
| --- | --- | --- |
| visible | <code>boolean</code> | <p>The visibility of the game object.</p> |

**Example**  
```js
obj.setVisible(false);
```
