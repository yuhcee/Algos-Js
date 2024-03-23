/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **143. Reorder List**
 *
 * You are given the head of a singly linked-list. The list can be
 * represented as:
 *
 * `L0 → L1 → … → Ln - 1 → Ln`
 *
 * *Reorder the list to be on the following form:*
 *
 * `L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`
 *
 * You may not modify the values in the list's nodes. Only nodes themselves
 * may be changed.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[1, 5 * 104]`.
 * - `1 <= Node.val <= 1000`
 *
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    if (!head || !head.next) {
        return;
    }

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let current = slow.next;
    while (current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    slow.next = null; // Break the link between the first and second halves

    // Step 3: Merge the first half with the reversed second half
    let first = head;
    let second = prev;
    while (first && second) {
        let firstNext = first.next;
        let secondNext = second.next;
        first.next = second;
        second.next = firstNext;
        first = firstNext;
        second = secondNext;
    }
};

const head = [1, 2, 3, 4];
// Output: [1,4,2,3]
console.log(reorderList(head));

const head1 = [1, 2, 3, 4, 5];
// Output: [1,5,2,4,3]
console.log(reorderList(head1));
