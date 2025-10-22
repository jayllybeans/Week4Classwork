// ================================
// Canvas Animation Challenges
// ================================

const canvas = document.getElementById("myCanvas");
const pencil = canvas.getContext("2d");

// -----------------------------------------------
// Challenge 1: Clear the Canvas
// Draw a red square at (50, 50). 
// After 2 seconds, clear the entire canvas.

pencil.fillStyle = "red";
pencil.fillRect(50, 50, 150, 150);
function clearCanvas(){
    pencil.clearRect(0, 0, 200, 200);
}
setTimeout(clearCanvas, 2000);

// -----------------------------------------------
// Challenge 2: Blinking Shape
// Draw a blue circle on the canvas.
// Use setInterval to make it appear and disappear every half second.

let isVisible = true;

function showCircle()
{
    if (isVisible){
        pencil.beginPath();
        pencil.arc(250, 250, 50, 0, Math.PI * 2);
        pencil.fillStyle = "blue";
        pencil.fill();
        pencil.closePath();
    }
    else{
        pencil.clearRect(200, 200, 250, 250);
    }
    isVisible = !isVisible;
}
setInterval(showCircle, 500);

// -----------------------------------------------
// Challenge 3: Growing Circle
// Draw a small green circle that gets bigger every 50ms.
// Use setInterval, and clear + redraw each frame.
// Stop when its radius reaches 50.

let size = 5;

function growCircle(){
    if (size > 50){
        return;
    }
    size++;
    pencil.clearRect(350, 50, 250, 250);
    pencil.beginPath();
    pencil.arc(400, 100, size, 0, Math.PI * 2);
    pencil.fillStyle = "green";
    pencil.fill();
    pencil.closePath();
}

setInterval(growCircle, 50);



// -----------------------------------------------
// Challenge 4: Moving Ball
// Draw a circle starting at x = 0.
// Use setInterval to move it to the right by 5 pixels every 100ms.
// Clear the canvas each time before redrawing.
// Stop when the ball goes to the right 100 units (pixels)







// -----------------------------------------------
// Challenge 5: Bouncing Balls
// Draw two balls moving at different speeds and directions.
// Each time a ball hits a wall, make it bounce (reverse its direction).
// Use clearRect() each frame to keep the motion smooth.








