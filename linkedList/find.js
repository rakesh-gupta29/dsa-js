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

function doesNodeExist(head, target) {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
} // O(n)  time  and O(1) time

function doesNodeExistWithRecursion(head, target) {
  if (head === null) return false;
  if (head.val === target) return true;
  return doesNodeExistWithRecursion(head.next, target);
} // O(n) space and time

console.log(doesNodeExist(a, "A"));
console.log(doesNodeExistWithRecursion(a, "M"));
