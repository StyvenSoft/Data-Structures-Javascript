const ascendingOrder = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

// Use this array to test your code:
const testArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
testArray.sort(ascendingOrder);
console.log(testArray);

module.exports = ascendingOrder;