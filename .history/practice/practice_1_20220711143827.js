function chainNode(val) {
  return {
    val: val,
    next: null
  }
}

function game(num, iterator) {
  // 边界条件
  if (num < 1) return null;
  if (num === 1) return 1;
  // 链表建立
  let head = new createNode(1);
  let node = head;
  for (let i = 2; i <= num; ++i) {
    let newNode = new createNode(i);
    node.next = newNode;
    node = node.next;
  }
  node.next = head;
  // 运行
  let index = 1;
  while (node.next !== node) {
    if (index % 3 === 0) {

    }
  }
  // 返回结果
}
