import Canvas from "./Canvas.js";
import CollisionDetection from "./CollisionDetection.js";
import Vector2 from "./Vector2.js";
import ImpactoMath from "./Math.js";

export default class Utils {
	constructor() {
		this.Canvas = new Canvas();
		this.CollisionDetection = new CollisionDetection();
		this.Math = new ImpactoMath();
		this.Vector2 = Vector2;
	}

	getVersion() { return "0.7.2"; }
}

export const UtilsInstance = new Utils();
