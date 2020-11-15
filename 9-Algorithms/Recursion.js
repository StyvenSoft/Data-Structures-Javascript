const iterativeFactorial = (n) => {
    let result = 1;
    while (n > 0) {
        result *= n;
        n -= 1;
    }
    return result;
}

const recursiveFactorial = (n) => {
    if (n === 0) {
        return 1;
    }

    if (n > 0) {
        console.log(`Execution context: ${n}`);

        return recursiveFactorial(n - 1) * n;
    }
}

// Set fourFactorial
const fourFactorial = iterativeFactorial(4)
console.log(fourFactorial)


const recursiveSolution = recursiveFactorial(5);
console.log(recursiveSolution);

module.exports = {
    iterativeFactorial,
    recursiveFactorial
};

// 24

// Execution context: 5
// Execution context: 4
// Execution context: 3
// Execution context: 2
// Execution context: 1
// 120