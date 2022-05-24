/**
 * @property {string} src - The source of the audio file.
 * @property {boolean} loop - If the audio file should loop.
 * @property {boolean} paused - If the audio file is paused.
 * @property {number} volume - The volume of the audio file.
 * @property {boolean} muted - If the audio file should be muted.
 * @property {number} delay - The delay of the audio file.

 * @classdesc AudioPlay is a class that plays audio files.
 *
 * @example
 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
 *
 * @class AudioPlay
 * @memberof Impacto.GameObjects
 */
export default class AudioPlay {
    constructor(key: any, loop?: boolean, paused?: boolean, volume?: number, muted?: boolean, delay?: number);
    /**
    * @type {string}
    * @default ""
    * @description The source of the audio file.
    *
    * @memberof Impacto.GameObjects.AudioPlay
    * @readonly
    * @instance
    * @public
    */
    public readonly name: string;
    /**
     * @private
     */
    private audio;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio file should loop.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @readonly
     * @instance
     * @public
     */
    public readonly paused: boolean;
    /**
     * @type {number}
     * @default 1
     * @description The volume on reproducing the audio file.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @readonly
     * @instance
     * @public
     */
    public readonly volume: number;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be in loop.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @readonly
     * @instance
     * @public
     */
    public readonly loop: boolean;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be muted.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @readonly
     * @instance
     * @public
     */
    public readonly muted: boolean;
    /**
     * @type {number}
     * @default 0
     * @description The delay of the audio file.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @readonly
     * @instance
     * @public
     */
    public readonly delay: number;
    loopDelay: number;
    /**
     * @description Core properties of the audio file.
     * @private
     */
    private _delayTimer;
    /**
     * @description The type of the object.
     * @private
     */
    private _type;
    /**
     * @description Plays the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.play();
     *
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public play(): Impacto.GameObjects.AudioPlay;
    /**
     * @description just plays once time the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.playOnce();
     *
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public playOnce(): Impacto.GameObjects.AudioPlay;
    /**
     * @description Pause the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.pause();
     *
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public pause(): Impacto.GameObjects.AudioPlay;
    /**
     * @description Resume the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.resume();
     *
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public resume(): Impacto.GameObjects.AudioPlay;
    /**
     * @description Stop the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.stop();
     *
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public stop(): Impacto.GameObjects.AudioPlay;
    /**
     * @description Set the volume of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setVolume(0.5);
     *
     * @param {number} volume - The volume of the audio file.
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public setVolume(volume: number): Impacto.GameObjects.AudioPlay;
    /**
     * @description Set loop of the audio file. If the audio file is looping, it will be played again.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setLoop(true);
     *
     * @param {boolean} loop - If the audio file should be looping.
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public setLoop(loop: boolean): Impacto.GameObjects.AudioPlay;
    /**
     * @description Set the delay of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setDelay(1000);
     *
     * @param {number} delay - The delay of the audio file.
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public setMuted(muted: any): Impacto.GameObjects.AudioPlay;
    /**
     * @description Set the delay of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setDelay(1000);
     *
     * @param {number} delay - The delay of the audio file.
     * @returns {Impacto.GameObjects.AudioPlay}
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     */
    public setDelay(delay: number): Impacto.GameObjects.AudioPlay;
    /**
     * @description Check if the audio file is ended playing.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.isEnded();
     *
     * @returns {boolean} If the audio file is ended playing.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     * @readonly
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended}
     */
    public readonly isEnded(): boolean;
    /**
     * @description Returns the time of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.getDuration();
     *
     * @returns {number} The time of the audio file.
     *
     * @memberof Impacto.GameObjects.AudioPlay
     * @instance
     * @public
     * @function
     * @readonly
     */
    public readonly getDuration(): number;
}
