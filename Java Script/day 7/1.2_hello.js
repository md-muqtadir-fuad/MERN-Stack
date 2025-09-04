let persons = ["Fuad", "rokon", "sami", "mohamed", 1, 2, null, undefined, true, false];
console.log("Hello " + persons[6] + "!");

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//for loop
for (let j= 0; j < 2; j++) {
    if( j==0){
            console.log("Using for loop:");
            for (let i = 0; i <num.length; i++) {
            console.log(num[i]);
        }
    }
    if( j==1){
        console.log("Using forEach loop:");
        num.forEach(function (element) {
            console.log(element);
        });
    }
}


//forEach loop

persons.forEach(function(item, index, arr) {
    console.log("Item: " + item + ", Index: " + index + ", Array: " + arr);
});



// Array Methods
let fruits = ["apple", "banana", "orange", "mango"];
console.log("Original array: " + fruits);