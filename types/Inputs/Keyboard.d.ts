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
     * const { left } = Impacto.Inputs.KeyboardManager.keys;
     * console.log(Impacto.Inputs.KeyboardManager.getNameByKeyCode(left)); // left
     *
     * @param {number} keyCode - The key code of the key.
     * @returns {string} The name of the key.
     * @memberof KeyboardManager
     */
    getNameByKeyCode(keyCode: number): string;
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
    getKeyCodeByName(name: string): number;
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
    isKeyPressed(key: number | string): boolean;
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
    isKeyPressedName(name: string): boolean;
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
    isKeyPressedKeyCode(keyCode: number): boolean;
    /**
     * @description
     * Private (Core) function to handle the key down event.
     *
     * @memberof KeyboardManager
     * @private
     */
    private _keyDown;
    /**
     * @description
     * Private (Core) function to handle the key press event.
     *
     * @memberof KeyboardManager
     * @private
     */
    private _keyPress;
    /**
     * @description
     * Private (Core) function to handle the key up event.
     *
     * @memberof KeyboardManager
     * @private
     */
    private _keyUp;
}
export const KeyboardManagerInstance: KeyboardManager;
//# sourceMappingURL=Keyboard.d.ts.map