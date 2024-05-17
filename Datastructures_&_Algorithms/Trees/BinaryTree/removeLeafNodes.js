/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * **1325. Delete Leaves With a Given Value**
 *
 * Given a binary tree `root` and an integer `target`, delete all the **leaf
 * nodes** with value `target`.
 *
 * Note that once you delete a leaf node with value `target`, if its parent node
 * becomes a leaf node and has the value `target`, it should also be deleted
 * (you need to continue doing that until you cannot).
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 3000]`.
 * - `1 <= Node.val, target <= 1000`
 *
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function (root, target) {
    // Helper function to perform the post-order traversal and remove leaf nodes
    function removeLeaves(node) {
        if (node === null) {
            return null;
        }

        // Recursively call for left and right children
        node.left = removeLeaves(node.left);
        node.right = removeLeaves(node.right);

        // Check if current node is a leaf and if it should be removed
        if (node.left === null && node.right === null && node.val === target) {
            return null; // Remove the leaf node
        }

        return node; // Return the node if it is not removed
    }

    // Start the recursive removal process from the root
    return removeLeaves(root);
};
