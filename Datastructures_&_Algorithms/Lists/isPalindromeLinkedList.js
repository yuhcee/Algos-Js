/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **234. Palindrome Linked List**
 *
 * Given the `head` of a singly linked list, return *`true` if it is a
 * palindrome*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is in the range `[1, 105]`.
 * - `0 <= Node.val <= 9`
 *
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeLinkedList = function (head) {
    // init an empty array to store values
    const vals = [];

    // loop through linked list and copy the values into vals array
    while (head) {
        vals.push(head.val);
        head = head.next;
    }

    // reverse vals array
    const l1 = [...vals].reverse();

    // compare array to check if its palindrome
    return JSON.stringify(l1) === JSON.stringify(vals);
};

const head = [1, 2, 2, 1];
// Output: true
console.log(isPalindromeLinkedList(head));

const head2 = [1, 2];
// Output: false
console.log(isPalindromeLinkedList(head2));
