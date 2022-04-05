import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

export default class Line extends GameObject2D {
	constructor(x, y, endX, endY, strokeColor = "#000000") {
		super(x, y, "none", strokeColor);
		this.endX = endX;
		this.endY = endY;

		this._type = Types.line;
	}

	get width() { return this.endX - this._x; }
	get height() { return this.endY - this._y; }

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

	// Set position based in the X
	setWidth(width) {
		this.setSize(width, this.height);
		return this;
	}

	// Set position based in the Y
	setHeight(height) {
		this.setSize(this.width, height);
		return this;
	}

	// Set position based in the X and Y
	setSize(width, height) {
		this.endX = this._x + width;
		this.endY = this._y + height;
		return this;
	}

	// Move line from X to the specified X
	setEndX(endX) {
		this.setEnd(endX, this.endY);
		return this;
	}

	// Move line from X to the specified X
	setEndY(endY) {
		this.setEnd(this.endX, endY);
		return this;
	}

	// Move line from X to the specified X and the same for Y
	setEnd(x, y) {
		this.endX = x;
		this.endY = y;
		return this;
	}

	// Private
	_renderType() {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.x, this.y);
		CanvasStateInstance.context.lineTo(this.endX, this.endY);
		CanvasStateInstance.context.closePath();
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
}
