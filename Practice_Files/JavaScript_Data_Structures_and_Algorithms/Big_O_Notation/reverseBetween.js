/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **92. Reverse Linked List II**
 *
 * Given the `head` of a singly linked list and two integers `left` and `right` where `left <= right`,
 * reverse the nodes of the list from position `left` to position `right`, and return *the reversed list*.
 *
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
const reverseBetween = function (head, left, right) {
    let currNode = head,
        prevNode = null,
        nextNode = null,
        count = 1;

    // Move the two pointers until they reach the proper starting point
    // in the list.
    while (count < left) {
        prevNode = currNode;
        currNode = currNode.next;
        count++;
    }
    // The two pointers that will fix the final connections.
    let prevLeftNode = prevNode;
    let leftNode = currNode;
    prevNode = null;

    // Iteratively reverse the nodes until count equals right.
    while (count <= right) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
        count++;
    }
};
