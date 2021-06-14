class Player{
    constructer(){
        this.x = 500;
        this.y = 200;
        this.spt = createSprite(this.x,this.y,100,100);
        this.spt.shapeColor = "red";
    }
    applyGravity (){
        this.spt.velocityY = this.spt.velocityY+1
    }
    moveLeft(LEFT_ARROW){
        this.spt.x = this.spt.x-12;;
    }
    moveRight(RIGHT_ARROW){
        this.spt.x = this.spt.x+12;
    }
    jump(UP_ARROW){
        this.spt.velocityY = -21;
    }
}