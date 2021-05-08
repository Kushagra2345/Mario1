
var countDistanceX=0;

function preload()
{}

function setup() {
  createCanvas(9000, 668);

  for (var i=0;i<10;i++){
gap=random([0,20,40,60,80])
   platform1=new Platform(countDistanceX);
    
   countDistanceX=countDistanceX+platform1.rw+gap


  }
}

function draw() {
  background('skyblue'); 
 drawSprites();
}

