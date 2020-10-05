class Stone{
    constructor(x,y,width,height){
        var options={
            isStatic : false,
            restitution : 0,
            friction: 1.0,
            density : 1.2
        }
        this.image=loadImage("stone.png")
        this.stone= Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.stone)
    }
    display(){
        var pos = this.stone.position;
        push ()
        translate(pos.x,pos.y);
       rectMode(CENTER);
        image(this.image,0,0,this.width,this.height);
      pop();
    }
}