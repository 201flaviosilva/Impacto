/**
 * @class State
 * @description State class
 * @memberof Impacto
 * @instance
 */
export default class State {
    Assets: AssetsManager;
    Canvas: CanvasState;
    Global: GlobalStateManager;
}
export const StateInstance: State;
import AssetsManager from "./AssetsManager.js";
import CanvasState from "./CanvasState.js";
import GlobalStateManager from "./GlobalStateManager.js";
