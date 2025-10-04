let person = {
    name: "John", // name: "John" -- > key-value pair or property
    age: 30,
    meFunc: function(){
        console.log("Hello, " + this.name);
    }
};
person.name = "Jane"; // Modifying the name property
person.age = 25; // Modifying the age property
console.log(person.name); // Output: Jane
console.log(person.age); // Output: 25

delete person.age; // Deleting the age property
console.log(person); // Output: undefined

person.meFunc(); // Output: Hello, Jane
person.meFunc = function() {
    console.log("Fuad, " + this.name);
}
person.meFunc(); // Output: Fuad, Jane

person.add = function(a, b) {
    return a + b;
};
console.log(person.add(5, 10)); // Output: 15

console.log(person['add'](5,4));