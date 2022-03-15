import PhysicsGameObject from "../PhysicsGameObject.js";
import CommonMethods from "./CommonMethods.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";

export default class Rectangle extends PhysicsGameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = "Rect";

		this.setOrigin(0);
	}

	get x() { return this._x - this.width * this.origin.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y; } // Get the position Y relative to the origin

	// ----- Private methods -----
	_debugBody() {
		CanvasStateInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasStateInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}

Object.assign(Rectangle.prototype, CommonMethods);
