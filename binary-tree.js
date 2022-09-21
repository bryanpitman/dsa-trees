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

  // Leverage Math.min() for brevity.

  minDepth(node = this.root, depth = 1, min = Infinity) {

    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return depth;
    }

    if (node.left) {
      let leftDepth = this.minDepth(node.left, depth + 1, min);
      if (min > leftDepth) {
        min = leftDepth;
      }
    }

    if (node.right) {
      let rightDepth = this.minDepth(node.right, depth + 1, min);
      if (min > rightDepth) {
        min = rightDepth;
      }

    }

    return min;

  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root, depth = 1, max) {

    if (node === null) {
      return 0;
    }

    if (node.left === null && node.right === null) {
      return depth;
    }

    if (node.left) {
      let leftDepth = this.maxDepth(node.left, depth + 1, max);
      if (!max) {
        max = leftDepth;
      } else if (max < leftDepth) {
        max = leftDepth;
      }
    }

    if (node.right) {
      let rightDepth = this.maxDepth(node.right, depth + 1, max);
      if (!max) {
        max = rightDepth;
      } else if (max < rightDepth) {
        max = rightDepth;
      }

    }

    return max;

  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root, smallestVal = null) {

    if (node === null) {
      return null;
    }

    //handles terminal node
    if (node.left === null && node.right === null) {
      if (node.val > lowerBound) return node.val;
      return null;
    }

    if (node.val > lowerBound) smallestVal = node.val;

    if (node.left) {
      let leftVal = this.nextLarger(lowerBound, node.left, smallestVal);
      if (leftVal !== null && leftVal < smallestVal) {
        smallestVal = leftVal;
      }
    }

    if (node.right) {
      let rightVal = this.nextLarger(lowerBound, node.right, smallestVal);
      if (rightVal !== null && rightVal < smallestVal) {
        smallestVal = rightVal;
      }
    }

    return smallestVal;

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) { }
}

module.exports = { BinaryTree, BinaryTreeNode };
