/**
 * 实现一个二叉搜索树
 * https://mp.weixin.qq.com/s/PpR1Lvg8pk3dRWHmVtaBYws
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
  let parent = null;
  // 循环条件是current是否存在
  while (current) {
    parent = current;
    if (data < parent.data) {
      // 插入左边的树
      current = current.left;
      if (!current) {
        parent.left = node;
        return;
      }
    } else {
      // 插入右边的树
      current = current.right;
      if (!current) {
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

Tree.prototype.getMin = function() {
  let current = this.root;
  while (current) {
    if (!current.left) {
      return current;
    }
    current = current.left;
  }
};

Tree.prototype.getMax = function() {
  let current = this.root;
  while (current) {
    if (!current.right) {
      return current;
    }
    current = current.right;
  }
};

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
t.middleOrder(t.root);
console.log(t.getMin(), t.getMax());
console.log(t.getDeep(t.root, 0));
console.log(t.getNode(5, t.root));
