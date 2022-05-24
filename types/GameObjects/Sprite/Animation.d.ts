/**
 * @param {Impacto.GameObjects.Sprite} parent - The parent Sprite.
 * @param {string} name - The name of the Animations.
 * @param {number} startFrame - The first frame of the Animations.
 * @param {number} numberOfFrames - Number of frames of the Animations.
 * @param {number} speed - The speed of the Animations.
 * @param {boolean} [loop=true] - Whether the Animations should loop or not.
 *
 * @example
 * new Animation(MySprite, "Default", 0, 10, 100, true);
 *
 * @class Animation
 * @constructor
 */
export default class Animation {
    constructor(parent: any, name: any, startFrame: any, numberOfFrames: any, speed: any, loop?: boolean);
    _parent: any;
    name: any;
    startFrame: any;
    numberOfFrames: any;
    speed: any;
    loop: boolean;
    reversed: boolean;
    yoyo: boolean;
    _currentFrame: number;
    _currentTime: number;
    /**
     * Change the current animation name
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setName("MyNewName");
     *
     * @param {string} newName - The
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    setName(newName: string): Animation;
    /**
     * Change the speed of a animation
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setSpeed(50);
     *
     * @param {string} name - The name of the Animation.
     * @param {number} speed - The new speed of the Animation.
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    setSpeed(speed: number): Animation;
    /**
     * Change the start frame of a animation
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setStartFrame(5);
     *
     * @param {number} startFrame - The new start frame of the Animation.
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    setStartFrame(startFrame: number): Animation;
    /**
     * Change the number of frames of a animation
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setNumberOfFrames(5);
     *
     * @param {number} numberOfFrames - The new number of frames of the Animation.
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    setNumberOfFrames(numberOfFrames: number): Animation;
    /**
     * Change the loop of a animation
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100, true).setLoop(false);
     *
     * @param {boolean} loop - The new loop of the Animation.
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    setLoop(loop: boolean): Animation;
    /**
     * Reset the animation to the first frame
     *
     * @example
     * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).reset();
     *
     * @returns {Animation} - The animation state
     * @memberof Animation
     */
    reset(): Animation;
    /**
     * Private (Core) function to update the animation.
     *
     * @private
     * @readonly
     * @memberof Animation
     */
    private readonly _update;
}
