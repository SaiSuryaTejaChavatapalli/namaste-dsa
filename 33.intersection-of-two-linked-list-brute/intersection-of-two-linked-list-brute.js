/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA == null || headB == null) return null;
  let c1 = headA;
  while (c1) {
    let c2 = headB;
    while (c2) {
      if (c1 === c2) {
        return c1;
      }
      c2 = c2.next;
    }
    c1 = c1.next;
  }
  return null;
};
