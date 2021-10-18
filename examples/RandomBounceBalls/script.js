import Impacto from "../../src/Impacto.js";
import Utils from "../../src/Utils/Utils.js";
const utils = new Utils();

const impacto = new Impacto({
	width: 800,
	height: 600,
});

const objects = [];
const randomBalls = utils.randomNumber(10, 100);

for (let i = 0; i < randomBalls; i++) {
	const newCircle = impacto.createCircle(0, 0, utils.randomNumber(2, 20), utils.randomColor());
	newCircle.setRandomPosition();
	newCircle.setVelocity(utils.randomNumber(-5, 5), utils.randomNumber(-5, 5));
	newCircle.setBounce(1);
	newCircle.setCollisionWorldBounds(true);

	objects.map(object => newCircle.addOverlapObject(object));

	objects.push(newCircle);
}

console.log(objects);
