'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  Object.defineProperty(subClass, "prototype", {
    value: Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    }),
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var AssetsManager = /*#__PURE__*/function () {
  function AssetsManager() {
    _classCallCheck(this, AssetsManager);

    if (AssetsManager.instance instanceof AssetsManager) return AssetsManager.instance;
    AssetsManager.instance = this;
    this.assets = {
      audios: {},
      fonts: {},
      sprites: {}
    };
  }

  _createClass(AssetsManager, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assets) {
        var key, category, spritesKeys, _iterator, _step, spriteKey, fontsKeys, _iterator2, _step2, fontKey, audiosKeys, _iterator3, _step3, soundKey;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = regeneratorRuntime.keys(assets);

              case 1:
                if ((_context.t1 = _context.t0()).done) {
                  _context.next = 70;
                  break;
                }

                key = _context.t1.value;
                category = assets[key];

                if (!(key === "sprites")) {
                  _context.next = 26;
                  break;
                }

                spritesKeys = Object.keys(category);

                if (!(spritesKeys.length > 0)) {
                  _context.next = 24;
                  break;
                }

                _iterator = _createForOfIteratorHelper(spritesKeys);
                _context.prev = 8;

                _iterator.s();

              case 10:
                if ((_step = _iterator.n()).done) {
                  _context.next = 16;
                  break;
                }

                spriteKey = _step.value;
                _context.next = 14;
                return this.loadSprite(spriteKey, category[spriteKey]);

              case 14:
                _context.next = 10;
                break;

              case 16:
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t2 = _context["catch"](8);

                _iterator.e(_context.t2);

              case 21:
                _context.prev = 21;

                _iterator.f();

                return _context.finish(21);

              case 24:
                _context.next = 68;
                break;

              case 26:
                if (!(key === "fonts")) {
                  _context.next = 48;
                  break;
                }

                fontsKeys = Object.keys(category);

                if (!(fontsKeys.length > 0)) {
                  _context.next = 46;
                  break;
                }

                _iterator2 = _createForOfIteratorHelper(fontsKeys);
                _context.prev = 30;

                _iterator2.s();

              case 32:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 38;
                  break;
                }

                fontKey = _step2.value;
                _context.next = 36;
                return this.loadFont(fontKey, category[fontKey]);

              case 36:
                _context.next = 32;
                break;

              case 38:
                _context.next = 43;
                break;

              case 40:
                _context.prev = 40;
                _context.t3 = _context["catch"](30);

                _iterator2.e(_context.t3);

              case 43:
                _context.prev = 43;

                _iterator2.f();

                return _context.finish(43);

              case 46:
                _context.next = 68;
                break;

              case 48:
                if (!(key === "audios")) {
                  _context.next = 68;
                  break;
                }

                audiosKeys = Object.keys(category);

                if (!(audiosKeys.length > 0)) {
                  _context.next = 68;
                  break;
                }

                _iterator3 = _createForOfIteratorHelper(audiosKeys);
                _context.prev = 52;

                _iterator3.s();

              case 54:
                if ((_step3 = _iterator3.n()).done) {
                  _context.next = 60;
                  break;
                }

                soundKey = _step3.value;
                _context.next = 58;
                return this.loadAudios(soundKey, category[soundKey]);

              case 58:
                _context.next = 54;
                break;

              case 60:
                _context.next = 65;
                break;

              case 62:
                _context.prev = 62;
                _context.t4 = _context["catch"](52);

                _iterator3.e(_context.t4);

              case 65:
                _context.prev = 65;

                _iterator3.f();

                return _context.finish(65);

              case 68:
                _context.next = 1;
                break;

              case 70:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 18, 21, 24], [30, 40, 43, 46], [52, 62, 65, 68]]);
      }));

      function load(_x) {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }, {
    key: "loadSprite",
    value: function () {
      var _loadSprite = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(name, path) {
        var image;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.loadImage(path);

              case 2:
                image = _context2.sent;
                this.assets.sprites[name] = {
                  image: image,
                  width: image.width,
                  height: image.height
                };

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadSprite(_x2, _x3) {
        return _loadSprite.apply(this, arguments);
      }

      return loadSprite;
    }()
  }, {
    key: "loadImage",
    value: function () {
      var _loadImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(path) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", new Promise(function (resolve, reject) {
                  var image = new Image();

                  image.onload = function () {
                    return resolve(image);
                  };

                  image.onerror = function () {
                    return reject(new Error("Could not load image: ".concat(path)));
                  };

                  image.src = path;
                }));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function loadImage(_x4) {
        return _loadImage.apply(this, arguments);
      }

      return loadImage;
    }()
  }, {
    key: "loadFont",
    value: function () {
      var _loadFont = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(name, path) {
        var newCSSFont;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                this.assets.fonts[name] = name;
                newCSSFont = document.createElement("style");
                newCSSFont.type = "text/css";
                newCSSFont.innerHTML = "\n\t\t\t@font-face {\n\t\t\t\tfont-family: \"".concat(name, "\";\n\t\t\t\tsrc: url(\"").concat(path, "\") format(\"truetype\");");
                document.body.appendChild(newCSSFont);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function loadFont(_x5, _x6) {
        return _loadFont.apply(this, arguments);
      }

      return loadFont;
    }()
  }, {
    key: "loadAudios",
    value: function () {
      var _loadAudios = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(name, path) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.loadAudio(path);

              case 2:
                this.assets.audios[name] = _context5.sent;
                console.log(this.assets.audios[name]);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function loadAudios(_x7, _x8) {
        return _loadAudios.apply(this, arguments);
      }

      return loadAudios;
    }()
  }, {
    key: "loadAudio",
    value: function () {
      var _loadAudio = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(path) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", new Promise(function (resolve, reject) {
                  var audio = new Audio();

                  audio.oncanplaythrough = function () {
                    return resolve(audio);
                  };

                  audio.onerror = function () {
                    return reject(new Error("Could not load audio: ".concat(path)));
                  };

                  audio.src = path;
                }));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function loadAudio(_x9) {
        return _loadAudio.apply(this, arguments);
      }

      return loadAudio;
    }()
  }, {
    key: "getSprite",
    value: function getSprite(name) {
      return this.assets.sprites[name].image;
    }
  }, {
    key: "getFont",
    value: function getFont(name) {
      return this.assets.fonts[name];
    }
  }, {
    key: "getAudio",
    value: function getAudio(name) {
      return this.assets.audios[name];
    }
  }, {
    key: "getSpriteSize",
    value: function getSpriteSize(name) {
      var sprite = this.getSprite(name);
      if (sprite) return {
        width: sprite.width,
        height: sprite.height
      };
      return null;
    }
  }]);

  return AssetsManager;
}();
var AssetsManagerInstance = new AssetsManager();

