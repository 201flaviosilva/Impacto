export default class Game {
	constructor(config) {
		this.canvas = document.createElement("canvas");
		this.canvas.width = config.width;
		this.canvas.height = config.height;

		this.context = this.canvas.getContext("2d");

		if (config.parent) document.getElementById(config.parent).appendChild(this.canvas);
		else document.body.appendChild(this.canvas);

		this.configuration = config;

		new config.scene({
			canvas: this.canvas,
			context: this.context,
			configuration: this.configuration,
		});
	}
}
