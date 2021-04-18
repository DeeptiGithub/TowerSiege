class SlingShot {
    constructor(bodyA,pointB){
        this.pointB = pointB;
        console.log(pointB);
        if (typeof pointB !== 'undefined') 
        {
            this.sling = Constraint.create(
            {
            bodyA: bodyA,
            pointB:pointB,
            })
        }
        
        World.add(world, this.sling);
        console.log(this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            console.log(pointB);
            push();
            stroke(48,22,8);
            strokeWeight(3);
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            pop();
        }
    }
    
}