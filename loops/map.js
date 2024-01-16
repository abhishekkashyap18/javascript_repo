const myNums = [1,2,3,4,5,6,7,8,9,10];

// let newNums = myNums.map( (num) => num + 10);
// console.log(newNums);


// <------ CHAINING ---------->
//kitne bhi level ki chaining kar sakte hai

let newNums = myNums.map( (num) => num*10).map( (num) => num+1)
console.log(newNums);