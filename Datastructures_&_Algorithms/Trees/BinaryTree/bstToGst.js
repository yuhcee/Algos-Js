/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1038. Binary Search Tree to Greater Sum Tree**
 *
 * Given the `root` of a Binary Search Tree (BST), convert it to a Greater Tree
 * such that every key of the original BST is changed to the original key plus
 * the sum of all keys greater than the original key in BST.
 *
 * As a reminder, a *binary search tree* is a tree that satisfies these
 * constraints:
 *
 * - The left subtree of a node contains only nodes with keys **less than** the
 * node's key.
 * - The right subtree of a node contains only nodes with keys **greater than**
 * the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 100]`.
 * - `0 <= Node.val <= 100`
 * - All the values in the tree are `unique`.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const bstToGst = function (root) {
    let sum = 0;

    const reverseInOrderTraversal = (node) => {
        if (!node) return;

        // Traverse the right subtree first
        reverseInOrderTraversal(node.right);

        // Update the current node's value with the running sum
        sum += node.val;
        node.val = sum;

        // Traverse the left subtree
        reverseInOrderTraversal(node.left);
    };

    reverseInOrderTraversal(root);
    return root;
};

const root = [4, 1, 6, 0, 2, 5, 7, null, null, null, 3, null, null, null, 8];
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
console.log(bstToGst(root));

const root1 = [0, null, 1];
// Output: [1,null,1]
console.log(bstToGst(root1));
