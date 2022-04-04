import { AssetsManagerInstance } from "./State/AssetsManager.js";
import { GlobalStateManagerInstance } from "./State/GlobalStateManager.js";
import { CanvasStateInstance } from "./State/CanvasState.js";
import SceneManager from "./Scenes/SceneManager.js";

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
				const sceneManager = new SceneManager();
				sceneManager.addScene(config.scene);
				sceneManager.startScene(0);

				resolve();
			}).catch(reject);
		});
	}
}
