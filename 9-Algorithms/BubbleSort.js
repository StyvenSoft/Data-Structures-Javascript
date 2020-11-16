const swap = require('./swap');

const bubbleSort = input => {
  let swapping = true;
  
  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        console.log(`Swapping pair ${input[i]}, ${input[i+1]} in [${input}]`);
        swap(input, i, i + 1);
        swapping = true;
      }
    }
  }
  return input;
};

module.exports = bubbleSort;

console.log(bubbleSort([3, 2, 1]));

// Swapping pair 3, 2 in [3,2,1]
// Swapping pair 3, 1 in [2,3,1]
// Swapping pair 2, 1 in [2,1,3]
// [ 1, 2, 3 ]
