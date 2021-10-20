function analyze(arr) {
    return {
        average: averager(arr),
        min: minFinder(arr),
        max: maxFinder(arr),
        length: arr.length,
    };
}


function averager(arr) {
    return arr.reduce((a, b) => a + b) / arr.length
}

function minFinder(arr) {
    let min = arr.sort()
    return min[0]
}

function maxFinder(arr) {
    let max = arr.sort((a, b) => b - a)
    return max[0]
}

module.exports = analyze