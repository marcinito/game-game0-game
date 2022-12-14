import { handleHp } from "../../Functions/helpFunction/handleHp"

export const whenFireBallFromDragonTouchWallOrPlayer=(monster,player,WALL,can)=>{
//IF FIRE BALL MEET WALL BLOCK

WALL.forEach((titleArray,indexTitleArray,arrayWall)=>{
    titleArray.forEach((title,indexTitle,arrayTitle)=>{

monster.fireBall.forEach((ball,indexBall,arrayBall)=>{
    if(title.posX+title.size<ball.posX || title.posX>ball.posX+ball.size ||
        title.posY+title.size<ball.posY || title.posY>ball.posY+ball.size){
    //fire ball no collision with title
        }
        else{
            title.hp-=monster.attack.wall
            arrayBall.splice(indexBall,1)
            if(title.hp<0){
                arrayTitle.splice(indexTitle,1)
            }
        }
})


    })
})

//IF FIRE BALL HIT PLAYER
monster.fireBall.forEach((ball,indexBall,arrWithFireBall)=>{
    if(player.posX+player.size<ball.posX || player.posX>ball.posX+ball.size ||
        player.posY+player.size<ball.posY || player.posY>ball.posY+ball.size){
    
        }
        else{
    
            player.hp-=monster.attack.player
            arrWithFireBall.splice(indexBall,1)
            player.percentageHp-=handleHp(monster.attack.player,player)
    
        }
})

}