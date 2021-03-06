import Game from "./Game.js";
import Scene from "./Scenes/Scene.js";

import GameObjects from "./GameObjects/GameObjects.js";

import Inputs from "./Inputs/Inputs.js"

import State from "./State/State.js";
import Utils from "./Utils/Utils.js";

/**
 * @namespace Impacto
 * 
 * @property {Impacto.Game} Game
 * @property {Impacto.Scenes.Scene} Scene
 * @property {Impacto.GameObjects} GameObjects
 * @property {Impacto.Inputs} Inputs
 * @property {Impacto.State} State
 * @property {Impacto.Utils} Utils
 */
export default (function () {
	return {
		// Game 
		Game: Game,

		// Scenes
		Scene: Scene,

		// GameObjects
		GameObjects: new GameObjects(),

		// Inputs
		Inputs: new Inputs(),

		// Utils
		State: new State(),
		Utils: new Utils(),
	}
})();
