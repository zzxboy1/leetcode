/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var mergeList = new ListNode(0);
    var head = mergeList;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            mergeList.next = l2;
            l2 = l2.next;
        } else {
            mergeList.next = l1;
            l1 = l1.next;
        }
        mergeList = mergeList.next;
    }
    if (l1 || l2) {
        mergeList.next = l1 ? l1 : l2;
    }
    return head.next;
};
