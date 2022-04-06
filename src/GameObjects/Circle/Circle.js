import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

export default class Circle extends GameObject2D {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = Types.circle;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }
	get x() { return this._x - this.radius * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	getRadius() { return this.radius; }
	setRadius(radius) { this.radius = radius; }

	// Positions Based in the origin
	getTop() { return this.y - this.radius; }
	getBottom() { return this.y + this.radius; }
	getLeft() { return this.x - this.radius; }
	getRight() { return this.x + this.radius; }

	getCenterX() { return this.x; }
	getCenterY() { return this.y; }

	// Get Real Positions
	getRealTop() { return this._y - this.radius; }
	getRealBottom() { return this._y + this.radius; }
	getRealLeft() { return this._x - this.radius; }
	getRealRight() { return this._x + this.radius; }

	getRealCenterX() { return this._x; }
	getRealCenterY() { return this._y; }

	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; }

	// ----- Private methods -----
	_renderType() {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
}
