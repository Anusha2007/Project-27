class Rope {
    constructor(bodyA,bodyB){ 
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stifness:0.04,
            length:10
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        strokeWeight(4);
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y,)
    }
}