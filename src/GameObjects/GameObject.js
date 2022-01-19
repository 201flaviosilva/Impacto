import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { SceneManagerInstance } from "../Scenes/SceneManager.js";
import { PositionPrevisionsInstance } from "../Utils/PositionPrevisions.js";
import { CanvasInstance } from "../Utils/Canvas.js";

export default class GameObject {
	constructor(x, y, fillColor, strokeColor) {
		this.id = Math.random();

		// Render
		this.x = x;
		this.y = y;
		this.z = 0;
		this.lastPosition = { x: this.x, y: this.y, z: this.z };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.visible = true;

		// Physics
		this.active = true;
		this.bodyType = "D"; // D = Dynamic, K = Kinematic, S = Static
		this.velocity = { x: 0, y: 0, };
		this.bounce = { x: 0, y: 0, };
		this.friction = { x: 1, y: 1, };
		this.collisionWorldBounds = false;
		this._strokeDebugColor = "#016301";
	}

	// Render
	// Position
	setX(x) { this.setPosition(x, this.y, this.z); }
	setY(y) { this.setPosition(this.x, y, this.z); }
	setZ(z) { this.setPosition(this.x, this.y, z); }
	getPosition() { return { x: this.x, y: this.y, z: this.z }; }
	setPosition(x, y, z = this.z, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.lastPosition = { x: this.x, y: this.y, z: this.z };

		this.x = x;
		this.y = y;
		this.z = z;
	}
	setRandomPosition(x = 0, y = 0, width = GlobalStateManagerInstance.viewportDimensions.width, height = GlobalStateManagerInstance.viewportDimensions.height) {
		do {
			this.setPosition(
				x + Math.random() * width,
				y + Math.random() * height
			);
		} while (!this.checkIsInsideWorldBounds());
	}

	getType() { return this._type; }

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

	// -- Physics
	setActive(isActive) { this.active = isActive; }

	// Body Type
	setDynamicBody() { this.setBodyType("D"); }
	setKinematicBody() { this.setBodyType("K"); }
	setStaticBody() { this.setBodyType("S"); }
	setBodyType(bodyType) {
		if (this.bodyType === bodyType) return;
		this.bodyType = bodyType;
	}
	getBodyType() { return this.bodyType; }

	setVelocityX(x) { this.setVelocity(x, this.velocity.y); }
	setVelocityY(y) { this.setVelocity(this.velocity.x, y); }
	setVelocity(x, y = x) {
		if (this.bodyType === "S") return;

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

	// Check Current Collision With World Bounds
	checkTopCollisionWorldBounds() { return this.getTop() <= 0; }
	checkBottomCollisionWorldBounds() { return this.getBottom() >= GlobalStateManagerInstance.viewportDimensions.height; }
	checkLeftCollisionWorldBounds() { return this.getLeft() <= 0; }
	checkRightCollisionWorldBounds() { return this.getRight() >= GlobalStateManagerInstance.viewportDimensions.width; }
	checkCollisionWorldBounds() {
		return this.checkTopCollisionWorldBounds() ||
			this.checkBottomCollisionWorldBounds() ||
			this.checkLeftCollisionWorldBounds() ||
			this.checkRightCollisionWorldBounds();
	}

	checkIsInsideWorldBounds() {
		return this.getLeft() >= 0 &&
			this.getRight() <= GlobalStateManagerInstance.viewportDimensions.width &&
			this.getTop() >= 0 &&
			this.getBottom() <= GlobalStateManagerInstance.viewportDimensions.height;
	}


	// ----- Private methods -----
	_step() {
		if (!this.active || this.bodyType === "S") return;

		if (this.collisionWorldBounds) {
			if (PositionPrevisionsInstance.checkNextPrevisionTopCollisionWorldBounds(this)
				|| PositionPrevisionsInstance.checkNextPrevisionBottomCollisionWorldBounds(this)) {
				this.setVelocityY(-(this.velocity.y * this.bounce.y + GlobalStateManagerInstance.gravity.y));
			}

			if (PositionPrevisionsInstance.checkNextPrevisionLeftCollisionWorldBounds(this)
				|| PositionPrevisionsInstance.checkNextPrevisionRightCollisionWorldBounds(this)) {
				this.setVelocityX(-(this.velocity.x * this.bounce.x + GlobalStateManagerInstance.gravity.x));
			}
		}

		this.setVelocity(
			this.velocity.x * this.friction.x + GlobalStateManagerInstance.gravity.x,
			this.velocity.y * this.friction.y + GlobalStateManagerInstance.gravity.y
		);

		this.setPosition(
			this.x + this.velocity.x * SceneManagerInstance.deltaTime,
			this.y + this.velocity.y * SceneManagerInstance.deltaTime
		);
	}

	_render() {
		if (!this.visible) return;

		CanvasInstance.context.fillStyle = this.fillColor;
		CanvasInstance.context.strokeStyle = this.strokeColor;
		this._renderType();
	}

	_debug() {
		if (!this.active) return;
		// this._debugBody();
		this._debugVelocity();
	}

	_debugVelocity() {
		CanvasInstance.context.strokeStyle = this._strokeDebugColor;
		CanvasInstance.context.beginPath();
		CanvasInstance.context.moveTo(this.getCenterX(), this.getCenterY());
		CanvasInstance.context.lineTo(this.getCenterX() + this.velocity.x * 5, this.getCenterY() + this.velocity.y * 5);
		CanvasInstance.context.stroke();
	}
}
