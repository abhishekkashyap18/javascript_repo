// <------------- FOR OF LOOP ------------->

// ["" , "" , ""]
// [{} , {} , {}]

const arr = [1 , 2 , 3 , 4 , 5];

for (const num of arr) {
    console.log(num);
}

// <------------------ MAPS ------------------------->

// map is an object holds key value pair, unique value.
const map = new Map()
map.set('IN' , "india")
map.set('usa' , "London")
map.set('fra' , "france")
//7:50 --> timestamp (chai aur code)

// console.log(map)

//for looping iterating/accessing only on keys.
for (const [key , value] of map) {
    console.log(key , "-" ,value);
}

// iterating object using "forof" loop
//we cannot iterate objets using "forof" loops
//we have other methods for iterating object.
// const myobject = {
//     'game' :'bgmi',
//     'game2' : 'boom'
// }

// give error
// for (const [keys , values] of myobject) {
//     console.log(keys , values);
// }

