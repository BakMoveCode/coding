/**
 *
 * 平衡二叉树
 * 平衡二叉树：每个子树的深度之差不超过1
 *
 *
 * 思路：
 * 后序遍历二叉树
 *
 * 在遍历二叉树每个节点前都会遍历其左右子树
 *
 *
 *
 *
 */

function isBalanced_Solution(pRoot) {
  return balanced(pRoot) !== -1;
}

function balanced(node) {
  if (!node) {
    return 0;
  }

  const left = balanced(node.left);
  const right = balanced(node.right);

  // Math.abs是获取绝对值
  if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1;
  }
  return Math.max(left, right) + 1;
}
