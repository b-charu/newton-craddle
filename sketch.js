
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring the variables
var myWorld, myEngine;
var bob1,bob2,bob3, bob4,bob5;
var rope1,rope2,rope3, rope4,rope5;
var const1,const2,const3,const4,const5;
var pend1,pend2,pend3,pend4,pend5;
var roof1, startbobX,startbobY;
var dia = 40;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	myEngine = Engine.create();
	myWorld = myEngine.world;

	
	startbobX=width/2;
	startbobY=height/4+500;
	
	roof1 = new roof(width/2,height/4,width/7,20);

	bob1 = new bob(startbobX-dia*2,startbobY,dia);
	bob2 = new bob(startbobX-dia,startbobY,dia);
	bob3 = new bob(startbobX,startbobY,dia);
	bob4 = new bob(startbobX+dia,startbobY,dia);
	bob5 = new bob(startbobX+dia*2,startbobY,dia);
	
	rope1=new rope(bob1.body,roof1.body,-dia*2, 0)

	rope2=new rope(bob2.body,roof1.body,-dia*1, 0)
	rope3=new rope(bob3.body,roof1.body,0, 0)
	rope4=new rope(bob4.body,roof1.body,dia*1, 0)
	rope5=new rope(bob5.body,roof1.body,dia*2, 0)
    
	/*var ptB = {
		x : -dia,
		y : 0
	}
	const1={
		bodyA:bob1.body,
		bodyB:roof1.body,
		pointB: ptB
	}

	const2={
		bodyA:bob2.body,
		bodyB:roof1.body,		
		pointB: ptB
	}


	const3={
		bodyA:bob3.body,
		bodyB:roof1.body,		
		pointB: ptB

	}

	constraint4={
		bodyA:bob4.body,
		bodyB:roof1.body,		
		pointB: ptB	

	}

	constraint5={
		bodyA:bob5.body,
		bodyB:roof1.body,		
		pointB: ptB
	}

	pend1=Constraint.create(const1);
    pend2=Constraint.create(const2);
	pend3=Constraint.create(const3);
	pend4=Constraint.create(const4);
	pend5=Constraint.create(const5);

	World.add(myWorld, pend1);
	World.add(myWorld, pend2);
	World.add(myWorld, pend3);
	World.add(myWorld, pend4);
	World.add(myWorld, pend5);*/
	
	Engine.run(myEngine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof1.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  
  
	
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  	}
}








