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


var levelOrder = function(root) {
  if (root == null) return [];
  const ans = [];
  let level = 0;
  const queue = [root];
  while(queue.length) {
    ans.push([]);
    const len = queue.length;
    // 通过遍历，提前执行完一层的所有元素，层级level就可以+1
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      ans[level].push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    level++;
  }
  return ans;
};
