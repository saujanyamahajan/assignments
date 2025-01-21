/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0; // Initialize result to 0
}

// Add a number to the result
add(number) {
    this.result += number;
}

// Subtract a number from the result
subtract(number) {
    this.result -= number;
}

// Multiply the result by a number
multiply(number) {
    this.result *= number;
}

// Divide the result by a number
divide(number) {
    if (number === 0) {
        throw new Error("Division by zero is not allowed");
    }
    this.result /= number;
}

// Clear the result
clear() {
    this.result = 0;
}

// Get the current value of the result
getResult() {
    return this.result;
}

// Calculate a string expression
calculate(expression) {
  try {
    // Remove all extra spaces from the expression
    const sanitizedExpression = expression.replace(/\s+/g, '');

    // Check for invalid characters in the expression
    if (!/^[-+*/()0-9.]+$/.test(sanitizedExpression)) {
        throw new Error("Invalid characters in the expression");
    }

    // Check for division by zero
    if (/\/0(?!\.)/.test(sanitizedExpression)) { // Matches `/0` but not `/0.` for decimals
        throw new Error("Division by zero is not allowed");
    }

    // Evaluate the expression
    this.result = eval(sanitizedExpression);

    return this.result;
} catch (error) {
    throw new Error(error.message || "Invalid expression");
}
}
}





module.exports = Calculator;
