/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **606. Construct String from Binary Tree**
 *
 * Given the `root` of a binary tree, construct a string consisting of
 * parenthesis and integers from a binary tree with the preorder traversal
 * way, and return it.
 *
 * Omit all the empty parenthesis pairs that do not affect the one-to-one
 * mapping relationship between the string and the original binary tree.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 104]`.
 * - `-1000 <= Node.val <= 1000`
 *
 * @param {TreeNode} root
 * @return {string}
 */
const tree2str = function (root) {
    if (!root) {
        return ''; // Empty tree, return an empty string
    }

    const result = [];

    // Helper function for recursive preorder traversal
    const preorder = (node) => {
        if (!node) {
            return;
        }

        // Process current value
        result.push(node.val);

        // Process left subtree
        if (node.left || node.right) {
            result.push('(');
            preorder(node.left);
            result.push(')');
        }

        // Process right subtree
        if (node.right) {
            result.push('(');
            preorder(node.right);
            result.push(')');
        }
    };

    // Start the traversal
    preorder(root);

    return result.join('');
};
