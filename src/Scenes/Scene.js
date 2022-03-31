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

	addObjectLayer(object, layerName) { this.collisions[layerName].push(object); } // TODO: check if layer exists and object is not already in it
	removeObjectLayer(object, layerName) { // TODO: check if layer exists and object exists in it
		const index = this.collisions[layerName].indexOf(object);
		if (index > -1) this.collisions[layerName].splice(index, 1);
	}

	createNewCollisionLayer(name) {
		this.collisions[name] = [];
	}

	start() { }
	update(delta) { }
	posRender(context) { }
}
