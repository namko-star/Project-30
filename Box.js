class Box{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.2, 
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = rgb(random(0, 255), random(0, 255), random(0, 255));
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(this.color);
      if (this.body.velocity >= 3) {
        this.visibility = this.visibility - 5;
        tint(this.visibility);
      }
      rect(0,0,this.width, this.height);
      pop();
    }
}