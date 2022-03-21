import Draw from "./Draw.js";
import Vector2 from "./Vector2.js";
import ImpactoMath from "./Math.js";

export default class Utils {
	constructor() {
		this.Draw = new Draw();
		this.Math = new ImpactoMath();
		this.Vector2 = Vector2;
	}

	getVersion() { return "Impacto: 0.8.1"; }
}

export const UtilsInstance = new Utils();
