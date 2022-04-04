export default class CanvasState {
	constructor() {
		if (CanvasState.instance instanceof CanvasState) return CanvasState.instance;
		CanvasState.instance = this;

		this.parent = document.body;
		this.canvas = null;
		this.context = null;
		this.backgroundColor = null;
		this.width = 800;
		this.height = 600;
	}

	// Dom Element
	setParent(parent) {
		if (!parent) parent = document.body;
		else if (typeof parent === "string") parent = document.getElementById(parent);
		else if (!(parent instanceof HTMLElement)) throw new Error("Invalid parent");
		this.parent = parent;
	}

	// Dom Element
	setCanvas(canvas) {
		if (typeof canvas === "string") this.canvas = document.getElementById(canvas);
		else if (canvas instanceof HTMLElement) this.canvas = canvas;
		else this.canvas = document.createElement("canvas");
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.context = this.canvas.getContext("2d");
		this.parent.appendChild(this.canvas);
	}

	setSize(width = 800, height = 600) {
		this.width = width;
		this.height = height;
		if (this.canvas) {
			this.canvas.width = this.width;
			this.canvas.height = this.height;
		}
	}

	setBackgroundColor(color) {
		if (!color) color = null;
		this.backgroundColor = color;
	}

	setVolume(volume) {
		if (volume < 0 || volume > 1) throw new Error("Invalid volume");
		this.volume = volume;
	}
}

export const CanvasStateInstance = new CanvasState();
