/****
 *
 * 二叉树的最大深度
 *
 * 最大深度：
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数
 *
 * 思路：
 * 深度优先遍历 + 分治
 *
 * 一颗二叉树的最大深度等于左子树深度和右子树最大深度的最大值+1
 *
 */

function TreeDepth(pRoot) {
  return !pRoot
    ? 0
    : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1;
}

/***
 *
 * 最小深度
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 *
 *
 * 思路：
 * 深度优先+分治
 *
 * 左右子树都不为空：左子树深度和右子树最小深度的最小值+1
 * 左树为空：右子树最小深度的最小值+1
 * 右树为空：左子树最小深度+1
 *
 */

function minDepth(root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
