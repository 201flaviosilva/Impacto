import KeyBoard from "./Keyboard.js";
import Mouse from "./Mouse.js";

export default class Inputs {
	constructor() {
		this.KeyBoard = new KeyBoard();
		this.Mouse = new Mouse();
	}
}
