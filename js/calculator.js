function calculator(op, numA, numB) {
    if (op == '+') {
        return numA + numB
    } else if (op == '-') {
        return numA - numB
    } else if (op == '*') {
        return numA * numB
    } else if (op == '/') {
        return numA / numB
    }
}

module.exports = calculator