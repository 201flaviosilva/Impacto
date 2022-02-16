import GameObject from "../GameObjectBase.js";
import CommonMethods from "./CommonMethods.js";

export default class Circle extends GameObject {
	constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.radius = radius;
	}
}

Object.assign(Circle.prototype, CommonMethods);
