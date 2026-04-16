let firstNumber = document.querySelector("#numberA").value;
let secondNumber = document.querySelector("#numberB").value;
let symbol = document.querySelector("#symbol").value;
let resultArea = document.querySelector("#numberB").value;

function subtract(){
    result = firstNumber - secondNumber;
    result.innerText = result;
}
function add(){
    result = firstNumber + secondNumber;
    result.innerText = result;
}
function multiply(){
    result = firstNumber * secondNumber;
    result.innerText = result;
}
function divide(){
    result = firstNumber / secondNumber;
    result.innerText = result;
}
function main(){
    if(symbol=='+'){
        add()
    }
    else if(symbol== 'x'){
        multiply()
    }
    else if(symbol== '-'){
        subtract()
    }
    else if(symbol== '/'){
        divide()
}
else{
    let msg=`${symbol} not recognized`
    console.error(MessageChannel);
}
}
