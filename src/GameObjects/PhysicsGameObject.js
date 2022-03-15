import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { SceneManagerInstance } from "../Scenes/SceneManager.js";
import { PositionPrevisionsInstance } from "../Physics/PositionPrevisions.js";
import { CanvasStateInstance } from "../State/CanvasState.js";

import GameObject from "./GameObjectBase.js";

export default class PhysicsGameObject extends GameObject {
	constructor(x, y, fillColor, strokeColor) {
		super(x, y, fillColor, strokeColor);

		// Physics
		this.active = true;
		this.bodyType = "D"; // D = Dynamic, K = Kinematic, S = Static, T = Trigger
		this.velocity = { x: 0, y: 0, };
		this.bounce = { x: 0, y: 0, };
		this.friction = { x: 1, y: 1, };
		this.mass = 1;
		this.collisionWorldBounds = false;
		this._strokeDebugColor = "#016301";
	}

	getType() { return this._type; }

	setActive(isActive) {
		this.active = isActive;
		return this;
	}

	// Body Type
	setDynamicBody() {
		this.setBodyType("D");
		return this;
	}
	setKinematicBody() {
		this.setBodyType("K");
		return this;
	}
	setStaticBody() {
		this.setBodyType("S");
		return this;
	}
	setTriggerBody() {
		this.setBodyType("T");
		return this;
	}
	setBodyType(bodyType) { // D = Dynamic, K = Kinematic, S = Static, T = Trigger
		if (typeof bodyType !== "string" || this.bodyType === bodyType || bodyType.length > 1) return this;
		bodyType = bodyType.toUpperCase();
		if (bodyType === "S") { // Reset Static Body
			this.setVelocity(0);
			this.setFriction(0);
			this.setBounce(0);
		}
		this.bodyType = bodyType;
		return this;
	}
	getBodyType() { return this.bodyType; }

	// Velocity
	setVelocityX(x) {
		this.setVelocity(x, this.velocity.y);
		return this;
	}
	setVelocityY(y) {
		this.setVelocity(this.velocity.x, y);
		return this;
	}
	setVelocity(x, y = x) {
		if (this.bodyType === "S") return;

		this.velocity.x = x;
		this.velocity.y = y;
		return this;
	}

	// Friction
	setFrictionX(x) {
		this.setFriction(x, this.friction.y);
		return this;
	}
	setFrictionY(y) {
		this.setFriction(this.friction.x, y);
		return this;
	}
	setFriction(x, y = x) {
		this.friction.x = x;
		this.friction.y = y;
		return this;
	}

	// Bounce
	setBounceX(x) {
		this.setBounce(x, this.bounce.y);
		return this;
	}
	setBounceY(y) {
		this.setBounce(this.bounce.x, y);
		return this;
	}
	setBounce(x, y = x) {
		this.bounce.x = x;
		this.bounce.y = y;
		return this;
	}

	// Mass
	setMass(mass) {
		this.mass = mass;
		return this;
	}

	// Collisions
	setCollisionWorldBounds(collisionWorldBounds) {
		this.collisionWorldBounds = collisionWorldBounds;
		return this;
	}

	// Check Current Collision With World Bounds
	checkTopCollisionWorldBounds() { return this.getTop() <= 0; }
	checkBottomCollisionWorldBounds() { return this.getBottom() >= CanvasStateInstance.height; }
	checkLeftCollisionWorldBounds() { return this.getLeft() <= 0; }
	checkRightCollisionWorldBounds() { return this.getRight() >= CanvasStateInstance.width; }
	checkCollisionWorldBounds() {
		return this.checkTopCollisionWorldBounds() ||
			this.checkBottomCollisionWorldBounds() ||
			this.checkLeftCollisionWorldBounds() ||
			this.checkRightCollisionWorldBounds();
	}

	checkIsInsideWorldBounds() {
		return this.getLeft() >= 0 &&
			this.getRight() <= CanvasStateInstance.width &&
			this.getTop() >= 0 &&
			this.getBottom() <= CanvasStateInstance.height;
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
			this._x + this.velocity.x * SceneManagerInstance.deltaTime,
			this._y + this.velocity.y * SceneManagerInstance.deltaTime
		);
	}

	_debug() {
		if (!this.active) return;
		// this._debugBody();
		this._debugVelocity();
	}

	_debugVelocity() {
		CanvasStateInstance.context.strokeStyle = this._strokeDebugColor;
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.getCenterX(), this.getCenterY());
		CanvasStateInstance.context.lineTo(this.getCenterX() + this.velocity.x * 5, this.getCenterY() + this.velocity.y * 5);
		CanvasStateInstance.context.stroke();
	}
}
