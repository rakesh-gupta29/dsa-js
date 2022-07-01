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
