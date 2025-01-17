// The goal of this exercise is to convert a string to a new string where each character
// in the new string is "(" if that character appears only once in the original string, or ")" if that
// character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
    const lettersArr = word.toLowerCase().split('')
    return lettersArr.map(el => {
        const count = lettersArr.filter(letter => letter === el).length
        return count > 1 ? ')' : '('
    }).join('')
}

console.log(duplicateEncode("din"))
console.log(duplicateEncode("recede"))




