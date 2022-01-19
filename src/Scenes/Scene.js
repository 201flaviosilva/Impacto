export default class Scene {
	constructor() {
		this.children = [];
		this.collisions = {
			layer1: [],
		};
	}

	addChild(child) {
		this.children.push(child);
	}

	removeChild(child) {
		const index = this.children.indexOf(child);
		if (index > -1) this.children.splice(index, 1);
	}

	createNewCollisionLayer(name) {
		this.collisions[name] = [];
	}

	start() { }
	update(delta) { }
	posRender() { }
}
