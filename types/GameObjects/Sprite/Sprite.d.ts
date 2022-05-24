/**
 * @param {number} x - The horizontal position of this Sprite in the world.
 * @param {number} y - The vertical position of this Sprite in the world.
 * @param {number} key - The name of the Sprite.
 * @param {number} [frame=0] - The frame of the Sprite.
 * @param {number} [width=0] - The width of the Sprite.
 * @param {number} [height=0] - The height of the Sprite.
 *
 * @classdesc
 * This class will draw a Sprite on the canvas.
 *
 * @example
 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32);
 *
 * @class Sprite
 * @extends Impacto.GameObjects.GameObject2D
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Sprite {
    constructor(x: any, y: any, key: any, frame?: number, width?: number, height?: number);
    texture: any;
    frame: number;
    width: any;
    height: any;
    animations: Animations;
    _type: string;
    /**
 * Sets the X position of the Sprite.
 *
 * @param {number} x - The horizontal position of this Sprite in the world.
 */
    set x(arg: number);
    /**
     * @returns {number} The horizontal position of this Sprite in the world relative to the origin.
     */
    get x(): number;
    /**
 * Sets the Y position of the Sprite.
 *
 * @param {number} y - The vertical position of this Sprite in the world.
 */
    set y(arg: number);
    /**
    * @returns {number} The vertical position of this Sprite in the world relative to the origin.
    */
    get y(): number;
    /**
     * Change the frame of this Sprite.
     *
     * @example
     * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).setFrame(1);
     *
     * @param {number} frame - The frame of the Sprite.
     * @returns {Impacto.GameObjects.Sprite} The Sprite itself.
     * @memberof Impacto.GameObjects.Sprite
     */
    setFrame(frame: number): Impacto.GameObjects.Sprite;
    /**
     * Returns the number of frames of this Sprite based on the width.
     *
     * @example
     * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).getNumFramesByWidth(); // 8
     *
     * @returns {number} The number of frames by width.
     * @memberof Impacto.GameObjects.Sprite
     */
    getNumFramesByWidth(): number;
    /**
     * @description
     * Private (Core) function to render the position of the Sprite.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Sprite
     */
    private readonly _renderType;
}
import Animations from "./Animations.js";
