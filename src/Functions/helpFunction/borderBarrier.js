export const borderBarrier=(dE,can,changeDirectionMonster)=>{
    if(dE.posX<=0){
        if(
            dE.id==="monster"){changeDirectionMonster(dE,dE.directionCross,dE.direction)
                dE.posX+=2
        }
        if(dE.id==="player"){
            dE.posX+=2
        }
    }
    if(dE.posX+dE.size>=can.C_W){
        if(dE.id==="monster"){
            changeDirectionMonster(dE)
            dE.posX-=2
        }
        if(dE.id==="player"){
            dE.posX-=2
        }
    }
    if(dE.posY<=0){
        if(
            dE.id==="monster"){changeDirectionMonster(dE)
                dE.posY+=2
        }
        if(dE.id==="player"){
            dE.posY+=2
        }
    }
    if(dE.posY+dE.size>=can.C_H){
        if(
            dE.id==="monster"){changeDirectionMonster(dE)
                dE.posY-=2
        }
        if(dE.id==="player"){
            dE.posY-=2
        }
    }
}