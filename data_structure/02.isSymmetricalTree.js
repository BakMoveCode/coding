/***
 *
 * 判断一颗二叉树是不是堆成的。
 * 一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 *
 * 思路：
 * 二叉树的右子树是二叉树左子树的镜像二叉树
 * 镜像二叉树：两颗二叉树根节点相同，但它们的左右两个子节点交换了位置
 *
 */

function isSymmetrical(pRoot) {
  return isSymmetricalTree(pRoot, pRoot);
}

function isSymmetricalTree(node1, node2) {
  if (!node1 && !node2) {
    return true;
  }
  if (!node1 || !node2) {
    return false;
  }
  if (node1.val != node2.val) {
    return false;
  }
  return isSymmetricalTree(node.left, node2.right);
}
