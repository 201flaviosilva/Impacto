export default class Scene {
	constructor() {
		this.children = [];
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
}
