<a name="KeyboardManager"></a>

# KeyboardManager
<p>Manages the keyboard input.</p>

**Kind**: global class  
**Constructors**:   

* [KeyboardManager](#KeyboardManager)
    * [.getNameByKeyCode(keyCode)](#KeyboardManager.getNameByKeyCode) ⇒ <code>string</code>
    * [.getKeyCodeByName(name)](#KeyboardManager.getKeyCodeByName) ⇒ <code>number</code>
    * [.isKeyPressed(key)](#KeyboardManager.isKeyPressed) ⇒ <code>boolean</code>
    * [.isKeyPressedName(name)](#KeyboardManager.isKeyPressedName) ⇒ <code>boolean</code>
    * [.isKeyPressedKeyCode(keyCode)](#KeyboardManager.isKeyPressedKeyCode) ⇒ <code>boolean</code>

<a name="KeyboardManager.getNameByKeyCode"></a>

## KeyboardManager.getNameByKeyCode(keyCode) ⇒ <code>string</code>
<p>Returns the name of the key by its keyCode.</p>

**Kind**: static method of [<code>KeyboardManager</code>](#KeyboardManager)  
**Returns**: <code>string</code> - <p>The name of the key.</p>  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>number</code> | <p>The key code of the key.</p> |

**Example**  
```js
const { left } = Impacto.Inputs.KeyboardManager.keys;
console.log(Impacto.Inputs.KeyboardManager.getNameByKeyCode(left)); // left
```
<a name="KeyboardManager.getKeyCodeByName"></a>

## KeyboardManager.getKeyCodeByName(name) ⇒ <code>number</code>
<p>Returns the key code of the key by its name.</p>

**Kind**: static method of [<code>KeyboardManager</code>](#KeyboardManager)  
**Returns**: <code>number</code> - <p>The key code of the key.</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the key.</p> |

**Example**  
```js
console.log(Impacto.Inputs.KeyboardManager.getKeyCodeByName("left")); // 37
```
<a name="KeyboardManager.isKeyPressed"></a>

## KeyboardManager.isKeyPressed(key) ⇒ <code>boolean</code>
<p>Returns true if the key is pressed.</p>

**Kind**: static method of [<code>KeyboardManager</code>](#KeyboardManager)  
**Returns**: <code>boolean</code> - <p>True if the key is pressed.</p>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>number</code> \| <code>string</code> | <p>The key code or name of the key.</p> |

**Example**  
```js
const { left } = Impacto.Inputs.KeyboardManager.keys;
Impacto.Inputs.KeyboardManager.isKeyPressed(left); // false
```
<a name="KeyboardManager.isKeyPressedName"></a>

## KeyboardManager.isKeyPressedName(name) ⇒ <code>boolean</code>
<p>Returns true if the key is pressed by its name.</p>

**Kind**: static method of [<code>KeyboardManager</code>](#KeyboardManager)  
**Returns**: <code>boolean</code> - <p>True if the key is pressed.</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the key.</p> |

**Example**  
```js
Impacto.Inputs.KeyboardManager.isKeyPressedName("left"); // true
```
<a name="KeyboardManager.isKeyPressedKeyCode"></a>

## KeyboardManager.isKeyPressedKeyCode(keyCode) ⇒ <code>boolean</code>
<p>Returns true if the key is pressed by its key code.</p>

**Kind**: static method of [<code>KeyboardManager</code>](#KeyboardManager)  
**Returns**: <code>boolean</code> - <p>True if the key is pressed.</p>  

| Param | Type | Description |
| --- | --- | --- |
| keyCode | <code>number</code> | <p>The key code of the key.</p> |

**Example**  
```js
Impacto.Inputs.KeyboardManager.isKeyPressedKeyCode(37); // true
```
