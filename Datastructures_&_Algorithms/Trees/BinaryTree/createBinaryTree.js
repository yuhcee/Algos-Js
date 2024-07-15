function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * **2196. Create Binary Tree From Descriptions**
 * 
 * You are given a 2D integer array `descriptions` where `descriptions[i] = [parenti, childi, isLefti]` indicates that `parenti` is the **parent** of `childi` in a **binary** tree of **unique** values. Furthermore,
 * 
 * - If `isLefti == 1`, then `childi` is the left child of `parenti`.
 * - If `isLefti == 0`, then `childi` is the right child of `parenti`.
 * 
 * Construct the binary tree described by `descriptions` and return *its **root***.
 * 
 * The test cases will be generated such that the binary tree is **valid**.
 * 
 * **Constraints:**
 * 
 * - `1 <= descriptions.length <= 104`
 * - `descriptions[i].length == 3`
 * - `1 <= parenti, childi <= 105`
 * - `0 <= isLefti <= 1`
 * - The binary tree described by `descriptions` is valid.
 * 
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
const createBinaryTree = function(descriptions) {
    const nodes = new Map();
    const children = new Set();

    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) {
            nodes.set(parent, new TreeNode(parent));
        }
        if (!nodes.has(child)) {
            nodes.set(child, new TreeNode(child));
        }
        
        if (isLeft) {
            nodes.get(parent).left = nodes.get(child);
        } else {
            nodes.get(parent).right = nodes.get(child);
        }
        
        children.add(child);
    }

    // The root node is the one that is never a child
    for (const [parent, ,] of descriptions) {
        if (!children.has(parent)) {
            return nodes.get(parent);
        }
    }

    return null;
}