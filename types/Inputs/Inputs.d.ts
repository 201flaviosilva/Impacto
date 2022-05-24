/**
 * @class Inputs
 * @description Inputs class
 * @memberof Impacto
 * @instance
 */
export default class Inputs {
    KeyBoard: KeyBoard;
    Mouse: MouseManager;
}
export const InputsInstance: Inputs;
import KeyBoard from "./Keyboard.js";
import MouseManager from "./Mouse.js";
