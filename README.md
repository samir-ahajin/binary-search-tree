# binary-search-tree

Generates a random every time you reload the page.
[Check the console in the browser](https://samir-ahajin.github.io/binary-search-tree/)

buildTree() - builds the node objects from a sorted array.

insert() - accepts a value and insert it in the tree.

delete() - accepts a value and remove the value from the tree, depends on the tree structure

find() - accepts a value an returns the node value

levelOrder() -returns Level Order List of the tree.

levelOrderRecur() - recursion Level Order List 

preOrder() - returns PreOrder List of the tree.

inOrder() - returns InOrder List of the tree.

PostOrder() - returns PostOrder List of the tree.

height() - returns longest path of the tree.

isBalanced() - checks the tree if it is balanced.

reBalance() - rebalance the tree.

getNode() - returns the left and right node value of the current node given.

Sample output in the console:

    currentList :
    [53,58,89,14,61,39,37,80,5,98,87]
    -----------------------------------------
    Sorted and Removed Duplicates:
    [5,14,37,39,53,58,61,80,87,89,98]
    -----------------------------------------
    Balanced? - true
    -----------------------------------------
    Level Order List:
    [58,37,87,5,39,61,89,14,53,80,98]
    ------------------------------------------
    PreOrder List:
    [58,37,5,14,39,53,87,61,80,89,98]
    -----------------------------------------
    InOrder List:
    [5,14,37,39,53,58,61,80,87,89,98]
    -----------------------------------------
    PostOrder List:
    [14,5,53,39,37,80,61,98,89,87,58]
    -----------------------------------------
    Insert Value:
    [16,37]
    
    New Array Values:
    [5,14,16,37,39,53,58,61,80,87,89,98]
    -----------------------------------------
    Balanced? - false
    -----------------------------------------
    Perform Rebalanced . . . [object Object]
    -----------------------------------------
    Balanced? - true
    -----------------------------------------
    Level Order List:
    [53,16,80,5,37,58,89,14,39,61,87,98]
    ------------------------------------------
    PreOrder List:
    [53,16,5,14,37,39,80,58,61,89,87,98]
    -----------------------------------------
    InOrder List:
    [5,14,16,37,39,53,58,61,80,87,89,98]
    -----------------------------------------
    PostOrder List:
    [14,5,39,37,16,61,58,87,98,89,80,53]
    -----------------------------------------
