import KeyBoard from "./Keyboard.js";
import MouseManager from "./Mouse.js";

/**
 * @class Inputs
 * @description Inputs class
 * @memberof Impacto
 * @instance
 */
export default class Inputs {
	constructor() {
		this.KeyBoard = new KeyBoard();
		this.Mouse = new MouseManager();
	}
}

export const InputsInstance = new Inputs();
