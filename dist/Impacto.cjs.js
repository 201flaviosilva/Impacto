'use strict';

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

var Vector2 = /*#__PURE__*/function () {
  function Vector2(x, y) {
    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x || 0;
      this.y = y || 0;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector2(this.x, this.y);
    }
  }, {
    key: "add",
    value: function add(vector) {
      return new Vector2(this.x + vector.x, this.y + vector.y);
    }
  }, {
    key: "subtract",
    value: function subtract(vector) {
      return new Vector2(this.x - vector.x, this.y - vector.y);
    }
  }, {
    key: "scale",
    value: function scale(scalar) {
      return new Vector2(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "dot",
    value: function dot(vector) {
      return this.x * vector.x + this.y + vector.y;
    }
  }, {
    key: "moveTowards",
    value: function moveTowards(vector, t) {
      // Linearly interpolates between vectors A and B by t.
      // t = 0 returns A, t = 1 returns B
      t = Math.min(t, 1); // still allow negative t

      var diff = vector.subtract(this);
      return this.add(diff.scale(t));
    }
  }, {
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.magnitudeSqr());
    }
  }, {
    key: "magnitudeSqr",
    value: function magnitudeSqr() {
      return this.x * this.x + this.y * this.y;
    }
  }, {
    key: "distance",
    value: function distance(vector) {
      return Math.sqrt(this.distanceSqr(vector));
    }
  }, {
    key: "distanceSqr",
    value: function distanceSqr(vector) {
      var deltaX = this.x - vector.x;
      var deltaY = this.y - vector.y;
      return deltaX * deltaX + deltaY * deltaY;
    }
  }, {
    key: "normalize",
    value: function normalize() {
      var mag = this.magnitude();
      var vector = this.clone();

      if (Math.abs(mag) < 1e-9) {
        vector.x = 0;
        vector.y = 0;
      } else {
        vector.x /= mag;
        vector.y /= mag;
      }

      return vector;
    }
  }, {
    key: "angle",
    value: function angle() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "rotate",
    value: function rotate(alpha) {
      var cos = Math.cos(alpha);
      var sin = Math.sin(alpha);
      var vector = new Vector2();
      vector.x = this.x * cos - this.y * sin;
      vector.y = this.x * sin + this.y * cos;
      return vector;
    }
  }, {
    key: "toPrecision",
    value: function toPrecision(precision) {
      var vector = this.clone();
      vector.x = vector.x.toFixed(precision);
      vector.y = vector.y.toFixed(precision);
      return vector;
    }
  }, {
    key: "toString",
    value: function toString() {
      var vector = this.toPrecision(1);
      return "[" + vector.x + "; " + vector.y + "]";
    }
  }, {
    key: "zero",
    value: function zero() {
      return new Vector2(0, 0);
    }
  }, {
    key: "one",
    value: function one() {
      return new Vector2(1, 1);
    }
  }, {
    key: "up",
    value: function up() {
      return new Vector2(0, 1);
    }
  }, {
    key: "down",
    value: function down() {
      return new Vector2(0, -1);
    }
  }, {
    key: "left",
    value: function left() {
      return new Vector2(-1, 0);
    }
  }, {
    key: "right",
    value: function right() {
      return new Vector2(1, 0);
    }
  }, {
    key: "random",
    value: function random() {
      return new Vector2(Math.random() - 0.5, Math.random() - 0.5);
    }
  }, {
    key: "randomUnit",
    value: function randomUnit() {
      return Vector2.random().normalize();
    }
    /**
     * @param {Number} min - Object with the minimum values for each axis. ex: { x: 0, y: 0 }
     * @param {Number} max - Object with the maximum values for each axis. ex: { x: 100, y: 100 }
     * @returns {Vector2}
     * @memberof Vector2
     */

  }, {
    key: "randomInRange",
    value: function randomInRange(min, max) {
      return new Vector2(UtilsMathInstance.randomFloat(min.x, max.x), UtilsMathInstance.randomFloat(min.y, max.y));
    }
  }]);

  return Vector2;
}();

