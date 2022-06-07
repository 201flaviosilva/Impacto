import ImpactoMath from "./Math.js";
import Package from "../../package.json";

/**
 * @class Utils
 * @description Utils class
 * @instance
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
	 * @returns {String} The current version of the library
	 * @memberof Utils
	 * @static
	 */
	static getVersion() { return Package.version; }
}

export const UtilsInstance = new Utils();
