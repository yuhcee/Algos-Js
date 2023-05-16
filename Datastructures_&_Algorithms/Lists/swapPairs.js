/**
 * **24. Swap Nodes in Pairs**
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 * You must solve the problem without modifying the values in the list's nodes (i.e.,
 * only nodes themselves may be changed.)
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[0, 100]`.
 * - `0 <= Node.val <= 100`
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * Swaps every two adjacent nodes in the given linked list.
 * @param {ListNode} head - The head of the linked list.
 * @returns {ListNode} - The head of the modified linked list.
 */
const swapPairs = function (head) {
    // Create a dummy node as the previous node.
    const dummy = new ListNode(0);
    dummy.next = head;

    // Set the previous node as the dummy node.
    let prev = dummy;

    while (head && head.next) {
        // Get the first and second nodes to be swapped.
        const node1 = head;
        const node2 = head.next;

        // Update the previous node's next pointer.
        prev.next = node2;

        // Perform the swap operation.
        const next = node2.next;
        node2.next = node1;
        node1.next = next;

        // Update the previous node and move to the next pair.
        prev = node1;
        head = next;
    }

    // Return the head of the modified linked list.
    return dummy.next;
};

const head = [1, 2, 3, 4];
// Output: [2,1,4,3]
console.log(swapPairs(head));
