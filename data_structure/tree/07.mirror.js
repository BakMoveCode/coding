/****
 *
 * 给定的二叉树，将其变换为源二叉树的镜像
 *
 * 思路：
 * 递归交换二叉树所有节点左右节点的位置
 *
 */

function Mirror(root) {
  if (root) {
    // 交换左右节点
    const temp = root.right;
    root.right = root.left;
    root.left = temp;
    // 在递归节点
    Mirror(root.right);
    Mirror(root.left);
  }
}