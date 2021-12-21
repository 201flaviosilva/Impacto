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
	checkTopOverlap(other) { return other.getBottom() >= this.getTop() && other.getTop() <= this.getTop(); }
	checkBottomOverlap(other) { return other.getTop() <= this.getBottom() && other.getBottom() >= this.getBottom(); }
	checkLeftOverlap(other) { return other.getRight() >= this.getLeft() && other.getLeft() <= this.getLeft(); }
	checkRightOverlap(other) { return other.getLeft() <= this.getRight() && other.getRight() >= this.getRight(); }
	checkOverlap(other) {
		return other.getLeft() <= this.getRight() &&
			other.getRight() >= this.getLeft() &&
			other.getTop() <= this.getBottom() &&
			other.getBottom() >= this.getTop();
	}

	// Zone: Detect Collision
	getNextBoxBound() {
		const nextPosition = positionPrevisions.getNextPrevPosition(this);
		return {
			x: nextPosition.x,
			y: nextPosition.y,
			width: this.width,
			height: this.height
		};
	}

	getNextBoxBoundTop() { return this.getNextBoxBound().y; }
	getNextBoxBoundBottom() { return this.getNextBoxBound().y + this.height; }
	getNextBoxBoundLeft() { return this.getNextBoxBound().x; }
	getNextBoxBoundRight() { return this.getNextBoxBound().x + this.getNextBoxBound().width; }

	checkWillTopOverlap(other) { return other.getBottom() >= this.getNextBoxBoundTop() && other.getTop() <= this.getNextBoxBoundTop(); }
	checkWillBottomOverlap(other) { return other.getTop() <= this.getNextBoxBoundBottom() && other.getBottom() >= this.getNextBoxBoundBottom(); }
	checkWillLeftOverlap(other) { return other.getRight() >= this.getNextBoxBoundLeft() && other.getLeft() <= this.getNextBoxBoundLeft(); }
	checkWillRightOverlap(other) { return other.getLeft() <= this.getNextBoxBoundRight() && other.getRight() >= this.getNextBoxBoundRight(); }

	checkWillCollideTopWith(other) {
		if (this.checkWillLeftOverlap(other) || this.checkWillRightOverlap(other)) {
			return other.getBottom() >= this.getNextBoxBoundTop() && other.getTop() <= this.getNextBoxBoundBottom();
		}
		return false;
	}

	checkWillCollideBottomWith(other) {
		if (this.checkWillLeftOverlap(other) || this.checkWillRightOverlap(other)) {
			return other.getTop() <= this.getNextBoxBoundBottom() && other.getBottom() >= this.getNextBoxBoundTop();
		}
		return false;
	}

	checkWillCollideLeftWith(other) {
		if (this.checkWillTopOverlap(other) || this.checkWillBottomOverlap(other)) {
			return other.getRight() >= this.getNextBoxBoundLeft() && other.getLeft() <= this.getNextBoxBoundRight();
		}
		return false;
	}

	checkWillCollideRightWith(other) {
		if (this.checkWillTopOverlap(other) || this.checkWillBottomOverlap(other)) {
			return other.getLeft() <= this.getNextBoxBoundRight() && other.getRight() >= this.getNextBoxBoundLeft();
		}
		return false;
	}

	checkWillCollideVerticalWith(other) {
		return this.checkWillCollideTopWith(other) || this.checkWillCollideBottomWith(other);
	}

	checkWillCollideHorizontalWith(other) {
		return this.checkWillCollideLeftWith(other) || this.checkWillCollideRightWith(other);
	}

	checkWillCollideWith(other) {
		return this.checkWillCollideTopWith(other) ||
			this.checkWillCollideBottomWith(other) ||
			this.checkWillCollideLeftWith(other) ||
			this.checkWillCollideRightWith(other);
	}

	// End Zone: Detect Collision

	// ----- Private methods -----
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
