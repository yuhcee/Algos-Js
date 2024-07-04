/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **2181. Merge Nodes in Between Zeros**
 *
 * You are given the `head` of a linked list, which contains a series of integers
 * **separated** by `0`'s. The **beginning** and **end** of the linked list will
 * have `Node.val == 0`.
 *
 * For every two consecutive `0`'s, **merge** all the nodes lying in between them
 * into a single node whose value is the **sum** of all the merged nodes. The
 * modified list should not contain any `0`'s.
 *
 * Return *the head of the modified linked list*.
 *
 * **Constraints:**
 *
 * - `The number of nodes in the list is in the range `[3, 2 * 105]`.
 * - `0 <= Node.val <= 1000`
 * - There are no two consecutive nodes with `Node.val == 0`.
 * - The **beginning** and **end** of the linked list have `Node.val == 0`.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const mergeNodes = function (head) {
    // Create a dummy node to simplify edge cases
    let dummy = new ListNode(0);
    let current = dummy;

    // Initialize sum accumulator
    let sum = 0;

    // Traverse the list starting from the next node of head (since head is 0)
    head = head.next;
    while (head !== null) {
        if (head.val === 0) {
            // When we encounter a zero, add a new node with the accumulated sum
            current.next = new ListNode(sum);
            current = current.next; // Move the pointer to the new node
            sum = 0; // Reset the sum
        } else {
            // Accumulate the sum
            sum += head.val;
        }
        head = head.next; // Move to the next node
    }

    // Return the next node of dummy, which is the head of the result list
    return dummy.next;
};

const head = [0, 3, 1, 0, 4, 5, 2, 0];
// Output: [4,11]
/* Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 3 + 1 = 4.
- The sum of the nodes marked in red: 4 + 5 + 2 = 11. */
console.log(mergeNodes(head));

const head1 = [0, 1, 0, 3, 0, 2, 2, 0];
// Output: [1,3,4]
/* Explanation: 
The above figure represents the given linked list. The modified list contains
- The sum of the nodes marked in green: 1 = 1.
- The sum of the nodes marked in red: 3 = 3.
- The sum of the nodes marked in yellow: 2 + 2 = 4. */
console.log(mergeNodes(head1));
