export default class AssetsManager {
	constructor() {
		if (AssetsManager.instance instanceof AssetsManager) return AssetsManager.instance;
		AssetsManager.instance = this;

		this.assets = {
			fonts: {},
			sounds: {},
			sprites: {},
		}
	}

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
			}
		}
	}

	async loadSprite(name, path) {
		const image = await this.loadImage(path);
		this.assets.sprites[name] = {
			image,
			width: image.width,
			height: image.height,
		};
	}

	async loadImage(path) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(image);
			image.onerror = () => reject(new Error(`Could not load image: ${path}`));
			image.src = path;
		});
	}

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

	getSprite(name) { return this.assets.sprites[name].image; }
	getFont(name) { return this.assets.fonts[name]; }

	getSpriteSize(name) {
		const sprite = this.getSprite(name);
		if (sprite) return { width: sprite.width, height: sprite.height };
		return null;
	}
}

export const AssetsManagerInstance = new AssetsManager();
