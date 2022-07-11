function chainNode(val) {
  return {
    val: val,
    next: null
  }
}


let node = new chainNode(5);
console.log(node.val);
console.log(node.next);
