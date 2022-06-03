import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

/**
 * @param {number} x - The horizontal position of this Triangle in the world.
 * @param {number} y - The vertical position of this Triangle in the world.
 * @param {number} width - The width of this Triangle.
 * @param {number} height - The height of this Triangle.
 * @param {number | string} [fillColor=0xffffff] - The color the Triangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Triangle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * This class will draw a triangle on the canvas.
 * 
 * @example
 * const myTriangle = new Impacto.GameObjects.Triangle(400, 300, 100, 100, "#ff0000", 0x00ff00);
 * 
 * @class Triangle
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors 
 */
export default class Triangle extends GameObject2D {
	constructor(x, y, width, height, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = Types.triangle;
	}

	/**
	 * Sets the X position of the Triangle.
	 * 
	 * @param {number} x - The horizontal position of this Triangle in the world.
	 * @memberof Triangle
	 */
	set x(x) { this.setX(x); }

	/**
	 * Sets the Y position of the Triangle.
	 * 
	 * @param {number} y - The vertical position of this Triangle in the world.
	 * @memberof Triangle
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Triangle in the world relative to the origin.
	 * @memberof Triangle
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position of this Triangle in the world relative to the origin.
	 * @memberof Triangle
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }

	/**
	 * Returns the top side position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getTop(); // 300
	 * 
	 * @returns {number} The topmost point of the triangle
	 * @memberof Triangle
	 */
	getTop() { return this.y; }

	/**
	 * Returns the bottom side position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getBottom(); // 400
	 * 
	 * @returns {number} The bottommost point of the triangle
	 * @memberof Triangle
	 */
	getBottom() { return this.y + this.height; }

	/**
	 * Returns the left side position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getLeft(); // 400
	 * 
	 * @returns {number} The leftmost point of the triangle
	 * @memberof Triangle
	 */
	getLeft() { return this.x; }

	/**
	 * Returns the right side position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRight(); // 500
	 * 
	 * @returns {number} The rightmost point of the triangle
	 * @memberof Triangle
	 */
	getRight() { return this.x + this.width; }

	/**
	 * Returns the center X position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterX(); // 450
	 * 
	 * @returns {number} The width of the triangle
	 * @memberof Triangle
	 */
	getCenterX() { return this.x + this.width / 2; }

	/**
	 * Returns the center Y position of the triangle, based in the origin.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterY(); // 450
	 * 
	 * @returns {number} The height of the triangle
	 * @memberof Triangle
	 */
	getCenterY() { return this.y + this.height / 2; }

	/**
	 * Returns the real top position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealTop(); // 300
	 * 
	 * @returns {number} The real top position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealTop() { return this._y; }

	/**
	 * Returns the real bottom position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealBottom(); // 400
	 * 
	 * @returns {number} The real bottom position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealBottom() { return this._y + this.height; }

	/**
	 * Returns the real left position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealLeft(); // 400
	 * 
	 * @returns {number} The real left position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealLeft() { return this._x; }

	/**
	 * Returns the real right position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealRight(); // 400
	 * 
	 * @returns {number} The real right position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealRight() { return this._x + this.width; }

	/**
	 * Returns the real center x position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterX(); // 450
	 * 
	 * @returns {number} The real center position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealCenterX() { return this._x + this.width / 2; }

	/**
	 * Returns the real center y position of the triangle in the world.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterY(); // 450
	 * 
	 * @returns {number} The real center position of the triangle in the world
	 * @memberof Triangle
	 */
	getRealCenterY() { return this._y + this.height / 2; }

	/**
	 * Change the width of the triangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setWidth(200); // 200
	 * 
	 * @param {number} width - The new width of the triangle.
	 * @returns {Triangle} The triangle itself.
	 * @memberof Triangle
	 */
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	/**
	 * Change the height of the triangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setHeight(200); // 200
	 * 
	 * @param {number} height - The new height of the triangle.
	 * @returns {Triangle} The triangle itself.
	 * @memberof Triangle
	 */
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	/**
	 * Change the size of the triangle.
	 * 
	 * if the height is not defined, it will be the same as the width.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setSize(200, 200); // 200, 200
	 * 
	 * @param {number} width - The new width of the triangle.
	 * @param {number} height - The new height of the triangle.
	 * @returns {Triangle} The triangle itself.
	 * @memberof Triangle
	 */
	setSize(width, height = width) {
		this.width = width;
		this.height = height;
		return this;
	}

	/**
	 * Calculate the area of the triangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getArea(); // 5000
	 * 
	 * @returns {number} The area of the triangle.
	 * @memberof Triangle
	 */
	getArea() { return this.width * this.height / 2; }

	/**
	 * Calculate the perimeter of the triangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getPerimeter(); // 300
	 * 
	 * @returns {number} The perimeter of the triangle.
	 * @memberof Triangle
	 */
	getPerimeter() { return this.width * 3; }

	/**
	 * Returns the triangle's vertices.
	 * 
	 * @example
	 * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getVertices(); // [
	 *  {"x": 100,"y": 100},
	 *  {"x": 200,"y": 100},
	 *  {"x": 150,"y": 200}]
	 * 
	 * @returns {Object[]} The triangle's vertices.
	 * @memberof Triangle
	 */
	getVertices() {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width / 2, y: this.y + this.height },
		];
	}


	/**
	 * Private (Core) function to render.
	 * 
	 * @memberof Polygon
	 * @private
	 */
	_renderType() {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.x, this.y);
		CanvasStateInstance.context.lineTo(this.x + this.width, this.y);
		CanvasStateInstance.context.lineTo(this.x + this.width / 2, this.y + this.height);
		CanvasStateInstance.context.closePath();
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
}