var CollisionDetection = /*#__PURE__*/function () {
  function CollisionDetection() {
    _classCallCheck(this, CollisionDetection);
  } // Overlap Detection


  _createClass(CollisionDetection, [{
    key: "checkOverlap",
    value: function checkOverlap(gameObject1, gameObject2) {
      if (gameObject1._type === "Rect" && gameObject2._type === "Rect") {
        // Rectangle vs Rectangle
        return this.overlapRectangleAndRectangle(gameObject1, gameObject2);
      } else if (gameObject1._type === "Circle" && gameObject2._type === "Circle") {
        // Circle vs Circle
        return this.overlapCircleAndCircle(gameObject1, gameObject2);
      } else if (gameObject1._type === "Rect" && gameObject2._type === "Circle") {
        // Rectangle vs Circle
        return this.overlapRectangleAndCircle(gameObject1, gameObject2);
      } else if (gameObject1._type === "Circle" && gameObject2._type === "Rect") {
        // Circle vs Rectangle
        return this.overlapRectangleAndCircle(gameObject2, gameObject1);
      }
    }
  }, {
    key: "overlapRectangleAndRectangle",
    value: function overlapRectangleAndRectangle(rect1, rect2) {
      return rect1.x < rect2.x + rect2.width && // rect1 is to the right of rect2
      rect1.x + rect1.width > rect2.x && // rect1 is to the left of rect2
      rect1.y < rect2.y + rect2.height && // rect1 is below rect2
      rect1.y + rect1.height > rect2.y // rect1 is above rect2
      ;
    }
  }, {
    key: "overlapRectangleAndCircle",
    value: function overlapRectangleAndCircle(rect, circle) {
      var dx = Math.abs(circle.x - (rect.x + rect.width / 2)); // horizontal difference

      var dy = Math.abs(circle.y - (rect.y + rect.height / 2)); // vertical difference

      if (dx > circle.radius + rect.width / 2) return false; // too far on horizontal

      if (dy > circle.radius + rect.height / 2) return false; // too far on vertical

      if (dx <= rect.width) return true; // horizontal is good

      if (dy <= rect.height) return true; // vertical is good

      dx = dx - rect.width; // horizontal difference

      dy = dy - rect.height; // vertical difference

      return dx * dx + dy * dy <= circle.radius * circle.radius; // check if it's inside the corner
    }
  }, {
    key: "overlapCircleAndCircle",
    value: function overlapCircleAndCircle(circle1, circle2) {
      var dx = circle1.x - circle2.x; // horizontal difference

      var dy = circle1.y - circle2.y; // vertical difference

      var distance = Math.sqrt(dx * dx + dy * dy); // distance between two centers

      return distance < circle1.radius + circle2.radius;
    } // Rectangles

  }, {
    key: "getAreaOfTwoOverlappingRectangles",
    value: function getAreaOfTwoOverlappingRectangles(rect1, rect2) {
      if (this.overlapRectangleAndRectangle(rect1, rect2)) {
        var xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
        var yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
        return xOverlap * yOverlap;
      }
    }
  }, {
    key: "getPerimeterOfTwoOverlappingRectangles",
    value: function getPerimeterOfTwoOverlappingRectangles(rect1, rect2) {
      if (this.overlapRectangleAndRectangle(rect1, rect2)) {
        var xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
        var yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
        return xOverlap + yOverlap;
      }
    }
  }, {
    key: "getBoundsOfTwoOverlappingRectangles",
    value: function getBoundsOfTwoOverlappingRectangles(rect1, rect2) {
      if (this.overlapRectangleAndRectangle(rect1, rect2)) {
        var xOverlap = Math.min(rect1.x + rect1.width, rect2.x + rect2.width) - Math.max(rect1.x, rect2.x);
        var yOverlap = Math.min(rect1.y + rect1.height, rect2.y + rect2.height) - Math.max(rect1.y, rect2.y);
        return {
          x: Math.max(rect1.x, rect2.x),
          y: Math.max(rect1.y, rect2.y),
          width: xOverlap,
          height: yOverlap
        };
      }
    } // Collision Detection

  }, {
    key: "detectRectangleAndRectangleCollisionDirections",
    value: function detectRectangleAndRectangleCollisionDirections(rect1, rect2) {
      if (this.overlapRectangleAndRectangle(rect1, rect2)) {
        var bounds = this.getBoundsOfTwoOverlappingRectangles(rect1, rect2);
        var merged = new Vector2(rect1.getCenterX() - UtilsMathInstance.rectangleCenterXFromRectangleBounds(bounds), rect1.getCenterY() - UtilsMathInstance.rectangleCenterYFromRectangleBounds(bounds));
        var mergedN = new Vector2(merged.x, merged.y);
        mergedN.normalize();
        var collisions = [];
        if (mergedN.y > 0.5) collisions.push("TOP");
        if (mergedN.y < -0.5) collisions.push("BOTTOM");
        if (mergedN.x < -0.5) collisions.push("LEFT");
        if (mergedN.x > 0.5) collisions.push("RIGHT");
        return collisions;
      }

      return false;
    }
  }, {
    key: "getRectangleAndRectangleCollisionAxis",
    value: function getRectangleAndRectangleCollisionAxis(staticReact, dynamicReact) {
      // https://www.youtube.com/watch?v=LYrge3ylccQ
      var differenceCentersX = dynamicReact.getCenterX() - staticReact.getCenterX();
      var differenceCentersY = dynamicReact.getCenterY() - staticReact.getCenterY();

      if (Math.abs(differenceCentersX / staticReact.width) > Math.abs(differenceCentersY / staticReact.height)) {
        if (differenceCentersX < 0) return "LEFT";else return "RIGHT";
      } else {
        if (differenceCentersY < 0) return "TOP";else return "BOTTOM";
      }
    }
  }, {
    key: "collisionLayer",
    value: function collisionLayer(layer, scene) {
      var _this = this;

      layer.forEach(function (gameObject1, index1) {
        layer.forEach(function (gameObject2, index2) {
          if (index1 >= index2 || !_this.checkOverlap(gameObject1, gameObject2)) return;

          _this.collisionResponse(gameObject1, gameObject2);
        });
      });
    } // Collision Resolve

  }, {
    key: "collisionResponse",
    value: function collisionResponse(gameObject1, gameObject2) {
      if (gameObject1._type === "Rect" && gameObject2._type === "Rect") {
        // Rectangle vs Rectangle
        if (gameObject1.bodyType === "D" && gameObject2.bodyType === "D") {
          // Dynamic vs Dynamic
          this.collisionResponseDynamicRectRect(gameObject1, gameObject2);
        } else if (gameObject1.bodyType === "D" && gameObject2.bodyType === "S") {
          // Dynamic vs Static
          this.collisionResponseDynamicRectStaticRect(gameObject1, gameObject2);
        } else if (gameObject1.bodyType === "S" && gameObject2.bodyType === "D") {
          // Static vs Dynamic
          this.collisionResponseDynamicRectStaticRect(gameObject2, gameObject1);
        }
      } else if (gameObject1._type === "Circle" && gameObject2._type === "Circle") {
        // Circle vs Circle
        if (gameObject1.bodyType === "D" && gameObject2.bodyType === "D") {
          // Dynamic vs Dynamic
          this.collisionResponseDynamicCircleCircle(gameObject1, gameObject2);
        }
      }
    }
  }, {
    key: "collisionResponseDynamicRectRect",
    value: function collisionResponseDynamicRectRect(dynamicReact1, dynamicReact2) {
      // https://spicyyoghurt.com/tutorials/html5-javascript-game-development/collision-detection-physics
      var vCollision = {
        x: dynamicReact2.x - dynamicReact1.x,
        y: dynamicReact2.y - dynamicReact1.y
      };
      var distance = Math.sqrt((dynamicReact2.x - dynamicReact1.x) * (dynamicReact2.x - dynamicReact1.x) + (dynamicReact2.y - dynamicReact1.y) * (dynamicReact2.y - dynamicReact1.y));
      var vCollisionNorm = {
        x: vCollision.x / distance,
        y: vCollision.y / distance
      };
      var vRelativeVelocity = {
        x: dynamicReact1.velocity.x - dynamicReact2.velocity.x,
        y: dynamicReact1.velocity.y - dynamicReact2.velocity.y
      };
      var speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
      if (speed < 0) return;
      var impulse = 2 * speed / (dynamicReact1.mass + dynamicReact2.mass);
      dynamicReact1.velocity.x -= impulse * dynamicReact2.mass * vCollisionNorm.x * dynamicReact1.bounce.x;
      dynamicReact1.velocity.y -= impulse * dynamicReact2.mass * vCollisionNorm.y * dynamicReact1.bounce.y;
      dynamicReact2.velocity.x += impulse * dynamicReact1.mass * vCollisionNorm.x * dynamicReact2.bounce.x;
      dynamicReact2.velocity.y += impulse * dynamicReact1.mass * vCollisionNorm.y * dynamicReact2.bounce.y;
    }
  }, {
    key: "collisionResponseDynamicRectStaticRect",
    value: function collisionResponseDynamicRectStaticRect(dynamicReact, staticReact) {
      var direction = this.getRectangleAndRectangleCollisionAxis(staticReact, dynamicReact);
      this.collisionPerpetrationResolveDynamicRectStaticRect(dynamicReact, staticReact, direction);
      var gravityX = GlobalStateManagerInstance.gravity.x;
      var gravityY = GlobalStateManagerInstance.gravity.y;

      if (direction === "TOP" || direction === "BOTTOM") {
        // Vertical
        dynamicReact.setVelocityY(dynamicReact.velocity.y * -1 * dynamicReact.bounce.y - gravityY);
      } else if (direction === "LEFT" || direction === "RIGHT") {
        // Horizontal
        dynamicReact.setVelocityX(dynamicReact.velocity.x * -1 * dynamicReact.bounce.x - gravityX);
      }
    } // Collision Perpetration Resolve

  }, {
    key: "collisionPerpetrationResolveDynamicRectStaticRect",
    value: function collisionPerpetrationResolveDynamicRectStaticRect(dynamicReact, staticReact, direction) {
      if (direction === "LEFT") dynamicReact.setX(staticReact.x - dynamicReact.width);else if (direction === "RIGHT") dynamicReact.setX(staticReact.x + staticReact.width);else if (direction === "TOP") dynamicReact.setY(staticReact.y - dynamicReact.height);else if (direction === "BOTTOM") dynamicReact.setY(staticReact.y + staticReact.height);
    }
  }, {
    key: "collisionResponseDynamicCircleCircle",
    value: function collisionResponseDynamicCircleCircle(dynamicCircle1, dynamicCircle2) {
      return;
    }
  }]);

  return CollisionDetection;
}();
var CollisionDetectionInstance = new CollisionDetection();

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    if (Canvas.instance instanceof Canvas) return Canvas.instance;
    Canvas.instance = this;
    this.canvas = null;
    this.context = null;
  }

  _createClass(Canvas, [{
    key: "setCanvas",
    value: function setCanvas(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
    }
  }, {
    key: "drawText",
    value: function drawText(text, x, y) {
      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
      var center = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 20;
      var font = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "Arial";
      this.context.fillStyle = color;
      this.textBaseline = center ? "middle" : "top";
      this.context.textAlign = center ? "center" : "left";
      this.context.font = "".concat(size, "px ").concat(font);
      this.context.fillText(text, x, y);
    }
  }]);

  return Canvas;
}();
var CanvasInstance = new Canvas();

