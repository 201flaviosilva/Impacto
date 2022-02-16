// Draw
import GameObjectBase from "./GameObjectBase.js";
import Circle from "./Circle/Circle.js";
import Rectangle from "./Rectangle/Rectangle.js";

// Physics
import PhysicsGameObject from "./PhysicsGameObject.js";
import PhysicsCircle from "./Circle/PhysicsCircle.js";
import PhysicsRectangle from "./Rectangle/PhysicsRectangle.js";

export default class GameObjects {
	constructor() {
		// Basic GameObject
		this.GameObjectBase = GameObjectBase;
		this.Circle = Circle;
		this.Rectangle = Rectangle;

		// Physics GameObject
		this.PhysicsGameObject = PhysicsGameObject;
		this.PhysicsCircle = PhysicsCircle;
		this.PhysicsRectangle = PhysicsRectangle;
	}
}

export const GameObjectsInstance = new GameObjects();
