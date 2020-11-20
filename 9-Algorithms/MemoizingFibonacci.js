const memo = {};

const fibonacci = num => {
    let returnValue;

    if (memo[num]) {
        returnValue = memo[num];
    } else if (num === 0 || num === 1) {
        returnValue = num;
    } else {
        returnValue = fibonacci(num - 1) + fibonacci(num - 2);
        memo[num] = returnValue;
    }
    return returnValue;
}

// Test your code with calls here:
console.log(fibonacci(20));
console.log(fibonacci(200));

// 6765
// 2.8057117299251016e+41