#!/usr/bin/env node
import Tree from "./bst.js";

let arr2 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  // "h",
  "i",
  "j",
  "k",
  // "l",
  // "m",
  // "n",
];

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let tree = new Tree(arr);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

console.log(tree.sortedArr);
console.log(tree.insert(11));
console.log(tree.root);
prettyPrint(tree.root);

console.log("Level Order List:");
console.log(tree.levelOrder());
console.log(tree.levelOrderRecur());
console.log("PreOrder List:");
console.log(tree.preOrder());
console.log("InOrder List:");
console.log(tree.inOrder());
console.log("PostOrder List:");
console.log(tree.postOrder());
console.log("Node height:");
console.log(tree.height());
console.log("Balanced?");
console.log(tree.isBalanced());
console.log("Rebalanced:");
console.log(tree.reBalance());
console.log("Balanced?");
console.log(tree.isBalanced());
