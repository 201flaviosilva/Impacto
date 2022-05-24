/**
 * @param {number} x - The horizontal position of this Triangle in the world.
 * @param {number} y - The vertical position of this Triangle in the world.
 * @param {number} width - The width of this Triangle.
 * @param {number} height - The height of this Triangle.
 * @param {number | string} [fillColor=0xffffff] - The color the Triangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Triangle, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * This class will draw a triangle on the canvas.
 *
 * @example
 * const myTriangle = new Impacto.GameObjects.Triangle(400, 300, 100, 100, "#ff0000", 0x00ff00);
 *
 * @class Triangle
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Triangle {
    constructor(x: any, y: any, width: any, height: any, fillColor?: string, strokeColor?: string);
    width: any;
    height: any;
    _type: string;
    /**
     * Sets the X position of the Triangle.
     *
     * @param {number} x - The horizontal position of this Triangle in the world.
     */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position of this Triangle in the world relative to the origin.
     */
    get x(): number;
    /**
     * Sets the Y position of the Triangle.
     *
     * @param {number} y - The vertical position of this Triangle in the world.
     */
    set y(arg: number);
    /**
     * @returns {number} The vertical position of this Triangle in the world relative to the origin.
     */
    get y(): number;
    /**
     * Returns the top side position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getTop(); // 300
     *
     * @returns {number} The topmost point of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getTop(): number;
    /**
     * Returns the bottom side position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getBottom(); // 400
     *
     * @returns {number} The bottommost point of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getBottom(): number;
    /**
     * Returns the left side position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getLeft(); // 400
     *
     * @returns {number} The leftmost point of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getLeft(): number;
    /**
     * Returns the right side position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRight(); // 500
     *
     * @returns {number} The rightmost point of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getRight(): number;
    /**
     * Returns the center X position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterX(); // 450
     *
     * @returns {number} The width of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getCenterX(): number;
    /**
     * Returns the center Y position of the triangle, based in the origin.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterY(); // 450
     *
     * @returns {number} The height of the triangle
     * @memberof Impacto.GameObjects.Triangle
     */
    getCenterY(): number;
    /**
     * Returns the real top position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealTop(); // 300
     *
     * @returns {number} The real top position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealTop(): number;
    /**
     * Returns the real bottom position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealBottom(); // 400
     *
     * @returns {number} The real bottom position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealBottom(): number;
    /**
     * Returns the real left position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealLeft(); // 400
     *
     * @returns {number} The real left position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealLeft(): number;
    /**
     * Returns the real right position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealRight(); // 400
     *
     * @returns {number} The real right position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealRight(): number;
    /**
     * Returns the real center x position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterX(); // 450
     *
     * @returns {number} The real center position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealCenterX(): number;
    /**
     * Returns the real center y position of the triangle in the world.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterY(); // 450
     *
     * @returns {number} The real center position of the triangle in the world
     * @memberof Impacto.GameObjects.Triangle
     */
    getRealCenterY(): number;
    /**
     * Change the width of the triangle.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setWidth(200); // 200
     *
     * @param {number} width - The new width of the triangle.
     * @returns {Impacto.GameObjects.Triangle} The triangle itself.
     * @memberof Impacto.GameObjects.Triangle
     */
    setWidth(width: number): Impacto.GameObjects.Triangle;
    /**
     * Change the height of the triangle.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setHeight(200); // 200
     *
     * @param {number} height - The new height of the triangle.
     * @returns {Impacto.GameObjects.Triangle} The triangle itself.
     * @memberof Impacto.GameObjects.Triangle
     */
    setHeight(height: number): Impacto.GameObjects.Triangle;
    /**
     * Change the size of the triangle.
     *
     * if the height is not defined, it will be the same as the width.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setSize(200, 200); // 200, 200
     *
     * @param {number} width - The new width of the triangle.
     * @param {number} height - The new height of the triangle.
     * @returns {Impacto.GameObjects.Triangle} The triangle itself.
     * @memberof Impacto.GameObjects.Triangle
     */
    setSize(width: number, height?: number): Impacto.GameObjects.Triangle;
    /**
     * Calculate the area of the triangle.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getArea(); // 5000
     *
     * @returns {number} The area of the triangle.
     * @memberof Impacto.GameObjects.Triangle
     */
    getArea(): number;
    /**
     * Calculate the perimeter of the triangle.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getPerimeter(); // 300
     *
     * @returns {number} The perimeter of the triangle.
     * @memberof Impacto.GameObjects.Triangle
     */
    getPerimeter(): number;
    /**
     * Returns the triangle's vertices.
     *
     * @example
     * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getVertices(); // [
     *  {"x": 100,"y": 100},
     *  {"x": 200,"y": 100},
     *  {"x": 150,"y": 200}]
     *
     * @returns {Object} The triangle's vertices.
     * @memberof Impacto.GameObjects.Triangle
     */
    getVertices(): any;
    /**
     * Private (Core) function to render.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Polygon
     */
    private readonly _renderType;
}
