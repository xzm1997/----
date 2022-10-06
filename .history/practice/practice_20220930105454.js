// // 给你一个整数数组 nums ，请计算数组的 中心下标 。
// // 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// // 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
// // 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
// var pivotIndex = function(nums) {
//   //求前n项和
//   function sum(n){
//       var sum = 0;
//       for(var i = 0; i <= n; i++){
//           sum += nums[i];
//       }
//       return sum;
//   }
//   var sumTotal= sum(nums.length-1);  //总和
//   for(var i = 0 ; i < nums.length; i++){
//       var sumleft = sum(i-1);
//       if(sumTotal == 2* sumleft + nums[i]){  //中心索引公式 TODO: 通过这个保证结果是最左边的这个
//           return i;
//       }
//   }
//   return -1;
// };
// [1,2,3,4,3,2,1]
// // TODO: 4为中心，左为[1,2,3]， 右边是[3,2,1]
// // TODO: *2保证 **左和+中心+右和=左和*2+中心=全体之和** => 左等于右


// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
// 叶子节点 是指没有子节点的节点。
// TODO: 思路上应该没啥问题吧, 有问题叫牛

var pathSum = function(root, sum) {
  let arr = [];
  let path = [];
  dfs(root,  path, arr, sum);
  return arr;
};

function dfs(root, path, arr, sum) {
  if(!root) return;
  path.push(root.val);
  if(root.val == sum && root.left == null && root.right == null) {
      arr.push([...path]);//TODO: 深拷贝，
  }
  dfs(root.left, path, arr, sum - root.val);
  dfs(root.right, path, arr, sum - root.val);
  path.pop();
}
