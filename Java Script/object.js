let person = {
    name: "John", // name: "John" -- > key-value pair or property
    age: 30,
    location:{
        city: "New York",
        zip: 10001,
    },
    sayHello: function() {// method when it is a function inside an object
        console.log("Hello, " + this.name);
    },
    
};
console.log(person.name); // Output: John
console.log(person.location.city); // Output: New York
person.sayHello(); // Output: Hello, John
console.log(person.location.zip); // Output: 10001
let str = 'city';
console.log(person.location[str]); // Output: New York

person.sayHello(); // Output: Hello, John