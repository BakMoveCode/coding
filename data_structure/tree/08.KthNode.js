/***
 *
 * 给定一棵二叉搜索树，请找出其中的第k小的结点。 例如， （5，3，7，2，4，6，8） 中，按结点数值大小顺序第三小结点的值为4。
 *
 * 二叉搜索树的特点：
 * 中序遍历后就是排序的节点
 * 若它的左子树不为空，则左子树上所有结点的值均小于它的根结点的值
 * 若它的右子树不为空，则右子树上所有结点的值均大于它的根结点的值
 *
 * 它的左右子树也分别为二叉排序树
 *
 * 思路：
 * 二叉搜索树的中序遍历即排序后的节点，
 *
 */

// 递归实现， k是下标
function KthNode(pRoot, k) {
  const arr = [];
  loopThrough(pRoot, arr);
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}
// 对树进行中序遍历
function loopThrough(node, arr) {
  if (node) {
    loopThrough(node.left, arr);
    arr.push(node);
    loopThrough(node.right, arr);
  }
}

// 非递归实现
function KthNode(pRoot, k) {
  const arr = [];
  const stack = [];
  let current = pRoot;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    arr.push(current);
    current = current.right;
  }
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}
