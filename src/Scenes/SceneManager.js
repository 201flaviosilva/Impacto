import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CollisionDetectionInstance } from "../Utils/CollisionDetection.js";
import { CanvasInstance } from "../Utils/Canvas.js";

export default class SceneManager {
	constructor() {
		if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
		SceneManager.instance = this;

		this.currentScene = null;
		this.scenes = [];
		this.isPaused = false;

		// Time
		this._lastTimeUpdate = Date.now();
		this.delta = 0;
		this.deltaTime = 0;
		this.gameTime = 0;
		this._fps = 0; // Temp variable just for calculating FPS
		this.fps = 0;

		window.requestAnimationFrame(this.step.bind(this));

		document.addEventListener("visibilitychange", (event) => {
			this.tabActive = document.hidden;
			this._lastTimeUpdate = Date.now();
		});
		setInterval(this.updateFPS.bind(this), 1000);
	}

	addScene(scene) {
		const newScene = new scene();
		this.scenes.push(newScene);
	}

	startScene(index) {
		this.currentScene = this.scenes[index];
		this.currentScene.start();
	}

	updateFPS() {
		this.fps = this._fps;
		this._fps = 0;
	}

	calcTime() {
		if (this.tabActive) return;

		const now = Date.now();

		const delta = now - this._lastTimeUpdate;
		const deltaTime = delta * 0.01;

		this._lastTimeUpdate = now;

		this.delta = delta;
		this.deltaTime = deltaTime;

		return {
			delta,
			deltaTime,
		};
	}

	step(gameTime) {
		window.requestAnimationFrame(this.step.bind(this));
		if (this.isPaused) return;

		this.gameTime = gameTime;
		const time = this.calcTime();
		this._fps++;

		if (this.currentScene) {
			this.currentScene.time = {
				delta: this.delta,
				deltaTime: this.deltaTime,
				fps: this.fps,
				gameTime,
			};
			// Collision
			const layersKeys = Object.keys(this.currentScene.collisions);
			layersKeys.forEach(layerKey => {
				const layer = this.currentScene.collisions[layerKey];
				CollisionDetectionInstance.collisionLayer(layer, this.currentScene);
			});

			this.currentScene.children.forEach(child => {
				if (child._step) child._step();
			});

			this.currentScene.update(this.deltaTime, this.fps);

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
			if (child._render) child._render();
			if (GlobalStateManagerInstance.debug && child._debug) child._debug();
		});

		this.currentScene.posRender(ctx);
	}
}

export const SceneManagerInstance = new SceneManager();
