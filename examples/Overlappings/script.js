import Impacto from "../../src/Impacto.js";

const impacto = new Impacto({
	width: 800,
	height: 600,
	parent: "gameDiv",
});

const myRect1 = impacto.createRectangle(100, 100, 50, 50, "#ff0000");
myRect1.setVelocity(5, 5);
myRect1.setCollisionWorldBounds(true);

const myRect2 = impacto.createRectangle(200, 200, 50, 50, "#0000ff");
myRect2.setVelocity(-5, -5);
myRect2.setCollisionWorldBounds(true);
myRect2.addOverlapObject(myRect1);

const myCircle1 = impacto.createCircle(300, 300, 10, "#00ff00");
myCircle1.setVelocity(-5, -5);
myCircle1.setCollisionWorldBounds(true);
myCircle1.addOverlapObject(myRect2);

const myCircle2 = impacto.createCircle(350, 350, 10, "#ffff00");
myCircle2.setVelocity(-5, -5);
myCircle2.setCollisionWorldBounds(true);
myCircle2.addOverlapObject(myCircle1);
