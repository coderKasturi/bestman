class Drops{
    constructor(x,y){
        var options = {
            
            restitution:1.3,
			friction:0.1
			
        }
        	
		this.rain=Bodies.circle(x,y,5, options);
		this.radius=5;
		World.add(world, this.body);
		
 }

 updateY(){
	if(this.rain.position.y>height){

		Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
	
	}
 }

        showDrops(){
           fill("blue")
		   ellipseMode(CENTER);
		   ellipse(this.rain.position.x, this.rain.position.y, this.radius, this.radius);
        }
 }

 //var maxDrops=100;

// for(var i=0; i<maxDrops; i++){
//	 drops.push(new createDrop(random(0,400),random(0,400)));
 //}

 