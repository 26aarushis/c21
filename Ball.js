class Ball 
{
  constructor(x, y, r) 
  {
    let ball_options = {
        restitution:0.9
      } 

    this.body = Bodies.circle(x, y, r, ball_options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill("orange");
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
  
}
