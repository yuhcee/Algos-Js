/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **108. Convert Sorted Array to Binary Search Tree**
 *
 * Given an integer array `nums` where the elements are sorted in **ascending order**, convert it to a
 * ***height-balanced** binary search tree*.
 *
 * A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node
 * never differs by more than one.
 *
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    function create(left, right) {
        if (left > right) {
            return null;
        }

        const i = Math.floor((right - left) / 2) + left;

        const node = new TreeNode(nums[i]);

        node.left = create(left, i - 1);
        node.right = create(i + 1, right);

        return node;
    }

    return create(0, nums.length - 1);
};
