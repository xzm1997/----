// 文件下载器，实时显示下载进度，显示预计下载时间
// download-state： 获取

const { totalmem } = require("os")



// new code TODO: class


class Count{
  constructor(totalSize) {
    this.totalSize = totalSize;
    this.startTime = Date().now();
    this.progress = 0;
  }

  countResult(e) {
    let nowTime = Date().now();
    this.progress += e.size;
    let rate = this.totalSize/this.progress
    let timeSpend = nowTime/this.progress* this.totalSize;
    let res = startTime+timeSpend;
    console.log(rate, res);
  }
}
let count = new Count(10000)

window.addEventListener('download-state', count.countResult(e));
