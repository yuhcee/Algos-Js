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
 * Given the `head` of a singly linked list, return *`true` if it is a palindrome*.
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
};
