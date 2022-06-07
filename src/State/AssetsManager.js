/**
 * @class AssetsManager
 * @description A class to manage the assets.
 */
export default class AssetsManager {
	constructor() {
		if (AssetsManager.instance instanceof AssetsManager) return AssetsManager.instance;
		AssetsManager.instance = this;

		this.assets = {
			audios: {},
			fonts: {},
			sprites: {},
		}
	}

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
	async load(assets) {
		for (const key in assets) {
			const category = assets[key];
			if (key === "sprites") {
				const spritesKeys = Object.keys(category);
				if (spritesKeys.length > 0) {
					for (const spriteKey of spritesKeys) {
						await this.loadSprite(spriteKey, category[spriteKey]);
					}
				}
			} else if (key === "fonts") {
				const fontsKeys = Object.keys(category);
				if (fontsKeys.length > 0) {
					for (const fontKey of fontsKeys) {
						await this.loadFont(fontKey, category[fontKey]);
					}
				}
			} else if (key === "audios") {
				const audiosKeys = Object.keys(category);
				if (audiosKeys.length > 0) {
					for (const soundKey of audiosKeys) {
						await this.loadAudios(soundKey, category[soundKey]);
					}
				}
			}
		}
	}

	/**
	 * Load a sprite
	 * 
	 * @param {string} name - The name of the sprite
	 * @param {string} path - The path of the sprite
	 * @returns {void}
	 * @memberof AssetsManager
	 */
	async loadSprite(name, path) {
		const image = await this._loadImage(path);
		this.assets.sprites[name] = {
			image,
			width: image.width,
			height: image.height,
		};
	}

	/**
	 * @description
	 * Private (Core) function to load images/sprites
	 * 
	 * @memberof AssetsManager
	 * @private
	 */
	async _loadImage(path) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(image);
			image.onerror = () => reject(new Error(`Could not load image: ${path}`));
			image.src = path;
		});
	}

	/**
	 * Load a font
	 * 
	 * @param {string} name - The name of the font
	 * @param {string} path - The path of the font
	 * @returns {void}
	 * @memberof AssetsManager
	 */
	async loadFont(name, path) {
		this.assets.fonts[name] = name;

		const newCSSFont = document.createElement("style");
		newCSSFont.type = "text/css";
		newCSSFont.innerHTML = `
			@font-face {
				font-family: "${name}";
				src: url("${path}") format("truetype");`;
		document.body.appendChild(newCSSFont);
	}

	/**
	 * Load a sound
	 * 
	 * @param {string} name - The name of the sound
	 * @param {string} path - The path of the sound
	 * @returns {void}
	 * @memberof AssetsManager
	 */
	async loadAudios(name, path) {
		this.assets.audios[name] = await this._loadAudio(path);
	}

	/**
	 * @description
	 * Private (Core) function to load sounds/audios
	 * 
	 * @memberof AssetsManager
	 * @private
	 */
	async _loadAudio(path) {
		return new Promise((resolve, reject) => {
			const audio = new Audio();
			audio.oncanplaythrough = () => resolve(audio);
			audio.onerror = () => reject(new Error(`Could not load audio: ${path}`));
			audio.src = path;
		});
	}

	/**
	 * Return the sprite based on the name
	 * 
	 * @param {string} name - The name of the sprite
	 * @returns {Object} The sprite
	 * @memberof AssetsManager
	 */
	getSprite(name) { return this.assets.sprites[name].image; }

	/**
	 * Return the font based on the name
	 * 
	 * @param {string} name - The name of the font
	 * @returns {string} The font
	 * @memberof AssetsManager
	 */
	getFont(name) { return this.assets.fonts[name]; }

	/**
	 * Return the audio based on the name
	 * 
	 * @param {string} name - The name of the audio
	 * @returns {Object} The audio
	 * @memberof AssetsManager
	 */
	getAudio(name) { return this.assets.audios[name]; }

	/**
	 * Return the size of the sprite
	 * 
	 * @param {string} name - The name of the sprite
	 * @returns {Object} The size of the sprite
	 * @memberof AssetsManager
	 */
	getSpriteSize(name) {
		const sprite = this.getSprite(name);
		if (sprite) return { width: sprite.width, height: sprite.height };
		return null;
	}
}

export const AssetsManagerInstance = new AssetsManager();
