import GameObjectBase from "./GameObject2D.js";
import AudioPlay from "./AudioPlay/AudioPlay.js";
import Circle from "./Circle/Circle.js";
import Line from "./Line/Line.js";
import Polygon from "./Polygon/Polygon.js";
import Rectangle from "./Rectangle/Rectangle.js";
import Sprite from "./Sprite/Sprite.js";
import Text from "./Text/Text.js";
import Triangle from "./Triangle/Triangle.js";

import Types from "./Types.js";

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
export default class GameObjects {
	constructor() {
		this.GameObjectBase = GameObjectBase;

		this.AudioPlay = AudioPlay;
		this.Circle = Circle;
		this.Line = Line;
		this.Polygon = Polygon;
		this.Rectangle = Rectangle;
		this.Sprite = Sprite;
		this.Text = Text;
		this.Triangle = Triangle;

		this.Types = Types;
	}
}
export const GameObjectsInstance = new GameObjects();
