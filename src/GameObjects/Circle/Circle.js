import GameObject2D from "../GameObject2D.js";
import CommonMethods from "./CommonMethods.js";
import Types from "../Types.js";

export default class Circle extends GameObject2D {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;

		this._type = Types.circle;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }
	get x() { return this._x - this.radius * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.radius * this.origin.y * this.scale.y; } // Get the position Y relative to the origin
}

Object.assign(Circle.prototype, CommonMethods);
