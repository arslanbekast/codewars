// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    const sortedNumbers = numbers.split(' ').sort((a,b)=>a-b)
    return `${sortedNumbers.slice(-1)} ${sortedNumbers[0]}`
}

console.log(highAndLow("1 9 3 4 -5"))