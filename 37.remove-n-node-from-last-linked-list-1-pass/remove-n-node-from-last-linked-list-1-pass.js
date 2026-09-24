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
  // Create sentinel node
  let sentinel = new ListNode(null);

  // Attach head to it
  sentinel.next = head;

  let first = sentinel;
  let second = sentinel;
  // Move second pointer ahead by n
  for (let i = 0; i < n; i++) {
    second = second.next;
  }
  // At this point my first pointer at start and second at n distance from first

  while (second.next) {
    first = first.next;
    second = second.next;
  }

  // By the time this loops ends, I'm at previous to target
  // then apply golden rule to delete

  first.next = first.next.next;

  return sentinel.next;
};
