class Polygon {
  constructor() {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
    };
   
    this.polygon = Bodies.rectangle(100,200,50,50);
    this.width = 50;
    this.height = 50;
    this.polygonImg = loadImage("polygon.png");
    World.add(world, this.polygon);
    console.log(this.polygon);
  }

  // fly() {
  //   this.polygon.bodyA = null;
  // }

  display() {
        var angle = this.polygon.angle;
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        console.log(this.polygon.position.x);
        console.log(this.polygon.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.polygonImg,0,0,this.width,this.height);
        pop();

   
  }
}
