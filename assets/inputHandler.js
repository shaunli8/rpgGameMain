console.log("inputHandler.js loaded")
//sets the variables
let vx = 0;
let vy = 0;


let persondirection = "right";
let realdirection = "right";
let realdirectionx = "right";
let realdirectiony = "up";

let canMovex = false;
let canMovey = false;
let showSecondPage1 = false;
let showSecondPage2 = false;
let showSecondPage3 = false;

let checkifwalkingright;
let checkifwalkingup;
let checkifwalkingdown;
let checkifwalkingleft;

let canMove = true;
// sets the eventlistener to check for if a certian key is pressed and do a specfic action accordingly 
addEventListener("keydown", function (event) {
    console.log(event.code)
    if (canMove) {
        if(!attack){
        if (event.code == 'ArrowRight'||event.code == 'KeyD') {
            persondirection = "right";
            realdirectionx = "right";
            realdirection = "right";
            checkifwalkingright = true;
            vx = 1;
        }
        if (event.code == 'ArrowLeft'||event.code == 'KeyA') {
            persondirection = "left";
            realdirectionx = "left";
            realdirection = "left";
            checkifwalkingleft = true;
            vx = -1;
        }
        if (event.code == 'ArrowDown'||event.code == 'KeyS') {
            checkifwalkingdown = true;
            realdirectiony = "down";
            realdirection = "down";
            vy = 1;
        }
        if (event.code == 'ArrowUp'||event.code == 'KeyW') {
            checkifwalkingup = true;
            realdirectiony = "up";
            realdirection = "up";
            vy = -1;
        };
        }
        if (event.code == 'Space') {
            // Handle Space key event here     
            attack = true;
        }
       
    }

})
// sets the eventlistener to check for if a certian key is unpressed and do a specfic action accordingly 
addEventListener("keyup", function (event) {
    if (event.code == 'ArrowRight'||event.code == 'KeyD') {
        if (!checkifwalkingleft) {
            vx = 0
        }
        else {
            persondirection = "left";
            realdirectionx = "left";
            vx = -1;
        }
        checkifwalkingright = false;
    };
    if (event.code == 'ArrowLeft'||event.code == 'KeyA') {
        if (!checkifwalkingright) {
            vx = 0
        }
        else {
            persondirection = "right";
            realdirectionx = "right"
            vx = 1;
        }
        checkifwalkingleft = false;
    };
    if (event.code == 'ArrowDown'||event.code == 'KeyS') {
        if (!checkifwalkingup) {
            vy = 0
        }
        else {
            realdirectionx = "up"
            vy = -1;
        }
        checkifwalkingdown = false;

    };
    if (event.code == 'ArrowUp'||event.code == 'KeyW') {
        if (!checkifwalkingdown) {
            vy = 0
        }
        else {
            realdirectionx = "down"
            vy = 1;
        }
        checkifwalkingup = false;

    };
    if (event.code == 'Space') {
        // Handle Space key event here
        attack = false;
    }
})

