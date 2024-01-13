//syntax
// const fun1 = (num) => {
//     return num;
// }

//implicit return
//if we have one line of code inside arrow function.
//we can simply write it after arrow without a "return" statement.
const fun1 = (num) =>  num;

//if we want to pass a objection inside function.
//we can only write it inside the paranthesis.
// without paranthesis we cannot write object in an arrow function.
const fun2  = (num) => ({username:"abhishek"})
console.log(fun2());

//we cannot access variables inside function using "this" keyword , as we do it in object.

//gobal scope of node is different from gobal scope of browser
//here we get a "{}" empty object
//In browser we get window object.
    