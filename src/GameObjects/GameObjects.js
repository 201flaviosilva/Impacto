// Draw
import GameObjectBase from "./GameObject2D.js";
import AudioPlay from "./AudioPlay/AudioPlay.js";
import Circle from "./Circle/Circle.js";
import Line from "./Line/Line.js";
import Polygon from "./Polygon/Polygon.js";
import Rectangle from "./Rectangle/Rectangle.js";
import Sprite from "./Sprite/Sprite.js";
import Text from "./Text/Text.js";
import Triangle from "./Triangle/Triangle.js";


// Others
import Types from "./Types.js";

export default class GameObjects {
	constructor() {
		// Basic GameObject
		this.GameObjectBase = GameObjectBase;
		this.AudioPlay = AudioPlay;
		this.Circle = Circle;
		this.Line = Line;
		this.Polygon = Polygon;
		this.Rectangle = Rectangle;
		this.Sprite = Sprite;
		this.Text = Text;
		this.Triangle = Triangle;

		// Others
		this.Types = Types;
	}
}

export const GameObjectsInstance = new GameObjects();
