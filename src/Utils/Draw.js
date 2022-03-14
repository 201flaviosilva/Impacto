import { CanvasStateInstance } from "../State/CanvasState.js";

export default class Draw {
	text(text, x, y, color = "#000000", center = true, size = 20, font = "Arial") {
		CanvasStateInstance.context.fillStyle = color;
		this.textBaseline = center ? "middle" : "top";
		CanvasStateInstance.context.textAlign = center ? "center" : "left";
		CanvasStateInstance.context.font = `${size}px ${font}`;
		CanvasStateInstance.context.fillText(text, x, y);
	}
}

export const DrawInstance = new Draw();
