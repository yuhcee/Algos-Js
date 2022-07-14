/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **102. Binary Tree Level Order Traversal**
 *
 * Given the `root` of a binary tree, return *the level order traversal of its nodes' values*. (i.e.,
 * from left to right, level by level).
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = (root) => {
    // check if root is empty
    if (!root) return [];

    // initialize queue and levels
    const queue = [root],
        levels = [];

    // start BFS traversal
    while (queue.length > 0) {
        const len = queue.length;
        levels.push([]);

        // loop through curr queue length
        for (let i = 0; i < len; i++) {
            // take first element of queue, push val to last array of levels
            const node = queue.shift();
            levels.at(-1).push(node.val);
            // push left and right node if encountered
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    return levels;
};

const root = [3, 9, 20, null, null, 15, 7];
// Output: [[3],[9,20],[15,7]]
console.log(levelOrder(root));

const root1 = [1];
// Output: [[1]]
console.log(levelOrder(root1));
