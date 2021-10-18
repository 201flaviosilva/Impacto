import Utils from "../Utils/Utils.js";
const utils = new Utils();

export default class GameObject {
	constructor(x, y, fillColor = "#000000", strokeColor = "#000000") {
		// Render
		this.x = x;
		this.y = y;
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

	setVisible(isVisible) { this.visible = isVisible; }

	// Physics
	setActive(isActive) { this.active = isActive; }

	setVelocityX(x) { this.setVelocity(x, this.velocity.y); }
	setVelocityY(y) { this.setVelocity(this.velocity.x, y); }
	setVelocity(x, y) {
		if (!y) y = x;
		this.velocity.x = x;
		this.velocity.y = y;
	}

	setBounceX(x) { this.setBounce(x, this.bounce.y); }
	setBounceY(y) { this.setBounce(this.bounce.x, y); }
	setBounce(x, y) {
		if (!y) y = x;
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
