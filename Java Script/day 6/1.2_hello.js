/* Number and Math Methods 
toString()
toExponential()
toFixed()
toPrecision()
Math.abs()
Math.ceil()
Math.floor()
Math.round()
Math.max()
Math.min()
Math.random()
Math.pow()
*/
let num = 123456.789;
console.log(num); // "1.23456789e+5"
console.log(num.toString()); // "123456.789"
console.log(typeof num.toString()); // "string"
console.log("toExponential method:",num.toExponential(2)); // "1.23e+5"
console.log("toFixed method:", num.toFixed(2)); // "123456.79"

console.log("floor method:", Math.floor(num)); // "123456"
console.log("ceil method:", Math.ceil(num)); // "123460"

//String Methods
// charAt()
// charCodeAt()
// concat()
// indexOf()
// lastIndexOf()
// match()
// replace()
// search()
// slice()
// split()
// toLowerCase()
// toUpperCase()

let str = "Hello, World!";
console.log(str.length); // "H"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.toUpperCase()); // "HELLO, WORLD!"

console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(-5)); // "Hello"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.substring(0, 5)); // "Hello"