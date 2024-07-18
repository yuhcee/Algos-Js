/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1530. Number of Good Leaf Nodes Pairs**
 *
 * You are given the `root` of a binary tree and an integer `distance`. A
 * pair of two different **leaf** nodes of a binary tree is said to be
 * good if the length of **the shortest path** between them is less than
 * or equal to `distance`.
 *
 * Return *the number of good leaf node pairs in the tree*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the `tree` is in the range `[1, 210]`.
 * - `1 <= Node.val <= 100`
 * - `1 <= distance <= 10`
 *
 * @param {TreeNode} root
 * @param {number} distance
 * @return {number}
 */
const countPairs = function (root, distance) {
    let count = 0;

    // Helper function to perform DFS
    function dfs(node) {
        if (!node) return [];

        if (!node.left && !node.right) {
            // It's a leaf node, return its distance as 0
            return [1];
        }

        // Recursively find leaf distances for left and right children
        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        // Count pairs between left and right distances
        for (let l of leftDistances) {
            for (let r of rightDistances) {
                if (l + r <= distance) {
                    count++;
                }
            }
        }

        // Collect all distances from the current node to the leaves in its subtree
        const distances = [];
        for (let l of leftDistances) {
            if (l + 1 <= distance) distances.push(l + 1);
        }
        for (let r of rightDistances) {
            if (r + 1 <= distance) distances.push(r + 1);
        }

        return distances;
    }

    dfs(root);
    return count;
};
