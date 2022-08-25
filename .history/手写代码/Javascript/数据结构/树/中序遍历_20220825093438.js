var inOrderTraversal = function(root) {
  const res = [];
  // 递归函数
  function _inOrder(node) {
    if (!node) return;
    _inOrder(node.left);
    res.push(node.val);
    _inOrder(node.right);
  }
  _inOrder(root);
  return res;
};


var inOrderTraversalByStack = function(root) {
  if (!root) return [];
  const stack = [];
  let cur = root;
  const res = [];
  while (stack.length || cur) {
    // 左节点都先压入栈
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    const node = stack.pop();
    res.push(node.val);
    if (node.right != null) {
      cur = node.right;
    }
  }
  return res;
};
