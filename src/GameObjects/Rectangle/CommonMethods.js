import { CanvasStateInstance } from "../../State/CanvasState.js";

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

	// The rounded corners do not affect the collision detection
	setRound: function (topLeft = 0, topRight = topLeft, bottomLeft = topLeft, bottomRight = topLeft) {
		if (typeof topLeft === "number") {
			this.round = {
				topLeft: topLeft,
				topRight: topRight,
				bottomLeft: bottomLeft,
				bottomRight: bottomRight,
			};
		} else if (typeof topLeft === "object") {
			this.round = {
				topLeft: topLeft.topLeft || 0,
				topRight: topLeft.topRight || 0,
				bottomLeft: topLeft.bottomLeft || 0,
				bottomRight: topLeft.bottomRight || 0,
			}
		}

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
		// Ref: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.moveTo(this.x + this.round.topLeft, this.y);
		CanvasStateInstance.context.lineTo(this.x + this.width - this.round.topRight, this.y);
		CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.round.topRight);
		CanvasStateInstance.context.lineTo(this.x + this.width, this.y + this.height - this.round.bottomRight);
		CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.round.bottomRight, this.y + this.height);
		CanvasStateInstance.context.lineTo(this.x + this.round.bottomLeft, this.y + this.height);
		CanvasStateInstance.context.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.round.bottomLeft);
		CanvasStateInstance.context.lineTo(this.x, this.y + this.round.topLeft);
		CanvasStateInstance.context.quadraticCurveTo(this.x, this.y, this.x + this.round.topLeft, this.y);
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
		CanvasStateInstance.context.closePath();
	},
};

export default CommonMethods;
