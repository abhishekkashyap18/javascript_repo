// Timestamp - 5:50 --> chai aur javascript

//Immedialtely invoked function expression(IIFE).
//when we want our function to run immidately
// to avoid pollution from global scope variables inside our function
//we use IIFE.
// To make a function IIFE , we wrap the function inside "()".
//Immidiately invoked function does not know where to stop/end the context.
//To end the context we use semicolon after our function. 

(function chai(){
    //named IIFE
    console.log('DB connected');
})();


(() => {
    //unnamed IIFE
    console.log("unamed IIFE");
})('hitesh');