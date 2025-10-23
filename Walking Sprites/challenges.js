// ===============================
// Canvas Walking Sprite Challenge
// ===============================

let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d");

let x = 100;
let y = 100;
let speed = 10;

let zombieBack = document.getElementById("zombie_back");
let zombieFront = document.getElementById("zombie_front");
let zombieLeft = document.getElementById("zombie_left");
let zombieRight = document.getElementById("zombie_right");

pencil.drawImage(zombieFront, x, y, 100, 100);

function spinLeft(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(zombieLeft, x, y, 100, 100);
}

function spinBack(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(zombieBack, x, y, 100, 100);
}

function spinRight(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(zombieRight, x, y, 100, 100);
}

function spinFront(){
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    pencil.drawImage(zombieFront, x, y, 100, 100);
}

function spinningZombie(){
    setTimeout(spinLeft, 50);
    setTimeout(spinBack, 100);
    setTimeout(spinRight, 150);
    setTimeout(spinFront, 200);
}

function onKeyPressed(event){
    let isWPushed = event.key == "w";
    let isDPushed = event.key == "d";
    let isAPushed = event.key == "a";
    let isSPushed = event.key == "s";
    let isPPushed = event.key == "p";
    if(isWPushed)
    {
        pencil.clearRect(0, 0, canvas.width, canvas.height);
        y -= speed;
        pencil.drawImage(zombieBack, x, y, 100, 100);
    }
    else if(isDPushed)
    {
        pencil.clearRect(0, 0, canvas.width, canvas.height);
        x += speed;
        pencil.drawImage(zombieRight, x, y, 100, 100);
    }
    else if(isAPushed)
    {
        pencil.clearRect(0, 0, canvas.width, canvas.height);
        x -= speed;
        pencil.drawImage(zombieLeft, x, y, 100, 100);
    }
    else if(isSPushed)
    {
        pencil.clearRect(0, 0, canvas.width, canvas.height);
        y += speed;
        pencil.drawImage(zombieFront, x, y, 100, 100);
    }
    else if(isPPushed)
    {
        spinningZombie();
    }
}

document.addEventListener("keydown", onKeyPressed);