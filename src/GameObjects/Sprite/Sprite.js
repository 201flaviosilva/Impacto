import { AssetsManagerInstance } from "../../State/AssetsManager.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Rectangle from "../Rectangle/Rectangle.js";
import Types from "../Types.js";

export default class Sprite extends Rectangle {
	constructor(x, y, key, frame = 0, width = 0, height = 0) {
		super(x, y, "#ffffff", "#000000");
		this.texture = AssetsManagerInstance.getSprite(key);
		this.frame = frame;
		this.width = width || AssetsManagerInstance.getSpriteSize(key).width;
		this.height = height || AssetsManagerInstance.getSpriteSize(key).height;

		this._type = Types.sprite;
	}

	get x() { return this._x - this.width * this.origin.x * this.scale.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y * this.scale.y; } // Get the position Y relative to the origin

	_renderType() {
		CanvasStateInstance.context.drawImage(
			this.texture, // Image
			this.frame * this.width, 0, // Source X, Source Y
			this.width, this.height, // Source Width, Source Height
			this.x, this.y, // Destination X, Destination Y
			this.width, this.height  // Destination Width, Destination Height
		);
	}
}
