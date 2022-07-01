class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// create nodes
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

// create a linked list
a.next = b;
b.next = c;
c.next = d;

// transversal
const transverseList = (head) => {
  let current = head;
  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}; // O( n ) time and O(1) space

transverseList(a);

const transversWithRecursion = (head) => {
  if (head === null) return;
  console.log(head.val);
  transversWithRecursion(head.next);
}; // O(n ) space aand O(n) time

transversWithRecursion(a);
