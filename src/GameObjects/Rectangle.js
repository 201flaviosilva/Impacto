import GameObject from "./GameObject.js";

import PositionPrevisions from "../Utils/PositionPrevisions.js";
const positionPrevisions = new PositionPrevisions();

export default class Rectangle extends GameObject {
	constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
		super(x, y, fillColor, strokeColor);
		this.width = width;
		this.height = height;

		this._type = "Rect";
	}

	// Get Positions
	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }

	getCenterX() { return this.x + this.width / 2; }
	getCenterY() { return this.y + this.height / 2; }

	// Size
	setWidth(width) { this.setSize(width, this.height); }
	setHeight(height) { this.setSize(this.width, height); }
	setSize(width, height) {
		this.width = width;
		this.height = height;
	}
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; }

	// Check Overlap
	checkTopOverlap(obj) { return obj.getBottom() >= this.getTop() && obj.getTop() <= this.getTop(); }
	checkBottomOverlap(obj) { return obj.getTop() <= this.getBottom() && obj.getBottom() >= this.getBottom(); }
	checkLeftOverlap(obj) { return obj.getRight() >= this.getLeft() && obj.getLeft() <= this.getLeft(); }
	checkRightOverlap(obj) { return obj.getLeft() <= this.getRight() && obj.getRight() >= this.getRight(); }
	checkOverlap(obj) {
		return obj.getLeft() <= this.getRight() &&
			obj.getRight() >= this.getLeft() &&
			obj.getTop() <= this.getBottom() &&
			obj.getBottom() >= this.getTop();
	}

	checkIsCollidingWith(other) {
		const nextPosition = positionPrevisions.getNextPrevPosition(this);

		const nextBoxBounds = {
			x: nextPosition.x,
			y: nextPosition.y,
			width: this.width,
			height: this.height
		};

		if (other._type === "Rect") return this._overlapDetection.rectangleAndRectangle(nextBoxBounds, other);
		else if (other._type === "Circle") return this._overlapDetection.rectangleAndCircle(nextBoxBounds, other);

		return false;
	}

	// ----- Private methods -----
	_overlapObjects() {
		this.overlapObjects.map(obj => {
			let isColliding;

			if (obj._type === "Rect") isColliding = this._overlapDetection.rectangleAndRectangle(this, obj);
			else if (obj._type === "Circle") isColliding = this._overlapDetection.rectangleAndCircle(this, obj);

			if (isColliding) {
				this.setVelocity(0);
				obj.setVelocity(0);
			}
		});
	}

	_renderType() {
		this._globalStateManager.context.fillRect(this.x, this.y, this.width, this.height);
		this._globalStateManager.context.strokeRect(this.x, this.y, this.width, this.height);
	}

	_debugBody() {
		this._globalStateManager.context.fillStyle = "rgba(0, 0, 0, 0)";
		this._globalStateManager.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
