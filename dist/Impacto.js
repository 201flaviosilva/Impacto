/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Impacto)
});

;// CONCATENATED MODULE: ./src/State/AssetsManager.js
/**
 * @class AssetsManager
 * @description A class to manage the assets.
 */
class AssetsManager {
  constructor() {
    if (AssetsManager.instance instanceof AssetsManager) return AssetsManager.instance;
    AssetsManager.instance = this;
    this.assets = {
      audios: {},
      fonts: {},
      sprites: {}
    };
  }
  /**
   * Load the assets
   * 
   * @example
   * load({
   * 	sprites: { MySprite: "./MySprite.png", },
   * 	fonts: { "MyFont": "MyFont.ttf", },
   * 	audios: { "MyAudio": "MyAudio.mp3", }
   * });
   * 
   * 
   * @param {Object} assets - The assets to load
   * @returns {void}
   * @memberof AssetsManager
   */


  async load(assets) {
    for (const key in assets) {
      const category = assets[key];

      if (key === "sprites") {
        const spritesKeys = Object.keys(category);

        if (spritesKeys.length > 0) {
          for (const spriteKey of spritesKeys) {
            await this.loadSprite(spriteKey, category[spriteKey]);
          }
        }
      } else if (key === "fonts") {
        const fontsKeys = Object.keys(category);

        if (fontsKeys.length > 0) {
          for (const fontKey of fontsKeys) {
            await this.loadFont(fontKey, category[fontKey]);
          }
        }
      } else if (key === "audios") {
        const audiosKeys = Object.keys(category);

        if (audiosKeys.length > 0) {
          for (const soundKey of audiosKeys) {
            await this.loadAudios(soundKey, category[soundKey]);
          }
        }
      }
    }
  }
  /**
   * Load a sprite
   * 
   * @param {string} name - The name of the sprite
   * @param {string} path - The path of the sprite
   * @returns {void}
   * @memberof AssetsManager
   */


  async loadSprite(name, path) {
    const image = await this._loadImage(path);
    this.assets.sprites[name] = {
      image,
      width: image.width,
      height: image.height
    };
  }
  /**
   * @description
   * Private (Core) function to load images/sprites
   * 
   * @memberof AssetsManager
   * @private
   */


  async _loadImage(path) {
    return new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(image);

      image.onerror = () => reject(new Error(`Could not load image: ${path}`));

      image.src = path;
    });
  }
  /**
   * Load a font
   * 
   * @param {string} name - The name of the font
   * @param {string} path - The path of the font
   * @returns {void}
   * @memberof AssetsManager
   */


  async loadFont(name, path) {
    this.assets.fonts[name] = name;
    const newCSSFont = document.createElement("style");
    newCSSFont.type = "text/css";
    newCSSFont.innerHTML = `
			@font-face {
				font-family: "${name}";
				src: url("${path}") format("truetype");`;
    document.body.appendChild(newCSSFont);
  }
  /**
   * Load a sound
   * 
   * @param {string} name - The name of the sound
   * @param {string} path - The path of the sound
   * @returns {void}
   * @memberof AssetsManager
   */


  async loadAudios(name, path) {
    this.assets.audios[name] = await this._loadAudio(path);
  }
  /**
   * @description
   * Private (Core) function to load sounds/audios
   * 
   * @memberof AssetsManager
   * @private
   */


  async _loadAudio(path) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();

      audio.oncanplaythrough = () => resolve(audio);

      audio.onerror = () => reject(new Error(`Could not load audio: ${path}`));

      audio.src = path;
    });
  }
  /**
   * Return the sprite based on the name
   * 
   * @param {string} name - The name of the sprite
   * @returns {Object} The sprite
   * @memberof AssetsManager
   */


  getSprite(name) {
    return this.assets.sprites[name].image;
  }
  /**
   * Return the font based on the name
   * 
   * @param {string} name - The name of the font
   * @returns {string} The font
   * @memberof AssetsManager
   */


  getFont(name) {
    return this.assets.fonts[name];
  }
  /**
   * Return the audio based on the name
   * 
   * @param {string} name - The name of the audio
   * @returns {Object} The audio
   * @memberof AssetsManager
   */


  getAudio(name) {
    return this.assets.audios[name];
  }
  /**
   * Return the size of the sprite
   * 
   * @param {string} name - The name of the sprite
   * @returns {Object} The size of the sprite
   * @memberof AssetsManager
   */


  getSpriteSize(name) {
    const sprite = this.getSprite(name);
    if (sprite) return {
      width: sprite.width,
      height: sprite.height
    };
    return null;
  }

}
const AssetsManagerInstance = new AssetsManager();
;// CONCATENATED MODULE: ./src/State/CanvasState.js
/**
 * @class CanvasState
 * @description A class to manage canvas state.
 */
class CanvasState {
  constructor() {
    if (CanvasState.instance instanceof CanvasState) return CanvasState.instance;
    CanvasState.instance = this;
    this.parent = document.body;
    this.canvas = null;
    this.context = null;
    this.backgroundColor = null;
    this.width = 800;
    this.height = 600;
  }
  /**
   * Change the parent element of the canvas.
   * If not specified, the canvas will be appended to the body.
   * 
   * @param {string|HTMLElement} parent - The parent element of the canvas
   * @returns {void}
   * @memberof CanvasState
   */


  setParent(parent) {
    if (!parent) parent = document.body;else if (typeof parent === "string") parent = document.getElementById(parent);else if (!(parent instanceof HTMLElement)) throw new Error("Invalid parent");
    this.parent = parent;
  }
  /**
   * Initialize the canvas state.
   * If the canvas is not specified, a new canvas will be created.
   * 
   * @param {string|HTMLElement} canvas - The canvas element
   * @returns {void}
   * @memberof CanvasState
   */


  setCanvas(canvas) {
    if (typeof canvas === "string") this.canvas = document.getElementById(canvas);else if (canvas instanceof HTMLElement) this.canvas = canvas;else this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext("2d");
    this.parent.appendChild(this.canvas);
  }
  /**
   * Change the canvas width and height.
   * 
   * @param {number} width - The width of the canvas. Default 800
   * @param {number} height - The height of the canvas. Default 600
   * @returns {void}
   * @memberof CanvasState
   */


  setSize(width = 800, height = 600) {
    this.width = width;
    this.height = height;

    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    }
  }
  /**
   * Change the background color of the canvas.
   * 
   * @param {number|string} color - The background color of the canvas. Default black
   * @returns {void}
   * @memberof CanvasState
   */


  setBackgroundColor(color = 0x000000) {
    if (!color) color = null;
    this.backgroundColor = color;
  }

}
const CanvasStateInstance = new CanvasState();
;// CONCATENATED MODULE: ./src/State/GlobalStateManager.js
/**
 * @class GlobalStateManager
 * @description A class to manage all global states.
 */
class GlobalStateManager {
  constructor() {
    if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
    GlobalStateManager.instance = this;
    this.isPaused = false;
    this.isMuted = false; // TODO

    this.volume = 1; // TODO: // Audio default volume
  }
  /**
   * Pauses/Unpauses the game.
   * 
   * @param {boolean} pause - Pause the game
   * @returns {void}
   * @memberof GlobalStateManager
   */


  setPause(pause) {
    this.isPaused = pause;
  }
  /**
  * Change the volume of the audio.
  * 
  * @param {number} volume - The volume of the audio. Default 1
  * @returns {void}
  * @memberof GlobalStateManager
  */


  setVolume(volume = 1) {
    if (volume < 0 || volume > 1) throw new Error("Invalid volume");
    this.volume = volume;
  }

}
const GlobalStateManagerInstance = new GlobalStateManager();
;// CONCATENATED MODULE: ./src/Core/CoreGameManager.js


/**
 * @class CoreGameManager
 * @description A core class to manage the game cycle.
 * @private
 */

class CoreGameManager {
  constructor() {
    if (CoreGameManager.instance instanceof CoreGameManager) return CoreGameManager.instance;
    CoreGameManager.instance = this;
    this.currentScene = null;
    this.scenes = []; // Time

    this._lastTimeUpdate = Date.now();
    this.delta = 0;
    this.deltaTime = 0;
    this.gameTime = 0;
    this._fps = 0; // Temp variable just for calculating FPS

    this.fps = 0;
    window.requestAnimationFrame(this.step.bind(this));
    document.addEventListener("visibilitychange", event => {
      this.tabActive = document.hidden;
      this._lastTimeUpdate = Date.now();
    });
    setInterval(this.updateFPS.bind(this), 1000);
  }
  /**
   * Add a new scene to the game
   * @param {Object} scene - The scene to add
   * @private
   */


  addScene(scene) {
    const newScene = new scene();
    this.scenes.push(newScene);
  }
  /**
   * Initialize a scene and set it as the current scene
   * 
   * @param {number} index - The index of the scene to initialize
   * @private
   */


  startScene(index) {
    this.currentScene = this.scenes[index];
    this.currentScene.start();
  }
  /**
   * Reset the calc of the FPS
   * 
   * @private
   */


  updateFPS() {
    this.fps = this._fps;
    this._fps = 0;
  }
  /**
   * Calculate the time since the game start, the delta time and the FPS
   * 
   * @private
   */


  calcTime() {
    if (this.tabActive) return;
    const now = Date.now();
    const delta = now - this._lastTimeUpdate;
    const deltaTime = delta * 0.01;
    this._lastTimeUpdate = now;
    this.delta = delta;
    this.deltaTime = deltaTime;
    return {
      delta,
      deltaTime
    };
  }
  /**
   * Update the game
   * 
   * @param {number} gameTime - The time since the game start
   * @private
   */


  step(gameTime) {
    window.requestAnimationFrame(this.step.bind(this));
    if (GlobalStateManagerInstance.isPaused) return;
    this.gameTime = gameTime;
    const time = this.calcTime();
    this._fps++;

    if (this.currentScene) {
      this.currentScene.time = {
        delta: this.delta,
        deltaTime: this.deltaTime,
        fps: this.fps,
        gameTime
      }; // Objects Steep

      this.currentScene.children.forEach(child => {
        if (child._step) child._step();
      });
      this.update();
      this.render();
    }
  }
  /**
   * Run User Code
   * 
   * @private
   */


  update() {
    this.currentScene.update(this.deltaTime, this.fps);
  }
  /**
   * Render the game in the canvas
   * 
   * @private
   */


