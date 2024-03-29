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
        if (node.left === null && node.right === null) return node;

        //Recursively flatten the left subtree
        let leftTail = flattenTree(node.left);
        //Recursively flatten the right subtree
        let rightTail = flattenTree(node.right);

        // If there was a left subtree, we shuffle the connections
        // around so that there is nothing on the left side
        // anymore.
        if (leftTail !== null) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        // We need to return the "rightmost" node after we are
        // done wiring the new connections.
        return rightTail === null ? leftTail : rightTail;
    }
};
const root = [1, 2, 5, 3, 4, null, 6];
// Output: [1,null,2,null,3,null,4,null,5,null,6]
console.log(flatten(root));

const root1 = [];
// Output: []
console.log(flatten(root1));

const root2 = [0];
// Output: [0]
console.log(flatten(root2));
