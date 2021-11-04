console.clear();
import Impacto from "../../src/Impacto.js";

class Game extends Impacto.Scene {
	constructor(data) {
		super(data);
	}

	start() {
		const rect = new Impacto.Rectangle(this, 0, 0, 100, 100);
		rect.setRandomPosition();
		rect.setVelocity(Impacto.Utils.randomNumber(-20, 20), Impacto.Utils.randomNumber(-20, 20));
		rect.setBounce(1);
		rect.setCollisionWorldBounds(true);
		this.addChild(rect);

		const circle = new Impacto.Circle(this, 0, 0, 25);
		circle.setRandomPosition();
		circle.setVelocity(Impacto.Utils.randomNumber(-20, 20), Impacto.Utils.randomNumber(-20, 20));
		circle.setBounce(1);
		circle.setCollisionWorldBounds(true);
		this.addChild(circle);
	}
}

const game = new Impacto.Game({
	width: 800,
	height: 600,
	parent: "GameContainer",
	backgroundColor: "#f0f0f0",
	debug: true,
	scene: Game,
});
