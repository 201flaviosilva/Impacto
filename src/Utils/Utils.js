import ImpactoMath from "./Math.js";

/**
 * @namespace Impacto.Utils
 * 
 * @property {Impacto.Utils.Math} Math
 */
export default class Utils {
	constructor() {
		this.Math = new ImpactoMath();
	}

	/**
	 * @description 
	 * Returns teh current version of the library
	 * 
	 * @example
	 * console.log(Impacto.Utils.getVersion());
	 * 
	 * @returns {String}
	 * @memberof Impacto.Utils
	 * @method getVersion
	 */
	getVersion() { return "Impacto: 0.9.0-0"; }
}

export const UtilsInstance = new Utils();
