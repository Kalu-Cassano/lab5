function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);
console.log("Sum of array:", sumArray(numbers)); 
