// 📌 eventListener = A way to "listen" for specific events on elements 
//    (like click, mouseover, mouseout, keypress, etc.)
//    Syntax: element.addEventListener("event", callbackFunction);

// Select DOM elements by ID
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

/* 
🔹 Event Object (event)
When an event happens (like a click), the browser passes an "event object"
to the callback function. Example: event.target → gives the element that triggered the event.
*/

// Example 1: Direct click event on myBox
/*
myBox.addEventListener("click", event => {
    // Changes background and text when box is clicked
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
});
*/

// Example 2: Mouse hover effects on myBox
/*
myBox.addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😮";
});

myBox.addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click Me 😃";
});
*/

// ✅ Example 3: Controlling myBox using myButton's events
// (When you hover/click on the button, the box changes)

// When button is clicked → change box color + text
myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 🤕";
});

// When mouse goes over button → change box temporarily
myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😮";
});

// When mouse leaves button → reset box
myButton.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😃";
});
