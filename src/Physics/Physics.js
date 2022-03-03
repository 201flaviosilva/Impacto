import CollisionDetection from "./CollisionDetection.js";
import CollisionResolve from "./CollisionResolve.js";
import PositionPrevisions from "./PositionPrevisions.js";

export default class Physics {
	constructor() {
		this.CollisionDetection = new CollisionDetection();
		this.CollisionResolve = new CollisionResolve();
		this.PositionPrevisions = new PositionPrevisions();
	}
}
