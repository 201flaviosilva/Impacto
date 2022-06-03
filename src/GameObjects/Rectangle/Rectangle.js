import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

/**
 * @param {number} x - The horizontal position of this Rectangle in the world.
 * @param {number} y - The vertical position of this Rectangle in the world.
 * @param {number} [width=100] - The width of the rectangle.
 * @param {number} [height=100] - The height of the rectangle.
 * @param {number | string} [fillColor=0xffffff] - The color the rectangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the rectangle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The Rectangle Shape is a 2D Game Object that can be added to a Scene. 
 * Its possible to set a rounder corner radius.
 * 
 * @example
 * const rect = new Impacto.GameObjects.Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);
 * 
 * @class Rectangle
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors
 */
export default class Rectangle extends GameObject2D {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this.setRound(0);

		this._type = Types.rectangle;
	}

	/**
	 * @description
	 * Sets the X position of the rectangle.
	 * 
	 * @param {number} x - The horizontal position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	set x(x) { this.setX(x); }

	/**
	 * @description
	 * Gets the Y position of the rectangle.
	 * 
	 * @param {number} y - The vertical position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }


	/**
	 * @description
	 * Returns the top side position of the rectangle.
	 * 
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getTop() { return this.y; }

	/**
	 * @description
	 * Returns the bottom side position of the rectangle.
	 * 
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getBottom() { return this.y + this.height; }

	/**
	 * @description
	 * Returns the left side position of the rectangle.
	 * 
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getLeft() { return this.x; }

	/**
	 * @description
	 * Returns the right side position of the rectangle.
	 * 
	 * 
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getRight() { return this.x + this.width; }

	/**
	 * @description
	 * Returns the center X position of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5
	 * 
	 * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getCenterX() { return this.getLeft() + this.width / 2; }

	/**
	 * @description
	 * Returns the center Y position of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5
	 * 
	 * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
	 * @memberof Rectangle
	 */
	getCenterY() { return this.getTop() + this.height / 2; }

	/**
	 * @description
	 * Returns the real top side position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealTop(); // 10
	 * 
	 * @returns {number} The real vertical position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealTop() { return this._y; }

	/**
	 * @description
	 * Returns the real bottom side position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealBottom(); // 110
	 * 
	 * @returns {number} The real vertical position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealBottom() { return this._y + this.height; }

	/**
	 * @description
	 * Returns the real left side position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealLeft(); // 10
	 * 
	 * @returns {number} The real horizontal position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealLeft() { return this._x; }

	/**
	 * @description
	 * Returns the real right side position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealRight(); // 110
	 * 
	 * @returns {number} The real horizontal position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealRight() { return this._x + this.width; }

	/**
	 * @description
	 * Returns the real center X position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterX(); // 55
	 * 
	 * @returns {number} The real horizontal position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealCenterX() { return this.getRealLeft() + this.width / 2; }

	/**
	 * @description
	 * Returns the real center Y position of the rectangle. (Not relative to the origin)
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterY(); // 55
	 * 
	 * @returns {number} The real vertical position of this Rectangle in the world.
	 * @memberof Rectangle
	 */
	getRealCenterY() { return this.getRealTop() + this.height / 2; }

	/**
	 * @description
	 * Sets the width of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setWidth(200);
	 * 
	 * @param {number} width - The new width of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	/**
	 * @description
	 * Sets the height of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setHeight(200);
	 * 
	 * @param {number} height - The new height of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	/**
	 * @description
	 * Sets the size of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setSize(50, 50);
	 * 
	 * @param {number} width - The new width of this Rectangle.
	 * @param {number} height - The new height of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setSize(width, height = width, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.width = width;
		this.height = height;
		return this;
	}

	/**
	 * @description
	 * Sets the position  and size of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setPositionAndSize(20, 30, 50, 75);
	 * 
	 * @param {number} x - The new horizontal position of this Rectangle.
	 * @param {number} y - The new vertical position of this Rectangle.
	 * @param {number} width - The new width of this Rectangle.
	 * @param {number} height - The new height of this Rectangle.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	refresh(x, y, width, height) {
		this.setPosition(x, y, this.z, true);
		this.setSize(width, height, true);
		return this;
	}

	/**
	 * @description
	 * Sets the roundedness of the rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(10, 10).setRoundedness(10);
	 * 
	 * @param {number} topLeft - The new roundedness of the top left corner.
	 * @param {number} topRight - The new roundedness of the top right corner.
	 * @param {number} bottomLeft - The new roundedness of the bottom left corner.
	 * @param {number} bottomRight - The new roundedness of the bottom right corner.
	 * @returns {Rectangle} This Rectangle.
	 * @memberof Rectangle
	 */
	setRound(topLeft = 0, topRight = topLeft, bottomLeft = topLeft, bottomRight = topLeft) {
		if (typeof topLeft === "number") {
			this.round = {
				topLeft: topLeft,
				topRight: topRight,
				bottomLeft: bottomLeft,
				bottomRight: bottomRight,
			};
		} else if (typeof topLeft === "object") {
			this.round = {
				topLeft: topLeft.topLeft || 0,
				topRight: topLeft.topRight || 0,
				bottomLeft: topLeft.bottomLeft || 0,
				bottomRight: topLeft.bottomRight || 0,
			}
		}

		return this;
	}

	/**
	 * @description
	 * Gets the bounding box of this Rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }
	 * 
	 * @returns {Object} The bounding box of this Rectangle.
	 * @memberof Rectangle
	 */
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; }

	/**
	 * @description
	 * Gets the area of this Rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getArea(); // 10000
	 * 
	 * @returns {number} The area of this Rectangle.
	 * @memberof Rectangle
	 * @readonly
	 */
	getArea() { return this.width * this.height; }

	/**
	 * @description
	 * Gets the perimeter of this Rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getPerimeter(); // 200
	 * 
	 * @returns {number} The perimeter of this Rectangle.
	 * @memberof Rectangle
	 * @readonly
	 */
	getPerimeter() { return 2 * (this.width + this.height); }

	/**
	 * @description
	 * Gets the point of all vertices of this Rectangle.
	 * 
	 * @example
	 * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getVertices(); // [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]
	 * 
	 * @returns {Array} All vertices of this Rectangle.
	 * @memberof Rectangle
	 * @readonly
	 */
	getVertices() {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width, y: this.y + this.height },
			{ x: this.x, y: this.y + this.height }
		];
	}

	/**
	 * @description
	 * Private (Core) function to render the position of the rectangle.
	 * 
	 * @private
	 * @readonly
	 * @memberof Rectangle
	 */
	_renderType() {
		// Ref: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.x + this.round.topLeft, this.y);
		CanvasStateInstance.context.lineTo(this.x + this.width - this.round.topRight, this.y);
		CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.round.topRight);
		CanvasStateInstance.context.lineTo(this.x + this.width, this.y + this.height - this.round.bottomRight);
		CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.round.bottomRight, this.y + this.height);
		CanvasStateInstance.context.lineTo(this.x + this.round.bottomLeft, this.y + this.height);
		CanvasStateInstance.context.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.round.bottomLeft);
		CanvasStateInstance.context.lineTo(this.x, this.y + this.round.topLeft);
		CanvasStateInstance.context.quadraticCurveTo(this.x, this.y, this.x + this.round.topLeft, this.y);
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
		CanvasStateInstance.context.closePath();
	}
}
