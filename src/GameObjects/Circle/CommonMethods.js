import { CanvasStateInstance } from "../../State/CanvasState.js";

const CommonMethods = {
	getRadius: function () { return this.radius; },
	setRadius: function (radius) { this.radius = radius; },

	// Positions Based in the origin
	getTop: function () { return this.y - this.radius; },
	getBottom: function () { return this.y + this.radius; },
	getLeft: function () { return this.x - this.radius; },
	getRight: function () { return this.x + this.radius; },

	getCenterX: function () { return this.x; },
	getCenterY: function () { return this.y; },

	// Get Real Positions
	getRealTop: function () { return this._y - this.radius; },
	getRealBottom: function () { return this._y + this.radius; },
	getRealLeft: function () { return this._x - this.radius; },
	getRealRight: function () { return this._x + this.radius; },

	getRealCenterX: function () { return this._x; },
	getRealCenterY: function () { return this._y; },

	getBounds: function () { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; },

	// ----- Private methods -----
	_renderType: function () {
		CanvasStateInstance.context.beginPath();
		CanvasStateInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		CanvasStateInstance.context.fill();
		CanvasStateInstance.context.stroke();
	}
};

export default CommonMethods;
