function myStorageSet(obj) {
  
}


obj = {};
// 增加新属性时，给当前对象加一个时间戳的属性d1
var d1 = new Date();  // 获取当前时间
obj.addtime = d1;
// 调用时，获取当前时间戳d2
var d2 = new Date();  // 获取当前时间
let time = (d2-d1)/1000;
if (time > maxAge) {
  // 过期
  return null
} else {
  // 未过期
  return obj.value;
}

