var player, playerImg;
var bg,bgImg;
var score;
var gameState = 0;
var dog, dogimg;
var dgroup;
var bar1, bar1o,bar2, bar2o
var bar, bar3
var light0, thunder, sharp, blade,light1, lgroup;
var lflag = true;
var lgroup2, light2, lgroup3, light3;
var endFlag = true

function preload(){
  bgImg = loadImage("grass.jpg")
  thunder = loadImage("thunder1.png")
  sharp = loadImage("blade.png")
  playerImg = loadImage("mower.png")
  dogimg = loadImage("dog.png");
}

function setup() {
  createCanvas(displayWidth ,displayHeight - 145);


 bg = createSprite(width/2,height/2,width,height + 500)
 bg.addImage(bgImg);
 bg.scale = 0.5

 console.log(bg.height/2)

  player = createSprite(width/2, height -(height/6.5), 50, 50);
  player.debug = true;
  player.setCollider("rectangle",0,-20,100,120)
  player.addImage(playerImg);
  player.scale = 0.6
  score = 0;
  dgroup = new Group();
  lgroup = new Group();
  lgroup2 = new Group();
  lgroup3 = new Group();

  bar1o = createSprite(width-1500,height/2,35,210)
  bar1o.shapeColor = "black"
  bar1 = createSprite(width-1500,height/2,25,200)
  bar1.shapeColor = rgb(51, 153, 255)

  bar1o = createSprite(width-1440,height/2,35,210)
  bar1o.shapeColor = "black"
  bar2 = createSprite(width-1440,height/2,25,200)
  bar2.shapeColor = 	rgb(169,169,169)

  light0 = createSprite(width-1500,(height/2) + 140,50,50)
  light0.addImage(thunder)
  light0.scale = 0.06

  blade = createSprite(width-1440,(height/2) + 130,50,50)
  blade.addImage(sharp);
  blade.scale = 0.06
  
  
  bar = 200
  bar3 = 200
  
}

function draw() {

/*
  imageMode(CENTER);
  image(bgImg,width/2,height/2,width,height*2)
*/

  if(gameState === 0){
    play();
    
  }else if(gameState === 1){
    end();
  }
  drawSprites();
  fill("white");
  text(mouseX + ","+ mouseY, width/2,height/2);
  textSize(20)
  text("Score: " + score,width - 200, (height/13.7))
  
}

