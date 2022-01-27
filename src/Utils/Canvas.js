export default class Canvas {
	constructor() {
		if (Canvas.instance instanceof Canvas) return Canvas.instance;
		Canvas.instance = this;

		this.canvas = null;
		this.context = null;
	}

	setCanvas(canvas) {
		this.canvas = canvas;
		this.context = canvas.getContext("2d");
	}

	drawText(text, x, y, color = "#000000", center = true, size = 20, font = "Arial") {
		this.context.fillStyle = color;
		this.textBaseline = center ? "middle" : "top";
		this.context.textAlign = center ? "center" : "left";
		this.context.font = `${size}px ${font}`;
		this.context.fillText(text, x, y);
	}
}

export const CanvasInstance = new Canvas();
