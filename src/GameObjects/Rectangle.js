import GameObject from './GameObject.js';

export default class Rectangle extends GameObject {
	constructor(scene, x, y, width = 100, height = 100, fillColor = "#00ff00") {
		super(scene, x, y, fillColor);
		this.width = width;
		this.height = height;

		this._type = "Rect";
	}

	// Get Positions
	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }

	getCenterX() { return this.x - this.width / 2; }
	getCenterY() { return this.y - this.height / 2; }

	// Size
	setWidth(width) { this.setSize(width, this.height); }
	setHeight(height) { this.setSize(this.width, height); }
	setSize(width, height) {
		this.width = width;
		this.height = height;
	}
	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; }

	// Get Collision
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

	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.x <= 0 || this.x + this.width >= this._scene.configuration.width) this.velocity.x *= -this.bounce.x;
		else if (this.y <= 0 || this.y + this.height >= this._scene.configuration.height) this.velocity.y *= -this.bounce.y;
	}

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
		this._scene.context.fillRect(this.x, this.y, this.width, this.height);
		this._scene.context.strokeRect(this.x, this.y, this.width, this.height);
	}

	_debug() {
		if (!this.active) return;
		this._scene.context.fillStyle = "rgba(0, 0, 0, 0)";
		this._scene.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
