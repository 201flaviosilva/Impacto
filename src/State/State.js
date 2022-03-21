import CanvasState from "./CanvasState.js";
import GlobalStateManager from "./GlobalStateManager.js";


export default class Utils {
	constructor() {
		this.Canvas = new CanvasState();
		this.Global = new GlobalStateManager();
	}
}

export const UtilsInstance = new Utils();
