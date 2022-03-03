// Collision Resolve
import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CollisionDetectionInstance } from "./CollisionDetection.js";

export default class CollisionResolve {
	collisionLayer(layer) {
		layer.forEach((gameObject1, index1) => {
			layer.forEach((gameObject2, index2) => {
				if (index1 >= index2 || !CollisionDetectionInstance.checkOverlap(gameObject1, gameObject2)) return;
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
		const direction = CollisionDetectionInstance.getRectangleAndRectangleCollisionAxis(staticReact, dynamicReact);
		// this.collisionPerpetrationResolveDynamicRectStaticRect(dynamicReact, staticReact, direction);

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

export const CollisionResolveInstance = new CollisionResolve();
