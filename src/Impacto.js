import Rectangle from "./GameObjects/Rectangle.js";
import Circle from "./GameObjects/Circle.js";

export default class Impacto {
	constructor(config) {
		this.canvas = document.createElement("canvas");
		this.canvas.width = config.width;
		this.canvas.height = config.height;
		if (config.parent) document.getElementById(config.parent).appendChild(this.canvas);
		else document.body.appendChild(this.canvas);
		this.context = this.canvas.getContext("2d");

		this.width = config.width;
		this.height = config.height;
		this.backgroundColor = config.backgroundColor;
		this.debug = config.debug;


		this.children = [];

		this.deltaTime = 0;

		this._lastUpdate = Date.now();

		window.requestAnimationFrame(() => this._step());
	}

	createRectangle(x, y, width = 100, height = 100, fillColor = "#00ff00") {
		const rect = new Rectangle(this, x, y, width, height, fillColor);
		this.children.push(rect);
		return rect;
	}

	createCircle(x, y, radius = 10, fillColor = "#00ff00") {
		const circle = new Circle(this, x, y, radius, fillColor);
		this.children.push(circle);
		return circle;
	}

	update() { }


	// ----- Private methods -----
	_updateDeltaTime() {
		const now = Date.now();
		const deltaTime = (now - this._lastUpdate) * 0.01;
		this._lastUpdate = now;
		this.deltaTime = deltaTime;
		return deltaTime;
	}

	_step() {
		this._updateDeltaTime();
		this.update(this.deltaTime);

		for (let i = 0; i < this.children.length; i++) {
			this.children[i]._step();
		}
		this._render();

		window.requestAnimationFrame(() => this._step());
	}

	_render() {
		if (this.backgroundColor) {
			this.context.fillStyle = this.backgroundColor;
			this.context.fillRect(0, 0, this.width, this.height);
		} else {
			this.context.clearRect(0, 0, this.width, this.height);
		}

		for (let i = 0; i < this.children.length; i++) {
			const children = this.children[i];
			children._render();
			if (this.debug) children._debug();
		}
	}
}
