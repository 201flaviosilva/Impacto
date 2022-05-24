/**
 * @param {number} x - The horizontal position in the world.
 * @param {number} y - The vertical position in the world.
 * @param {number} endX - The horizontal position of the end of the line.
 * @param {number} endY - The vertical position of the end of the line.
 * @param {number | string} [strokeColor=0x000000] - The color of the border, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * Line is a class that will draw a line on the canvas.
 *
 * @example
 * const myLine = new Impacto.GameObjects.Line(400, 300, 450, 350, 0x00ff00);
 *
 * @class Line
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Line {
    constructor(x: any, y: any, endX: any, endY: any, strokeColor?: string);
    endX: any;
    endY: any;
    _type: string;
    /**
     * @returns {number} The width of the line.
     * @readonly
     * @memberof Impacto.GameObjects.Line
     */
    readonly get width(): number;
    /**
     * @returns {number} The height of the line.
     * @readonly
     * @memberof Impacto.GameObjects.Line
     */
    readonly get height(): number;
    /**
     * @description
     * Sets the X position.
     *
     * @example
     * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
     * myLine.x = 200;
     *
     * @param {number} x - The horizontal position in the world.
     * @memberof Impacto.GameObjects.Line
     */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position.
     * @readonly
     * @memberof Impacto.GameObjects.Line
     */
    get x(): number;
    /**
     * @description
     * Sets the Y position.
     *
     * @example
     * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
     * myLine.y = 200;
     *
     * @param {number} y - The vertical position in the world.
     * @memberof Impacto.GameObjects.Line
     */
    set y(arg: number);
    /**
     * @returns {number} The vertical position.
     * @readonly
     * @memberof Impacto.GameObjects.Line
     */
    get y(): number;
    /**
     * @description
     * Returns the top side position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getTop(); // 300
     *
     * @returns {number} The vertical position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getTop(): number;
    /**
     * @description
     * Returns the bottom side position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getBottom(); // 325
     *
     * @returns {number} The vertical position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getBottom(): number;
    /**
     * @description
     * Returns the left side position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getLeft(); // 400
     *
     * @returns {number} The horizontal position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getLeft(): number;
    /**
     * @description
     * Returns the right side position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRight(); // 450
     *
     * @returns {number} The horizontal position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRight(): number;
    /**
     * @description
     * Returns the center X position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterX(); // 425
     *
     * @returns {number} The horizontal position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getCenterX(): number;
    /**
     * @description
     * Returns the center Y position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterY(); // 325
     *
     * @returns {number} The vertical position of this Line in the world relative to the origin.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getCenterY(): number;
    /**
     * @description
     * Returns the real top side position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealTop(); // 300
     *
     * @returns {number} The vertical position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealTop(): number;
    /**
     * @description
     * Returns the real bottom side position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealBottom(); // 350
     *
     * @returns {number} The vertical position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealBottom(): number;
    /**
     * @description
     * Returns the real left side position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealLeft(); // 400
     *
     * @returns {number} The horizontal position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealLeft(): number;
    /**
     * @description
     * Returns the real right side position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealRight(); // 450
     *
     * @returns {number} The horizontal position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealRight(): number;
    /**
     * @description
     * Returns the real center X position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterX(); // 425
     *
     * @returns {number} The horizontal position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealCenterX(): number;
    /**
     * @description
     * Returns the real center Y position of the Line (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterY(); // 325
     *
     * @returns {number} The vertical position of this Line in the world.
     * @memberof Impacto.GameObjects.Line
     * @readonly
     * @public
     * @instance
     */
    public readonly getRealCenterY(): number;
    /**
     * @description
     * Sets the end position of the Line based on the width.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setWidth(100);
     *
     * @param {number} width - The new width.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setWidth(width: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Sets the end position of the Line based on the height.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setHeight(100);
     *
     * @param {number} height - The new height.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setHeight(height: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Sets the end position of the Line based on the size.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setSize(100, 100);
     *
     * @param {number} width - The new width.
     * @param {number} height - The new height.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setSize(width: number, height: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Sets the end horizontal position.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndX(500);
     *
     * @param {number} endX - The new horizontal position.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setEndX(endX: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Sets the end vertical position.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndY(500);
     *
     * @param {number} endY - The new vertical position.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setEndY(endY: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Sets the end position of the Line.
     *
     * @example
     * new Impacto.GameObjects.Line(400, 300, 450, 350).setEnd(500, 400);
     *
     * @param {number} endX - The new horizontal position.
     * @param {number} endY - The new vertical position.
     * @returns {Impacto.GameObjects.Line} This Line.
     * @memberof Impacto.GameObjects.Line
     * @public
     * @instance
     */
    public setEnd(endX: number, endY: number): Impacto.GameObjects.Line;
    /**
     * @description
     * Private (Core) function to render the position.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Line
     */
    private readonly _renderType;
}