  render() {
    const ctx = CanvasStateInstance.context;
    if (!ctx) return;

    if (CanvasStateInstance.backgroundColor) {
      ctx.fillStyle = CanvasStateInstance.backgroundColor;
      ctx.fillRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
    } else {
      ctx.clearRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
    }

    const zSortedChildren = this.currentScene.children.sort((a, b) => a.z - b.z);
    zSortedChildren.forEach(child => {
      if (child._render) child._render(this.deltaTime);
    });
    this.currentScene.posRender(ctx);
  }

}
const CoreGameManagerInstance = new CoreGameManager();
;// CONCATENATED MODULE: ./src/Game.js



/**
 * @param {Object} config - The configuration of the game
 * 
 * @class Game
 * @description The main class of the game.
 * 
 * @example
 * class Game extends Impacto.Scene {
 * 	start() {
 * 		this.rect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000");
 * 		this.addChild(this.rect);
 * 	}
 * }
 * 
 * const game = new Impacto.Game({
 * 	width: 800,
 * 	height: 600,
 * 	backgroundColor: "#f0f0f0",
 * 	scene: Game,
 * });
 * 
 * @constructor
 */

class Game {
  constructor(config) {
    // Start Canvas
    CanvasStateInstance.setParent(config.parent);
    CanvasStateInstance.setSize(config.width, config.height);
    CanvasStateInstance.setCanvas(config.canvas);
    CanvasStateInstance.setBackgroundColor(config.backgroundColor); // Assets

    new Promise((resolve, reject) => {
      AssetsManagerInstance.load(config.assets).then(() => {
        // Start Scene Manager
        const gameManager = new CoreGameManager();
        gameManager.addScene(config.scene);
        gameManager.startScene(0);
        resolve();
      }).catch(reject);
    });
  }

}
;// CONCATENATED MODULE: ./src/Scenes/Scene.js
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
class Scene {
  constructor() {
    this.children = [];
    this.collisions = {
      layer1: []
    };
    this.time = {
      delta: 0,
      deltaTime: 0,
      fps: 0,
      gameTime: 0
    };
  }
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


  addChild(child) {
    this.children.push(child);
  }
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


  removeChild(child) {
    const index = this.children.indexOf(child);
    if (index > -1) this.children.splice(index, 1);
  }
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


  start() {}
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


  update(delta) {}
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


  posRender(context) {}

}
;// CONCATENATED MODULE: ./src/Utils/Math.js
class UtilsMath {
  randomFloat(min, max, precision = 2) {
    if (!max) {
      max = min;
      min = 0;
    }

    return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
  }

  randomInt(min, max) {
    return Math.floor(this.randomFloat(min, max));
  }

  randomColor() {
    return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  radiansToDegrees(radians) {
    return radians * 180 / Math.PI;
  } // Points


  distanceTwoPoints(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
  }

  distanceTwoPointsVector2(point1, point2) {
    return this.distanceTwoPoints(point1.x, point1.y, point2.x, point2.y);
  }

  angleBetweenTwoPoints(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  }

  angleBetweenTwoPointsVector2(point1, point2) {
    return this.angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y);
  }

  angleBetweenTwoPointsDegrees(x1, y1, x2, y2) {
    return this.angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI;
  }

  angleBetweenTwoPointsVector2Degrees(point1, point2) {
    return this.angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y);
  } // Circles


  distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
    return this.distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
  }

  distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
    return this.distanceBetweenTwoCirclesFromCircle({
      x: x1,
      y: y1,
      radius: radius1
    }, {
      x: x2,
      y: y2,
      radius: radius2
    });
  }

  circleArea(radius) {
    return Math.PI * radius * radius;
  }

  circlePerimeter(radius) {
    return 2 * Math.PI * radius;
  } // Rectangles


  distanceBetweenTwoRectanglesFromRectangle(rect1, rect2) {
    const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
    const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
    return xOverlap * yOverlap;
  }

  distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
    return this.distanceBetweenTwoRectanglesFromRectangle({
      x: x1 + width1 / 2,
      y: y1 + height1 / 2,
      width: width1,
      height: height1
    }, {
      x: x2 + width2 / 2,
      y: y2 + height2 / 2,
      width: width2,
      height: height2
    });
  }

  angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
    return this.angleBetweenTwoRectanglesFromRectangle({
      x: x1 + width1 / 2,
      y: y1 + height1 / 2,
      width: width1,
      height: height1
    }, {
      x: x2 + width2 / 2,
      y: y2 + height2 / 2,
      width: width2,
      height: height2
    });
  }

  angleBetweenTwoRectanglesFromRectangle(rect1, rect2) {
    const xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
    const yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
    return Math.atan2(yOverlap, xOverlap);
  }

  rectangleArea(width, height) {
    return width * height;
  }

  rectanglePerimeter(width, height) {
    return 2 * (width + height);
  }

  rectanglePerimeterFromRectangle(rectangle) {
    return this.rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }

  rectangleVertices(x, y, width, height) {
    return [{
      x: x,
      y: y
    }, {
      x: x + width,
      y: y
    }, {
      x: x + width,
      y: y + height
    }, {
      x: x,
      y: y + height
    }];
  }

  rectangleVerticesFromRectangle(rectangle) {
    return this.rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }

  rectangleCenterX(x, width) {
    return x + width / 2;
  }

  rectangleCenterY(y, height) {
    return y + height / 2;
  }

  rectangleCenter(x, y, width, height) {
    return {
      x: this.rectangleCenterX(x, width),
      y: this.rectangleCenterY(y, height)
    };
  }

  rectangleCenterXFromRectangleBounds(rectangle) {
    return this.rectangleCenterX(rectangle.x, rectangle.width);
  }

  rectangleCenterYFromRectangleBounds(rectangle) {
    return this.rectangleCenterY(rectangle.y, rectangle.height);
  }

  rectangleCenterFromRectangleBounds(rectangle) {
    return this.rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }

  rectangleTopLeft(x, y) {
    return {
      x,
      y
    };
  }

  rectangleTopRight(x, y, width) {
    return {
      x: x + width,
      y
    };
  }

  rectangleBottomLeft(x, y, height) {
    return {
      x,
      y: y + height
    };
  }

  rectangleBottomRight(x, y, width, height) {
    return {
      x: x + width,
      y: y + height
    };
  }

  rectangleTopLeftFromRectangleBounds(rectangle) {
    return this.rectangleTopLeft(rectangle.x, rectangle.y);
  }

  rectangleTopRightFromRectangleBounds(rectangle) {
    return this.rectangleTopRight(rectangle.x, rectangle.y, rectangle.width);
  }

  rectangleBottomLeftFromRectangleBounds(rectangle) {
    return this.rectangleBottomLeft(rectangle.x, rectangle.y, rectangle.height);
  }

  rectangleBottomRightFromRectangleBounds(rectangle) {
    return this.rectangleBottomRight(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  }

}
const UtilsMathInstance = new UtilsMath();
;// CONCATENATED MODULE: ./src/GameObjects/GameObject2D.js


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

class GameObject2D {
  constructor(x, y, fillColor, strokeColor) {
    this.id = Math.random();
    this.name = `Obj - ${this.id}`; // Render

    this._x = x; // Get the real position X

    this._y = y; // Get the real position Y

    this.z = 0;
    this.rotation = 0; // Rotation in radians

    this.angle = 0; // Rotation in degrees

    this.scale = {
      x: 1,
      y: 1
    };
    this.lastPosition = {
      x: this._x,
      y: this._y,
      z: this.z
    };
    this.origin = {
      x: 0,
      y: 0
    };
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.strokeWidth = 1;
    this.visible = true;
  }
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


  setName(name) {
    this.name = name;
    return this;
  }
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


  setX(x) {
    this.setPosition(x + (this.width || this.radius) * this.origin.x, this._y, this.z);
    return this;
  }
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


  setY(y) {
    this.setPosition(this._x, y + (this.height || this.radius) * this.origin.y, this.z);
    return this;
  }
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


  setZ(z) {
    this.setPosition(this._x, this._y, z);
    return this;
  }
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


  getPosition() {
    return {
      x: this.x,
      y: this.y,
      z: this.z
    };
  }
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


  getRealPosition() {
    return {
      x: this._x,
      y: this._y,
      z: this.z
    };
  }
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


  setPosition(x, y, z = this.z) {
    this.lastPosition = {
      x: this.x,
      y: this.y,
      z: this.z
    };
    this._x = x;
    this._y = y;
    this.z = z;
    return this;
  }
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


  setRandomPosition(x = 0, y = 0, width = CanvasStateInstance.width, height = CanvasStateInstance.height) {
    this.setPosition(x + Math.random() * width, y + Math.random() * height);
    return this;
  }
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


  setRotation(rotation) {
    this.rotation = rotation;
    this.angle = UtilsMathInstance.radiansToDegrees(rotation);
    return this;
  }
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


  setAngle(angle) {
    this.angle = angle;
    this.rotation = UtilsMathInstance.degreesToRadians(angle);
    return this;
  }
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


  setScaleX(x) {
    this.setScale(x, this.scale.y);
    return this;
  }
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


  setScaleY(y) {
    this.setScale(this.scale.x, y);
    return this;
  }
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


  setScale(x = 0, y = x) {
    this.scale = {
      x,
      y
    };
    return this;
  }
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


  setOriginX(x) {
    this.setOrigin(x, this.origin.y);
    return this;
  }
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


  setOriginY(y) {
    this.setOrigin(this.origin.x, y);
    return this;
  }
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


  setOrigin(x = 0, y = x) {
    this.origin = {
      x,
      y
    };
    return this;
  }
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


  setFillColor(fillColor) {
    this.fillColor = fillColor;
    return this;
  }
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


  setStrokeColor(strokeColor) {
    this.strokeColor = strokeColor;
    return this;
  }
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


  setStrokeWidth(strokeWidth) {
    this.strokeWidth = strokeWidth;
    return this;
  }
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


  setVisible(isVisible) {
    this.visible = isVisible;
    return this;
  }
  /**
   * @description
   * Private (Core) function to render the game object.
   * 
   * @memberof GameObject2D
   * @param {number} deltaTime - The time since the last frame.
   * @private
   */


