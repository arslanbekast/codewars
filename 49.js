// Mary brought home a "spot the differences" book. The book is full of a bunch of problems,
// and each problem consists of two strings that are similar.
// However, in each string there are a few characters that are different.

function spot(s1,s2){
    let result = []
    for(let i = 0;i < s1.length; i++){
        if(s1[i] !== s2[i]){
            result.push(i);
        }
    }
    return result;
}

console.log(spot("abcdefg","abcqetg"))