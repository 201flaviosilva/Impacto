import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { UtilsMathInstance } from "./Math.js";
import Vector2 from "./Vector2.js";

export default class CollisionDetection {
	constructor() { }

	// Overlap Detection
	checkOverlap(gameObject1, gameObject2) {
		if (gameObject1._type === "Rect" && gameObject2._type === "Rect") { // Rectangle vs Rectangle
			return this.overlapRectangleAndRectangle(gameObject1, gameObject2);
		} else if (gameObject1._type === "Circle" && gameObject2._type === "Circle") { // Circle vs Circle
			return this.overlapCircleAndCircle(gameObject1, gameObject2);
		} else if (gameObject1._type === "Rect" && gameObject2._type === "Circle") { // Rectangle vs Circle
			return this.overlapRectangleAndCircle(gameObject1, gameObject2);
		} else if (gameObject1._type === "Circle" && gameObject2._type === "Rect") { // Circle vs Rectangle
			return this.overlapRectangleAndCircle(gameObject2, gameObject1);
		}
	}

	overlapRectangleAndRectangle(rect1, rect2) {
		return (
			rect1.x < rect2.x + rect2.width && // rect1 is to the right of rect2
			rect1.x + rect1.width > rect2.x && // rect1 is to the left of rect2
			rect1.y < rect2.y + rect2.height && // rect1 is below rect2
			rect1.y + rect1.height > rect2.y // rect1 is above rect2
		);
	}

	overlapRectangleAndCircle(rect, circle) {
		let dx = Math.abs(circle.x - (rect.x + rect.width / 2)); // horizontal difference
		let dy = Math.abs(circle.y - (rect.y + rect.height / 2)); // vertical difference

		if (dx > circle.radius + rect.width / 2) return false; // too far on horizontal
		if (dy > circle.radius + rect.height / 2) return false; // too far on vertical

		if (dx <= rect.width) return true; // horizontal is good
		if (dy <= rect.height) return true; // vertical is good

		dx = dx - rect.width; // horizontal difference
		dy = dy - rect.height; // vertical difference

		return (dx * dx + dy * dy <= circle.radius * circle.radius); // check if it's inside the corner
	}

	overlapCircleAndCircle(circle1, circle2) {
		const dx = circle1.x - circle2.x; // horizontal difference
		const dy = circle1.y - circle2.y; // vertical difference
		const distance = Math.sqrt(dx * dx + dy * dy); // distance between two centers
		return (distance < circle1.radius + circle2.radius);
	}

	// Rectangles
	getAreaOfTwoOverlappingRectangles(rect1, rect2) {
		if (this.overlapRectangleAndRectangle(rect1, rect2)) {
			const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
			const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
			return xOverlap * yOverlap;
		}
	}

	getPerimeterOfTwoOverlappingRectangles(rect1, rect2) {
		if (this.overlapRectangleAndRectangle(rect1, rect2)) {
			const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
			const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
			return xOverlap + yOverlap;
		}
	}

	getBoundsOfTwoOverlappingRectangles(rect1, rect2) {
		if (this.overlapRectangleAndRectangle(rect1, rect2)) {
			const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
			const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
			return {
				x: Math.max(rect1.x, rect2.x),
				y: Math.max(rect1.y, rect2.y),
				width: xOverlap,
				height: yOverlap
			};
		}
	}

	// Collision Detection
	detectRectangleAndRectangleCollisionDirections(rect1, rect2) {
		if (this.overlapRectangleAndRectangle(rect1, rect2)) {
			const bounds = this.getBoundsOfTwoOverlappingRectangles(rect1, rect2);
			const merged = new Vector2(
				rect1.getCenterX() - UtilsMathInstance.rectangleCenterXFromRectangleBounds(bounds),
				rect1.getCenterY() - UtilsMathInstance.rectangleCenterYFromRectangleBounds(bounds)
			);

			const mergedN = new Vector2(merged.x, merged.y);
			mergedN.normalize();

			const collisions = [];
			if (mergedN.y > 0.5) collisions.push("TOP");
			if (mergedN.y < -0.5) collisions.push("BOTTOM");
			if (mergedN.x < -0.5) collisions.push("LEFT");
			if (mergedN.x > 0.5) collisions.push("RIGHT");
			return collisions;
		}
		return false;
	}

	getRectangleAndRectangleCollisionAxis(staticReact, dynamicReact) {
		// https://www.youtube.com/watch?v=LYrge3ylccQ

		const differenceCentersX = dynamicReact.getCenterX() - staticReact.getCenterX();
		const differenceCentersY = dynamicReact.getCenterY() - staticReact.getCenterY();

		if (Math.abs(differenceCentersX / staticReact.width) > Math.abs(differenceCentersY / staticReact.height)) {
			if (differenceCentersX < 0) return "LEFT";
			else return "RIGHT";

		} else {
			if (differenceCentersY < 0) return "TOP";
			else return "BOTTOM";
		}
	}


