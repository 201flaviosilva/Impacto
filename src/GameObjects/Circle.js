import GameObject from './GameObject.js';

export default class Circle extends GameObject {
	constructor(scene, x, y, radius = 10, fillColor = "#00ff00") {
		super(scene, x, y, fillColor);
		this.radius = radius;

		this._type = "Circle";
	}

	getRadius() { return this.radius; }
	setRadius(radius) { this.radius = radius; }

	getTop() { return this.y - this.radius; }
	getBottom() { return this.y + this.radius; }
	getLeft() { return this.x - this.radius; }
	getRight() { return this.x + this.radius; }

	getCenterX() { return this.x; }
	getCenterY() { return this.y; }

	getBounds() { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; }


	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.x - this.radius <= 0 || this.x + this.radius >= this._scene.configuration.width) this.velocity.x *= -this.bounce.x;
		else if (this.y - this.radius <= 0 || this.y + this.radius >= this._scene.configuration.height) this.velocity.y *= -this.bounce.y;
	}

	_overlapObjects() {
		this.overlapObjects.map(obj => {
			let isOverlapping;

			if (obj._type === "Rect") isOverlapping = this._overlapDetection.rectangleAndCircle(obj, this);
			else if (obj._type === "Circle") isOverlapping = this._overlapDetection.circleAndCircle(this, obj);

			if (isOverlapping) {
				this.setVelocity(0);
				obj.setVelocity(0);
			}
		});
	}

	_renderType() {
		this._scene.context.beginPath();
		this._scene.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();
	}

	_debug() {
		if (!this.active) return;
		this._scene.context.fillStyle = "rgba(0, 0, 0, 0)";
		this._scene.context.strokeStyle = this._strokeDebugColor;
		this._renderType();
	}
}
