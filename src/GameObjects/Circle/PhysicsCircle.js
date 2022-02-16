import GameObject from "../PhysicsGameObject.js";
import CommonMethods from "./CommonMethods.js";

export default class Circle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = "Circle";
	}

	_debugBody() {
		if (!this.active) return;
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}

Object.assign(Circle.prototype, CommonMethods);
