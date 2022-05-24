/**
 * @class CanvasState
 * @description A class to manage canvas state.
 * @memberof Impacto.State
 * @instance
 */
export default class CanvasState {
    parent: HTMLElement;
    canvas: HTMLElement | HTMLCanvasElement;
    context: any;
    backgroundColor: string | number;
    width: number;
    height: number;
    /**
     * Change the parent element of the canvas.
     * If not specified, the canvas will be appended to the body.
     *
     * @param {string|HTMLElement} parent - The parent element of the canvas
     * @memberof Impacto.State.CanvasState
     */
    setParent(parent: string | HTMLElement): void;
    /**
     * Initialize the canvas state.
     * If the canvas is not specified, a new canvas will be created.
     *
     * @param {string|HTMLElement} canvas - The canvas element
     * @memberof Impacto.State.CanvasState
     */
    setCanvas(canvas: string | HTMLElement): void;
    /**
     * Change the canvas width and height.
     *
     * @param {number} width - The width of the canvas. Default 800
     * @param {number} height - The height of the canvas. Default 600
     * @memberof Impacto.State.CanvasState
     */
    setSize(width?: number, height?: number): void;
    /**
     * Change the background color of the canvas.
     *
     * @param {number|string} color - The background color of the canvas. Default black
     * @memberof Impacto.State.CanvasState
     */
    setBackgroundColor(color?: number | string): void;
}
export const CanvasStateInstance: CanvasState;
