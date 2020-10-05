class Tree{
    constructor(x,y,width,height){
        var options={
            isStatic : true,
            restitution : 0,
            friction: 1.0,
            density : 1.2

        }
        this.image = loadImage("tree.png");
        this.tree=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.tree);
        //this.image = loadImage("tree.png");
    }
    display(){
var pos=this.tree.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}
}