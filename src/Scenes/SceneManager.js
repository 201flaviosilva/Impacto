import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CollisionDetectionInstance } from "../Utils/CollisionDetection.js";
import { CanvasInstance } from "../Utils/Canvas.js";

export default class SceneManager {
	constructor() {
		if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
		SceneManager.instance = this;

		this.currentScene = null;
		this.scenes = [];
		this.lastDeltaUpdate = Date.now();
		this.deltaTime = 0;
		this.isPaused = false;

		window.requestAnimationFrame(this.step.bind(this));

		document.addEventListener("visibilitychange", (event) => {
			this.tabActive = document.hidden;
			this.lastDeltaUpdate = Date.now();
		});
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
		if (this.tabActive) return;
		const now = Date.now();
		const deltaTime = (now - this.lastDeltaUpdate) * 0.01;
		this.lastDeltaUpdate = now;
		this.deltaTime = deltaTime;
		return deltaTime;
	}

	step(gameTime) {
		window.requestAnimationFrame(this.step.bind(this));
		if (this.isPaused) return;

		const delta = this.updateDeltaTime();
		console.log(delta, gameTime);

		if (this.currentScene) {
			this.currentScene.time = { delta, gameTime, };
			// Collision
			const layersKeys = Object.keys(this.currentScene.collisions);
			layersKeys.forEach(layerKey => {
				const layer = this.currentScene.collisions[layerKey];
				CollisionDetectionInstance.collisionLayer(layer, this.currentScene);
			});

			this.currentScene.children.forEach(child => {
				child._step();
			});

			this.currentScene.update(this.deltaTime);

			this.render();
		}
	}

	render() {
		const ctx = CanvasInstance.context;
		if (!ctx) return;

		ctx.clearRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);

		if (GlobalStateManagerInstance.backgroundColor) {
			ctx.fillStyle = GlobalStateManagerInstance.backgroundColor;
			ctx.fillRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);
		}

		const zSortedChildren = this.currentScene.children.sort((a, b) => a.z - b.z);
		zSortedChildren.forEach(child => {
			child._render();
			if (GlobalStateManagerInstance.debug) child._debug();
		});

		this.currentScene.posRender(ctx);
	}
}

export const SceneManagerInstance = new SceneManager();
