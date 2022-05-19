import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CanvasStateInstance } from "../State/CanvasState.js";

/**
 * @class CoreGameManager
 * @description A core class to manage the game cycle.
 * @private
 */
export default class CoreGameManager {
	constructor() {
		if (CoreGameManager.instance instanceof CoreGameManager) return CoreGameManager.instance;
		CoreGameManager.instance = this;

		this.currentScene = null;
		this.scenes = [];

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

	/**
	 * Add a new scene to the game
	 * @param {Object} scene - The scene to add
	 * @private
	 */
	addScene(scene) {
		const newScene = new scene();
		this.scenes.push(newScene);
	}

	/**
	 * Initialize a scene and set it as the current scene
	 * 
	 * @param {number} index - The index of the scene to initialize
	 * @private
	 */
	startScene(index) {
		this.currentScene = this.scenes[index];
		this.currentScene.start();
	}

	/**
	 * Reset the calc of the FPS
	 * 
	 * @private
	 */
	updateFPS() {
		this.fps = this._fps;
		this._fps = 0;
	}

	/**
	 * Calculate the time since the game start, the delta time and the FPS
	 * 
	 * @private
	 */
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

	/**
	 * Update the game
	 * 
	 * @param {number} gameTime - The time since the game start
	 * @private
	 */
	step(gameTime) {
		window.requestAnimationFrame(this.step.bind(this));
		if (GlobalStateManagerInstance.isPaused) return;

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

			// Objects Steep
			this.currentScene.children.forEach(child => {
				if (child._step) child._step();
			});


			this.update();
			this.render();
		}
	}

	/**
	 * Run User Code
	 * 
	 * @private
	 */
	update() {
		this.currentScene.update(this.deltaTime, this.fps);
	}

	/**
	 * Render the game in the canvas
	 * 
	 * @private
	 */
	render() {
		const ctx = CanvasStateInstance.context;
		if (!ctx) return;

		if (CanvasStateInstance.backgroundColor) {
			ctx.fillStyle = CanvasStateInstance.backgroundColor;
			ctx.fillRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
		} else {
			ctx.clearRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
		}

		const zSortedChildren = this.currentScene.children.sort((a, b) => a.z - b.z);
		zSortedChildren.forEach(child => {
			if (child._render) child._render(this.deltaTime);
		});

		this.currentScene.posRender(ctx);
	}
}

export const CoreGameManagerInstance = new CoreGameManager();
