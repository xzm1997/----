// 题目描述：
// 给定一个字符串数组，每个字符串格式为“a1,a2,a3->e1”，表示a1,a2,a3生成e1。
// 判断给定的字符串数组中，是否存在死循环，如果存在，输出所有存在死循环的路径。
// 输入示例1：
// [“a1,a2,a3->e1”, “a1,a4,a5->e1”, “e1,e2->e3”]
// 输出示例1：
// 不存在死循环
// 输入示例2：
// [“a1,a2,a3->e1”, “e1,a4,a5->e2”, “a1,e1,e2->a2”]
// 输出示例2：
// 存在死循环
// a2->e1->a2
// a2->e1->e2->a2
// 提示：每一组循环只要输出一个就行，比如：a2->e1->e2->a2和e1->e2->a2->e1属于同一个循环，只要输出第一个就行。

function solveProblem(arr) {
  let dir = [];
  for (let item of arr) {
    let [input, output] = item.split('->');
    input = input.split(',')
    dir.push([input, output])
  }
  let set = [];
  for (let item of dir) {
    set.push(...item[0])
  }
}

console.log(solveProblem(["a1,a2,a3->e1", "a1,a4,a5->e2", "e1,e2->e3"]))
console.log(solveProblem(["a1,a2,a3->e1", "e1,a4,a5->e2", "a1,e1,e2->a2"]))
