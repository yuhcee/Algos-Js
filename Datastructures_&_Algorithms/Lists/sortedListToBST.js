/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **109. Convert Sorted List to Binary Search Tree**
 *
 * Given the `head` of a singly linked list where elements are sorted in **ascending order**,
 * *convert it to a height-balanced binary search tree*.
 *
 * **Constraints:**
 * - The number of nodes in `head` is in the range `[0, 2 * 104]`.
 * - `-105 <= Node.val <= 105`
 *
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    function bst(arr, left, right) {
        if (left > right) return null;
        const mid = Math.floor((left + right) / 2);
        const tree = new TreeNode(arr[mid]);
        tree.left = bst(arr, left, mid - 1);
        tree.right = bst(arr, mid + 1, right);
        return tree;
    }

    return bst(arr, 0, arr.length - 1);
};

const head = [-10, -3, 0, 5, 9];
// Output: [0,-3,9,-10,null,5]
/* Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST. */
