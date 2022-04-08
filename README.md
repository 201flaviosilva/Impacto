# Impacto

## Table of Contents

- [Impacto](#impacto)
	- [Table of Contents](#table-of-contents)
	- [Description](#description)
	- [Get Started](#get-started)

## Description

Impacto is a simple render engine for HTML5 canvas. If you have any questions please ask in [Discussions (Forum)](https://github.com/201flaviosilva/Impacto/discussions)

## Get Started

To get started, you need to install Impacto by [NPM Package](https://www.npmjs.com/package/impacto):

```bash
npm install impacto
```

Use the lib in your project:

```javascript
import Impacto from "impacto"; // Import the Impacto lib

// Create a simple scene 
class MyScene extends Impacto.Scene {
	start() {
		const myRect = new Impacto.GameObjects.Rectangle(400, 300, 50, 50, "#ff0000"); // Create a red rectangle at position (400x, 300y) with size (50x, 50y)
		this.addChild(myRect); // Add the rectangle to the scene
	}

	update() {
		this.rect2.setAngle(this.rect2.angle + 1); // Rotate the rectangle
	}
}

const game = new Impacto.Game({
	width: 800, // Width of the canvas
	height: 600, // Height of the canvas
	backgroundColor: "#f0f0f0", // Background color of the canvas
	scene: MyScene, // The scene to be rendered
});
```


For more information about the Impacto API, please check the [Wiki](https://github.com/201flaviosilva/Impacto/wiki) or check the examples.
