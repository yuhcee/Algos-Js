/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **100. Same Tree**
 *
 * Given the roots of two binary trees `p` and `q`, write a function to
 * check if they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally
 * identical, and the nodes have the same value.
 *
 * **Constraints:**
 *
 * - The number of nodes in both trees is in the range `[0, 100]`.
 * `-104 <= Node.val <= 104`
 *
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const isSameTree = (p, q) => {
    if (p === null && q === null) {
        return true;
    }
    if (p === null || q === null || p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const p = [1, 2, 3],
    q = [1, 2, 3];
// Output: true
console.log(isSameTree(p, q));

const p1 = [1, 2],
    q1 = [1, null, 2];
// Output: false
console.log(isSameTree(p1, q1));
