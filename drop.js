class Drop {
    constructor (x,y){
        var options = {
            restitution:0.1,
            friction:.001
        }
        this.rain = Bodies.circle(x,y,10,10);
        this.x=x;
        this.y=y;
        this.radius=5;
        World.add(world,this.rain);
    }
    updateDrop(){
     
        if(this.rain.position.y>height){
           Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }

    display(){
        fill ("blue");
        ellipseMode(RADIUS);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);


    }
}