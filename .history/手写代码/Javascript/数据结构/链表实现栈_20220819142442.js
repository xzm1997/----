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
    if(!this.top) {
      let node = new Node(val);
      this.top = node;
    }
  }

  pop(val) {

  }
}
