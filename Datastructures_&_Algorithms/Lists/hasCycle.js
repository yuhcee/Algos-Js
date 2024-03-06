/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * **141. Linked List Cycle**
 *
 * Given `head`, the head of a linked list, determine if the linked list has
 * a cycle in it.
 *
 * There is a cycle in a linked list if there is some node in the list that
 * can be reached again by continuously following the `next` pointer.
 * Internally, `pos` is used to denote the index of the node that tail's
 * `next` pointer is connected to. **Note that `pos` is not passed as a
 * parameter.**
 *
 * Return true if there is a cycle in the linked list. Otherwise, return
 * false.
 *
 * **Constraints:**
 *
 * - The number of the nodes in the list is in the range `[0, 104]`.
 * - `-105 <= Node.val <= 105`
 * - `pos` is `-1` or a **valid index** in the linked-list.
 *
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    // If the list is empty or has only one node, there can't be a cycle
    if (!head || !head.next) {
        return false;
    }

    // Initialize slow and fast pointers
    let slow = head;
    let fast = head.next;

    // Move slow and fast pointers until they meet or fast reaches the end of the list
    while (fast && fast.next) {
        if (slow === fast) {
            return true; // Cycle detected
        }
        slow = slow.next; // Move slow pointer one step
        fast = fast.next.next; // Move fast pointer two steps
    }

    // If fast pointer reaches the end of the list, there is no cycle
    return false;
};

const head = [3, 2, 0, -4],
    pos = 1;
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
console.log(hasCycle(head));

const head1 = [1, 2],
    pos1 = 0;
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
console.log(hasCycle(head1));
