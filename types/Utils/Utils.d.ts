/**
 * @class Utils
 * @description Utils class
 * @memberof Impacto
 * @instance
 */
export default class Utils {
    Math: ImpactoMath;
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
    getVersion(): string;
}
export const UtilsInstance: Utils;
import ImpactoMath from "./Math.js";
