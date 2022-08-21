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
    if (this.end === null) {
      this.head = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
      return;
    }
  }

  pop() {
    if (!this.head) {
      throw 'Error';
    }
    if (!this.head.next) {
      this.head = null;
      this.end = null;
    }
    
  }
}
