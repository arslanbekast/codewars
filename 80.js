// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    if (string.length <= 1) {
        return string
    }
    return string.split('').map((char) => char.toLowerCase() !== char ? ` ${char}` : char).join('')
}

console.log(solution("camelCasing"))