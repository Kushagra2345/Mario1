// Creating platform class, objects will be created according to posX.

class Platform {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = random([100,150]);
      this.rx = posX;
      this.ry = 668-this.rh/2;  
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh);
      this.spt.shapeColor="green";
      
    }
  
  
  }
  
  