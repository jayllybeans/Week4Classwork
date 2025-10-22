// ================================
// JavaScript Timing Challenges
// ================================

// -----------------------------------------------
// Challenge 1: Basic Timeout
// Use setTimeout to log "Hello after 2 seconds!" after exactly 2000 milliseconds.

function sayHello(){
    console.log("Hello after two seconds!");
}

setTimeout(sayHello, 2000);

// -----------------------------------------------
// Challenge 2: Countdown
// Write a countdown from 3 to 1 using three setTimeout calls.
// Each number should appear one second apart in the console.

function number3(){
    console.log("3");
}
function number2(){
    console.log("2");
}
function number(){
    console.log("1");
}

setTimeout(number3, 1000);
setTimeout(number2, 2000);
setTimeout(number, 3000);



// -----------------------------------------------
// Challenge 3: Repeating Message
// Use setInterval to log "Still going..." every second.
// After 5 seconds, stop the interval using clearInterval.

function tick(){
    console.log("Still going...");
}

let tickerID = setInterval(tick, 1000);
function endTicker(){
    clearInterval(tickerID);
}

setTimeout(endTicker, 5000);

// -----------------------------------------------
// Challenge 4: Delayed Color Change
// Create a <div> in your HTML file with id="box". Put some text in it.
// After 3 seconds, change its background color to blue using setTimeout.

function changeBoxToBlue(){
    let box = document.getElementById("box");
    box.style.backgroundColor = "#0000ff";
}

setTimeout(changeBoxToBlue, 3000);

// -----------------------------------------------
// Challenge 5: Flashing Box
// Create a <div> in your HTML file with id="box2". Put some text in it.
// Using setInterval, make the same box’s background color toggle
// between red and white every half second (500 ms).
// Add a setTimeout to stop the flashing after 5 seconds... or when you click on it!

let isRed = false;

function toggleBoxColor(){
    let box2 = document.getElementById("box2");
    if(isRed){
        box2.style.backgroundColor = "#ffffff";
    }
    else{
        box2.style.backgroundColor = "#ff3355";
    }
    isRed = !isRed;
}
function clearFlashingBox(){
    clearInterval(boxFlash);
}
let boxFlash = setInterval(toggleBoxColor, 500);
setTimeout(clearFlashingBox, 5000);
document.getElementById("box2").onclick = clearFlashingBox;
