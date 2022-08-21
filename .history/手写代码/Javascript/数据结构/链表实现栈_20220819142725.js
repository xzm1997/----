class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(val) {
    let node = new Node(val);
    if(!this.top) {
      this.top = node;
    }
    node.next = this.top;
    this.top = node;
  }

  pop(val) {
    if (!this.top) {
      throw 'Error';
    }
    let val = this.top.val;
    if (!this.top.next) {
      this.top = null;
    } else {
      this.top = this.top.next;
    }
    return val;
  }
}
