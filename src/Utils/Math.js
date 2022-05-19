export default class UtilsMath {
	randomFloat(min, max, precision = 2) {
		if (!max) {
			max = min;
			min = 0;
		}
		return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
	}

	randomInt(min, max) { return Math.floor(this.randomFloat(min, max)); };

	randomColor() { return "#" + (Math.random() * 0xFFFFFF << 0).toString(16); }

	degreesToRadians(degrees) { return degrees * Math.PI / 180; }
	radiansToDegrees(radians) { return radians * 180 / Math.PI; }

	// Points
	distanceTwoPoints(x1, y1, x2, y2) { return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)); }
	distanceTwoPointsVector2(point1, point2) { return this.distanceTwoPoints(point1.x, point1.y, point2.x, point2.y); }

	angleBetweenTwoPoints(x1, y1, x2, y2) { return Math.atan2(y2 - y1, x2 - x1); }
	angleBetweenTwoPointsVector2(point1, point2) { return this.angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y); }
	angleBetweenTwoPointsDegrees(x1, y1, x2, y2) { return this.angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI; }
	angleBetweenTwoPointsVector2Degrees(point1, point2) { return this.angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y); }

	// Circles
	distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
		return this.distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
	}
	distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
		return this.distanceBetweenTwoCirclesFromCircle(
			{ x: x1, y: y1, radius: radius1 },
			{ x: x2, y: y2, radius: radius2 }
		);
	}

	circleArea(radius) { return Math.PI * radius * radius; }
	circlePerimeter(radius) { return 2 * Math.PI * radius; }

	// Rectangles
	distanceBetweenTwoRectanglesFromRectangle(rect1, rect2) {
		const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
		const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
		return xOverlap * yOverlap;
	}
	distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
		return this.distanceBetweenTwoRectanglesFromRectangle(
			{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
			{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
		);
	}

	angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
		return this.angleBetweenTwoRectanglesFromRectangle(
			{ x: x1 + width1 / 2, y: y1 + height1 / 2, width: width1, height: height1 },
			{ x: x2 + width2 / 2, y: y2 + height2 / 2, width: width2, height: height2 }
		);
	}
	angleBetweenTwoRectanglesFromRectangle(rect1, rect2) {
		const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
		const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
		return Math.atan2(yOverlap, xOverlap);
	}

	rectangleArea(width, height) { return width * height; }
	rectanglePerimeter(width, height) { return 2 * (width + height); }
	rectanglePerimeterFromRectangle(rectangle) { return this.rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

	rectangleVertices(x, y, width, height) {
		return [
			{ x: x, y: y },
			{ x: x + width, y: y },
			{ x: x + width, y: y + height },
			{ x: x, y: y + height }
		];
	}
	rectangleVerticesFromRectangle(rectangle) { return this.rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

	rectangleCenterX(x, width) { return x + width / 2; }
	rectangleCenterY(y, height) { return y + height / 2; }
	rectangleCenter(x, y, width, height) { return { x: this.rectangleCenterX(x, width), y: this.rectangleCenterY(y, height) }; }
	rectangleCenterXFromRectangleBounds(rectangle) { return this.rectangleCenterX(rectangle.x, rectangle.width); }
	rectangleCenterYFromRectangleBounds(rectangle) { return this.rectangleCenterY(rectangle.y, rectangle.height); }
	rectangleCenterFromRectangleBounds(rectangle) { return this.rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }

	rectangleTopLeft(x, y) { return { x, y }; }
	rectangleTopRight(x, y, width) { return { x: x + width, y }; }
	rectangleBottomLeft(x, y, height) { return { x, y: y + height }; }
	rectangleBottomRight(x, y, width, height) { return { x: x + width, y: y + height }; }
	rectangleTopLeftFromRectangleBounds(rectangle) { return this.rectangleTopLeft(rectangle.x, rectangle.y); }
	rectangleTopRightFromRectangleBounds(rectangle) { return this.rectangleTopRight(rectangle.x, rectangle.y, rectangle.width); }
	rectangleBottomLeftFromRectangleBounds(rectangle) { return this.rectangleBottomLeft(rectangle.x, rectangle.y, rectangle.height); }
	rectangleBottomRightFromRectangleBounds(rectangle) { return this.rectangleBottomRight(rectangle.x, rectangle.y, rectangle.width, rectangle.height); }
}

export const UtilsMathInstance = new UtilsMath();
