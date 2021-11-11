import Keys from "./Keys.js";

export default class KeyboardManager {
	constructor() {
		this.keys = Keys;
		this.isPressed = {};

		window.addEventListener("keydown", this._keyDown.bind(this));
		window.addEventListener("keypress", this._keyPress.bind(this));
		window.addEventListener("keyup", this._keyUp.bind(this));
	}

	getNameByKeyCode(keyCode) {
		return Object.keys(this.keys).find(key => this.keys[key] === keyCode);
	}

	getKeyCodeByName(name) {
		return this.keys[name];
	}

	isKeyPressed(key) {
		if (typeof key === "string") return this.isKeyPressedName(key);
		else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
	}

	isKeyPressedName(name) {
		return !!this.isPressed[name];
	}

	isKeyPressedKeyCode(keyCode) {
		return !!this.isPressed[this.getNameByKeyCode(keyCode)];
	}

	// ----- Private methods -----
	_keyDown(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = true;
	}

	_keyPress(e) {
		// console.log("keypress", e.keyCode);
	}

	_keyUp(e) {
		this.isPressed[this.getNameByKeyCode(e.keyCode)] = false;
	}
}
