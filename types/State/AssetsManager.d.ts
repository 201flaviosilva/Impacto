/**
 * @class AssetsManager
 * @description A class to manage the assets.
 * @memberof Impacto.State
 * @instance
 */
export default class AssetsManager {
    assets: {
        audios: {};
        fonts: {};
        sprites: {};
    };
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
     * @memberof Impacto.State.AssetsManager
     */
    load(assets: any): Promise<void>;
    /**
     * Load a sprite
     *
     * @param {string} name - The name of the sprite
     * @param {string} path - The path of the sprite
     * @memberof Impacto.State.AssetsManager
     */
    loadSprite(name: string, path: string): Promise<void>;
    /**
     * @description
     * Private (Core) function to load images/sprites
     *
     * @private
     * @memberof Impacto.State.AssetsManager
     */
    private _loadImage;
    /**
     * Load a font
     *
     * @param {string} name - The name of the font
     * @param {string} path - The path of the font
     * @memberof Impacto.State.AssetsManager
     */
    loadFont(name: string, path: string): Promise<void>;
    /**
     * Load a sound
     *
     * @param {string} name - The name of the sound
     * @param {string} path - The path of the sound
     * @memberof Impacto.State.AssetsManager
     */
    loadAudios(name: string, path: string): Promise<void>;
    /**
     * @description
     * Private (Core) function to load sounds/audios
     *
     * @private
     * @memberof Impacto.State.AssetsManager
     */
    private _loadAudio;
    /**
     * Return the sprite based on the name
     *
     * @param {string} name - The name of the sprite
     * @returns {Object} The sprite
     * @memberof Impacto.State.AssetsManager
     */
    getSprite(name: string): any;
    /**
     * Return the font based on the name
     *
     * @param {string} name - The name of the font
     * @returns {string} The font
     * @memberof Impacto.State.AssetsManager
     */
    getFont(name: string): string;
    /**
     * Return the audio based on the name
     *
     * @param {string} name - The name of the audio
     * @returns {Object} The audio
     * @memberof Impacto.State.AssetsManager
     */
    getAudio(name: string): any;
    /**
     * Return the size of the sprite
     *
     * @param {string} name - The name of the sprite
     * @returns {Object} The size of the sprite
     * @memberof Impacto.State.AssetsManager
     */
    getSpriteSize(name: string): any;
}
export const AssetsManagerInstance: AssetsManager;