var SceneManager = /*#__PURE__*/function () {
  function SceneManager() {
    var _this = this;

    _classCallCheck(this, SceneManager);

    if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
    SceneManager.instance = this;
    this.currentScene = null;
    this.scenes = [];
    this.lastDeltaUpdate = Date.now();
    this.deltaTime = 0;
    this.isPaused = false;
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

      window.requestAnimationFrame(function () {
        return _this2.step();
      });
      if (this.isPaused) return;
      this.updateDeltaTime();

      if (this.currentScene) {
        // Collision
        var layersKeys = Object.keys(this.currentScene.collisions);
        layersKeys.forEach(function (layerKey) {
          var layer = _this2.currentScene.collisions[layerKey];
          CollisionDetectionInstance.collisionLayer(layer, _this2.currentScene);
        });
        this.currentScene.children.forEach(function (child) {
          child._step();
        });
        this.currentScene.update(this.deltaTime);
        this.render();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var ctx = CanvasInstance.context;
      if (!ctx) return;
      ctx.clearRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);

      if (GlobalStateManagerInstance.backgroundColor) {
        ctx.fillStyle = GlobalStateManagerInstance.backgroundColor;
        ctx.fillRect(0, 0, GlobalStateManagerInstance.viewportDimensions.width, GlobalStateManagerInstance.viewportDimensions.height);
      }

      var zSortedChildren = this.currentScene.children.sort(function (a, b) {
        return a.z - b.z;
      });
      zSortedChildren.forEach(function (child) {
        child._render();

        if (GlobalStateManagerInstance.debug) child._debug();
      });
      this.currentScene.posRender(ctx);
    }
  }]);

  return SceneManager;
}();
var SceneManagerInstance = new SceneManager();

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
var GlobalStateManagerInstance = new GlobalStateManager();

