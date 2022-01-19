import { UtilsMathInstance } from "./Math.js";
import Vector2 from "./Vector2.js";

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

		if (dx > circle.radius + rect.width / 2) return false;
		if (dy > circle.radius + rect.height / 2) return false;

		if (dx <= rect.width) return true;
		if (dy <= rect.height) return true;

		dx = dx - rect.width;
		dy = dy - rect.height;

		return (dx * dx + dy * dy <= circle.radius * circle.radius);
	}

	overlapCircleAndCircle(circle1, circle2) {
		const dx = circle1.x - circle2.x;
		const dy = circle1.y - circle2.y;
		const distance = Math.sqrt(dx * dx + dy * dy);
		return (distance < circle1.radius + circle2.radius);
	}

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


	collisionLayer(layer, scene) {
		layer.forEach((gameObject1, index1) => {
			layer.forEach((gameObject2, index2) => {
				if (index1 >= index2) return;
				this.collisionPerpetrationResolve(gameObject1, gameObject2);
			});
		});
	}

	collisionPerpetrationResolve(rect1, rect2) {
		// https://www.youtube.com/watch?v=LYrge3ylccQ

		// Difference centers between two rectangles
		const differenceCentersX = rect2.getCenterX() - rect1.getCenterX();
		const differenceCentersY = rect2.getCenterY() - rect1.getCenterY();
		// Average
		const averageWidth = (rect2.width + rect1.width) * 0.5;
		const averageHeight = (rect2.height + rect1.height) * 0.5;

		// // If either distance is greater than the average dimension there is no collision.
		if (Math.abs(differenceCentersX) > averageWidth || Math.abs(differenceCentersY) > averageHeight) return false;
		// if (!this.overlapRectangleAndRectangle(rect1, rect2)) return false;

		if (Math.abs(differenceCentersX / rect1.width) > Math.abs(differenceCentersY / rect1.height)) {
			if (differenceCentersX < 0) { // Left
				rect2.setX(rect1.x - rect2.width);
				return "Left";
			} else { // right
				rect2.setX(rect1.x + rect1.width);
				return "Right";
			}

		} else {
			if (differenceCentersY < 0) { // Top
				rect2.setY(rect1.y - rect2.height);
				return "Top";
			} else { // Bottom
				rect2.setY(rect1.y + rect1.height);
				return "Bottom";
			}
		}
	}
}

export const CollisionDetectionInstance = new CollisionDetection();
