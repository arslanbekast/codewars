// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0

const findAverage = arr => arr.length ? arr.reduce((sum, el) => sum + el, 0) / arr.length : 0

console.log(findAverage([1,2,3]))