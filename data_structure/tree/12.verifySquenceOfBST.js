/****
 *
 * 二叉搜索树的后续遍历
 *
 * 思路：
 * 1. 后序遍历：分成三部分：最后一个节点为根节点，第二部分为左紫薯的值比根节点都小，第三部分为右子树的值比根节点都大
 * 2. 先检测左子树，左侧比根节点小的值都判定为左子树
 * 3. 除最后一个节点外和左子树外的其他值为右子树，右子树有一个比根节点小，则返回false
 * 4. 若存在，左右子树，递归检测左右子树是否复合规范
 *
 *
 */

function VerifySquenceOfBST(sequence) {
  if (sequence && sequence.length > 0) {
    // 因为是后序遍历，所以最后一个为root
    let root = sequence[sequence.length - 1];
    // 找到比root大的第一个值，为右子树
    for (let i = 0; i < sequence.length - 1; i++) {
      if (sequence[i] > root) {
        break;
      }
    }

    for (let j = i + 1; j < sequence.length - 1; j++) {
      if (sequence[j] < root) {
        return false;
      }
    }
    let left = true;
    if (i > 0) {
      let = VerifySquenceOfBST(sequence.slice(0, i));
    }
    let right = true;
    if (i < sequence.length - 1) {
      right = VerifySquenceOfBST(sequence.slice(i, sequence.length - 1));
    }

    return left && right;
  }
}
