import GameObject from "../GameObjectBase.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

export default class Triangle extends GameObject {
	constructor(x, y, width, height, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = Types.triangle;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }

	// Positions Based in the origin
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }

	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }
	getCenterX() { return this.x + this.width / 2; }
	getCenterY() { return this.y + this.height / 2; }

	// Get Real Positions
	getRealTop() { return this._y; }
	getRealBottom() { return this._y + this.height; }
	getRealLeft() { return this._x; }
	getRealRight() { return this._x + this.width; }
	getRealCenterX() { return this._x + this.width / 2; }
	getRealCenterY() { return this._y + this.height / 2; }

	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	setSize(width, height = width) {
		this.width = width;
		this.height = height;
		return this;
	}

	// Calculate the area of the triangle
	getArea() { return this.width * this.height / 2; }
	getPerimeter() { return this.width * 3; }
	getVertices() {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width / 2, y: this.y + this.height },
		];
	}

	// Private
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
