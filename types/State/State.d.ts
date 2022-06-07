/**
 * @namespace Impacto.State
 *
 * @property {Impacto.Inputs.AssetsManager} Assets
 * @property {Impacto.Inputs.CanvasState} Canvas
 * @property {Impacto.Inputs.GlobalStateManager} Global
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
//# sourceMappingURL=State.d.ts.map