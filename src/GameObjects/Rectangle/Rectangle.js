import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

export default class Rectangle extends GameObject2D {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this.setRound(0);

		this._type = Types.rectangle;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }
	get x() { return this._x - this.width * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	// Positions Based in the origin
	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }

	getCenterX() { return this.getLeft() + this.width / 2; }
	getCenterY() { return this.getTop() + this.height / 2; }

	// Get Real Positions
	getRealTop() { return this._y; }
	getRealBottom() { return this._y + this.height; }
	getRealLeft() { return this._x; }
	getRealRight() { return this._x + this.width; }

	getRealCenterX() { return this.getRealLeft() + this.width / 2; }
	getRealCenterY() { return this.getRealTop() + this.height / 2; }

	// Size
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}
	setSize(width, height = width, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.width = width;
		this.height = height;
		return this;
	}

	// Update position and size of the rectangle
	refresh(x, y, width, height) {
		this.setPosition(x, y, this.z, true);
		this.setSize(width, height, true);
		return this;
	}

	// The rounded corners do not affect the collision detection
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

	// Utils
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; }
	getArea() { return this.width * this.height; }
	getPerimeter() { return 2 * (this.width + this.height); }
	getVertices() {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width, y: this.y + this.height },
			{ x: this.x, y: this.y + this.height }
		];
	}

	// ----- Private methods -----
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
