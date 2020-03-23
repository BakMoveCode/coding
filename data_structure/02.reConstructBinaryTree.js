/****
 *
 * 二叉树重建
 *
 * 根据某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树
 *
 * 前序遍历：根节点+左子树前序遍历+右子树前序遍历
 * 中序遍历：左子树中序遍历+根节点+右子树中序遍历
 * 后序遍历：左子树后序遍历+右子树后序遍历+根节点
 *
 * 规律：
 * 前序遍历找到根节点root
 * 找到root在中序遍历的位置，左子树的长度和右子树的长度
 * 截取左子树的中序遍历，右子树的中序遍历
 * 截取左子树的前序遍历，右子树的前序遍历
 * 递归重建二叉树
 *
 */

const reConstructBinaryTree = function(pre, vin) {
  // 前序为空，返回
  if (pre.length === 0) {
    return null;
  }
  // 前序为1时，构建节点
  if (pre.length === 1) {
    return new TreeNode(pre[0]);
  }
  // 获取前序的第一个节点为根节点
  const value = pre[0];
  // 在中序中找到根节点的位置
  const index = vin.indexof(value);
  // 中序的左边为左子树
  const vinLeft = vin.slice(0, index);
  // 中序的右边为右子树
  const vinRight = vin.slice(index + 1);
  // 前序的左边为左子树的前序
  const preLeft = pre.slice(1, index + 1);
  // 前序的右边为右子树的前序
  const preRight = pre.slice(index + 1);
  // 构建节点
  const node = new TreeNode(value);

  // 递归进行构建
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);

  return node;
};

/***
 *
 * 根据二叉树的前序遍历和中序遍历，构建二叉树的后序遍历
 *
 */

const reConstructBinaryTreeLaste = function() {
  let pre;
  let vin;
};
