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
      this.head = null;
      this.end = null;
      return;
    }
    this.head = this.head.next;
  }
}
