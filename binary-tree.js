/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

   minDepth(node = this.root) {

    if(node === null) return 0;

    let minTotal = Infinity;

    function recursive(current, total = 1) {
      if (current.left === null && current.right === null) {
        if (total < minTotal) {
          minTotal = total
        }
      }
      if (current.left) {

        recursive(current.left, total + 1)
      }
      if (current.right) {

        recursive(current.right, total + 1)
      }
    }

    recursive(node)
    return minTotal
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {

    if(node === null) return 0;

    let maxTotal = -Infinity;

    function recursive(current, total = 1) {
      if (current.left === null && current.right === null) {
        if (total > maxTotal) {
          maxTotal = total
        }
      }
      if (current.left) {
        recursive(current.left, total + 1)
      }
      if (current.right) {
        recursive(current.right, total + 1)
      }
    }

    recursive(node)
    return maxTotal

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

    if (node === null) return null;

    let smallestVal = Infinity;

    let toVisitStack = [this.root];

    while (toVisitStack.length) {
      let current = toVisitStack.pop();
      if (current.val > lowerBound && current.val < smallestVal) {
        smallestVal = current.val;
      }

      if (current.right){
        toVisitStack.push(current.right)
      }
      if (current.left){
        toVisitStack.push(current.left)
      }
    }
    return smallestVal === Infinity ? null : smallestVal;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