var CanvasState = /*#__PURE__*/function () {
  function CanvasState() {
    _classCallCheck(this, CanvasState);

    if (CanvasState.instance instanceof CanvasState) return CanvasState.instance;
    CanvasState.instance = this;
    this.parent = document.body;
    this.canvas = null;
    this.context = null;
    this.backgroundColor = null;
    this.width = 800;
    this.height = 600;
  } // Dom Element


  _createClass(CanvasState, [{
    key: "setParent",
    value: function setParent(parent) {
      if (!parent) parent = document.body;else if (typeof parent === "string") parent = document.getElementById(parent);else if (!(parent instanceof HTMLElement)) throw new Error("Invalid parent");
      this.parent = parent;
    } // Dom Element

  }, {
    key: "setCanvas",
    value: function setCanvas(canvas) {
      if (typeof canvas === "string") this.canvas = document.getElementById(canvas);else if (canvas instanceof HTMLElement) this.canvas = canvas;else this.canvas = document.createElement("canvas");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.context = this.canvas.getContext("2d");
      this.parent.appendChild(this.canvas);
    }
  }, {
    key: "setSize",
    value: function setSize() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      this.width = width;
      this.height = height;

      if (this.canvas) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
      }
    }
  }, {
    key: "setBackgroundColor",
    value: function setBackgroundColor(color) {
      if (!color) color = null;
      this.backgroundColor = color;
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      if (volume < 0 || volume > 1) throw new Error("Invalid volume");
      this.volume = volume;
    }
  }]);

  return CanvasState;
}();
var CanvasStateInstance = new CanvasState();

var GlobalStateManager = /*#__PURE__*/function () {
  function GlobalStateManager() {
    _classCallCheck(this, GlobalStateManager);

    if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
    GlobalStateManager.instance = this;
    this.debug = false;
    this.gravity = {
      x: 0,
      y: 0
    };
    this.isPaused = false;
    this.isMuted = false; // TODO

    this.volume = 1; // TODO: // Audio default volume
  }

  _createClass(GlobalStateManager, [{
    key: "setPause",
    value: function setPause(pause) {
      this.isPaused = pause;
    }
  }]);

  return GlobalStateManager;
}();
var GlobalStateManagerInstance = new GlobalStateManager();

var CoreGameManager = /*#__PURE__*/function () {
  function CoreGameManager() {
    var _this = this;

    _classCallCheck(this, CoreGameManager);

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
    document.addEventListener("visibilitychange", function (event) {
      _this.tabActive = document.hidden;
      _this._lastTimeUpdate = Date.now();
    });
    setInterval(this.updateFPS.bind(this), 1000);
  }

  _createClass(CoreGameManager, [{
    key: "addScene",
    value: function addScene(scene) {
      var newScene = new scene();
      this.scenes.push(newScene);
    }
  }, {
    key: "startScene",
    value: function startScene(index) {
      this.currentScene = this.scenes[index];
      this.currentScene.start();
    }
  }, {
    key: "updateFPS",
    value: function updateFPS() {
      this.fps = this._fps;
      this._fps = 0;
    }
  }, {
    key: "calcTime",
    value: function calcTime() {
      if (this.tabActive) return;
      var now = Date.now();
      var delta = now - this._lastTimeUpdate;
      var deltaTime = delta * 0.01;
      this._lastTimeUpdate = now;
      this.delta = delta;
      this.deltaTime = deltaTime;
      return {
        delta: delta,
        deltaTime: deltaTime
      };
    } // Core function

  }, {
    key: "step",
    value: function step(gameTime) {
      window.requestAnimationFrame(this.step.bind(this));
      if (GlobalStateManagerInstance.isPaused) return;
      this.gameTime = gameTime;
      this.calcTime();
      this._fps++;

      if (this.currentScene) {
        this.currentScene.time = {
          delta: this.delta,
          deltaTime: this.deltaTime,
          fps: this.fps,
          gameTime: gameTime
        }; // Objects Steep

        this.currentScene.children.forEach(function (child) {
          if (child._step) child._step();
        });
        this.update();
        this.render();
      }
    } // Run User Code

  }, {
    key: "update",
    value: function update() {
      this.currentScene.update(this.deltaTime, this.fps);
    } // Render

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var ctx = CanvasStateInstance.context;
      if (!ctx) return;

      if (CanvasStateInstance.backgroundColor) {
        ctx.fillStyle = CanvasStateInstance.backgroundColor;
        ctx.fillRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
      } else {
        ctx.clearRect(0, 0, CanvasStateInstance.width, CanvasStateInstance.height);
      }

      var zSortedChildren = this.currentScene.children.sort(function (a, b) {
        return a.z - b.z;
      });
      zSortedChildren.forEach(function (child) {
        if (child._render) child._render(_this2.deltaTime);
      });
      this.currentScene.posRender(ctx);
    }
  }]);

  return CoreGameManager;
}();
new CoreGameManager();

var Game = /*#__PURE__*/_createClass(function Game(config) {
  _classCallCheck(this, Game);

  // Start Canvas
  CanvasStateInstance.setParent(config.parent);
  CanvasStateInstance.setSize(config.width, config.height);
  CanvasStateInstance.setCanvas(config.canvas);
  CanvasStateInstance.setBackgroundColor(config.backgroundColor); // Assets

  new Promise(function (resolve, reject) {
    AssetsManagerInstance.load(config.assets).then(function () {
      // Start Scene Manager
      var gameManager = new CoreGameManager();
      gameManager.addScene(config.scene);
      gameManager.startScene(0);
      resolve();
    }).catch(reject);
  });
});

