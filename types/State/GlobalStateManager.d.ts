/**
 * @class GlobalStateManager
 * @description A class to manage all global states.
 * @memberof Impacto.State
 * @instance
 */
export default class GlobalStateManager {
    isPaused: boolean;
    isMuted: boolean;
    volume: number;
    /**
     *
     *
     * @param {boolean} pause - Pause the game
     */
    setPause(pause: boolean): void;
    /**
 * Change the volume of the audio.
 *
 * @param {number} volume - The volume of the audio. Default 1
 * @memberof Impacto.State.GlobalStateManager
 */
    setVolume(volume?: number): void;
}
export const GlobalStateManagerInstance: GlobalStateManager;
