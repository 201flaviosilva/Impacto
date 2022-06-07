/**
 * @class CanvasState
 * @description A class to manage canvas state.
 */
export default class CanvasState {
    parent: HTMLElement | undefined;
    canvas: HTMLElement | HTMLCanvasElement | null;
    context: any;
    backgroundColor: string | number | null;
    width: number | undefined;
    height: number | undefined;
    /**
     * Change the parent element of the canvas.
     * If not specified, the canvas will be appended to the body.
     *
     * @param {string|HTMLElement} parent - The parent element of the canvas
     * @returns {void}
     * @memberof CanvasState
     */
    setParent(parent: string | HTMLElement): void;
    /**
     * Initialize the canvas state.
     * If the canvas is not specified, a new canvas will be created.
     *
     * @param {string|HTMLElement} canvas - The canvas element
     * @returns {void}
     * @memberof CanvasState
     */
    setCanvas(canvas: string | HTMLElement): void;
    /**
     * Change the canvas width and height.
     *
     * @param {number} width - The width of the canvas. Default 800
     * @param {number} height - The height of the canvas. Default 600
     * @returns {void}
     * @memberof CanvasState
     */
    setSize(width?: number, height?: number): void;
    /**
     * Change the background color of the canvas.
     *
     * @param {number|string} color - The background color of the canvas. Default black
     * @returns {void}
     * @memberof CanvasState
     */
    setBackgroundColor(color?: number | string): void;
}
export const CanvasStateInstance: CanvasState;
//# sourceMappingURL=CanvasState.d.ts.map