(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.impacto = factory());
})(this, (function () { 'use strict';

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

  var SceneManager = /*#__PURE__*/function () {
    function SceneManager() {
      var _this = this;

      _classCallCheck(this, SceneManager);

      if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
      SceneManager.instance = this;
      this.globalStateManager = new GlobalStateManager();
      this.currentScene = null;
      this.scenes = [];
      this.lastDeltaUpdate = Date.now();
      this.deltaTime = 0;
      window.requestAnimationFrame(function () {
        return _this.step();
      });
    }

    _createClass(SceneManager, [{
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
      key: "updateDeltaTime",
      value: function updateDeltaTime() {
        var now = Date.now();
        var deltaTime = (now - this.lastDeltaUpdate) * 0.01;
        this.lastDeltaUpdate = now;
        this.deltaTime = deltaTime;
        return deltaTime;
      }
    }, {
      key: "step",
      value: function step() {
        var _this2 = this;

        this.updateDeltaTime();

        if (this.currentScene) {
          // Collision
          var layersKeys = Object.keys(this.currentScene.collisions);
          layersKeys.forEach(function (layerKey) {
            var layer = _this2.currentScene.collisions[layerKey];
            layer.forEach(function (gameObject1, index1) {
              layer.forEach(function (gameObject2, index2) {
                if (index1 < index2) {
                  if (gameObject1.checkIsCollidingWith(gameObject2)) {
                    gameObject1.setVelocity((gameObject1.velocity.x - gameObject2.velocity.x) * gameObject1.bounce.x - _this2.globalStateManager.gravity.x, (gameObject1.velocity.y - gameObject2.velocity.y) * gameObject1.bounce.y - _this2.globalStateManager.gravity.y);
                    gameObject2.setVelocity((gameObject2.velocity.x - gameObject1.velocity.x) * gameObject2.bounce.x - _this2.globalStateManager.gravity.x, (gameObject2.velocity.y - gameObject1.velocity.y) * gameObject2.bounce.y - _this2.globalStateManager.gravity.y);
                  }
                }
              });
            });
          });
          this.currentScene.children.forEach(function (child) {
            child._step();
          });
          this.currentScene.update(this.deltaTime);
          this.render();
        }

        window.requestAnimationFrame(function () {
          return _this2.step();
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        if (!this.globalStateManager.context) return;
        this.globalStateManager.context.clearRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);

        if (this.globalStateManager.backgroundColor) {
          this.globalStateManager.context.fillStyle = this.globalStateManager.backgroundColor;
          this.globalStateManager.context.fillRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);
        }

        var zSortedChildren = this.currentScene.children.sort(function (a, b) {
          return a.z - b.z;
        });
        zSortedChildren.forEach(function (child) {
          child._render();

          if (_this3.globalStateManager.debug) child._debug();
        });
      }
    }]);

    return SceneManager;
  }();

  var GlobalStateManager = /*#__PURE__*/function () {
    function GlobalStateManager() {
      _classCallCheck(this, GlobalStateManager);

      if (GlobalStateManager.instance instanceof GlobalStateManager) return GlobalStateManager.instance;
      GlobalStateManager.instance = this;
      this.sceneManager = new SceneManager();
    }

    _createClass(GlobalStateManager, [{
      key: "setConfig",
      value: function setConfig(config) {
        this.parentDom = config.parentDom;
        this.canvas = config.canvas;
        this.context = config.context;
        this.viewportDimensions = {
          width: config.viewportDimensions.width,
          height: config.viewportDimensions.height
        };
        this.backgroundColor = config.backgroundColor;
        this.debug = config.debug;
        this.gravity = config.gravity;
        this.sceneManager.addScene(config.scene);
        this.sceneManager.startScene(0);
      }
    }]);

    return GlobalStateManager;
  }();

  var Game = /*#__PURE__*/_createClass(function Game(config) {
    var _document$getElementB;

    _classCallCheck(this, Game);

    this.canvas = document.createElement("canvas");
    this.canvas.width = config.width;
    this.canvas.height = config.height;
    this.context = this.canvas.getContext("2d");
    if (config.parent) (_document$getElementB = document.getElementById(config.parent)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.appendChild(this.canvas);else document.body.appendChild(this.canvas);
    this.configuration = config;
    if (!config.gravity) config.gravity = {
      x: 0,
      y: 0
    };
    if (config.gravity.x === undefined) config.gravity.x = 0;
    if (config.gravity.y === undefined) config.gravity.y = 0;
    var globalStateManager = new GlobalStateManager();
    globalStateManager.setConfig({
      parentDom: document.getElementById(config.parent),
      canvas: this.canvas,
      context: this.context,
      viewportDimensions: {
        width: config.width,
        height: config.height
      },
      backgroundColor: config.backgroundColor,
      debug: config.debug,
      gravity: config.gravity,
      scene: config.scene
    });
  });

  var Scene = /*#__PURE__*/function () {
    function Scene() {
      _classCallCheck(this, Scene);

      this.children = [];
      this.collisions = {
        layer1: []
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
    }]);

    return Scene;
  }();

  var OverlapDetection = /*#__PURE__*/function () {
    function OverlapDetection() {
      _classCallCheck(this, OverlapDetection);
    }

    _createClass(OverlapDetection, [{
      key: "rectangleAndRectangle",
      value: function rectangleAndRectangle(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width && rect1.x + rect1.width > rect2.x && rect1.y < rect2.y + rect2.height && rect1.y + rect1.height > rect2.y;
      }
    }, {
      key: "rectangleAndCircle",
      value: function rectangleAndCircle(rect, circle) {
        var dx = Math.abs(circle.x - (rect.x + rect.width / 2));
        var dy = Math.abs(circle.y - (rect.y + rect.height / 2));
        if (dx > circle.radius + rect.width / 2) return false;
        if (dy > circle.radius + rect.height / 2) return false;
        if (dx <= rect.width) return true;
        if (dy <= rect.height) return true;
        dx = dx - rect.width;
        dy = dy - rect.height;
        return dx * dx + dy * dy <= circle.radius * circle.radius;
      }
    }, {
      key: "circleAndCircle",
      value: function circleAndCircle(circle1, circle2) {
        var dx = circle1.x - circle2.x;
        var dy = circle1.y - circle2.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance < circle1.radius + circle2.radius;
      }
    }]);

    return OverlapDetection;
  }();

  var Utils = /*#__PURE__*/function () {
    function Utils() {
      _classCallCheck(this, Utils);

      this.overlapDetection = new OverlapDetection();
    }

    _createClass(Utils, [{
      key: "randomNumber",
      value: function randomNumber(min, max) {
        if (!max) {
          max = min;
          min = 0;
        }

        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    }, {
      key: "randomColor",
      value: function randomColor() {
        return "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
      }
    }]);

    return Utils;
  }();

  var PositionPrevisions = /*#__PURE__*/function () {
    function PositionPrevisions() {
      _classCallCheck(this, PositionPrevisions);
    }

    _createClass(PositionPrevisions, [{
      key: "getNextPrevisionTop",
      value: function getNextPrevisionTop(object) {
        if (object._type == "Rect") return object.y + object.velocity.y * object._sceneManager.deltaTime;else if (object._type == "Circle") return object.y - object.radius + object.velocity.y * object._sceneManager.deltaTime;
      }
    }, {
      key: "getNextPrevisionBottom",
      value: function getNextPrevisionBottom(object) {
        if (object._type == "Rect") return object.y + object.height + object.velocity.y * object._sceneManager.deltaTime;else if (object._type == "Circle") return object.y + object.radius + object.velocity.y * object._sceneManager.deltaTime;
      }
    }, {
      key: "getNextPrevisionLeft",
      value: function getNextPrevisionLeft(object) {
        if (object._type == "Rect") return object.x + object.velocity.x * object._sceneManager.deltaTime;else if (object._type == "Circle") return object.x - object.radius + object.velocity.x * object._sceneManager.deltaTime;
      }
    }, {
      key: "getNextPrevisionRight",
      value: function getNextPrevisionRight(object) {
        if (object._type == "Rect") return object.x + object.width + object.velocity.x * object._sceneManager.deltaTime;else if (object._type == "Circle") return object.x + object.radius + object.velocity.x * object._sceneManager.deltaTime;
      }
    }, {
      key: "checkNextPrevisionTopCollisionWorldBounds",
      value: function checkNextPrevisionTopCollisionWorldBounds(object) {
        return this.getNextPrevisionTop(object) <= 0;
      }
    }, {
      key: "checkNextPrevisionBottomCollisionWorldBounds",
      value: function checkNextPrevisionBottomCollisionWorldBounds(object) {
        return this.getNextPrevisionBottom(object) >= object._globalStateManager.viewportDimensions.height;
      }
    }, {
      key: "checkNextPrevisionLeftCollisionWorldBounds",
      value: function checkNextPrevisionLeftCollisionWorldBounds(object) {
        return this.getNextPrevisionLeft(object) <= 0;
      }
    }, {
      key: "checkNextPrevisionRightCollisionWorldBounds",
      value: function checkNextPrevisionRightCollisionWorldBounds(object) {
        return this.getNextPrevisionRight(object) >= object._globalStateManager.viewportDimensions.width;
      }
    }, {
      key: "checkNextPrevisionCollisionWorldBounds",
      value: function checkNextPrevisionCollisionWorldBounds(object) {
        return this.checkNextPrevisionTopCollisionWorldBounds(object) || this.checkNextPrevisionBottomCollisionWorldBounds(object) || this.checkNextPrevisionLeftCollisionWorldBounds(object) || this.checkNextPrevisionRightCollisionWorldBounds(object);
      }
    }, {
      key: "getNextPrevPosition",
      value: function getNextPrevPosition(object) {
        return {
          x: object.x + object.velocity.x * object._sceneManager.deltaTime,
          y: object.y + object.velocity.y * object._sceneManager.deltaTime
        };
      }
    }]);

    return PositionPrevisions;
  }();

  var utils = new Utils();
  var positionPrevisions$2 = new PositionPrevisions();

  var GameObject = /*#__PURE__*/function () {
    function GameObject(x, y, fillColor, strokeColor) {
      _classCallCheck(this, GameObject);

      this._globalStateManager = new GlobalStateManager();
      this._sceneManager = new SceneManager(); // Render

      this.x = x;
      this.y = y;
      this.z = 0;
      this._lastPosition = {
        x: this.x,
        y: this.y,
        z: this.z
      };
      this.fillColor = fillColor;
      this.strokeColor = strokeColor;
      this.visible = true; // Physics

      this.active = true;
      this.immutable = false;
      this.velocity = {
        x: 0,
        y: 0
      };
      this.bounce = {
        x: 0,
        y: 0
      };
      this.friction = {
        x: 1,
        y: 1
      };
      this.collisionWorldBounds = false;
      this.overlapObjects = [];
      this._overlapDetection = utils.overlapDetection;
      this._strokeDebugColor = "#00ff00";
    } // Render
    // Position


    _createClass(GameObject, [{
      key: "setX",
      value: function setX(x) {
        this.setPosition(x, this.y, this.z);
      }
    }, {
      key: "setY",
      value: function setY(y) {
        this.setPosition(this.x, y, this.z);
      }
    }, {
      key: "setZ",
      value: function setZ(z) {
        this.setPosition(this.x, this.y, z);
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
      key: "setPosition",
      value: function setPosition(x, y) {
        var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.z;
        if (this.immutable) return;
        this._lastPosition = {
          x: this.x,
          y: this.y,
          z: this.z
        };
        this.x = x;
        this.y = y;
        this.z = z;
      }
    }, {
      key: "setRandomPosition",
      value: function setRandomPosition() {
        var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._globalStateManager.viewportDimensions.width;
        var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this._globalStateManager.viewportDimensions.height;

        do {
          this.setPosition(x + Math.random() * width, y + Math.random() * height);
        } while (!this.checkIsInsideWorldBounds());
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
      key: "getLeftCenter",
      value: function getLeftCenter() {
        return {
          x: this.getLeft(),
          y: this.getCenterY()
        };
      }
    }, {
      key: "getRightCenter",
      value: function getRightCenter() {
        return {
          x: this.getRight(),
          y: this.getCenterY()
        };
      } // Color

    }, {
      key: "setFillColor",
      value: function setFillColor(fillColor) {
        this.fillColor = fillColor;
      }
    }, {
      key: "setStrokeColor",
      value: function setStrokeColor(strokeColor) {
        this.strokeColor = strokeColor;
      }
    }, {
      key: "setVisible",
      value: function setVisible(isVisible) {
        this.visible = isVisible;
      } // Physics

    }, {
      key: "setActive",
      value: function setActive(isActive) {
        this.active = isActive;
      }
    }, {
      key: "setImmutable",
      value: function setImmutable(isImmutable) {
        this.immutable = isImmutable;
      }
    }, {
      key: "setVelocityX",
      value: function setVelocityX(x) {
        this.setVelocity(x, this.velocity.y);
      }
    }, {
      key: "setVelocityY",
      value: function setVelocityY(y) {
        this.setVelocity(this.velocity.x, y);
      }
    }, {
      key: "setVelocity",
      value: function setVelocity(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
        if (this.immutable) return;
        this.velocity.x = x;
        this.velocity.y = y;
      }
    }, {
      key: "setFrictionX",
      value: function setFrictionX(x) {
        this.setFriction(x, this.friction.y);
      }
    }, {
      key: "setFrictionY",
      value: function setFrictionY(y) {
        this.setFriction(this.friction.x, y);
      }
    }, {
      key: "setFriction",
      value: function setFriction(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
        this.friction.x = x;
        this.friction.y = y;
      }
    }, {
      key: "setBounceX",
      value: function setBounceX(x) {
        this.setBounce(x, this.bounce.y);
      }
    }, {
      key: "setBounceY",
      value: function setBounceY(y) {
        this.setBounce(this.bounce.x, y);
      }
    }, {
      key: "setBounce",
      value: function setBounce(x) {
        var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
        this.bounce.x = x;
        this.bounce.y = y;
      }
    }, {
      key: "setCollisionWorldBounds",
      value: function setCollisionWorldBounds(collisionWorldBounds) {
        this.collisionWorldBounds = collisionWorldBounds;
      }
    }, {
      key: "addOverlapObject",
      value: function addOverlapObject(gameObject) {
        this.overlapObjects.push(gameObject);
      } // Check Current Collision With World Bounds

    }, {
      key: "checkTopCollisionWorldBounds",
      value: function checkTopCollisionWorldBounds() {
        return this.getTop() <= 0;
      }
    }, {
      key: "checkBottomCollisionWorldBounds",
      value: function checkBottomCollisionWorldBounds() {
        return this.getBottom() >= this._globalStateManager.viewportDimensions.height;
      }
    }, {
      key: "checkLeftCollisionWorldBounds",
      value: function checkLeftCollisionWorldBounds() {
        return this.getLeft() <= 0;
      }
    }, {
      key: "checkRightCollisionWorldBounds",
      value: function checkRightCollisionWorldBounds() {
        return this.getRight() >= this._globalStateManager.viewportDimensions.width;
      }
    }, {
      key: "checkCollisionWorldBounds",
      value: function checkCollisionWorldBounds() {
        return this.checkTopCollisionWorldBounds() || this.checkBottomCollisionWorldBounds() || this.checkLeftCollisionWorldBounds() || this.checkRightCollisionWorldBounds();
      }
    }, {
      key: "checkIsInsideWorldBounds",
      value: function checkIsInsideWorldBounds() {
        return this.getLeft() >= 0 && this.getRight() <= this._globalStateManager.viewportDimensions.width && this.getTop() >= 0 && this.getBottom() <= this._globalStateManager.viewportDimensions.height;
      } // ----- Private methods -----

    }, {
      key: "_step",
      value: function _step() {
        if (!this.active) return;

        if (this.collisionWorldBounds) {
          if (positionPrevisions$2.checkNextPrevisionTopCollisionWorldBounds(this) || positionPrevisions$2.checkNextPrevisionBottomCollisionWorldBounds(this)) {
            this.setVelocityY(-(this.velocity.y * this.bounce.y + this._globalStateManager.gravity.y));
          }

          if (positionPrevisions$2.checkNextPrevisionLeftCollisionWorldBounds(this) || positionPrevisions$2.checkNextPrevisionRightCollisionWorldBounds(this)) {
            this.setVelocityX(-(this.velocity.x * this.bounce.x + this._globalStateManager.gravity.x));
          }
        }

        this.setVelocity(this.velocity.x * this.friction.x + this._globalStateManager.gravity.x, this.velocity.y * this.friction.y + this._globalStateManager.gravity.y);
        this.setPosition(this.x + this.velocity.x * this._sceneManager.deltaTime, this.y + this.velocity.y * this._sceneManager.deltaTime);

        this._overlapObjects();
      }
    }, {
      key: "_render",
      value: function _render() {
        if (!this.visible) return;
        this._globalStateManager.context.fillStyle = this.fillColor;
        this._globalStateManager.context.strokeStyle = this.strokeColor;

        this._renderType();
      }
    }, {
      key: "_debug",
      value: function _debug() {
        if (!this.active) return; // this._debugBody();

        this._debugBound();

        this._debugVelocity();
      }
    }, {
      key: "_debugBound",
      value: function _debugBound() {
        this._globalStateManager.context.strokeStyle = "#000000";
        this._globalStateManager.context.fillStyle = "#ffffff";
        var radius = 3;
        drawDebug(this._globalStateManager.context, this.getTopLeft().x, this.getTopLeft().y);
        drawDebug(this._globalStateManager.context, this.getTopCenter().x, this.getTopCenter().y);
        drawDebug(this._globalStateManager.context, this.getTopRight().x, this.getTopRight().y);
        drawDebug(this._globalStateManager.context, this.getLeftCenter().x, this.getLeftCenter().y);
        drawDebug(this._globalStateManager.context, this.getRightCenter().x, this.getRightCenter().y);
        drawDebug(this._globalStateManager.context, this.getBottomLeft().x, this.getBottomLeft().y);
        drawDebug(this._globalStateManager.context, this.getBottomCenter().x, this.getBottomCenter().y);
        drawDebug(this._globalStateManager.context, this.getCenter().x, this.getCenter().y);
        drawDebug(this._globalStateManager.context, this.getBottomRight().x, this.getBottomRight().y);

        function drawDebug(context, x, y) {
          context.beginPath();
          context.arc(x, y, radius, 0, 2 * Math.PI);
          context.fill();
          context.stroke();
        }
      }
    }, {
      key: "_debugVelocity",
      value: function _debugVelocity() {
        this._globalStateManager.context.beginPath();

        this._globalStateManager.context.moveTo(this.getCenterX(), this.getCenterY());

        this._globalStateManager.context.lineTo(this.getCenterX() + this.velocity.x, this.getCenterY() + this.velocity.y);

        this._globalStateManager.context.stroke();
      }
    }]);

    return GameObject;
  }();

  var positionPrevisions$1 = new PositionPrevisions();

  var Rectangle = /*#__PURE__*/function (_GameObject) {
    _inherits(Rectangle, _GameObject);

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
      _this._type = "Rect";
      return _this;
    } // Get Positions


    _createClass(Rectangle, [{
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
      } // Size

    }, {
      key: "setWidth",
      value: function setWidth(width) {
        this.setSize(width, this.height);
      }
    }, {
      key: "setHeight",
      value: function setHeight(height) {
        this.setSize(this.width, height);
      }
    }, {
      key: "setSize",
      value: function setSize(width, height) {
        this.width = width;
        this.height = height;
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        return {
          x: this.getLeft(),
          y: this.getTop(),
          width: this.width,
          height: this.height
        };
      } // Check Overlap

    }, {
      key: "checkTopOverlap",
      value: function checkTopOverlap(obj) {
        return obj.getBottom() >= this.getTop() && obj.getTop() <= this.getTop();
      }
    }, {
      key: "checkBottomOverlap",
      value: function checkBottomOverlap(obj) {
        return obj.getTop() <= this.getBottom() && obj.getBottom() >= this.getBottom();
      }
    }, {
      key: "checkLeftOverlap",
      value: function checkLeftOverlap(obj) {
        return obj.getRight() >= this.getLeft() && obj.getLeft() <= this.getLeft();
      }
    }, {
      key: "checkRightOverlap",
      value: function checkRightOverlap(obj) {
        return obj.getLeft() <= this.getRight() && obj.getRight() >= this.getRight();
      }
    }, {
      key: "checkOverlap",
      value: function checkOverlap(obj) {
        return obj.getLeft() <= this.getRight() && obj.getRight() >= this.getLeft() && obj.getTop() <= this.getBottom() && obj.getBottom() >= this.getTop();
      }
    }, {
      key: "checkIsCollidingWith",
      value: function checkIsCollidingWith(other) {
        var nextPosition = positionPrevisions$1.getNextPrevPosition(this);
        var nextBoxBounds = {
          x: nextPosition.x,
          y: nextPosition.y,
          width: this.width,
          height: this.height
        };
        if (other._type === "Rect") return this._overlapDetection.rectangleAndRectangle(nextBoxBounds, other);else if (other._type === "Circle") return this._overlapDetection.rectangleAndCircle(nextBoxBounds, other);
        return false;
      } // ----- Private methods -----

    }, {
      key: "_overlapObjects",
      value: function _overlapObjects() {
        var _this2 = this;

        this.overlapObjects.map(function (obj) {
          var isColliding;
          if (obj._type === "Rect") isColliding = _this2._overlapDetection.rectangleAndRectangle(_this2, obj);else if (obj._type === "Circle") isColliding = _this2._overlapDetection.rectangleAndCircle(_this2, obj);

          if (isColliding) {
            _this2.setVelocity(0);

            obj.setVelocity(0);
          }
        });
      }
    }, {
      key: "_renderType",
      value: function _renderType() {
        this._globalStateManager.context.fillRect(this.x, this.y, this.width, this.height);

        this._globalStateManager.context.strokeRect(this.x, this.y, this.width, this.height);
      }
    }, {
      key: "_debugBody",
      value: function _debugBody() {
        this._globalStateManager.context.fillStyle = "rgba(0, 0, 0, 0)";
        this._globalStateManager.context.strokeStyle = this._strokeDebugColor;

        this._renderType();
      }
    }]);

    return Rectangle;
  }(GameObject);

  var positionPrevisions = new PositionPrevisions();

  var Circle = /*#__PURE__*/function (_GameObject) {
    _inherits(Circle, _GameObject);

    var _super = _createSuper(Circle);

    function Circle(x, y) {
      var _this;

      var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ffffff";
      var strokeColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";

      _classCallCheck(this, Circle);

      _this = _super.call(this, x, y, fillColor, strokeColor);
      _this.radius = radius;
      _this._type = "Circle";
      return _this;
    }

    _createClass(Circle, [{
      key: "getRadius",
      value: function getRadius() {
        return this.radius;
      }
    }, {
      key: "setRadius",
      value: function setRadius(radius) {
        this.radius = radius;
      }
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
      }
    }, {
      key: "checkIsCollidingWith",
      value: function checkIsCollidingWith(other) {
        var nextPosition = positionPrevisions.getNextPrevPosition(this);
        var nextCircleBounds = {
          x: nextPosition.x - this.radius,
          y: nextPosition.y - this.radius,
          width: this.radius * 2
        };
        if (other._type === "Rect") return this._overlapDetection.rectangleAndCircle(other, nextCircleBounds);else if (other._type === "Circle") return this._overlapDetection.circleAndCircle(nextCircleBounds, other);
        return false;
      } // ----- Private methods -----

    }, {
      key: "_overlapObjects",
      value: function _overlapObjects() {
        var _this2 = this;

        this.overlapObjects.map(function (obj) {
          var isOverlapping;
          if (obj._type === "Rect") isOverlapping = _this2._overlapDetection.rectangleAndCircle(obj, _this2);else if (obj._type === "Circle") isOverlapping = _this2._overlapDetection.circleAndCircle(_this2, obj);

          if (isOverlapping) {
            _this2.setVelocity(0);

            obj.setVelocity(0);
          }
        });
      }
    }, {
      key: "_renderType",
      value: function _renderType() {
        this._globalStateManager.context.beginPath();

        this._globalStateManager.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);

        this._globalStateManager.context.fill();

        this._globalStateManager.context.stroke();
      }
    }, {
      key: "_debugBody",
      value: function _debugBody() {
        if (!this.active) return;
        this._globalStateManager.context.fillStyle = "rgba(0, 0, 0, 0)";
        this._globalStateManager.context.strokeStyle = this._strokeDebugColor;

        this._renderType();
      }
    }]);

    return Circle;
  }(GameObject);

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

  var Mouse = /*#__PURE__*/function () {
    function Mouse() {
      _classCallCheck(this, Mouse);

      this._globalStateManager = new GlobalStateManager();
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
        this.x = this.windowX - this._globalStateManager.canvas.offsetLeft;
        this.y = this.windowY - this._globalStateManager.canvas.offsetTop;
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

  var Inputs = /*#__PURE__*/_createClass(function Inputs() {
    _classCallCheck(this, Inputs);

    this.KeyBoard = new KeyboardManager();
    this.Mouse = new Mouse();
  });

  var Impacto = (function () {
    return {
      Game: Game,
      // Scenes
      Scene: Scene,
      // GameObjects
      Rectangle: Rectangle,
      Circle: Circle,
      // Inputs
      Inputs: new Inputs(),
      // Utils
      Utils: new Utils()
    };
  })();

  return Impacto;

}));
