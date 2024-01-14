// NUllish coalesic operator  do a safety check for null and undefined
let val1;
// this will store 10 instead of null in val1.
// this is helpfull when we are getting response from database.
// many times we can get null or undefined, so to handle this we use this op;erator

// val1 = null ?? 10; 

// const val2 = undefined ?? 15;

let val2;

//in this case nullish co. operator assing the first valid value to val2.
val2 = null ?? 10 ?? 15;

console.log(val2);



