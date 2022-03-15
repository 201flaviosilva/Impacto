import { CanvasStateInstance } from "../State/CanvasState.js";
export default class Mouse {
	constructor() {
		this.x = 0;
		this.y = 0;

		this.windowX = 0;
		this.windowY = 0;

		this.buttons = {
			left: 0,
			middle: 1,
			right: 2,
		};
		this.isDown = {};

		window.addEventListener("mousemove", this._mousemove.bind(this));
		window.addEventListener("mousedown", this._mousedown.bind(this));
		window.addEventListener("mouseup", this._mouseup.bind(this));
		window.addEventListener("contextmenu", e => e.preventDefault()); // Right click show options
	}

	getPosition() { return { x: this.x, y: this.y, }; }
	getWindowPosition() { return { x: this.windowX, y: this.windowY, }; }

	getNameByButtonCode(buttonCode) {
		switch (buttonCode) {
			case this.buttons.left: return "left";
			case this.buttons.middle: return "middle";
			case this.buttons.right: return "right";
			default: return "";
		}
	}

	getButtonKeyByName(name) {
		switch (name) {
			case "left": return this.buttons.left;
			case "middle": return this.buttons.middle;
			case "right": return this.buttons.right;
			default: return -1;
		}
	}

	isButtonDown(button) {
		if (typeof button === "string") return this.isButtonDownByName(button);
		else if (typeof button === "number") return this.isButtonDownByButtonCode(button);
	}

	isButtonDownByName(name) {
		return !!this.isDown[name];
	}

	isButtonDownByButtonCode(buttonCode) {
		return !!this.isDown[this.getNameByButtonCode(buttonCode)];
	}

	// ----- Private methods -----
	_updateMousePosition(e) {
		this.windowX = e.clientX;
		this.windowY = e.clientY;

		this.x = this.windowX - CanvasStateInstance.canvas.offsetLeft;
		this.y = this.windowY - CanvasStateInstance.canvas.offsetTop;
	}

	_mousemove(e) {
		this._updateMousePosition(e);
	}

	_mousedown(e) {
		this._updateMousePosition(e);
		this.isDown[this.getNameByButtonCode(e.button)] = true;
	}

	_mouseup(e) {
		this._updateMousePosition(e);
		this.isDown[this.getNameByButtonCode(e.button)] = false;
	}
}

export const MouseInstance = new Mouse();
