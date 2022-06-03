/**
 * @param {number} x - The horizontal position of this Circle in the world.
 * @param {number} y - The vertical position of this Circle in the world.
 * @param {number} [radius=10] - The radius of this Circle.
 * @param {number | string} [fillColor=0xffffff] - The color the Circle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Circle, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * Circle is a class that will draw a circle on the canvas.
 *
 * @example
 * const circ = new Impacto.GameObjects.Circle(400, 300, 50, "#ff0000", 0x00ff00);
 *
 * @class Circle
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors
 */
export default class Circle {
    constructor(x: any, y: any, radius?: number, fillColor?: string, strokeColor?: string);
    radius: number;
    _type: string;
    /**
     * @description
     * Sets the X position of the Circle.
     *
     * @example
     * circ.x = 100;
     *
     * @param {number} x - The horizontal position of this Circle in the world.
     * @memberof Circle
     */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    get x(): number;
    /**
     * @description
     * Sets the Y position of the Circle.
     *
     * @example
     * circ.y = 100;
     *
     * @param {number} y - The vertical position of this Circle in the world.
     * @memberof Circle
     */
    set y(arg: number);
    /**
     * @returns {number} The vertical position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    get y(): number;
    /**
     * @description
     * Sets the radius of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).setRadius(100); // 100
     *
     * @param {number} radius - The radius of this Circle.
     * @returns {Circle} This Circle.
     * @memberof Circle
     */
    setRadius(radius: number): Circle;
    /**
     * @description
     * Returns the top side position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getTop(); // 275
     *
     * @returns {number} The vertical position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getTop(): number;
    /**
     * @description
     * Returns the bottom side position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getBottom(); // 325
     *
     * @returns {number} The vertical position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getBottom(): number;
    /**
     * @description
     * Returns the left side position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getLeft(); // 375
     *
     * @returns {number} The horizontal position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getLeft(): number;
    /**
     * @description
     * Returns the right side position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRight(); // 425
     *
     * @returns {number} The horizontal position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getRight(): number;
    /**
     * @description
     * Returns the center X position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getCenterX(); // 400
     *
     * @returns {number} The horizontal position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getCenterX(): number;
    /**
     * @description
     * Returns the center Y position of the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getCenterY(); // 300
     *
     * @returns {number} The vertical position of this Circle in the world relative to the origin.
     * @memberof Circle
     */
    getCenterY(): number;
    /**
     * @description
     * Returns the real top side position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealTop(); // 275
     *
     * @returns {number} The vertical position of this Circle in the world.
     * @memberof Circle
     */
    getRealTop(): number;
    /**
     * @description
     * Returns the real bottom side position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealBottom(); // 325
     *
     * @returns {number} The vertical position of this Circle in the world.
     * @memberof Circle
     */
    getRealBottom(): number;
    /**
     * @description
     * Returns the real left side position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealLeft(); // 375
     *
     * @returns {number} The horizontal position of this Circle in the world.
     * @memberof Circle
     */
    getRealLeft(): number;
    /**
     * @description
     * Returns the real right side position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealRight(); // 425
     *
     * @returns {number} The horizontal position of this Circle in the world.
     * @memberof Circle
     */
    getRealRight(): number;
    /**
     * @description
     * Returns the real center X position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealCenterX(); // 400
     *
     * @returns {number} The horizontal position of this Circle in the world.
     * @memberof Circle
     */
    getRealCenterX(): number;
    /**
     * @description
     * Returns the real center Y position of the Circle (not relative to the origin).
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getRealCenterY(); // 300
     *
     * @returns {number} The vertical position of this Circle in the world.
     * @memberof Circle
     */
    getRealCenterY(): number;
    /**
     * @description
     * Returns a box that encloses the Circle.
     *
     * @example
     * new Impacto.GameObjects.Circle(400, 300, 50).getBounds(); // { x: 375, y: 275, width: 150, height: 150 }
     *
     * @returns {Object} A box that encloses the Circle.
     * @memberof Circle
     */
    getBounds(): Object;
    /**
     * @description
     * Private (Core) function to render the position of the Circle.
     *
     * @memberof Circle
     * @private
     */
    private _renderType;
}
//# sourceMappingURL=Circle.d.ts.map