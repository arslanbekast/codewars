// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0

console.log(isDivisible(3,3,4))
