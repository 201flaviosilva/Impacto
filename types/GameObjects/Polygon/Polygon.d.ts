/**
 * @param {number} x - The horizontal position of this Polygon in the world.
 * @param {number} y - The vertical position of this Polygon in the world.
 * @param {vertices} vertices - The vertices of this Polygon.
 * @param {number | string} [fillColor=0xffffff] - The color the Polygon will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Polygon, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * This class will draw a polygon on the canvas.
 *
 * @example
 * const myPolygon = new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20], "#ff0000", 0x00ff00);
 *
 * @class Polygon
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Polygon {
    constructor(x: any, y: any, vertices?: any[], fillColor?: string, strokeColor?: string);
    vertices: any[];
    close: boolean;
    _type: string;
    /**
     * Sets the X position of the Polygon.
     *
     * @param {number} x - The horizontal position of this Polygon in the world.
     */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position of this Polygon in the world relative to the origin.
     */
    get x(): number;
    /**
     * Sets the Y position of the Polygon.
     *
     * @param {number} y - The vertical position of this Polygon in the world.
     */
    set y(arg: number);
    /**
     * @returns {number} The vertical position of this Polygon in the world relative to the origin.
     */
    get y(): number;
    /**
     * @returns {number} The width of this Polygon.
     */
    get width(): number;
    /**
     * @returns {number} The height of this Polygon.
     */
    get height(): number;
    /**
     * Returns the topmost point of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getTop(); // 10
     *
     * @returns {number} The topmost point of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getTop(): number;
    /**
     * Returns the bottommost point of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBottom(); // 20
     *
     * @returns {number} The bottommost point of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getBottom(): number;
    /**
     * Returns the leftmost point of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getLeft(); // 10
     *
     * @returns {number} The leftmost point of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getLeft(): number;
    /**
     * Returns the rightmost point of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getRight(); // 20
     *
     * @returns {number} The rightmost point of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getRight(): number;
    /**
     * Returns the horizontal center of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterX(); // 15
     *
     * @returns {number} The horizontal center of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getCenterX(): number;
    /**
     * Returns the vertical center of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterY(); // 15
     *
     * @returns {number} The vertical center of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getCenterY(): number;
    /**
     * Returns the center of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenter(); // {x: 15, y: 15}
     *
     * @returns {Object} The center of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getCenter(): any;
    /**
     * Add a new point to the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).addPoint(0, 0);
     *
     * @param {number} x - The x coordinate of the point
     * @param {number} y - The y coordinate of the point
     * @returns {Impacto.GameObjects.Polygon} The polygon itself
     * @memberof Impacto.GameObjects.Polygon
     */
    add(x: number, y: number): Impacto.GameObjects.Polygon;
    /**
     * Remove a point from the polygon based in the coordinates
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint(10, 10);
     *
     * @param {number} x - The x coordinate of the point
     * @param {number} y - The y coordinate of the point
     * @returns {Impacto.GameObjects.Polygon} The polygon itself
     * @memberof Impacto.GameObjects.Polygon
     */
    remove(x: number, y: number): Impacto.GameObjects.Polygon;
    /**
     * Remove a point from the polygon based in the object {x, y}
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint({x: 10, y: 10});
     *
     * @param {Object} point - The point to be removed
     * @returns {Impacto.GameObjects.Polygon} The polygon itself
     * @memberof Impacto.GameObjects.Polygon
     */
    removePoint(point: any): Impacto.GameObjects.Polygon;
    /**
     * Remove a point from the polygon based in the index
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removeIndex(0);
     *
     * @param {number} index - The index of the point
     * @returns {Impacto.GameObjects.Polygon} The polygon itself
     * @memberof Impacto.GameObjects.Polygon
     */
    removeIndex(index: number): Impacto.GameObjects.Polygon;
    /**
     * Close the last point to the first point
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).setClose(true);
     *
     * @param {boolean} close - Whether the polygon should be closed or not
     * @returns {Impacto.GameObjects.Polygon} The polygon itself
     * @memberof Impacto.GameObjects.Polygon
     */
    setClose(isClose: any): Impacto.GameObjects.Polygon;
    /**
     * Returns bounds of the polygon (the most top left and the most bottom right points)
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBounds(); // {x: 10, y: 10, width: 20, height: 20}
     *
     * @returns {Object} The bounds of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getBounds(): any;
    /**
     * Returns the vertices of the polygon
     *
     * @example
     * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getVertices(); // [{x: 10, y: 10}, {x: 20, y: 20}, {x: 10, y: 20}]
     *
     * @returns {Array} The vertices of the polygon
     * @memberof Impacto.GameObjects.Polygon
     */
    getVertices(): any[];
    /**
     * Private (Core) function to render.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Polygon
     */
    private readonly _renderType;
}
