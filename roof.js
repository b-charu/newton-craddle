class roof
{
	constructor(x,y,w,h)
	{
		var option ={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(x, y, w, h , option);
 		World.add(myWorld, this.body);

	}
	display()
	{
			
			var roofPos = this.body.position;		

			push();
			translate(roofPos.x, roofPos.y);
			rectMode(CENTER);
			fill(128,128,128);
			rect(0,0,this.w, this.h);
			pop();
			
	}

}