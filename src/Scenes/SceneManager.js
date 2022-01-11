import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CollisionDetectionInstance } from "../Utils/CollisionDetection.js";

export default class SceneManager {
	constructor() {
		if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
		SceneManager.instance = this;

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
			// Collision
			const layersKeys = Object.keys(this.currentScene.collisions);
			layersKeys.forEach(layerKey => {
				const layer = this.currentScene.collisions[layerKey];
				CollisionDetectionInstance.collisionLayer(layer);
			});

			this.currentScene.children.forEach(child => {
				child._step();
			});

			this.currentScene.update(this.deltaTime);

			this.render();
		}

		window.requestAnimationFrame(() => this.step());
	}

	render() {
		if (!GlobalStateManagerInstance.context) return;

		GlobalStateManagerInstance.context.clearRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);

		if (GlobalStateManagerInstance.backgroundColor) {
			GlobalStateManagerInstance.context.fillStyle = GlobalStateManagerInstance.backgroundColor;
			GlobalStateManagerInstance.context.fillRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);
		}

		const zSortedChildren = this.currentScene.children.sort((a, b) => a.z - b.z);
		zSortedChildren.forEach(child => {
			child._render();
			if (GlobalStateManagerInstance.debug) child._debug();
		});
	}
}

export const SceneManagerInstance = new SceneManager();
