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

    // Adjust the final connections as explained in the algorithm
    if (prevLeftNode != null) prevLeftNode.next = prevNode;

    leftNode.next = currNode;

    return left === 1 ? prevNode : head;
};

const head = [1, 2, 3, 4, 5],
    left = 2,
    right = 4;
// Output: [1,4,3,2,5]
console.log(reverseBetween(head, left, right));

const head1 = [5],
    left1 = 1,
    right1 = 1;
// Output: [5]
console.log(reverseBetween(head1, left1, right1));
