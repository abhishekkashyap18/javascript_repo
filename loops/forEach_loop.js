const coding = ['js' , 'ruby' , 'hello' , 'googles']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// In this method only use function reference , do not execute the function
// coding.forEach(printMe);

// forEach loop k pass sirf item ka hi access nahi hota , baaki properties ka bhi hota hai
//item , indexes , array

// coding.forEach((items , index , arr) => {
//     console.log(items , index , arr);
// })

// --> forEach loop is very usefull
// --> array k andar objects ko traverse karne k liye.

const mycoding = [
    {
        languageName:"javaScript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    }
];

mycoding.forEach( (item) => {
    console.log(item["languageName"]);
})


// forEach loop does not return anything