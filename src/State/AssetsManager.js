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
				for (const name in category) {
					await this.loadSprite(name, category[name]);
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

	getSprite(name) {
		return this.assets.sprites[name].image;
	}
	getSpriteSize(name) {
		const sprite = this.getSprite(name);
		if (sprite) return { width: sprite.width, height: sprite.height };
		return null;
	}
}

export const AssetsManagerInstance = new AssetsManager();
