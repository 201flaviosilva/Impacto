import GameObject from "./GameObject.js";

import { CanvasInstance } from "../Utils/Canvas.js";

export default class Rectangle extends GameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = "Rect";
	}

	// Get Positions
	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }

	getCenterX() { return this.x + this.width / 2; }
	getCenterY() { return this.y + this.height / 2; }

	// Size
	setWidth(width) { this.setSize(width, this.height); }
	setHeight(height) { this.setSize(this.width, height); }
	setSize(width, height = width, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.width = width;
		this.height = height;
	}
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; }
	getArea() { return this.width * this.height; }
	getVertices() {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width, y: this.y + this.height },
			{ x: this.x, y: this.y + this.height }
		];
	}

	// Update position and size of the rectangle (used mostly in static objects)
	refresh(x, y, width, height) {
		this.setPosition(x, y, this.z, true);
		this.setSize(width, height, true);
	}

	// ----- Private methods -----
	_renderType() {
		CanvasInstance.context.fillRect(this.x, this.y, this.width, this.height);
		CanvasInstance.context.strokeRect(this.x, this.y, this.width, this.height);
	}

	_debugBody() {
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
