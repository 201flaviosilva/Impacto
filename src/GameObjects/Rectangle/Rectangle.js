import GameObject from "../GameObjectBase.js";
import CommonMethods from "./CommonMethods.js";
import Types from "../Types.js";

export default class Rectangle extends GameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this.setRound(0);

		this._type = Types.rectangle;
	}

	set x(x) { this.setX(x); }
	set y(y) { this.setY(y); }
	get x() { return this._x - this.width * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y * this.scale.y; } // Get the position Y relative to the origin
}

Object.assign(Rectangle.prototype, CommonMethods);
