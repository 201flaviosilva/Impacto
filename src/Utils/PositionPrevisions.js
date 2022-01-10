export default class PositionPrevisions {
	constructor() { }

	getNextPrevisionTop(object) {
		if (object._type == "Rect") return object.y + object.velocity.y * object._sceneManager.deltaTime;
		else if (object._type == "Circle") return (object.y - object.radius) + object.velocity.y * object._sceneManager.deltaTime;
	}

	getNextPrevisionBottom(object) {
		if (object._type == "Rect") return (object.y + object.height) + object.velocity.y * object._sceneManager.deltaTime;
		else if (object._type == "Circle") return (object.y + object.radius) + object.velocity.y * object._sceneManager.deltaTime;
	}

	getNextPrevisionLeft(object) {
		if (object._type == "Rect") return object.x + object.velocity.x * object._sceneManager.deltaTime;
		else if (object._type == "Circle") return (object.x - object.radius) + object.velocity.x * object._sceneManager.deltaTime;
	}

	getNextPrevisionRight(object) {
		if (object._type == "Rect") return (object.x + object.width) + object.velocity.x * object._sceneManager.deltaTime;
		else if (object._type == "Circle") return (object.x + object.radius) + object.velocity.x * object._sceneManager.deltaTime;
	}

	checkNextPrevisionTopCollisionWorldBounds(object) { return this.getNextPrevisionTop(object) <= 0; }
	checkNextPrevisionBottomCollisionWorldBounds(object) { return this.getNextPrevisionBottom(object) >= object._globalStateManager.viewportDimensions.height; }
	checkNextPrevisionLeftCollisionWorldBounds(object) { return this.getNextPrevisionLeft(object) <= 0; }
	checkNextPrevisionRightCollisionWorldBounds(object) { return this.getNextPrevisionRight(object) >= object._globalStateManager.viewportDimensions.width; }

	checkNextPrevisionCollisionWorldBounds(object) {
		return this.checkNextPrevisionTopCollisionWorldBounds(object)
			|| this.checkNextPrevisionBottomCollisionWorldBounds(object)
			|| this.checkNextPrevisionLeftCollisionWorldBounds(object)
			|| this.checkNextPrevisionRightCollisionWorldBounds(object);
	}

	getNextPrevPosition(object) {
		return {
			x: object.x + object.velocity.x * object._sceneManager.deltaTime,
			y: object.y + object.velocity.y * object._sceneManager.deltaTime
		};
	}
}

export const PositionPrevisionsInstance = new PositionPrevisions();
