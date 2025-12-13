/*
Async/Await = Async = makes a function return a promise
              Await = makes an async function wait for a promise

            Allows you write asynchronous code in a synchronous manner
            Async doesn't have resolve or reject parameters
            Everything after Await is placed in an event queue

------------------------------------------------------------------------------------------------------------

async and await are modern JavaScript keywords that provide a way to write asynchronous code 
that looks and behaves like synchronous (normal, blocking) code. They are syntactic sugar built 
on top of Promises and are the preferred way to handle asynchronous operations cleanly, making 
your code much easier to read and maintain than using .then() chains or callbacks.

------------------------------------------------------------------------------------------------------------

async: A keyword used before a function. It automatically makes the function return a Promise, even if you return a normal value.

await: Used only inside an async function. It pauses execution until the Promise resolves (or rejects).

It allows you to write asynchronous code as if it were synchronous.
*/


function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogwalked = false;
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
            const trashout = true;
            if(trashout){
                resolve("You take out the trash ♻️");
            }else{
                reject("You DIDN'T take out the trash");
            }
        }, 500);
    })
}

async function doChores() {
    
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
        
        console.log("You finished all the chores!");    
    }
    catch(error){
        console.error(error);
    }

}

doChores();