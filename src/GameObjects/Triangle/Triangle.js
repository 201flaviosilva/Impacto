import GameObject from "../GameObjectBase.js";
import { CanvasInstance } from "../../Utils/Canvas.js";
import Types from "../Types.js";

export default class Triangle extends GameObject {
	constructor(x, y, width, height, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = Types.triangle;
	}

	// Positions Based in the origin
	get x() { return this._x - this.width * this.origin.x; }
	get y() { return this._y - this.height * this.origin.y; }

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
		CanvasInstance.context.beginPath();
		CanvasInstance.context.moveTo(this.x, this.y);
		CanvasInstance.context.lineTo(this.x + this.width, this.y);
		CanvasInstance.context.lineTo(this.x + this.width / 2, this.y + this.height);
		CanvasInstance.context.closePath();
		CanvasInstance.context.fill();
		CanvasInstance.context.stroke();
	}
}
