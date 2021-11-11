import GlobalStateManager from "../State/GlobalStateManager.js";

export default class SceneManager {
	constructor() {
		if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
		SceneManager.instance = this;

		this.globalStateManager = new GlobalStateManager();

		this.currentScene = null;
		this.scenes = [];
		this.lastDeltaUpdate = Date.now();
		this.deltaTime = 0;

		window.requestAnimationFrame(() => this.step());
	}

	addScene(scene) {
		const newScene = new scene();
		this.scenes.push(newScene);
	}

	startScene(index) {
		this.currentScene = this.scenes[index];
		this.currentScene.start();
	}

	updateDeltaTime() {
		const now = Date.now();
		const deltaTime = (now - this.lastDeltaUpdate) * 0.01;
		this.lastDeltaUpdate = now;
		this.deltaTime = deltaTime;
		return deltaTime;
	}

	step() {
		this.updateDeltaTime();

		if (this.currentScene) {
			this.currentScene.update(this.deltaTime);

			this.currentScene.children.forEach(child => {
				child._step();
			});

			this.render();
		}

		window.requestAnimationFrame(() => this.step());
	}

	render() {
		this.globalStateManager.context.clearRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);

		if (this.globalStateManager.backgroundColor) {
			this.globalStateManager.context.fillStyle = this.globalStateManager.backgroundColor;
			this.globalStateManager.context.fillRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);
		}

		this.currentScene.children.forEach(child => {
			child._render();
			if (this.globalStateManager.debug) child._debug();
		});
	}
}
