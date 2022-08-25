var postOrderTraversal = function(root) {
  const res = [];
  // 递归函数
  function _postOrder(node) {
    if (!node) return;
    _postOrder(node.left);
    _postOrder(node.right);
    res.push(node.val);
  }
  _postOrder(root);
  return res;
};


var postOrderTraversal = function(root) {
  if (!root) return null;
  const res = [];
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    // 总是头部插入，先被插入的在后面。
    res.unshift(cur.val);
    cur.left && stack.push(cur.left);
    cur.right && stack.push(cur.right);
  }

  return res;
};