	collisionLayer(layer, scene) {
		layer.forEach((gameObject1, index1) => {
			layer.forEach((gameObject2, index2) => {
				if (index1 >= index2 || !this.checkOverlap(gameObject1, gameObject2)) return;
				this.collisionResponse(gameObject1, gameObject2);
			});
		});
	}

	// Collision Resolve
	collisionResponse(gameObject1, gameObject2) {
		if (gameObject1.bodyType === "T" || gameObject2.bodyType === "T") return; // if one of the game objects is a trigger, don't resolve collision

		if (gameObject1._type === "Rect" && gameObject2._type === "Rect") { // Rectangle vs Rectangle
			if (gameObject1.bodyType === "D" && gameObject2.bodyType === "D") { // Dynamic vs Dynamic
				this.collisionResponseDynamicRectRect(gameObject1, gameObject2);
			} else if (gameObject1.bodyType === "D" && gameObject2.bodyType === "S") { // Dynamic vs Static
				this.collisionResponseDynamicRectStaticRect(gameObject1, gameObject2);
			} else if (gameObject1.bodyType === "S" && gameObject2.bodyType === "D") { // Static vs Dynamic
				this.collisionResponseDynamicRectStaticRect(gameObject2, gameObject1);
			} else { }

		} else if (gameObject1._type === "Circle" && gameObject2._type === "Circle") { // Circle vs Circle
			if (gameObject1.bodyType === "D" && gameObject2.bodyType === "D") { // Dynamic vs Dynamic
				this.collisionResponseDynamicCircleCircle(gameObject1, gameObject2);
			}
		}
	}

	collisionResponseDynamicRectRect(dynamicReact1, dynamicReact2) {
		// https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics

		const vCollision = { x: dynamicReact2.x - dynamicReact1.x, y: dynamicReact2.y - dynamicReact1.y };
		const distance = Math.sqrt((dynamicReact2.x - dynamicReact1.x) * (dynamicReact2.x - dynamicReact1.x) + (dynamicReact2.y - dynamicReact1.y) * (dynamicReact2.y - dynamicReact1.y));
		const vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
		const vRelativeVelocity = { x: dynamicReact1.velocity.x - dynamicReact2.velocity.x, y: dynamicReact1.velocity.y - dynamicReact2.velocity.y };
		const speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;

		if (speed < 0) return;

		const impulse = 2 * speed / (dynamicReact1.mass + dynamicReact2.mass);
		dynamicReact1.velocity.x -= (impulse * dynamicReact2.mass * vCollisionNorm.x) * dynamicReact1.bounce.x;
		dynamicReact1.velocity.y -= (impulse * dynamicReact2.mass * vCollisionNorm.y) * dynamicReact1.bounce.y;
		dynamicReact2.velocity.x += (impulse * dynamicReact1.mass * vCollisionNorm.x) * dynamicReact2.bounce.x;
		dynamicReact2.velocity.y += (impulse * dynamicReact1.mass * vCollisionNorm.y) * dynamicReact2.bounce.y;
	}

	collisionResponseDynamicRectStaticRect(dynamicReact, staticReact) {
		const direction = this.getRectangleAndRectangleCollisionAxis(staticReact, dynamicReact);
		this.collisionPerpetrationResolveDynamicRectStaticRect(dynamicReact, staticReact, direction);

		const gravityX = GlobalStateManagerInstance.gravity.x;
		const gravityY = GlobalStateManagerInstance.gravity.y;

		if (direction === "TOP" || direction === "BOTTOM") { // Vertical
			dynamicReact.setVelocityY(
				(dynamicReact.velocity.y * -1) * dynamicReact.bounce.y - gravityY
			);

		} else if (direction === "LEFT" || direction === "RIGHT") { // Horizontal
			dynamicReact.setVelocityX(
				(dynamicReact.velocity.x * -1) * dynamicReact.bounce.x - gravityX
			);
		}
	}

	// Collision Perpetration Resolve
	collisionPerpetrationResolveDynamicRectStaticRect(dynamicReact, staticReact, direction) {
		if (direction === "LEFT") dynamicReact.setX(staticReact.x - dynamicReact.width);
		else if (direction === "RIGHT") dynamicReact.setX(staticReact.x + staticReact.width);
		else if (direction === "TOP") dynamicReact.setY(staticReact.y - dynamicReact.height);
		else if (direction === "BOTTOM") dynamicReact.setY(staticReact.y + staticReact.height);
	}

	collisionResponseDynamicCircleCircle(dynamicCircle1, dynamicCircle2) { return; }
}

export const CollisionDetectionInstance = new CollisionDetection();
