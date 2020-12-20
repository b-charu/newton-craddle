class rope{
	constructor(body1,body2, x,y)
	{
        this.x = x;
		this.y = y;
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.x, y:this.y}
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		World.add(myWorld,this.rope);
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);

		var startX=pointA.x;
		var startY=pointA.y;

		var endX=pointB.x+this.x;
		var endY=pointB.y+this.y;

        line(startX,startY,endX,endY);
    }
}