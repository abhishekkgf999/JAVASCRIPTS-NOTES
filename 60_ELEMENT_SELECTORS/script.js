/*
element selectors = Methods used to target and manipulate HTML elements
                    They allow you to select one or multiple HTML elements
                    from the DOM (Document Object Model)

1. document.getElementById()        // ELEMENT OR NULL
2. document.getElementsClassName()  // HTML COLLECTION
3. document.getElementsByTagName()  // HTML COLLECTION
4. document. querySelector ()       // FIRST ELEMENT OR NULL
5. document.querySelectorAll()      // NODELIST


*/

const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});


const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "beige";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}


const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});
