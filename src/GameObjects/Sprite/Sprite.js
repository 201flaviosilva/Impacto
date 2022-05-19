import { AssetsManagerInstance } from "../../State/AssetsManager.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Rectangle from "../Rectangle/Rectangle.js";
import Types from "../Types.js";

import Animations from "./Animations.js";

/**
 * @param {number} x - The horizontal position of this Sprite in the world.
 * @param {number} y - The vertical position of this Sprite in the world.
 * @param {number} key - The name of the Sprite.
 * @param {number} [frame=0] - The frame of the Sprite.
 * @param {number} [width=0] - The width of the Sprite.
 * @param {number} [height=0] - The height of the Sprite.
 * 
 * @classdesc
 * This class will draw a Sprite on the canvas.
 * 
 * @example
 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32);
 * 
 * @class Sprite
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Sprite extends Rectangle {
	constructor(x, y, key, frame = 0, width = 0, height = 0) {
		super(x, y, "#ffffff", "#000000");
		this.texture = AssetsManagerInstance.getSprite(key);
		this.frame = frame;
		this.width = width || AssetsManagerInstance.getSpriteSize(key).width;
		this.height = height || AssetsManagerInstance.getSpriteSize(key).height;

		this.animations = new Animations(this);

		this._type = Types.sprite;
	}

	/**
 * Sets the X position of the Sprite.
 * 
 * @param {number} x - The horizontal position of this Sprite in the world.
 */
	set x(x) { this.setX(x); }

	/**
 * Sets the Y position of the Sprite.
 * 
 * @param {number} y - The vertical position of this Sprite in the world.
 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Sprite in the world relative to the origin.
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	* @returns {number} The vertical position of this Sprite in the world relative to the origin.
	*/
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }

	/**
	 * Change the frame of this Sprite.
	 * 
	 * @example
	 * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).setFrame(1);
	 * 
	 * @param {number} frame - The frame of the Sprite.
	 * @returns {Impacto.GameObjects.Sprite} The Sprite itself.
	 * @memberof Impacto.GameObjects.Sprite
	 */
	setFrame(frame) {
		this.frame = frame;
		return this;
	}

	/**
	 * Returns the number of frames of this Sprite based on the width.
	 * 
	 * @example
	 * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).getNumFramesByWidth(); // 8
	 * 
	 * @returns {number} The number of frames by width.
	 * @memberof Impacto.GameObjects.Sprite
	 */
	getNumFramesByWidth() { return Math.floor(this.texture.width / this.width); }

	/**
	 * @description
	 * Private (Core) function to render the position of the Sprite.
	 * 
	 * @private
	 * @readonly
	 * @memberof Impacto.GameObjects.Sprite
	 */
	_renderType(deltaTime) {
		this.animations._update(deltaTime);
		CanvasStateInstance.context.drawImage(
			this.texture, // Image
			this.frame * this.width, 0, // Source X, Source Y
			this.width, this.height, // Source Width, Source Height
			this.x, this.y, // Destination X, Destination Y
			this.width, this.height  // Destination Width, Destination Height
		);
	}
}