var Scene = /*#__PURE__*/function () {
  function Scene() {
    _classCallCheck(this, Scene);

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

  _createClass(Scene, [{
    key: "addChild",
    value: function addChild(child) {
      this.children.push(child);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.children.indexOf(child);
      if (index > -1) this.children.splice(index, 1);
    }
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "update",
    value: function update(delta) {}
  }, {
    key: "posRender",
    value: function posRender(context) {}
  }]);

  return Scene;
}();

var UtilsMath = /*#__PURE__*/function () {
  function UtilsMath() {
    _classCallCheck(this, UtilsMath);
  }

  _createClass(UtilsMath, [{
    key: "randomFloat",
    value: function randomFloat(min, max) {
      var precision = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

      if (!max) {
        max = min;
        min = 0;
      }

      return parseFloat((Math.random() * (max - min) + min).toFixed(precision));
    }
  }, {
    key: "randomInt",
    value: function randomInt(min, max) {
      return Math.floor(this.randomFloat(min, max));
    }
  }, {
    key: "randomColor",
    value: function randomColor() {
      return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    }
  }, {
    key: "degreesToRadians",
    value: function degreesToRadians(degrees) {
      return degrees * Math.PI / 180;
    }
  }, {
    key: "radiansToDegrees",
    value: function radiansToDegrees(radians) {
      return radians * 180 / Math.PI;
    } // Points

  }, {
    key: "distanceTwoPoints",
    value: function distanceTwoPoints(x1, y1, x2, y2) {
      return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
  }, {
    key: "distanceTwoPointsVector2",
    value: function distanceTwoPointsVector2(point1, point2) {
      return this.distanceTwoPoints(point1.x, point1.y, point2.x, point2.y);
    }
  }, {
    key: "angleBetweenTwoPoints",
    value: function angleBetweenTwoPoints(x1, y1, x2, y2) {
      return Math.atan2(y2 - y1, x2 - x1);
    }
  }, {
    key: "angleBetweenTwoPointsVector2",
    value: function angleBetweenTwoPointsVector2(point1, point2) {
      return this.angleBetweenTwoPoints(point1.x, point1.y, point2.x, point2.y);
    }
  }, {
    key: "angleBetweenTwoPointsDegrees",
    value: function angleBetweenTwoPointsDegrees(x1, y1, x2, y2) {
      return this.angleBetweenTwoPointsRadians(x1, y1, x2, y2) * 180 / Math.PI;
    }
  }, {
    key: "angleBetweenTwoPointsVector2Degrees",
    value: function angleBetweenTwoPointsVector2Degrees(point1, point2) {
      return this.angleBetweenTwoPointsDegrees(point1.x, point1.y, point2.x, point2.y);
    } // Circles

  }, {
    key: "distanceBetweenTwoCirclesFromCircle",
    value: function distanceBetweenTwoCirclesFromCircle(circle1, circle2) {
      return this.distanceTwoPoints(circle1.x, circle1.y, circle2.x, circle2.y) - (circle1.radius + circle2.radius);
    }
  }, {
    key: "distanceBetweenTwoCircles",
    value: function distanceBetweenTwoCircles(x1, y1, radius1, x2, y2, radius2) {
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
  }, {
    key: "circleArea",
    value: function circleArea(radius) {
      return Math.PI * radius * radius;
    }
  }, {
    key: "circlePerimeter",
    value: function circlePerimeter(radius) {
      return 2 * Math.PI * radius;
    } // Rectangles

  }, {
    key: "distanceBetweenTwoRectanglesFromRectangle",
    value: function distanceBetweenTwoRectanglesFromRectangle(rect1, rect2) {
      var xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
      var yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
      return xOverlap * yOverlap;
    }
  }, {
    key: "distanceBetweenTwoRectangles",
    value: function distanceBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
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
  }, {
    key: "angleBetweenTwoRectangles",
    value: function angleBetweenTwoRectangles(x1, y1, width1, height1, x2, y2, width2, height2) {
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
  }, {
    key: "angleBetweenTwoRectanglesFromRectangle",
    value: function angleBetweenTwoRectanglesFromRectangle(rect1, rect2) {
      var xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
      var yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
      return Math.atan2(yOverlap, xOverlap);
    }
  }, {
    key: "rectangleArea",
    value: function rectangleArea(width, height) {
      return width * height;
    }
  }, {
    key: "rectanglePerimeter",
    value: function rectanglePerimeter(width, height) {
      return 2 * (width + height);
    }
  }, {
    key: "rectanglePerimeterFromRectangle",
    value: function rectanglePerimeterFromRectangle(rectangle) {
      return this.rectanglePerimeter(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }, {
    key: "rectangleVertices",
    value: function rectangleVertices(x, y, width, height) {
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
  }, {
    key: "rectangleVerticesFromRectangle",
    value: function rectangleVerticesFromRectangle(rectangle) {
      return this.rectangleVertices(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }, {
    key: "rectangleCenterX",
    value: function rectangleCenterX(x, width) {
      return x + width / 2;
    }
  }, {
    key: "rectangleCenterY",
    value: function rectangleCenterY(y, height) {
      return y + height / 2;
    }
  }, {
    key: "rectangleCenter",
    value: function rectangleCenter(x, y, width, height) {
      return {
        x: this.rectangleCenterX(x, width),
        y: this.rectangleCenterY(y, height)
      };
    }
  }, {
    key: "rectangleCenterXFromRectangleBounds",
    value: function rectangleCenterXFromRectangleBounds(rectangle) {
      return this.rectangleCenterX(rectangle.x, rectangle.width);
    }
  }, {
    key: "rectangleCenterYFromRectangleBounds",
    value: function rectangleCenterYFromRectangleBounds(rectangle) {
      return this.rectangleCenterY(rectangle.y, rectangle.height);
    }
  }, {
    key: "rectangleCenterFromRectangleBounds",
    value: function rectangleCenterFromRectangleBounds(rectangle) {
      return this.rectangleCenter(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }, {
    key: "rectangleTopLeft",
    value: function rectangleTopLeft(x, y) {
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "rectangleTopRight",
    value: function rectangleTopRight(x, y, width) {
      return {
        x: x + width,
        y: y
      };
    }
  }, {
    key: "rectangleBottomLeft",
    value: function rectangleBottomLeft(x, y, height) {
      return {
        x: x,
        y: y + height
      };
    }
  }, {
    key: "rectangleBottomRight",
    value: function rectangleBottomRight(x, y, width, height) {
      return {
        x: x + width,
        y: y + height
      };
    }
  }, {
    key: "rectangleTopLeftFromRectangleBounds",
    value: function rectangleTopLeftFromRectangleBounds(rectangle) {
      return this.rectangleTopLeft(rectangle.x, rectangle.y);
    }
  }, {
    key: "rectangleTopRightFromRectangleBounds",
    value: function rectangleTopRightFromRectangleBounds(rectangle) {
      return this.rectangleTopRight(rectangle.x, rectangle.y, rectangle.width);
    }
  }, {
    key: "rectangleBottomLeftFromRectangleBounds",
    value: function rectangleBottomLeftFromRectangleBounds(rectangle) {
      return this.rectangleBottomLeft(rectangle.x, rectangle.y, rectangle.height);
    }
  }, {
    key: "rectangleBottomRightFromRectangleBounds",
    value: function rectangleBottomRightFromRectangleBounds(rectangle) {
      return this.rectangleBottomRight(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    }
  }]);

  return UtilsMath;
}();
var UtilsMathInstance = new UtilsMath();

var GameObject2D = /*#__PURE__*/function () {
  function GameObject2D(x, y, fillColor, strokeColor) {
    _classCallCheck(this, GameObject2D);

    this.id = Math.random();
    this.name = "Obj - ".concat(this.id); // Render

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

  _createClass(GameObject2D, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    } // Position

  }, {
    key: "setX",
    value: function setX(x) {
      this.setPosition(x, this._y, this.z);
      return this;
    }
  }, {
    key: "setY",
    value: function setY(y) {
      this.setPosition(this._x, y, this.z);
      return this;
    }
  }, {
    key: "setZ",
    value: function setZ(z) {
      this.setPosition(this._x, this._y, z);
      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    }
  }, {
    key: "getRealPosition",
    value: function getRealPosition() {
      return {
        x: this._x,
        y: this._y,
        z: this.z
      };
    }
  }, {
    key: "setPosition",
    value: function setPosition(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.z;
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this.bodyType === "S" && !force) return;
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
  }, {
    key: "setRandomPosition",
    value: function setRandomPosition() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CanvasStateInstance.width;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CanvasStateInstance.height;

      do {
        this.setPosition(x + Math.random() * width, y + Math.random() * height);
      } while (!this.checkIsInsideWorldBounds());

      return this;
    } // Rotation and angle

  }, {
    key: "setRotation",
    value: function setRotation(rotation) {
      this.rotation = rotation;
      this.angle = UtilsMathInstance.radiansToDegrees(rotation);
      return this;
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      this.angle = angle;
      this.rotation = UtilsMathInstance.degreesToRadians(angle);
      return this;
    } // Scale
    // Origin

  }, {
    key: "setScaleX",
    value: function setScaleX(x) {
      this.setScale(x, this.scale.y);
      return this;
    }
  }, {
    key: "setScaleY",
    value: function setScaleY(y) {
      this.setScale(this.scale.x, y);
      return this;
    }
  }, {
    key: "setScale",
    value: function setScale() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      this.scale = {
        x: x,
        y: y
      };
      return this;
    } // Origin

  }, {
    key: "setOriginX",
    value: function setOriginX(x) {
      this.setOrigin(x, this.origin.y);
      return this;
    }
  }, {
    key: "setOriginY",
    value: function setOriginY(y) {
      this.setOrigin(this.origin.x, y);
      return this;
    }
  }, {
    key: "setOrigin",
    value: function setOrigin() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      this.origin = {
        x: x,
        y: y
      };
      return this;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return {
        x: this.getCenterX(),
        y: this.getCenterY()
      };
    }
  }, {
    key: "getTopLeft",
    value: function getTopLeft() {
      return {
        x: this.getLeft(),
        y: this.getTop()
      };
    }
  }, {
    key: "getTopCenter",
    value: function getTopCenter() {
      return {
        x: this.getCenterX(),
        y: this.getTop()
      };
    }
  }, {
    key: "getTopRight",
    value: function getTopRight() {
      return {
        x: this.getRight(),
        y: this.getTop()
      };
    }
  }, {
    key: "getBottomLeft",
    value: function getBottomLeft() {
      return {
        x: this.getLeft(),
        y: this.getBottom()
      };
    }
  }, {
    key: "getBottomCenter",
    value: function getBottomCenter() {
      return {
        x: this.getCenterX(),
        y: this.getBottom()
      };
    }
  }, {
    key: "getBottomRight",
    value: function getBottomRight() {
      return {
        x: this.getRight(),
        y: this.getBottom()
      };
    }
  }, {
    key: "getCenterLeft",
    value: function getCenterLeft() {
      return {
        x: this.getLeft(),
        y: this.getCenterY()
      };
    }
  }, {
    key: "getCenterRight",
    value: function getCenterRight() {
      return {
        x: this.getRight(),
        y: this.getCenterY()
      };
    } // Color

  }, {
    key: "setFillColor",
    value: function setFillColor(fillColor) {
      this.fillColor = fillColor;
      return this;
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(strokeColor) {
      this.strokeColor = strokeColor;
      return this;
    }
  }, {
    key: "setStrokeWidth",
    value: function setStrokeWidth(strokeWidth) {
      this.strokeWidth = strokeWidth;
      return this;
    }
  }, {
    key: "setVisible",
    value: function setVisible(isVisible) {
      this.visible = isVisible;
      return this;
    }
  }, {
    key: "_render",
    value: function _render(deltaTime) {
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
  }]);

  return GameObject2D;
}();

var Types = {
  audioPlay: "AudioPlay",
  circle: "Circle",
  line: "Line",
  polygon: "Polygon",
  rectangle: "Rect",
  sprite: "Sprite",
  text: "Text",
  triangle: "Triangle"
};

var AudioPlay = /*#__PURE__*/function () {
  function AudioPlay(key) {
    var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var paused = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var volume = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GlobalStateManagerInstance.volume;
    var muted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var delay = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, AudioPlay);

    this.name = key;
    this.audio = AssetsManagerInstance.getAudio(key);
    this.audio.volume = volume;
    this.audio.loop = loop;
    this.audio.muted = muted;
    this.paused = paused;
    this.volume = volume;
    this.loop = loop;
    this.muted = muted;
    this.delay = delay;
    this.loopDelay = delay; // TODO: not implemented yet

    this._delayTimer = null;
    this._type = Types.audioPlay;
    if (!this.paused) this.play();
  }

  _createClass(AudioPlay, [{
    key: "play",
    value: function play() {
      var _this = this;

      if (this._delayTimer) clearTimeout(this._delayTimer);
      this.audio.currentTime = 0;
      this.audio.loop = this.loop;

      if (this.delay > 0) {
        this._delayTimer = setTimeout(function () {
          return _this.audio.play();
        }, this.delay);
      } else this.audio.play();

      return this;
    }
  }, {
    key: "playOnce",
    value: function playOnce() {
      if (this._delayTimer) clearTimeout(this._delayTimer);
      this.audio.currentTime = 0;
      this.audio.loop = false;
      this.audio.play();
      return this;
    }
  }, {
    key: "pause",
    value: function pause() {
      if (this._delayTimer) clearTimeout(this._delayTimer);
      this.paused = true;
      this.audio.pause();
      return this;
    }
  }, {
    key: "resume",
    value: function resume() {
      if (this._delayTimer) clearTimeout(this._delayTimer);
      this.paused = false;
      this.audio.loop = this.loop;
      this.audio.play();
      return this;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this._delayTimer) clearTimeout(this._delayTimer);
      this.audio.pause();
      this.audio.currentTime = 0;
      return this;
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this.volume = volume;
      this.audio.volume = volume;
      return this;
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.loop = loop;
      this.audio.loop = loop;
      return this;
    }
  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      this.muted = muted;
      this.audio.muted = muted;
      return this;
    }
  }, {
    key: "setDelay",
    value: function setDelay(delay) {
      this.delay = delay;
      return this;
    }
  }, {
    key: "isEnded",
    value: function isEnded() {
      return this.audio.ended;
    }
  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.audio.duration;
    }
  }]);

  return AudioPlay;
}();

var Circle = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Circle, _GameObject2D);

  var _super = _createSuper(Circle);

  function Circle(x, y) {
    var _this;

    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ffffff";
    var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";

    _classCallCheck(this, Circle);

    _this = _super.call(this, x, y, fillColor, strokeColor);
    _this.radius = radius;
    _this._type = Types.circle;
    return _this;
  }

  _createClass(Circle, [{
    key: "x",
    get: function get() {
      return this._x - this.radius * this.origin.x * this.scale.x;
    } // Get the position X relative to the origin
    ,
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.radius * this.origin.y * this.scale.y;
    } // Get the position Y relative to the origin
    ,
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this.radius;
    }
  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this.radius = radius;
    } // Positions Based in the origin

  }, {
    key: "getTop",
    value: function getTop() {
      return this.y - this.radius;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.y + this.radius;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x - this.radius;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.x + this.radius;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.x;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.y;
    } // Get Real Positions

  }, {
    key: "getRealTop",
    value: function getRealTop() {
      return this._y - this.radius;
    }
  }, {
    key: "getRealBottom",
    value: function getRealBottom() {
      return this._y + this.radius;
    }
  }, {
    key: "getRealLeft",
    value: function getRealLeft() {
      return this._x - this.radius;
    }
  }, {
    key: "getRealRight",
    value: function getRealRight() {
      return this._x + this.radius;
    }
  }, {
    key: "getRealCenterX",
    value: function getRealCenterX() {
      return this._x;
    }
  }, {
    key: "getRealCenterY",
    value: function getRealCenterY() {
      return this._y;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      return {
        x: this.getLeft(),
        y: this.getTop(),
        width: this.radius * 2,
        height: this.radius * 2
      };
    } // ----- Private methods -----

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasStateInstance.context.beginPath();
      CanvasStateInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      CanvasStateInstance.context.fill();
      CanvasStateInstance.context.stroke();
    }
  }]);

  return Circle;
}(GameObject2D);

