export default class Scene {
	constructor() {
		this.children = [];
		this.collisions = {
			layer1: [],
		};

		this.time = {
			delta: 0,
			deltaTime: 0,
			fps: 0,
			gameTime: 0,
		}
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
	posRender(context) { }
}
