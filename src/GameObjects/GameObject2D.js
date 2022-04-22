import { CanvasStateInstance } from "../State/CanvasState.js";
import { UtilsMathInstance } from "../Utils/Math.js";

/**
 * @param {number} x - The horizontal position of this Object in the world.
 * @param {number} y - The vertical position of this Object in the world.
 * @param {number} [fillColor=0xffffff] - The color the Object will be filled with, i.e. 0xff0000 for red.
 * @param {number} [strokeColor=0x000000] - The color of the border of the Object, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The base class for a game objects.
 * Probably you don't need to use this class directly.
 * Use this class to extend your own game objects.
 * 
 * @example
 * class MyGameObject extends Impacto.GameObject.GameObject2D {
 * 	constructor(x, y, fillColor, strokeColor, ...args) {
 * 		super(x, y, fillColor, strokeColor);
 * 	}
 * }
 * 
 * @class GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class GameObject2D {
	constructor(x, y, fillColor, strokeColor) {
		this.id = Math.random();
		this.name = `Obj - ${this.id}`;

		// Render
		this._x = x; // Get the real position X
		this._y = y; // Get the real position Y
		this.z = 0;
		this.rotation = 0; // Rotation in radians
		this.angle = 0; // Rotation in degrees
		this.scale = { x: 1, y: 1 };

		this.lastPosition = { x: this._x, y: this._y, z: this.z };
		this.origin = { x: 0, y: 0 };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.strokeWidth = 1;
		this.visible = true;
	}

	/**
	 * @description
	 * Set the game object's name.
	 * 
	 * @example
	 * obj.setName("My Game Object");
	 * 
	 * @param {string} name - The name of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setName(name) {
		this.name = name;
		return this;
	}

	/**
	 * @description
	 * Set the horizontal position of the game object in the world based on the origin.
	 * 
	 * @example
	 * obj.setX(100);
	 * 
	 * @param {number} x - The horizontal position of the game object in the world.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setX(x) {
		this.setPosition(x, this._y, this.z);
		return this;
	}

	/**
	 * @description
	 * Set the vertical position of the game object in the world based on the origin.
	 * 
	 * @example
	 * obj.setY(100);
	 * 
	 * @param {number} y - The vertical position of the game object in the world.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setY(y) {
		this.setPosition(this._x, y, this.z);
		return this;
	}

	/**
	 * @description
	 * Set the Z position of the game object in the world based on the origin.
	 * 
	 * @example
	 * obj.setZ(100);
	 * 
	 * @param {number} z - The Z position of the game object in the world.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setZ(z) {
		this.setPosition(this._x, this._y, z);
		return this;
	}

	/**
	 * @description
	 * Returns the position of the object's in the world relative on the object origin.
	 * 
	 * @example
	 * obj.getPosition();
	 * 
	 * @returns {Object} - {x:number, y:number, z:number} - The position of the object in the world.
	 * @readonly
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	getPosition() { return { x: this.x, y: this.y, z: this.z }; }

	/**
	 * @description
	 * Returns the real position of the object's in the world. (Not relative on the object origin)
	 * 
	 * @example
	 * obj.getRealPosition();
	 * 
	 * @returns {Object} - {x:number, y:number, z:number} - The real position of the object in the world.
	 * @readonly
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	getRealPosition() { return { x: this._x, y: this._y, z: this.z }; }

	/**
	 * @description
	 * Set the position of the game object in the world.
	 * 
	 * @example
	 * obj.setPosition(100, 100, 100);
	 * 
	 * @param {number} x - The horizontal position of the game object in the world.
	 * @param {number} y - The vertical position of the game object in the world.
	 * @param {number} z - The Z position of the game object in the world.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setPosition(x, y, z = this.z, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.lastPosition = { x: this.x, y: this.y, z: this.z };

		this._x = x;
		this._y = y;
		this.z = z;
		return this;
	}

	/**
	 * @description
	 * Set a random position of the game object in the world.
	 * 
	 * @example
	 * obj.setRandomPosition();
	 * 
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setRandomPosition(x = 0, y = 0, width = CanvasStateInstance.width, height = CanvasStateInstance.height) {
		do {
			this.setPosition(
				x + Math.random() * width,
				y + Math.random() * height
			);
		} while (!this.checkIsInsideWorldBounds());
		return this;
	}

	/**
	 * @description
	 * Set the rotation of the game object in the world based in radians.
	 * 
	 * @example
	 * obj.setRotation(1.5);
	 * 
	 * @param {number} rotation - The rotation of the game object in the world in radians.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setRotation(rotation) {
		this.rotation = rotation;
		this.angle = UtilsMathInstance.radiansToDegrees(rotation);
		return this;
	}

	/**
	 * @description
	 * Set the angle of the game object in the world based in degrees.
	 * 
	 * @example
	 * obj.setAngle(90);
	 * 
	 * @param {number} angle - The angle of the game object in the world in degrees.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setAngle(angle) {
		this.angle = angle;
		this.rotation = UtilsMathInstance.degreesToRadians(angle);
		return this;
	}

	/**
	 * @description
	 * Set the horizontal scale of the game object.
	 * 
	 * @example
	 * obj.setScaleX(2);
	 * 
	 * @param {number} scaleX - The horizontal scale of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setScaleX(x) {
		this.setScale(x, this.scale.y);
		return this;
	}

	/**
	 * @description
	 * Set the vertical scale of the game object.
	 * 
	 * @example
	 * obj.setScaleY(2);
	 * 
	 * @param {number} scaleY - The vertical scale of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setScaleY(y) {
		this.setScale(this.scale.x, y);
		return this;
	}

	/**
	 * @description
	 * Set the horizontal and vertical scale of the game object.
	 * 
	 * @example
	 * obj.setScale(2);
	 * 
	 * @param {number} scale - The scale of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setScale(x = 0, y = x) {
		this.scale = { x, y };
		return this;
	}

	/**
	 * @description
	 * Set the horizontal origin point of the game object.
	 * The origin point is between 0 and 1.
	 * 
	 * @example
	 * obj.setOriginX(0.5);
	 * 
	 * @param {number} originX - The horizontal origin point of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setOriginX(x) {
		this.setOrigin(x, this.origin.y);
		return this;
	}

	/**
	 * @description
	 * Set the vertical origin point of the game object.
	 * The origin point is between 0 and 1.
	 * 
	 * @example
	 * obj.setOriginY(0.5);
	 * 
	 * @param {number} originY - The vertical origin point of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setOriginY(y) {
		this.setOrigin(this.origin.x, y);
		return this;
	}

	/**
	 * @description
	 * Set the horizontal and vertical origin point of the game object.
	 * The origin point is between 0 and 1.
	 * 
	 * @example
	 * obj.setOrigin(0.5);
	 * 
	 * @param {number} origin - The origin point of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setOrigin(x = 0, y = x) {
		this.origin = { x, y };
		return this;
	}

	/**
	 * @description
	 * Set the fill color of the game object.
	 * 
	 * @example
	 * obj.setFillColor("#FF0000");
	 * 
	 * @param {string} color - The fill color of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setFillColor(fillColor) {
		this.fillColor = fillColor;
		return this;
	}

	/**
	 * @description
	 * Set the stroke/border color of the game object.
	 * 
	 * @example
	 * obj.setStrokeColor("#FF0000");
	 * 
	 * @param {string} color - The stroke color of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 */
	setStrokeColor(strokeColor) {
		this.strokeColor = strokeColor;
		return this;
	}

	/**
	 * @description
	 * Set the stroke/border width of the game object.
	 * 
	 * @example
	 * obj.setStrokeWidth(2);
	 * 
	 * @param {number} width - The stroke width of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setStrokeWidth(strokeWidth) {
		this.strokeWidth = strokeWidth;
		return this;
	}

	/**
	 * @description
	 * Set the visibility of the game object.
	 * 
	 * @example
	 * obj.setVisible(false);
	 * 
	 * @param {boolean} visible - The visibility of the game object.
	 * @returns {Impacto.GameObjects.GameObject2D}
	 * @memberof Impacto.GameObjects.GameObject2D
	 */
	setVisible(isVisible) {
		this.visible = isVisible;
		return this;
	}

	/**
	 * @description
	 * Private (Core) function to render the game object.
	 * 
	 * @private
	 * @readonly
	 * @memberof Impacto.GameObjects.GameObject2D
	 * @param {number} deltaTime - The time since the last frame.
	 */
	_render(deltaTime) {
		if (!this.visible) return;

		CanvasStateInstance.context.save();

		// Scale
		CanvasStateInstance.context.translate(this.x, this.y);
		CanvasStateInstance.context.scale(this.scale.x, this.scale.y);
		CanvasStateInstance.context.translate(-this.x, -this.y);

		// Rotation
		CanvasStateInstance.context.translate(this._x, this._y);
		CanvasStateInstance.context.rotate(this.rotation);
		CanvasStateInstance.context.translate(-this._x, -this._y);

		CanvasStateInstance.context.fillStyle = this.fillColor;
		CanvasStateInstance.context.strokeStyle = this.strokeColor;
		CanvasStateInstance.context.lineWidth = this.strokeWidth;
		this._renderType(deltaTime);

		CanvasStateInstance.context.restore();
	}
}