var Line = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Line, _GameObject2D);

  var _super = _createSuper(Line);

  function Line(x, y, endX, endY) {
    var _this;

    var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";

    _classCallCheck(this, Line);

    _this = _super.call(this, x, y, "none", strokeColor);
    _this.endX = endX;
    _this.endY = endY;
    _this._type = Types.line;
    return _this;
  }

  _createClass(Line, [{
    key: "width",
    get: function get() {
      return this.endX - this._x;
    }
  }, {
    key: "height",
    get: function get() {
      return this.endY - this._y;
    }
  }, {
    key: "x",
    get: // Positions Based in the origin
    function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    },
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    },
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.y + this.height;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.x + this.width;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.x + this.width / 2;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.y + this.height / 2;
    } // Get Real Positions

  }, {
    key: "getRealTop",
    value: function getRealTop() {
      return this._y;
    }
  }, {
    key: "getRealBottom",
    value: function getRealBottom() {
      return this._y + this.height;
    }
  }, {
    key: "getRealLeft",
    value: function getRealLeft() {
      return this._x;
    }
  }, {
    key: "getRealRight",
    value: function getRealRight() {
      return this._x + this.width;
    }
  }, {
    key: "getRealCenterX",
    value: function getRealCenterX() {
      return this._x + this.width / 2;
    }
  }, {
    key: "getRealCenterY",
    value: function getRealCenterY() {
      return this._y + this.height / 2;
    } // Set position based in the X

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.setSize(width, this.height);
      return this;
    } // Set position based in the Y

  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.setSize(this.width, height);
      return this;
    } // Set position based in the X and Y

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.endX = this._x + width;
      this.endY = this._y + height;
      return this;
    } // Move line from X to the specified X

  }, {
    key: "setEndX",
    value: function setEndX(endX) {
      this.setEnd(endX, this.endY);
      return this;
    } // Move line from X to the specified X

  }, {
    key: "setEndY",
    value: function setEndY(endY) {
      this.setEnd(this.endX, endY);
      return this;
    } // Move line from X to the specified X and the same for Y

  }, {
    key: "setEnd",
    value: function setEnd(x, y) {
      this.endX = x;
      this.endY = y;
      return this;
    } // Private

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasStateInstance.context.beginPath();
      CanvasStateInstance.context.moveTo(this.x, this.y);
      CanvasStateInstance.context.lineTo(this.endX, this.endY);
      CanvasStateInstance.context.closePath();
      CanvasStateInstance.context.fill();
      CanvasStateInstance.context.stroke();
    }
  }]);

  return Line;
}(GameObject2D);

