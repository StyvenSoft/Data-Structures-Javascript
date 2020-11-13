const TreeNode = require('./TreeNode');

// instantiate your TreeNode class here
const tree = new TreeNode(1);

// display your TreeNode class here
console.log(tree);

tree.addChild(15);
console.log(tree);
tree.addChild(new TreeNode(30));
console.log(tree);

// TreeNode { data: 1, children: [] }
// TreeNode { data: 1, children: [ TreeNode { data: 15, children: [] } ] }
// TreeNode {
//   data: 1,
//   children: [
//     TreeNode { data: 15, children: [] },
//     TreeNode { data: 30, children: [] }
//   ]
// }

tree.addChild(15);
const node = new TreeNode(30);
tree.addChild(node);
console.log(tree);

tree.removeChild(15);
console.log(tree);

tree.removeChild(node);
console.log(tree);