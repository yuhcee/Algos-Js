/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **114. Flatten Binary Tree to Linked List**
 *
 * Given the `root` of a binary tree, flatten the tree into a "linked list":
 *
 * - The "linked list" should use the same `TreeNode` class where the `right` child
 * pointer points to the next node in the list and the `left` child pointer is always
 * `null`.
 *
 * - The "linked list" should be in the same order as a **pre-order traversal** of
 * the binary tree.
 *
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = (root) => {
    return flattenTree(root);

    function flattenTree(node) {
        // Handle the null scenario
        if (node === null) return null;

        // For a leaf node, we simply return the
        // node as is
        if (node.left === null && node.right === null) return root;

        //Recursively flatten the left subtree
        let leftTail = flattenTree(node.left);
    }
};
