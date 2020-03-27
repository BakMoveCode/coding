/***
 *
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
 *
 */

function printListFromTailHead(head) {
  const array = [];
  while (head) {
    // 从头部插入
    array.unshift(head.val);
    head = head.next;
  }
  return array;
}
