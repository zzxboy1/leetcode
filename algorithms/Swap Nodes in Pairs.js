/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    var curr = new ListNode(0),
        result = head.next;
    while (head && head.next) {
        var temp = head.next;
        curr.next = temp.next;
        temp.next = head;
        head.next = curr.next;
        curr.next = temp;
        curr = head;
        head = head.next;
    }
    return result;
};
