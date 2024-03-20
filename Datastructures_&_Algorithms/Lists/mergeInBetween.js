/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **1669. Merge In Between Linked Lists**
 *
 * You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.
 *
 * Remove `list1`'s nodes from the `ath` node to the `bth` node, and put `list2` in their place.
 *
 * The blue edges and nodes in the following figure indicate the result:
 *
 * *Build the result list and return its head.*
 *
 * **Constraints:**
 *
 * - `3 <= list1.length <= 104`
 * - `1 <= a <= b < list1.length - 1`
 * - `1 <= list2.length <= 104`
 *
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
    let current = list1;
    let count = 0;
    let nodeBeforeA = null;
    let nodeAfterB = null;

    // Find the node before position a
    while (current !== null && count < a - 1) {
        current = current.next;
        count++;
    }
    nodeBeforeA = current;

    // Find the node after position b
    while (current !== null && count < b + 1) {
        current = current.next;
        count++;
    }
    nodeAfterB = current;

    // Link nodeBeforeA to list2
    if (nodeBeforeA !== null) {
        nodeBeforeA.next = list2;
    } else {
        list1 = list2;
    }

    // Traverse list2 to find its last node
    current = list2;
    while (current.next !== null) {
        current = current.next;
    }

    // Link the last node of list2 to nodeAfterB
    current.next = nodeAfterB;

    return list1;
};
