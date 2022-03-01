import GameObject from "../GameObjectBase.js";
import CommonMethods from "./CommonMethods.js";

export default class Circle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;
	}

	get x() { return this._x - this.radius * this.origin.x; } // Get the position X relative to the origin
	get y() { return this._y - this.radius * this.origin.y; } // Get the position Y relative to the origin
}

Object.assign(Circle.prototype, CommonMethods);
