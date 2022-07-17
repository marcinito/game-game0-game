export class Player{
    constructor(){
        this.posX=300
        this.posY=500
        this.size=30
        this.color="orange"
        this.type="dynamic"
        this.id="player"
        this.direction=null
        this.speed=5

        //Direction
        this.up=true
        this.down=true
        this.left=true
        this.right=true

    }
    draw(can){
        can.ctx.fillStyle=this.color
        can.ctx.fillRect(this.posX,this.posY,this.size,this.size)
    }
    moveUp(){
  if(this.up===true){
    console.log("up working..")
    this.posY-=this.speed
    this.down=true
    this.right=true
    this.left=true
  }
    }
    moveDown(){
        if(this.down===true){
            console.log("down working..")
            this.posY+=this.speed
            this.up=true
            this.right=true
            this.left=true
          }
    }
    moveLeft(){
        if(this.left===true){
            console.log("left working..")
            this.posX-=this.speed
            this.right=true
            this.up=true
            this.down=true
          }
       
    }
    moveRight(){
        if(this.right===true){
            console.log("right working..")
            this.posX+=this.speed
            this.left=true
            this.up=true
            this.down=true
          }
}
}