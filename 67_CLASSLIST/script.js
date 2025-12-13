// ---------------- classList Example -----------------

// classList = Property of an HTML element
//             Lets you manipulate CSS classes dynamically
//             Useful for reusability (same CSS class → multiple elements)

// Common Methods:
//   add("className")        → Adds a class
//   remove("className")     → Removes a class
//   toggle("className")     → Adds if not present, removes if present
//   replace("old","new")    → Replaces one class with another
//   contains("className")   → Checks if the element has that class

const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

// Example: Toggle class on hover
// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// });
//
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// });

// Add initial "enabled" class to elements
myH1.classList.add("enabled");
myButton.classList.add("enabled");

// Button click event
myButton.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){   // if already disabled
        event.target.textContent += "🤬";              // append emoji
    } else {
        event.target.classList.replace("enabled", "disabled"); // swap class
    }
});

// H1 click event
myH1.addEventListener("click", event => {
    if(event.target.classList.contains("disabled")){   // if disabled
        event.target.textContent += "🤬";
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
});
