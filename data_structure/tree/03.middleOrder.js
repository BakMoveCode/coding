/***
 *
 * 二叉树中的中序遍历
 *
 * 非递归实现：
 * 取根节点为目标节点，开始遍历
 * 1. 访问目标节点
 * 2. 左孩子入栈，直至左孩子为空的节点
 * 3. 节点出栈，以右孩子为目标节点，再依次执行1，2，3
 *
 */

const inorderTraversal = function(root, array = []) {
  if (root) {
    inorderTraversal(root.left, array);
    array.push(root.val);
    inorderTraversal(root.right, array);
  }
  return array;
};

const inorderTraversal = function(root) {
  let result = [];
  let stack = [];
  // 将root设置为当前节点
  let current = root;
  while (current || current.length) {
    while (current) {
      // 如果当前节点存在，将当前节点压入栈
      stack.push(current);
      // 一直压入左节点
      current = current.left;
    }
    // current为栈中最上面的元素
    current = stack.pop();
    // 存入result中
    result.push(current.val);
    // 遍历右节点
    current = current.right;
  }
  return result;
};
