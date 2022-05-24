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
 * @memberof Impacto.GameObjects
 * @constructors
 */
export default class Text {
    constructor(x: any, y: any, text?: string, fillColor?: string, strokeColor?: string);
    text: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    fontVariant: string;
    fontWeight: string;
    font: string;
    alignVertical: string;
    alignHorizontal: string;
    direction: string;
    _type: string;
    /**
     * Returns the width of the text.
     *
     * @returns {number} The width of the text.
     * @memberof Impacto.GameObjects.Text
     */
    get width(): number;
    /**
     * Returns the height of the text.
     *
     * @returns {number} The height of the text.
     * @memberof Impacto.GameObjects.Text
     */
    get height(): number;
    /**
     * Sets the horizontal position of the text.
     *
     * @param {string} align - The horizontal position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    set x(arg: number);
    /**
     * Returns the horizontal position of the text.
     *
     * @returns {number} The horizontal position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    get x(): number;
    /**
     * Sets the vertical position of the text.
     *
     * @param {string} align - The vertical position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    set y(arg: number);
    /**
     * Returns the vertical position of the text.
     *
     * @returns {number} The vertical position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    get y(): number;
    /**
     * @description
     * Returns the top side position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getTop(); // 300
     *
     * @returns {number} The top side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getTop(): number;
    /**
     * @description
     * Returns the bottom side position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getBottom(); // 300
     *
     * @returns {number} The bottom side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getBottom(): number;
    /**
     * @description
     * Returns the left side position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getLeft(); // 400
     *
     * @returns {number} The left side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getLeft(): number;
    /**
     * @description
     * Returns the right side position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRight(); // 400
     *
     * @returns {number} The right side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRight(): number;
    /**
     * @description
     * Returns the horizontal center position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterX(); // 400
     *
     * @returns {number} The horizontal center position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getCenterX(): number;
    /**
     * @description
     * Returns the vertical center position of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getCenterY(); // 300
     *
     * @returns {number} The vertical center position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getCenterY(): number;
    /**
     * @description
     * Returns the real top side position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealTop(); // 300
     *
     * @returns {number} The real top side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealTop(): number;
    /**
     * @description
     * Returns the real bottom side position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealBottom(); // 300
     *
     * @returns {number} The real bottom side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealBottom(): number;
    /**
     * @description
     * Returns the real left side position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealLeft(); // 400
     *
     * @returns {number} The real left side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealLeft(): number;
    /**
     * @description
     * Returns the real right side position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealRight(); // 400
     *
     * @returns {number} The real right side position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealRight(): number;
    /**
     * @description
     * Returns the real horizontal center position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterX(); // 400
     *
     * @returns {number} The real horizontal center position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealCenterX(): number;
    /**
     * @description
     * Returns the real vertical center position of the text. (The position of the text without the offset)
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getRealCenterY(); // 300
     *
     * @returns {number} The real vertical center position of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getRealCenterY(): number;
    /**
     * @description
     * Returns all words of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getWords(); // ["Hello", "World"]
     *
     * @returns {string[]} All words of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getWords(): string[];
    /**
     * @description
     * Returns the number of words of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getWordsCount(); // 2
     *
     * @returns {number} The number of words of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getWordsNumber(): number;
    /**
     * @description
     * Returns all characters of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getCharacters(); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
     *
     * @returns {string[]} All characters of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getCharacters(): string[];
    /**
     * @description
     * Returns the number of characters of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").getCharactersCount(); // 11
     *
     * @returns {number} The number of characters of the text.
     * @memberof Impacto.GameObjects.Text
     */
    getCharactersNumber(): number;
    /**
     * @description
     * Change the display text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setText("MyText");
     *
     * @param {string} text The new text.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setText(text: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the font size.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontSize(20);
     *
     * @param {number} size The new font size.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFontSize(size: number): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the font family.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontFamily("Arial");
     *
     * @param {string} family The new font family.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFontFamily(family: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the font style.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontStyle("italic");
     *
     * @param {string} style The new font style.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFontStyle(style: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the font variant.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontVariant("small-caps");
     *
     * @param {string} variant The new font variant.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFontVariant(variant: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the font weight.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setFontWeight("bold");
     *
     * @param {string} weight The new font weight.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFontWeight(weight: string): Impacto.GameObjects.Text;
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
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setFont(options: any): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the vertical text alignment.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setVerticalAlignment("top");
     *
     * @param {string} align The new text alignment.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setAlignVertical(align: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the horizontal text alignment.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setHorizontalAlignment("left");
     *
     * @param {string} align The new text alignment.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setAlignHorizontal(align: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Change the direction of the text.
     *
     * @example
     * new Impacto.GameObjects.Text(400, 300, "Hello World").setDirection("rtl");
     *
     * @param {string} direction The new text direction.
     * @returns {Impacto.GameObjects.Text} The text object.
     * @memberof Impacto.GameObjects.Text
     */
    setDirection(direction: string): Impacto.GameObjects.Text;
    /**
     * @description
     * Private (Core) function to render the position of the text.
     *
     * @private
     * @readonly
     * @memberof Impacto.GameObjects.Text
     */
    private readonly _renderType;
}
