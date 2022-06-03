/**
 * @class GlobalStateManager
 * @description A class to manage all global states.
 */
export default class GlobalStateManager {
	constructor() {
		if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
		GlobalStateManager.instance = this;

		this.isPaused = false;
		this.isMuted = false; // TODO
		this.volume = 1; // TODO: // Audio default volume
	}

	/**
	 * Pauses/Unpauses the game.
	 * 
	 * @param {boolean} pause - Pause the game
	 * @returns {void}
	 * @memberof GlobalStateManager
	 */
	setPause(pause) { this.isPaused = pause; }

	/**
 * Change the volume of the audio.
 * 
 * @param {number} volume - The volume of the audio. Default 1
 * @returns {void}
 * @memberof GlobalStateManager
 */
	setVolume(volume = 1) {
		if (volume < 0 || volume > 1) throw new Error("Invalid volume");
		this.volume = volume;
	}
}

export const GlobalStateManagerInstance = new GlobalStateManager();