var Game = /*#__PURE__*/_createClass(function Game(config) {
  var _document$getElementB;

  _classCallCheck(this, Game);

  this.canvas = document.createElement("canvas");
  this.canvas.width = config.width;
  this.canvas.height = config.height;
  this.context = this.canvas.getContext("2d");
  if (config.parent) (_document$getElementB = document.getElementById(config.parent)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.appendChild(this.canvas);else document.body.appendChild(this.canvas);
  CanvasInstance.setCanvas(this.canvas);
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
    key: "addObjectLayer",
    value: function addObjectLayer(object, layerName) {
      this.collisions[layerName].push(object);
    } // TODO: check if layer exists and object is not already in it

  }, {
    key: "removeObjectLayer",
    value: function removeObjectLayer(object, layerName) {
      // TODO: check if layer exists and object exists in it
      var index = this.collisions[layerName].indexOf(object);
      if (index > -1) this.collisions[layerName].splice(index, 1);
    }
  }, {
    key: "createNewCollisionLayer",
    value: function createNewCollisionLayer(name) {
      this.collisions[name] = [];
    }
  }, {
    key: "start",
    value: function start() {}
  }, {
    key: "update",
    value: function update(delta) {}
  }, {
    key: "posRender",
    value: function posRender(ctx) {}
  }]);

  return Scene;
}();

