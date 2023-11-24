let trailingResult = 0;
let operationOptions = ['add', 'subtract', 'multiply', 'divide'];
let workingOperation = "";

function updateDisplay(input) {
    let display = document.getElementById("display");

    if (display.innerHTML === "0" && operationOptions.indexOf(input) === -1) {
        if (input === "decimal") {
            display.innerHTML = "0."
        } else if (input === "negative-value") {
            if (display.innerHTML === "0" || display.innerHTML === "-0") {
                display.innerHTML = "-";
            } else if (display.innerHTML.indexOf("-") === -1) {
            display.innerHTML = "-" + display.innerHTML;
            } else if (display.innerHTML.indexOf("-") > -1) {
                display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length)
            }
        } else {
            display.innerHTML = input;
        }
    } else if (operationOptions.indexOf(input) !== -1) {
        if (trailingResult === display.innerHTML) {
            console.log(workingOperation, "=working operation")
            workingOperation = input;
            trailingResult = calculation(trailingResult, display.innerHTML, workingOperation);
            display.innerHTML = 0;
        } else if (workingOperation === "") {
            workingOperation = input;
            trailingResult = display.innerHTML
            console.log(workingOperation ,"new operation", trailingResult, "= trailingResult", display.innerHTML, "=display.innerHTML")
            display.innerHTML = 0;
        } else {
            trailingResult = calculation(trailingResult, display.innerHTML, workingOperation);
            display.innerHTML = 0;
            console.log(workingOperation ,"new operation", trailingResult, "= trailingResult", display.innerHTML, "=display.innerHTML")
            workingOperation = input;
        }
    } else if (input === "equals") {
        trailingResult = calculation(trailingResult, display.innerHTML, workingOperation);
        display.innerHTML = trailingResult;
        trailingResult = 0;
        workingOperation = "";
    } else if (input === "decimal") {
    if (display.innerHTML.indexOf(".") === -1) {
        display.innerHTML += "."
    }
    } else if (input === "negative-value") {
        if (display.innerHTML.indexOf("-") === -1) {
            display.innerHTML = "-" + display.innerHTML;
        } else if (display.innerHTML.indexOf("-") > -1) {
            display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length)
        }
    } else {
        display.innerHTML += input;
    }
}

function clearDisplay() {
    let display = document.getElementById("display");
    trailingResult = 0;
    display.innerHTML = 0;
}

function calculation(firstNumber, secondNumber, operation) {
    let result;
    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);
    switch(operation) {
        case "add":
            console.log("We added")
            result = firstNumber + secondNumber
            break;
        case "subtract":
            console.log("We added")
            result = firstNumber - secondNumber
            break;
        case "multiply":
            console.log("We added")
            result = firstNumber * secondNumber
            break;
        case "divide":
            console.log("We added")
            result = firstNumber / secondNumber
            break;
        default:
            console.log("Switch statement failed")
        
    }
    return result.toString();
}