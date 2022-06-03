/**
 * @class GlobalStateManager
 * @description A class to manage all global states.
 */
export default class GlobalStateManager {
    isPaused: boolean | undefined;
    isMuted: boolean | undefined;
    volume: number | undefined;
    /**
     * Pauses/Unpauses the game.
     *
     * @param {boolean} pause - Pause the game
     * @returns {void}
     * @memberof GlobalStateManager
     */
    setPause(pause: boolean): void;
    /**
 * Change the volume of the audio.
 *
 * @param {number} volume - The volume of the audio. Default 1
 * @returns {void}
 * @memberof GlobalStateManager
 */
    setVolume(volume?: number): void;
}
export const GlobalStateManagerInstance: GlobalStateManager;
//# sourceMappingURL=GlobalStateManager.d.ts.map