var PositionPrevisions = /*#__PURE__*/function () {
  function PositionPrevisions() {
    _classCallCheck(this, PositionPrevisions);
  }

  _createClass(PositionPrevisions, [{
    key: "getNextPrevisionTop",
    value: function getNextPrevisionTop(object) {
      if (object._type == "Rect") return object.y + object.velocity.y * SceneManagerInstance.deltaTime;else if (object._type == "Circle") return object.y - object.radius + object.velocity.y * SceneManagerInstance.deltaTime;
    }
  }, {
    key: "getNextPrevisionBottom",
    value: function getNextPrevisionBottom(object) {
      if (object._type == "Rect") return object.y + object.height + object.velocity.y * SceneManagerInstance.deltaTime;else if (object._type == "Circle") return object.y + object.radius + object.velocity.y * SceneManagerInstance.deltaTime;
    }
  }, {
    key: "getNextPrevisionLeft",
    value: function getNextPrevisionLeft(object) {
      if (object._type == "Rect") return object.x + object.velocity.x * SceneManagerInstance.deltaTime;else if (object._type == "Circle") return object.x - object.radius + object.velocity.x * SceneManagerInstance.deltaTime;
    }
  }, {
    key: "getNextPrevisionRight",
    value: function getNextPrevisionRight(object) {
      if (object._type == "Rect") return object.x + object.width + object.velocity.x * SceneManagerInstance.deltaTime;else if (object._type == "Circle") return object.x + object.radius + object.velocity.x * SceneManagerInstance.deltaTime;
    }
  }, {
    key: "checkNextPrevisionTopCollisionWorldBounds",
    value: function checkNextPrevisionTopCollisionWorldBounds(object) {
      return this.getNextPrevisionTop(object) <= 0;
    }
  }, {
    key: "checkNextPrevisionBottomCollisionWorldBounds",
    value: function checkNextPrevisionBottomCollisionWorldBounds(object) {
      return this.getNextPrevisionBottom(object) >= GlobalStateManagerInstance.viewportDimensions.height;
    }
  }, {
    key: "checkNextPrevisionLeftCollisionWorldBounds",
    value: function checkNextPrevisionLeftCollisionWorldBounds(object) {
      return this.getNextPrevisionLeft(object) <= 0;
    }
  }, {
    key: "checkNextPrevisionRightCollisionWorldBounds",
    value: function checkNextPrevisionRightCollisionWorldBounds(object) {
      return this.getNextPrevisionRight(object) >= GlobalStateManagerInstance.viewportDimensions.width;
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
        x: object.x + object.velocity.x * SceneManagerInstance.deltaTime,
        y: object.y + object.velocity.y * SceneManagerInstance.deltaTime
      };
    }
  }]);

  return PositionPrevisions;
}();
var PositionPrevisionsInstance = new PositionPrevisions();

