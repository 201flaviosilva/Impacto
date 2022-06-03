/**
 * @class AssetsManager
 * @description A class to manage the assets.
 */
export default class AssetsManager {
    assets: {
        audios: {};
        fonts: {};
        sprites: {};
    } | undefined;
    /**
     * Load the assets
     *
     * @example
     * load({
     * 	sprites: { MySprite: "./MySprite.png", },
     * 	fonts: { "MyFont": "MyFont.ttf", },
     * 	audios: { "MyAudio": "MyAudio.mp3", }
     * });
     *
     *
     * @param {Object} assets - The assets to load
     * @returns {void}
     * @memberof AssetsManager
     */
    load(assets: Object): void;
    /**
     * Load a sprite
     *
     * @param {string} name - The name of the sprite
     * @param {string} path - The path of the sprite
     * @returns {void}
     * @memberof AssetsManager
     */
    loadSprite(name: string, path: string): void;
    /**
     * @description
     * Private (Core) function to load images/sprites
     *
     * @memberof AssetsManager
     * @private
     */
    private _loadImage;
    /**
     * Load a font
     *
     * @param {string} name - The name of the font
     * @param {string} path - The path of the font
     * @returns {void}
     * @memberof AssetsManager
     */
    loadFont(name: string, path: string): void;
    /**
     * Load a sound
     *
     * @param {string} name - The name of the sound
     * @param {string} path - The path of the sound
     * @returns {void}
     * @memberof AssetsManager
     */
    loadAudios(name: string, path: string): void;
    /**
     * @description
     * Private (Core) function to load sounds/audios
     *
     * @memberof AssetsManager
     * @private
     */
    private _loadAudio;
    /**
     * Return the sprite based on the name
     *
     * @param {string} name - The name of the sprite
     * @returns {Object} The sprite
     * @memberof AssetsManager
     */
    getSprite(name: string): Object;
    /**
     * Return the font based on the name
     *
     * @param {string} name - The name of the font
     * @returns {string} The font
     * @memberof AssetsManager
     */
    getFont(name: string): string;
    /**
     * Return the audio based on the name
     *
     * @param {string} name - The name of the audio
     * @returns {Object} The audio
     * @memberof AssetsManager
     */
    getAudio(name: string): Object;
    /**
     * Return the size of the sprite
     *
     * @param {string} name - The name of the sprite
     * @returns {Object} The size of the sprite
     * @memberof AssetsManager
     */
    getSpriteSize(name: string): Object;
}
export const AssetsManagerInstance: AssetsManager;
//# sourceMappingURL=AssetsManager.d.ts.map