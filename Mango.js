class Mango {
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 0,
            friction: 1.0,
        }
        this.image= loadImage("mango.png")
        this.mango = Bodies.rectangle(x,y,width,height,options)
        this.width= width;
        this.height=height;
        World.add(world,this.mango)
    }
    display(){
        var pos = this.mango.position;
        push()
        translate(pos.x,pos.y)
        rectMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}