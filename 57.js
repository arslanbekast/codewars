// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers[0] + sortedNumbers[1]
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]))