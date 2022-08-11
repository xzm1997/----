Array.prototype.forEach = function(fn, thisArg) {
  var _this;
  if (typeof fn !== "function") {
    throw "参数必须为函数";
  }
  if (arguments.length > 1) {
    _this = thisArg;
  }
  if (!Array.isArray(arr)) {
    throw "只能对数组使用forEach方法";
  }

  for (let index = 0; index < arr.length; index++) {
    fn.call(_this, arr[index], index, arr);
  }
};
