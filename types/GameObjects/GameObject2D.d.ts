/**
 * @param {number} x - The horizontal position of this Object in the world.
 * @param {number} y - The vertical position of this Object in the world.
 * @param {number | string} [fillColor=0xffffff] - The color the Object will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Object, i.e. 0x00ff00 for green.
 *
 * @classdesc
 * The base class for a game objects.
 * Probably you don't need to use this class directly.
 * Use this class to extend your own game objects.
 *
 * @example
 * class MyGameObject extends Impacto.GameObject.GameObject2D {
 * 	constructor(x, y, fillColor, strokeColor, ...args) {
 * 		super(x, y, fillColor, strokeColor);
 * 	}
 * }
 *
 * @class GameObject2D
 * @constructors
 */
export default class GameObject2D {
    constructor(x: any, y: any, fillColor: any, strokeColor: any);
    id: number;
    name: string;
    _x: any;
    _y: any;
    z: number;
    rotation: number;
    angle: number;
    scale: {
        x: number;
        y: number;
    };
    lastPosition: {
        x: any;
        y: any;
        z: number;
    };
    origin: {
        x: number;
        y: number;
    };
    fillColor: any;
    strokeColor: any;
    strokeWidth: number;
    visible: boolean;
    /**
     * @description
     * Set the game object's name.
     *
     * @example
     * obj.setName("My Game Object");
     *
     * @param {string} name - The name of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setName(name: string): GameObject2D;
    /**
     * @description
     * Set the horizontal position of the game object in the world based on the origin.
     *
     * @example
     * obj.setX(100);
     *
     * @param {number} x - The horizontal position of the game object in the world.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setX(x: number): GameObject2D;
    /**
     * @description
     * Set the vertical position of the game object in the world based on the origin.
     *
     * @example
     * obj.setY(100);
     *
     * @param {number} y - The vertical position of the game object in the world.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setY(y: number): GameObject2D;
    /**
     * @description
     * Set the Z position of the game object in the world based on the origin.
     *
     * @example
     * obj.setZ(100);
     *
     * @param {number} z - The Z position of the game object in the world.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setZ(z: number): GameObject2D;
    /**
     * @description
     * Returns the position of the object's in the world relative on the object origin.
     *
     * @example
     * obj.getPosition();
     *
     * @returns {Object} {x:number, y:number, z:number} - The position of the object in the world.
     * @memberof GameObject2D
     */
    getPosition(): Object;
    /**
     * @description
     * Returns the real position of the object's in the world. (Not relative on the object origin)
     *
     * @example
     * obj.getRealPosition();
     *
     * @returns {Object} {x:number, y:number, z:number} - The real position of the object in the world.
     * @memberof GameObject2D
     */
    getRealPosition(): Object;
    /**
     * @description
     * Set the position of the game object in the world.
     *
     * @example
     * obj.setPosition(100, 100, 100);
     *
     * @param {number} x - The horizontal position of the game object in the world.
     * @param {number} y - The vertical position of the game object in the world.
     * @param {number} z - The Z position of the game object in the world.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setPosition(x: number, y: number, z?: number): GameObject2D;
    /**
     * @description
     * Set a random position of the game object in the world.
     *
     * @example
     * obj.setRandomPosition();
     *
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setRandomPosition(x?: number, y?: number, width?: number | undefined, height?: number | undefined): GameObject2D;
    /**
     * @description
     * Set the rotation of the game object in the world based in radians.
     *
     * @example
     * obj.setRotation(1.5);
     *
     * @param {number} rotation - The rotation of the game object in the world in radians.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setRotation(rotation: number): GameObject2D;
    /**
     * @description
     * Set the angle of the game object in the world based in degrees.
     *
     * @example
     * obj.setAngle(90);
     *
     * @param {number} angle - The angle of the game object in the world in degrees.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setAngle(angle: number): GameObject2D;
    /**
     * @description
     * Set the horizontal scale of the game object.
     *
     * @example
     * obj.setScaleX(2);
     *
     * @param {number} scaleX - The horizontal scale of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setScaleX(x: any): GameObject2D;
    /**
     * @description
     * Set the vertical scale of the game object.
     *
     * @example
     * obj.setScaleY(2);
     *
     * @param {number} scaleY - The vertical scale of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setScaleY(y: any): GameObject2D;
    /**
     * @description
     * Set the horizontal and vertical scale of the game object.
     *
     * @example
     * obj.setScale(2);
     *
     * @param {number} scale - The scale of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setScale(x?: number, y?: number): GameObject2D;
    /**
     * @description
     * Set the horizontal origin point of the game object.
     * The origin point is between 0 and 1.
     *
     * @example
     * obj.setOriginX(0.5);
     *
     * @param {number} originX - The horizontal origin point of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setOriginX(x: any): GameObject2D;
    /**
     * @description
     * Set the vertical origin point of the game object.
     * The origin point is between 0 and 1.
     *
     * @example
     * obj.setOriginY(0.5);
     *
     * @param {number} originY - The vertical origin point of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setOriginY(y: any): GameObject2D;
    /**
     * @description
     * Set the horizontal and vertical origin point of the game object.
     * The origin point is between 0 and 1.
     *
     * @example
     * obj.setOrigin(0.5);
     *
     * @param {number} origin - The origin point of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setOrigin(x?: number, y?: number): GameObject2D;
    /**
     * @description
     * Set the fill color of the game object.
     *
     * @example
     * obj.setFillColor("#FF0000");
     *
     * @param {string} color - The fill color of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setFillColor(fillColor: any): GameObject2D;
    /**
     * @description
     * Set the stroke/border color of the game object.
     *
     * @example
     * obj.setStrokeColor("#FF0000");
     *
     * @param {string} color - The stroke color of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setStrokeColor(strokeColor: any): GameObject2D;
    /**
     * @description
     * Set the stroke/border width of the game object.
     *
     * @example
     * obj.setStrokeWidth(2);
     *
     * @param {number} width - The stroke width of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setStrokeWidth(strokeWidth: any): GameObject2D;
    /**
     * @description
     * Set the visibility of the game object.
     *
     * @example
     * obj.setVisible(false);
     *
     * @param {boolean} visible - The visibility of the game object.
     * @returns {GameObject2D}
     * @memberof GameObject2D
     */
    setVisible(isVisible: any): GameObject2D;
    /**
     * @description
     * Private (Core) function to render the game object.
     *
     * @memberof GameObject2D
     * @param {number} deltaTime - The time since the last frame.
     * @private
     */
    private _render;
}
//# sourceMappingURL=GameObject2D.d.ts.map