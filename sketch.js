var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var juice,power,coin,bombe,blast

function preload(){
  pathImg = loadImage("track.jpg");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombs = loadImage("bomb.png")
  coin = loadImage("coin.png")
  juices = loadImage("energyDrink.png")
  powers = loadImage("power.png")
  blasts = loadImage("h.png")
}

function setup(){
  
  createCanvas(400,800);
  
// Moving background
path=createSprite(200,200,350);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=3;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.05;
boy.addAnimation("JakeRunning",boyImg);
  

leftBoundary=createSprite(0,0,100,800);

 leftBoundary.invisible = false;
 leftBoundary.visible = true;
 leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

juice = createSprite(200,200)
juice.addImage("energy",juices);
juice.scale = 0.1;
juice.velocityY = 2;
}

function draw() {
  background(0);
  path.velocityY = 2;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 700 ){
    path.y = height/2;
  }

  if(path.y > 700 ){
   
  path.y = height/2;
  }

  if(path.y > 700 ){
path.y = height/2;}

if(path.y > 700 ){path.y = height/2;}

if(boy.isTouching(juice)){
  path.velocityY = 21;
  power = createSprite(100,720)
  power.addImage("pw",powers)
  power.scale = 0.1;

}

  

  
  drawSprites();
}
