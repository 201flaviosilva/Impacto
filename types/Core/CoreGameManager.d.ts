/**
 * @class CoreGameManager
 * @description A core class to manage the game cycle.
 * @private
 */
export default class CoreGameManager {
    currentScene: any;
    scenes: any[];
    _lastTimeUpdate: number;
    delta: number;
    deltaTime: number;
    gameTime: number;
    _fps: number;
    fps: number;
    tabActive: boolean;
    /**
     * Add a new scene to the game
     * @param {Object} scene - The scene to add
     * @private
     */
    private addScene;
    /**
     * Initialize a scene and set it as the current scene
     *
     * @param {number} index - The index of the scene to initialize
     * @private
     */
    private startScene;
    /**
     * Reset the calc of the FPS
     *
     * @private
     */
    private updateFPS;
    /**
     * Calculate the time since the game start, the delta time and the FPS
     *
     * @private
     */
    private calcTime;
    /**
     * Update the game
     *
     * @param {number} gameTime - The time since the game start
     * @private
     */
    private step;
    /**
     * Run User Code
     *
     * @private
     */
    private update;
    /**
     * Render the game in the canvas
     *
     * @private
     */
    private render;
}
export const CoreGameManagerInstance: CoreGameManager;
