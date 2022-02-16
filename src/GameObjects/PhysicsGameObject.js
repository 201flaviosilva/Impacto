import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { SceneManagerInstance } from "../Scenes/SceneManager.js";
import { PositionPrevisionsInstance } from "../Utils/PositionPrevisions.js";
import { CanvasInstance } from "../Utils/Canvas.js";

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

	// -- Physics
	getType() { return this._type; }

	setActive(isActive) { this.active = isActive; }

	// Body Type
	setDynamicBody() { this.setBodyType("D"); }
	setKinematicBody() { this.setBodyType("K"); }
	setStaticBody() { this.setBodyType("S"); }
	setTriggerBody() { this.setBodyType("T"); }
	setBodyType(bodyType) { // D = Dynamic, K = Kinematic, S = Static, T = Trigger
		if (typeof bodyType !== "string" || this.bodyType === bodyType || bodyType.length > 1) return;
		bodyType = bodyType.toUpperCase();
		if (bodyType === "S") { // Reset Static Body
			this.setVelocity(0);
			this.setFriction(0);
			this.setBounce(0);
		}
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

	setMass(mass) { this.mass = mass; }

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
