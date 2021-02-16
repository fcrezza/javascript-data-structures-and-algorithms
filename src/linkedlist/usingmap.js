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
		this.nodeList = new Map();
	}

	push(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
	}

	check() {
		let currentNode = this.head;

		while (currentNode) {
			if (this.nodeList.has(currentNode)) {
				return true;
			}

			this.nodeList.set(currentNode);

			currentNode = currentNode.next;
		}

		return false;
	}
}

const list = new List();
list.push(20);
list.push(10);
list.push(5);
list.push(1);

list.head.next.next.next.next = list.head;
// console.log(list.head);
// console.log(list.check());
// console.log(list.nodeList);
