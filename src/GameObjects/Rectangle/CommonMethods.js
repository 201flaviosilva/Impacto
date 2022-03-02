import { CanvasInstance } from "../../Utils/Canvas.js";

const CommonMethods = {
	// Positions Based in the origin
	getTop: function () { return this.y; },
	getBottom: function () { return this.y + this.height; },
	getLeft: function () { return this.x; },
	getRight: function () { return this.x + this.width; },

	getCenterX: function () { return this.getLeft() + this.width / 2; },
	getCenterY: function () { return this.getTop() + this.height / 2; },

	// Get Real Positions
	getRealTop: function () { return this._y; },
	getRealBottom: function () { return this._y + this.height; },
	getRealLeft: function () { return this._x; },
	getRealRight: function () { return this._x + this.width; },

	getRealCenterX: function () { return this.getRealLeft() + this.width / 2; },
	getRealCenterY: function () { return this.getRealTop() + this.height / 2; },

	// Size
	setWidth: function (width) {
		this.setSize(width, this.height);
		return this;
	},
	setHeight: function (height) {
		this.setSize(this.width, height);
		return this;
	},
	setSize: function (width, height = width, force = false) {
		if (this.bodyType === "S" && !force) return;
		this.width = width;
		this.height = height;
		return this;
	},

	// Update position and size of the rectangle (used mostly in static objects)
	refresh: function (x, y, width, height) {
		this.setPosition(x, y, this.z, true);
		this.setSize(width, height, true);
		return this;
	},

	// Utils
	getBounds: function () { return { x: this.getLeft(), y: this.getTop(), width: this.width, height: this.height }; },
	getArea: function () { return this.width * this.height; },
	getPerimeter: function () { return 2 * (this.width + this.height); },
	getVertices: function () {
		return [
			{ x: this.x, y: this.y },
			{ x: this.x + this.width, y: this.y },
			{ x: this.x + this.width, y: this.y + this.height },
			{ x: this.x, y: this.y + this.height }
		];
	},

	// ----- Private methods -----
	_renderType: function () {
		CanvasInstance.context.fillRect(this.x, this.y, this.width, this.height);
		CanvasInstance.context.strokeRect(this.x, this.y, this.width, this.height);
	},
};

export default CommonMethods;
