/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let toSum = [this.root];
    let sum = 0;

    if (this.root === null) {
      return sum;
    }

    while (toSum.length) {
      let current = toSum.pop();

      sum += current.val;
      for (let child of current.children) toSum.push(child);
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

      let toSum = [this.root];
      let sum = 0;

      if (this.root === null) {
        return sum;
      }

      while (toSum.length) {
        let current = toSum.pop();

        if(current.val % 2 === 0) sum++;
        for (let child of current.children) toSum.push(child);
      }
      return sum;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    let toSum = [this.root];
    let sum = 0;

    if (this.root === null) {
      return sum;
    }

    while (toSum.length) {
      let current = toSum.pop();

      if(current.val > lowerBound) sum++;
      for (let child of current.children) toSum.push(child);
    }
    return sum;
  }
}

module.exports = { Tree, TreeNode };
