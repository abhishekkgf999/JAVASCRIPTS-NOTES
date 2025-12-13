// eventListener = Allows us to "listen" for specific events on elements
// Common keyboard events: 
//  1. keydown → Fires when a key is pressed
//  2. keyup   → Fires when a key is released
// Syntax: document.addEventListener(event, callback);

// Selecting the box element
const myBox = document.getElementById("myBox");

// ----------------- Keyboard Events -----------------
// When any key is pressed down
document.addEventListener("keydown", event => {
    myBox.textContent = "😮";                 // Change emoji when key pressed
    myBox.style.backgroundColor = "tomato";  // Change background
});

// When any key is released
document.addEventListener("keyup", event => {
    myBox.textContent = "😁";                    // Reset emoji
    myBox.style.backgroundColor = "lightBlue";   // Reset background
});

// ----------------- Movement with Arrow Keys -----------------
// Define how much the box moves each time (in px)
const movement = 10;
let x = 0; // horizontal position
let y = 0; // vertical position

document.addEventListener("keydown", event => {
    // Check if key pressed is an arrow key
    if(event.key.startsWith("Arrow")){
        event.preventDefault(); // prevent scrolling with arrow keys

        // Move depending on which arrow key was pressed
        switch(event.key){
            case "ArrowUp":
                y -= movement;  // move up
                break;
            case "ArrowDown":
                y += movement;  // move down
                break;
            case "ArrowLeft":
                x -= movement;  // move left
                break;
            case "ArrowRight":
                x += movement;  // move right
                break;
        }

        // Update the position of the box (absolute/relative needed in CSS)
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
