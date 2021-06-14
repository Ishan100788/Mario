class Platform{
    constructor (posX){

        //width of the platform will be between 100 and 500
        this.rw = random (100,500);

        this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]);
        //setting the x position where platform will be created
        this.rx = posX;
        //setting the y position where platform will be created
        this.ry = height;
        //using rx,ry,rw,rh give values
        this.spt = createSprite(this.rx,this.ry,this.rw,this.rh);
        this.spt.shapeColor = "green"
    }
}