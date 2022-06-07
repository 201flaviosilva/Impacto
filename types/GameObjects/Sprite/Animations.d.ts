/**
 * @param {Impacto.GameObjects.Sprite} parent - The parent Sprite.
 * @param {string} name - The name of the Animations.
 * @param {number} startFrame - The first frame of the Animations.
 * @param {number} numberOfFrames - Number of frames of the Animations.
 * @param {number} [speed] - The speed of the Animations.
 * @param {boolean} [loop] - Whether the Animations should loop or not.
 *
 * @classdesc
 * A class to manage the animations of a sprite
 *
 * @example
 * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
 * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
 *
 * @class Animations
 * @constructors
 */
export default class Animations {
    constructor(parent: any);
    _parent: any;
    animations: {};
    currentAnimation: any;
    paused: boolean;
    /**
     * Returns the animation state
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
     * console.log(mySprite.animations.get(""Default""));
     *
     * @param {string} name - The name of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    get(name: string): Animation;
    /**
     * Add a new animation to the sprite
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth(), 0, 10, false);
     *
     * @param {string} name - The name of the Animation.
     * @param {number} numberOfFrames - Number of frames of the Animation.
     * @param {number} [startFrame=0] - The first frame of the Animation.
     * @param {number} [speed=100] - The speed of the Animation.
     * @param {boolean} [loop=true] - Whether the Animation should loop or not.
     * @memberof Animations
     */
    add(name: string, numberOfFrames: number, startFrame?: number | undefined, speed?: number | undefined, loop?: boolean | undefined): Animation;
    /**
     * Returns all animations names
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth());
     * console.log(mySprite.animations.getAnimationsNames());
     *
     * @returns {string[]} The names of the animations
     * @memberof Animations
     */
    getAnimationsNames(): string[];
    /**
     * Reset the animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).reset();
     *
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    reset(name: any): Animation;
    /**
     * Play the animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).play("Default");
     *
     * @param {string} name - The name of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    play(name: string): Animation;
    /**
     * Pause the animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).pause();
     *
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    pause(): Animation;
    /**
     * Resume the animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).resume();
     *
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    resume(): Animation;
    /**
     * Change the name of a animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeName("NewName");
     *
     * @param {string} oldName - The name of the Animation.
     * @param {string} newName - The new name of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    setName(oldName: string, newName: string): Animation;
    /**
     * Change the speed of a animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeSpeed(100);
     *
     * @param {string} name - The name of the Animation.
     * @param {number} speed - The new speed of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    setSpeed(name: string, speed: number): Animation;
    /**
     * Change the number of frame of a animation
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeNumberOfFrames(10);
     *
     * @param {string} name - The name of the Animation.
     * @param {number} numberOfFrames - The new number of frames of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    setNumberOfFrames(name: string, numberOfFrames: number): Animation;
    /**
     * Change if animation if in loop or not
     *
     * @example
     * const mySprite = new Impacto.GameObjects.Sprite(400, 300, "MySprite");
     * mySprite.animations.add("Default", mySprite.getNumFramesByWidth()).changeLoop(false);
     *
     * @param {string} name - The name of the Animation.
     * @param {boolean} loop - The new loop state of the Animation.
     * @returns {Animation} The animation state
     * @memberof Animations
     */
    setLoop(name: string, loop: boolean): Animation;
    /**
     * Private (Core) function to update the animation.
     *
     * @private
     * @memberof Animations
     */
    private _update;
}
import Animation from "./Animation.js";
//# sourceMappingURL=Animations.d.ts.map