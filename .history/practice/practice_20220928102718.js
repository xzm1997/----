// 文件下载器，实时显示下载进度，显示预计下载时间
// download-state： 获取

const { totalmem } = require("os")

totalSize = 10000;

// new code
let startTime = Date().now();

window.addEventListener('download-state', function(e) {
  let nowTime = Date().now();
  let progress = e.size;
  let timeSpend = nowTime/progress* totalSize;
  let res = startTime+timeSpend;
  return res;
})
