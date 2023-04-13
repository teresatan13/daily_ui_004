function clearScreen() {
    document.getElementById("result").value = '';
}


function display(value) {
    document.getElementById("result").value += value;
}


function calculate() {
    let expression = document.getElementById("result").value;
    let result = eval(expression);
    document.getElementById("result").value = result;
}

function equal() {
    let expression = document.getElementById;
    if(expression) {
        document.getElementById = eval(expression)
    }
}