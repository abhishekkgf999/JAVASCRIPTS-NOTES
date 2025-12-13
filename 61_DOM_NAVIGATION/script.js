// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild => Gets the first child element inside a parent.
// .lastElementChild => Gets the last child element.
// .nextElementSibling => Gets the next sibling of an element
// .previousElementSibling => Gets the previous sibling of an element
// .parentElement => Gets the parent of the element.
// .children => Returns all child elements of a parent (HTMLCollection).



// ----------------------------------------- .firstElementChild ------------------------------------------------

const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})


// ----------------------------------------- .lastElementChild ------------------------------------------------

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "lightgreen";
})


// ----------------------------------------- .nextElementSibling ------------------------------------------------

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "red";

//  .previousElementSibling => similar to .nextElementSibling, just select previous sibling

// ----------------------------------------- .parentElement ------------------------------------------------

const element2 = document.getElementById("ice-cream");
const parent = element2.parentElement;
parent.style.backgroundColor = "red";


//----------------------------------------- .children ------------------------------------------------

const element3 = document.getElementById("fruits");
const children = element3.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "green";
});