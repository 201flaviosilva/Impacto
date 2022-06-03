<a name="AssetsManager"></a>

# AssetsManager
**Kind**: global class  

* [AssetsManager](#AssetsManager)
    * [new AssetsManager()](#new_AssetsManager_new)
    * [.load(assets)](#AssetsManager.load) ⇒ <code>void</code>
    * [.loadSprite(name, path)](#AssetsManager.loadSprite) ⇒ <code>void</code>
    * [.loadFont(name, path)](#AssetsManager.loadFont) ⇒ <code>void</code>
    * [.loadAudios(name, path)](#AssetsManager.loadAudios) ⇒ <code>void</code>
    * [.getSprite(name)](#AssetsManager.getSprite) ⇒ <code>Object</code>
    * [.getFont(name)](#AssetsManager.getFont) ⇒ <code>string</code>
    * [.getAudio(name)](#AssetsManager.getAudio) ⇒ <code>Object</code>
    * [.getSpriteSize(name)](#AssetsManager.getSpriteSize) ⇒ <code>Object</code>

<a name="new_AssetsManager_new"></a>

## new AssetsManager()
<p>A class to manage the assets.</p>

<a name="AssetsManager.load"></a>

## AssetsManager.load(assets) ⇒ <code>void</code>
<p>Load the assets</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  

| Param | Type | Description |
| --- | --- | --- |
| assets | <code>Object</code> | <p>The assets to load</p> |

**Example**  
```js
load({
	sprites: { MySprite: "./MySprite.png", },
	fonts: { "MyFont": "MyFont.ttf", },
	audios: { "MyAudio": "MyAudio.mp3", }
});
```
<a name="AssetsManager.loadSprite"></a>

## AssetsManager.loadSprite(name, path) ⇒ <code>void</code>
<p>Load a sprite</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the sprite</p> |
| path | <code>string</code> | <p>The path of the sprite</p> |

<a name="AssetsManager.loadFont"></a>

## AssetsManager.loadFont(name, path) ⇒ <code>void</code>
<p>Load a font</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the font</p> |
| path | <code>string</code> | <p>The path of the font</p> |

<a name="AssetsManager.loadAudios"></a>

## AssetsManager.loadAudios(name, path) ⇒ <code>void</code>
<p>Load a sound</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the sound</p> |
| path | <code>string</code> | <p>The path of the sound</p> |

<a name="AssetsManager.getSprite"></a>

## AssetsManager.getSprite(name) ⇒ <code>Object</code>
<p>Return the sprite based on the name</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  
**Returns**: <code>Object</code> - <p>The sprite</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the sprite</p> |

<a name="AssetsManager.getFont"></a>

## AssetsManager.getFont(name) ⇒ <code>string</code>
<p>Return the font based on the name</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  
**Returns**: <code>string</code> - <p>The font</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the font</p> |

<a name="AssetsManager.getAudio"></a>

## AssetsManager.getAudio(name) ⇒ <code>Object</code>
<p>Return the audio based on the name</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  
**Returns**: <code>Object</code> - <p>The audio</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the audio</p> |

<a name="AssetsManager.getSpriteSize"></a>

## AssetsManager.getSpriteSize(name) ⇒ <code>Object</code>
<p>Return the size of the sprite</p>

**Kind**: static method of [<code>AssetsManager</code>](#AssetsManager)  
**Returns**: <code>Object</code> - <p>The size of the sprite</p>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the sprite</p> |

