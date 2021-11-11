import GlobalStateManager from "./State/GlobalStateManager.js";

export default class Game {
	constructor(config) {
		this.canvas = document.createElement("canvas");
		this.canvas.width = config.width;
		this.canvas.height = config.height;

		this.context = this.canvas.getContext("2d");

		if (config.parent) document.getElementById(config.parent)?.appendChild(this.canvas);
		else document.body.appendChild(this.canvas);

		this.configuration = config;

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
			scene: config.scene,
		});
	}
}
