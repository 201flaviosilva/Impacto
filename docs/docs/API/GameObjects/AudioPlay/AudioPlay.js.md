<a name="AudioPlay"></a>

# AudioPlay
<p>AudioPlay is a class that plays audio files.</p>

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>The key of the sprite.</p> |
| loop | <code>boolean</code> | <p>If the audio file should loop.</p> |
| paused | <code>boolean</code> | <p>If the audio file is paused.</p> |
| volume | <code>number</code> | <p>The volume of the audio file.</p> |
| muted | <code>boolean</code> | <p>If the audio file should be muted.</p> |
| delay | <code>number</code> | <p>The delay of the audio file.</p> |


* [AudioPlay](#AudioPlay)
    * [.this.name](#AudioPlay.this.name) : <code>string</code>
    * [.this.paused](#AudioPlay.this.paused) : <code>boolean</code>
    * [.this.volume](#AudioPlay.this.volume) : <code>number</code>
    * [.this.loop](#AudioPlay.this.loop) : <code>boolean</code>
    * [.this.muted](#AudioPlay.this.muted) : <code>boolean</code>
    * [.this.delay](#AudioPlay.this.delay) : <code>number</code>
    * [.this.loopDelay](#AudioPlay.this.loopDelay) : <code>number</code>
    * [.play()](#AudioPlay.play) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.playOnce()](#AudioPlay.playOnce) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.pause()](#AudioPlay.pause) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.resume()](#AudioPlay.resume) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.stop()](#AudioPlay.stop) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.setVolume(volume)](#AudioPlay.setVolume) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.setLoop(loop)](#AudioPlay.setLoop) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.setMuted(delay)](#AudioPlay.setMuted) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.setDelay(delay)](#AudioPlay.setDelay) ⇒ [<code>AudioPlay</code>](#AudioPlay)
    * [.isEnded()](#AudioPlay.isEnded) ⇒ <code>boolean</code>
    * [.getDuration()](#AudioPlay.getDuration) ⇒ <code>number</code>

<a name="AudioPlay.this.name"></a>

## AudioPlay.this.name : <code>string</code>
<p>The source of the audio file.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>&quot;\&quot;\&quot;&quot;</code>  
<a name="AudioPlay.this.paused"></a>

## AudioPlay.this.paused : <code>boolean</code>
<p>If the audio file should loop.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>false</code>  
<a name="AudioPlay.this.volume"></a>

## AudioPlay.this.volume : <code>number</code>
<p>The volume on reproducing the audio file.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>1</code>  
<a name="AudioPlay.this.loop"></a>

## AudioPlay.this.loop : <code>boolean</code>
<p>If the audio should be in loop.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>false</code>  
<a name="AudioPlay.this.muted"></a>

## AudioPlay.this.muted : <code>boolean</code>
<p>If the audio should be muted.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>false</code>  
<a name="AudioPlay.this.delay"></a>

## AudioPlay.this.delay : <code>number</code>
<p>The delay of the audio file.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>0</code>  
<a name="AudioPlay.this.loopDelay"></a>

## AudioPlay.this.loopDelay : <code>number</code>
<p>The time of the audio file.</p>

**Kind**: static property of [<code>AudioPlay</code>](#AudioPlay)  
**Default**: <code>0</code>  
<a name="AudioPlay.play"></a>

## AudioPlay.play() ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Plays the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.play();
```
<a name="AudioPlay.playOnce"></a>

## AudioPlay.playOnce() ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>just plays once time the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.playOnce();
```
<a name="AudioPlay.pause"></a>

## AudioPlay.pause() ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Pause the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.pause();
```
<a name="AudioPlay.resume"></a>

## AudioPlay.resume() ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Resume the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.resume();
```
<a name="AudioPlay.stop"></a>

## AudioPlay.stop() ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Stop the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.stop();
```
<a name="AudioPlay.setVolume"></a>

## AudioPlay.setVolume(volume) ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Set the volume of the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  

| Param | Type | Description |
| --- | --- | --- |
| volume | <code>number</code> | <p>The volume of the audio file.</p> |

**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.setVolume(0.5);
```
<a name="AudioPlay.setLoop"></a>

## AudioPlay.setLoop(loop) ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Set loop of the audio file. If the audio file is looping, it will be played again.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  

| Param | Type | Description |
| --- | --- | --- |
| loop | <code>boolean</code> | <p>If the audio file should be looping.</p> |

**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.setLoop(true);
```
<a name="AudioPlay.setMuted"></a>

## AudioPlay.setMuted(delay) ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Set the delay of the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>number</code> | <p>The delay of the audio file.</p> |

**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.setDelay(1000);
```
<a name="AudioPlay.setDelay"></a>

## AudioPlay.setDelay(delay) ⇒ [<code>AudioPlay</code>](#AudioPlay)
<p>Set the delay of the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  

| Param | Type | Description |
| --- | --- | --- |
| delay | <code>number</code> | <p>The delay of the audio file.</p> |

**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.setDelay(1000);
```
<a name="AudioPlay.isEnded"></a>

## AudioPlay.isEnded() ⇒ <code>boolean</code>
<p>Check if the audio file is ended playing.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Returns**: <code>boolean</code> - <p>If the audio file is ended playing.</p>  
**See**: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended)  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.isEnded();
```
<a name="AudioPlay.getDuration"></a>

## AudioPlay.getDuration() ⇒ <code>number</code>
<p>Returns the time of the audio file.</p>

**Kind**: static method of [<code>AudioPlay</code>](#AudioPlay)  
**Returns**: <code>number</code> - <p>The time of the audio file.</p>  
**Example**  
```js
const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
myAudioPlay.getDuration();
```
