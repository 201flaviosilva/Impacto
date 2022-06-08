<a name="Animation"></a>

# Animation
<p>A class to animate a sprite</p>

**Kind**: global class  

* [Animation](#Animation)
    * [new Animation(parent, name, startFrame, numberOfFrames, speed, [loop])](#new_Animation_new)
    * [.setName(newName)](#Animation.setName) ⇒ [<code>Animation</code>](#Animation)
    * [.setSpeed(name, speed)](#Animation.setSpeed) ⇒ [<code>Animation</code>](#Animation)
    * [.setStartFrame(startFrame)](#Animation.setStartFrame) ⇒ [<code>Animation</code>](#Animation)
    * [.setNumberOfFrames(numberOfFrames)](#Animation.setNumberOfFrames) ⇒ [<code>Animation</code>](#Animation)
    * [.setLoop(loop)](#Animation.setLoop) ⇒ [<code>Animation</code>](#Animation)
    * [.reset()](#Animation.reset) ⇒ [<code>Animation</code>](#Animation)

<a name="new_Animation_new"></a>

## new Animation(parent, name, startFrame, numberOfFrames, speed, [loop])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| parent | <code>Impacto.GameObjects.Sprite</code> |  | <p>The parent Sprite.</p> |
| name | <code>string</code> |  | <p>The name of the Animations.</p> |
| startFrame | <code>number</code> |  | <p>The first frame of the Animations.</p> |
| numberOfFrames | <code>number</code> |  | <p>Number of frames of the Animations.</p> |
| speed | <code>number</code> |  | <p>The speed of the Animations.</p> |
| [loop] | <code>boolean</code> | <code>true</code> | <p>Whether the Animations should loop or not.</p> |

**Example**  
```js
new Animation(MySprite, "Default", 0, 10, 100, true);
```
<a name="Animation.setName"></a>

## Animation.setName(newName) ⇒ [<code>Animation</code>](#Animation)
<p>Change the current animation name</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| newName | <code>string</code> | <p>The</p> |

**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setName("MyNewName");
```
<a name="Animation.setSpeed"></a>

## Animation.setSpeed(name, speed) ⇒ [<code>Animation</code>](#Animation)
<p>Change the speed of a animation</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the Animation.</p> |
| speed | <code>number</code> | <p>The new speed of the Animation.</p> |

**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setSpeed(50);
```
<a name="Animation.setStartFrame"></a>

## Animation.setStartFrame(startFrame) ⇒ [<code>Animation</code>](#Animation)
<p>Change the start frame of a animation</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| startFrame | <code>number</code> | <p>The new start frame of the Animation.</p> |

**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setStartFrame(5);
```
<a name="Animation.setNumberOfFrames"></a>

## Animation.setNumberOfFrames(numberOfFrames) ⇒ [<code>Animation</code>](#Animation)
<p>Change the number of frames of a animation</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| numberOfFrames | <code>number</code> | <p>The new number of frames of the Animation.</p> |

**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setNumberOfFrames(5);
```
<a name="Animation.setLoop"></a>

## Animation.setLoop(loop) ⇒ [<code>Animation</code>](#Animation)
<p>Change the loop of a animation</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  

| Param | Type | Description |
| --- | --- | --- |
| loop | <code>boolean</code> | <p>The new loop of the Animation.</p> |

**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100, true).setLoop(false);
```
<a name="Animation.reset"></a>

## Animation.reset() ⇒ [<code>Animation</code>](#Animation)
<p>Reset the animation to the first frame</p>

**Kind**: static method of [<code>Animation</code>](#Animation)  
**Returns**: [<code>Animation</code>](#Animation) - <p>The animation state</p>  
**Example**  
```js
const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).reset();
```
