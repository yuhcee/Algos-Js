/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * **876. Middle of the Linked List**
 *
 * Given the head of a singly linked list, return the middle node of the
 * linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[1, 100]`.
 * - `1 <= Node.val <= 100`
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
    // Initialize slow and fast pointers to the head of the list
    let slow = head;
    let fast = head;

    // Move fast pointer two steps at a time and slow pointer one step at a time
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // At this point, slow pointer is at the middle of the list
    return slow;
};

const head = [1, 2, 3, 4, 5];
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
console.log(middleNode(head));
