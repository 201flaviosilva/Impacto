/**
 * @classdesc
 * Create a new scene
 *
 * @example
 * class MyScene extends Scene {}
 *
 * @class Scene
 * @constructors
 */
export default class Scene {
    children: any[];
    collisions: {
        layer1: never[];
    };
    time: {
        delta: number;
        deltaTime: number;
        fps: number;
        gameTime: number;
    };
    /**
     * @description
     * Add a child to the scene
     *
     * @example
     * this.addChild(mySprite);
     *
     * @param {Impacto.GameObject} child - The child to add
     * @returns {Scene} This scene
     * @memberof Scene
     */
    addChild(child: Impacto.GameObject): Scene;
    /**
     * @description
     * Remove a child from the scene
     *
     * @example
     * this.removeChild(mySprite);
     *
     * @param {Impacto.GameObject} child - The child to remove
     * @returns {Scene} This scene
     * @memberof Scene
     */
    removeChild(child: Impacto.GameObject): Scene;
    /**
     * @description
     * The entry point of the scene, this function is called once when the scene is loaded
     * Normally, you use this function to create and add your game objects
     *
     * @example
     * class MyScene extends Scene {
     *  	start() {
     * 		const sprite = new Sprite();
     * 		this.addChild(sprite);
     * 	}
     * }
     *
     * @memberof Scene
     */
    start(): void;
    /**
     * @description
     * The update function is called every frame
     *
     * @example
     * class MyScene extends Scene {
     * 	update(delta) {
     *    console.log(delta);
     * 	}
     * }
     *
     * @param {number} delta - The time since the last frame
     * @memberof Scene
     */
    update(delta: number): void;
    /**
     * @description
     * The render function is called every frame after the update and core render function
     *
     * @example
     * class MyScene extends Scene {
     * 	render(context) {
     * 	  console.log("render");
     * 	}
     * }
     *
     * @param {CanvasRenderingContext2D} context - The canvas context
     * @memberof Scene
     */
    posRender(context: CanvasRenderingContext2D): void;
}
//# sourceMappingURL=Scene.d.ts.map