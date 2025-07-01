function divide(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

console.log("10 / 2 =", divide(10, 2)); // Output: 5
console.log("10 / 0 =", divide(10, 0)); // Output: null + error message
