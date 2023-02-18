/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **226. Invert Binary Tree**
 *
 * Given the root of a binary tree, invert the tree, and return *its root*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    // If the root is null, return null
    if (root === null) {
        return null;
    }

    // Recursively invert the left and right subtrees
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    // Swap the left and right subtrees
    root.left = right;
    root.right = left;

    // Return the inverted root
    return root;
};

const root = [4, 2, 7, 1, 3, 6, 9];
// Output: [4,7,2,9,6,3,1]
console.log(invertTree(root));

const root1 = [2, 1, 3];
// Output: [2,3,1]
console.log(invertTree(root1));
