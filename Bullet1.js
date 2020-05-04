class Bullet1{
    constructor(x, y, width, height) {
        var options = {
           // "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      //"frictionAir":0.06, 
            }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // bullet.body.render.visible = true;

       
        World.add(world, this.body);
      }
      display(){
         
        //var angle = this.body.angle;
        
        push();
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
          
      }
    }
