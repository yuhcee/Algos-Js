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

const root = [1, 2, 3, null, 4],
    distance = 3;
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
console.log(countPairs(root, distance));

const root2 = [1, 2, 3, 4, 5, 6, 7],
    distance2 = 3;
// Output: 2
// Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
console.log(countPairs(root2, distance2));
