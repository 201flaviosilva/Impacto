import GameObject from "../GameObjectBase.js";
import { CanvasInstance } from "../../Utils/Canvas.js";
import Types from "../Types.js";

export default class Text extends GameObject {
	constructor(x, y, text = "", fillColor = "#ffffff", strokeColor = "#000000") {
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

		this._type = Types.text;
	}

	get width() {
		if (this.text === "") return 0;
		return CanvasInstance.context.measureText(this.text, this.font).width;
	}

	get height() {
		if (this.text === "") return 0;
		return this.fontSize;
	}

	get x() { return this._x - this.width * this.origin.x; } // Get the position X relative to the origin
	get y() { return this._y - this.height * this.origin.y; } // Get the position Y relative to the origin

	// Get positions based on the origin
	getTop() { return this.y; }
	getBottom() { return this.y + this.height; }
	getLeft() { return this.x; }
	getRight() { return this.x + this.width; }
	getCenterX() { return this.x + this.width / 2; }
	getCenterY() { return this.y + this.height / 2; }

	// Get Real Positions
	getRealTop() { return this._y; }
	getRealBottom() { return this._y + this.height; }
	getRealLeft() { return this._x; }
	getRealRight() { return this._x + this.width; }
	getRealCenterX() { return this._x + this.width / 2; }
	getRealCenterY() { return this._y + this.height / 2; }

	getOptions() {
		const opt = {
			font: {
				style: {
					normal: "normal",
					italic: "italic",
					oblique: "oblique",
				},
				variant: {
					normal: "normal",
					smallCaps: "small-caps",
				},
				weight: {
					normal: "normal",
					bold: "bold",
					bolder: "bolder",
					lighter: "lighter",
				},
				family: {
					Arial: "Arial",
					Verdana: "Verdana",
					TimesNewRoman: "Times New Roman",
					CourierNew: "Courier New",
					serif: "serif",
					sansSerif: "sans-serif",
				}
			},
			align: {
				vertical: {
					top: "top",
					middle: "middle",
					bottom: "bottom",
				},
				horizontal: {
					left: "left",
					center: "center",
					right: "right",
				},
			},
			direction: {
				ltr: "ltr",
				rtl: "rtl",
				inherit: "inherit",
			},
		};

		return opt;
	}

	getWords() { return this.text.split(" "); }
	getWordsNumber() { return this.getWords().length; }
	getCharacters() { return this.text.split(""); }
	getCharactersNumber() { return this.getCharacters().length; }


	// Text
	setText(text) {
		this.text = text;
		return this;
	}

	// Font
	setFontSize(size) {
		this.setFont({ size });
		return this;
	}

	setFontFamily(family) {
		this.setFont({ family });
		return this;
	}

	setFontStyle(style) {
		this.setFont({ style });
		return this;
	}

	setFontVariant(variant) {
		this.setFont({ variant });
		return this;
	}

	setFontWeight(weight) {
		this.setFont({ weight });
		return this;
	}

	setFont(options) { // { size, family, style, variant, weight }
		this.fontSize = options.size || this.fontSize;
		this.fontFamily = options.family || this.fontFamily;
		this.fontStyle = options.style || this.fontStyle;
		this.fontVariant = options.variant || this.fontVariant;
		this.fontWeight = options.weight || this.fontWeight;
		this.font = `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
		return this;
	}

	// Align
	setAlignVertical(align) {
		this.alignVertical = align;
		return this;
	}

	setAlignHorizontal(align) {
		this.alignHorizontal = align;
		return this;
	}

	setDirection(direction) {
		this.direction = direction;
		return this;
	}

	// Private
	_renderType() {
		CanvasInstance.context.save();

		CanvasInstance.context.textBaseline = this.alignVertical;
		CanvasInstance.context.textAlign = this.alignHorizontal;
		CanvasInstance.context.direction = this.direction;

		CanvasInstance.context.font = this.font;

		CanvasInstance.context.fillText(this.text, this.x, this.y);
		CanvasInstance.context.strokeText(this.text, this.x, this.y);

		CanvasInstance.context.restore();
	}
}