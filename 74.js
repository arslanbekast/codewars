// Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

const spinWords = (string) => string.split(' ').map(word => word.length < 5 ? word : word.split('').reverse().join('')).join(' ')

console.log(spinWords("Hey fellow warriors"))




