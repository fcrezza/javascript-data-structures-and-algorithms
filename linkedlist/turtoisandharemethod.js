/** STORE NODE IN THE LIST AND CHECK IN EVERY ITERATION IF NODE
 *  ALREADY EXIST IN THE LIST
 *  - TIME COMPLEXITY O(n)
 *  - AXILIARY SPACE O(n)
 */

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data, this.head);
    this.head = newNode;
  }

  check() {
    let turtoise = this.head;
    let hare = this.head;

    while (hare.next) {
      turtoise = turtoise.next;
      hare = hare.next.next;

      if (hare === turtoise) {
        return true;
      }
    }

    return false;
  }
}

const list1 = new List();
list1.push(20);
list1.push(10);
list1.push(5);
list1.push(1);

list1.head.next.next.next.next = list1.head;
console.log("list1: ", list1.check());

const list2 = new List();
list2.push(20);
list2.push(10);
list2.push(5);
list2.push(1);
list2.push(7);

list2.head.next.next.next.next = list2.head.next;
console.log("list2: ", list2.check());
