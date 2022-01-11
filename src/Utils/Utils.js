import CollisionDetection from "./CollisionDetection.js";

export default class Utils {
	constructor() {
		this.collisionDetection = new CollisionDetection();
	}

	randomNumber(min, max) {
		if (!max) {
			max = min;
			min = 0;
		}
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }
}

export const UtilsInstance = new Utils();
