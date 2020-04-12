// chicken movement 

function moveChickenLeft(){
    if(parseInt(chicken.style.left) <=  0){
        chicken.style.left = width + "px";
    } else {
        chicken.style.left=parseInt(chicken.style.left)-5 +'px';
    }   
}

function moveChickenRight(){
    if(parseInt(chicken.style.left)  >  width){
        chicken.style.left = 0 + "px";
    } else {
        chicken.style.left=parseInt(chicken.style.left)+5 +'px';
    }
}

function moveChickenUp(){
    if(parseInt(chicken.style.top) <=  0){
        chicken.style.top = height + "px";
    } else {
        chicken.style.top=parseInt(chicken.style.top)-5 +'px';
    }
}


function moveChickenDown(){
    if(parseInt(chicken.style.top) > height) {
        chicken.style.top = 0 + "px";
    } else {
        chicken.style.top=parseInt(chicken.style.top)+5 +'px';
    }    
}

