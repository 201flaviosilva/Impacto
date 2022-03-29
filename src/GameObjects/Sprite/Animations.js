import Animation from "./Animation.js";

export default class Animations {
	constructor(parent) {
		this._parent = parent;
		this.animations = {};
		this.currentAnimation = null;
		this.paused = true;
	}

	get(name) { return this.animations[name]; }

	add(name, numberOfFrames, speed, loop = true) {
		this.animations[name] = new Animation(this._parent, name, numberOfFrames, speed, loop);
		return this.get(name);
	}

	reset(name) {
		this.animations[name].reset();
		return this.get(this.currentAnimation);
	}

	play(name) {
		if (this.currentAnimation) this.currentAnimation.reset();
		this.currentAnimation = this.animations[name];
		this.resume();
		return this.get(this.currentAnimation);
	}

	pause() {
		this.paused = true;
		return this.get(this.currentAnimation);
	}

	resume() {
		this.paused = false;
		return this.get(this.currentAnimation);
	}

	setName(name, newName) { return this.animations[name].setName(newName); }
	setSpeed(name, speed) { return this.animations[name].setSpeed(speed); }
	setNumberOfFrames(name, numberOfFrames) { return this.animations[name].setNumberOfFrames(numberOfFrames); }
	setLoop(name, loop) { return this.animations[name].setLoop(loop); }

	// Private
	_update(deltaTime) {
		if (this.paused) return;
		if (this.currentAnimation) this.currentAnimation._update(deltaTime);
	}
}
