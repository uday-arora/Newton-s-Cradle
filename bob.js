class Bob {
	constructor(x,y,r) {
		var options={
			isStatic:false,
			restitution:1,
			friction:0,
			density:0.8
		}
		this.r=r;
		this.body=Bodies.circle(x, y, r, options);
		World.add(world, this.body);
	}
	display() {
		push();
		translate(this.body.position.x, this.body.position.y);
		fill("purple")
		ellipseMode(RADIUS)
		ellipse(0,0,this.r, this.r);
		pop();
	}
}