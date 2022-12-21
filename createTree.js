import Tree from "./bst.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

export default class binaryTree {
  create() {
    let randomArr = [],
      range = 1;
    while (range != 12) {
      randomArr.push(this.randomInt(100));
      range++;
    }
    let originalVal = [...randomArr];
    let currentTree = new Tree(randomArr);

    let randomValues = [],
      count = 0;

    while (count != 2) {
      randomValues.push(this.randomInt(100));
      count++;
    }

    let oSorted = [currentTree.sortedArr],
      oLevel = [...currentTree.levelOrder()],
      oPre = [...currentTree.preOrder()],
      oIn = [...currentTree.inOrder()],
      oPost = [...currentTree.postOrder()],
      oBal = currentTree.isBalanced();

    currentTree.insert(randomValues[0]);
    currentTree.insert(randomValues[1]);
    return `
    currentList :
    [${originalVal}]
    -----------------------------------------
    Sorted and Removed Duplicates:
    [${oSorted}]
    -----------------------------------------
    Balanced? - ${oBal}
    -----------------------------------------
    Level Order List:
    [${oLevel}]
    ------------------------------------------
    PreOrder List:
    [${oPre}]
    -----------------------------------------
    InOrder List:
    [${oIn}]
    -----------------------------------------
    PostOrder List:
    [${oPost}]
    -----------------------------------------
    Insert Value:
    [${randomValues}]
    
    New Array Values:
    [${currentTree.inOrder()}]
    -----------------------------------------
    Balanced? - ${currentTree.isBalanced()}
    -----------------------------------------
    Perform Rebalanced . . . ${currentTree.reBalance()}
    -----------------------------------------
    Balanced? - ${currentTree.isBalanced()}
    -----------------------------------------
    Level Order List:
    [${currentTree.levelOrder()}]
    ------------------------------------------
    PreOrder List:
    [${currentTree.preOrder()}]
    -----------------------------------------
    InOrder List:
    [${currentTree.inOrder()}]
    -----------------------------------------
    PostOrder List:
    [${currentTree.postOrder()}]
    -----------------------------------------

    `;
  }

  randomInt(max) {
    return Math.floor(Math.random() * max);
  }

  delay(currentTree) {
    setTimeout(() => {}, 3000);
  }
}
