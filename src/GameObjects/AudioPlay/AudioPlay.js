import { AssetsManagerInstance } from "../../State/AssetsManager.js";
import { GlobalStateManagerInstance } from "../../State/GlobalStateManager.js";
import Types from "../Types.js";

export default class AudioPlay {
	constructor(name, loop = true, paused = false, volume = GlobalStateManagerInstance.volume, muted = false) {
		this.name = name;
		this.audio = AssetsManagerInstance.getAudio(name);
		this.audio.volume = volume;
		this.audio.loop = loop;
		this.audio.muted = muted;

		this.paused = paused;
		this.volume = volume;
		this.loop = loop;
		this.muted = muted;

		this._type = Types.audioPlay;

		if (!this.paused) this.play();
	}

	play() {
		this.audio.currentTime = 0;
		this.audio.loop = this.loop;
		this.audio.play();
		return this;
	}

	playOnce() {
		this.audio.currentTime = 0;
		this.audio.loop = false;
		this.audio.play();
		return this;
	}

	pause() {
		this.paused = true;
		this.audio.pause();
		return this;
	}

	resume() {
		this.paused = false;
		this.audio.loop = this.loop;
		this.audio.play();
		return this;
	}

	stop() {
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

	isEnded() { return this.audio.ended; }
	getDuration() { return this.audio.duration; }
}