var Polygon = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Polygon, _GameObject2D);

  var _super = _createSuper(Polygon);

  function Polygon(x, y) {
    var _this;

    var vertices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ffffff";
    var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";

    _classCallCheck(this, Polygon);

    _this = _super.call(this, x, y, fillColor, strokeColor);
    _this.vertices = vertices;
    _this.close = true;
    _this._type = Types.polygon;
    return _this;
  }

  _createClass(Polygon, [{
    key: "x",
    get: function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    } // Get the position X relative to the origin
    ,
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    } // Get the position Y relative to the origin
    ,
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "width",
    get: function get() {
      if (this.vertices.length === 0) return 0;
      return Math.max.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.x;
      })));
    }
  }, {
    key: "height",
    get: function get() {
      if (this.vertices.length === 0) return 0;
      return Math.max.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.y;
      })));
    }
  }, {
    key: "getTop",
    value: function getTop() {
      var _this2 = this;

      if (this.vertices.length === 0) return 0;
      return Math.min.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.y + _this2.y;
      })));
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      var _this3 = this;

      if (this.vertices.length === 0) return 0;
      return Math.max.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.y + _this3.y;
      })));
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      var _this4 = this;

      if (this.vertices.length === 0) return 0;
      return Math.min.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.x + _this4.x;
      })));
    }
  }, {
    key: "getRight",
    value: function getRight() {
      var _this5 = this;

      if (this.vertices.length === 0) return 0;
      return Math.max.apply(Math, _toConsumableArray(this.vertices.map(function (v) {
        return v.x + _this5.x;
      })));
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.x + this.width / 2;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.y + this.height / 2;
    }
  }, {
    key: "getCenter",
    value: function getCenter() {
      return {
        x: this.getCenterX(),
        y: this.getCenterY()
      };
    }
  }, {
    key: "add",
    value: function add(x, y) {
      this.vertices.push({
        x: x,
        y: y
      });
      return this;
    }
  }, {
    key: "remove",
    value: function remove(x, y) {
      var index = this.vertices.findIndex(function (vertex) {
        return vertex.x === x && vertex.y === y;
      });
      if (index !== -1) this.vertices.splice(index, 1);
      return this;
    }
  }, {
    key: "setClose",
    value: function setClose(isClose) {
      this.close = isClose;
      return this;
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      return {
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: "getVertices",
    value: function getVertices() {
      return this.vertices;
    } // Private

  }, {
    key: "_renderType",
    value: function _renderType() {
      if (this.vertices.length === 0) return;
      CanvasStateInstance.context.translate(this.x, this.y);
      CanvasStateInstance.context.beginPath();
      CanvasStateInstance.context.moveTo(this.vertices[0].x, this.vertices[0].y);

      for (var i = 1; i < this.vertices.length; i++) {
        CanvasStateInstance.context.lineTo(this.vertices[i].x, this.vertices[i].y);
      }

      if (this.close) CanvasStateInstance.context.closePath();
      CanvasStateInstance.context.stroke();
      CanvasStateInstance.context.fill();
    }
  }]);

  return Polygon;
}(GameObject2D);

