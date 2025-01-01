// you are asked to square every digit of a number and concatenate them.

const squareDigits = (num) => +num.toString().split('').reduce((a, b) => a + Number(b)**2, '');
const num = 3212
console.log(squareDigits(num))