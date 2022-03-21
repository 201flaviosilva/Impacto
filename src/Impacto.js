import Game from "./Game.js";
import Scene from "./Scenes/Scene.js";

import GameObjects from "./GameObjects/GameObjects.js";

import Inputs from "./Inputs/Inputs.js"

import State from "./State/State.js";
import Physics from "./Physics/Physics.js";
import Utils from "./Utils/Utils.js";

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
		Physics: new Physics(),
		Utils: new Utils(),
	}
})();
