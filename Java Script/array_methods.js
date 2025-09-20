let list = ["apple", "banana", "cherry"];

// Adding an element to the end of the array
list.push("date");
console.log(list); // ["apple", "banana", "cherry", "date"]
// Removing the last element from the array
let lastItem = list.pop();
console.log(lastItem);
console.log(list); // ["apple", "banana", "cherry"]
// Adding an element to the beginning of the array
list.unshift("avocado");
console.log(list); // ["avocado", "apple", "banana", "cherry"]
// Removing the first element from the array
let firstItem = list.shift();
console.log(firstItem);
console.log(list); // ["apple", "banana", "cherry"]
// Finding the index of an element
let index = list.indexOf("banana");
console.log(index); // 1
// Removing an element by index
if (index !== -1) {
    list.splice(index, 1);
}
console.log(list); // ["apple", "cherry"]
// Reversing the array
list.reverse();
console.log(list); // ["cherry", "apple"]
// Sorting the array
list.sort();
console.log(list); // ["apple", "cherry"]
// Joining array elements into a string
let str = list.join(", ");
console.log(str); // "apple, cherry"
// Splitting a string into an array
let newList = str.split(", ");
console.log(newList); // ["apple", "cherry"]
// Slicing a portion of the array
let sliced = newList.slice(0, 1);
console.log(sliced); // ["apple"]
// Concatenating two arrays
let moreFruits = ["date", "elderberry"];
let combined = newList.concat(moreFruits);
console.log(combined); // ["apple", "cherry", "date", "elderberry"]
// Checking if an array includes a certain element
let hasBanana = combined.includes("banana");
console.log(hasBanana); // false
let hasApple = combined.includes("apple");
console.log(hasApple); // true
// Finding the length of the array
console.log(combined.length); // 4
// Mapping over the array to create a new array
let uppercased = combined.map(fruit => fruit.toUpperCase());
console.log(uppercased); // ["APPLE", "CHERRY", "DATE", "ELDERBERRY"]
// Filtering the array based on a condition
let filtered = combined.filter(fruit => fruit.startsWith("d"));
console.log(filtered); // ["date"]
// Reducing the array to a single value
let concatenated = combined.reduce((acc, fruit) => acc + " " + fruit);
console.log(concatenated); // "apple cherry date elderberry"
// Finding an element in the array
let found = combined.find(fruit => fruit.length > 5);
console.log(found); // "cherry"
// Finding the index of an element based on a condition
let foundIndex = combined.findIndex(fruit => fruit.length > 5);
console.log(foundIndex); // 1
// Filling part of the array with a static value
combined.fill("kiwi", 1, 3);