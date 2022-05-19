import Keys from "./Keys.js";

/**
 * @classdesc
 * The Rectangle Shape is a 2D Game Object that can be added to a Scene. 
 * Its possible to set a rounder corner radius.
 * 
 * @example
 * const { left } = Impacto.Inputs.KeyBoard.keys;
 * if (Impacto.Inputs.KeyBoard.isKeyPressed(left)) { console.log("Left"); }
 * 
 * @class KeyboardManager
 * @memberof Impacto.Inputs
 * @constructors
 */
export default class KeyboardManager {
	constructor() {
		this.keys = Keys;
		this.isPressed = {};

		window.addEventListener("keydown", this._keyDown.bind(this));
		window.addEventListener("keypress", this._keyPress.bind(this));
		window.addEventListener("keyup", this._keyUp.bind(this));
	}

	/**
	 * Returns the name of the key by its keyCode.
	 * 
	 * @example
	 * const { left } = Impacto.Inputs.KeyBoard.keys;
	 * console.log(Impacto.Inputs.KeyBoard.getNameByKeyCode(left)); // left
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {string} The name of the key.
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	getNameByKeyCode(keyCode) {
		return Object.keys(this.keys).find(key => this.keys[key] === keyCode);
	}

	/**
	 * Returns the key code of the key by its name.
	 * 
	 * @example
	 * console.log(Impacto.Inputs.KeyBoard.getKeyCodeByName("left")); // 37
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {number} The key code of the key.
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	getKeyCodeByName(name) {
		return this.keys[name];
	}

	/**
	 * Returns true if the key is pressed.
	 * 
	 * @example
	 * const { left } = Impacto.Inputs.KeyBoard.keys;
	 * Impacto.Inputs.KeyBoard.isKeyPressed(left); // false
	 * 
	 * @param {number| string} key - The key code or name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	isKeyPressed(key) {
		if (typeof key === "string") return this.isKeyPressedName(key);
		else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
	}

	/**
	 * Returns true if the key is pressed by its name.
	 * 
	 * @example
	 * Impacto.Inputs.KeyBoard.isKeyPressedName("left"); // true
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	isKeyPressedName(name) {
		return !!this.isPressed[name];
	}

	/**
	 * Returns true if the key is pressed by its key code.
	 * 
	 * @example
	 * Impacto.Inputs.KeyBoard.isKeyPressedKeyCode(37); // true
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	isKeyPressedKeyCode(keyCode) {
		return !!this.isPressed[this.getNameByKeyCode(keyCode)];
	}

	// ---- Private
	/**
	 * @description
	 * Private (Core) function to handle the key down event.
	 * 
	 * @private
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	_keyDown(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = true;
	}

	/**
	 * @description
	 * Private (Core) function to handle the key press event.
	 * 
	 * @private
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	_keyPress(e) {
		// console.log("keypress", e.keyCode);
	}

	/**
	 * @description
	 * Private (Core) function to handle the key up event.
	 * 
	 * @private
	 * @memberof Impacto.Inputs.KeyBoard
	 */
	_keyUp(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = false;
	}
}

export const KeyboardManagerInstance = new KeyboardManager();
