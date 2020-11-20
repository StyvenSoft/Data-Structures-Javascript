const sortByLength = (a, b) => {
    if (a.length < b.length) {
        return -1;
    } else if (a.length > b.length) {
        return 1;
    } else {
        return ascendingOrder(a, b);
    }
}

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
const testArray = ['car', 'train', 'plane', 'bike', 'skateboard', 'jet', 'purple', 'computer'];
testArray.sort(sortByLength);
console.log(testArray);

module.exports = sortByLength;

// [
//     'car', 'jet',
//     'bike', 'plane',
//     'train', 'purple',
//     'computer', 'skateboard'
// ]