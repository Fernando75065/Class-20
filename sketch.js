function setup() {
  createCanvas(1200,800);
  rect1 = createSprite(600, 0, 50, 80);
  rect1.shapeColor = "cyan"
  rect1.velocityY = 4

  rect2 = createSprite(600,800,80,30);
  rect2.shapeColor="yellow"
  rect2.velocityY=-4
}

function draw() {
  background(255,255,255);  
 

 if(rect2.x-rect1.x <  rect1.width/2+rect2.width/2 && rect1.x-rect2.x < rect1.width/2+rect2.width/2
  && rect2.y-rect1.y < rect1.height/2+rect2.height/2 && rect1.y-rect2.y < rect1.height/2+rect2.height/2){
   rect1.shapeColor="red"
   rect2.shapeColor="red"
 }
 else {
  rect1.shapeColor = "cyan"
  rect2.shapeColor="yellow"

 }
 
 
 if (rect2.x - rect1.x < rect1.width/2 + rect2.width/2
     && rect1.x - rect2.x < rect1.width/2 + rect2.width/2) {
       
     rect2.velocityX = rect2.velocityX * (-1);
     rect1.velocityX = rect1.velocityX * (-1);
}


if (rect2.y - rect1.y < rect1.height/2 + rect2.height/2
  && rect1.y - rect2.y < rect1.height/2 + rect2.height/2) {
    
  rect2.velocityY = rect2.velocityY * (-1);
  rect1.velocityY = rect1.velocityY * (-1);
}

  drawSprites();
}