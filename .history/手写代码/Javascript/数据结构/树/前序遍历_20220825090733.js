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



var preOrderTraversalByStack = function(root) {
  if (!root) return [];
  const stack = [root];
  const res = [];
  while(stack.length) {
    // 出栈
    const cur = stack.pop();
    res.push(cur.val);
    // 子节点存在压入栈中，先右再左
    cur.right && stack.push(cur.right);
    cur.left && stack.push(cur.left);
  }
  return res;   
};
