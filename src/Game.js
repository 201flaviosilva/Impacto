import { AssetsManagerInstance } from "./State/AssetsManager.js";
import { CanvasStateInstance } from "./State/CanvasState.js";
import CoreGameManager from "./Core/CoreGameManager.js";

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
