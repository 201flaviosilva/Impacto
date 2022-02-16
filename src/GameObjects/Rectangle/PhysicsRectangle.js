import PhysicsGameObject from "../PhysicsGameObject.js";
import CommonMethods from "./CommonMethods.js";
import { CanvasInstance } from "../../Utils/Canvas.js";

export default class Rectangle extends PhysicsGameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = "Rect";
	}

	// ----- Private methods -----
	_debugBody() {
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}

Object.assign(Rectangle.prototype, CommonMethods);
