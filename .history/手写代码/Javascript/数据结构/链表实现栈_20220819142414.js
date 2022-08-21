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
      this.top = new Node();
    }
  }

  pop(val) {

  }
}
