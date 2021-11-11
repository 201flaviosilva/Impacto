import GlobalStateManager from "../State/GlobalStateManager.js";
import SceneManager from "../Scenes/SceneManager.js";

import Utils from "../Utils/Utils.js";
const utils = new Utils();

export default class GameObject {
	constructor(x, y, fillColor, strokeColor) {
		this._globalStateManager = new GlobalStateManager();
		this._sceneManager = new SceneManager();

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
		this.velocity = { x: 0, y: 0, };
		this.bounce = { x: 0, y: 0, };
		this.friction = { x: 1, y: 1, };
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
	setRandomPosition(x = 0, y = 0, width = this._globalStateManager.viewportDimensions.width, height = this._globalStateManager.viewportDimensions.height) {
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

	setFrictionX(x) { this.setFriction(x, this.friction.y); }
	setFrictionY(y) { this.setFriction(this.friction.x, y); }
	setFriction(x, y = x) {
		this.friction.x = x;
		this.friction.y = y;
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
	checkBottomCollisionWorldBounds() { return this.getBottom() >= this._globalStateManager.viewportDimensions.height; }
	checkLeftCollisionWorldBounds() { return this.getLeft() <= 0; }
	checkRightCollisionWorldBounds() { return this.getRight() >= this._globalStateManager.viewportDimensions.width; }
	checkCollisionWorldBounds() {
		return this.checkTopCollisionWorldBounds() ||
			this.checkBottomCollisionWorldBounds() ||
			this.checkLeftCollisionWorldBounds() ||
			this.checkRightCollisionWorldBounds();
	}

	checkIsInsideWorldBounds() {
		return this.getLeft() >= 0 &&
			this.getRight() <= this._globalStateManager.viewportDimensions.width &&
			this.getTop() >= 0 &&
			this.getBottom() <= this._globalStateManager.viewportDimensions.height;
	}


	// ----- Private methods -----
	_collisionWorldBounds() {
		if (this.checkLeftCollisionWorldBounds() || this.checkRightCollisionWorldBounds()) {
			this.velocity.x *= -this.bounce.x;
			this.x += this.velocity.x * this._sceneManager.deltaTime;
		} else if (this.checkTopCollisionWorldBounds() || this.checkBottomCollisionWorldBounds()) {
			this.velocity.y *= -this.bounce.y;
			this.y += this.velocity.y * this._sceneManager.deltaTime;
		}
	}

	_step() {
		if (!this.active) return;

		this.velocity.x *= this.friction.x;
		this.velocity.y *= this.friction.y;

		this._lastPosition = { x: this.x, y: this.y, z: this.z };
		this.x += this.velocity.x * this._sceneManager.deltaTime;
		this.y += this.velocity.y * this._sceneManager.deltaTime;

		if (this.collisionWorldBounds) this._collisionWorldBounds();

		this._overlapObjects();
	}

	_render() {
		if (!this.visible) return;

		this._globalStateManager.context.fillStyle = this.fillColor;
		this._globalStateManager.context.strokeStyle = this.strokeColor;
		this._renderType();
	}

	_debug() {
		if (!this.active) return;
		// this._debugBody();
		this._debugBound();
		this._debugVelocity();
	}

	_debugBound() {
		this._globalStateManager.context.strokeStyle = "#000000";
		this._globalStateManager.context.fillStyle = "#ffffff";
		const radius = 3;

		drawDebug(this._globalStateManager.context, this.getTopLeft().x, this.getTopLeft().y);
		drawDebug(this._globalStateManager.context, this.getTopCenter().x, this.getTopCenter().y);
		drawDebug(this._globalStateManager.context, this.getTopRight().x, this.getTopRight().y);

		drawDebug(this._globalStateManager.context, this.getLeftCenter().x, this.getLeftCenter().y);
		drawDebug(this._globalStateManager.context, this.getRightCenter().x, this.getRightCenter().y);
		drawDebug(this._globalStateManager.context, this.getBottomLeft().x, this.getBottomLeft().y);

		drawDebug(this._globalStateManager.context, this.getBottomCenter().x, this.getBottomCenter().y);
		drawDebug(this._globalStateManager.context, this.getCenter().x, this.getCenter().y);
		drawDebug(this._globalStateManager.context, this.getBottomRight().x, this.getBottomRight().y);

		function drawDebug(context, x, y) {
			context.beginPath();
			context.arc(x, y, radius, 0, 2 * Math.PI);
			context.fill();
			context.stroke();
		}
	}

	_debugVelocity() {
		this._globalStateManager.context.beginPath();
		this._globalStateManager.context.moveTo(this.getCenterX(), this.getCenterY());
		this._globalStateManager.context.lineTo(this.getCenterX() + this.velocity.x, this.getCenterY() + this.velocity.y);
		this._globalStateManager.context.stroke();
	}
}
