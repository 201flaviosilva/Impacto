import { GlobalStateManagerInstance } from "../State/GlobalStateManager.js";
import { CanvasInstance } from "../Utils/Canvas.js";

export default class GameObject {
	constructor(x, y, fillColor, strokeColor) {
		this.id = Math.random();
		this.name = `Obj - ${this.id}`;

		// Render
		this.x = x;
		this.y = y;
		this.z = 0;
		this.lastPosition = { x: this.x, y: this.y, z: this.z };
		this.fillColor = fillColor;
		this.strokeColor = strokeColor;
		this.visible = true;
	}

	setName(name) { this.name = name; }

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

	_render() {
		if (!this.visible) return;

		CanvasInstance.context.fillStyle = this.fillColor;
		CanvasInstance.context.strokeStyle = this.strokeColor;
		this._renderType();
	}
}
