class Ground {
    constructor(x,y,width,height){
        var  options={
            isStatic : true,
                restitution : 0,
                friction: 1.0,
                density : 1.2
        }
      this.ground= Bodies.rectangle(x,y,width,height,options)
      this.width=width;
      this.height=height;
      World.add(world,this.ground)

    }
    display(){
        var pos=this.ground.position;
        push();
        translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("green");
        rect(0,0,this.width,this.height);
      pop();
    }

}