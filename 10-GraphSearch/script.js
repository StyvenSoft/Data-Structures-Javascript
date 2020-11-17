const BinaryTree = require('./BinaryTree');
const bt = new BinaryTree(15);
let numbers = [12, 20, 10, 13, 18, 22, 8, 11, 12, 14, 16, 19, 21, 25];

for (let i = 0; i < numbers.length; i++) {
    bt.insert(numbers[i]);
    console.log(`Insert ${numbers[i]} to binary tree`);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log('Depth First Traversal');
bt.depthFirstTraversal();


// Insert 12 to binary tree
// Insert 20 to binary tree
// Insert 10 to binary tree
// Insert 13 to binary tree
// Insert 18 to binary tree
// Insert 22 to binary tree
// Insert 8 to binary tree
// Insert 11 to binary tree
// Insert 12 to binary tree
// Insert 14 to binary tree
// Insert 16 to binary tree
// Insert 19 to binary tree
// Insert 21 to binary tree
// Insert 25 to binary tree
// Inserted [ 12,20,10,13,18,22,8,11,12,14,16,19,21,25 ] to binary tree
// Depth First Traversal
// Depth=4, Value=8
// Depth=3, Value=10
// Depth=4, Value=11
// Depth=2, Value=12
// Depth=4, Value=12
// Depth=3, Value=13
// Depth=4, Value=14
// Depth=1, Value=15
// Depth=4, Value=16
// Depth=3, Value=18
// Depth=4, Value=19
// Depth=2, Value=20
// Depth=4, Value=21
// Depth=3, Value=22
// Depth=4, Value=25