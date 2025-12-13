/*
ERROR = AN OBJECT THAT IS CREATED TO REPRESENT A PROBLEM THAT OCCURS. OCCURS OFTEN WITH USER INPUT
        OR ESTABLISHING A CONNECTION
        
try { } = Encloses code that might potentially cause an error
catch { } = Catch and handle any thrown Errors from try { }
finally { } = (optional) Always executes. Used mostly for clean up
ex. close files, close connections, release resources
*/

try{
        console.lag("Hello");
        //NETWORK ERRORS
        //PROMISE REJECTIONS
        //SECURITY ERRORS
}
catch(error){
        console.error(error);
}
finally{
        //COSE FILES
        //CLOSE CONNECTIONS
        //RELEASE RESOURCES
        console.log("This always executes");
}

console.log("You have reached the end!");


//------------------------------------------ EXAMPLE 2 ------------------------------------------------

try{
        const dividend = window.prompt("Enter a dividend: ");
        const divisor = window.prompt("Enter a divisor: ");    

        const result = dividend/divisor;
        console.lag(result);
}
catch(error){
        console.error(error);
}

console.log("you have reached the end");

