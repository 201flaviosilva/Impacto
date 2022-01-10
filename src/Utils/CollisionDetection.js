import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";

export default class CollisionDetection {
	constructor() { }

	overlapRectangleAndRectangle(rect1, rect2) {
		return (
			rect1.x < rect2.x + rect2.width &&
			rect1.x + rect1.width > rect2.x &&
			rect1.y < rect2.y + rect2.height &&
			rect1.y + rect1.height > rect2.y
		);
	}

	overlapRectangleAndCircle(rect, circle) {
		let dx = Math.abs(circle.x - (rect.x + rect.width / 2));
		let dy = Math.abs(circle.y - (rect.y + rect.height / 2));

		if (dx > circle.radius + rect.width / 2) return (false);
		if (dy > circle.radius + rect.height / 2) return (false);

		if (dx <= rect.width) return (true);
		if (dy <= rect.height) return (true);

		dx = dx - rect.width;
		dy = dy - rect.height
		return (dx * dx + dy * dy <= circle.radius * circle.radius);
	}

	overlapCircleAndCircle(circle1, circle2) {
		const dx = circle1.x - circle2.x;
		const dy = circle1.y - circle2.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		return (distance < circle1.radius + circle2.radius);
	}

	collisionLayer(layer) {
		layer.forEach((gameObject1, index1) => {
			layer.forEach((gameObject2, index2) => {
				if (index1 < index2) {
					// Vertical
					if (gameObject1.checkWillCollideVerticalWith(gameObject2)) {
						const lastGameObject1YVelocity = gameObject1.velocity.y;
						const lastGameObject2YVelocity = gameObject2.velocity.y;
						const gravityY = GlobalStateManagerInstance.gravity.y;

						gameObject1.setVelocityY(
							lastGameObject2YVelocity * gameObject1.bounce.y - gravityY
						);

						gameObject2.setVelocityY(
							lastGameObject1YVelocity * gameObject2.bounce.y - gravityY
						);
					}

					// Horizontal
					if (gameObject1.checkWillCollideHorizontalWith(gameObject2)) {
						const lastGameObject1XVelocity = gameObject1.velocity.x;
						const lastGameObject2XVelocity = gameObject2.velocity.x;
						const gravityX = GlobalStateManagerInstance.gravity.x;

						gameObject1.setVelocityX(
							lastGameObject2XVelocity * gameObject1.bounce.x - gravityX
						);

						gameObject2.setVelocityX(
							lastGameObject1XVelocity * gameObject2.bounce.x - gravityX
						);
					}
				}
			});
		});
	}
}

export const CollisionDetectionInstance = new CollisionDetection();
