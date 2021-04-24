class Rope {
	constructor(body1, body2, offsetX, offsetY) {
		var options = {
			bodyA: body1,
			bodyB: body2,
			pointB: { x: offsetX, y: offsetY } //if this is commented midpoint of bodyB will be used which we dont want
		}
		this.rope = Constraint.create(options)
		World.add(world, this.rope)

		this.offsetX = offsetX
		this.offsetY = offsetY
	}

	display() {
		var pointA = this.rope.bodyA.position;
		var pointB = this.rope.bodyB.position;
		strokeWeight(2);
		line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
	}

}