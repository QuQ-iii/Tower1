class Box{
    constructor(x,y, width, height){

        var options = {
            isStatic : false,
            restitution : 0,
            friction : 0.2
            
           
        }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
        this.Visibility = 255;
    }
  
    display() {

        if( this.body.speed < 3){
            push();

        var angle = this.body.angle;

        strokeWeight(5);
        stroke("black");
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

        pop();
          }
          else{
      
            World.remove(world, this.body);
      
            push();
            
            this.Visibility = this.Visibility - 5;
            tint(255, this.Visibility);
            
      
            pop();
          }
        
    }

    score(){
      if(this.Visibility <= 0 && this.Visibility > -10){
        score++;
      }
    }
  }