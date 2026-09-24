/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentinel = new ListNode(null);

  // Attach sentinel node at start
  sentinel.next = head;

  let length = 0;

  // Find length of Linked List
  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  // Calculate deletePosition

  let delPos = length - n + 1;
  let prevDelPos = delPos - 1;

  // Reach before previous of target
  let prev = sentinel;
  for (let i = 0; i < prevDelPos; i++) {
    prev = prev.next;
  }

  // Delete
  prev.next = prev.next.next;

  return sentinel.next;
};
