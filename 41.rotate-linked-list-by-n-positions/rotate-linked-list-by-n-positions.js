/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  // Finding length
  let length = 0;
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }
  let n = k % length;

  let s = head;
  let f = head;

  for (let i = 0; i < n; i++) {
    f = f.next;
  }

  while (f.next) {
    f = f.next;
    s = s.next;
  }
  f.next = head;
  head = s.next;
  s.next = null;

  return head;
};
