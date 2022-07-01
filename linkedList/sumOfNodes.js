class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create nodes
const a = new Node(2);
const b = new Node(3);
const c = new Node(5);
const d = new Node(10);

// create a linked list
a.next = b;
b.next = c;
c.next = d;

function findSum(head) {
  let amount = 0;
  let current = head;
  while (current !== null) {
    amount += current.val;
    current = current.next;
  }
  return amount;
}

function provideSumWithRecursion(head) {
  if (head === null) return 0;
  return head.val + provideSumWithRecursion(head.next);
}
console.log(findSum(a));
console.log(provideSumWithRecursion(a));
