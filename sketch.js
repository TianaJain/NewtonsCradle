
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1=new bob(200,200,PI/2);
	bobObject2=new bob(400,200,PI/2);
	bobObject3=new bob(600,200,PI/2);
	bobObject4=new bob(800,200,PI/2);
	bobObject5=new bob(1000,200,PI/2);
	roof=new roof(500,1000,1000,20);
    rope1=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0);
	rope2=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0);
	rope3=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0);
	rope4=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0);
	rope5=new rope(bobObject.body,roofObject.body,-bobDiameter*2,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
 
}
 display()
 {
   var pointA=this.rope.bodyA.position;
   var pointB=this.rope.bodyB.position;

   strokeWeight(2);

   var Anchor1X=pointA.x
   var Anchor1Y=pointA.y

   var Anchor2X=pointB.x+this.offsetX
   var Anchor2Y=pointB.x+this.offsetY
    
   line(Anchor1X,Anchor1Y,Anchor2Y,Anchor2Y);
}

