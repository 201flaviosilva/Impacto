import Utils from "../Utils/Utils.js";
const utils = new Utils();

export default class GameObject {
	constructor(x, y, fillColor = "#00ff00", strokeColor = "#000000") {
		// Render
		this.x = x;
		this.y = y;
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;

		// Physics
		this.velocity = { x: 0, y: 0 };
		this.collisionWorldBounds = false;
		this.overlapObjects = [];
		this._overlapDetection = utils.overlapDetection;
	}

	// Position
	setX(x) { this.setPosition(x, this.y); }
	setY(y) { this.setPosition(this.x, y); }
	setPosition(x, y) {
		this.x = x;
		this.y = y;
	}
	setRandomPosition() {
		this.setPosition(
			Math.random() * this._scene.canvas.width,
			Math.random() * this._scene.canvas.height
		);
	}

	// Color
	setFillColor(fillColor) { this.fillColor = fillColor; }
	setStrokeColor(strokeColor) { this.strokeColor = strokeColor; }

	setVelocityX(x) { this.setVelocity(x, this.velocity.y); }
	setVelocityY(y) { this.setVelocity(this.velocity.x, y); }
	setVelocity(x, y) {
		if (!y) y = x;
		this.velocity.x = x;
		this.velocity.y = y;
	}

	setCollisionWorldBounds(isCollisionWorldBounds) { this.collisionWorldBounds = isCollisionWorldBounds; }
	addOverlapObject(gameObject) { this.overlapObjects.push(gameObject); }


	// ----- Private methods -----
	_step() {
		this.x += this.velocity.x * this._scene.deltaTime;
		this.y += this.velocity.y * this._scene.deltaTime;

		if (this.collisionWorldBounds) this._collisionWorldBounds();

		this._overlapObjects();
	}

	_render() {
		this._scene.context.fillStyle = this.fillColor;
		this._scene.context.strokeStyle = this.strokeColor;
		this._renderType();
	}
}
