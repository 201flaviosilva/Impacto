import { AssetsManagerInstance } from "../../State/AssetsManager.js";
import { GlobalStateManagerInstance } from "../../State/GlobalStateManager.js";
import Types from "../Types.js";


/**
 * @property {string} src - The source of the audio file.
 * @property {boolean} loop - If the audio file should loop.
 * @property {boolean} paused - If the audio file is paused.
 * @property {number} volume - The volume of the audio file.
 * @property {boolean} muted - If the audio file should be muted.
 * @property {number} delay - The delay of the audio file.

 * @classdesc AudioPlay is a class that plays audio files.
 * 
 * @example
 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
 * 
 * @class AudioPlay
 * @memberof Impacto.GameObjects
 */
export default class AudioPlay {
	constructor(key, loop = false, paused = false, volume = GlobalStateManagerInstance.volume, muted = false, delay = 0) {
		/**
		* @type {string}
		* @default ""
		* @description The source of the audio file.
		*
		* @memberof Impacto.GameObjects.AudioPlay
		* @readonly
		* @instance
		* @public
		*/
		this.name = key;

		/**
		 * @private
		 */
		this.audio = AssetsManagerInstance.getAudio(key);
		this.audio.volume = volume;
		this.audio.loop = loop;
		this.audio.muted = muted;

		/**
		 * @type {boolean}
		 * @default false
		 * @description If the audio file should loop.
		 * 
		 * @memberof Impacto.GameObjects.AudioPlay
		 * @readonly
		 * @instance
		 * @public
		 */
		this.paused = paused;

		/**
		 * @type {number}
		 * @default 1
		 * @description The volume on reproducing the audio file.
		 * 
		 * @memberof Impacto.GameObjects.AudioPlay
		 * @readonly
		 * @instance
		 * @public
		 */
		this.volume = volume;

		/**
		 * @type {boolean}
		 * @default false
		 * @description If the audio should be in loop.
		 * 
		 * @memberof Impacto.GameObjects.AudioPlay
		 * @readonly
		 * @instance
		 * @public
		 */
		this.loop = loop;

		/**
		 * @type {boolean}
		 * @default false
		 * @description If the audio should be muted.
		 * 
		 * @memberof Impacto.GameObjects.AudioPlay
		 * @readonly
		 * @instance
		 * @public
		 */
		this.muted = muted;

		/**
		 * @type {number}
		 * @default 0
		 * @description The delay of the audio file.
		 * 
		 * @memberof Impacto.GameObjects.AudioPlay
		 * @readonly
		 * @instance
		 * @public
		 */
		this.delay = delay;
		this.loopDelay = delay; // TODO: not implemented yet

		/**
		 * @description Core properties of the audio file.
		 * @private
		 */
		this._delayTimer = null;

		/**
		 * @description The type of the object.
		 * @private
		 */
		this._type = Types.audioPlay;

		if (!this.paused) this.play();
	}

	/**
	 * @description Plays the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.play();
	 * 
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	play() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.currentTime = 0;
		this.audio.loop = this.loop;

		if (this.delay > 0) {
			this._delayTimer = setTimeout(() => this.audio.play(), this.delay);
		} else this.audio.play();

		return this;
	}

	/**
	 * @description just plays once time the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.playOnce();
	 * 
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	playOnce() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.currentTime = 0;
		this.audio.loop = false;
		this.audio.play();
		return this;
	}

	/**
	 * @description Pause the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.pause();
	 * 
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	pause() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.paused = true;
		this.audio.pause();
		return this;
	}

	/**
	 * @description Resume the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.resume();
	 * 
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	resume() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.paused = false;
		this.audio.loop = this.loop;
		this.audio.play();
		return this;
	}

	/**
	 * @description Stop the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.stop();
	 * 
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	stop() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.pause();
		this.audio.currentTime = 0;
		return this;
	}

	/**
	 * @description Set the volume of the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.setVolume(0.5);
	 * 
	 * @param {number} volume - The volume of the audio file.
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	setVolume(volume) {
		this.volume = volume;
		this.audio.volume = volume;
		return this;
	}

	/**
	 * @description Set loop of the audio file. If the audio file is looping, it will be played again.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.setLoop(true);
	 * 
	 * @param {boolean} loop - If the audio file should be looping.
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	setLoop(loop) {
		this.loop = loop;
		this.audio.loop = loop;
		return this;
	}

	/**
	 * @description Set the delay of the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.setDelay(1000);
	 * 
	 * @param {number} delay - The delay of the audio file.
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	setMuted(muted) {
		this.muted = muted;
		this.audio.muted = muted;
		return this;
	}

	/**
	 * @description Set the delay of the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.setDelay(1000);
	 * 
	 * @param {number} delay - The delay of the audio file.
	 * @returns {Impacto.GameObjects.AudioPlay}
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 */
	setDelay(delay) {
		this.delay = delay;
		return this;
	}

	/**
	 * @description Check if the audio file is ended playing.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.isEnded();
	 * 
	 * @returns {boolean} If the audio file is ended playing.
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 * @readonly
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended}
	 */
	isEnded() { return this.audio.ended; }

	/**
	 * @description Returns the time of the audio file.
	 * 
	 * @example
	 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
	 * myAudioPlay.getDuration();
	 * 
	 * @returns {number} The time of the audio file.
	 * 
	 * @memberof Impacto.GameObjects.AudioPlay
	 * @instance
	 * @public
	 * @function
	 * @readonly
	 */
	getDuration() { return this.audio.duration; }
}
