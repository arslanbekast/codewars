// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric
// digits that occur more than once in the input string. The input string can be assumed to contain only alphabets
// (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    const textLower = text.toLowerCase();
    let result = 0
    const arr = [...new Set(textLower)]
    for (const item of arr) {
        const count = textLower.split('').filter(el => el === item).length;
        if (count > 1) {
            result++
        }
    }
    return result
}


console.log(duplicateCount("aabBcde"))




