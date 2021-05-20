
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj,groundObject, launcherObject;
var launchingForce=100;
var mango1;
var world,boy;
var s1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
  mango2=new mango(1200,125,30);
  mango3=new mango(1100,125,30);
  mango4=new mango(1100,200,30);
  mango5=new mango(1000,225,30);
  mango6=new mango(900,175,30);
    s1=new Stone (235,420,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new CAA(s1.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  s1.display();
  groundObject.display();
  launcherObject.display();
  detectollision(s1,mango1);
  detectollision(s1,mango2);
  detectollision(s1,mango3);
  detectollision(s1,mango4);
  detectollision(s1,mango5);
  detectollision(s1,mango6);
}
function mouseDragged()
{
	Matter.Body.setPosition(s1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(s1.body, {x:235, y:420}) 
	  launcherObject.attach(s1.body);
	}
  }
function detectollision(stone,mango){
  mangoBodyPosition=mango.body.position
  stoneBodyPosition=stone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  if(distance<=mango.r+stone.r)
  {
    //console.log(distance);
    Matter.Body.setStatic(mango.body,false);
  }

}