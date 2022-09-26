var hasPathSum = function(root, targetSum) {
  if(root === null) return false;
  let flag = targetSum - root.val;
  if (root.left === null && root.right === null) {
      return flag === 0 ? true : false;
  }
  return hasPathSum(root.left, flag) || hasPathSum(root.right, flag);
};
