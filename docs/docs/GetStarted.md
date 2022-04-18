---
sidebar_position: 2
---

# Get Started

## Description

This is a simple and basic tutorial to start using Impacto in your project.

## Start

To start using Impact, you need to have a project I recommend to use the [vite](https://vitejs.dev/) templates.

After you have created your project, you can import the Impacto library in the project.

```bash
npm install impacto
```

## Create a Scene

In your main javascript project you need to import the Impacto library.

```javascript
// Import the Impacto library
import Impacto from "impacto";
```

Then you can create a scene.

```javascript
// Create a scene
class MyScene extends Impacto.Scene {
}
```

After that we need to create a game for the game can start.

```javascript
// Create a game
const myGame = new Impacto.Game({
	width: 800, // The width of the canvas
	height: 600, // The height of the canvas
	scene: MyScene, // The scene that will be used to render the game
});
```


## Create a Rectangle

So if you go to your browser you should see a canvas with the size of 800x600. But so far nothing is happening. So lets try to add a rectangle to the scene.

```javascript
class MyScene extends Impacto.Scene {
	// This method will be called when the scene is created.
	start() {
		// Create a new rectangle at (400, 300) with a width of 100 and a height of 100 and a color of red.
		const myRect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000"); 
		// Add the rectangle to the scene.
		this.addChild(myRect); 
	}
}
```

The all code so far:

```javascript
import Impacto from "impacto";

class MyScene extends Impacto.Scene {
	start() {
		const myRect = new Impacto.GameObjects.Rectangle(400, 300, 100, 100, "#ff0000"); 
		this.addChild(myRect); 
	}
}

const myGame = new Impacto.Game({
	width: 800,
	height: 600,
	scene: MyScene,
});
```

If everything is working correctly, you should see a red rectangle at (400, 300).
