/***
 *
 * 二叉树中的后序遍历
 *
 * 非递归实现：
 * 取根节点为目标节点，开始遍历
 * 1. 左孩子入栈，直至左孩子节点为空
 * 2. 栈顶节点的右节点为空或者右节点被访问过，节点出栈并访问他，将节点标记为已访问
 * 3. 栈顶节点的右节点不为空而且未被访问，以右孩子为目标节点，再依次执行1，2，3
 *
 */

const laterOrderTraversal = function(root, array = []) {
  if (root) {
    laterOrderTraversal(root.left, array);
    laterOrderTraversal(root.right, array);
    array.push(array);
  }
};

const laterOrderTraversal = function(root) {
  const result = [];
  const stack = [];
  let last = null; // 标记上一个访问的节点
  let current = root;
  while (current || stack.length > 0) {
    // 左节点入栈，直到左节点为空
    while (current) {
      stack.push(current);
      current = current.left;
    }
    // 取最后一个节点
    current = stack[stack.length - 1];
    if (!current.right || current.right === last) {
      current = stack.pop();
      result.push(current.val);
      last = current;
      current = null; // 继续弹栈
    } else {
      current = current.right;
    }
  }
};
