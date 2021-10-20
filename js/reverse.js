function reverse(str) {
    const splitStr = [...str]
    return splitStr.reverse().join('')
}
module.exports = reverse;