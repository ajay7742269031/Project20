var cat, catimage1,catimage2,catimage3;
var mouse,mouseimage1,mouseimage2,catimage3;
var ground;
function preload() {
    //load the images here
    catimage1=loadImage("images/cat1.png");
    mouseimage1=loadImage("images/mouse4.png");
    ground=loadImage("images/garden.png");
    mouseimage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimage3=loadImage("images/mouse1.png");
    catimage2=loadAnimation("images/cat2.png","images/cat3.png");
    catimage3=loadImage("images/cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat=createSprite(730,700,500,500);
   cat.addImage("lk",catimage1);
   cat.scale=0.1;
   mouse=createSprite(160,700,500,500);
   mouse.addImage("vijay",mouseimage1);
   mouse.scale=0.08;

}

function draw() {

  background(ground);
  keyPressed();

  if(keyDown(LEFT_ARROW)){
    cat.velocityX=-4;
    cat.addAnimation("catruning",catimage2);
    cat.changeAnimation("catruning");
    cat.frameDelay=5;

  }
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){ 
 cat.velocityX=0;
 cat.x=260;
 cat.y=700;
 cat.addImage("happy",catimage3);
 cat.changeAnimation("happy");
 mouse.addImage("happymouse",mouseimage3);
 mouse.changeAnimation("happymouse");

     }


    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseruning",mouseimage2);
    mouse.changeAnimation("mouseruning");
    mouse.frameDelay=10;
  }
}
