import { AssetsManagerInstance } from "../../State/AssetsManager.js";
import { GlobalStateManagerInstance } from "../../State/GlobalStateManager.js";
import Types from "../Types.js";

export default class AudioPlay {
	constructor(key, loop = false, paused = false, volume = GlobalStateManagerInstance.volume, muted = false, delay = 0) {
		this.name = key;
		this.audio = AssetsManagerInstance.getAudio(key);
		this.audio.volume = volume;
		this.audio.loop = loop;
		this.audio.muted = muted;

		this.paused = paused;
		this.volume = volume;
		this.loop = loop;
		this.muted = muted;
		this.delay = delay;
		this.loopDelay = delay; // TODO: not implemented yet

		this._delayTimer = null;
		this._type = Types.audioPlay;

		if (!this.paused) this.play();
	}

	play() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.currentTime = 0;
		this.audio.loop = this.loop;

		if (this.delay > 0) {
			this._delayTimer = setTimeout(() => this.audio.play(), this.delay);
		} else this.audio.play();

		return this;
	}

	playOnce() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.currentTime = 0;
		this.audio.loop = false;
		this.audio.play();
		return this;
	}

	pause() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.paused = true;
		this.audio.pause();
		return this;
	}

	resume() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.paused = false;
		this.audio.loop = this.loop;
		this.audio.play();
		return this;
	}

	stop() {
		if (this._delayTimer) clearTimeout(this._delayTimer);
		this.audio.pause();
		this.audio.currentTime = 0;
		return this;
	}

	setVolume(volume) {
		this.volume = volume;
		this.audio.volume = volume;
		return this;
	}

	setLoop(loop) {
		this.loop = loop;
		this.audio.loop = loop;
		return this;
	}

	setMuted(muted) {
		this.muted = muted;
		this.audio.muted = muted;
		return this;
	}

	setDelay(delay) {
		this.delay = delay;
		return this;
	}

	isEnded() { return this.audio.ended; }
	getDuration() { return this.audio.duration; }
}
