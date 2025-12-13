/*
DOM =   DOCUMENT OBJECT MODEL
        Object{} that represents the page you see in the web browser
        and provides you with an API to interact with it.
        Web browser constructs the DOM when it loads an HTML document,
        and structures all the elements in a tree-like representation.
        JavaScript can access the DOM to dynamically
        change the content, structure, and style of a web page.

----------------------------------------------------------------------------------------------------------

🌳 DOM (Document Object Model) in JavaScript
🔹 What is DOM?

DOM = Document Object Model.

It is a tree-like representation of the entire HTML page.

JavaScript can use the DOM to read, change, add, or delete HTML elements.

----------------------------------------------------------------------------------------------------------

The DOM (Document Object Model) is a programming interface for web documents. 
It represents the page so that programs can change the document structure, style, 
and content. When a web page is loaded, the browser creates a DOM representation of that page.
*/

const username = "Abhishek";

const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? ` Guest` : ` ${username}`;