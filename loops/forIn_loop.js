const obj = {
    js:'javaScript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
}

for (const key in obj) {
//    console.log(key); //for keys
//    console.log(`${key} shortcut for ${obj[key]}`);
}

//when we traverse array using "forin" loop.
//by default returns indexes/keys of the array.

const arr = ['hello' , 'bye' , 'tata']

for (const key in arr) {
    console.log(key , arr[key]);
}

// map is not iteratable