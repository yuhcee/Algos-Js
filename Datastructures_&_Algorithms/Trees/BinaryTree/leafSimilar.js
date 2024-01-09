/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * **872. Leaf-Similar Trees**
 *
 * Consider all the leaves of a binary tree, from left to right order,
 * the values of those leaves form a **leaf value sequence**.
 *
 * For example, in the given tree above, the leaf value sequence is `(6,
 * 7, 4, 9, 8)`.
 *
 * Two binary trees are considered *leaf-similar* if their leaf value
 * sequence is the same.
 *
 * Return `true` if and only if the two given trees with head nodes
 * `root1` and `root2` are leaf-similar.
 *
 * **Constraints:**
 *
 * - The number of nodes in each tree will be in the range `[1, 200]`.
 * - Both of the given trees will have values in the range `[0, 200]`.
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    const leaves1 = [];
    const leaves2 = [];

    // Helper function to perform DFS and collect leaf values
    const collectLeaves = (root, leaves) => {
        if (!root) {
            return;
        }

        if (!root.left && !root.right) {
            leaves.push(root.val);
        }

        collectLeaves(root.left, leaves);
        collectLeaves(root.right, leaves);
    };

    collectLeaves(root1, leaves1);
    collectLeaves(root2, leaves2);

    // Check if the leaf sequences are equal
    return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};
