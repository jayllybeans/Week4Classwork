// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:

//yes this is my actual car

let car = {
    brand : "Chevy",
    model : "Malibu",
    year : 2017,
}

console.log(car);
console.log(car.brand);

// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:

car.year = 2025;
console.log("My car is now a " + car.year + " " + car.brand + "!");


// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:

car.color = "Silver";
console.log("My car is " + car.color);


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:

let studentA = {
    name : "Simon",
    math : "A",
    art : "C-",
}

let studentB = {
    name : "Bill",
    math : "B-",
    art : "A+",
}

function printArtGrade(student){
    console.log(student.name + "'s art grade: " + student.art);
}

printArtGrade(studentA);
printArtGrade(studentB);

// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:

let player = {
    name : "Jim Bob",
    score : 0,
}

console.log(player.name + "'s points: " + player.score);
console.log("Press the ENTER key give Jim Bob more points!");

function addPoints(points)
{
    points.score += Math.floor(Math.random() * (5 + 1) + 1);
    console.log(points.name + "'s points: " + points.score);
}

function getInfo(event)
{
    let isEnterKey = event.key == "Enter";
    if(isEnterKey){
        addPoints(player);
    }
}

document.addEventListener("keydown", getInfo);

// ================================================
// End of Object Challenges
// ================================================
