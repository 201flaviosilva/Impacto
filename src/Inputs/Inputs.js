import KeyBoard from "./Keyboard.js";
import MouseManager from "./Mouse.js";

/**
 * @namespace Impacto.Inputs
 * 
 * @property {Impacto.Inputs.KeyBoard} KeyBoard
 * @property {Impacto.Inputs.MouseManager} MouseManager
 */
export default class Inputs {
	constructor() {
		this.KeyBoard = new KeyBoard();
		this.Mouse = new MouseManager();
	}
}

export const InputsInstance = new Inputs();
