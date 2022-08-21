class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.end = null;
  }

  insert(val) {
    let node = new Node(val);
    if (!this.end) {
      this.head = node;
    } else {
      this.end.next = node;
    }
    this.end = node;
  }

  pop() {
    if (!this.head) {
      throw 'Error';
    }
    if (!this.head.next) {
      let val = this.head.val;
      this.head = null;
      this.end = null;
      return val;
    }
    let val = this.head.val;
    this.head = this.head.next;
    return val;
  }
}


let queue = new Queue();
queue.insert(1).insert(2).insert(3);
let res = [];
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
