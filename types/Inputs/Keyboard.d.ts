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
    keys: {
        enter: number;
        escape: number;
        space: number;
        left: number;
        up: number;
        right: number;
        down: number;
        num0: number;
        num1: number;
        num2: number;
        num3: number;
        num4: number;
        num5: number;
        num6: number;
        num7: number;
        num8: number;
        num9: number;
        q: number;
        w: number;
        e: number;
        r: number;
        t: number;
        y: number;
        u: number;
        i: number;
        o: number;
        p: number;
        a: number;
        s: number;
        d: number;
        f: number;
        g: number;
        h: number;
        j: number;
        k: number;
        l: number;
        z: number;
        x: number;
        c: number;
        v: number;
        b: number;
        n: number;
        m: number;
    };
    isPressed: {};
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
    getNameByKeyCode(keyCode: number): string;
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
    getKeyCodeByName(name: string): number;
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
    isKeyPressed(key: number | string): boolean;
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
    isKeyPressedName(name: string): boolean;
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
    isKeyPressedKeyCode(keyCode: number): boolean;
    /**
     * @description
     * Private (Core) function to handle the key down event.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _keyDown;
    /**
     * @description
     * Private (Core) function to handle the key press event.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _keyPress;
    /**
     * @description
     * Private (Core) function to handle the key up event.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _keyUp;
}
export const KeyboardManagerInstance: KeyboardManager;
