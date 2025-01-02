// Simple, given a string of words, return the length of the shortest word(s).

const findShort = (s) => s.split(' ').map(el => +el.length).sort((a,b) => a-b)[0]

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))