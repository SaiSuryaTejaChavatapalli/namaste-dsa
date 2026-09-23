/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let curr = head;
  let newSet = new Set();
  while (curr) {
    if (newSet.has(curr)) return true;
    else newSet.add(curr);
    curr = curr.next;
  }
  return false;
};
