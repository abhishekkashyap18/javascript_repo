var a = 10; //gobal scope , using var is not a good pratise.
let variable2 = 30;  //block scope , can be assign values after declaration , but cannot make duplicate
const variable3 = 40;  //blocked scop , cannot be assigned values after declaration , cannot make duplicate.



console.log(b);
let b = 9;

//var supports hoisting but let & const do not.
//because var is attached to global object.
// let and const were also allocated  memory like var before initialization but llet & const do not have global memory space.

