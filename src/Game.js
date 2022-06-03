import { AssetsManagerInstance } from "./State/AssetsManager.js";
import { CanvasStateInstance } from "./State/CanvasState.js";
import CoreGameManager from "./Core/CoreGameManager.js";

/**
 * @param {Object} config - The configuration of the game
 * 
 * @class Game
 * @description The main class of the game.
 * 
 * @example
 * class Game extends Impacto.Scene {
 * 	start() {
 * 		this.rect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000");
 * 		this.addChild(this.rect);
 * 	}
 * }
 * 
 * const game = new Impacto.Game({
 * 	width: 800,
 * 	height: 600,
 * 	backgroundColor: "#f0f0f0",
 * 	scene: Game,
 * });
 * 
 * @constructor
 */
export default class Game {
	constructor(config) {
		// Start Canvas
		CanvasStateInstance.setParent(config.parent);
		CanvasStateInstance.setSize(config.width, config.height);
		CanvasStateInstance.setCanvas(config.canvas);
		CanvasStateInstance.setBackgroundColor(config.backgroundColor);

		// Assets
		new Promise((resolve, reject) => {
			AssetsManagerInstance.load(config.assets).then(() => {

				// Start Scene Manager
				const gameManager = new CoreGameManager();
				gameManager.addScene(config.scene);
				gameManager.startScene(0);

				resolve();
			}).catch(reject);
		});
	}
}
