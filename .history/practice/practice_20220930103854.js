// 给你一个整数数组 nums ，请计算数组的 中心下标 。
// 数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。
// 如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。
// 如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
var pivotIndex = function(nums) {
  // TODO: 这个是笨法
  //求前n项和
  function sum(n){
      var sum = 0;
      for(var i = 0; i <= n; i++){
          sum += nums[i];
      }
      return sum;
  }
  var sumTotal= sum(nums.length-1);  //总和
  for(var i = 0 ; i < nums.length; i++){
      var sumleft = sum(i-1);
      if(sumTotal == 2* sumleft + nums[i]){  //中心索引公式
          return i;
      }
  }
  return -1;
};
