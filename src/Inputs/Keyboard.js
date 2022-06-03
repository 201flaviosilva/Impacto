import Keys from "./Keys.js";

/**
 * @classdesc
 * Manages the keyboard input.
 * 
 * @example
 * const { left } = Impacto.Inputs.KeyBoard.keys;
 * if (Impacto.Inputs.KeyBoard.isKeyPressed(left)) { console.log("Left"); }
 * 
 * @class KeyboardManager
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
	 * const { left } = Impacto.Inputs.KeyboardManager.keys;
	 * console.log(Impacto.Inputs.KeyboardManager.getNameByKeyCode(left)); // left
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {string} The name of the key.
	 * @memberof KeyboardManager
	 */
	getNameByKeyCode(keyCode) {
		return Object.keys(this.keys).find(key => this.keys[key] === keyCode);
	}

	/**
	 * Returns the key code of the key by its name.
	 * 
	 * @example
	 * console.log(Impacto.Inputs.KeyboardManager.getKeyCodeByName("left")); // 37
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {number} The key code of the key.
	 * @memberof KeyboardManager
	 */
	getKeyCodeByName(name) {
		return this.keys[name];
	}

	/**
	 * Returns true if the key is pressed.
	 * 
	 * @example
	 * const { left } = Impacto.Inputs.KeyboardManager.keys;
	 * Impacto.Inputs.KeyboardManager.isKeyPressed(left); // false
	 * 
	 * @param {number| string} key - The key code or name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof KeyboardManager
	 */
	isKeyPressed(key) {
		if (typeof key === "string") return this.isKeyPressedName(key);
		else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
	}

	/**
	 * Returns true if the key is pressed by its name.
	 * 
	 * @example
	 * Impacto.Inputs.KeyboardManager.isKeyPressedName("left"); // true
	 * 
	 * @param {string} name - The name of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof KeyboardManager
	 */
	isKeyPressedName(name) {
		return !!this.isPressed[name];
	}

	/**
	 * Returns true if the key is pressed by its key code.
	 * 
	 * @example
	 * Impacto.Inputs.KeyboardManager.isKeyPressedKeyCode(37); // true
	 * 
	 * @param {number} keyCode - The key code of the key.
	 * @returns {boolean} True if the key is pressed.
	 * @memberof KeyboardManager
	 */
	isKeyPressedKeyCode(keyCode) {
		return !!this.isPressed[this.getNameByKeyCode(keyCode)];
	}

	// ---- Private
	/**
	 * @description
	 * Private (Core) function to handle the key down event.
	 * 
	 * @memberof KeyboardManager
	 * @private
	 */
	_keyDown(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = true;
	}

	/**
	 * @description
	 * Private (Core) function to handle the key press event.
	 * 
	 * @memberof KeyboardManager
	 * @private
	 */
	_keyPress(e) {
		// console.log("keypress", e.keyCode);
	}

	/**
	 * @description
	 * Private (Core) function to handle the key up event.
	 * 
	 * @memberof KeyboardManager
	 * @private
	 */
	_keyUp(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = false;
	}
}

export const KeyboardManagerInstance = new KeyboardManager();
