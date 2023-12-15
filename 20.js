// Write a function to convert a name into initials.
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name){
    const nameArr = name.split(' ')
    return `${nameArr[0].charAt(0).toUpperCase()}.${nameArr[1].charAt(0).toUpperCase()}`
}

console.log(abbrevName('arslanbek astemirov'))