import { SceneManagerInstance } from "../Scenes/SceneManager.js";
import { CanvasStateInstance } from "../State/CanvasState.js";

export default class PositionPrevisions {
	getNextPrevisionTop(object) {
		if (object._type == "Rect") return object.y + object.velocity.y * SceneManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.y - object.radius) + object.velocity.y * SceneManagerInstance.deltaTime;
	}

	getNextPrevisionBottom(object) {
		if (object._type == "Rect") return (object.y + object.height) + object.velocity.y * SceneManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.y + object.radius) + object.velocity.y * SceneManagerInstance.deltaTime;
	}

	getNextPrevisionLeft(object) {
		if (object._type == "Rect") return object.x + object.velocity.x * SceneManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.x - object.radius) + object.velocity.x * SceneManagerInstance.deltaTime;
	}

	getNextPrevisionRight(object) {
		if (object._type == "Rect") return (object.x + object.width) + object.velocity.x * SceneManagerInstance.deltaTime;
		else if (object._type == "Circle") return (object.x + object.radius) + object.velocity.x * SceneManagerInstance.deltaTime;
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
			x: object.x + object.velocity.x * SceneManagerInstance.deltaTime,
			y: object.y + object.velocity.y * SceneManagerInstance.deltaTime,
		};
	}
}

export const PositionPrevisionsInstance = new PositionPrevisions();
