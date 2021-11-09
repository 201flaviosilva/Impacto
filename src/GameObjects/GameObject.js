import Utils from "../Utils/Utils.js";
const utils = new Utils();

export default class GameObject {
	constructor(scene, x, y, fillColor, strokeColor = "#000000") {
		this._scene = scene;

		// Render
		this.x = x;
		this.y = y;
		this.z = 0;
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
	}
	setRandomPosition(x = 0, y = 0, width = this._scene.configuration.width, height = this._scene.configuration.height) {
		this.setPosition(
			x + Math.random() * width,
			y + Math.random() * height
		);
	}

	getCenter() { return { x: this.getCenterX(), y: this.getCenterY() }; }

	getTopLeft() { return { x: this.getTopLeft(), y: this.getTop() }; }
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


	// ----- Private methods -----
	_step() {
		if (!this.active) return;

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
}
