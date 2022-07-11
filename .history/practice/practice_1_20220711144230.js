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
  let head = new chainNode(1);
  let node = head;
  for (let i = 2; i <= num; ++i) {
    let newNode = new chainNode(i);
    node.next = newNode;
    node = node.next;
  }
  node.next = head;
  // 运行
  let index = 1;
  --iterator;
  while (node.next !== node) {
    if (index % iterator === 0) {
      node.next = node.next.next;
    }
    ++index;
  }
  // 返回结果
  return node.val;
}


console.log(game(20, 13));
