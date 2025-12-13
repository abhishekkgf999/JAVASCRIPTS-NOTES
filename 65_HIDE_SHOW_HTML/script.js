// ----------------- Toggle Image Display -----------------

// Select elements from the DOM
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

// Add a click event listener to the button
myButton.addEventListener("click", event => {
    
    // Check if image is hidden (display: none)
    if(myImg.style.display === "none"){
        myImg.style.display = "block";        // Show image
        myButton.textContent = "Hide";        // Change button text
    }
    else{
        myImg.style.display = "none";         // Hide image
        myButton.textContent = "Show";        // Change button text
    }
});
