<a name="Scene"></a>

# Scene
<p>Create a new scene</p>

**Kind**: global class  
**Constructors**:   

* [Scene](#Scene)
    * [.addChild(child)](#Scene.addChild) ⇒ [<code>Scene</code>](#Scene)
    * [.removeChild(child)](#Scene.removeChild) ⇒ [<code>Scene</code>](#Scene)
    * [.start()](#Scene.start)
    * [.update(delta)](#Scene.update)
    * [.posRender(context)](#Scene.posRender)

<a name="Scene.addChild"></a>

## Scene.addChild(child) ⇒ [<code>Scene</code>](#Scene)
<p>Add a child to the scene</p>

**Kind**: static method of [<code>Scene</code>](#Scene)  
**Returns**: [<code>Scene</code>](#Scene) - <p>This scene</p>  

| Param | Type | Description |
| --- | --- | --- |
| child | <code>Impacto.GameObject</code> | <p>The child to add</p> |

**Example**  
```js
this.addChild(mySprite);
```
<a name="Scene.removeChild"></a>

## Scene.removeChild(child) ⇒ [<code>Scene</code>](#Scene)
<p>Remove a child from the scene</p>

**Kind**: static method of [<code>Scene</code>](#Scene)  
**Returns**: [<code>Scene</code>](#Scene) - <p>This scene</p>  

| Param | Type | Description |
| --- | --- | --- |
| child | <code>Impacto.GameObject</code> | <p>The child to remove</p> |

**Example**  
```js
this.removeChild(mySprite);
```
<a name="Scene.start"></a>

## Scene.start()
<p>The entry point of the scene, this function is called once when the scene is loaded
Normally, you use this function to create and add your game objects</p>

**Kind**: static method of [<code>Scene</code>](#Scene)  
**Example**  
```js
class MyScene extends Scene {
 	start() {
		const sprite = new Sprite();
		this.addChild(sprite);
	}
}
```
<a name="Scene.update"></a>

## Scene.update(delta)
<p>The update function is called every frame</p>

**Kind**: static method of [<code>Scene</code>](#Scene)  

| Param | Type | Description |
| --- | --- | --- |
| delta | <code>number</code> | <p>The time since the last frame</p> |

**Example**  
```js
class MyScene extends Scene {
	update(delta) {
   console.log(delta);
	}
}
```
<a name="Scene.posRender"></a>

## Scene.posRender(context)
<p>The render function is called every frame after the update and core render function</p>

**Kind**: static method of [<code>Scene</code>](#Scene)  

| Param | Type | Description |
| --- | --- | --- |
| context | <code>CanvasRenderingContext2D</code> | <p>The canvas context</p> |

**Example**  
```js
class MyScene extends Scene {
	render(context) {
	  console.log("render");
	}
}
```
