// Collision Detection

import { UtilsMathInstance } from "../Utils/Math.js";
import Vector2 from "../Utils/Vector2.js";

export default class CollisionDetection {
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

}

export const CollisionDetectionInstance = new CollisionDetection();
