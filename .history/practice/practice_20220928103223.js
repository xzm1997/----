// 文件下载器，实时显示下载进度，显示预计下载时间
// download-state： 获取

const { totalmem } = require("os")

totalSize = 10000;

// new code TODO: 这样应该可以
let startTime = Date().now();
progress = 0;

window.addEventListener('download-state', function(e) {
  let nowTime = Date().now();
  progress += e.size;
  let rate = totalSize/progress
  let timeSpend = nowTime/progress* totalSize;
  let res = startTime+timeSpend;
  return {rate, res};
})
