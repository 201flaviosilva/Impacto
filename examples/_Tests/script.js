import Impacto from "../../src/Impacto.js";
import Utils from "../../src/Utils/Utils.js";

const impacto = new Impacto({
	width: 800,
	height: 600,
	parent: "gameDiv",
	backgroundColor: "#f0f0f0",
	debug: true,
});

const myRect1 = impacto.createRectangle(100, 100, 50, 50, "#ff0000");
myRect1.setVelocity(5, 5);
myRect1.setCollisionWorldBounds(true);
myRect1.setBounce(0.5);
myRect1.setVisible(false);
myRect1.setActive(false);

const myCircle1 = impacto.createCircle(200, 200, 10, "#0000ff");
myCircle1.setVelocity(5, 5);
myCircle1.setCollisionWorldBounds(true);
myCircle1.setBounce(0.5);
setTimeout(() => myCircle1.setVisible(false), 1000);
setTimeout(() => myCircle1.setActive(false), 2000);
