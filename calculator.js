function calculateResult() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = document.getElementById("result");
    let operation = document.getElementById("operator").value;
    
    let res;

    if (isNaN(num1) || isNaN(num2)) {
        window.alert("Please enter only numbers");
        return;
    }

    try {
        switch (operation) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "*":
                res = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    window.alert("Can't divide by 0");
                    return;
                }
                res = num1 / num2;
                break;
            default:
                window.alert("Invalid operation");
                return;
        }
    } catch (e) {
        window.alert("An error occurred: " + e.message);
        return;
    }

    result.value = res;
}
