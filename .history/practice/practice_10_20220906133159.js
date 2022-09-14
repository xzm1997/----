










// TODO: 该方法可行，具体看网页
// TODO: 现在就是O（1），因为只插入了一个新节点，2个新指针，
function reverseBetween( head ,  m ,  n ) {
  if(head === null || head.next === null || m === n) return head;
  let newHead = new ListNode(-1);
  newHead.next = head;
  let p = newHead;
  // p：反转区间的前一个节点
  // 可看作头插法的头节点，p.next会变，p不会变
  for(let i=1; i<m; i++){
      p = p.next;
  }
  let pre = p.next;
  let cur;
  for(let i=0; i<n-m; i++){
      cur = pre.next;
      pre.next = pre.next.next
      cur.next = p.next;
      p.next = cur;
  }
  return newHead.next;
}
