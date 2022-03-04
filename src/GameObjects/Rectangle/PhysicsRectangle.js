import PhysicsGameObject from "../PhysicsGameObject.js";
import CommonMethods from "./CommonMethods.js";
import { CanvasInstance } from "../../Utils/Canvas.js";
import Types from "../Types.js";

export default class PhysicsRectangle extends PhysicsGameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = Types.rectangle;
	}

	get x() { return this._x - this.width * this.origin.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y; } // Get the position Y relative to the origin

	// ----- Private methods -----
	_debugBody() {
		CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}

Object.assign(PhysicsRectangle.prototype, CommonMethods);
