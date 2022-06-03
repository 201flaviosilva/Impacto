import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

/**
 * @param {number} x - The horizontal position in the world.
 * @param {number} y - The vertical position in the world.
 * @param {number} endX - The horizontal position of the end of the line.
 * @param {number} endY - The vertical position of the end of the line.
 * @param {number | string} [strokeColor=0x000000] - The color of the border, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * Line is a class that will draw a line on the canvas.
 * 
 * @example
 * const myLine = new Impacto.GameObjects.Line(400, 300, 450, 350, 0x00ff00);
 * 
 * @class Line
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors
 */
export default class Line extends GameObject2D {
	constructor(x, y, endX, endY, strokeColor = "#000000") {
		super(x, y, "none", strokeColor);
		this.endX = endX;
		this.endY = endY;

		this._type = Types.line;
	}

	/**
	 * @returns {number} The width of the line.
	 * @memberof Line
	 */
	get width() { return this.endX - this._x; }

	/**
	 * @returns {number} The height of the line.
	 * @memberof Line
	 */
	get height() { return this.endY - this._y; }

	/**
	 * @description
	 * Sets the X position.
	 * 
	 * @example
	 * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
	 * myLine.x = 200;
	 * 
	 * @param {number} x - The horizontal position in the world.
	 * @memberof Line
	 */
	set x(x) { this.setX(x); }

	/**
	 * @description
	 * Sets the Y position.
	 * 
	 * @example
	 * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
	 * myLine.y = 200;
	 * 
	 * @param {number} y - The vertical position in the world.
	 * @memberof Line
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position.
	 * @memberof Line
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	 * @returns {number} The vertical position.
	 * @memberof Line
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }

	/**
	 * @description
	 * Returns the top side position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getTop(); // 300
	 * 
	 * @returns {number} The vertical position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getTop() { return this.y; }

	/**
	 * @description
	 * Returns the bottom side position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getBottom(); // 325
	 * 
	 * @returns {number} The vertical position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getBottom() { return this.y + this.height; }

	/**
	 * @description
	 * Returns the left side position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getLeft(); // 400
	 * 
	 * @returns {number} The horizontal position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getLeft() { return this.x; }

	/**
	 * @description
	 * Returns the right side position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRight(); // 450
	 * 
	 * @returns {number} The horizontal position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getRight() { return this.x + this.width; }

	/**
	 * @description
	 * Returns the center X position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterX(); // 425
	 * 
	 * @returns {number} The horizontal position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getCenterX() { return this.x + this.width / 2; }

	/**
	 * @description
	 * Returns the center Y position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterY(); // 325
	 * 
	 * @returns {number} The vertical position of this Line in the world relative to the origin.
	 * @memberof Line
	 */
	getCenterY() { return this.y + this.height / 2; }

	/**
	 * @description
	 * Returns the real top side position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealTop(); // 300
	 * 
	 * @returns {number} The vertical position of this Line in the world.
	 * @memberof Line
	 */
	getRealTop() { return this._y; }

	/**
	 * @description
	 * Returns the real bottom side position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealBottom(); // 350
	 * 
	 * @returns {number} The vertical position of this Line in the world.
	 * @memberof Line
	 */
	getRealBottom() { return this._y + this.height; }

	/**
	 * @description
	 * Returns the real left side position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealLeft(); // 400
	 * 
	 * @returns {number} The horizontal position of this Line in the world.
	 * @memberof Line
	 */
	getRealLeft() { return this._x; }

	/**
	 * @description
	 * Returns the real right side position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealRight(); // 450
	 * 
	 * @returns {number} The horizontal position of this Line in the world.
	 * @memberof Line
	 */
	getRealRight() { return this._x + this.width; }

	/**
	 * @description
	 * Returns the real center X position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterX(); // 425
	 * 
	 * @returns {number} The horizontal position of this Line in the world.
	 * @memberof Line
	 */
	getRealCenterX() { return this._x + this.width / 2; }

	/**
	 * @description
	 * Returns the real center Y position of the Line (not relative to the origin).
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterY(); // 325
	 * 
	 * @returns {number} The vertical position of this Line in the world.
	 * @memberof Line
	 */
	getRealCenterY() { return this._y + this.height / 2; }

	/**
	 * @description
	 * Sets the end position of the Line based on the width.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setWidth(100);
	 * 
	 * @param {number} width - The new width.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	/**
	 * @description
	 * Sets the end position of the Line based on the height.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setHeight(100);
	 * 
	 * @param {number} height - The new height.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	/**
	 * @description
	 * Sets the end position of the Line based on the size.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setSize(100, 100);
	 * 
	 * @param {number} width - The new width.
	 * @param {number} height - The new height.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setSize(width, height) {
		this.endX = this._x + width;
		this.endY = this._y + height;
		return this;
	}

	/**
	 * @description
	 * Sets the end horizontal position.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndX(500);
	 * 
	 * @param {number} endX - The new horizontal position.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setEndX(endX) {
		this.setEnd(endX, this.endY);
		return this;
	}

	/**
	 * @description
	 * Sets the end vertical position.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndY(500);
	 * 
	 * @param {number} endY - The new vertical position.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setEndY(endY) {
		this.setEnd(this.endX, endY);
		return this;
	}

	/**
	 * @description
	 * Sets the end position of the Line.
	 * 
	 * @example
	 * new Impacto.GameObjects.Line(400, 300, 450, 350).setEnd(500, 400);
	 * 
	 * @param {number} endX - The new horizontal position.
	 * @param {number} endY - The new vertical position.
	 * @returns {Line} This Line.
	 * @memberof Line
	 */
	setEnd(endX, endY) {
		this.endX = endX;
		this.endY = endY;
		return this;
	}

	/**
	 * @description
	 * Private (Core) function to render the position.
	 * 
	 * @private
	 * @memberof Line
	 */
	_renderType() {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.x, this.y);
		CanvasStateInstance.context.lineTo(this.endX, this.endY);
		CanvasStateInstance.context.closePath();
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
}
