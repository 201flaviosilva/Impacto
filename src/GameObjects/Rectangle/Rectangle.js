import GameObject from "../GameObjectBase.js";
import CommonMethods from "./CommonMethods.js";

export default class Rectangle extends GameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;
	}
}

Object.assign(Rectangle.prototype, CommonMethods);
