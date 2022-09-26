let res = []
// 这样应该没啥问题了
var hasPathSum = function(root, targetSum) {
  if(root === null) return [];
  let flag = targetSum - root.val;
  if (root.left === null && root.right === null) {
    res.push(root.val)
      if (flag === 0) {
        return res;
      } else {
        res.pop();
        return [];
      }
  }
  // return hasPathSum(root.left, flag) || hasPathSum(root.right, flag);
  let resLeft = hasPathSum(root.left, flag);
  let resRight = hasPathSum(root.right, flag);
  if (resLeft.length) {
    return resLeft
  }
  if (resRight.length) {
    return resRight
  }
};

