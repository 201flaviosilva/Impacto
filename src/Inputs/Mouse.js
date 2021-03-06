import { CanvasStateInstance } from "../State/CanvasState.js";

/**
 * @classdesc
 * Manages the mouse input.
 * 
 * @example
 * const { x, y } = Impacto.Inputs.Mouse;
 * 
 * @class MouseManager
 * @constructors
 */
export default class MouseManager {
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

	/**
	 * @description
	 * Returns the mouse position relative to the canvas.
	 * 
	 * @example
	 * const { x, y } = Impacto.Inputs.Mouse.getPosition();
	 * 
	 * @returns {Object} The current mouse position {x, y}
	 * @memberof MouseManager
	 */
	getPosition() { return { x: this.x, y: this.y, }; }

	/**
	 * Returns the mouse position relative to the window.
	 * 
	 * @example
	 * const { x, y } = Impacto.Inputs.Mouse.getWindowPosition();
	 * 
	 * @returns {Object} The current mouse position {x, y}
	 * @memberof MouseManager
	 */
	getWindowPosition() { return { x: this.windowX, y: this.windowY, }; }

	/**
	 * Returns the name of the button by the button code.
	 * 
	 * @example
	 * console.log(Impacto.Inputs.Mouse.getNameByButtonCode(1)); // "middle"
	 * 
	 * @param {number} buttonCode - The button code
	 * @returns {string} The name of the button
	 * @memberof MouseManager
	 */
	getNameByButtonCode(buttonCode) {
		switch (buttonCode) {
			case this.buttons.left: return "left";
			case this.buttons.middle: return "middle";
			case this.buttons.right: return "right";
			default: return "";
		}
	}

	/**
	 * Returns the code of the button by the button name.
	 * 
	 * @example
	 * console.log(Impacto.Inputs.Mouse.getButtonCodeByName("left")); // 0
	 * 
	 * @param {string} buttonName - The name of the button
	 * @returns {number} The button code
	 * @memberof MouseManager
	 */
	getButtonKeyByName(name) {
		switch (name) {
			case "left": return this.buttons.left;
			case "middle": return this.buttons.middle;
			case "right": return this.buttons.right;
			default: return -1;
		}
	}

	/**
	 * Returns if the button is pressed.
	 * 
	 * @example
	 * Impacto.Inputs.Mouse.isButtonPressed("left") // True
	 * 
	 * @param {string|number} button - The button name or code
	 * @returns {boolean} True if the button is pressed
	 * @memberof MouseManager
	 */
	isButtonDown(button) {
		if (typeof button === "string") return this.isButtonDownByName(button);
		else if (typeof button === "number") return this.isButtonDownByButtonCode(button);
	}

	/**
	 * Returns if the button is pressed by the button name.
	 * 
	 * @example
	 * Impacto.Inputs.Mouse.isButtonDownByName("left") // True
	 * 
	 * @param {string|number} button - The button name
	 * @returns {boolean} True if the button is pressed
	 * @memberof MouseManager
	 */
	isButtonDownByName(name) {
		return !!this.isDown[name];
	}

	/**
	 * Returns if the button is pressed by the button code.
	 * 
	 * @example
	 * Impacto.Inputs.Mouse.isButtonDownByName(2) // True
	 * 
	 * @param {string|number} button - The button code
	 * @returns {boolean} True if the button is pressed
	 * @memberof MouseManager
	 */
	isButtonDownByButtonCode(buttonCode) {
		return !!this.isDown[this.getNameByButtonCode(buttonCode)];
	}


	// ------
	/**
	 * @description
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_updateMousePosition(e) {
		this.windowX = e.clientX;
		this.windowY = e.clientY;

		this.x = this.windowX - CanvasStateInstance.canvas.offsetLeft;
		this.y = this.windowY - CanvasStateInstance.canvas.offsetTop;
	}

	/**
	 * @description
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mousemove(e) {
		this._updateMousePosition(e);
	}

	/**
	 * @description
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mousedown(e) {
		this._updateMousePosition(e);
		this.isDown[this.getNameByButtonCode(e.button)] = true;
	}

	/**
	 * @description
	 * Private (Core) function to handle the mouse position.
	 * 
	 * @memberof KeyBoard
	 * @private
	 */
	_mouseup(e) {
		this._updateMousePosition(e);
		this.isDown[this.getNameByButtonCode(e.button)] = false;
	}
}

export const MouseInstance = new MouseManager();
