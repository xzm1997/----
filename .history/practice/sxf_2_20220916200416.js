const solveProblem = function(num, interval) {
  let node = createList(num);
  interval -= 1;
  let count = 1;
  while (node.next !== node) {
    if (count % interval === 0) {
      node.next = node.next.next;
    }
    ++count;
    node = node.next;
  }
  return node.val;
}

const createList = function(num) {
  function createNode(val) {
    return {
      val: val,
      next: null
    }
  }
  let head = createNode(1);
  let node = head;
  for (let i = 2; i <= num; ++i) {
    node.next = createNode(i);
    node = node.next;
  }
  node.next = head;
  return head;
}

let res = solveProblem(3, 2);
console.log(res);
