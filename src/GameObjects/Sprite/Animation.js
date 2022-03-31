export default class Animation {
	constructor(parent, name, startFrame, numberOfFrames, speed, loop = true) {
		this._parent = parent;
		this.name = name;
		this.startFrame = startFrame;
		this.numberOfFrames = numberOfFrames;
		this.speed = speed;
		this.loop = loop;
		this.reversed = false; // TODO: Not Working
		this.yoyo = false; // TODO: Not Working

		this._currentFrame = 0;
		this._currentTime = 0;
	}

	setName(name) {
		this.name = name;
		return this;
	}
	setSpeed(speed) {
		this.speed = speed;
		return this;
	}
	setStartFrame(startFrame) {
		this.startFrame = startFrame;
		return this;
	}
	setNumberOfFrames(numberOfFrames) {
		this.numberOfFrames = numberOfFrames;
		return this;
	}
	setLoop(loop) {
		this.loop = loop;
		return this;
	}

	reset() {
		this._currentFrame = 0;
		this._currentTime = 0;
		return this;
	}

	// Private
	_update(deltaTime) {
		this._currentTime += deltaTime * 100;

		if (this._currentTime >= this.speed) {
			this._currentTime -= this.speed;
			this._currentFrame++;

			if (this._currentFrame >= this.numberOfFrames) {
				if (this.loop) this._currentFrame = 0;
				else {
					this._currentFrame = this.numberOfFrames - 1;
					this._parent.animations.pause();
				}
			}
		}

		this._parent.setFrame(this.startFrame + this._currentFrame);
	}
}
