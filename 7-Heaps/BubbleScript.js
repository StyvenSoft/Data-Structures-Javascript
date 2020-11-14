const MinHeap = require('./BubbleUp');

// instantiate MinHeap and assign to minHeap
const minHeap = new MinHeap();

// display content of minHeap
console.log('Content of heap', minHeap.heap);

minHeap.add(42);

// Content of heap [ null ]
// .. Adding 42
// [ null, 42 ]
// Bubble Up