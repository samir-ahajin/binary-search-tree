import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.sortedArr = [...new Set(array.sort((val, val2) => val - val2))];
    this.root = this.buildTree(this.sortedArr);
  }

  buildTree(array) {
    let start = 0;
    let end = array.length - 1;
    if (start > end) {
      return null;
    }
    let mid = parseInt(start + end / 2);
    let node = new Node(array[mid]);

    node.left = this.buildTree(array.slice(start, mid));
    node.right = this.buildTree(array.slice(mid + 1));

    return node;
  }

  insert(key, root = this.root) {
    if (root == null) {
      root = new Node(key);
      return root;
    }
    if (key < root.data) root.left = this.insert(key, root.left);
    else if (key > root.data) root.right = this.insert(key, root.right);

    return root;
  }
  delete(key, root = this.root) {
    if (root == null) return root;
    if (key < root.data) {
      root.left = this.delete(key, root.left);
    } else if (key > root.data) {
      root.right = this.delete(key, root.right);
    } else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;

      //two children
      root.data = this.#replaceLowest(root.right);

      // Delete the inorder successor
      root.right = this.delete(root.data, root.right);
    }

    return root;
  }

  find(value, root = this.root) {
    if (value > root.data) {
      return this.find(value, root.right);
    } else if (value < root.data) {
      return this.find(value, root.left);
    } else if (root.data == value) {
      return root;
    }
  }
  #replaceLowest(root) {
    let current = root.data;
    while (root.left !== null) {
      current = root.left.data;
      root = root.left;
    }
    return current;
  }
  levelOrder() {
    let qeue = [this.root],
      order = [];
    while (qeue.length !== 0) {
      let currentNode = this.getNode(qeue[0]);
      qeue = [...qeue, ...currentNode];
      order.push(qeue[0].data);
      qeue.shift();
    }
    return order;
  }
  levelOrderRecur(qeue = [this.root], order = []) {
    if (qeue.length == 0) return;
    while (qeue.length !== 0) {
      let currentNode = this.getNode(qeue[0]);
      order.push(qeue[0].data);
      qeue.shift();
      qeue = [...qeue, ...currentNode];
      this.levelOrderRecur(qeue, order);
      return order;
    }
  }
  getNode(node) {
    let arr = [];
    if (node.left !== null) arr.push(node.left);
    if (node.right !== null) arr.push(node.right);

    return arr;
  }

  preOrder(root = this.root, preOrderList = []) {
    preOrderList.push(root.data);
    if (root == null) return;
    if (root.left !== null) this.preOrder(root.left, preOrderList);
    if (root.right !== null) this.preOrder(root.right, preOrderList);
    return preOrderList;
  }
  inOrder(root = this.root, inorderList = []) {
    if (root == null) return;
    if (root.left !== null) this.inOrder(root.left, inorderList);
    inorderList.push(root.data);
    if (root.right !== null) this.inOrder(root.right, inorderList);
    return inorderList;
  }
  postOrder(root = this.root, postOrderList = []) {
    if (root == null) return;
    if (root.left !== null) this.postOrder(root.left, postOrderList);
    if (root.right !== null) this.postOrder(root.right, postOrderList);
    postOrderList.push(root.data);
    return postOrderList;
  }
  height(root = this.root) {
    if (root == null) return 0;

    let leftH = this.height(root.left);
    let rightH = this.height(root.right);

    return Math.max(leftH, rightH) + 1;
  }
  isBalanced() {
    return this.#checkBalance(this.root) !== -1;
  }
  reBalance() {
    this.root = this.buildTree(this.inOrder(this.root));
    return this.root;
  }
  #checkBalance(root) {
    if (root === null) return 0;
    let leftBalance = this.#checkBalance(root.left);
    let rightBalance = this.#checkBalance(root.right);
    const diff = Math.abs(leftBalance - rightBalance);

    if (leftBalance === -1 || rightBalance === -1 || diff > 1) {
      return -1;
    } else {
      return Math.max(leftBalance, rightBalance) + 1;
    }
  }
}
