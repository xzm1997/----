var levelOrder = function(root) {
  const res = [];
  function _levelOrder(node, level) {
    if (!node) return null;
    // 当前层数组初始化
    res[level] =  res[level] || [];
    res[level].push(node.val);
    // 下一层 +1
    _levelOrder(node.left, level + 1);
    _levelOrder(node.right, level + 1);
  }
  _levelOrder(root, 0);

  return res;
};
