import SceneManager from "../Scenes/SceneManager.js";

export default class GlobalStateManager {
	constructor() {
		if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
		GlobalStateManager.instance = this;

		this.sceneManager = new SceneManager();
	}

	setConfig(config) {
		this.parentDom = config.parentDom;
		this.canvas = config.canvas;
		this.context = config.context;
		this.viewportDimensions = {
			width: config.viewportDimensions.width,
			height: config.viewportDimensions.height,
		};
		this.backgroundColor = config.backgroundColor;
		this.debug = config.debug;
		this.gravity = config.gravity;

		this.sceneManager.addScene(config.scene);
		this.sceneManager.startScene(0);
	}
}

export const GlobalStateManagerInstance = new GlobalStateManager();
