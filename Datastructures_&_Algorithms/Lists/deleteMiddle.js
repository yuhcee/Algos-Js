/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **2095. Delete the Middle Node of a Linked List**
 *
 * You are given the `head` of a linked list. **Delete** the **middle node**, and return
 * *the `head` of the modified linked list*.
 *
 * The **middle node** of a linked list of size `n` is the `⌊n / 2⌋th` node from the
 * **start** using **0-based indexing**, where `⌊x⌋` denotes the largest integer less than
 * or equal to `x`.
 *
 * For `n` = `1`, `2`, `3`, `4`, and `5`, the middle nodes are `0`, `1`, `1`, `2`, and `2`,
 * respectively.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[1, 105]`.
 * - `1 <= Node.val <= 105`
 *
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteMiddle = function (head) {
    let target = findMiddle(head);

    let dummy = new ListNode(null);
    dummy.next = head;
    let prev = dummy;
    let cur = head;

    while (cur) {
        if (cur == target) {
            prev.next = cur.next;
        } else {
            prev = prev.next;
        }
        cur = cur.next;
    }
    return dummy.next;
};

const findMiddle = (head) => {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const head = [1, 3, 4, 7, 1, 2, 6];
// Output: [1,3,4,1,2,6]
/* Explanation:
The above figure represents the given linked list. The indices of the nodes are written below.
Since n = 7, node 3 with value 7 is the middle node, which is marked in red.
We return the new list after removing this node.  */
console.log(deleteMiddle(head));

const head1 = [1, 2, 3, 4];
// Output: [1,2,4]
/* Explanation:
The above figure represents the given linked list.
For n = 4, node 2 with value 3 is the middle node, which is marked in red. */
console.log(deleteMiddle(head1));
