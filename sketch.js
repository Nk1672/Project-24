  
var paper, dustBinRight, dustbinLeft, dustbinBase;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 650);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(80, 360, 25);

	dustBinRight = new Dustbin(1150, 460, 20, 100);
	dustBinLeft = new Dustbin(980, 460, 20, 100);
	dustBinBase = new Dustbin(1065, 500, 150, 20);

	ground = new Ground(400, 520, 2000, 20);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  paper.display();

  dustBinRight.display();
  dustBinLeft.display();
  dustBinBase.display();
  
  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-140});
	}
}