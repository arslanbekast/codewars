function count(n) {
    let output = 0
    for (let i = 1; i <= n; i++) output += Math.log10(i)
    return Math.floor(output) + 1
};
console.log(count(5000))