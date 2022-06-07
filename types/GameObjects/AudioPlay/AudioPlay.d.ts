/**
 * @property {string} key - The key of the sprite.
 * @property {boolean} loop - If the audio file should loop.
 * @property {boolean} paused - If the audio file is paused.
 * @property {number} volume - The volume of the audio file.
 * @property {boolean} muted - If the audio file should be muted.
 * @property {number} delay - The delay of the audio file.
 *
 * @classdesc
 * AudioPlay is a class that plays audio files.
 *
 * @example
 * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
 *
 * @class AudioPlay
 */
export default class AudioPlay {
    constructor(key: any, loop?: boolean, paused?: boolean, volume?: number | undefined, muted?: boolean, delay?: number);
    /**
    * @type {string}
    * @default ""
    * @description The source of the audio file.
    *
    * @memberof AudioPlay
    */
    name: string;
    /**
     * @private
     */
    private audio;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio file should loop.
     *
     * @memberof AudioPlay
     */
    paused: boolean;
    /**
     * @type {number}
     * @default 1
     * @description The volume on reproducing the audio file.
     *
     * @memberof AudioPlay
     */
    volume: number;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be in loop.
     *
     * @memberof AudioPlay
     */
    loop: boolean;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be muted.
     *
     * @memberof AudioPlay
     */
    muted: boolean;
    /**
     * @type {number}
     * @default 0
     * @description The delay of the audio file.
     *
     * @memberof AudioPlay
     */
    delay: number;
    /**
     * @type {number}
     * @default 0
     * @description The time of the audio file.
     *
     * @memberof AudioPlay
     */
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
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    play(): AudioPlay;
    /**
     * @description just plays once time the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.playOnce();
     *
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    playOnce(): AudioPlay;
    /**
     * @description Pause the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.pause();
     *
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    pause(): AudioPlay;
    /**
     * @description Resume the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.resume();
     *
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    resume(): AudioPlay;
    /**
     * @description Stop the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.stop();
     *
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    stop(): AudioPlay;
    /**
     * @description Set the volume of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setVolume(0.5);
     *
     * @param {number} volume - The volume of the audio file.
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    setVolume(volume: number): AudioPlay;
    /**
     * @description Set loop of the audio file. If the audio file is looping, it will be played again.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setLoop(true);
     *
     * @param {boolean} loop - If the audio file should be looping.
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    setLoop(loop: boolean): AudioPlay;
    /**
     * @description Set the delay of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setDelay(1000);
     *
     * @param {number} delay - The delay of the audio file.
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    setMuted(muted: any): AudioPlay;
    /**
     * @description Set the delay of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.setDelay(1000);
     *
     * @param {number} delay - The delay of the audio file.
     * @returns {AudioPlay}
     * @memberof AudioPlay
     */
    setDelay(delay: number): AudioPlay;
    /**
     * @description Check if the audio file is ended playing.
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/ended}
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.isEnded();
     *
     * @returns {boolean} If the audio file is ended playing.
     * @memberof AudioPlay
     */
    isEnded(): boolean;
    /**
     * @description Returns the time of the audio file.
     *
     * @example
     * const myAudioPlay = new Impacto.GameObjects.AudioPlay("MyAudio");
     * myAudioPlay.getDuration();
     *
     * @returns {number} The time of the audio file.
     * @memberof AudioPlay
     */
    getDuration(): number;
}
//# sourceMappingURL=AudioPlay.d.ts.map