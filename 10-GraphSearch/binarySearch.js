const binarySearch = (arr, target) => {
    // Add left and right variables below
    let left = 0;
    let right = arr.length;

    while (right > left) {
        // Add indexToCheck calculation below
        const indexToCheck = Math.floor((left + right) / 2);
        // 1. Create a constant called checking
        const checking = arr[indexToCheck];
        console.log(`indexToCheck equals: ${indexToCheck}`)

        // 2. Create a conditional below
        if (checking === target) {
            return indexToCheck;
        } else if (target > checking) {
            left = indexToCheck + 1;
        } else {
            right = indexToCheck;
        }
    }
    return null;
}

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 2;

const targetIndex = binarySearch(searchable, target);

console.log(`The target index is ${targetIndex}.`);

module.exports = { binarySearch };

