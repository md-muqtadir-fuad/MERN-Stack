//data type
/*
Data types in JavaScript:
1. Primitive Types:
   - Number: Represents both integer and floating-point numbers.
   - String: Represents a sequence of characters enclosed in quotes.
   - Boolean: Represents a logical entity and can have two values: true or false.
   - Undefined: A variable that has been declared but not assigned a value.
   - Null: Represents the intentional absence of any object value.
   - Symbol: A unique and immutable primitive value, often used as object property keys.
    - BigInt: Represents integers with arbitrary precision, useful for large numbers.
    2. Non-Primitive Types:
    - Object: A collection of properties, where each property is a key-value pair.

    check --> typeof variableName
    - Array: A special type of object used to store ordered collections of values.
    // Example of different data types in JavaScript
        let number = 42; // Number
        let string = "Hello, World!"; // String
        let boolean = true; // Boolean
    */
   let number = 42; // Number
   let string = "Hello, World!"; // String
    let boolean = true; // Boolean
    let undefinedVar; // Undefined
    let nullVar = null; // Null
    let symbolVar = Symbol("unique"); // Symbol
    let bigIntVar = BigInt(1234567890123456789012345678901234567890); // BigInt
    let objectVar = { key: "value" }; // Object
    let arrayVar = [1, 2, 3, 4, 5]; // Array
    // Checking the data types
    console.log(typeof number); // "number"
    console.log(typeof string); // "string"
    console.log(typeof boolean); // "boolean"
    console.log(typeof undefinedVar); // "undefined"
    console.log(typeof nullVar); // "object" (this is a known quirk in JavaScript)
    console.log(typeof symbolVar); // "symbol"
    console.log(typeof bigIntVar); // "bigint"
    console.log(typeof objectVar); // "object"
    console.log(typeof arrayVar); // "object" (arrays are a type of object in JavaScript)
    // Example of checking the type of a variable
    console.log("Type of number:", typeof number); // "number"
    console.log("Type of string:", typeof string); // "string"
    console.log("Type of boolean:", typeof boolean); // "boolean"
    console.log("Type of undefinedVar:", typeof undefinedVar); // "undefined"
    console.log("Type of nullVar:", typeof nullVar); // "object" (this
    // is a known quirk in JavaScript)
    console.log("Type of symbolVar:", typeof symbolVar); // "symbol"
    console.log("Type of bigIntVar:", typeof bigIntVar); // "bigint
    console.log("Type of objectVar:", typeof objectVar); // "object"
    console.log("Type of arrayVar:", typeof arrayVar); // "object" (arrays are a type of object in JavaScript)
    
    let und = undefined; // This will throw an error because 'u' is not defined
    console.log(und); // This line will not be executed due to the error above

    console.log(typeof und);
    console.log(typeof null);
    console.log(typeof arrayVar);