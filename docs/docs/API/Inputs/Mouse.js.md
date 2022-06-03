<a name="MouseManager"></a>

# MouseManager
<p>Manages the mouse input.</p>

**Kind**: global class  
**Constructors**:   

* [MouseManager](#MouseManager)
    * [.getPosition()](#MouseManager.getPosition) ⇒ <code>Object</code>
    * [.getWindowPosition()](#MouseManager.getWindowPosition) ⇒ <code>Object</code>
    * [.getNameByButtonCode(buttonCode)](#MouseManager.getNameByButtonCode) ⇒ <code>string</code>
    * [.getButtonKeyByName(buttonName)](#MouseManager.getButtonKeyByName) ⇒ <code>number</code>
    * [.isButtonDown(button)](#MouseManager.isButtonDown) ⇒ <code>boolean</code>
    * [.isButtonDownByName(button)](#MouseManager.isButtonDownByName) ⇒ <code>boolean</code>
    * [.isButtonDownByButtonCode(button)](#MouseManager.isButtonDownByButtonCode) ⇒ <code>boolean</code>

<a name="MouseManager.getPosition"></a>

## MouseManager.getPosition() ⇒ <code>Object</code>
<p>Returns the mouse position relative to the canvas.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>Object</code> - <p>The current mouse position {x, y}</p>  
**Example**  
```js
const { x, y } = Impacto.Inputs.Mouse.getPosition();
```
<a name="MouseManager.getWindowPosition"></a>

## MouseManager.getWindowPosition() ⇒ <code>Object</code>
<p>Returns the mouse position relative to the window.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>Object</code> - <p>The current mouse position {x, y}</p>  
**Example**  
```js
const { x, y } = Impacto.Inputs.Mouse.getWindowPosition();
```
<a name="MouseManager.getNameByButtonCode"></a>

## MouseManager.getNameByButtonCode(buttonCode) ⇒ <code>string</code>
<p>Returns the name of the button by the button code.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>string</code> - <p>The name of the button</p>  

| Param | Type | Description |
| --- | --- | --- |
| buttonCode | <code>number</code> | <p>The button code</p> |

**Example**  
```js
console.log(Impacto.Inputs.Mouse.getNameByButtonCode(1)); // "middle"
```
<a name="MouseManager.getButtonKeyByName"></a>

## MouseManager.getButtonKeyByName(buttonName) ⇒ <code>number</code>
<p>Returns the code of the button by the button name.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>number</code> - <p>The button code</p>  

| Param | Type | Description |
| --- | --- | --- |
| buttonName | <code>string</code> | <p>The name of the button</p> |

**Example**  
```js
console.log(Impacto.Inputs.Mouse.getButtonCodeByName("left")); // 0
```
<a name="MouseManager.isButtonDown"></a>

## MouseManager.isButtonDown(button) ⇒ <code>boolean</code>
<p>Returns if the button is pressed.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>boolean</code> - <p>True if the button is pressed</p>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>string</code> \| <code>number</code> | <p>The button name or code</p> |

**Example**  
```js
Impacto.Inputs.Mouse.isButtonPressed("left") // True
```
<a name="MouseManager.isButtonDownByName"></a>

## MouseManager.isButtonDownByName(button) ⇒ <code>boolean</code>
<p>Returns if the button is pressed by the button name.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>boolean</code> - <p>True if the button is pressed</p>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>string</code> \| <code>number</code> | <p>The button name</p> |

**Example**  
```js
Impacto.Inputs.Mouse.isButtonDownByName("left") // True
```
<a name="MouseManager.isButtonDownByButtonCode"></a>

## MouseManager.isButtonDownByButtonCode(button) ⇒ <code>boolean</code>
<p>Returns if the button is pressed by the button code.</p>

**Kind**: static method of [<code>MouseManager</code>](#MouseManager)  
**Returns**: <code>boolean</code> - <p>True if the button is pressed</p>  

| Param | Type | Description |
| --- | --- | --- |
| button | <code>string</code> \| <code>number</code> | <p>The button code</p> |

**Example**  
```js
Impacto.Inputs.Mouse.isButtonDownByName(2) // True
```
