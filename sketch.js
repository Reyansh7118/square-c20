var movingplayer,standingplayer

function setup() {
  createCanvas(800,400);
  movingplayer=createSprite(125,250,100,100)
  movingplayer.debug=true;
  standingplayer=createSprite(300,250,150,150)
  standingplayer.debug=true;
}

function draw() {
  background("black");  
  drawSprites();
movingplayer.x=mouseX;
movingplayer.y=mouseY;
if(movingplayer.x-standingplayer.x<movingplayer.width/2+standingplayer.width/2
&& standingplayer.x-movingplayer.x<movingplayer.width/2+standingplayer.width/2
&& standingplayer.y-movingplayer.y<movingplayer.height/2+standingplayer.height/2
&&movingplayer.y-standingplayer.y<movingplayer.height/2+standingplayer.height/2)
{
  movingplayer.shapeColor="yellow"
  standingplayer.shapeColor="green"
}

else{
  movingplayer.shapeColor="white"
  standingplayer.shapeColor="orange"
}

}


