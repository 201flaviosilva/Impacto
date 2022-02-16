import { CanvasInstance } from "../../Utils/Canvas.js";

const CommonMethods = {
	getRadius: function () { return this.radius; },
	setRadius: function (radius) { this.radius = radius; },

	getTop: function () { return this.y - this.radius; },
	getBottom: function () { return this.y + this.radius; },
	getLeft: function () { return this.x - this.radius; },
	getRight: function () { return this.x + this.radius; },

	getCenterX: function () { return this.x; },
	getCenterY: function () { return this.y; },

	getBounds: function () { return { x: this.getLeft(), y: this.getTop(), width: this.radius * 2, height: this.radius * 2 }; },

	// ----- Private methods -----
	_renderType: function () {
		CanvasInstance.context.beginPath();
		CanvasInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		CanvasInstance.context.fill();
		CanvasInstance.context.stroke();
	}
};

export default CommonMethods;
