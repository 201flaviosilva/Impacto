import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

/**
 * @param {number} x - The horizontal position of this Polygon in the world.
 * @param {number} y - The vertical position of this Polygon in the world.
 * @param {vertices} vertices - The vertices of this Polygon.
 * @param {number | string} [fillColor=0xffffff] - The color the Polygon will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Polygon, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * This class will draw a polygon on the canvas.
 * 
 * @example
 * const myPolygon = new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20], "#ff0000", 0x00ff00);
 * 
 * @class Polygon
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors 
 */
export default class Polygon extends GameObject2D {
	constructor(x, y, vertices = [], fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.vertices = vertices;
		this.close = true;

		this._type = Types.polygon;
	}

	/**
	 * Sets the X position of the Polygon.
	 * 
	 * @param {number} x - The horizontal position of this Polygon in the world.
	 * @memberof Polygon
	 */
	set x(x) { this.setX(x); }

	/**
	 * Sets the Y position of the Polygon.
	 * 
	 * @param {number} y - The vertical position of this Polygon in the world.
	 * @memberof Polygon
	 */
	set y(y) { this.setY(y); }

	/**
	 * @returns {number} The horizontal position of this Polygon in the world relative to the origin.
	 * @memberof Polygon
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; } // Get the position X relative to the origin

	/**
	 * @returns {number} The vertical position of this Polygon in the world relative to the origin.
	 * @memberof Polygon
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	/**
	 * @returns {number} The width of this Polygon.
	 * @memberof Polygon
	 */
	get width() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.x));
	}

	/**
	 * @returns {number} The height of this Polygon.
	 * @memberof Polygon
	 */
	get height() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.y));
	}

	/**
	 * Returns the topmost point of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getTop(); // 10
	 * 
	 * @returns {number} The topmost point of the polygon
	 * @memberof Polygon
	 */
	getTop() {
		if (this.vertices.length === 0) return 0;
		return Math.min(...this.vertices.map(v => v.y + this.y));
	}

	/**
	 * Returns the bottommost point of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBottom(); // 20
	 * 
	 * @returns {number} The bottommost point of the polygon
	 * @memberof Polygon
	 */
	getBottom() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.y + this.y));
	}

	/**
	 * Returns the leftmost point of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getLeft(); // 10
	 * 
	 * @returns {number} The leftmost point of the polygon
	 * @memberof Polygon
	 */
	getLeft() {
		if (this.vertices.length === 0) return 0;
		return Math.min(...this.vertices.map(v => v.x + this.x));
	}

	/**
	 * Returns the rightmost point of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getRight(); // 20
	 * 
	 * @returns {number} The rightmost point of the polygon
	 * @memberof Polygon
	 */
	getRight() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.x + this.x));
	}

	/**
	 * Returns the horizontal center of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterX(); // 15
	 * 
	 * @returns {number} The horizontal center of the polygon
	 * @memberof Polygon
	 */
	getCenterX() { return this.x + this.width / 2; }

	/**
	 * Returns the vertical center of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterY(); // 15
	 * 
	 * @returns {number} The vertical center of the polygon
	 * @memberof Polygon
	 */
	getCenterY() { return this.y + this.height / 2; }

	/**
	 * Returns the center of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenter(); // {x: 15, y: 15}
	 * 
	 * @returns {Object} The center of the polygon
	 * @memberof Polygon
	 */
	getCenter() { return { x: this.getCenterX(), y: this.getCenterY() }; }

	/**
	 * Add a new point to the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).addPoint(0, 0);
	 * 
	 * @param {number} x - The x coordinate of the point
	 * @param {number} y - The y coordinate of the point
	 * @returns {Polygon} The polygon itself
	 * @memberof Polygon
	 */
	add(x, y) {
		this.vertices.push({ x, y });
		return this;
	}

	/**
	 * Remove a point from the polygon based in the coordinates
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint(10, 10);
	 * 
	 * @param {number} x - The x coordinate of the point
	 * @param {number} y - The y coordinate of the point
	 * @returns {Polygon} The polygon itself
	 * @memberof Polygon
	 */
	remove(x, y) {
		const index = this.vertices.findIndex(vertex => vertex.x === x && vertex.y === y);
		if (index !== -1) this.vertices.splice(index, 1);
		return this;
	}

	/**
	 * Remove a point from the polygon based in the object {x, y}
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint({x: 10, y: 10});
	 * 
	 * @param {Object} point - The point to be removed
	 * @returns {Polygon} The polygon itself
	 * @memberof Polygon
	 */
	removePoint(point) {
		return this.remove(point.x, point.y);
	}

	/**
	 * Remove a point from the polygon based in the index
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removeIndex(0);
	 * 
	 * @param {number} index - The index of the point
	 * @returns {Polygon} The polygon itself
	 * @memberof Polygon
	 */
	removeIndex(index) {
		if (index !== -1) this.vertices.splice(index, 1);
		return this;
	}

	/**
	 * Close the last point to the first point
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).setClose(true);
	 * 
	 * @param {boolean} close - Whether the polygon should be closed or not
	 * @returns {Polygon} The polygon itself
	 * @memberof Polygon
	 */
	setClose(isClose) {
		this.close = isClose;
		return this;
	}

	/**
	 * Returns bounds of the polygon (the most top left and the most bottom right points)
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBounds(); // {x: 10, y: 10, width: 20, height: 20}
	 * 
	 * @returns {Object} The bounds of the polygon
	 * @memberof Polygon
	 */
	getBounds() {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		};
	}

	/**
	 * Returns the vertices of the polygon
	 * 
	 * @example
	 * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getVertices(); // [{x: 10, y: 10}, {x: 20, y: 20}, {x: 10, y: 20}]
	 * 
	 * @returns {Object[]} The vertices of the polygon
	 * @memberof Polygon
	 */
	getVertices() { return this.vertices; }

	/**
	 * Private (Core) function to render.
	 * 
	 * @memberof Polygon
	 * @private
	 */
	_renderType() {
		if (this.vertices.length === 0) return;

		CanvasStateInstance.context.translate(this.x, this.y);

		CanvasStateInstance.context.beginPath();

		CanvasStateInstance.context.moveTo(this.vertices[0].x, this.vertices[0].y);
		for (let i = 1; i < this.vertices.length; i++) {
			CanvasStateInstance.context.lineTo(this.vertices[i].x, this.vertices[i].y);
		}
		if (this.close) CanvasStateInstance.context.closePath();

		CanvasStateInstance.context.stroke();
		CanvasStateInstance.context.fill();
	}
}
