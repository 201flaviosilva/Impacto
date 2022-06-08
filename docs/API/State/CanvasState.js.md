<a name="CanvasState"></a>

# CanvasState
**Kind**: global class  

* [CanvasState](#CanvasState)
    * [new CanvasState()](#new_CanvasState_new)
    * [.setParent(parent)](#CanvasState.setParent) ⇒ <code>void</code>
    * [.setCanvas(canvas)](#CanvasState.setCanvas) ⇒ <code>void</code>
    * [.setSize(width, height)](#CanvasState.setSize) ⇒ <code>void</code>
    * [.setBackgroundColor(color)](#CanvasState.setBackgroundColor) ⇒ <code>void</code>

<a name="new_CanvasState_new"></a>

## new CanvasState()
<p>A class to manage canvas state.</p>

<a name="CanvasState.setParent"></a>

## CanvasState.setParent(parent) ⇒ <code>void</code>
<p>Change the parent element of the canvas.
If not specified, the canvas will be appended to the body.</p>

**Kind**: static method of [<code>CanvasState</code>](#CanvasState)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>string</code> \| <code>HTMLElement</code> | <p>The parent element of the canvas</p> |

<a name="CanvasState.setCanvas"></a>

## CanvasState.setCanvas(canvas) ⇒ <code>void</code>
<p>Initialize the canvas state.
If the canvas is not specified, a new canvas will be created.</p>

**Kind**: static method of [<code>CanvasState</code>](#CanvasState)  

| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>string</code> \| <code>HTMLElement</code> | <p>The canvas element</p> |

<a name="CanvasState.setSize"></a>

## CanvasState.setSize(width, height) ⇒ <code>void</code>
<p>Change the canvas width and height.</p>

**Kind**: static method of [<code>CanvasState</code>](#CanvasState)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| width | <code>number</code> | <code>800</code> | <p>The width of the canvas. Default 800</p> |
| height | <code>number</code> | <code>600</code> | <p>The height of the canvas. Default 600</p> |

<a name="CanvasState.setBackgroundColor"></a>

## CanvasState.setBackgroundColor(color) ⇒ <code>void</code>
<p>Change the background color of the canvas.</p>

**Kind**: static method of [<code>CanvasState</code>](#CanvasState)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| color | <code>number</code> \| <code>string</code> | <code>0</code> | <p>The background color of the canvas. Default black</p> |

