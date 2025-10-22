one = 0;
two = 0;

function getRandom(min = Number(1), max = Number(2)) {
    let one_count = document.getElementById("one_count");
    let two_count = document.getElementById("two_count");
    let random_user_input = document.getElementById("random").value;
    let userInput = document.getElementById("userInput");
    let output = document.getElementById("user_match");
    let system_generated = document.getElementById("system_gen");

    max = Math.ceil(max);
    min = Math.floor(min);

    userInput.textContent = random_user_input; 
    let generated = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(generated);
    if (Number(random_user_input) === Number(generated)) {
        output.textContent = "Good Work";
    }
    else {
        output.textContent = "Not matched";
    }
    if (Number(generated) === Number(1)){
        one+=1;
    }
    else{
        two+=1;
    }
    system_generated.textContent = generated;
    one_count.textContent = one;
    two_count.textContent = two;
    

}

//generated = getRandom(1,10);
