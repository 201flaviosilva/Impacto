import AssetsManager from "./AssetsManager.js";
import CanvasState from "./CanvasState.js";
import GlobalStateManager from "./GlobalStateManager.js";

/**
 * @class State
 * @description State class
 * @memberof Impacto
 * @instance
 */
export default class State {
	constructor() {
		this.Assets = new AssetsManager();
		this.Canvas = new CanvasState();
		this.Global = new GlobalStateManager();
	}
}

export const StateInstance = new State();
