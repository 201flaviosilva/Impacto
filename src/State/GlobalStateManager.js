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
}

export const GlobalStateManagerInstance = new GlobalStateManager();
