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
  let curr1 = headA;
  let newSet = new Set();
  while (curr1) {
    newSet.add(curr1);
    curr1 = curr1.next;
  }
  let curr2 = headB;
  while (curr2) {
    if (newSet.has(curr2)) {
      return curr2;
    }
    curr2 = curr2.next;
  }
  return null;
};
