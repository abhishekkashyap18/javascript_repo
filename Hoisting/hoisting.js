// console.log(getName);
// getName();

console.log(x);
var x = 10;

var getName= () => {
    console.log("this is called hoisting");
}

//Hoisting --> accessing variables & functions before even initialization , this phenomenon is called hoisting
//As shown above example , where x and getName is accessed even before initialization.
//var supports hoisting because it has global scope.
//let & const cannot be accessed before initialization because they are blocked scope.