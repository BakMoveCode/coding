/***
 *
 * 二叉树中的前序遍历
 *
 * 分为：
 * 递归版本
 * 非递归版本
 *
 * 非递归版本
 * 取跟节点为目标节点，开始遍历
 * 1. 访问目标节点
 * 2. 左孩子入栈》直至左孩子为空的节点
 * 3. 节点出栈，以右孩子为目标节点，再依次执行1，2，3
 *
 * 注意：首先从根节点开始访问，先访问左子树，要等左子树全部访问完了，再访问右子树
 *
 */

// 递归实现
const preOrderTraversal = function(root, array = []) {
  if (root) {
    array.push(root.val);
    preOrderTraversal(root.left, array);
    preOrderTraversal(root.right, array);
  }
  return array;
};
// 非递归实现
const preOrderTraversal = function(root) {
  const result = [];
  const stack = [];
  // 将当前根阶段赋给current
  let current = root;
  while (current || stack.length > 0) {
    while (current) {
      // 存入result
      result.push(current.val);
      // 放入栈中，栈中保存的是当前节点，不然后面不知道到达哪个节点了
      stack.push(current);
      // 访问左节点
      current = current.left;
    }
    // 出栈，
    current = stack.pop();
    // 访问右节点
    current = current.right;
  }
  return result;
};
