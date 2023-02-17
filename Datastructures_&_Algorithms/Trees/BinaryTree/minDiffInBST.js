/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **783. Minimum Distance Between BST Nodes**
 *
 * Given the `root` of a Binary Search Tree (BST), return *the minimum difference between the values
 * of any two different nodes in the tree*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[2, 100]`.
 * - `0 <= Node.val <= 105`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minDiffInBST = function (root) {
    let prev = null; // to keep track of the previously visited node
    let minDiff = Infinity; // initialize the minimum difference to a large value

    // define an inorder traversal function that updates the minimum difference
    const inorder = (node) => {
        if (!node) {
            return;
        }

        inorder(node.left);
        if (prev !== null) {
            minDiff = Math.min(minDiff, node.val - prev.val);
        }

        prev = node;
        inorder(node.right);
    };

    inorder(root); // apply the inorder traversal to the root

    return minDiff; // return the final minimum difference
};

const root = [4, 2, 6, 1, 3];
// Output: 1
console.log(minDiffInBST(root));