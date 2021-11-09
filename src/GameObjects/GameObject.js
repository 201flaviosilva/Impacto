import Utils from "../Utils/Utils.js";
const utils = new Utils();

export default class GameObject {
	constructor(scene, x, y, fillColor, strokeColor = "#000000") {
		this._scene = scene;

		// Render
		this.x = x;
		this.y = y;
		this.z = 0;
		this._lastPosition = { x: this.x, y: this.y, z: this.z };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.visible = true;

		// Physics
		this.active = true;
		this.velocity = { x: 0, y: 0 };
		this.bounce = { x: 0, y: 0 };
		this.collisionWorldBounds = false;
		this.overlapObjects = [];
		this._overlapDetection = utils.overlapDetection;
		this._strokeDebugColor = "#00ff00";
	}

	// Render
	// Position
	setX(x) { this.setPosition(x, this.y, this.z); }
	setY(y) { this.setPosition(this.x, y, this.z); }
	setZ(z) { this.setPosition(this.x, this.y, z); }
	getPosition() { return { x: this.x, y: this.y, z: this.z }; }
	setPosition(x, y, z = this.z) {
		this.x = x;
		this.y = y;
		this.z = z;
		this._lastPosition = { x: this.x, y: this.y, z: this.z };
	}
	setRandomPosition(x = 0, y = 0, width = this._scene.configuration.width, height = this._scene.configuration.height) {
		do {
			this.setPosition(
				x + Math.random() * width,
				y + Math.random() * height
			);
		} while (!this.checkIsInsideWorldBounds());
	}

	getCenter() { return { x: this.getCenterX(), y: this.getCenterY() }; }

	getTopLeft() { return { x: this.getLeft(), y: this.getTop() }; }
	getTopCenter() { return { x: this.getCenterX(), y: this.getTop() }; }
	getTopRight() { return { x: this.getRight(), y: this.getTop() }; }

	getBottomLeft() { return { x: this.getLeft(), y: this.getBottom() }; }
	getBottomCenter() { return { x: this.getCenterX(), y: this.getBottom() }; }
	getBottomRight() { return { x: this.getRight(), y: this.getBottom() }; }

	getLeftCenter() { return { x: this.getLeft(), y: this.getCenterY() }; }
	getRightCenter() { return { x: this.getRight(), y: this.getCenterY() }; }

	// Color
	setFillColor(fillColor) { this.fillColor = fillColor; }
	setStrokeColor(strokeColor) { this.strokeColor = strokeColor; }

	setVisible(isVisible) { this.visible = isVisible; }

	// Physics
	setActive(isActive) { this.active = isActive; }

	setVelocityX(x) { this.setVelocity(x, this.velocity.y); }
	setVelocityY(y) { this.setVelocity(this.velocity.x, y); }
	setVelocity(x, y = x) {
		this.velocity.x = x;
		this.velocity.y = y;
	}

	setBounceX(x) { this.setBounce(x, this.bounce.y); }
	setBounceY(y) { this.setBounce(this.bounce.x, y); }
	setBounce(x, y = x) {
		this.bounce.x = x;
		this.bounce.y = y;
	}

	setCollisionWorldBounds(collisionWorldBounds) { this.collisionWorldBounds = collisionWorldBounds; }
	addOverlapObject(gameObject) { this.overlapObjects.push(gameObject); }

	// Check Collision With World Bounds
	checkTopCollisionWorldBounds() { return this.getTop() <= 0; }
	checkBottomCollisionWorldBounds() { return this.getBottom() >= this._scene.configuration.height; }
	checkLeftCollisionWorldBounds() { return this.getLeft() <= 0; }
	checkRightCollisionWorldBounds() { return this.getRight() >= this._scene.configuration.width; }
	checkCollisionWorldBounds() {
		return this.checkTopCollisionWorldBounds() ||
			this.checkBottomCollisionWorldBounds() ||
			this.checkLeftCollisionWorldBounds() ||
			this.checkRightCollisionWorldBounds();
	}

	checkIsInsideWorldBounds() {
		return this.getLeft() >= 0 &&
			this.getRight() <= this._scene.configuration.width &&
			this.getTop() >= 0 &&
			this.getBottom() <= this._scene.configuration.height;
	}


	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.checkLeftCollisionWorldBounds() || this.checkRightCollisionWorldBounds()) {
			this.velocity.x *= -this.bounce.x;
			this.x += this.velocity.x * this._scene.deltaTime;
		}
		else if (this.checkTopCollisionWorldBounds() || this.checkBottomCollisionWorldBounds()) {
			this.velocity.y *= -this.bounce.y;
			this.y += this.velocity.y * this._scene.deltaTime;
		}
	}

	_step() {
		if (!this.active) return;

		this._lastPosition = { x: this.x, y: this.y, z: this.z };
		this.x += this.velocity.x * this._scene.deltaTime;
		this.y += this.velocity.y * this._scene.deltaTime;

		if (this.collisionWorldBounds) this._collisionWorldBounds();

		this._overlapObjects();
	}

	_render() {
		if (!this.visible) return;

		this._scene.context.fillStyle = this.fillColor;
		this._scene.context.strokeStyle = this.strokeColor;
		this._renderType();
	}

	_debugBound() {
		this._scene.context.fillStyle = "#ffffff";
		const radius = 3;

		this._scene.context.beginPath();
		this._scene.context.arc(this.getTopLeft().x, this.getTopLeft().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getTopCenter().x, this.getTopCenter().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getTopRight().x, this.getTopRight().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getLeftCenter().x, this.getLeftCenter().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getRightCenter().x, this.getRightCenter().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();


		this._scene.context.beginPath();
		this._scene.context.arc(this.getBottomLeft().x, this.getBottomLeft().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getBottomCenter().x, this.getBottomCenter().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();

		this._scene.context.beginPath();
		this._scene.context.arc(this.getBottomRight().x, this.getBottomRight().y, radius, 0, 2 * Math.PI);
		this._scene.context.fill();
		this._scene.context.stroke();
	}
}
