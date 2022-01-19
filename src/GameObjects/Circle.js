import GameObject from "./GameObject.js";

import { CanvasInstance } from "../Utils/Canvas.js";

export default class Circle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = "Circle";
	}

	getRadius() { return this.radius; }
	setRadius(radius) { this.radius = radius; }

	getTop() { return this.y - this.radius; }
	getBottom() { return this.y + this.radius; }
	getLeft() { return this.x - this.radius; }
	getRight() { return this.x + this.radius; }

	getCenterX() { return this.x; }
	getCenterY() { return this.y; }

	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; }

	// ----- Private methods -----
	_renderType() {
		CanvasInstance.context.beginPath();
		CanvasInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		CanvasInstance.context.fill();
		CanvasInstance.context.stroke();
	}

	_debugBody() {
		if (!this.active) return;
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
