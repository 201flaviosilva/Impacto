<a name="Text"></a>

# Text ⇐ <code>Impacto.GameObjects.GameObject2D</code>
<p>This class will draw a text on the canvas.</p>

**Kind**: global class  
**Extends**: <code>Impacto.GameObjects.GameObject2D</code>  
**Constructors**:   

* [Text](#Text) ⇐ <code>Impacto.GameObjects.GameObject2D</code>
    * [new Text(x, y, Text, [fillColor], [strokeColor])](#new_Text_new)
    * [.width](#Text.width) ⇒ <code>number</code>
    * [.height](#Text.height) ⇒ <code>number</code>
    * [.x](#Text.x)
    * [.y](#Text.y)
    * [.x](#Text.x) ⇒ <code>number</code>
    * [.y](#Text.y) ⇒ <code>number</code>
    * [.getTop()](#Text.getTop) ⇒ <code>number</code>
    * [.getBottom()](#Text.getBottom) ⇒ <code>number</code>
    * [.getLeft()](#Text.getLeft) ⇒ <code>number</code>
    * [.getRight()](#Text.getRight) ⇒ <code>number</code>
    * [.getCenterX()](#Text.getCenterX) ⇒ <code>number</code>
    * [.getCenterY()](#Text.getCenterY) ⇒ <code>number</code>
    * [.getRealTop()](#Text.getRealTop) ⇒ <code>number</code>
    * [.getRealBottom()](#Text.getRealBottom) ⇒ <code>number</code>
    * [.getRealLeft()](#Text.getRealLeft) ⇒ <code>number</code>
    * [.getRealRight()](#Text.getRealRight) ⇒ <code>number</code>
    * [.getRealCenterX()](#Text.getRealCenterX) ⇒ <code>number</code>
    * [.getRealCenterY()](#Text.getRealCenterY) ⇒ <code>number</code>
    * [.getWords()](#Text.getWords) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getWordsNumber()](#Text.getWordsNumber) ⇒ <code>number</code>
    * [.getCharacters()](#Text.getCharacters) ⇒ <code>Array.&lt;string&gt;</code>
    * [.getCharactersNumber()](#Text.getCharactersNumber) ⇒ <code>number</code>
    * [.setText(text)](#Text.setText) ⇒ [<code>Text</code>](#Text)
    * [.setFontSize(size)](#Text.setFontSize) ⇒ [<code>Text</code>](#Text)
    * [.setFontFamily(family)](#Text.setFontFamily) ⇒ [<code>Text</code>](#Text)
    * [.setFontStyle(style)](#Text.setFontStyle) ⇒ [<code>Text</code>](#Text)
    * [.setFontVariant(variant)](#Text.setFontVariant) ⇒ [<code>Text</code>](#Text)
    * [.setFontWeight(weight)](#Text.setFontWeight) ⇒ [<code>Text</code>](#Text)
    * [.setFont(font)](#Text.setFont) ⇒ [<code>Text</code>](#Text)
    * [.setAlignVertical(align)](#Text.setAlignVertical) ⇒ [<code>Text</code>](#Text)
    * [.setAlignHorizontal(align)](#Text.setAlignHorizontal) ⇒ [<code>Text</code>](#Text)
    * [.setDirection(direction)](#Text.setDirection) ⇒ [<code>Text</code>](#Text)

<a name="new_Text_new"></a>

## new Text(x, y, Text, [fillColor], [strokeColor])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | <code>number</code> |  | <p>The horizontal position of this Text in the world.</p> |
| y | <code>number</code> |  | <p>The vertical position of this Text in the world.</p> |
| Text | <code>number</code> |  | <p>The text will be drawn on the canvas.</p> |
| [fillColor] | <code>number</code> \| <code>string</code> | <code>0xffffff</code> | <p>The color the Text will be filled with, i.e. 0xff0000 for red.</p> |
| [strokeColor] | <code>number</code> \| <code>string</code> | <code>0x000000</code> | <p>The color of the border of the Text, i.e. 0x00ff00 for green.</p> |

**Example**  
```js
const myText = new Impacto.GameObjects.Text(400, 300, "Hello World", "#ff0000", 0x00ff00);
```
<a name="Text.width"></a>

## Text.width ⇒ <code>number</code>
<p>Returns the width of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The width of the text.</p>  
<a name="Text.height"></a>

## Text.height ⇒ <code>number</code>
<p>Returns the height of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The height of the text.</p>  
<a name="Text.x"></a>

## Text.x
<p>Sets the horizontal position of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| align | <code>string</code> | <p>The horizontal position of the text.</p> |

<a name="Text.y"></a>

## Text.y
<p>Sets the vertical position of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  

| Param | Type | Description |
| --- | --- | --- |
| align | <code>string</code> | <p>The vertical position of the text.</p> |

<a name="Text.x"></a>

## Text.x ⇒ <code>number</code>
<p>Returns the horizontal position of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The horizontal position of the text.</p>  
<a name="Text.y"></a>

## Text.y ⇒ <code>number</code>
<p>Returns the vertical position of the text.</p>

**Kind**: static property of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The vertical position of the text.</p>  
<a name="Text.getTop"></a>

## Text.getTop() ⇒ <code>number</code>
<p>Returns the top side position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The top side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getTop(); // 300
```
<a name="Text.getBottom"></a>

## Text.getBottom() ⇒ <code>number</code>
<p>Returns the bottom side position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The bottom side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getBottom(); // 300
```
<a name="Text.getLeft"></a>

## Text.getLeft() ⇒ <code>number</code>
<p>Returns the left side position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The left side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getLeft(); // 400
```
<a name="Text.getRight"></a>

## Text.getRight() ⇒ <code>number</code>
<p>Returns the right side position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The right side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRight(); // 400
```
<a name="Text.getCenterX"></a>

## Text.getCenterX() ⇒ <code>number</code>
<p>Returns the horizontal center position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The horizontal center position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterX(); // 400
```
<a name="Text.getCenterY"></a>

## Text.getCenterY() ⇒ <code>number</code>
<p>Returns the vertical center position of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The vertical center position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterY(); // 300
```
<a name="Text.getRealTop"></a>

## Text.getRealTop() ⇒ <code>number</code>
<p>Returns the real top side position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real top side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealTop(); // 300
```
<a name="Text.getRealBottom"></a>

## Text.getRealBottom() ⇒ <code>number</code>
<p>Returns the real bottom side position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real bottom side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealBottom(); // 300
```
<a name="Text.getRealLeft"></a>

## Text.getRealLeft() ⇒ <code>number</code>
<p>Returns the real left side position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real left side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealLeft(); // 400
```
<a name="Text.getRealRight"></a>

## Text.getRealRight() ⇒ <code>number</code>
<p>Returns the real right side position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real right side position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealRight(); // 400
```
<a name="Text.getRealCenterX"></a>

## Text.getRealCenterX() ⇒ <code>number</code>
<p>Returns the real horizontal center position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real horizontal center position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterX(); // 400
```
<a name="Text.getRealCenterY"></a>

## Text.getRealCenterY() ⇒ <code>number</code>
<p>Returns the real vertical center position of the text. (The position of the text without the offset)</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The real vertical center position of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterY(); // 300
```
<a name="Text.getWords"></a>

## Text.getWords() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns all words of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>Array.&lt;string&gt;</code> - <p>All words of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getWords(); // ["Hello", "World"]
```
<a name="Text.getWordsNumber"></a>

## Text.getWordsNumber() ⇒ <code>number</code>
<p>Returns the number of words of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The number of words of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getWordsCount(); // 2
```
<a name="Text.getCharacters"></a>

## Text.getCharacters() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns all characters of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>Array.&lt;string&gt;</code> - <p>All characters of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getCharacters(); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
```
<a name="Text.getCharactersNumber"></a>

## Text.getCharactersNumber() ⇒ <code>number</code>
<p>Returns the number of characters of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: <code>number</code> - <p>The number of characters of the text.</p>  
**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").getCharactersCount(); // 11
```
<a name="Text.setText"></a>

## Text.setText(text) ⇒ [<code>Text</code>](#Text)
<p>Change the display text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | <p>The new text.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setText("MyText");
```
<a name="Text.setFontSize"></a>

## Text.setFontSize(size) ⇒ [<code>Text</code>](#Text)
<p>Change the font size.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>number</code> | <p>The new font size.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFontSize(20);
```
<a name="Text.setFontFamily"></a>

## Text.setFontFamily(family) ⇒ [<code>Text</code>](#Text)
<p>Change the font family.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| family | <code>string</code> | <p>The new font family.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFontFamily("Arial");
```
<a name="Text.setFontStyle"></a>

## Text.setFontStyle(style) ⇒ [<code>Text</code>](#Text)
<p>Change the font style.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| style | <code>string</code> | <p>The new font style.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFontStyle("italic");
```
<a name="Text.setFontVariant"></a>

## Text.setFontVariant(variant) ⇒ [<code>Text</code>](#Text)
<p>Change the font variant.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| variant | <code>string</code> | <p>The new font variant.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFontVariant("small-caps");
```
<a name="Text.setFontWeight"></a>

## Text.setFontWeight(weight) ⇒ [<code>Text</code>](#Text)
<p>Change the font weight.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| weight | <code>string</code> | <p>The new font weight.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFontWeight("bold");
```
<a name="Text.setFont"></a>

## Text.setFont(font) ⇒ [<code>Text</code>](#Text)
<p>Change the font.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| font | <code>object</code> | <p>The new properties of the font.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setFont({
	size: 20,
	family: "Arial",
	style: "italic",
	variant: "small-caps",
	weight: "bold"
});
```
<a name="Text.setAlignVertical"></a>

## Text.setAlignVertical(align) ⇒ [<code>Text</code>](#Text)
<p>Change the vertical text alignment.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| align | <code>string</code> | <p>The new text alignment.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setVerticalAlignment("top");
```
<a name="Text.setAlignHorizontal"></a>

## Text.setAlignHorizontal(align) ⇒ [<code>Text</code>](#Text)
<p>Change the horizontal text alignment.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| align | <code>string</code> | <p>The new text alignment.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setHorizontalAlignment("left");
```
<a name="Text.setDirection"></a>

## Text.setDirection(direction) ⇒ [<code>Text</code>](#Text)
<p>Change the direction of the text.</p>

**Kind**: static method of [<code>Text</code>](#Text)  
**Returns**: [<code>Text</code>](#Text) - <p>The text object.</p>  

| Param | Type | Description |
| --- | --- | --- |
| direction | <code>string</code> | <p>The new text direction.</p> |

**Example**  
```js
new Impacto.GameObjects.Text(400, 300, "Hello World").setDirection("rtl");
```
