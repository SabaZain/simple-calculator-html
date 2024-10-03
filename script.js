function calculate(){
    const firstNumber = parseFloat(document.getElementById("firstNumber").value)
    const secondNumber = parseFloat(document.getElementById("secondNumber").value)
    const operator = document.getElementById("operator").value

    let result;
    if(operator === "Addition"){
        result = firstNumber + secondNumber
    } else if(operator === "Subtraction"){
        result = firstNumber - secondNumber
    } else if(operator === "Multiplication"){
        result = firstNumber * secondNumber
    } else if(operator === "Division"){
        result = firstNumber / secondNumber
    } else if(operator === "Exponent"){
        result = firstNumber ** secondNumber
    } else if(operator === "Percentage"){
        result = firstNumber / secondNumber * 100
    } else {
        result = "Please Select a Valid Operator"
    }

    document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}