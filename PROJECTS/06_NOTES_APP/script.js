const createBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container")
let notes = document.querySelectorAll(".input-box");


function updateStorage(){
    localStorage.setItem("NOTE", notesContainer.innerHTML);
}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("NOTE");
}

showNotes();

createBtn.addEventListener("click", ()=> {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "IMG"){
        event.target.parentElement.remove();
        updateStorage();
    }else if(event.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event => {
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})