class CAA{
	constructor(body,anchor)
	{
		
		var options={ bodyA:body,			 
			pointB:anchor, 
			stiffness:0.004, 
			length:1
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.caa=Constraint.create(options)
		World.add(world,this.caa)
	}

	attach(body){
		this.caa.bodyA=body;
	}

	fly()
	{
		this.caa.bodyA=null;
	}

	display()
	{
		if(this.caa.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(2);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
		}
	}
}