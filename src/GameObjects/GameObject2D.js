import { CanvasStateInstance } from "../State/CanvasState.js";
import { UtilsMathInstance } from "../Utils/Math.js";

export default class GameObject2D {
	constructor(x, y, fillColor, strokeColor) {
		this.id = Math.random();
		this.name = `Obj - ${this.id}`;

		// Render
		this._x = x; // Get the real position X
		this._y = y; // Get the real position Y
		this.z = 0;
		this.rotation = 0; // Rotation in radians
		this.angle = 0; // Rotation in degrees
		this.scale = { x: 1, y: 1 };

		this.lastPosition = { x: this._x, y: this._y, z: this.z };
		this.origin = { x: 0, y: 0 };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.strokeWidth = 1;
		this.visible = true;
	}

	setName(name) {
		this.name = name;
		return this;
	}

	// Position
	setX(x) {
		this.setPosition(x + (this.width || this.radius) * this.origin.x, this._y, this.z);
		return this;
	}
	setY(y) {
		this.setPosition(this._x, y + (this.height || this.radius) * this.origin.y, this.z);
		return this;
	}
	setZ(z) {
		this.setPosition(this._x, this._y, z);
		return this;
	}
	getPosition() { return { x: this.x, y: this.y, z: this.z }; }
	getRealPosition() { return { x: this._x, y: this._y, z: this.z }; }
	setPosition(x, y, z = this.z) {
		this.lastPosition = { x: this.x, y: this.y, z: this.z };

		this._x = x;
		this._y = y;
		this.z = z;
		return this;
	}
	setRandomPosition(x = 0, y = 0, width = CanvasStateInstance.width, height = CanvasStateInstance.height) {
		this.setPosition(
			x + Math.random() * width,
			y + Math.random() * height
		);
		return this;
	}

	// Rotation and angle
	setRotation(rotation) {
		this.rotation = rotation;
		this.angle = UtilsMathInstance.radiansToDegrees(rotation);
		return this;
	}

	setAngle(angle) {
		this.angle = angle;
		this.rotation = UtilsMathInstance.degreesToRadians(angle);
		return this;
	}

	// Scale
	// Origin
	setScaleX(x) {
		this.setScale(x, this.scale.y);
		return this;
	}
	setScaleY(y) {
		this.setScale(this.scale.x, y);
		return this;
	}
	setScale(x = 0, y = x) {
		this.scale = { x, y };
		return this;
	}

	// Origin
	setOriginX(x) {
		this.setOrigin(x, this.origin.y);
		return this;
	}
	setOriginY(y) {
		this.setOrigin(this.origin.x, y);
		return this;
	}
	setOrigin(x = 0, y = x) {
		this.origin = { x, y };
		return this;
	}

	getCenter() { return { x: this.getCenterX(), y: this.getCenterY() }; }

	getTopLeft() { return { x: this.getLeft(), y: this.getTop() }; }
	getTopCenter() { return { x: this.getCenterX(), y: this.getTop() }; }
	getTopRight() { return { x: this.getRight(), y: this.getTop() }; }

	getBottomLeft() { return { x: this.getLeft(), y: this.getBottom() }; }
	getBottomCenter() { return { x: this.getCenterX(), y: this.getBottom() }; }
	getBottomRight() { return { x: this.getRight(), y: this.getBottom() }; }

	getCenterLeft() { return { x: this.getLeft(), y: this.getCenterY() }; }
	getCenterRight() { return { x: this.getRight(), y: this.getCenterY() }; }

	// Color
	setFillColor(fillColor) {
		this.fillColor = fillColor;
		return this;
	}
	setStrokeColor(strokeColor) {
		this.strokeColor = strokeColor;
		return this;
	}

	setStrokeWidth(strokeWidth) {
		this.strokeWidth = strokeWidth;
		return this;
	}

	setVisible(isVisible) {
		this.visible = isVisible;
		return this;
	}

	_render(deltaTime) {
		if (!this.visible) return;

		CanvasStateInstance.context.save();

		// Scale
		CanvasStateInstance.context.translate(this.x, this.y);
		CanvasStateInstance.context.scale(this.scale.x, this.scale.y);
		CanvasStateInstance.context.translate(-this.x, -this.y);

		// Rotation
		CanvasStateInstance.context.translate(this._x, this._y);
		CanvasStateInstance.context.rotate(this.rotation);
		CanvasStateInstance.context.translate(-this._x, -this._y);

		CanvasStateInstance.context.fillStyle = this.fillColor;
		CanvasStateInstance.context.strokeStyle = this.strokeColor;
		CanvasStateInstance.context.lineWidth = this.strokeWidth;
		this._renderType(deltaTime);

		CanvasStateInstance.context.restore();
	}
}
