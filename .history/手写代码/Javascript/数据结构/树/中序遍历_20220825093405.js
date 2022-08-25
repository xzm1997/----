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
