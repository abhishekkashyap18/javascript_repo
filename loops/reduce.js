//reduce , returns a sum of array or object values.

const arr = [
    {
        course: "lovebabbar",
        price: 300
    },
    {
        course: "apnikaksha",
        price: 600
    },
    {
        course: "chaiaurcode",
        price: 900
    }
];
                                                             
let totalPrice = arr.reduce((acc , item) => acc + item.price, 0)   // 0 -> is the initial value
console.log(totalPrice);