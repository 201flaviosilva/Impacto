import SceneManager from "../Scenes/SceneManager.js";

export default class GlobalStateManager {
	constructor(config) {
		if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
		GlobalStateManager.instance = this;

		this.parentDom = config.parentDom;
		this.canvas = config.canvas;
		this.context = config.context;
		this.viewportDimensions = {
			width: config.viewportDimensions.width,
			height: config.viewportDimensions.height,
		};
		this.backgroundColor = config.backgroundColor;
		this.debug = config.debug;

		this.sceneManager = new SceneManager();
		this.sceneManager.addScene(config.scene);
		this.sceneManager.startScene(0);
	}
}
