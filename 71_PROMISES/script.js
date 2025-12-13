/*
Promise = An Object that manages asynchronous operations.
          Wrap a Promise Object around {asynchronous code}
          "I promise to return a value"
          PENDING -> RESOLVED or REJECTED
          new Promise((resolve, reject) => {asynchronous code})

------------------------------------------------------------------------------------------------------------          

🔹 1. What is a Promise?

A Promise is a JavaScript object that represents the result of an asynchronous operation.
Instead of immediately returning the result, a Promise returns a placeholder which will eventually have:
✅ Success (resolved) value OR
❌ Failure (rejected) reason

------------------------------------------------------------------------------------------------------------

🔹 2. States of a Promise

A Promise goes through 3 states:

Pending → Initial state, waiting for async operation.

Fulfilled → The operation completed successfully (resolve() called).

Rejected → The operation failed (reject() called).

👉 Once a Promise is fulfilled or rejected, it becomes settled and cannot change state again.

------------------------------------------------------------------------------------------------------------

🔹 4. Using a Promise

We handle the result with:

.then() → runs when resolved

.catch() → runs when rejected

.finally() → runs always, whether resolved or rejecte

------------------------------------------------------------------------------------------------------------
*/

function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = true;
            if(dogwalked){
                resolve("You walk the dog 🐕");
            }else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("You clean the kitchen 🧹");
            }else{
                reject("You DIDN'T clean the kitchen");
            }
        }, 2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashout = false;
            if(trashout){
                resolve("You take out the trash ♻️");
            }else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    })
}


//PROMISE CHAINING
walkDog()
    .then(value => {
        console.log(value);
        return cleanKitchen();
    })
    .then(value => {
        console.log(value);
        return takeOutTrash();
    })
    .then(value => {
        console.log(value);
        console.log("You finished all the chores");
    })
    .catch(error => console.error(error));
