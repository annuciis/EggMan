// arrow keys

const up = document.getElementById("move-up");
const down = document.getElementById("move-down");
const left = document.getElementById("move-left");
const right = document.getElementById("move-right");


up.addEventListener("click", moveChickenUp);
down.addEventListener("click", moveChickenDown);
left.addEventListener("click", moveChickenLeft);
right.addEventListener("click", moveChickenRight);

//keyboard events


document.addEventListener("keydown", keyboardMovement =  e	=> {	

    const key_code = e.which||e.keyCode;
    switch(key_code){
        
        case 37: //left 
        
        moveChickenLeft();
            break;
        case 38: //Up 
        moveChickenUp();
            break;
        case 39: //right 
        moveChickenRight();
            break;
        case 40: //down 
        moveChickenDown();
            break;						
    }
}
)
