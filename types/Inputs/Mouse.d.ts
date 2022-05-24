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
export default class MouseManager {
    x: number;
    y: number;
    windowX: number;
    windowY: number;
    buttons: {
        left: number;
        middle: number;
        right: number;
    };
    isDown: {};
    /**
     * Returns the mouse position relative to the canvas.
     *
     * @example
     * const { x, y } = Impacto.Inputs.Mouse.getPosition();
     *
     * @returns {Object} - The current mouse position {x, y}
     * @memberof Impacto.Inputs.MouseManager
     */
    getPosition(): any;
    /**
     * Returns the mouse position relative to the window.
     *
     * @example
     * const { x, y } = Impacto.Inputs.Mouse.getWindowPosition();
     *
     * @returns {Object} - The current mouse position {x, y}
     * @memberof Impacto.Inputs.MouseManager
     */
    getWindowPosition(): any;
    /**
     * Returns the name of the button by the button code.
     *
     * @example
     * console.log(Impacto.Inputs.Mouse.getNameByButtonCode(1)); // "middle"
     *
     * @param {number} buttonCode - The button code
     * @returns {string} - The name of the button
     * @memberof Impacto.Inputs.MouseManager
     */
    getNameByButtonCode(buttonCode: number): string;
    /**
     * Returns the code of the button by the button name.
     *
     * @example
     * console.log(Impacto.Inputs.Mouse.getButtonCodeByName("left")); // 0
     *
     * @param {string} buttonName - The name of the button
     * @returns {number} - The button code
     * @memberof Impacto.Inputs.MouseManager
     */
    getButtonKeyByName(name: any): number;
    /**
     * Returns if the button is pressed.
     *
     * @example
     * Impacto.Inputs.Mouse.isButtonPressed("left") // True
     *
     * @param {string|number} button - The button name or code
     * @returns {boolean} - True if the button is pressed
     * @memberof Impacto.Inputs.MouseManager
     */
    isButtonDown(button: string | number): boolean;
    /**
     * Returns if the button is pressed by the button name.
     *
     * @example
     * Impacto.Inputs.Mouse.isButtonDownByName("left") // True
     *
     * @param {string|number} button - The button name
     * @returns {boolean} - True if the button is pressed
     * @memberof Impacto.Inputs.MouseManager
     */
    isButtonDownByName(name: any): boolean;
    /**
     * Returns if the button is pressed by the button code.
     *
     * @example
     * Impacto.Inputs.Mouse.isButtonDownByName(2) // True
     *
     * @param {string|number} button - The button code
     * @returns {boolean} - True if the button is pressed
     * @memberof Impacto.Inputs.MouseManager
     */
    isButtonDownByButtonCode(buttonCode: any): boolean;
    /**
     * @description
     * Private (Core) function to handle the mouse position.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _updateMousePosition;
    /**
     * @description
     * Private (Core) function to handle the mouse position.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _mousemove;
    /**
     * @description
     * Private (Core) function to handle the mouse position.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _mousedown;
    /**
     * @description
     * Private (Core) function to handle the mouse position.
     *
     * @private
     * @memberof Impacto.Inputs.KeyBoard
     */
    private _mouseup;
}
export const MouseInstance: MouseManager;
