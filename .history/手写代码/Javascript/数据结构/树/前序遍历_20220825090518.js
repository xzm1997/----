let perOrderTraversal = function(root) {
  const res = [];
  function _preOrder(node) {
    if (!node) return;
    res.push(node.val);
    _preOrder(node.left);
    _preOrder(node.right);
  }
  _preOrder(root);
  return res;
}
