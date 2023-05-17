/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * **2130. Maximum Twin Sum of a Linked List**
 *
 * In a linked list of size `n`, where `n` is even, the `ith` node
 * (0-indexed) of the linked list is known as the twin of the `(n-1-i)th`
 * node, if `0 <= i <= (n / 2) - 1`.
 *
 * - For example, if `n = 4`, then node `0` is the twin of node `3`, and
 * node `1` is the twin of node `2`. These are the only nodes with twins
 * for `n = 4`.
 * The **twin sum** is defined as the sum of a node and its twin.
 *
 * Given the `head` of a linked list with even length, return the
 * ***maximum twin sum** of the linked list*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[0, 100]`.
 * - `0 <= Node.val <= 100`
 *
 * Returns the maximum twin sum of the linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {number} - The maximum twin sum.
 */
const pairSum = function (head) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let curr = head;
    const values = [];

    // Store the values of the linked list in an array.
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }

    let left = 0;
    let right = values.length - 1;

    // Iterate from both ends of the array to find the maximum twin sum.
    while (left < right) {
        maxSum = Math.max(maxSum, values[left] + values[right]);
        left++;
        right--;
    }

    // Return the maximum twin sum.
    return maxSum;
};

const head = [3, 1, 4, 2];
// Output: 8
console.log(pairSum(head));

const head1 = [5, 4, 2, 1];
// Output: 6
/* Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. */

const head2 = [4, 2, 2, 3];
// Output: 7
/* Explanation:
The nodes with twins present in this linked list are:
- Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.
- Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.
Thus, the maximum twin sum of the linked list is max(7, 4) = 7. */

const head3 = [1, 100000];
// Output: 100001
/* Explanation:
There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001. */
