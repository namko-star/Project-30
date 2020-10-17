const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, slingshot;
var polygon, ground, platform1, platform2;
var box1, box2, box3, box4, box5, box6, box7;
var box8, box9, box10, box11, box12, box13, box14;
var box15, box16, polygon_img;

function preload() {
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, 380, width, 20);
  platform1 = new Ground(width/2 - 100, 300, 250, 10);
  platform2 = new Ground(width/2 + 250, 220, 250, 10);

  
  box1 = new Box(210, 275, 30, 40);
  box2 = new Box(240, 275, 30, 40);
  box3 = new Box(270, 275, 30, 40);
  box4 = new Box(300, 275, 30, 40);
  box5 = new Box(330, 275, 30, 40);
  box6 = new Box(360, 275, 30, 40);
  box7 = new Box(390, 275, 30, 40);

  box8 = new Box(240, 235, 30, 40);
  box9 = new Box(270, 235, 30, 40);
  box10 = new Box(300, 235, 30, 40);
  box11 = new Box(330, 235, 30, 40);
  box12 = new Box(360, 235, 30, 40);
  
  box13 = new Box(270, 195, 30, 40);
  box14 = new Box(300, 195, 30, 40);
  box15 = new Box(330, 195, 30, 40);
  
  box16 = new Box(300, 155, 30, 40);
  
  box17 = new Box(550, 195, 30, 40);
  box18 = new Box(580, 195, 30, 40);
  box19 = new Box(610, 195, 30, 40);
  box20 = new Box(640, 195, 30, 40);
  box21 = new Box(670, 195, 30, 40);
  box22 = new Box(700, 195, 30, 40);
  box23 = new Box(730, 195, 30, 40);

  box24 = new Box(580, 155, 30, 40);
  box25 = new Box(610, 155, 30, 40);
  box26 = new Box(640, 155, 30, 40);
  box27 = new Box(670, 155, 30, 40);
  box28 = new Box(700, 155, 30, 40);

  box29 = new Box(610, 115, 30, 40);
  box30 = new Box(640, 115, 30, 40);
  box31 = new Box(670, 115, 30, 40);

  box32 = new Box(640, 75, 30, 40);

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);


  slingshot = new Slingshot(this.polygon, {x: 100, y: 200});

}

function draw() {
  background(0); 
  Engine.update(engine);


  ground.display();
  platform1.display();
  platform2.display();

  fill("skyblue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  
  fill("pink");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  fill("teal");
  box13.display();
  box14.display();
  box15.display();

  fill("gray");
  box16.display();

  fill("skyblue");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
 
  fill("pink");
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();

  fill("teal");
  box29.display();
  box30.display();
  box31.display();

  fill("gray");
  box32.display();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

  slingshot.display();

  drawSprites();
}

function mouseDragged() {
  Matter.Body.setPosition(this.polygon, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  slingshot.fly();
}

function keyPressed() {
  if(keyCode === 32) {
    slingshot.attach(this.polygon);
  }
}