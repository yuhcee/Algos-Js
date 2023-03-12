/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **23. Merge k Sorted Lists**
 *
 * You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order
 *
 * *Merge all the linked-lists into one sorted linked-list and return it*.
 *
 * **Constraints:**
 *
 * - `k == lists.length`
 * - `0 <= k <= 104`
 * - `0 <= lists[i].length <= 500`
 * - `-104 <= lists[i][j] <= 104`
 * - `lists[i]` is sorted in **ascending order**.
 * - The sum of `lists[i].length` will not exceed `104`.
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    let numsArr = [];
    lists.forEach((item) => {
        while (item && item.val !== null) {
            numsArr.push(item.val);
            item = item.next;
        }
    });
    numsArr = numsArr.sort((a, b) => b - a);
    let resultNode = null;
    numsArr.forEach((item) => {
        let tempNode = new ListNode(item);
        tempNode.next = resultNode;
        resultNode = tempNode;
    });
    return resultNode;
};
