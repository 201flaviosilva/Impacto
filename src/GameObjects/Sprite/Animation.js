/**
 * @param {Impacto.GameObjects.Sprite} parent - The parent Sprite.
 * @param {string} name - The name of the Animations.
 * @param {number} startFrame - The first frame of the Animations.
 * @param {number} numberOfFrames - Number of frames of the Animations.
 * @param {number} speed - The speed of the Animations.
 * @param {boolean} [loop=true] - Whether the Animations should loop or not.
 * 
 * @classdesc
 * A class to animate a sprite
 * 
 * @example
 * new Animation(MySprite, "Default", 0, 10, 100, true);
 * 
 * @class Animation
 * @constructor
 */
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

	/**
	 * Change the current animation name
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setName("MyNewName");
	 * 
	 * @param {string} newName - The 
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	setName(newName) {
		this.name = newName;
		return this;
	}

	/**
	 * Change the speed of a animation
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setSpeed(50);
	 * 
	 * @param {string} name - The name of the Animation.
	 * @param {number} speed - The new speed of the Animation.
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	setSpeed(speed) {
		this.speed = speed;
		return this;
	}

	/**
	 * Change the start frame of a animation
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setStartFrame(5);
	 * 
	 * @param {number} startFrame - The new start frame of the Animation.
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	setStartFrame(startFrame) {
		this.startFrame = startFrame;
		return this;
	}

	/**
	 * Change the number of frames of a animation
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setNumberOfFrames(5);
	 * 
	 * @param {number} numberOfFrames - The new number of frames of the Animation.
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	setNumberOfFrames(numberOfFrames) {
		this.numberOfFrames = numberOfFrames;
		return this;
	}

	/**
	 * Change the loop of a animation
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100, true).setLoop(false);
	 * 
	 * @param {boolean} loop - The new loop of the Animation.
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	setLoop(loop) {
		this.loop = loop;
		return this;
	}

	/**
	 * Reset the animation to the first frame
	 * 
	 * @example
	 * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).reset();
	 * 
	 * @returns {Animation} The animation state
	 * @memberof Animation
	 */
	reset() {
		this._currentFrame = 0;
		this._currentTime = 0;
		return this;
	}


	/**
	 * Private (Core) function to update the animation.
	 * 
	 * @private
	 * @memberof Animation
	 */
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
