import { GlobalStateManagerInstance } from "./State/GlobalStateManager.js";
import { CanvasStateInstance } from "./State/CanvasState.js";
import SceneManager from "./Scenes/SceneManager.js";

export default class Game {
	constructor(config) {
		// Save configurations
		GlobalStateManagerInstance.setConfig(config);

		// Start Canvas
		CanvasStateInstance.setParent(config.parent);
		CanvasStateInstance.setSize(config.width, config.height);
		CanvasStateInstance.setCanvas(config.canvas);
		CanvasStateInstance.setBackgroundColor(config.backgroundColor);

		// Start Scene Manager
		const sceneManager = new SceneManager();
		sceneManager.addScene(config.scene);
		sceneManager.startScene(0);
	}
}
