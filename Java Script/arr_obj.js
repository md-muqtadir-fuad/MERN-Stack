let persons = [
    { name: "John", age: 30, city: "New York" , interest : ["music", "sports"]},
    { name: "Jane", age: 25, city: "Los Angeles" },
    { name: "Jim", age: 35, city: "Chicago" },
    { name: "Jill", age: 28, city: "Miami" }
]
// Filter persons older than 28
let olderThan28 = persons.filter(person => person.age > 28);
console.log("Persons older than 28:", olderThan28);

console.log("--------------------------------------------------");
console.log(persons[2].name); // Accessing the name of the third person

for (let person of persons) {
    console.log(`${person.name} is ${person.age} years old and lives in ${person.city}.`);
}

for (let i=0; i <= persons[0].interest.length - 1; i++){
    console.log(persons[0].interest[i]);
}

persons[0].interest.push("traveling");
console.log(persons[0].interest);

persons[0].interest.forEach(el => {console.log(el);});