import GameObject2D from "../GameObject2D.js";
import { CanvasStateInstance } from "../../State/CanvasState.js";
import Types from "../Types.js";

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
export default class Text extends GameObject2D {
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

		this._type = Types.text;
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
	set x(x) { this.setX(x); }

	/**
	 * Sets the vertical position of the text.
	 * 
	 * @param {string} align - The vertical position of the text.
	 * @memberof Text
	 */
	set y(y) { this.setY(y); }

	/**
	 * Returns the horizontal position of the text.
	 * 
	 * @returns {number} The horizontal position of the text.
	 * @memberof Text
	 */
	get x() { return this._x - this.width * this.origin.x * this.scale.x; }

	/**
	 * Returns the vertical position of the text.
	 * 
	 * @returns {number} The vertical position of the text.
	 * @memberof Text
	 */
	get y() { return this._y - this.height * this.origin.y * this.scale.y; }

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
	getTop() { return this.y; }

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
	getBottom() { return this.y + this.height; }

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
	getLeft() { return this.x; }

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
	getRight() { return this.x + this.width; }

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
	getCenterX() { return this.x + this.width / 2; }

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
	getCenterY() { return this.y + this.height / 2; }

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
	getRealTop() { return this._y; }

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
	getRealBottom() { return this._y + this.height; }

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
	getRealLeft() { return this._x; }

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
	getRealRight() { return this._x + this.width; }

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
	getRealCenterX() { return this._x + this.width / 2; }

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
	getRealCenterY() { return this._y + this.height / 2; }

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
	getWords() { return this.text.split(" "); }

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
	getWordsNumber() { return this.getWords().length; }

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
	getCharacters() { return this.text.split(""); }

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
	getCharactersNumber() { return this.getCharacters().length; }


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
		this.setFont({ size });
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
		this.setFont({ family });
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
		this.setFont({ style });
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
		this.setFont({ variant });
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
		this.setFont({ weight });
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
	setFont(options) { // { size, family, style, variant, weight }
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
