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
}

export const CanvasInstance = new Canvas();
