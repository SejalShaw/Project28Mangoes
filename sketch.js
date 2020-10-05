
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,ground,stone,boy;
var mango1,mango2,mango3,mango4,mango5,chain;
function preload()
{
	boy1 = loadImage("boy.png")
}

function setup() {
 
  createCanvas(800, 500);
  


	engine = Engine.create();
	world = engine.world;
    tree= new Tree(400,100,400,400)
    ground = new Ground(400,490,800,20)
    stone = new Stone(75,290,50,20)
    boy = createSprite(150,430,10,10)
    boy.addImage("boy",boy1)
    mango1 = new Mango(550,200,50,50)
    mango2 = new Mango(700,180,50,50)
    mango3 = new Mango(650,250,50,50)
    mango4 = new Mango(600,140,50,50)
    mango5 = new Mango(480,220,50,50)
    chain = new Chain(stone.Body,{x:200, y:50})
    boy.scale=0.12
    
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  tree.display();
  ground.display();
  stone.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  chain.display()

  drawSprites();
 
}