var GameObject = /*#__PURE__*/function () {
  function GameObject(x, y, fillColor, strokeColor) {
    _classCallCheck(this, GameObject);

    this.id = Math.random(); // Render

    this.x = x;
    this.y = y;
    this.z = 0;
    this.lastPosition = {
      x: this.x,
      y: this.y,
      z: this.z
    };
    this.fillColor = fillColor;
    this.strokeColor = strokeColor;
    this.visible = true; // Physics

    this.active = true;
    this.bodyType = "D"; // D = Dynamic, K = Kinematic, S = Static

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
    this.mass = 1;
    this.collisionWorldBounds = false;
    this._strokeDebugColor = "#016301";
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
      var force = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (this.bodyType === "S" && !force) return;
      this.lastPosition = {
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
      var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GlobalStateManagerInstance.viewportDimensions.width;
      var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GlobalStateManagerInstance.viewportDimensions.height;

      do {
        this.setPosition(x + Math.random() * width, y + Math.random() * height);
      } while (!this.checkIsInsideWorldBounds());
    }
  }, {
    key: "getType",
    value: function getType() {
      return this._type;
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
    } // -- Physics

  }, {
    key: "setActive",
    value: function setActive(isActive) {
      this.active = isActive;
    } // Body Type

  }, {
    key: "setDynamicBody",
    value: function setDynamicBody() {
      this.setBodyType("D");
    }
  }, {
    key: "setKinematicBody",
    value: function setKinematicBody() {
      this.setBodyType("K");
    }
  }, {
    key: "setStaticBody",
    value: function setStaticBody() {
      this.setBodyType("S");
    }
  }, {
    key: "setBodyType",
    value: function setBodyType(bodyType) {
      // D = Dynamic, K = Kinematic, S = Static
      if (typeof bodyType !== "string" || this.bodyType === bodyType || bodyType.length > 1) return;
      bodyType = bodyType.toUpperCase();

      if (bodyType === "S") {
        // Reset Static Body
        this.setVelocity(0);
        this.setFriction(0);
        this.setBounce(0);
      }

      this.bodyType = bodyType;
    }
  }, {
    key: "getBodyType",
    value: function getBodyType() {
      return this.bodyType;
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
      if (this.bodyType === "S") return;
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
    key: "setMass",
    value: function setMass(mass) {
      this.mass = mass;
    }
  }, {
    key: "setCollisionWorldBounds",
    value: function setCollisionWorldBounds(collisionWorldBounds) {
      this.collisionWorldBounds = collisionWorldBounds;
    } // Check Current Collision With World Bounds

  }, {
    key: "checkTopCollisionWorldBounds",
    value: function checkTopCollisionWorldBounds() {
      return this.getTop() <= 0;
    }
  }, {
    key: "checkBottomCollisionWorldBounds",
    value: function checkBottomCollisionWorldBounds() {
      return this.getBottom() >= GlobalStateManagerInstance.viewportDimensions.height;
    }
  }, {
    key: "checkLeftCollisionWorldBounds",
    value: function checkLeftCollisionWorldBounds() {
      return this.getLeft() <= 0;
    }
  }, {
    key: "checkRightCollisionWorldBounds",
    value: function checkRightCollisionWorldBounds() {
      return this.getRight() >= GlobalStateManagerInstance.viewportDimensions.width;
    }
  }, {
    key: "checkCollisionWorldBounds",
    value: function checkCollisionWorldBounds() {
      return this.checkTopCollisionWorldBounds() || this.checkBottomCollisionWorldBounds() || this.checkLeftCollisionWorldBounds() || this.checkRightCollisionWorldBounds();
    }
  }, {
    key: "checkIsInsideWorldBounds",
    value: function checkIsInsideWorldBounds() {
      return this.getLeft() >= 0 && this.getRight() <= GlobalStateManagerInstance.viewportDimensions.width && this.getTop() >= 0 && this.getBottom() <= GlobalStateManagerInstance.viewportDimensions.height;
    } // ----- Private methods -----

  }, {
    key: "_step",
    value: function _step() {
      if (!this.active || this.bodyType === "S") return;

      if (this.collisionWorldBounds) {
        if (PositionPrevisionsInstance.checkNextPrevisionTopCollisionWorldBounds(this) || PositionPrevisionsInstance.checkNextPrevisionBottomCollisionWorldBounds(this)) {
          this.setVelocityY(-(this.velocity.y * this.bounce.y + GlobalStateManagerInstance.gravity.y));
        }

        if (PositionPrevisionsInstance.checkNextPrevisionLeftCollisionWorldBounds(this) || PositionPrevisionsInstance.checkNextPrevisionRightCollisionWorldBounds(this)) {
          this.setVelocityX(-(this.velocity.x * this.bounce.x + GlobalStateManagerInstance.gravity.x));
        }
      }

      this.setVelocity(this.velocity.x * this.friction.x + GlobalStateManagerInstance.gravity.x, this.velocity.y * this.friction.y + GlobalStateManagerInstance.gravity.y);
      this.setPosition(this.x + this.velocity.x * SceneManagerInstance.deltaTime, this.y + this.velocity.y * SceneManagerInstance.deltaTime);
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.visible) return;
      CanvasInstance.context.fillStyle = this.fillColor;
      CanvasInstance.context.strokeStyle = this.strokeColor;

      this._renderType();
    }
  }, {
    key: "_debug",
    value: function _debug() {
      if (!this.active) return; // this._debugBody();

      this._debugVelocity();
    }
  }, {
    key: "_debugVelocity",
    value: function _debugVelocity() {
      CanvasInstance.context.strokeStyle = this._strokeDebugColor;
      CanvasInstance.context.beginPath();
      CanvasInstance.context.moveTo(this.getCenterX(), this.getCenterY());
      CanvasInstance.context.lineTo(this.getCenterX() + this.velocity.x * 5, this.getCenterY() + this.velocity.y * 5);
      CanvasInstance.context.stroke();
    }
  }]);

  return GameObject;
}();

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
    value: function setSize(width) {
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      if (this.bodyType === "S" && !force) return;
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
    }
  }, {
    key: "getArea",
    value: function getArea() {
      return this.width * this.height;
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
    } // Update position and size of the rectangle (used mostly in static objects)

  }, {
    key: "refresh",
    value: function refresh(x, y, width, height) {
      this.setPosition(x, y, this.z, true);
      this.setSize(width, height, true);
    } // ----- Private methods -----

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasInstance.context.fillRect(this.x, this.y, this.width, this.height);
      CanvasInstance.context.strokeRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "_debugBody",
    value: function _debugBody() {
      CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
      CanvasInstance.context.strokeStyle = this._strokeDebugColor;

      this._renderType();
    }
  }]);

  return Rectangle;
}(GameObject);

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
    } // ----- Private methods -----

  }, {
    key: "_renderType",
    value: function _renderType() {
      CanvasInstance.context.beginPath();
      CanvasInstance.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      CanvasInstance.context.fill();
      CanvasInstance.context.stroke();
    }
  }, {
    key: "_debugBody",
    value: function _debugBody() {
      if (!this.active) return;
      CanvasInstance.context.fillStyle = "rgba(0, 0, 0, 0)";
      CanvasInstance.context.strokeStyle = this._strokeDebugColor;

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
new KeyboardManager();

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
new Mouse();

var Inputs = /*#__PURE__*/_createClass(function Inputs() {
  _classCallCheck(this, Inputs);

  this.KeyBoard = new KeyboardManager();
  this.Mouse = new Mouse();
});
new Inputs();

var Utils = /*#__PURE__*/_createClass(function Utils() {
  _classCallCheck(this, Utils);

  this.Canvas = new Canvas();
  this.CollisionDetection = new CollisionDetection();
  this.Math = new UtilsMath();
  this.Vector2 = Vector2;
});
new Utils();

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

module.exports = Impacto;
