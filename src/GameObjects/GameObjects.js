// Draw
import GameObjectBase from "./GameObjectBase.js";
import Circle from "./Circle/Circle.js";
import Line from "./Line/Line.js";
import Polygon from "./Polygon/Polygon.js";
import Rectangle from "./Rectangle/Rectangle.js";
import Text from "./Text/Text.js";
import Triangle from "./Triangle/Triangle.js";

// Physics
import PhysicsGameObject from "./PhysicsGameObject.js";
import PhysicsCircle from "./Circle/PhysicsCircle.js";
import PhysicsRectangle from "./Rectangle/PhysicsRectangle.js";

// Others
import Types from "./Types.js";

export default class GameObjects {
	constructor() {
		// Basic GameObject
		this.GameObjectBase = GameObjectBase;
		this.Circle = Circle;
		this.Line = Line;
		this.Polygon = Polygon;
		this.Rectangle = Rectangle;
		this.Text = Text;
		this.Triangle = Triangle;

		// Physics GameObject
		this.PhysicsGameObject = PhysicsGameObject;
		this.PhysicsCircle = PhysicsCircle;
		this.PhysicsRectangle = PhysicsRectangle;

		// Others
		this.Types = Types;
	}
}

export const GameObjectsInstance = new GameObjects();
