// Your task is to make a function that can take any non-negative integer as an argument and return
// it with its digits in descending order.

const descendingOrder = (n) => +n.toString().split('').sort((a, b) => b-a).join('')

console.log(descendingOrder(42145))


