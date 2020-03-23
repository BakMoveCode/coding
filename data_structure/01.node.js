/**
 * 二叉树
 * http://www.conardli.top/docs/dataStructure/二叉树/二叉树的基本操作.html#基本结构
 *
 * 二叉树
 *
 * 四种遍历的主要思想：
 * 1. 前序遍历：访问根》遍历左子树？遍历右子树
 * 2. 中序遍历：访问左子树》访问根》遍历右子树
 * 3. 后序遍历：遍历左子树》遍历右子树》访问根
 * 4. 广度遍历：按照层次一层层遍历
 *
 */

// 定义节点
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

//显示节点
Node.prototype.show = function() {
  console.log(this.data);
};

// 定义树
function Tree() {
  this.root = null;
}
// 将节点插入到树中
Tree.prototype.insert = function(data) {
  // 实例一个节点
  let node = new Node(data, null, null);
  // 判断节点为空时，将节点设置为tree的root节点
  if (!this.root) {
    this.root = node;
    return;
  }
  // root是当前树的根节点
  let current = this.root;
  // 定义为父亲节点
  let parent = null;
  // 循环条件是current是否存在
  while (current) {
    // 首先，将当前节点赋给父亲节点
    parent = current;
    if (data < parent.data) {
      // 将当前节点的左节点给当前节点
      current = current.left;
      // 如果不存在节点
      if (!current) {
        // 那node就是节点
        parent.left = node;
        return;
      }
    } else {
      // 将当前节点给🈶️节点
      current = current.right;
      // 如果不存在节点
      if (!current) {
        // 那该节点就是右节点
        parent.right = node;
        return;
      }
    }
  }
};

// 树的前序排列
Tree.prototype.preOrder = function(node) {
  if (node) {
    node.show();
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
};

// 树的中序排列
Tree.prototype.middleOrder = function(node) {
  if (node) {
    this.middleOrder(node.left);
    node.show();
    this.middleOrder(node.right);
  }
};

// 树的后续排列
Tree.prototype.laterOrder = function(node) {
  if (node) {
    this.laterOrder(node.left);
    this.laterOrder(node.right);
    node.show();
  }
};

// 获取最小节点
Tree.prototype.getMin = function() {
  let current = this.root;
  while (current) {
    if (!current.left) {
      return current;
    }
    current = current.left;
  }
};

// 获取最大节点
Tree.prototype.getMax = function() {
  let current = this.root;
  while (current) {
    if (!current.right) {
      return current;
    }
    current = current.right;
  }
};

// 获取深度
Tree.prototype.getDeep = function(node, deep) {
  deep = deep || 0;
  if (node === null) {
    return deep;
  }
  deep++;
  let dleft = this.getDeep(node.left, deep);
  let dright = this.getDeep(node.right, deep);
  return Math.max(dleft, dright);
};

Tree.prototype.getNode = function(data, node) {
  if (node) {
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this.getNode(data, node.left);
    } else {
      return this.getNode(data, node.right);
    }
  } else {
    return null;
  }
};

let t = new Tree();
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);

console.log(t);
// t.middleOrder(t.root);
// console.log(t.getMin(), t.getMax());
// console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root));
