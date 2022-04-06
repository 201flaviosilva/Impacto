import ImpactoMath from "./Math.js";

export default class Utils {
	constructor() {
		this.Math = new ImpactoMath();
	}

	getVersion() { return "Impacto: 0.8.1"; }
}

export const UtilsInstance = new Utils();
