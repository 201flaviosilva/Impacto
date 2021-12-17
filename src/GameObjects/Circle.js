import GameObject from "./GameObject.js";

import PositionPrevisions from "../Utils/PositionPrevisions.js";
const positionPrevisions = new PositionPrevisions();

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
		this._globalStateManager.context.beginPath();
		this._globalStateManager.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this._globalStateManager.context.fill();
		this._globalStateManager.context.stroke();
	}

	_debugBody() {
		if (!this.active) return;
		this._globalStateManager.context.fillStyle = "rgba(0, 0, 0, 0)";
		this._globalStateManager.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
