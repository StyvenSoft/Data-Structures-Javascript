// import MinHeap class
const MinHeap = require('./MinHeap');

// instantiate a MinHeap class
const minHeap = new MinHeap();

// helper function to return a random integer
const randomize = () => Math.floor(Math.random() * 40);

// populate minHeap with random numbers
for (let i = 0; i < 6; i++) {
    const num = randomize();
    console.log(`.. Adding value ${num}`);
    minHeap.add(num);
    console.log('Content of min-heap', minHeap.heap);
}

// return the minimum value in the heap until heap is empty
console.log('\n');
for (let i = 0; i < 6; i++) {
    console.log(`.. Removing minimum value ${minHeap.popMin()}`);
    console.log('Content of min-heap', minHeap.heap);
}

// .. Adding value 0
// Content of min-heap [ null, 0 ]
// .. Adding value 28
// Content of min-heap [ null, 0, 28 ]
// .. Adding value 0
// Content of min-heap [ null, 0, 28, 0 ]
// .. Adding value 12
// Content of min-heap [ null, 0, 12, 0, 28 ]
// .. Adding value 15
// Content of min-heap [ null, 0, 12, 0, 28, 15 ]
// .. Adding value 39
// Content of min-heap [
//   null, 0,  12,
//   0,    28, 15,
//   39
// ]


// .. Removing minimum value 0
// Content of min-heap [ null, 0, 12, 39, 28, 15 ]
// .. Removing minimum value 0
// Content of min-heap [ null, 12, 15, 39, 28 ]
// .. Removing minimum value 12
// Content of min-heap [ null, 15, 28, 39 ]
// .. Removing minimum value 15
// Content of min-heap [ null, 28, 39 ]
// .. Removing minimum value 28
// Content of min-heap [ null, 39 ]
// .. Removing minimum value 39
// Content of min-heap [ null ]