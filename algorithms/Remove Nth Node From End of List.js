/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var headBefore=new ListNode(0);
    headBefore.next=head;
    var current=headBefore,
    ended=head;
    while(n>1){
        ended=ended.next;
        n--;
    }
    while(ended.next){
        current=current.next;
        ended=ended.next;
    }
    current.next=current.next.next;
    return headBefore.next;
};