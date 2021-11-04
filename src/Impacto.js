import Game from "./Game.js";
import Scene from "./Scenes/Scene.js";

import Rectangle from "./GameObjects/Rectangle.js";
import Circle from "./GameObjects/Circle.js";

import Utils from "./Utils/Utils.js";

export default (function () {
	return {
		Game: Game,

		// Scenes
		Scene: Scene,

		// GameObjects
		Rectangle: Rectangle,
		Circle: Circle,

		// Utils
		Utils: new Utils(),
	}
})();
