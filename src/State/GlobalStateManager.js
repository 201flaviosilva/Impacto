export default class GlobalStateManager {
	constructor() {
		if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
		GlobalStateManager.instance = this;

		this.debug = false;
		this.gravity = { x: 0, y: 0, };
		this.isPaused = false;
		this.isMuted = false; // TODO
		this.volume = 1; // TODO: // Audio default volume
	}

	setPause(pause) { this.isPaused = pause; }
	setDebug(debug) { this.debug = debug; }

	setGravity(gravity) {
		if (!gravity) gravity = { x: 0, y: 0, };
		if (gravity.x === undefined) gravity.x = 0;
		if (gravity.y === undefined) gravity.y = 0;
		this.gravity = gravity;
	}
}

export const GlobalStateManagerInstance = new GlobalStateManager();