var Rectangle = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Rectangle, _GameObject2D);

  var _super = _createSuper(Rectangle);

  function Rectangle(x, y) {
    var _this;

    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#ffffff";
    var strokeColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#000000";

    _classCallCheck(this, Rectangle);

    _this = _super.call(this, x, y, fillColor, strokeColor);
    _this.width = width;
    _this.height = height;

    _this.setRound(0);

    _this._type = Types.rectangle;
    return _this;
  }

  _createClass(Rectangle, [{
    key: "x",
    get: function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    } // Get the position X relative to the origin
    ,
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    } // Get the position Y relative to the origin
    // Positions Based in the origin
    ,
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.y + this.height;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.x + this.width;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.getLeft() + this.width / 2;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.getTop() + this.height / 2;
    } // Get Real Positions

  }, {
    key: "getRealTop",
    value: function getRealTop() {
      return this._y;
    }
  }, {
    key: "getRealBottom",
    value: function getRealBottom() {
      return this._y + this.height;
    }
  }, {
    key: "getRealLeft",
    value: function getRealLeft() {
      return this._x;
    }
  }, {
    key: "getRealRight",
    value: function getRealRight() {
      return this._x + this.width;
    }
  }, {
    key: "getRealCenterX",
    value: function getRealCenterX() {
      return this.getRealLeft() + this.width / 2;
    }
  }, {
    key: "getRealCenterY",
    value: function getRealCenterY() {
      return this.getRealTop() + this.height / 2;
    } // Size

  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.setSize(width, this.height);
      return this;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.setSize(this.width, height);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.bodyType === "S" && !force) return;
      this.width = width;
      this.height = height;
      return this;
    } // Update position and size of the rectangle

  }, {
    key: "refresh",
    value: function refresh(x, y, width, height) {
      this.setPosition(x, y, this.z, true);
      this.setSize(width, height, true);
      return this;
    } // The rounded corners do not affect the collision detection

  }, {
    key: "setRound",
    value: function setRound() {
      var topLeft = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var topRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : topLeft;
      var bottomLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : topLeft;
      var bottomRight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : topLeft;

      if (typeof topLeft === "number") {
        this.round = {
          topLeft: topLeft,
          topRight: topRight,
          bottomLeft: bottomLeft,
          bottomRight: bottomRight
        };
      } else if (_typeof(topLeft) === "object") {
        this.round = {
          topLeft: topLeft.topLeft || 0,
          topRight: topLeft.topRight || 0,
          bottomLeft: topLeft.bottomLeft || 0,
          bottomRight: topLeft.bottomRight || 0
        };
      }

      return this;
    } // Utils

  }, {
    key: "getBounds",
    value: function getBounds() {
      return {
        x: this.getLeft(),
        y: this.getTop(),
        width: this.width,
        height: this.height
      };
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.width * this.height;
    }
  }, {
    key: "getPerimeter",
    value: function getPerimeter() {
      return 2 * (this.width + this.height);
    }
  }, {
    key: "getVertices",
    value: function getVertices() {
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
    } // ----- Private methods -----

  }, {
    key: "_renderType",
    value: function _renderType() {
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
  }]);

  return Rectangle;
}(GameObject2D);

var Animation = /*#__PURE__*/function () {
  function Animation(parent, name, startFrame, numberOfFrames, speed) {
    var loop = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;

    _classCallCheck(this, Animation);

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

  _createClass(Animation, [{
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(speed) {
      this.speed = speed;
      return this;
    }
  }, {
    key: "setStartFrame",
    value: function setStartFrame(startFrame) {
      this.startFrame = startFrame;
      return this;
    }
  }, {
    key: "setNumberOfFrames",
    value: function setNumberOfFrames(numberOfFrames) {
      this.numberOfFrames = numberOfFrames;
      return this;
    }
  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      this.loop = loop;
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._currentFrame = 0;
      this._currentTime = 0;
      return this;
    } // Private

  }, {
    key: "_update",
    value: function _update(deltaTime) {
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
  }]);

  return Animation;
}();

var Animations = /*#__PURE__*/function () {
  function Animations(parent) {
    _classCallCheck(this, Animations);

    this._parent = parent;
    this.animations = {};
    this.currentAnimation = null;
    this.paused = true;
  }

  _createClass(Animations, [{
    key: "get",
    value: function get(name) {
      return this.animations[name];
    }
  }, {
    key: "add",
    value: function add(name, numberOfFrames, startFrame) {
      var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
      var loop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.animations[name] = new Animation(this._parent, name, startFrame, numberOfFrames, speed, loop);
      return this.get(name);
    }
  }, {
    key: "getAnimationsNames",
    value: function getAnimationsNames() {
      return Object.keys(this.animations);
    }
  }, {
    key: "reset",
    value: function reset(name) {
      this.animations[name].reset();
      return this.get(this.currentAnimation);
    }
  }, {
    key: "play",
    value: function play(name) {
      if (this.currentAnimation) this.currentAnimation.reset();
      this.currentAnimation = this.animations[name];
      this.resume();
      return this.get(this.currentAnimation);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
      return this.get(this.currentAnimation);
    }
  }, {
    key: "resume",
    value: function resume() {
      this.paused = false;
      return this.get(this.currentAnimation);
    }
  }, {
    key: "setName",
    value: function setName(name, newName) {
      return this.animations[name].setName(newName);
    }
  }, {
    key: "setSpeed",
    value: function setSpeed(name, speed) {
      return this.animations[name].setSpeed(speed);
    }
  }, {
    key: "setNumberOfFrames",
    value: function setNumberOfFrames(name, numberOfFrames) {
      return this.animations[name].setNumberOfFrames(numberOfFrames);
    }
  }, {
    key: "setLoop",
    value: function setLoop(name, loop) {
      return this.animations[name].setLoop(loop);
    } // Private

  }, {
    key: "_update",
    value: function _update(deltaTime) {
      if (this.paused) return;
      if (this.currentAnimation) this.currentAnimation._update(deltaTime);
    }
  }]);

  return Animations;
}();

var Sprite = /*#__PURE__*/function (_Rectangle) {
  _inherits(Sprite, _Rectangle);

  var _super = _createSuper(Sprite);

  function Sprite(x, y, key) {
    var _this;

    var frame = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var height = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Sprite);

    _this = _super.call(this, x, y, "#ffffff", "#000000");
    _this.texture = AssetsManagerInstance.getSprite(key);
    _this.frame = frame;
    _this.width = width || AssetsManagerInstance.getSpriteSize(key).width;
    _this.height = height || AssetsManagerInstance.getSpriteSize(key).height;
    _this.animations = new Animations(_assertThisInitialized(_this));
    _this._type = Types.sprite;
    return _this;
  }

  _createClass(Sprite, [{
    key: "x",
    get: function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    } // Get the position X relative to the origin
    ,
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    } // Get the position Y relative to the origin
    ,
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "setFrame",
    value: function setFrame(frame) {
      this.frame = frame;
      return this;
    }
  }, {
    key: "getNumFramesByWidth",
    value: function getNumFramesByWidth() {
      return Math.floor(this.texture.width / this.width);
    } // Private

  }, {
    key: "_renderType",
    value: function _renderType(deltaTime) {
      this.animations._update(deltaTime);

      CanvasStateInstance.context.drawImage(this.texture, // Image
      this.frame * this.width, 0, // Source X, Source Y
      this.width, this.height, // Source Width, Source Height
      this.x, this.y, // Destination X, Destination Y
      this.width, this.height // Destination Width, Destination Height
      );
    }
  }]);

  return Sprite;
}(Rectangle);

