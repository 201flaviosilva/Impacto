<a name="Sprite"></a>

# Sprite ⇐ <code>Impacto.GameObjects.Rectangle</code>
<p>This class will draw a Sprite on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.Rectangle</code>  
**Constructors**:   

* [Sprite](#Sprite) ⇐ <code>Impacto.GameObjects.Rectangle</code>
    * [new Sprite(x, y, key, [frame], [width], [height])](#new_Sprite_new)
    * [.x](#Sprite.x)
    * [.y](#Sprite.y)
    * [.x](#Sprite.x) ⇒ <code>number</code>
    * [.y](#Sprite.y) ⇒ <code>number</code>
    * [.setFrame(frame)](#Sprite.setFrame) ⇒ [<code>Sprite</code>](#Sprite)
    * [.getNumFramesByWidth()](#Sprite.getNumFramesByWidth) ⇒ <code>number</code>

<a name="new_Sprite_new"></a>

## new Sprite(x, y, key, [frame], [width], [height])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Sprite in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Sprite in the world.</p> |
| key | <code>string</code> |  | <p>The name of the Sprite.</p> |
| [frame] | <code>number</code> | <code>0</code> | <p>The frame of the Sprite.</p> |
| [width] | <code>number</code> | <code>0</code> | <p>The width of the Sprite.</p> |
| [height] | <code>number</code> | <code>0</code> | <p>The height of the Sprite.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32);
```
<a name="Sprite.x"></a>

## Sprite.x
<p>Sets the X position of the Sprite.</p>

**Kind**: static property of [<code>Sprite</code>](#Sprite)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>number</code> | <p>The horizontal position of this Sprite in the world.</p> |

<a name="Sprite.y"></a>

## Sprite.y
<p>Sets the Y position of the Sprite.</p>

**Kind**: static property of [<code>Sprite</code>](#Sprite)  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>number</code> | <p>The vertical position of this Sprite in the world.</p> |

<a name="Sprite.x"></a>

## Sprite.x ⇒ <code>number</code>
**Kind**: static property of [<code>Sprite</code>](#Sprite)  
**Returns**: <code>number</code> - <p>The horizontal position of this Sprite in the world relative to the origin.</p>  
<a name="Sprite.y"></a>

## Sprite.y ⇒ <code>number</code>
**Kind**: static property of [<code>Sprite</code>](#Sprite)  
**Returns**: <code>number</code> - <p>The vertical position of this Sprite in the world relative to the origin.</p>  
<a name="Sprite.setFrame"></a>

## Sprite.setFrame(frame) ⇒ [<code>Sprite</code>](#Sprite)
<p>Change the frame of this Sprite.</p>

**Kind**: static method of [<code>Sprite</code>](#Sprite)  
**Returns**: [<code>Sprite</code>](#Sprite) - <p>The Sprite itself.</p>  

| Param | Type | Description |
| --- | --- | --- |
| frame | <code>number</code> | <p>The frame of the Sprite.</p> |

**Example**  
```js
new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).setFrame(1);
```
<a name="Sprite.getNumFramesByWidth"></a>

## Sprite.getNumFramesByWidth() ⇒ <code>number</code>
<p>Returns the number of frames of this Sprite based on the width.</p>

**Kind**: static method of [<code>Sprite</code>](#Sprite)  
**Returns**: <code>number</code> - <p>The number of frames by width.</p>  
**Example**  
```js
new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).getNumFramesByWidth(); // 8
```
