class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default class Queue {
  constructor() {
    this._front = null;
    this._back = null;
  }

  // O(1)
  empty() {
    return this._front === null;
  }

  // O(1)
  dequeue() {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    const value = this._front.value;

    if (this._front === this._back) {
      this._back = null;
      this._front = null;
    } else {
      this._front = this._front.next;
    }

    return value;
  }

  // O(1)
  enqueue(value) {
    const newNode = new Node(value, null);

    if (this._front === null) {
      this._front = newNode;
      this._back = newNode;
    } else {
      this._back.next = newNode;
      this._back = newNode;
    }
  }
}
