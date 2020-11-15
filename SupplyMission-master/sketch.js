var helicopterIMG, helicopterSprite, packageSprite,packageIMG,rex;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	rexSprite=createSprite(350,650,170,10);
 var ground_options ={
	 isStatic: true
 }
 var rex_options ={
	isStatic: true
}
  var packageBody_options =  {
restitution : 3.0
  }
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	rex = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world,rex);


	Engine.run(engine);
	//packageBody = Bodies.rectangle(390,260,50,50);
	//World.add(world,packageBody);

	console.log(packageBody);
	console.log(packageBody.position.x);
	console.log(packageBody.position.y);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(packageBody.position.x,packageBody.position.y,50,50);
  drawSprites();
 rect(250,630,20,50);
 rect(440,630,20,50);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
  
    
  }
}



