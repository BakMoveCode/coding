/***
 *
 * 链表倒数第K个节点
 *
 */

// 这道题的代码有问题
function FindKthToTail(head, k) {
  if (!head || !k) {
    return null;
  }
  let front = head;
  let behind = head;
  let index = 1;
  while (front.next) {
    index++;
    front = front.next;
    if (index > k) {
      behind = behind.next;
    }
  }
  return k <= index && behind;
}