var Text = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Text, _GameObject2D);

  var _super = _createSuper(Text);

  function Text(x, y) {
    var _this;

    var text = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
    var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#ffffff";

    _classCallCheck(this, Text);

    _this = _super.call(this, x, y, fillColor, strokeColor);
    _this.text = text;
    _this.fontSize = 30;
    _this.fontFamily = "Arial"; // Arial, Verdana, Times New Roman, Courier New, serif, sans-serif, etc...

    _this.fontStyle = "normal"; // normal, italic, oblique

    _this.fontVariant = "normal"; // normal, small-caps

    _this.fontWeight = "normal"; // normal (400), bold (700), bolder (900), lighter (100), 100, 200, 300, 400, 500, 600, 700, 800, 900

    _this.font = "".concat(_this.fontStyle, " ").concat(_this.fontVariant, " ").concat(_this.fontWeight, " ").concat(_this.fontSize, "px ").concat(_this.fontFamily);
    _this.alignVertical = "top"; // top, middle, bottom // textBaseline

    _this.alignHorizontal = "left"; // left, center, right // textAlign

    _this.direction = "inherit"; // ltr, rtl, inherit

    _this.setStrokeWidth(0);

    _this._type = Types.text;
    return _this;
  }

  _createClass(Text, [{
    key: "width",
    get: function get() {
      if (this.text === "") return 0;
      return CanvasStateInstance.context.measureText(this.text, this.font).width;
    }
  }, {
    key: "height",
    get: function get() {
      if (this.text === "") return 0;
      return this.fontSize;
    }
  }, {
    key: "x",
    get: function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    } // Get the position X relative to the origin
    ,
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    } // Get the position Y relative to the origin
    // Get positions based on the origin
    ,
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.y + this.height;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.x + this.width;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.x + this.width / 2;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.y + this.height / 2;
    } // Get Real Positions

  }, {
    key: "getRealTop",
    value: function getRealTop() {
      return this._y;
    }
  }, {
    key: "getRealBottom",
    value: function getRealBottom() {
      return this._y + this.height;
    }
  }, {
    key: "getRealLeft",
    value: function getRealLeft() {
      return this._x;
    }
  }, {
    key: "getRealRight",
    value: function getRealRight() {
      return this._x + this.width;
    }
  }, {
    key: "getRealCenterX",
    value: function getRealCenterX() {
      return this._x + this.width / 2;
    }
  }, {
    key: "getRealCenterY",
    value: function getRealCenterY() {
      return this._y + this.height / 2;
    }
  }, {
    key: "getWords",
    value: function getWords() {
      return this.text.split(" ");
    }
  }, {
    key: "getWordsNumber",
    value: function getWordsNumber() {
      return this.getWords().length;
    }
  }, {
    key: "getCharacters",
    value: function getCharacters() {
      return this.text.split("");
    }
  }, {
    key: "getCharactersNumber",
    value: function getCharactersNumber() {
      return this.getCharacters().length;
    } // Text

  }, {
    key: "setText",
    value: function setText(text) {
      this.text = text;
      return this;
    } // Font

  }, {
    key: "setFontSize",
    value: function setFontSize(size) {
      this.setFont({
        size: size
      });
      return this;
    }
  }, {
    key: "setFontFamily",
    value: function setFontFamily(family) {
      this.setFont({
        family: family
      });
      return this;
    }
  }, {
    key: "setFontStyle",
    value: function setFontStyle(style) {
      this.setFont({
        style: style
      });
      return this;
    }
  }, {
    key: "setFontVariant",
    value: function setFontVariant(variant) {
      this.setFont({
        variant: variant
      });
      return this;
    }
  }, {
    key: "setFontWeight",
    value: function setFontWeight(weight) {
      this.setFont({
        weight: weight
      });
      return this;
    }
  }, {
    key: "setFont",
    value: function setFont(options) {
      // { size, family, style, variant, weight }
      this.fontSize = options.size || this.fontSize;
      this.fontFamily = options.family || this.fontFamily;
      this.fontStyle = options.style || this.fontStyle;
      this.fontVariant = options.variant || this.fontVariant;
      this.fontWeight = options.weight || this.fontWeight;
      this.font = "".concat(this.fontStyle, " ").concat(this.fontVariant, " ").concat(this.fontWeight, " ").concat(this.fontSize, "px ").concat(this.fontFamily);
      return this;
    } // Align

  }, {
    key: "setAlignVertical",
    value: function setAlignVertical(align) {
      this.alignVertical = align;
      return this;
    }
  }, {
    key: "setAlignHorizontal",
    value: function setAlignHorizontal(align) {
      this.alignHorizontal = align;
      return this;
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this.direction = direction;
      return this;
    } // Private

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasStateInstance.context.textBaseline = this.alignVertical;
      CanvasStateInstance.context.textAlign = this.alignHorizontal;
      CanvasStateInstance.context.direction = this.direction;
      CanvasStateInstance.context.font = this.font;
      CanvasStateInstance.context.fillText(this.text, this.x, this.y);
      CanvasStateInstance.context.strokeText(this.text, this.x, this.y);
    }
  }]);

  return Text;
}(GameObject2D);

var Triangle = /*#__PURE__*/function (_GameObject2D) {
  _inherits(Triangle, _GameObject2D);

  var _super = _createSuper(Triangle);

  function Triangle(x, y, width, height) {
    var _this;

    var fillColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#ffffff";
    var strokeColor = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "#000000";

    _classCallCheck(this, Triangle);

    _this = _super.call(this, x, y, fillColor, strokeColor);
    _this.width = width;
    _this.height = height;
    _this._type = Types.triangle;
    return _this;
  }

  _createClass(Triangle, [{
    key: "x",
    get: // Positions Based in the origin
    function get() {
      return this._x - this.width * this.origin.x * this.scale.x;
    },
    set: function set(x) {
      this.setX(x);
    }
  }, {
    key: "y",
    get: function get() {
      return this._y - this.height * this.origin.y * this.scale.y;
    },
    set: function set(y) {
      this.setY(y);
    }
  }, {
    key: "getTop",
    value: function getTop() {
      return this.y;
    }
  }, {
    key: "getBottom",
    value: function getBottom() {
      return this.y + this.height;
    }
  }, {
    key: "getLeft",
    value: function getLeft() {
      return this.x;
    }
  }, {
    key: "getRight",
    value: function getRight() {
      return this.x + this.width;
    }
  }, {
    key: "getCenterX",
    value: function getCenterX() {
      return this.x + this.width / 2;
    }
  }, {
    key: "getCenterY",
    value: function getCenterY() {
      return this.y + this.height / 2;
    } // Get Real Positions

  }, {
    key: "getRealTop",
    value: function getRealTop() {
      return this._y;
    }
  }, {
    key: "getRealBottom",
    value: function getRealBottom() {
      return this._y + this.height;
    }
  }, {
    key: "getRealLeft",
    value: function getRealLeft() {
      return this._x;
    }
  }, {
    key: "getRealRight",
    value: function getRealRight() {
      return this._x + this.width;
    }
  }, {
    key: "getRealCenterX",
    value: function getRealCenterX() {
      return this._x + this.width / 2;
    }
  }, {
    key: "getRealCenterY",
    value: function getRealCenterY() {
      return this._y + this.height / 2;
    }
  }, {
    key: "setWidth",
    value: function setWidth(width) {
      this.setSize(width, this.height);
      return this;
    }
  }, {
    key: "setHeight",
    value: function setHeight(height) {
      this.setSize(this.width, height);
      return this;
    }
  }, {
    key: "setSize",
    value: function setSize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      this.width = width;
      this.height = height;
      return this;
    } // Calculate the area of the triangle

  }, {
    key: "getArea",
    value: function getArea() {
      return this.width * this.height / 2;
    }
  }, {
    key: "getPerimeter",
    value: function getPerimeter() {
      return this.width * 3;
    }
  }, {
    key: "getVertices",
    value: function getVertices() {
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
    } // Private

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasStateInstance.context.beginPath();
      CanvasStateInstance.context.moveTo(this.x, this.y);
      CanvasStateInstance.context.lineTo(this.x + this.width, this.y);
      CanvasStateInstance.context.lineTo(this.x + this.width / 2, this.y + this.height);
      CanvasStateInstance.context.closePath();
      CanvasStateInstance.context.fill();
      CanvasStateInstance.context.stroke();
    }
  }]);

  return Triangle;
}(GameObject2D);

