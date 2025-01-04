// Return the number (count) of vowels in the given string.

function getCount(str) {
    let vovelsCount = 0
    const vovels = ['a', 'e', 'i', 'o', 'u']
    str.split('').forEach((letter) => {
        if (vovels.includes(letter)) {
            vovelsCount++
        }
    })
    return vovelsCount;
}

console.log(getCount('abracadabra'))


