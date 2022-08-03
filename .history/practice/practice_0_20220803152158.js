function man() {
  
}

const peter = man();
// 子类在链式调用之前会先收集所有的调用函数，按照顺序放入队列中，收集完成后顺序执行
peter('work')('sleep', 1000)('work')('sleep', 1000)
