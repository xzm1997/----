let res = []
// 这样应该没啥问题了
var hasPathSum = function(root, targetSum) {
  if(root === null) return null;
  let flag = targetSum - root.val;
  if (root.left === null && root.right === null) {
    res.push(root.val)
      if (flag === 0) {
        return res;
      } else {
        res.pop();
        return null;
      }
  }
  return hasPathSum(root.left, flag) || hasPathSum(root.right, flag);
};

