// Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = numbers => numbers.reduce((sum, item) => sum + item**2, 0)

console.log(squareSum([1,2]))