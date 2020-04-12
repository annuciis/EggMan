const gameScreen = document.getElementById("game-box");
let score = 0;
const score_text = document.getElementsByClassName("score-text")[0];
score_text.innerHTML = "Score: ";


// Getting size of game box

const width = gameScreen.offsetWidth;
const height = gameScreen.offsetHeight;


                            // Here we are creating the starting elements for the game (chicken, egg)

//chicken

const chicken = new Image();
chicken.src = "characters/chicken.png";
chicken.id = "chicken-character";


//egg

const egg = new Image();
egg.src = "characters/egg.png";
egg.id = "egg-character";



                        // Here we are setting starting location for egg and chicken


//chicken

const chickenPositionX = Math.floor(Math.random() * ((width - chicken.width) +1));
const chickenPositionY = Math.floor(Math.random() * ((height - chicken.height) +1));

const chickenShowsUp = () => {
    chicken.style.top = (chickenPositionY ) + "px"
    chicken.style.left = (chickenPositionX) + "px"
    gameScreen.appendChild(chicken);
}

//egg

const eggPositionX = Math.floor(Math.random() * ((width - egg.width) +1));
const eggPositionY = Math.floor(Math.random() * ((height - egg.height) +1));

const eggShowsUp = () => {
    egg.style.top = (eggPositionY ) + "px"
    egg.style.left = (eggPositionX) + "px"
    gameScreen.appendChild(egg);
}

                                    // if user clicks the "play" button

                                    
function startGame () {

document.getElementById("startBtn").style.display="none";
score = 0;
score_text.innerHTML = "Score: " + score;


// chicken shows up
                                        
chickenShowsUp();
                                        
// egg shows up
                                        
eggShowsUp();
                                        
// setting a timer, which will check if the chicken touch egg or fox
                                        
setInterval(checker, 100);
                                        
}


            //   timer, which checks if the chicken’s borders touch the egg’s borders


function checker() {

    //defining current position of objects

    const chicken_position_x = parseInt(document.getElementById("chicken-character").style.left);
    const egg_position_x = parseInt(document.getElementById("egg-character").style.left);
    const chicken_position_y = parseInt(document.getElementById("chicken-character").style.top);
    const egg_position_y = parseInt(document.getElementById("egg-character").style.top);


    // checking if the chicken’s borders touch the egg’s borders

    if( ((chicken_position_y + chicken.height ) < egg_position_y) ||
        (chicken_position_y > (egg_position_y + egg.height)) ||
        ((chicken_position_x + chicken.width ) < egg_position_x) ||
        (chicken_position_x > (egg_position_x + egg.width))){
           
    } else {
            score= score + 1;
            score_text.innerHTML = "Score: " + score;

            //change egg's location
            
            egg.style.left = Math.floor(Math.random() * ((width - egg.width) +1))+ "px";
            egg.style.top = Math.floor(Math.random() * ((height - egg.height) +1)) + "px";

            //adding the fox character

            const fox = new Image();
            fox.src = "characters/fox.png";
            fox.className="fox-character"
            fox.style.top = Math.floor(Math.random() * ((height - fox.height) +1)) + "px";  
            fox.style.left = Math.floor(Math.random() * ((width - fox.width) +1)) + "px";

           //checking if the fox isn't located at the egg's location 

            if(        
            ((chicken_position_y + chicken.height ) < parseInt(fox.style.top)) ||
            (chicken_position_y > (parseInt(fox.style.top) + fox.height)) ||
            ((chicken_position_x + chicken.width ) < parseInt(fox.style.left)) ||
            (chicken_position_x > (parseInt(fox.style.left) + fox.width))){
           
                gameScreen.appendChild(fox);

            } else {

                //if they both have similar location, change it

                fox.style.top = parseInt(fox.style.top + chicken.height) + "px";
                fox.style.left = parseInt(fox.style.left + chicken.width) + "px";
                gameScreen.appendChild(fox);

            }

            // the fox will start to move
            
            function foxMove(){
                const x = Math.floor(Math.random()*((width - fox.width) +1));
                const y = Math.floor(Math.random()*((height - fox.height) +1));
                fox.style.top = y + 'px';
                fox.style.left = x + 'px'
            }

            setInterval(foxMove, 5000);

        }


    //getting x and y coordinates for all foxs

        const foxs = document.querySelectorAll(".fox-character");
        foxs.forEach(fox => {

            let fox_position_x = parseInt(fox.style.left);
            let fox_position_y = parseInt(fox.style.top);


    // checking if the chicken’s borders touch the fox’s borders
    //  if yes, then the game will be over


    if(
        ((chicken_position_y + chicken.height ) < fox_position_y) ||
        (chicken_position_y > (fox_position_y + parseInt(fox.height))) ||
        ((chicken_position_x + chicken.width ) < fox_position_x) ||
        (chicken_position_x > (fox_position_x + parseInt(fox.width)))){
            return;
        } else {
            gameScreen.style.display = "none";
            document.getElementById("game-over").style.display = "table";
            
        }
    })
}

// play again button


function playAgain() {
    location.reload();
}
