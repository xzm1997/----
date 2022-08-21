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


  }

  pop(val) {

  }
}
