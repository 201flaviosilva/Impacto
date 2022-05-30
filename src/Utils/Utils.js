import ImpactoMath from "./Math.js";
import Package from "../../package.json";

/**
 * @class Utils
 * @description Utils class
 * @memberof Impacto
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
	 * @returns {String}
	 * @memberof Impacto.Utils
	 * @method getVersion
	 */
	getVersion() { return Package.version; }
}

export const UtilsInstance = new Utils();
