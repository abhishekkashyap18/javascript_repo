//sigleton object
const tinder = new Object();

tinder.id = '123abc'
tinder.name = 'sammy'
tinder.isLoggedIn  = false

// console.log(tinder); 

//obejct inside object
const regularUser = {
    email:"some@gmail.com",
    fullName : {
        userfullname: {
            firstName: "abhishek",
            lastName: "kashyap"
        
        }
    }
}

// console.log(regularUser.fullName);

//merging two objects
const obj1 = {1:"a" , 2:"b"};
const obj2 = {3:"c" , 4:"d"};

// const obj3 = Object.assign({},obj1,obj2);

//  {} -> this is an optional parameter.agar option parameter nahi pass karennge to saari values obj1 me marge hongi , warna option parameter me jaiyengi. 
// agar pass nahi karte {} to bhi kuch problem nahi hai, works fine.  

// <--- using spread operator--->
// const obj3 = {...obj1 , ...obj2};

 console.log(obj3);


//  <----JAB BHI DATABASE SE VALUE AIYEGI---->
const user = [
    {
        id:1 , 
        email:"ab@gmail.com"
    },
    {
        id:2 , 
        email:"ka@gmail.com"
    },
    {
         id:3 , 
        email:"an@gmail.com"
    },
]

//use map and iterate value.
//ya phir iss syntax se access karsakte hai.
user[1].email;  //can use dot to access value because user[1] is an object.

// accessing keys and values

//returns all the keys of an object inside an array.
console.log(Object.keys(tinder))

//returns all the values of an object inside an array.
console.log(Object.values(tinder))

//convert object into array and keys:value pair are also stored inside an array. ex- [['1':'a' , '2':'b']]
console.log(Object.entries(tinder))

//to check wheater a key is present in an object.
//return boolen value.
console.log(tinder.hasOwnProperty('isLoggedIn'))




//object literals
//behind the scene keys are strings.
//  const obj1 = {
//     name: "Abhishekkashyap",
//     location: "modinagar",
//     isLoggedIn: false,
//  }

// //Aceesing object values
// //using dot
// console.log(obj1.name);

// // using square brakets
// console.log(obj1["location"]);

// // functin in object
// obj1.greet = function(){
//     console.log("hello");
// }

// //gives the "referencce" of the function.
// console.log(obj1.greet);

// //runs the function.
// console.log(obj1.greet());



// <---- OBJECT DESTRUCTURING ----> 
const course = {
    courseName: "js",
    price: "223",
    courseConstructor: "abhishek"
}

//const {value to be extracted} = kaha se value extract karni hai;
// const {courseConstructor} = course;

// agar apne according naam dena ho
const{courseConstructor: instructor} = course;


// console.log(courseConstructor);
console.log(instructor);
