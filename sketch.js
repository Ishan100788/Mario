var mario
var platformGroup

function preload()
{}

function setup() {
  //canvas = width and height of display
  createCanvas(displayWidth, 668);
 var countDistanceX = 0;
 var platform;
 var gap;
 //creating a mario player
 mario = new Player();
 //creating a group 
 platformGroup = createGroup();
 //adding platform for mario
 for (var i = 0 ;i < 14 ; i++){
   platform = new Platform(countDistanceX);
   //adding each new platform for the group
   platformGroup.add(platform.spt) 
   //giving random value to a gap
   gap = random ([0,0,0,0,80]) ;
   //counting x location of platform to built
   countDistanceX = countDistanceX+platform.rw+gap
 }
}

function draw() {
  background('skyblue');  
  //code to camera
  translate(-mario.spt.x+width/2,0);

  //gravity to mario and set colliding with platform
  mario.applyGravity();
  mario.spt.collide (platformGroup);
  //calling various function to control mario
  if (keyDown("left")){
    this.spt.x = this.spt.x-12;

  }
  if (keyDown("right")){
    mario.moveRight();
  }
  if (keyDown("up")){
    mario.jump();
  }

  drawSprites();

}

