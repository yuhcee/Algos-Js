/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1382. Balance a Binary Search Tree**
 *
 * Given the `root` of a binary search tree, return *a **balanced** binary
 * search tree with the same node values*. If there is more than one answer,
 * return **any of them**.
 *
 * A binary search tree is **balanced** if the depth of the two subtrees of
 * every node never differs by more than 1.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 104]`.
 * - `1 <= Node.val <= 105`
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const balanceBST = function (root) {
    // Step 1: Perform an in-order traversal to get sorted values
    const values = [];
    const inOrderTraversal = (node) => {
        if (!node) return;
        inOrderTraversal(node.left);
        values.push(node.val);
        inOrderTraversal(node.right);
    };
    inOrderTraversal(root);

    // Step 2: Construct a balanced BST from the sorted values
    const buildBalancedBST = (left, right) => {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(values[mid]);
        node.left = buildBalancedBST(left, mid - 1);
        node.right = buildBalancedBST(mid + 1, right);
        return node;
    };

    return buildBalancedBST(0, values.length - 1);
};
