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

function findNode(head, index) {
  let current = 0;
  let node = head;
  while (node !== null) {
    if (current == index) return node.val;
    node = node.next;
    current++;
  }
  return null;
}

function findNodeWithRecursion(head, index) {
  if (head === null) return null;
  if (index === 0) return head.val;
  return findNodeWithRecursion(head.next, index - 1);
}
console.log(findNode(a, 0));
console.log(findNode(a, 1));
console.log(findNode(a, 2));
console.log(findNode(a, 3));
console.log(findNode(a, 4));
console.log(findNode(a, 5));
console.log(findNode(a, 6));
console.log(findNodeWithRecursion(a, 0));
console.log(findNodeWithRecursion(a, 1));
console.log(findNodeWithRecursion(a, 2));
console.log(findNodeWithRecursion(a, 3));
console.log(findNodeWithRecursion(a, 4));
console.log(findNodeWithRecursion(a, 5));
console.log(findNodeWithRecursion(a, 6));
