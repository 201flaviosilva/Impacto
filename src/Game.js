import GlobalStateManager from "./State/GlobalStateManager.js";
import { CanvasInstance } from "./Utils/Canvas.js";

export default class Game {
	constructor(config) {
		this.canvas = document.createElement("canvas");
		this.canvas.width = config.width;
		this.canvas.height = config.height;

		this.context = this.canvas.getContext("2d");

		if (config.parent) document.getElementById(config.parent)?.appendChild(this.canvas);
		else document.body.appendChild(this.canvas);

		CanvasInstance.setCanvas(this.canvas);

		this.configuration = config;

		if (!config.gravity) config.gravity = { x: 0, y: 0, };
		if (config.gravity.x === undefined) config.gravity.x = 0;
		if (config.gravity.y === undefined) config.gravity.y = 0;

		const globalStateManager = new GlobalStateManager();
		globalStateManager.setConfig({
			parentDom: document.getElementById(config.parent),
			canvas: this.canvas,
			context: this.context,
			viewportDimensions: {
				width: config.width,
				height: config.height,
			},
			backgroundColor: config.backgroundColor,
			debug: config.debug,
			gravity: config.gravity,
			scene: config.scene,
		});
	}
}
