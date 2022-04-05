import { CoreGameManagerInstance } from "../Core/CoreGameManager.js";
import { CanvasStateInstance } from "../State/CanvasState.js";

export default class PositionPrevisions {
	getNextPrevisionTop(object) {
		if (object._type == "Rect") return object.y + object.velocity.y * CoreGameManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.y - object.radius) + object.velocity.y * CoreGameManagerInstance.deltaTime;
	}

	getNextPrevisionBottom(object) {
		if (object._type == "Rect") return (object.y + object.height) + object.velocity.y * CoreGameManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.y + object.radius) + object.velocity.y * CoreGameManagerInstance.deltaTime;
	}

	getNextPrevisionLeft(object) {
		if (object._type == "Rect") return object.x + object.velocity.x * CoreGameManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.x - object.radius) + object.velocity.x * CoreGameManagerInstance.deltaTime;
	}

	getNextPrevisionRight(object) {
		if (object._type == "Rect") return (object.x + object.width) + object.velocity.x * CoreGameManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.x + object.radius) + object.velocity.x * CoreGameManagerInstance.deltaTime;
	}

	checkNextPrevisionTopCollisionWorldBounds(object) { return this.getNextPrevisionTop(object) <= 0; }
	checkNextPrevisionBottomCollisionWorldBounds(object) { return this.getNextPrevisionBottom(object) >= CanvasStateInstance.height; }
	checkNextPrevisionLeftCollisionWorldBounds(object) { return this.getNextPrevisionLeft(object) <= 0; }
	checkNextPrevisionRightCollisionWorldBounds(object) { return this.getNextPrevisionRight(object) >= CanvasStateInstance.width; }

	checkNextPrevisionCollisionWorldBounds(object) {
		return this.checkNextPrevisionTopCollisionWorldBounds(object)
			|| this.checkNextPrevisionBottomCollisionWorldBounds(object)
			|| this.checkNextPrevisionLeftCollisionWorldBounds(object)
			|| this.checkNextPrevisionRightCollisionWorldBounds(object);
	}

	getNextPrevPosition(object) {
		return {
			x: object.x + object.velocity.x * CoreGameManagerInstance.deltaTime,
			y: object.y + object.velocity.y * CoreGameManagerInstance.deltaTime,
		};
	}
}

export const PositionPrevisionsInstance = new PositionPrevisions();
