// function addTwoNumbers(number1 , number2){
//     console.log(number1+ number2);
// }

//agar input me number nahi mila string mil gayi to unexpected ouput aaiyega.
//if else condition k through ya or kisi method se check karna pdega
// addTwoNumbers(3 , "a");


// function addTwoNumbers(number1 , number2){
//     let result  = number1 + number2;
//     return result;
// }

// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter the username")
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("hitesh"));



//When we don't know how many arguments will user pass. ex user adding products into cart.
//This problem can be solve using rest operator.
//rest operator add parameters into array.

function calculateCartPrice(...num1){
    // return num1;
    let sum = 0
    for(var i=0; i<num1.length; i++ ){
        sum += num1[i];
    }
    return sum;
}

console.log(calculateCartPrice(2 , 5 , 6,  7));