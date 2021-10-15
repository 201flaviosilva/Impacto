import GameObject from './GameObject.js';

export default class Circle extends GameObject {
	constructor(scene, x, y, radius, fillColor) {
		super(x, y, fillColor);
		this.radius = radius;

		this._scene = scene;
		this._type = "Circle";
	}

	setRadius(radius) { this.radius = radius; }



	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.x - this.radius <= 0 || this.x + this.radius >= this._scene.width) this.velocity.x *= -1;
		else if (this.y - this.radius <= 0 || this.y + this.radius >= this._scene.height) this.velocity.y *= -1;
	}

	_overlapObjects() {
		this.overlapObjects.map(obj => {
			let isColliding;

			if (obj._type === "Rect") isColliding = this._overlapDetection.rectangleAndCircle(obj, this);
			else if (obj._type === "Circle") isColliding = this._overlapDetection.circleAndCircle(this, obj);

			if (isColliding) {
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
}
