/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **623. Add One Row to Tree**
 *
 * Given the `root` of a binary tree and two integers `val` and `depth`, add a row of nodes with value `val` at
 * the given depth `depth`.
 *
 * Note that the `root` node is at depth `1`.
 *
 * The adding rule is:
 *
 * - Given the integer `depth`, for each not null tree node `cur` at the depth `depth - 1`, create two tree nodes
 * with value `val` as `cur`'s left subtree root and right subtree root.
 * - `cur`'s original left subtree should be the left subtree of the new left subtree root.
 * - `cur`'s original right subtree should be the right subtree of the new right subtree root.
 * - If `depth == 1` that means there is no depth `depth - 1` at all, then create a tree node with value `val` as
 * the new root of the whole original tree, and the original tree is the new root's left subtree.
 *
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
const addOneRow = function (root, val, depth) {};