  _render(deltaTime) {
    if (!this.visible) return;
    CanvasStateInstance.context.save(); // Scale

    CanvasStateInstance.context.translate(this.x, this.y);
    CanvasStateInstance.context.scale(this.scale.x, this.scale.y);
    CanvasStateInstance.context.translate(-this.x, -this.y); // Rotation

    CanvasStateInstance.context.translate(this._x, this._y);
    CanvasStateInstance.context.rotate(this.rotation);
    CanvasStateInstance.context.translate(-this._x, -this._y);
    CanvasStateInstance.context.fillStyle = this.fillColor;
    CanvasStateInstance.context.strokeStyle = this.strokeColor;
    CanvasStateInstance.context.lineWidth = this.strokeWidth;

    this._renderType(deltaTime);

    CanvasStateInstance.context.restore();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Types.js
/**
 * The types of the game objects.
 */
const Types = {
  audioPlay: "AudioPlay",
  circle: "Circle",
  line: "Line",
  polygon: "Polygon",
  rectangle: "Rect",
  sprite: "Sprite",
  text: "Text",
  triangle: "Triangle"
};
/* harmony default export */ const GameObjects_Types = (Types);
;// CONCATENATED MODULE: ./src/GameObjects/AudioPlay/AudioPlay.js



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

class AudioPlay {
  constructor(key, loop = false, paused = false, volume = GlobalStateManagerInstance.volume, muted = false, delay = 0) {
    /**
    * @type {string}
    * @default ""
    * @description The source of the audio file.
    *
    * @memberof AudioPlay
    */
    this.name = key;
    /**
     * @private
     */

    this.audio = AssetsManagerInstance.getAudio(key);
    this.audio.volume = volume;
    this.audio.loop = loop;
    this.audio.muted = muted;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio file should loop.
     * 
     * @memberof AudioPlay
     */

    this.paused = paused;
    /**
     * @type {number}
     * @default 1
     * @description The volume on reproducing the audio file.
     * 
     * @memberof AudioPlay
     */

    this.volume = volume;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be in loop.
     * 
     * @memberof AudioPlay
     */

    this.loop = loop;
    /**
     * @type {boolean}
     * @default false
     * @description If the audio should be muted.
     * 
     * @memberof AudioPlay
     */

    this.muted = muted;
    /**
     * @type {number}
     * @default 0
     * @description The delay of the audio file.
     * 
     * @memberof AudioPlay
     */

    this.delay = delay;
    /**
     * @type {number}
     * @default 0
     * @description The time of the audio file.
     * 
     * @memberof AudioPlay
     */

    this.loopDelay = delay; // TODO: not implemented yet

    /**
     * @description Core properties of the audio file.
     * @private
     */

    this._delayTimer = null;
    /**
     * @description The type of the object.
     * @private
     */

    this._type = GameObjects_Types.audioPlay;
    if (!this.paused) this.play();
  }
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


  play() {
    if (this._delayTimer) clearTimeout(this._delayTimer);
    this.audio.currentTime = 0;
    this.audio.loop = this.loop;

    if (this.delay > 0) {
      this._delayTimer = setTimeout(() => this.audio.play(), this.delay);
    } else this.audio.play();

    return this;
  }
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


  playOnce() {
    if (this._delayTimer) clearTimeout(this._delayTimer);
    this.audio.currentTime = 0;
    this.audio.loop = false;
    this.audio.play();
    return this;
  }
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


  pause() {
    if (this._delayTimer) clearTimeout(this._delayTimer);
    this.paused = true;
    this.audio.pause();
    return this;
  }
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


  resume() {
    if (this._delayTimer) clearTimeout(this._delayTimer);
    this.paused = false;
    this.audio.loop = this.loop;
    this.audio.play();
    return this;
  }
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


  stop() {
    if (this._delayTimer) clearTimeout(this._delayTimer);
    this.audio.pause();
    this.audio.currentTime = 0;
    return this;
  }
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


  setVolume(volume) {
    this.volume = volume;
    this.audio.volume = volume;
    return this;
  }
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


  setLoop(loop) {
    this.loop = loop;
    this.audio.loop = loop;
    return this;
  }
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


  setMuted(muted) {
    this.muted = muted;
    this.audio.muted = muted;
    return this;
  }
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


  setDelay(delay) {
    this.delay = delay;
    return this;
  }
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


  isEnded() {
    return this.audio.ended;
  }
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


  getDuration() {
    return this.audio.duration;
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Circle/Circle.js



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

class Circle extends GameObject2D {
  constructor(x, y, radius = 10, fillColor = "#ffffff", strokeColor = "#000000") {
    super(x, y, fillColor, strokeColor);
    this.radius = radius;
    this._type = GameObjects_Types.circle;
  }
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


  set x(x) {
    this.setX(x);
  }
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


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position of this Circle in the world relative to the origin.
   * @memberof Circle
   */


  get x() {
    return this._x - this.radius * this.origin.x * this.scale.x;
  }
  /**
   * @returns {number} The vertical position of this Circle in the world relative to the origin.
   * @memberof Circle
   */


  get y() {
    return this._y - this.radius * this.origin.y * this.scale.y;
  }
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


  setRadius(radius) {
    this.radius = radius;
    return this;
  }
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


  getTop() {
    return this.y - this.radius;
  }
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


  getBottom() {
    return this.y + this.radius;
  }
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


  getLeft() {
    return this.x - this.radius;
  }
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


  getRight() {
    return this.x + this.radius;
  }
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


  getCenterX() {
    return this.x;
  }
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


  getCenterY() {
    return this.y;
  }
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


  getRealTop() {
    return this._y - this.radius;
  }
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


  getRealBottom() {
    return this._y + this.radius;
  }
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


  getRealLeft() {
    return this._x - this.radius;
  }
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


  getRealRight() {
    return this._x + this.radius;
  }
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


  getRealCenterX() {
    return this._x;
  }
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


  getRealCenterY() {
    return this._y;
  }
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


  getBounds() {
    return {
      x: this.getLeft(),
      y: this.getTop(),
      width: this.radius * 2,
      height: this.radius * 2
    };
  }
  /**
   * @description
   * Private (Core) function to render the position of the Circle.
   * 
   * @memberof Circle
   * @private
   */


  _renderType() {
    CanvasStateInstance.context.beginPath();
    CanvasStateInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    CanvasStateInstance.context.fill();
    CanvasStateInstance.context.stroke();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Line/Line.js



/**
 * @param {number} x - The horizontal position in the world.
 * @param {number} y - The vertical position in the world.
 * @param {number} endX - The horizontal position of the end of the line.
 * @param {number} endY - The vertical position of the end of the line.
 * @param {number | string} [strokeColor=0x000000] - The color of the border, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * Line is a class that will draw a line on the canvas.
 * 
 * @example
 * const myLine = new Impacto.GameObjects.Line(400, 300, 450, 350, 0x00ff00);
 * 
 * @class Line
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors
 */

class Line extends GameObject2D {
  constructor(x, y, endX, endY, strokeColor = "#000000") {
    super(x, y, "none", strokeColor);
    this.endX = endX;
    this.endY = endY;
    this._type = GameObjects_Types.line;
  }
  /**
   * @returns {number} The width of the line.
   * @memberof Line
   */


  get width() {
    return this.endX - this._x;
  }
  /**
   * @returns {number} The height of the line.
   * @memberof Line
   */


  get height() {
    return this.endY - this._y;
  }
  /**
   * @description
   * Sets the X position.
   * 
   * @example
   * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
   * myLine.x = 200;
   * 
   * @param {number} x - The horizontal position in the world.
   * @memberof Line
   */


  set x(x) {
    this.setX(x);
  }
  /**
   * @description
   * Sets the Y position.
   * 
   * @example
   * const myLine = new Impacto.GameObjects.Line(0, 0, 100, 100);
   * myLine.y = 200;
   * 
   * @param {number} y - The vertical position in the world.
   * @memberof Line
   */


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position.
   * @memberof Line
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  }
  /**
   * @returns {number} The vertical position.
   * @memberof Line
   */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  }
  /**
   * @description
   * Returns the top side position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getTop(); // 300
   * 
   * @returns {number} The vertical position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getTop() {
    return this.y;
  }
  /**
   * @description
   * Returns the bottom side position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getBottom(); // 325
   * 
   * @returns {number} The vertical position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getBottom() {
    return this.y + this.height;
  }
  /**
   * @description
   * Returns the left side position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getLeft(); // 400
   * 
   * @returns {number} The horizontal position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getLeft() {
    return this.x;
  }
  /**
   * @description
   * Returns the right side position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRight(); // 450
   * 
   * @returns {number} The horizontal position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getRight() {
    return this.x + this.width;
  }
  /**
   * @description
   * Returns the center X position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterX(); // 425
   * 
   * @returns {number} The horizontal position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getCenterX() {
    return this.x + this.width / 2;
  }
  /**
   * @description
   * Returns the center Y position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getCenterY(); // 325
   * 
   * @returns {number} The vertical position of this Line in the world relative to the origin.
   * @memberof Line
   */


  getCenterY() {
    return this.y + this.height / 2;
  }
  /**
   * @description
   * Returns the real top side position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealTop(); // 300
   * 
   * @returns {number} The vertical position of this Line in the world.
   * @memberof Line
   */


  getRealTop() {
    return this._y;
  }
  /**
   * @description
   * Returns the real bottom side position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealBottom(); // 350
   * 
   * @returns {number} The vertical position of this Line in the world.
   * @memberof Line
   */


  getRealBottom() {
    return this._y + this.height;
  }
  /**
   * @description
   * Returns the real left side position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealLeft(); // 400
   * 
   * @returns {number} The horizontal position of this Line in the world.
   * @memberof Line
   */


  getRealLeft() {
    return this._x;
  }
  /**
   * @description
   * Returns the real right side position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealRight(); // 450
   * 
   * @returns {number} The horizontal position of this Line in the world.
   * @memberof Line
   */


  getRealRight() {
    return this._x + this.width;
  }
  /**
   * @description
   * Returns the real center X position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterX(); // 425
   * 
   * @returns {number} The horizontal position of this Line in the world.
   * @memberof Line
   */


  getRealCenterX() {
    return this._x + this.width / 2;
  }
  /**
   * @description
   * Returns the real center Y position of the Line (not relative to the origin).
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).getRealCenterY(); // 325
   * 
   * @returns {number} The vertical position of this Line in the world.
   * @memberof Line
   */


  getRealCenterY() {
    return this._y + this.height / 2;
  }
  /**
   * @description
   * Sets the end position of the Line based on the width.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setWidth(100);
   * 
   * @param {number} width - The new width.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setWidth(width) {
    this.setSize(width, this.height);
    return this;
  }
  /**
   * @description
   * Sets the end position of the Line based on the height.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setHeight(100);
   * 
   * @param {number} height - The new height.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setHeight(height) {
    this.setSize(this.width, height);
    return this;
  }
  /**
   * @description
   * Sets the end position of the Line based on the size.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setSize(100, 100);
   * 
   * @param {number} width - The new width.
   * @param {number} height - The new height.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setSize(width, height) {
    this.endX = this._x + width;
    this.endY = this._y + height;
    return this;
  }
  /**
   * @description
   * Sets the end horizontal position.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndX(500);
   * 
   * @param {number} endX - The new horizontal position.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setEndX(endX) {
    this.setEnd(endX, this.endY);
    return this;
  }
  /**
   * @description
   * Sets the end vertical position.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setEndY(500);
   * 
   * @param {number} endY - The new vertical position.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setEndY(endY) {
    this.setEnd(this.endX, endY);
    return this;
  }
  /**
   * @description
   * Sets the end position of the Line.
   * 
   * @example
   * new Impacto.GameObjects.Line(400, 300, 450, 350).setEnd(500, 400);
   * 
   * @param {number} endX - The new horizontal position.
   * @param {number} endY - The new vertical position.
   * @returns {Line} This Line.
   * @memberof Line
   */


  setEnd(endX, endY) {
    this.endX = endX;
    this.endY = endY;
    return this;
  }
  /**
   * @description
   * Private (Core) function to render the position.
   * 
   * @private
   * @memberof Line
   */


  _renderType() {
    CanvasStateInstance.context.beginPath();
    CanvasStateInstance.context.moveTo(this.x, this.y);
    CanvasStateInstance.context.lineTo(this.endX, this.endY);
    CanvasStateInstance.context.closePath();
    CanvasStateInstance.context.fill();
    CanvasStateInstance.context.stroke();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Polygon/Polygon.js



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
 * @constructors 
 */

class Polygon extends GameObject2D {
  constructor(x, y, vertices = [], fillColor = "#ffffff", strokeColor = "#000000") {
    super(x, y, fillColor, strokeColor);
    this.vertices = vertices;
    this.close = true;
    this._type = GameObjects_Types.polygon;
  }
  /**
   * Sets the X position of the Polygon.
   * 
   * @param {number} x - The horizontal position of this Polygon in the world.
   * @memberof Polygon
   */


  set x(x) {
    this.setX(x);
  }
  /**
   * Sets the Y position of the Polygon.
   * 
   * @param {number} y - The vertical position of this Polygon in the world.
   * @memberof Polygon
   */


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position of this Polygon in the world relative to the origin.
   * @memberof Polygon
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  } // Get the position X relative to the origin

  /**
   * @returns {number} The vertical position of this Polygon in the world relative to the origin.
   * @memberof Polygon
   */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  } // Get the position Y relative to the origin

  /**
   * @returns {number} The width of this Polygon.
   * @memberof Polygon
   */


  get width() {
    if (this.vertices.length === 0) return 0;
    return Math.max(...this.vertices.map(v => v.x));
  }
  /**
   * @returns {number} The height of this Polygon.
   * @memberof Polygon
   */


  get height() {
    if (this.vertices.length === 0) return 0;
    return Math.max(...this.vertices.map(v => v.y));
  }
  /**
   * Returns the topmost point of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getTop(); // 10
   * 
   * @returns {number} The topmost point of the polygon
   * @memberof Polygon
   */


  getTop() {
    if (this.vertices.length === 0) return 0;
    return Math.min(...this.vertices.map(v => v.y + this.y));
  }
  /**
   * Returns the bottommost point of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBottom(); // 20
   * 
   * @returns {number} The bottommost point of the polygon
   * @memberof Polygon
   */


  getBottom() {
    if (this.vertices.length === 0) return 0;
    return Math.max(...this.vertices.map(v => v.y + this.y));
  }
  /**
   * Returns the leftmost point of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getLeft(); // 10
   * 
   * @returns {number} The leftmost point of the polygon
   * @memberof Polygon
   */


  getLeft() {
    if (this.vertices.length === 0) return 0;
    return Math.min(...this.vertices.map(v => v.x + this.x));
  }
  /**
   * Returns the rightmost point of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getRight(); // 20
   * 
   * @returns {number} The rightmost point of the polygon
   * @memberof Polygon
   */


  getRight() {
    if (this.vertices.length === 0) return 0;
    return Math.max(...this.vertices.map(v => v.x + this.x));
  }
  /**
   * Returns the horizontal center of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterX(); // 15
   * 
   * @returns {number} The horizontal center of the polygon
   * @memberof Polygon
   */


  getCenterX() {
    return this.x + this.width / 2;
  }
  /**
   * Returns the vertical center of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenterY(); // 15
   * 
   * @returns {number} The vertical center of the polygon
   * @memberof Polygon
   */


  getCenterY() {
    return this.y + this.height / 2;
  }
  /**
   * Returns the center of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getCenter(); // {x: 15, y: 15}
   * 
   * @returns {Object} The center of the polygon
   * @memberof Polygon
   */


  getCenter() {
    return {
      x: this.getCenterX(),
      y: this.getCenterY()
    };
  }
  /**
   * Add a new point to the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).addPoint(0, 0);
   * 
   * @param {number} x - The x coordinate of the point
   * @param {number} y - The y coordinate of the point
   * @returns {Polygon} The polygon itself
   * @memberof Polygon
   */


  add(x, y) {
    this.vertices.push({
      x,
      y
    });
    return this;
  }
  /**
   * Remove a point from the polygon based in the coordinates
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint(10, 10);
   * 
   * @param {number} x - The x coordinate of the point
   * @param {number} y - The y coordinate of the point
   * @returns {Polygon} The polygon itself
   * @memberof Polygon
   */


  remove(x, y) {
    const index = this.vertices.findIndex(vertex => vertex.x === x && vertex.y === y);
    if (index !== -1) this.vertices.splice(index, 1);
    return this;
  }
  /**
   * Remove a point from the polygon based in the object
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removePoint({x: 10, y: 10});
   * 
   * @param {Object} point - The point to be removed
   * @returns {Polygon} The polygon itself
   * @memberof Polygon
   */


  removePoint(point) {
    return this.remove(point.x, point.y);
  }
  /**
   * Remove a point from the polygon based in the index
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).removeIndex(0);
   * 
   * @param {number} index - The index of the point
   * @returns {Polygon} The polygon itself
   * @memberof Polygon
   */


  removeIndex(index) {
    if (index !== -1) this.vertices.splice(index, 1);
    return this;
  }
  /**
   * Close the last point to the first point
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).setClose(true);
   * 
   * @param {boolean} close - Whether the polygon should be closed or not
   * @returns {Polygon} The polygon itself
   * @memberof Polygon
   */


  setClose(isClose) {
    this.close = isClose;
    return this;
  }
  /**
   * Returns bounds of the polygon (the most top left and the most bottom right points)
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getBounds(); // {x: 10, y: 10, width: 20, height: 20}
   * 
   * @returns {Object} The bounds of the polygon
   * @memberof Polygon
   */


  getBounds() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }
  /**
   * Returns the vertices of the polygon
   * 
   * @example
   * new Impacto.GameObjects.Polygon(400, 300, [10, 10, 20, 20, 10, 20]).getVertices(); // [{x: 10, y: 10}, {x: 20, y: 20}, {x: 10, y: 20}]
   * 
   * @returns {Object[]} The vertices of the polygon
   * @memberof Polygon
   */


  getVertices() {
    return this.vertices;
  }
  /**
   * Private (Core) function to render.
   * 
   * @memberof Polygon
   * @private
   */


  _renderType() {
    if (this.vertices.length === 0) return;
    CanvasStateInstance.context.translate(this.x, this.y);
    CanvasStateInstance.context.beginPath();
    CanvasStateInstance.context.moveTo(this.vertices[0].x, this.vertices[0].y);

    for (let i = 1; i < this.vertices.length; i++) {
      CanvasStateInstance.context.lineTo(this.vertices[i].x, this.vertices[i].y);
    }

    if (this.close) CanvasStateInstance.context.closePath();
    CanvasStateInstance.context.stroke();
    CanvasStateInstance.context.fill();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Rectangle/Rectangle.js



/**
 * @param {number} x - The horizontal position of this Rectangle in the world.
 * @param {number} y - The vertical position of this Rectangle in the world.
 * @param {number} [width=100] - The width of the rectangle.
 * @param {number} [height=100] - The height of the rectangle.
 * @param {number | string} [fillColor=0xffffff] - The color the rectangle will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the rectangle, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * The Rectangle Shape is a 2D Game Object that can be added to a Scene. 
 * Its possible to set a rounder corner radius.
 * 
 * @example
 * const rect = new Impacto.GameObjects.Rectangle(400, 300, 75, 50, "#ff0000", 0x00ff00);
 * 
 * @class Rectangle
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors
 */

class Rectangle extends GameObject2D {
  constructor(x, y, width = 100, height = 100, fillColor = "#ffffff", strokeColor = "#000000") {
    super(x, y, fillColor, strokeColor);
    this.width = width;
    this.height = height;
    this.setRound(0);
    this._type = GameObjects_Types.rectangle;
  }
  /**
   * @description
   * Sets the X position of the rectangle.
   * 
   * @param {number} x - The horizontal position of this Rectangle in the world.
   * @memberof Rectangle
   */


  set x(x) {
    this.setX(x);
  }
  /**
   * @description
   * Gets the Y position of the rectangle.
   * 
   * @param {number} y - The vertical position of this Rectangle in the world.
   * @memberof Rectangle
   */


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  }
  /**
   * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  }
  /**
   * @description
   * Returns the top side position of the rectangle.
   * 
   * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getTop() {
    return this.y;
  }
  /**
   * @description
   * Returns the bottom side position of the rectangle.
   * 
   * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getBottom() {
    return this.y + this.height;
  }
  /**
   * @description
   * Returns the left side position of the rectangle.
   * 
   * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getLeft() {
    return this.x;
  }
  /**
   * @description
   * Returns the right side position of the rectangle.
   * 
   * 
   * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getRight() {
    return this.x + this.width;
  }
  /**
   * @description
   * Returns the center X position of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterX(); // 27.5
   * 
   * @returns {number} The horizontal position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getCenterX() {
    return this.getLeft() + this.width / 2;
  }
  /**
   * @description
   * Returns the center Y position of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setOrigin(0.5).getCenterY(); // 27.5
   * 
   * @returns {number} The vertical position of this Rectangle in the world relative to the origin.
   * @memberof Rectangle
   */


  getCenterY() {
    return this.getTop() + this.height / 2;
  }
  /**
   * @description
   * Returns the real top side position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealTop(); // 10
   * 
   * @returns {number} The real vertical position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealTop() {
    return this._y;
  }
  /**
   * @description
   * Returns the real bottom side position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealBottom(); // 110
   * 
   * @returns {number} The real vertical position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealBottom() {
    return this._y + this.height;
  }
  /**
   * @description
   * Returns the real left side position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealLeft(); // 10
   * 
   * @returns {number} The real horizontal position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealLeft() {
    return this._x;
  }
  /**
   * @description
   * Returns the real right side position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealRight(); // 110
   * 
   * @returns {number} The real horizontal position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealRight() {
    return this._x + this.width;
  }
  /**
   * @description
   * Returns the real center X position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterX(); // 55
   * 
   * @returns {number} The real horizontal position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealCenterX() {
    return this.getRealLeft() + this.width / 2;
  }
  /**
   * @description
   * Returns the real center Y position of the rectangle. (Not relative to the origin)
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).getRealCenterY(); // 55
   * 
   * @returns {number} The real vertical position of this Rectangle in the world.
   * @memberof Rectangle
   */


  getRealCenterY() {
    return this.getRealTop() + this.height / 2;
  }
  /**
   * @description
   * Sets the width of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setWidth(200);
   * 
   * @param {number} width - The new width of this Rectangle.
   * @returns {Rectangle} This Rectangle.
   * @memberof Rectangle
   */


  setWidth(width) {
    this.setSize(width, this.height);
    return this;
  }
  /**
   * @description
   * Sets the height of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setHeight(200);
   * 
   * @param {number} height - The new height of this Rectangle.
   * @returns {Rectangle} This Rectangle.
   * @memberof Rectangle
   */


  setHeight(height) {
    this.setSize(this.width, height);
    return this;
  }
  /**
   * @description
   * Sets the size of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setSize(50, 50);
   * 
   * @param {number} width - The new width of this Rectangle.
   * @param {number} height - The new height of this Rectangle.
   * @returns {Rectangle} This Rectangle.
   * @memberof Rectangle
   */


  setSize(width, height = width, force = false) {
    if (this.bodyType === "S" && !force) return;
    this.width = width;
    this.height = height;
    return this;
  }
  /**
   * @description
   * Sets the position  and size of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10, 100, 100).setPositionAndSize(20, 30, 50, 75);
   * 
   * @param {number} x - The new horizontal position of this Rectangle.
   * @param {number} y - The new vertical position of this Rectangle.
   * @param {number} width - The new width of this Rectangle.
   * @param {number} height - The new height of this Rectangle.
   * @returns {Rectangle} This Rectangle.
   * @memberof Rectangle
   */


  refresh(x, y, width, height) {
    this.setPosition(x, y, this.z, true);
    this.setSize(width, height, true);
    return this;
  }
  /**
   * @description
   * Sets the roundedness of the rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(10, 10).setRoundedness(10);
   * 
   * @param {number} topLeft - The new roundedness of the top left corner.
   * @param {number} topRight - The new roundedness of the top right corner.
   * @param {number} bottomLeft - The new roundedness of the bottom left corner.
   * @param {number} bottomRight - The new roundedness of the bottom right corner.
   * @returns {Rectangle} This Rectangle.
   * @memberof Rectangle
   */


  setRound(topLeft = 0, topRight = topLeft, bottomLeft = topLeft, bottomRight = topLeft) {
    if (typeof topLeft === "number") {
      this.round = {
        topLeft: topLeft,
        topRight: topRight,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight
      };
    } else if (typeof topLeft === "object") {
      this.round = {
        topLeft: topLeft.topLeft || 0,
        topRight: topLeft.topRight || 0,
        bottomLeft: topLeft.bottomLeft || 0,
        bottomRight: topLeft.bottomRight || 0
      };
    }

    return this;
  }
  /**
   * @description
   * Gets the bounding box of this Rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(0, 0).getBoundingBox(); // { x: 0, y: 0, width: 100, height: 100 }
   * 
   * @returns {Object} The bounding box of this Rectangle.
   * @memberof Rectangle
   */


  getBounds() {
    return {
      x: this.getLeft(),
      y: this.getTop(),
      width: this.width,
      height: this.height
    };
  }
  /**
   * @description
   * Gets the area of this Rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getArea(); // 10000
   * 
   * @returns {number} The area of this Rectangle.
   * @memberof Rectangle
   * @readonly
   */


  getArea() {
    return this.width * this.height;
  }
  /**
   * @description
   * Gets the perimeter of this Rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getPerimeter(); // 200
   * 
   * @returns {number} The perimeter of this Rectangle.
   * @memberof Rectangle
   * @readonly
   */


  getPerimeter() {
    return 2 * (this.width + this.height);
  }
  /**
   * @description
   * Gets the point of all vertices of this Rectangle.
   * 
   * @example
   * new Impacto.GameObjects.Rectangle(0, 0, 100, 100).getVertices(); // [{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 100 }, { x: 0, y: 100 }]
   * 
   * @returns {Array} All vertices of this Rectangle.
   * @memberof Rectangle
   * @readonly
   */


  getVertices() {
    return [{
      x: this.x,
      y: this.y
    }, {
      x: this.x + this.width,
      y: this.y
    }, {
      x: this.x + this.width,
      y: this.y + this.height
    }, {
      x: this.x,
      y: this.y + this.height
    }];
  }
  /**
   * @description
   * Private (Core) function to render the position of the rectangle.
   * 
   * @private
   * @readonly
   * @memberof Rectangle
   */


  _renderType() {
    // Ref: https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas
    CanvasStateInstance.context.beginPath();
    CanvasStateInstance.context.moveTo(this.x + this.round.topLeft, this.y);
    CanvasStateInstance.context.lineTo(this.x + this.width - this.round.topRight, this.y);
    CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y, this.x + this.width, this.y + this.round.topRight);
    CanvasStateInstance.context.lineTo(this.x + this.width, this.y + this.height - this.round.bottomRight);
    CanvasStateInstance.context.quadraticCurveTo(this.x + this.width, this.y + this.height, this.x + this.width - this.round.bottomRight, this.y + this.height);
    CanvasStateInstance.context.lineTo(this.x + this.round.bottomLeft, this.y + this.height);
    CanvasStateInstance.context.quadraticCurveTo(this.x, this.y + this.height, this.x, this.y + this.height - this.round.bottomLeft);
    CanvasStateInstance.context.lineTo(this.x, this.y + this.round.topLeft);
    CanvasStateInstance.context.quadraticCurveTo(this.x, this.y, this.x + this.round.topLeft, this.y);
    CanvasStateInstance.context.fill();
    CanvasStateInstance.context.stroke();
    CanvasStateInstance.context.closePath();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Sprite/Animation.js
/**
 * @param {Impacto.GameObjects.Sprite} parent - The parent Sprite.
 * @param {string} name - The name of the Animations.
 * @param {number} startFrame - The first frame of the Animations.
 * @param {number} numberOfFrames - Number of frames of the Animations.
 * @param {number} speed - The speed of the Animations.
 * @param {boolean} [loop=true] - Whether the Animations should loop or not.
 * 
 * @classdesc
 * A class to animate a sprite
 * 
 * @example
 * new Animation(MySprite, "Default", 0, 10, 100, true);
 * 
 * @class Animation
 * @constructor
 */
class Animation {
  constructor(parent, name, startFrame, numberOfFrames, speed, loop = true) {
    this._parent = parent;
    this.name = name;
    this.startFrame = startFrame;
    this.numberOfFrames = numberOfFrames;
    this.speed = speed;
    this.loop = loop;
    this.reversed = false; // TODO: Not Working

    this.yoyo = false; // TODO: Not Working

    this._currentFrame = 0;
    this._currentTime = 0;
  }
  /**
   * Change the current animation name
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setName("MyNewName");
   * 
   * @param {string} newName - The 
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  setName(newName) {
    this.name = newName;
    return this;
  }
  /**
   * Change the speed of a animation
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setSpeed(50);
   * 
   * @param {string} name - The name of the Animation.
   * @param {number} speed - The new speed of the Animation.
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  setSpeed(speed) {
    this.speed = speed;
    return this;
  }
  /**
   * Change the start frame of a animation
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setStartFrame(5);
   * 
   * @param {number} startFrame - The new start frame of the Animation.
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  setStartFrame(startFrame) {
    this.startFrame = startFrame;
    return this;
  }
  /**
   * Change the number of frames of a animation
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).setNumberOfFrames(5);
   * 
   * @param {number} numberOfFrames - The new number of frames of the Animation.
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  setNumberOfFrames(numberOfFrames) {
    this.numberOfFrames = numberOfFrames;
    return this;
  }
  /**
   * Change the loop of a animation
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100, true).setLoop(false);
   * 
   * @param {boolean} loop - The new loop of the Animation.
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  setLoop(loop) {
    this.loop = loop;
    return this;
  }
  /**
   * Reset the animation to the first frame
   * 
   * @example
   * const myAnimation = new Animation(MySprite, "MyAnimation" , 0, 10, 100).reset();
   * 
   * @returns {Animation} The animation state
   * @memberof Animation
   */


  reset() {
    this._currentFrame = 0;
    this._currentTime = 0;
    return this;
  }
  /**
   * Private (Core) function to update the animation.
   * 
   * @private
   * @memberof Animation
   */


  _update(deltaTime) {
    this._currentTime += deltaTime * 100;

    if (this._currentTime >= this.speed) {
      this._currentTime -= this.speed;
      this._currentFrame++;

      if (this._currentFrame >= this.numberOfFrames) {
        if (this.loop) this._currentFrame = 0;else {
          this._currentFrame = this.numberOfFrames - 1;

          this._parent.animations.pause();
        }
      }
    }

    this._parent.setFrame(this.startFrame + this._currentFrame);
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Sprite/Animations.js

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

class Animations {
  constructor(parent) {
    this._parent = parent;
    this.animations = {};
    this.currentAnimation = null;
    this.paused = true;
  }
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


  get(name) {
    return this.animations[name];
  }
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


  add(name, numberOfFrames, startFrame = 0, speed = 100, loop = true) {
    this.animations[name] = new Animation(this._parent, name, startFrame, numberOfFrames, speed, loop);
    return this.get(name);
  }
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


  getAnimationsNames() {
    return Object.keys(this.animations);
  }
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


  reset(name) {
    this.animations[name].reset();
    return this.get(this.currentAnimation);
  }
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


  play(name) {
    if (this.currentAnimation) this.currentAnimation.reset();
    this.currentAnimation = this.animations[name];
    this.resume();
    return this.get(this.currentAnimation);
  }
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


  pause() {
    this.paused = true;
    return this.get(this.currentAnimation);
  }
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


  resume() {
    this.paused = false;
    return this.get(this.currentAnimation);
  }
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


  setName(oldName, newName) {
    return this.animations[oldName].setName(newName);
  }
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


  setSpeed(name, speed) {
    return this.animations[name].setSpeed(speed);
  }
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


  setNumberOfFrames(name, numberOfFrames) {
    return this.animations[name].setNumberOfFrames(numberOfFrames);
  }
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


  setLoop(name, loop) {
    return this.animations[name].setLoop(loop);
  }
  /**
   * Private (Core) function to update the animation.
   * 
   * @private
   * @memberof Animations
   */


  _update(deltaTime) {
    if (this.paused) return;
    if (this.currentAnimation) this.currentAnimation._update(deltaTime);
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Sprite/Sprite.js





/**
 * @param {number} x - The horizontal position of this Sprite in the world.
 * @param {number} y - The vertical position of this Sprite in the world.
 * @param {string} key - The name of the Sprite.
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
 * @extends Impacto.GameObjects.Rectangle
 * @constructors
 */

class Sprite extends Rectangle {
  constructor(x, y, key, frame = 0, width = 0, height = 0) {
    super(x, y, "#ffffff", "#000000");
    this.texture = AssetsManagerInstance.getSprite(key);
    this.frame = frame;
    this.width = width || AssetsManagerInstance.getSpriteSize(key).width;
    this.height = height || AssetsManagerInstance.getSpriteSize(key).height;
    this.animations = new Animations(this);
    this._type = GameObjects_Types.sprite;
  }
  /**
  * Sets the X position of the Sprite.
  * 
  * @param {number} x - The horizontal position of this Sprite in the world.
  * @memberof Sprite
  */


  set x(x) {
    this.setX(x);
  }
  /**
  * Sets the Y position of the Sprite.
  * 
  * @param {number} y - The vertical position of this Sprite in the world.
  * @memberof Sprite
  */


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position of this Sprite in the world relative to the origin.
   * @memberof Sprite
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  }
  /**
  * @returns {number} The vertical position of this Sprite in the world relative to the origin.
  * @memberof Sprite
  */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  }
  /**
   * Change the frame of this Sprite.
   * 
   * @example
   * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).setFrame(1);
   * 
   * @param {number} frame - The frame of the Sprite.
   * @returns {Sprite} The Sprite itself.
   * @memberof Sprite
   */


  setFrame(frame) {
    this.frame = frame;
    return this;
  }
  /**
   * Returns the number of frames of this Sprite based on the width.
   * 
   * @example
   * new Impacto.GameObjects.Sprite(400, 300, "MySprite", 0, 32, 32).getNumFramesByWidth(); // 8
   * 
   * @returns {number} The number of frames by width.
   * @memberof Sprite
   */


  getNumFramesByWidth() {
    return Math.floor(this.texture.width / this.width);
  }
  /**
   * @description
   * Private (Core) function to render the position of the Sprite.
   * 
   * @private
   * @memberof Sprite
   */


  _renderType(deltaTime) {
    this.animations._update(deltaTime);

    CanvasStateInstance.context.drawImage(this.texture, // Image
    this.frame * this.width, 0, // Source X, Source Y
    this.width, this.height, // Source Width, Source Height
    this.x, this.y, // Destination X, Destination Y
    this.width, this.height // Destination Width, Destination Height
    );
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Text/Text.js



/**
 * @param {number} x - The horizontal position of this Text in the world.
 * @param {number} y - The vertical position of this Text in the world.
 * @param {number} Text - The text will be drawn on the canvas.
 * @param {number | string} [fillColor=0xffffff] - The color the Text will be filled with, i.e. 0xff0000 for red.
 * @param {number | string} [strokeColor=0x000000] - The color of the border of the Text, i.e. 0x00ff00 for green.
 * 
 * @classdesc
 * This class will draw a text on the canvas.
 * 
 * @example
 * const myText = new Impacto.GameObjects.Text(400, 300, "Hello World", "#ff0000", 0x00ff00);
 * 
 * @class Text
 * @extends Impacto.GameObjects.GameObject2D
 * @constructors 
 */

class Text extends GameObject2D {
  constructor(x, y, text = "", fillColor = "#000000", strokeColor = "#ffffff") {
    super(x, y, fillColor, strokeColor);
    this.text = text;
    this.fontSize = 30;
    this.fontFamily = "Arial"; // Arial, Verdana, Times New Roman, Courier New, serif, sans-serif, etc...

    this.fontStyle = "normal"; // normal, italic, oblique

    this.fontVariant = "normal"; // normal, small-caps

    this.fontWeight = "normal"; // normal (400), bold (700), bolder (900), lighter (100), 100, 200, 300, 400, 500, 600, 700, 800, 900

    this.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
    this.alignVertical = "top"; // top, middle, bottom // textBaseline

    this.alignHorizontal = "left"; // left, center, right // textAlign

    this.direction = "inherit"; // ltr, rtl, inherit

    this.setStrokeWidth(0);
    this._type = GameObjects_Types.text;
  }
  /**
   * Returns the width of the text.
   * 
   * @returns {number} The width of the text.
   * @memberof Text
   */


  get width() {
    if (this.text === "") return 0;
    return CanvasStateInstance.context.measureText(this.text, this.font).width;
  }
  /**
   * Returns the height of the text.
   * 
   * @returns {number} The height of the text.
   * @memberof Text
   */


  get height() {
    if (this.text === "") return 0;
    return this.fontSize;
  }
  /**
   * Sets the horizontal position of the text.
   * 
   * @param {string} align - The horizontal position of the text.
   * @memberof Text
   */


  set x(x) {
    this.setX(x);
  }
  /**
   * Sets the vertical position of the text.
   * 
   * @param {string} align - The vertical position of the text.
   * @memberof Text
   */


  set y(y) {
    this.setY(y);
  }
  /**
   * Returns the horizontal position of the text.
   * 
   * @returns {number} The horizontal position of the text.
   * @memberof Text
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  }
  /**
   * Returns the vertical position of the text.
   * 
   * @returns {number} The vertical position of the text.
   * @memberof Text
   */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  }
  /**
   * @description
   * Returns the top side position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getTop(); // 300
   * 
   * @returns {number} The top side position of the text.
   * @memberof Text
   */


  getTop() {
    return this.y;
  }
  /**
   * @description
   * Returns the bottom side position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getBottom(); // 300
   * 
   * @returns {number} The bottom side position of the text.
   * @memberof Text
   */


  getBottom() {
    return this.y + this.height;
  }
  /**
   * @description
   * Returns the left side position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getLeft(); // 400
   * 
   * @returns {number} The left side position of the text.
   * @memberof Text
   */


  getLeft() {
    return this.x;
  }
  /**
   * @description
   * Returns the right side position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRight(); // 400
   * 
   * @returns {number} The right side position of the text.
   * @memberof Text
   */


  getRight() {
    return this.x + this.width;
  }
  /**
   * @description
   * Returns the horizontal center position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterX(); // 400
   * 
   * @returns {number} The horizontal center position of the text.
   * @memberof Text
   */


  getCenterX() {
    return this.x + this.width / 2;
  }
  /**
   * @description
   * Returns the vertical center position of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterY(); // 300
   * 
   * @returns {number} The vertical center position of the text.
   * @memberof Text
   */


  getCenterY() {
    return this.y + this.height / 2;
  }
  /**
   * @description
   * Returns the real top side position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealTop(); // 300
   * 
   * @returns {number} The real top side position of the text.
   * @memberof Text
   */


  getRealTop() {
    return this._y;
  }
  /**
   * @description
   * Returns the real bottom side position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealBottom(); // 300
   * 
   * @returns {number} The real bottom side position of the text.
   * @memberof Text
   */


  getRealBottom() {
    return this._y + this.height;
  }
  /**
   * @description
   * Returns the real left side position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealLeft(); // 400
   * 
   * @returns {number} The real left side position of the text.
   * @memberof Text
   */


  getRealLeft() {
    return this._x;
  }
  /**
   * @description
   * Returns the real right side position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealRight(); // 400
   * 
   * @returns {number} The real right side position of the text.
   * @memberof Text
   */


  getRealRight() {
    return this._x + this.width;
  }
  /**
   * @description
   * Returns the real horizontal center position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterX(); // 400
   * 
   * @returns {number} The real horizontal center position of the text.
   * @memberof Text
   */


  getRealCenterX() {
    return this._x + this.width / 2;
  }
  /**
   * @description
   * Returns the real vertical center position of the text. (The position of the text without the offset)
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterY(); // 300
   * 
   * @returns {number} The real vertical center position of the text.
   * @memberof Text
   */


  getRealCenterY() {
    return this._y + this.height / 2;
  }
  /**
   * @description
   * Returns all words of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getWords(); // ["Hello", "World"]
   * 
   * @returns {string[]} All words of the text.
   * @memberof Text
   */


  getWords() {
    return this.text.split(" ");
  }
  /**
   * @description
   * Returns the number of words of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getWordsCount(); // 2
   * 
   * @returns {number} The number of words of the text.
   * @memberof Text
   */


  getWordsNumber() {
    return this.getWords().length;
  }
  /**
   * @description
   * Returns all characters of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getCharacters(); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
   * 
   * @returns {string[]} All characters of the text.
   * @memberof Text
   */


  getCharacters() {
    return this.text.split("");
  }
  /**
   * @description
   * Returns the number of characters of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").getCharactersCount(); // 11
   * 
   * @returns {number} The number of characters of the text.
   * @memberof Text
   */


  getCharactersNumber() {
    return this.getCharacters().length;
  }
  /**
   * @description
   * Change the display text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setText("MyText");
   * 
   * @param {string} text The new text.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setText(text) {
    this.text = text;
    return this;
  }
  /**
   * @description
   * Change the font size.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontSize(20);
   * 
   * @param {number} size The new font size.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFontSize(size) {
    this.setFont({
      size
    });
    return this;
  }
  /**
   * @description
   * Change the font family.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontFamily("Arial");
   * 
   * @param {string} family The new font family.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFontFamily(family) {
    this.setFont({
      family
    });
    return this;
  }
  /**
   * @description
   * Change the font style.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontStyle("italic");
   * 
   * @param {string} style The new font style.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFontStyle(style) {
    this.setFont({
      style
    });
    return this;
  }
  /**
   * @description
   * Change the font variant.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontVariant("small-caps");
   * 
   * @param {string} variant The new font variant.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFontVariant(variant) {
    this.setFont({
      variant
    });
    return this;
  }
  /**
   * @description
   * Change the font weight.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontWeight("bold");
   * 
   * @param {string} weight The new font weight.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFontWeight(weight) {
    this.setFont({
      weight
    });
    return this;
  }
  /**
   * @description
   * Change the font.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setFont({
   * 	size: 20,
   * 	family: "Arial",
   * 	style: "italic",
   * 	variant: "small-caps",
   * 	weight: "bold"
   * });
   * 
   * @param {object} font The new properties of the font.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setFont(options) {
    // { size, family, style, variant, weight }
    this.fontSize = options.size || this.fontSize;
    this.fontFamily = options.family || this.fontFamily;
    this.fontStyle = options.style || this.fontStyle;
    this.fontVariant = options.variant || this.fontVariant;
    this.fontWeight = options.weight || this.fontWeight;
    this.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
    return this;
  }
  /**
   * @description
   * Change the vertical text alignment.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setVerticalAlignment("top");
   * 
   * @param {string} align The new text alignment.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setAlignVertical(align) {
    this.alignVertical = align;
    return this;
  }
  /**
   * @description
   * Change the horizontal text alignment.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setHorizontalAlignment("left");
   * 
   * @param {string} align The new text alignment.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setAlignHorizontal(align) {
    this.alignHorizontal = align;
    return this;
  }
  /**
   * @description
   * Change the direction of the text.
   * 
   * @example
   * new Impacto.GameObjects.Text(400, 300, "Hello World").setDirection("rtl");
   * 
   * @param {string} direction The new text direction.
   * @returns {Text} The text object.
   * @memberof Text
   */


  setDirection(direction) {
    this.direction = direction;
    return this;
  }
  /**
   * @description
   * Private (Core) function to render the position of the text.
   * 
   * @private
   * @memberof Text
   */


  _renderType() {
    CanvasStateInstance.context.textBaseline = this.alignVertical;
    CanvasStateInstance.context.textAlign = this.alignHorizontal;
    CanvasStateInstance.context.direction = this.direction;
    CanvasStateInstance.context.font = this.font;
    CanvasStateInstance.context.fillText(this.text, this.x, this.y);
    CanvasStateInstance.context.strokeText(this.text, this.x, this.y);
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/Triangle/Triangle.js



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
 * @constructors 
 */

class Triangle extends GameObject2D {
  constructor(x, y, width, height, fillColor = "#ffffff", strokeColor = "#000000") {
    super(x, y, fillColor, strokeColor);
    this.width = width;
    this.height = height;
    this._type = GameObjects_Types.triangle;
  }
  /**
   * Sets the X position of the Triangle.
   * 
   * @param {number} x - The horizontal position of this Triangle in the world.
   * @memberof Triangle
   */


  set x(x) {
    this.setX(x);
  }
  /**
   * Sets the Y position of the Triangle.
   * 
   * @param {number} y - The vertical position of this Triangle in the world.
   * @memberof Triangle
   */


  set y(y) {
    this.setY(y);
  }
  /**
   * @returns {number} The horizontal position of this Triangle in the world relative to the origin.
   * @memberof Triangle
   */


  get x() {
    return this._x - this.width * this.origin.x * this.scale.x;
  }
  /**
   * @returns {number} The vertical position of this Triangle in the world relative to the origin.
   * @memberof Triangle
   */


  get y() {
    return this._y - this.height * this.origin.y * this.scale.y;
  }
  /**
   * Returns the top side position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getTop(); // 300
   * 
   * @returns {number} The topmost point of the triangle
   * @memberof Triangle
   */


  getTop() {
    return this.y;
  }
  /**
   * Returns the bottom side position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getBottom(); // 400
   * 
   * @returns {number} The bottommost point of the triangle
   * @memberof Triangle
   */


  getBottom() {
    return this.y + this.height;
  }
  /**
   * Returns the left side position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getLeft(); // 400
   * 
   * @returns {number} The leftmost point of the triangle
   * @memberof Triangle
   */


  getLeft() {
    return this.x;
  }
  /**
   * Returns the right side position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRight(); // 500
   * 
   * @returns {number} The rightmost point of the triangle
   * @memberof Triangle
   */


  getRight() {
    return this.x + this.width;
  }
  /**
   * Returns the center X position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterX(); // 450
   * 
   * @returns {number} The width of the triangle
   * @memberof Triangle
   */


  getCenterX() {
    return this.x + this.width / 2;
  }
  /**
   * Returns the center Y position of the triangle, based in the origin.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getCenterY(); // 450
   * 
   * @returns {number} The height of the triangle
   * @memberof Triangle
   */


  getCenterY() {
    return this.y + this.height / 2;
  }
  /**
   * Returns the real top position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealTop(); // 300
   * 
   * @returns {number} The real top position of the triangle in the world
   * @memberof Triangle
   */


  getRealTop() {
    return this._y;
  }
  /**
   * Returns the real bottom position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealBottom(); // 400
   * 
   * @returns {number} The real bottom position of the triangle in the world
   * @memberof Triangle
   */


  getRealBottom() {
    return this._y + this.height;
  }
  /**
   * Returns the real left position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealLeft(); // 400
   * 
   * @returns {number} The real left position of the triangle in the world
   * @memberof Triangle
   */


  getRealLeft() {
    return this._x;
  }
  /**
   * Returns the real right position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealRight(); // 400
   * 
   * @returns {number} The real right position of the triangle in the world
   * @memberof Triangle
   */


  getRealRight() {
    return this._x + this.width;
  }
  /**
   * Returns the real center x position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterX(); // 450
   * 
   * @returns {number} The real center position of the triangle in the world
   * @memberof Triangle
   */


  getRealCenterX() {
    return this._x + this.width / 2;
  }
  /**
   * Returns the real center y position of the triangle in the world.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getRealCenterY(); // 450
   * 
   * @returns {number} The real center position of the triangle in the world
   * @memberof Triangle
   */


  getRealCenterY() {
    return this._y + this.height / 2;
  }
  /**
   * Change the width of the triangle.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setWidth(200); // 200
   * 
   * @param {number} width - The new width of the triangle.
   * @returns {Triangle} The triangle itself.
   * @memberof Triangle
   */


  setWidth(width) {
    this.setSize(width, this.height);
    return this;
  }
  /**
   * Change the height of the triangle.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).setHeight(200); // 200
   * 
   * @param {number} height - The new height of the triangle.
   * @returns {Triangle} The triangle itself.
   * @memberof Triangle
   */


  setHeight(height) {
    this.setSize(this.width, height);
    return this;
  }
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
   * @returns {Triangle} The triangle itself.
   * @memberof Triangle
   */


  setSize(width, height = width) {
    this.width = width;
    this.height = height;
    return this;
  }
  /**
   * Calculate the area of the triangle.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getArea(); // 5000
   * 
   * @returns {number} The area of the triangle.
   * @memberof Triangle
   */


  getArea() {
    return this.width * this.height / 2;
  }
  /**
   * Calculate the perimeter of the triangle.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getPerimeter(); // 300
   * 
   * @returns {number} The perimeter of the triangle.
   * @memberof Triangle
   */


  getPerimeter() {
    return this.width * 3;
  }
  /**
   * Returns the triangle's vertices.
   * 
   * @example
   * new Impacto.GameObjects.Triangle(400, 300, 100, 100).getVertices(); // [
   *  {"x": 100,"y": 100},
   *  {"x": 200,"y": 100},
   *  {"x": 150,"y": 200}]
   * 
   * @returns {Object[]} The triangle's vertices.
   * @memberof Triangle
   */


  getVertices() {
    return [{
      x: this.x,
      y: this.y
    }, {
      x: this.x + this.width,
      y: this.y
    }, {
      x: this.x + this.width / 2,
      y: this.y + this.height
    }];
  }
  /**
   * Private (Core) function to render.
   * 
   * @memberof Polygon
   * @private
   */


  _renderType() {
    CanvasStateInstance.context.beginPath();
    CanvasStateInstance.context.moveTo(this.x, this.y);
    CanvasStateInstance.context.lineTo(this.x + this.width, this.y);
    CanvasStateInstance.context.lineTo(this.x + this.width / 2, this.y + this.height);
    CanvasStateInstance.context.closePath();
    CanvasStateInstance.context.fill();
    CanvasStateInstance.context.stroke();
  }

}
;// CONCATENATED MODULE: ./src/GameObjects/GameObjects.js










/**
 * @namespace Impacto.GameObjects
 * 
 * @property {Impacto.GameObjects.GameObjectBase} GameObjectBase
 * 
 * @property {Impacto.GameObjects.AudioPlay} AudioPlay
 * @property {Impacto.GameObjects.Circle} Circle
 * @property {Impacto.GameObjects.Line} Line
 * @property {Impacto.GameObjects.Polygon} Polygon
 * @property {Impacto.GameObjects.Rectangle} Rectangle
 * @property {Impacto.GameObjects.Sprite} Sprite
 * @property {Impacto.GameObjects.Text} Text
 * @property {Impacto.GameObjects.Triangle} Triangle
 * 
 * @property {Impacto.GameObjects.Types} Types
 */

class GameObjects {
  constructor() {
    this.GameObjectBase = GameObject2D;
    this.AudioPlay = AudioPlay;
    this.Circle = Circle;
    this.Line = Line;
    this.Polygon = Polygon;
    this.Rectangle = Rectangle;
    this.Sprite = Sprite;
    this.Text = Text;
    this.Triangle = Triangle;
    this.Types = GameObjects_Types;
  }

}
const GameObjectsInstance = new GameObjects();
;// CONCATENATED MODULE: ./src/Inputs/Keys.js
/**
 * Keys code for the keyboard
 */
/* harmony default export */ const Keys = ({
  enter: 13,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  num0: 48,
  num1: 49,
  num2: 50,
  num3: 51,
  num4: 52,
  num5: 53,
  num6: 54,
  num7: 55,
  num8: 56,
  num9: 57,
  q: 81,
  w: 87,
  e: 69,
  r: 82,
  t: 84,
  y: 89,
  u: 85,
  i: 73,
  o: 79,
  p: 80,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  g: 71,
  h: 72,
  j: 74,
  k: 75,
  l: 76,
  z: 90,
  x: 88,
  c: 67,
  v: 86,
  b: 66,
  n: 78,
  m: 77
});
;// CONCATENATED MODULE: ./src/Inputs/Keyboard.js

/**
 * @classdesc
 * Manages the keyboard input.
 * 
 * @example
 * const { left } = Impacto.Inputs.KeyBoard.keys;
 * if (Impacto.Inputs.KeyBoard.isKeyPressed(left)) { console.log("Left"); }
 * 
 * @class KeyboardManager
 * @constructors
 */

class KeyboardManager {
  constructor() {
    this.keys = Keys;
    this.isPressed = {};
    window.addEventListener("keydown", this._keyDown.bind(this));
    window.addEventListener("keypress", this._keyPress.bind(this));
    window.addEventListener("keyup", this._keyUp.bind(this));
  }
  /**
   * Returns the name of the key by its keyCode.
   * 
   * @example
   * const { left } = Impacto.Inputs.KeyboardManager.keys;
   * console.log(Impacto.Inputs.KeyboardManager.getNameByKeyCode(left)); // left
   * 
   * @param {number} keyCode - The key code of the key.
   * @returns {string} The name of the key.
   * @memberof KeyboardManager
   */


  getNameByKeyCode(keyCode) {
    return Object.keys(this.keys).find(key => this.keys[key] === keyCode);
  }
  /**
   * Returns the key code of the key by its name.
   * 
   * @example
   * console.log(Impacto.Inputs.KeyboardManager.getKeyCodeByName("left")); // 37
   * 
   * @param {string} name - The name of the key.
   * @returns {number} The key code of the key.
   * @memberof KeyboardManager
   */


  getKeyCodeByName(name) {
    return this.keys[name];
  }
  /**
   * Returns true if the key is pressed.
   * 
   * @example
   * const { left } = Impacto.Inputs.KeyboardManager.keys;
   * Impacto.Inputs.KeyboardManager.isKeyPressed(left); // false
   * 
   * @param {number| string} key - The key code or name of the key.
   * @returns {boolean} True if the key is pressed.
   * @memberof KeyboardManager
   */


  isKeyPressed(key) {
    if (typeof key === "string") return this.isKeyPressedName(key);else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
  }
  /**
   * Returns true if the key is pressed by its name.
   * 
   * @example
   * Impacto.Inputs.KeyboardManager.isKeyPressedName("left"); // true
   * 
   * @param {string} name - The name of the key.
   * @returns {boolean} True if the key is pressed.
   * @memberof KeyboardManager
   */


  isKeyPressedName(name) {
    return !!this.isPressed[name];
  }
  /**
   * Returns true if the key is pressed by its key code.
   * 
   * @example
   * Impacto.Inputs.KeyboardManager.isKeyPressedKeyCode(37); // true
   * 
   * @param {number} keyCode - The key code of the key.
   * @returns {boolean} True if the key is pressed.
   * @memberof KeyboardManager
   */


  isKeyPressedKeyCode(keyCode) {
    return !!this.isPressed[this.getNameByKeyCode(keyCode)];
  } // ---- Private

  /**
   * @description
   * Private (Core) function to handle the key down event.
   * 
   * @memberof KeyboardManager
   * @private
   */


  _keyDown(e) {
    this.isPressed[this.getNameByKeyCode(e.keyCode)] = true;
  }
  /**
   * @description
   * Private (Core) function to handle the key press event.
   * 
   * @memberof KeyboardManager
   * @private
   */


  _keyPress(e) {// console.log("keypress", e.keyCode);
  }
  /**
   * @description
   * Private (Core) function to handle the key up event.
   * 
   * @memberof KeyboardManager
   * @private
   */


  _keyUp(e) {
    this.isPressed[this.getNameByKeyCode(e.keyCode)] = false;
  }

}
const KeyboardManagerInstance = new KeyboardManager();
;// CONCATENATED MODULE: ./src/Inputs/Mouse.js

/**
 * @classdesc
 * Manages the mouse input.
 * 
 * @example
 * const { x, y } = Impacto.Inputs.Mouse;
 * 
 * @class MouseManager
 * @constructors
 */

class MouseManager {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.windowX = 0;
    this.windowY = 0;
    this.buttons = {
      left: 0,
      middle: 1,
      right: 2
    };
    this.isDown = {};
    window.addEventListener("mousemove", this._mousemove.bind(this));
    window.addEventListener("mousedown", this._mousedown.bind(this));
    window.addEventListener("mouseup", this._mouseup.bind(this));
    window.addEventListener("contextmenu", e => e.preventDefault()); // Right click show options
  }
  /**
   * @description
   * Returns the mouse position relative to the canvas.
   * 
   * @example
   * const { x, y } = Impacto.Inputs.Mouse.getPosition();
   * 
   * @returns {Object} The current mouse position {x, y}
   * @memberof MouseManager
   */


  getPosition() {
    return {
      x: this.x,
      y: this.y
    };
  }
  /**
   * Returns the mouse position relative to the window.
   * 
   * @example
   * const { x, y } = Impacto.Inputs.Mouse.getWindowPosition();
   * 
   * @returns {Object} The current mouse position {x, y}
   * @memberof MouseManager
   */


  getWindowPosition() {
    return {
      x: this.windowX,
      y: this.windowY
    };
  }
  /**
   * Returns the name of the button by the button code.
   * 
   * @example
   * console.log(Impacto.Inputs.Mouse.getNameByButtonCode(1)); // "middle"
   * 
   * @param {number} buttonCode - The button code
   * @returns {string} The name of the button
   * @memberof MouseManager
   */


  getNameByButtonCode(buttonCode) {
    switch (buttonCode) {
      case this.buttons.left:
        return "left";

      case this.buttons.middle:
        return "middle";

      case this.buttons.right:
        return "right";

      default:
        return "";
    }
  }
  /**
   * Returns the code of the button by the button name.
   * 
   * @example
   * console.log(Impacto.Inputs.Mouse.getButtonCodeByName("left")); // 0
   * 
   * @param {string} buttonName - The name of the button
   * @returns {number} The button code
   * @memberof MouseManager
   */


  getButtonKeyByName(name) {
    switch (name) {
      case "left":
        return this.buttons.left;

      case "middle":
        return this.buttons.middle;

      case "right":
        return this.buttons.right;

      default:
        return -1;
    }
  }
  /**
   * Returns if the button is pressed.
   * 
   * @example
   * Impacto.Inputs.Mouse.isButtonPressed("left") // True
   * 
   * @param {string|number} button - The button name or code
   * @returns {boolean} True if the button is pressed
   * @memberof MouseManager
   */


  isButtonDown(button) {
    if (typeof button === "string") return this.isButtonDownByName(button);else if (typeof button === "number") return this.isButtonDownByButtonCode(button);
  }
  /**
   * Returns if the button is pressed by the button name.
   * 
   * @example
   * Impacto.Inputs.Mouse.isButtonDownByName("left") // True
   * 
   * @param {string|number} button - The button name
   * @returns {boolean} True if the button is pressed
   * @memberof MouseManager
   */


  isButtonDownByName(name) {
    return !!this.isDown[name];
  }
  /**
   * Returns if the button is pressed by the button code.
   * 
   * @example
   * Impacto.Inputs.Mouse.isButtonDownByName(2) // True
   * 
   * @param {string|number} button - The button code
   * @returns {boolean} True if the button is pressed
   * @memberof MouseManager
   */


  isButtonDownByButtonCode(buttonCode) {
    return !!this.isDown[this.getNameByButtonCode(buttonCode)];
  } // ------

  /**
   * @description
   * Private (Core) function to handle the mouse position.
   * 
   * @memberof KeyBoard
   * @private
   */


  _updateMousePosition(e) {
    this.windowX = e.clientX;
    this.windowY = e.clientY;
    this.x = this.windowX - CanvasStateInstance.canvas.offsetLeft;
    this.y = this.windowY - CanvasStateInstance.canvas.offsetTop;
  }
  /**
   * @description
   * Private (Core) function to handle the mouse position.
   * 
   * @memberof KeyBoard
   * @private
   */


  _mousemove(e) {
    this._updateMousePosition(e);
  }
  /**
   * @description
   * Private (Core) function to handle the mouse position.
   * 
   * @memberof KeyBoard
   * @private
   */


  _mousedown(e) {
    this._updateMousePosition(e);

    this.isDown[this.getNameByButtonCode(e.button)] = true;
  }
  /**
   * @description
   * Private (Core) function to handle the mouse position.
   * 
   * @memberof KeyBoard
   * @private
   */


  _mouseup(e) {
    this._updateMousePosition(e);

    this.isDown[this.getNameByButtonCode(e.button)] = false;
  }

}
const MouseInstance = new MouseManager();
;// CONCATENATED MODULE: ./src/Inputs/Inputs.js


/**
 * @namespace Impacto.Inputs
 * 
 * @property {Impacto.Inputs.KeyBoard} KeyBoard
 * @property {Impacto.Inputs.MouseManager} MouseManager
 */

class Inputs {
  constructor() {
    this.KeyBoard = new KeyboardManager();
    this.Mouse = new MouseManager();
  }

}
const InputsInstance = new Inputs();
;// CONCATENATED MODULE: ./src/State/State.js



/**
 * @namespace Impacto.State
 * 
 * @property {Impacto.Inputs.AssetsManager} Assets
 * @property {Impacto.Inputs.CanvasState} Canvas
 * @property {Impacto.Inputs.GlobalStateManager} Global
 */

class State {
  constructor() {
    this.Assets = new AssetsManager();
    this.Canvas = new CanvasState();
    this.Global = new GlobalStateManager();
  }

}
const StateInstance = new State();
;// CONCATENATED MODULE: ./package.json
const package_namespaceObject = {"i8":"0.9.0"};
;// CONCATENATED MODULE: ./src/Utils/Utils.js


/**
 * @class Utils
 * @description Utils class
 * @instance
 */

class Utils {
  constructor() {
    this.Math = new UtilsMath();
  }
  /**
   * @description 
   * Returns teh current version of the library
   * 
   * @example
   * console.log(Impacto.Utils.getVersion());
   * 
   * @returns {String} The current version of the library
   * @memberof Utils
   * @static
   */


  static getVersion() {
    return package_namespaceObject.i8;
  }

}
const UtilsInstance = new Utils();
;// CONCATENATED MODULE: ./src/Impacto.js






/**
 * @namespace Impacto
 * 
 * @property {Impacto.Game} Game
 * @property {Impacto.Scenes.Scene} Scene
 * @property {Impacto.GameObjects} GameObjects
 * @property {Impacto.Inputs} Inputs
 * @property {Impacto.State} State
 * @property {Impacto.Utils} Utils
 */

/* harmony default export */ const Impacto = ((function () {
  return {
    // Game 
    Game: Game,
    // Scenes
    Scene: Scene,
    // GameObjects
    GameObjects: new GameObjects(),
    // Inputs
    Inputs: new Inputs(),
    // Utils
    State: new State(),
    Utils: new Utils()
  };
})());
var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
