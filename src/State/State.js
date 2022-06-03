import AssetsManager from "./AssetsManager.js";
import CanvasState from "./CanvasState.js";
import GlobalStateManager from "./GlobalStateManager.js";

/**
 * @namespace Impacto.State
 * 
 * @property {Impacto.Inputs.AssetsManager} Assets
 * @property {Impacto.Inputs.CanvasState} Canvas
 * @property {Impacto.Inputs.GlobalStateManager} Global
 */
export default class State {
	constructor() {
		this.Assets = new AssetsManager();
		this.Canvas = new CanvasState();
		this.Global = new GlobalStateManager();
	}
}

export const StateInstance = new State();
