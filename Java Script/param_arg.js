function add(a,b){
    if ( a==undefined || b==undefined){
        a = 0;
        b = 0;
    }
    let sum = a + b;
    console.log("The sum is: " + sum);
}

add();

function sayHello(name="Guest"){
    console.log("Hello " + name);
}
sayHello('Fuad');