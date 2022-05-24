/**
 * @param {number} x - The horizontal position of this Rectangle in the world.
 * @param {number} y - The vertical position of this Rectangle in the world.
 * @param {number} [width=100] - The width of the rectangle.
 * @param {number} [height=100] - The height of the rectangle.
 * @param {number | string} [fillColor=0xffffff] - The color the rectangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the rectangle, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * The Rectangle Shape is a 2D Game Object that can be added to a Scene.
 * Its possible to set a rounder corner radius.
 *
 * @example
 * const rect = new Impacto.GameObjects.Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);
 *
 * @class Rectangle
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Rectangle {
    constructor(x: any, y: any, width?: number, height?: number, fillColor?: string, strokeColor?: string);
    width: number;
    height: number;
    _type: string;
    /**
     * @description
     * Sets the X position of the rectangle.
     *
     * @param {number} x - The horizontal position of this Rectangle in the world.
     * @memberof Impacto.GameObjects.Rectangle
     */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    get x(): number;
    /**
     * @description
     * Gets the Y position of the rectangle.
     *
     * @param {number} y - The vertical position of this Rectangle in the world.
     * @memberof Impacto.GameObjects.Rectangle
     */
    set y(arg: number);
    /**
     * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    get y(): number;
    /**
     * @description
     * Returns the top side position of the rectangle.
     *
     * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getTop(): number;
    /**
     * @description
     * Returns the bottom side position of the rectangle.
     *
     * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getBottom(): number;
    /**
     * @description
     * Returns the left side position of the rectangle.
     *
     * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getLeft(): number;
    /**
     * @description
     * Returns the right side position of the rectangle.
     *
     *
     * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRight(): number;
    /**
     * @description
     * Returns the center X position of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5
     *
     * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getCenterX(): number;
    /**
     * @description
     * Returns the center Y position of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5
     *
     * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getCenterY(): number;
    /**
     * @description
     * Returns the real top side position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealTop(); // 10
     *
     * @returns {number} The real vertical position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealTop(): number;
    /**
     * @description
     * Returns the real bottom side position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealBottom(); // 110
     *
     * @returns {number} The real vertical position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealBottom(): number;
    /**
     * @description
     * Returns the real left side position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealLeft(); // 10
     *
     * @returns {number} The real horizontal position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealLeft(): number;
    /**
     * @description
     * Returns the real right side position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealRight(); // 110
     *
     * @returns {number} The real horizontal position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealRight(): number;
    /**
     * @description
     * Returns the real center X position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterX(); // 55
     *
     * @returns {number} The real horizontal position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealCenterX(): number;
    /**
     * @description
     * Returns the real center Y position of the rectangle. (Not relative to the origin)
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterY(); // 55
     *
     * @returns {number} The real vertical position of this Rectangle in the world.
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    readonly getRealCenterY(): number;
    /**
     * @description
     * Sets the width of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setWidth(200);
     *
     * @param {number} width - The new width of this Rectangle.
     * @returns {Impacto.GameObjects.Rectangle} This Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     */
    setWidth(width: number): Impacto.GameObjects.Rectangle;
    /**
     * @description
     * Sets the height of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setHeight(200);
     *
     * @param {number} height - The new height of this Rectangle.
     * @returns {Impacto.GameObjects.Rectangle} This Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     */
    setHeight(height: number): Impacto.GameObjects.Rectangle;
    /**
     * @description
     * Sets the size of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setSize(50, 50);
     *
     * @param {number} width - The new width of this Rectangle.
     * @param {number} height - The new height of this Rectangle.
     * @returns {Impacto.GameObjects.Rectangle} This Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     */
    setSize(width: number, height?: number, force?: boolean): Impacto.GameObjects.Rectangle;
    /**
     * @description
     * Sets the position  and size of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setPositionAndSize(20, 30, 50, 75);
     *
     * @param {number} x - The new horizontal position of this Rectangle.
     * @param {number} y - The new vertical position of this Rectangle.
     * @param {number} width - The new width of this Rectangle.
     * @param {number} height - The new height of this Rectangle.
     * @returns {Impacto.GameObjects.Rectangle} This Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     */
    refresh(x: number, y: number, width: number, height: number): Impacto.GameObjects.Rectangle;
    /**
     * @description
     * Sets the roundedness of the rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(10, 10).setRoundedness(10);
     *
     * @param {number} topLeft - The new roundedness of the top left corner.
     * @param {number} topRight - The new roundedness of the top right corner.
     * @param {number} bottomLeft - The new roundedness of the bottom left corner.
     * @param {number} bottomRight - The new roundedness of the bottom right corner.
     * @returns {Impacto.GameObjects.Rectangle} This Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     */
    setRound(topLeft?: number, topRight?: number, bottomLeft?: number, bottomRight?: number): Impacto.GameObjects.Rectangle;
    round: {
        topLeft: number;
        topRight: number;
        bottomLeft: number;
        bottomRight: number;
    } | {
        topLeft: any;
        topRight: any;
        bottomLeft: any;
        bottomRight: any;
    };
    /**
     * @description
     * Gets the bounding box of this Rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }
     *
     * @returns {Object} The bounding box of this Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     * @readonly
     */
    readonly getBounds(): any;
    /**
     * @description
     * Gets the area of this Rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getArea(); // 10000
     *
     * @returns {number} The area of this Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     * @readonly
     */
    readonly getArea(): number;
    /**
     * @description
     * Gets the perimeter of this Rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getPerimeter(); // 200
     *
     * @returns {number} The perimeter of this Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     * @readonly
     */
    readonly getPerimeter(): number;
    /**
     * @description
     * Gets the point of all vertices of this Rectangle.
     *
     * @example
     * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getVertices(); // [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]
     *
     * @returns {Array} All vertices of this Rectangle.
     * @memberof Impacto.GameObjects.Rectangle
     * @readonly
     */
    readonly getVertices(): any[];
    /**
     * @description
     * Private (Core) function to render the position of the rectangle.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Rectangle
     */
    private readonly _renderType;
}
