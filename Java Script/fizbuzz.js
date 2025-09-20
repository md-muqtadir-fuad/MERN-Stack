for(let i=1; i<=100; i++){
    var fizz = false;
    var buzz = false;

    if(i%3==0){
        fizz = true;
    }
    if(i%5==0){
        buzz = true;
    }
    if(fizz && !buzz){
        console.log("Fizz");
    }
    else if(!fizz && buzz){
        console.log("Buzz");
    }
    else if(fizz && buzz){
        console.log("FizzBuzz");
    }
    else{
        console.log(i);
    }
}