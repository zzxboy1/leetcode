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
var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0),
    result=list, 
    cur;
    while(l1 !== null || l2 !== null ){
        cur=result.next||new ListNode(0);
        result.next=cur;
        cur.val += (l1 && l1.val || 0);
        cur.val += (l2 && l2.val || 0);
        if(cur.val>9){
            cur.val-=10;
            cur.next=new ListNode(1);
        }
        result=cur;
        l1=l1&&l1.next;
        l2=l2&&l2.next;
    }
    result=list.next;
    return result;
};