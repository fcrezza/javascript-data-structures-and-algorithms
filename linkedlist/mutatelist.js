/** CHANGE FLAG OF THE NODE IN EVERY ITERATION
 *  AND CHECK IF THE FLAG OF THE NODE IS TRUE
 *  - TIME COMPLEXITY O(n)
 *  - AXILIARY SPACE O(1)
 */

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
		this.flag = false;
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
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.flag) {
				return true;
			}

			currentNode.flag = true;

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
console.log(list.head);
console.log(list.check());
