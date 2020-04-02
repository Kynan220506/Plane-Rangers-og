var PLAY = 1;
var END = 0;

var gameState = PLAY;
var player;
var playerBullet;

var obstacles1;
var obstacles2;
var obstacles3;

var playerImg;
var playerBulletImg;

var obstacles1Img;
var obstacles2Img;
var obstacles3Img;

var ObstacleGroup;

textSize(18);
textFont("Georgia");
textStyle(BOLD);

var count = 0;

var gameOver, restart;

function preload() {
  playerImg = loadImage("rocket.png");
  playerBulletImg = loadImage("shot.png");
  obstacles1Img = loadImage("asteroid.png");
  obstacles2Img = loadImage("fireball.png");
  obstacles3Img = loadImage("mine.png");
}

function setup() {
  createCanvas(800, 400);
  
  player = createSprite(50, 200, 50, 50);
  player.shapeColor = "black";

  obstacleGroup = createGroup();
}

function draw() {
  text("Score: "+ count, 250, 100);
  console.log(gameState);
  
  background(255,255,255);  
  player.y = mouseY;

  if (mouseWentDown("leftButton")) {
    playerBullet = createSprite(50, 200, 10, 10);
    playerBullet.velocityX = 2.5; 
    playerBullet.y = mouseY;
  }

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,200,10,40);
    obstacle.velocityX = Math.round(random(-6,6))
    
    var rand = randomNumber(1,3);
    switch(rand) {
      case 1: obstacle.addImage(obstacles1Img);
              break;
      case 2: obstacle.addImage(obstacles2Img);
              break;
      case 3: obstacle.addImage(obstacles3Img);
              break;
      default: break;

    ObstaclesGroup.add(obstacle);
  }
}  
}