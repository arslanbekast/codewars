const isPalindrome = (x) => x.toLowerCase().split('').reverse().join('') === x.toLowerCase()

console.log(isPalindrome('racecar'))
console.log(isPalindrome('Abba'))