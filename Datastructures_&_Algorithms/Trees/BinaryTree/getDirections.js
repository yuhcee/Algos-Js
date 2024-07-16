/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **2096. Step-By-Step Directions From a Binary Tree Node to Another**
 *
 * You are given the `root` of a **binary** tree with `n` nodes. Each node is
 * uniquely assigned a value from `1` to `n`. You are also given an integer
 * `startValue` representing the value of the start node `s`, and a different
 * integer `destValue` representing the value of the destination node `t`.
 *
 * Find the **shortest** path starting from node s and ending at node t. Generate
 * step-by-step directions of such path as a string consisting of only the
 * **uppercase** letters 'L', 'R', and 'U'. Each letter indicates a specific
 * direction:
 *
 * - `'L'` means to go from a node to its **left child** node.
 * - `'R'` means to go from a node to its **right child** node.
 * - `'U'` means to go from a node to its **parent** node.
 *
 * Return *the step-by-step directions of the **shortest path** from node `s` to \
 * node `t`.*
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is `n`.
 * - `2 <= n <= 105`
 * - `1 <= Node.val <= n`
 * - All the values in the tree are **unique**.
 * - `1 <= startValue, destValue <= n`
 * - `startValue != destValue`
 *
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
const getDirections = function (root, startValue, destValue) {
    // Function to find the LCA of two nodes in the binary tree
    function findLCA(root, p, q) {
        if (!root || root.val === p || root.val === q) return root;
        const left = findLCA(root.left, p, q);
        const right = findLCA(root.right, p, q);
        if (left && right) return root;
        return left || right;
    }

    // Function to find the path from root to the given value
    function findPath(root, value, path) {
        if (!root) return false;
        if (root.val === value) return true;
        path.push('L');
        if (findPath(root.left, value, path)) return true;
        path.pop();
        path.push('R');
        if (findPath(root.right, value, path)) return true;
        path.pop();
        return false;
    }

    // Find the LCA of startValue and destValue
    const lca = findLCA(root, startValue, destValue);

    // Find the path from LCA to startValue and destValue
    const pathToStart = [];
    findPath(lca, startValue, pathToStart);
    const pathToDest = [];
    findPath(lca, destValue, pathToDest);

    // Create the final result
    const result = 'U'.repeat(pathToStart.length) + pathToDest.join('');

    return result;
};

const root = [5, 1, 2, 3, null, 6, 4],
    startValue = 3,
    destValue = 6;
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.
console.log(getDirections(root, startValue, destValue));

const root1 = [2, 1],
    startValue1 = 2,
    destValue1 = 1;
// Output: "L"
// Explanation: The shortest path is: 2 → 1.
console.log(getDirections(root1, startValue1, destValue1));
