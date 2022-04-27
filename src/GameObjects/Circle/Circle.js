import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

/**
 * @param {number} x - The horizontal position of this Circle in the world.
 * @param {number} y - The vertical position of this Circle in the world.
 * @param {number} [radius=10] - The radius of this Circle.
 * @param {number} [fillColor=0xffffff] - The color the Circle will be filled with, i.e. 0xff0000 for red.
 * @param {number} [strokeColor=0x000000] - The color of the border of the Circle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * Circle is a class that will draw a circle on the canvas.
 * 
 * @example
 * const circ = new Impacto.GameObjects.Circle(400, 300, 75, "#ff0000", 0x00ff00);
 * 
 * @class Circle
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Circle extends GameObject2D {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = Types.circle;
	}

	/**
	 * @description
	 * Sets the X position of the Circle.
	 * 
	 * @example
	 * circ.x = 100;
	 * 
	 * @param {number} x - The horizontal position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 */
	set x(x) { this.setX(x); }

	/**
	 * @description
	 * Sets the Y position of the Circle.
	 * 
	 * @example
	 * circ.y = 100;
	 * 
	 * @param {number} y - The vertical position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @readonly
	 * @memberof Impacto.GameObjects.Circle
	 */
	get x() { return this._x - this.radius * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @readonly
	 * @memberof Impacto.GameObjects.Circle
	 */
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; }

	/**
	 * @description
	 * Sets the radius of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).setRadius(100); // 100
	 * 
	 * @param {number} radius - The radius of this Circle.
	 * @returns {Impacto.GameObjects.Circle} This Circle.
	 * @memberof Impacto.GameObjects.Circle
	 * @public
	 * @instance
	 */
	setRadius(radius) {
		this.radius = radius;
		return this;
	}

	/**
	 * @description
	 * Returns the top side position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 50).getTop(); // 275
	 * 
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getTop() { return this.y - this.radius; }

	/**
	 * @description
	 * Returns the bottom side position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getBottom(); // 325
	 * 
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getBottom() { return this.y + this.radius; }

	/**
	 * @description
	 * Returns the left side position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getLeft(); // 375
	 * 
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getLeft() { return this.x - this.radius; }

	/**
	 * @description
	 * Returns the right side position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRight(); // 425
	 * 
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRight() { return this.x + this.radius; }

	/**
	 * @description
	 * Returns the center X position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getCenterX(); // 400
	 * 
	 * @returns {number} The horizontal position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getCenterX() { return this.x; }

	/**
	 * @description
	 * Returns the center Y position of the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getCenterY(); // 300
	 * 
	 * @returns {number} The vertical position of this Circle in the world relative to the origin.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getCenterY() { return this.y; }

	/**
	 * @description
	 * Returns the real top side position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealTop(); // 275
	 * 
	 * @returns {number} The vertical position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealTop() { return this._y - this.radius; }

	/**
	 * @description
	 * Returns the real bottom side position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealBottom(); // 325
	 * 
	 * @returns {number} The vertical position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealBottom() { return this._y + this.radius; }

	/**
	 * @description
	 * Returns the real left side position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealLeft(); // 375
	 * 
	 * @returns {number} The horizontal position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealLeft() { return this._x - this.radius; }

	/**
	 * @description
	 * Returns the real right side position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealRight(); // 425
	 * 
	 * @returns {number} The horizontal position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealRight() { return this._x + this.radius; }

	/**
	 * @description
	 * Returns the real center X position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealCenterX(); // 400
	 * 
	 * @returns {number} The horizontal position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealCenterX() { return this._x; }

	/**
	 * @description
	 * Returns the real center Y position of the Circle (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getRealCenterY(); // 300
	 * 
	 * @returns {number} The vertical position of this Circle in the world.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 */
	getRealCenterY() { return this._y; }

	/**
	 * @description
	 * Returns a box that encloses the Circle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Circle(400, 300, 75).getBounds(); // { x: 375, y: 275, width: 150, height: 150 }
	 * 
	 * @returns {Impacto.GameObjects.Box} A box that encloses the Circle.
	 * @memberof Impacto.GameObjects.Circle
	 * @readonly
	 * @public
	 * @instance
	 * @function
	 */
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; }

	/**
	 * @description
	 * Private (Core) function to render the position of the Circle.
	 * 
	 * @memberof Impacto.GameObjects.Circle
	 * @private
	 * @readonly
	 */
	_renderType() {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
}
