// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
// Assume that the input n will always be a positive integer.

const sumCubes = (n) => [...Array(n)].map((_, i) => i+1).reduce((a, b) => a + Math.pow(b, 3), 0);

console.log(sumCubes(3))