import GameObject from './GameObject.js';

export default class Rectangle extends GameObject {
	constructor(scene, x, y, width, height, fillColor) {
		super(x, y, fillColor);
		this.width = width;
		this.height = height;

		this._scene = scene;
		this._type = "Rect";
	}

	// Get Positions
	getCenterX() { return this.x - this.width / 2; }
	getCenterY() { return this.y - this.height / 2; }

	// Size
	setWidth(width) { this.setSize(width, this.height); }
	setHeight(height) { this.setSize(this.width, height); }
	setSize(width, height) {
		this.width = width;
		this.height = height;
	}



	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.x <= 0 || this.x + this.width >= this._scene.width) this.velocity.x *= -1;
		else if (this.y <= 0 || this.y + this.height >= this._scene.height) this.velocity.y *= -1;
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
}
