import GameObject from "../GameObjectBase.js";
import CommonMethods from "./CommonMethods.js";
import Types from "../Types.js";

export default class Circle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = Types.circle;
	}

	get x() { return this._x - this.radius * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; } // Get the position Y relative to the origin
}

Object.assign(Circle.prototype, CommonMethods);
