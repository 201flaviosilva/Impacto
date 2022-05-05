import Animation from "./Animation.js";

/**
 * @param {Impacto.GameObjects.Sprite} parent - The parent Sprite.
 * @param {string} name - The name of the Animations.
 * @param {number} startFrame - The first frame of the Animations.
 * @param {number} numberOfFrames - Number of frames of the Animations.
 * @param {number} [speed] - The speed of the Animations.
 * @param {boolean} [loop] - Whether the Animations should loop or not.
 * 
 * @classdesc
 * A class to animate sprites
 * 
 * @example
 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
 * 
 * @class Animations
 * @constructors
 */
export default class Animations {
	constructor(parent) {
		this._parent = parent;
		this.animations = {};
		this.currentAnimation = null;
		this.paused = true;
	}

	/**
	 * Returns the animation state
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
	 * console.log(mySprite.animations.get(""Default""));
	 * 
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	get(name) { return this.animations[name]; }


	/**
	 * Add a new animation to the sprite
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
	 * 
	 * @param {string} name - The name of the Animation.
	 * @param {number} numberOfFrames - Number of frames of the Animation.
	 * @param {number} [startFrame=0] - The first frame of the Animation.
	 * @param {number} [speed=100] - The speed of the Animation.
	 * @param {boolean} [loop=true] - Whether the Animation should loop or not.
	 */
	add(name, numberOfFrames, startFrame = 0, speed = 100, loop = true) {
		this.animations[name] = new Animation(this._parent, name, startFrame, numberOfFrames, speed, loop);
		return this.get(name);
	}

	/**
	 * Returns all animations names
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth());
	 * console.log(mySprite.animations.getAnimationsNames());
	 * 
	 * @returns {string[]} - The names of the animations
	 * @memberof Animations
	 */
	getAnimationsNames() { return Object.keys(this.animations); }

	/**
	 * Reset the animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).reset();
	 * 
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	reset(name) {
		this.animations[name].reset();
		return this.get(this.currentAnimation);
	}

	/**
	 * Play the animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).play("Default");
	 * 
	 * @param {string} name - The name of the Animation.
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	play(name) {
		if (this.currentAnimation) this.currentAnimation.reset();
		this.currentAnimation = this.animations[name];
		this.resume();
		return this.get(this.currentAnimation);
	}

	/**
	 * Pause the animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).pause();
	 * 
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	pause() {
		this.paused = true;
		return this.get(this.currentAnimation);
	}

	/**
	 * Resume the animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).resume();
	 * 
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	resume() {
		this.paused = false;
		return this.get(this.currentAnimation);
	}

	/**
	 * Change the name of a animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeName("NewName");
	 * 
	 * @param {string} oldName - The name of the Animation.
	 * @param {string} newName - The new name of the Animation.
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	setName(oldName, newName) { return this.animations[oldName].setName(newName); }

	/**
	 * Change the speed of a animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeSpeed(100);
	 * 
	 * @param {string} name - The name of the Animation.
	 * @param {number} speed - The new speed of the Animation.
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	setSpeed(name, speed) { return this.animations[name].setSpeed(speed); }

	/**
	 * Change the number of frame of a animation
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeNumberOfFrames(10);
	 * 
	 * @param {string} name - The name of the Animation.
	 * @param {number} numberOfFrames - The new number of frames of the Animation.
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	setNumberOfFrames(name, numberOfFrames) { return this.animations[name].setNumberOfFrames(numberOfFrames); }

	/**
	 * Change if animation if in loop or not
	 * 
	 * @example
	 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
	 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeLoop(false);
	 * 
	 * @param {string} name - The name of the Animation.
	 * @param {boolean} loop - The new loop state of the Animation.
	 * @returns {Animation} - The animation state
	 * @memberof Animations
	 */
	setLoop(name, loop) { return this.animations[name].setLoop(loop); }

	/**
	 * Private (Core) function to update the animation.
	 * 
	 * @private
	 * @readonly
	 * @memberof Animations
	 */
	_update(deltaTime) {
		if (this.paused) return;
		if (this.currentAnimation) this.currentAnimation._update(deltaTime);
	}
}
