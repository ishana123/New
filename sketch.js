var backgroud , cat , cat2 , cat3 , cat4 ;
var mouse , mouse2 , mouse3 , mouse4;
var Canvas;
function preload() {
    //load the images here
   background = loadImage ("images/garden.png");
   cat = loadAnimation ("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png");  
    cat3 = loadAnimation ("images/cat3.png");
    cat4 = loadAnimation ("images/cat4.png");
   mouse = loadAnimation ("images/mouse1.png");
   mouse2 = loadAnimation ("images/mouse2.png");
   mouse3 = loadAnimation ("images/mouse3.png");
    mouse4 = loadAnimation ("images/mouse4.png");
}

function setup(){
   Canvas = createCanvas(1000,800);
    
    //create tom and jerry sprites here
    var cat = createSptite (800 , 600 );
    cat . addAnimation ("catsleeping" , cat);
    var mouse = createSprite (200 , 600 );
    mouse . addAnimation ("mousestanding" , mouse);
}

function draw() {
    //Write condition here to evalute if tom and jerry collide
    background (backgroud);
    drawSprites();
    text(mouseX +',' + mouseY ,10 , 45);
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("catRunning" , cat2);
      cat.changeAnimation("catRunning");
      mouse. addAnimation ("mouseTeasing " , mouse3);
      mouse.changeAnimation ("mouseTeasing");
  }


}