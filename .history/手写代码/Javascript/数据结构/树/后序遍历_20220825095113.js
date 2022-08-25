var postorderTraversal = function(root) {
  const res = [];
  // 递归函数
  function _postorder(node) {
    if (!node) return;
    _postorder(node.left);
    _postorder(node.right);
    res.push(node.val);
  }
  _postorder(root);
  return res;
};
