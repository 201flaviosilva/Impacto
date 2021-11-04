export default class Scene {
	constructor(data) {
		this.configuration = data.configuration;
		this.canvas = data.canvas;
		this.context = data.context;

		this.children = [];

		this.deltaTime = 0;

		this._lastUpdate = Date.now();

		this.start();
		window.requestAnimationFrame(() => this._step());
	}

	addChild(child) {
		this.children.push(child);
	}
	removeChild(child) {
		const index = this.children.indexOf(child);
		if (index > -1) this.children.splice(index, 1);
	}

	start() { }
	update(delta) { }

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

		this.children.forEach(child => {
			child._step();
		});

		this._render();
		window.requestAnimationFrame(() => this._step());
	}

	_render() {
		if (this.configuration.backgroundColor) {
			this.context.fillStyle = this.configuration.backgroundColor;
			this.context.fillRect(0, 0, this.configuration.width, this.configuration.height);
		} else {
			this.context.clearRect(0, 0, this.configuration.width, this.configuration.height);
		}

		this.children.forEach(child => {
			child._render();
			if (this.configuration.debug) child._debug();
		});
	}
}
