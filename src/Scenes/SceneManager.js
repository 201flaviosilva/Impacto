import GlobalStateManager from "../State/GlobalStateManager.js";

export default class SceneManager {
	constructor() {
		if (SceneManager.instance instanceof SceneManager) return SceneManager.instance;
		SceneManager.instance = this;

		this.globalStateManager = new GlobalStateManager();

		this.currentScene = null;
		this.scenes = [];
		this.lastDeltaUpdate = Date.now();
		this.deltaTime = 0;

		window.requestAnimationFrame(() => this.step());
	}

	addScene(scene) {
		const newScene = new scene();
		this.scenes.push(newScene);
	}

	startScene(index) {
		this.currentScene = this.scenes[index];
		this.currentScene.start();
	}

	updateDeltaTime() {
		const now = Date.now();
		const deltaTime = (now - this.lastDeltaUpdate) * 0.01;
		this.lastDeltaUpdate = now;
		this.deltaTime = deltaTime;
		return deltaTime;
	}

	step() {
		this.updateDeltaTime();

		if (this.currentScene) {
			// Collision
			const layersKeys = Object.keys(this.currentScene.collisions);
			layersKeys.forEach(layerKey => {
				const layer = this.currentScene.collisions[layerKey];
				layer.forEach((gameObject1, index1) => {
					layer.forEach((gameObject2, index2) => {
						if (index1 < index2) {
							const lastGameObject1XVelocity = gameObject1.velocity.x;
							const lastGameObject1YVelocity = gameObject1.velocity.y;
							const lastGameObject2XVelocity = gameObject2.velocity.x;
							const lastGameObject2YVelocity = gameObject2.velocity.y;

							// Vertical
							if (gameObject1.checkWillCollideVerticalWith(gameObject2)) {

								gameObject1.setVelocityY(
									lastGameObject2YVelocity * gameObject1.bounce.y - this.globalStateManager.gravity.y
								);

								gameObject2.setVelocityY(
									lastGameObject1YVelocity * gameObject2.bounce.y - this.globalStateManager.gravity.y,
								);
							}

							// Horizontal
							if (gameObject1.checkWillCollideHorizontalWith(gameObject2)) {
								gameObject1.setVelocityX(
									lastGameObject2XVelocity * gameObject1.bounce.x - this.globalStateManager.gravity.x
								);

								gameObject2.setVelocityX(
									lastGameObject1XVelocity * gameObject2.bounce.x - this.globalStateManager.gravity.x,
								);
							}
						}
					});
				});
			});

			this.currentScene.children.forEach(child => {
				child._step();
			});

			this.currentScene.update(this.deltaTime);

			this.render();
		}

		window.requestAnimationFrame(() => this.step());
	}

	render() {
		if (!this.globalStateManager.context) return;

		this.globalStateManager.context.clearRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);

		if (this.globalStateManager.backgroundColor) {
			this.globalStateManager.context.fillStyle = this.globalStateManager.backgroundColor;
			this.globalStateManager.context.fillRect(0, 0, this.globalStateManager.viewportDimensions.width, this.globalStateManager.viewportDimensions.height);
		}

		const zSortedChildren = this.currentScene.children.sort((a, b) => a.z - b.z);
		zSortedChildren.forEach(child => {
			child._render();
			if (this.globalStateManager.debug) child._debug();
		});
	}
}
