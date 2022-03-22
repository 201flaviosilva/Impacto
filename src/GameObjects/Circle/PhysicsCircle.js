import GameObject from "../PhysicsGameObject.js";
import CommonMethods from "./CommonMethods.js";
import Types from "../Types.js";

export default class PhysicsCircle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = Types.circle;
	}

	get x() { return this._x - this.radius * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	_debugBody() {
		if (!this.active) return;
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}

Object.assign(PhysicsCircle.prototype, CommonMethods);
