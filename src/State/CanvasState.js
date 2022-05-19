/**
 * @class CanvasState
 * @description A class to manage canvas state.
 * @memberof Impacto.State
 * @instance
 */
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

	/**
	 * Change the parent element of the canvas.
	 * If not specified, the canvas will be appended to the body.
	 * 
	 * @param {string|HTMLElement} parent - The parent element of the canvas
	 * @memberof Impacto.State.CanvasState
	 */
	setParent(parent) {
		if (!parent) parent = document.body;
		else if (typeof parent === "string") parent = document.getElementById(parent);
		else if (!(parent instanceof HTMLElement)) throw new Error("Invalid parent");
		this.parent = parent;
	}

	/**
	 * Initialize the canvas state.
	 * If the canvas is not specified, a new canvas will be created.
	 * 
	 * @param {string|HTMLElement} canvas - The canvas element
	 * @memberof Impacto.State.CanvasState
	 */
	setCanvas(canvas) {
		if (typeof canvas === "string") this.canvas = document.getElementById(canvas);
		else if (canvas instanceof HTMLElement) this.canvas = canvas;
		else this.canvas = document.createElement("canvas");
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.context = this.canvas.getContext("2d");
		this.parent.appendChild(this.canvas);
	}

	/**
	 * Change the canvas width and height.
	 * 
	 * @param {number} width - The width of the canvas. Default 800
	 * @param {number} height - The height of the canvas. Default 600
	 * @memberof Impacto.State.CanvasState
	 */
	setSize(width = 800, height = 600) {
		this.width = width;
		this.height = height;
		if (this.canvas) {
			this.canvas.width = this.width;
			this.canvas.height = this.height;
		}
	}

	/**
	 * Change the background color of the canvas.
	 * 
	 * @param {number|string} color - The background color of the canvas. Default black
	 * @memberof Impacto.State.CanvasState
	 */
	setBackgroundColor(color = 0x000000) {
		if (!color) color = null;
		this.backgroundColor = color;
	}
}

export const CanvasStateInstance = new CanvasState();
