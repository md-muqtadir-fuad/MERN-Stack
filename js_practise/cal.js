let result = document.getElementById('result');

function mul() {
    let num1 = document.getElementById('1st').value;
    let num2 = document.getElementById('2nd').value;
    product = Number(num1) * Number(num2);
    result.textContent = product;
}
function div() {
    let num1 = document.getElementById('1st').value;
    let num2 = document.getElementById('2nd').value;
    if (num2 === '0') {
        result.textContent = "0 Division error";
    }
    else {
        product = Number(num1) / Number(num2);
        result.textContent = product;
    }

}