const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }

    inputBox.value = "";
}


/*
### 1️⃣ Event Listener (Event Delegation)

* A click event listener is attached to listContainer
* Instead of adding listeners to each <li>, one listener handles all clicks
* This technique is called event delegation


### 2️⃣ event.target

* event.target = the exact element that was clicked
* Could be:

  * an <li> (task item)
  * a <span> (delete button)


### 3️⃣ When <li> is clicked

if(event.target.tagName === "LI")

* Checks if the clicked element is an <li>
* tagName is always in UPPERCASE

event.target.classList.toggle("checked");

* Adds the checked class if not present
* Removes it if already present
* Used for:

  * strike-through
  * change color
  * mark task as completed



### 4️⃣ When <span> is clicked

else if(event.target.tagName === "SPAN")

* <span> is usually a delete (❌) button

event.target.parentElement.remove();

* parentElement = the <li> that contains the span
* Removes the entire <li> from the DOM
* Deletes the task


### 5️⃣ false parameter

}, false)


* Means event bubbling phase (default behavior)
* Click moves from child → parent
* Can be omitted (not mandatory)

*/
listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();

    }else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();

    }
}, false)



/*

### 1️⃣ saveData() – Save tasks


localStorage.setItem("data", listContainer.innerHTML);


* localStorage → browser storage (key–value pair)
* "data" → key name
* listContainer.innerHTML → all <li> tasks as HTML
* Saves entire task list in browser storage
* Data persists even after page refresh / browser close

---

### 2️⃣ showTask() – Load tasks


listContainer.innerHTML = localStorage.getItem("data");


* Retrieves saved data using the same key "data"
* Restores all tasks back into the list
* Used when the page loads

---

## 🔁 Typical Flow (How it works together)

1. User adds / deletes / checks a task
2. Call saveData() after every change
3. Data is stored in localStorage
4. On page reload → call showTask()
5. Tasks reappear automatically

*/
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();