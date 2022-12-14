import { plainWall } from "../../plainWall"
import { solidWall } from "../../solidWall"




//QUERY FROM HTML


const POINTER=document.querySelector(".viewFinderImg")

export const movementPlayer=(player,imgTitleFromMenu)=>{
    
    window.addEventListener("keydown",(e)=>{
        console.log(player.directionMove)
        if(e.keyCode===37){
               
                player.moveLeft()
                
        }
        if(e.keyCode===39){
            player.moveRight()
    }

if(e.keyCode===40){
    player.moveDown()
}
if(e.keyCode===32){
    player.fire()
    
}
if(e.keyCode===81){
  

}

    })

    //HANDLE MENU WITH TITLE TO BUILD NEW TITLE ON MAP
    window.addEventListener("keyup",(e)=>{
        console.log(e.keyCode)
        //JUMP
        if(e.keyCode===38){
            if(player.counterJump<2){
                player.moveUp()
                player.counterJump++
            }
        
            if(player.counterJump>2){
                player.up=false
                
            }
    }
    //choicee first block
    if(e.keyCode===49){

        //Take plain wall and build new title
       player.building.plainWall.canIBuild=true
       player.building.solidWall.canIBuild=false
       player.mode="buildingWall"
       //GIVE BORDER TO CHOOSEN TITLE WHICH YOU WANT TO USE TO Build new title and take from rest
       imgTitleFromMenu.forEach((img,i,arr)=>{
        img.style.border="none"

       })
       imgTitleFromMenu[0].style.border=`3px solid red`
    


       
    }
    if(e.keyCode===50){
        //Take solid wall and build solid title
        player.mode="buildingWall"
        player.building.plainWall.canIBuild=false
        player.building.solidWall.canIBuild=true
  //GIVE BORDER TO CHOOSEN TITLE WHICH YOU WANT TO USE TO Build new title and take from rest
        imgTitleFromMenu.forEach((img,i,arr)=>{
            img.style.border="none"
    
           })
           imgTitleFromMenu[1].style.border=`3px solid red`

     }
if(e.keyCode===81){
//Q take GLOCK
player.mode="fireFire"
}



    })

    window.addEventListener("click",(e)=>{
        //PLAIN WALL IS BUILDING
      if(player.mode==="buildingWall"){
        if(player.building.plainWall.quantity>0 && player.building.plainWall.canIBuild===true){
            player.blockToBuild.push(new plainWall(e.x-35,e.y-35,60,"red","horizontal"))
            player.building.plainWall.quantity-=1
        }
        // SOLID WALL IS BUILDING
        if(player.building.solidWall.quantity>0 && player.building.solidWall.canIBuild===true){
            player.blockToBuild.push(new solidWall(e.x-30,e.y-30,60,"red","horizontal"))
            player.building.solidWall.quantity-=1
        }
      }
      if(player.mode==="fireFire"){
        player.fire(e.x,e.y)
      }
    })
    window.addEventListener("mousemove",(e)=>{

        POINTER.style.left=e.x -15 +"px"
        POINTER.style.top=e.y - 15+"px"
    
    
    })
  
}

