<a name="Animations"></a>

# Animations
<p>A class to manage the animations of a sprite</p>

**Kind**: global class  
**Constructors**:   

* [Animations](#Animations)
    * [new Animations(parent, name, startFrame, numberOfFrames, [speed], [loop])](#new_Animations_new)
    * [.get(name)](#Animations.get) ⇒ <code>Animation</code>
    * [.add(name, numberOfFrames, [startFrame], [speed], [loop])](#Animations.add)
    * [.getAnimationsNames()](#Animations.getAnimationsNames) ⇒ <code>Array.&lt;string&gt;</code>
    * [.reset()](#Animations.reset) ⇒ <code>Animation</code>
    * [.play(name)](#Animations.play) ⇒ <code>Animation</code>
    * [.pause()](#Animations.pause) ⇒ <code>Animation</code>
    * [.resume()](#Animations.resume) ⇒ <code>Animation</code>
    * [.setName(oldName, newName)](#Animations.setName) ⇒ <code>Animation</code>
    * [.setSpeed(name, speed)](#Animations.setSpeed) ⇒ <code>Animation</code>
    * [.setNumberOfFrames(name, numberOfFrames)](#Animations.setNumberOfFrames) ⇒ <code>Animation</code>
    * [.setLoop(name, loop)](#Animations.setLoop) ⇒ <code>Animation</code>

<a name="new_Animations_new"></a>

## new Animations(parent, name, startFrame, numberOfFrames, [speed], [loop])

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>Impacto.GameObjects.Sprite</code> | <p>The parent Sprite.</p> |
| name | <code>string</code> | <p>The name of the Animations.</p> |
| startFrame | <code>number</code> | <p>The first frame of the Animations.</p> |
| numberOfFrames | <code>number</code> | <p>Number of frames of the Animations.</p> |
| [speed] | <code>number</code> | <p>The speed of the Animations.</p> |
| [loop] | <code>boolean</code> | <p>Whether the Animations should loop or not.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
```
<a name="Animations.get"></a>

## Animations.get(name) ⇒ <code>Animation</code>
<p>Returns the animation state</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
console.log(mySprite.animations.get(""Default""));
```
<a name="Animations.add"></a>

## Animations.add(name, numberOfFrames, [startFrame], [speed], [loop])
<p>Add a new animation to the sprite</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | <p>The name of the Animation.</p> |
| numberOfFrames | <code>number</code> |  | <p>Number of frames of the Animation.</p> |
| [startFrame] | <code>number</code> | <code>0</code> | <p>The first frame of the Animation.</p> |
| [speed] | <code>number</code> | <code>100</code> | <p>The speed of the Animation.</p> |
| [loop] | <code>boolean</code> | <code>true</code> | <p>Whether the Animation should loop or not.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
```
<a name="Animations.getAnimationsNames"></a>

## Animations.getAnimationsNames() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns all animations names</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Array.&lt;string&gt;</code> - <p>The names of the animations</p>  
**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth());
console.log(mySprite.animations.getAnimationsNames());
```
<a name="Animations.reset"></a>

## Animations.reset() ⇒ <code>Animation</code>
<p>Reset the animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  
**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).reset();
```
<a name="Animations.play"></a>

## Animations.play(name) ⇒ <code>Animation</code>
<p>Play the animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).play("Default");
```
<a name="Animations.pause"></a>

## Animations.pause() ⇒ <code>Animation</code>
<p>Pause the animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  
**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).pause();
```
<a name="Animations.resume"></a>

## Animations.resume() ⇒ <code>Animation</code>
<p>Resume the animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  
**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).resume();
```
<a name="Animations.setName"></a>

## Animations.setName(oldName, newName) ⇒ <code>Animation</code>
<p>Change the name of a animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| oldName | <code>string</code> | <p>The name of the Animation.</p> |
| newName | <code>string</code> | <p>The new name of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeName("NewName");
```
<a name="Animations.setSpeed"></a>

## Animations.setSpeed(name, speed) ⇒ <code>Animation</code>
<p>Change the speed of a animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |
| speed | <code>number</code> | <p>The new speed of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeSpeed(100);
```
<a name="Animations.setNumberOfFrames"></a>

## Animations.setNumberOfFrames(name, numberOfFrames) ⇒ <code>Animation</code>
<p>Change the number of frame of a animation</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |
| numberOfFrames | <code>number</code> | <p>The new number of frames of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeNumberOfFrames(10);
```
<a name="Animations.setLoop"></a>

## Animations.setLoop(name, loop) ⇒ <code>Animation</code>
<p>Change if animation if in loop or not</p>

**Kind**: static method of [<code>Animations</code>](#Animations)  
**Returns**: <code>Animation</code> - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |
| loop | <code>boolean</code> | <p>The new loop state of the Animation.</p> |

**Example**  
```js
const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeLoop(false);
```