var GameObjects = /*#__PURE__*/_createClass(function GameObjects() {
  _classCallCheck(this, GameObjects);

  // Basic GameObject
  this.GameObjectBase = GameObject2D;
  this.AudioPlay = AudioPlay;
  this.Circle = Circle;
  this.Line = Line;
  this.Polygon = Polygon;
  this.Rectangle = Rectangle;
  this.Sprite = Sprite;
  this.Text = Text;
  this.Triangle = Triangle; // Others

  this.Types = Types;
});
new GameObjects();

var Keys = {
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
};

var KeyboardManager = /*#__PURE__*/function () {
  function KeyboardManager() {
    _classCallCheck(this, KeyboardManager);

    this.keys = Keys;
    this.isPressed = {};
    window.addEventListener("keydown", this._keyDown.bind(this));
    window.addEventListener("keypress", this._keyPress.bind(this));
    window.addEventListener("keyup", this._keyUp.bind(this));
  }

  _createClass(KeyboardManager, [{
    key: "getNameByKeyCode",
    value: function getNameByKeyCode(keyCode) {
      var _this = this;

      return Object.keys(this.keys).find(function (key) {
        return _this.keys[key] === keyCode;
      });
    }
  }, {
    key: "getKeyCodeByName",
    value: function getKeyCodeByName(name) {
      return this.keys[name];
    }
  }, {
    key: "isKeyPressed",
    value: function isKeyPressed(key) {
      if (typeof key === "string") return this.isKeyPressedName(key);else if (typeof key === "number") return this.isKeyPressedKeyCode(key);
    }
  }, {
    key: "isKeyPressedName",
    value: function isKeyPressedName(name) {
      return !!this.isPressed[name];
    }
  }, {
    key: "isKeyPressedKeyCode",
    value: function isKeyPressedKeyCode(keyCode) {
      return !!this.isPressed[this.getNameByKeyCode(keyCode)];
    } // ----- Private methods -----

  }, {
    key: "_keyDown",
    value: function _keyDown(e) {
      this.isPressed[this.getNameByKeyCode(e.keyCode)] = true;
    }
  }, {
    key: "_keyPress",
    value: function _keyPress(e) {// console.log("keypress", e.keyCode);
    }
  }, {
    key: "_keyUp",
    value: function _keyUp(e) {
      this.isPressed[this.getNameByKeyCode(e.keyCode)] = false;
    }
  }]);

  return KeyboardManager;
}();
new KeyboardManager();

var Mouse = /*#__PURE__*/function () {
  function Mouse() {
    _classCallCheck(this, Mouse);

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
    window.addEventListener("contextmenu", function (e) {
      return e.preventDefault();
    }); // Right click show options
  }

  _createClass(Mouse, [{
    key: "getPosition",
    value: function getPosition() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "getWindowPosition",
    value: function getWindowPosition() {
      return {
        x: this.windowX,
        y: this.windowY
      };
    }
  }, {
    key: "getNameByButtonCode",
    value: function getNameByButtonCode(buttonCode) {
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
  }, {
    key: "getButtonKeyByName",
    value: function getButtonKeyByName(name) {
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
  }, {
    key: "isButtonDown",
    value: function isButtonDown(button) {
      if (typeof button === "string") return this.isButtonDownByName(button);else if (typeof button === "number") return this.isButtonDownByButtonCode(button);
    }
  }, {
    key: "isButtonDownByName",
    value: function isButtonDownByName(name) {
      return !!this.isDown[name];
    }
  }, {
    key: "isButtonDownByButtonCode",
    value: function isButtonDownByButtonCode(buttonCode) {
      return !!this.isDown[this.getNameByButtonCode(buttonCode)];
    } // ----- Private methods -----

  }, {
    key: "_updateMousePosition",
    value: function _updateMousePosition(e) {
      this.windowX = e.clientX;
      this.windowY = e.clientY;
      this.x = this.windowX - CanvasStateInstance.canvas.offsetLeft;
      this.y = this.windowY - CanvasStateInstance.canvas.offsetTop;
    }
  }, {
    key: "_mousemove",
    value: function _mousemove(e) {
      this._updateMousePosition(e);
    }
  }, {
    key: "_mousedown",
    value: function _mousedown(e) {
      this._updateMousePosition(e);

      this.isDown[this.getNameByButtonCode(e.button)] = true;
    }
  }, {
    key: "_mouseup",
    value: function _mouseup(e) {
      this._updateMousePosition(e);

      this.isDown[this.getNameByButtonCode(e.button)] = false;
    }
  }]);

  return Mouse;
}();
new Mouse();

var Inputs = /*#__PURE__*/_createClass(function Inputs() {
  _classCallCheck(this, Inputs);

  this.KeyBoard = new KeyboardManager();
  this.Mouse = new Mouse();
});
new Inputs();

var Utils$1 = /*#__PURE__*/_createClass(function Utils() {
  _classCallCheck(this, Utils);

  this.Assets = new AssetsManager();
  this.Canvas = new CanvasState();
  this.Global = new GlobalStateManager();
});
new Utils$1();

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);

    this.Math = new UtilsMath();
  }

  _createClass(Utils, [{
    key: "getVersion",
    value: function getVersion() {
      return "Impacto: 0.9.0-0";
    }
  }]);

  return Utils;
}();
new Utils();

var Impacto = (function () {
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
    State: new Utils$1(),
    Utils: new Utils()
  };
})();

module.exports = Impacto;
