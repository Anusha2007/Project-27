
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
	roof = new Roof(380,220,600,40);
	bob1 = new Bob(170,560,3);
	bob2 = new Bob(270,560,3);
	bob3 = new Bob(370,560,3);
	bob4 = new Bob(470,560,3);
	bob5 = new Bob(570,560,3);

	rope1 = new Rope(bob1.body,roof.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(130,255,255);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
}



