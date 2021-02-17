class Bob {
	constructor(x,y,radius)
	{
		var options={
        restitution:0.3,
        friction:0.5,
        density:1.2,
        isStatic: true
        }			
		this.body=Bodies.circle(x, y,(radius-20)/1.5, options);
		this.radius=radius;
		World.add(world, this.body);
	}
	display()
	{      var pos=this.body.position;		

			push()
			translate(pos.x,pos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			ellipse(0,0,this.width,this.height);
			pop()
			
	}
;}