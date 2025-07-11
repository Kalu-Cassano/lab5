function calculate(op) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let res = "Invalid input";
    if (!isNaN(n1) && !isNaN(n2)) {
        if (op === "+") res = n1 + n2;
        else if (op === "-") res = n1 - n2;
        else if (op === "*") res = n1 * n2;
        else if (op === "/") res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
    }
    document.getElementById("result").innerText = `Result: ${res}`;
}
