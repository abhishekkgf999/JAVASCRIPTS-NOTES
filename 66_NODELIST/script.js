// ---------------- NodeList Example -----------------

// NodeList = Static collection of HTML elements (by id, class, element)
//            Created using querySelectorAll()
//            Similar to an array but lacks map(), filter(), reduce()
//            ❌ NodeList won't automatically update when DOM changes

let buttons = document.querySelectorAll(".myButtons");

// ---------------- Add CSS/HTML properties ----------------
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";   // Change button color
//     button.textContent += "😁";                // Add emoji to text
// });

// ---------------- Click Event Listener ----------------
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato"; // Change clicked button color
//     });
// });

// ---------------- Mouseover + Mouseout Events ----------------
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 40%)"; // Dark blue
//     });
// });
//
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "hsl(205, 100%, 60%)"; // Lighter blue
//     });
// });

// ---------------- Add a New Element ----------------
const newButton = document.createElement("button"); // Step 1: Create element
newButton.textContent = "Button 5";                 // Step 2: Add text
newButton.classList = "myButtons";                  // Step 3: Add class
document.body.appendChild(newButton);               // Step 4: Append to DOM

// Update NodeList (because it's static, won't update automatically)
buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ---------------- Remove an Element ----------------
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove(); // Remove clicked button from DOM
        buttons = document.querySelectorAll(".myButtons"); // Refresh NodeList
        console.log(buttons);
    });
});
