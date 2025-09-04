//Implicit Coersion
//String to Number
//Number
//Boolean

let a = "s";
let b = 10;

console.log(typeof(a + b));
console.log(a - b);

console.log(parseInt("10a"));

let x = "Hello" && 123;
let y = "Hello" || 123;
let z = null && "World";
console.log(x); // 123, because "Hello" is truthy
console.log(y); // "Hello", because "Hello" is truthy
console.log(z); // null, because null is falsy 

//truthy and falsy values
//truthy: returns true in boolean context
//falsy: returns false in boolean context
//falsy values: 0, "", null, undefined, NaN
// truthy values: all other values

console.log(Boolean("Hello")); // true
console.log(Boolean(null)); // false

//This value returns false in boolean context
/* 
null
undefined
0
NaN
n0
"" (empty string)
*/
console.log(Boolean(NaN)); // false