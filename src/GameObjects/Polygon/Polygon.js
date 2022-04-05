import GameObject from "../GameObjectBase.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

export default class Polygon extends GameObject {
	constructor(x, y, vertices = [], fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.vertices = vertices;
		this.close = true;

		this._type = Types.polygon;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }
	get x() { return this._x - this.width * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	get width() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.x));
	}

	get height() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.y));
	}

	getTop() {
		if (this.vertices.length === 0) return 0;
		return Math.min(...this.vertices.map(v => v.y + this.y));
	}

	getBottom() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.y + this.y));
	}

	getLeft() {
		if (this.vertices.length === 0) return 0;
		return Math.min(...this.vertices.map(v => v.x + this.x));
	}

	getRight() {
		if (this.vertices.length === 0) return 0;
		return Math.max(...this.vertices.map(v => v.x + this.x));
	}

	getCenterX() { return this.x + this.width / 2; }
	getCenterY() { return this.y + this.height / 2; }
	getCenter() { return { x: this.getCenterX(), y: this.getCenterY() }; }

	add(x, y) {
		this.vertices.push({ x, y });
		return this;
	}

	remove(x, y) {
		const index = this.vertices.findIndex(vertex => vertex.x === x && vertex.y === y);
		if (index !== -1) this.vertices.splice(index, 1);
		return this;
	}

	setClose(isClose) {
		this.close = isClose;
		return this;
	}

	getBounds() {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		};
	}

	getVertices() { return this.vertices; }


	// Private
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
