export default class Stack {
  constructor(size) {
    this.size = size;
    this.stack = [];
  }

  add(value) {
    if (this.stack.length < this.size) {
      this.stack.push(value);
      return;
    }

    console.log("stack is full");
  }

  remove() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    }

    console.log("stack is empty");
  }

  top() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }

    return null;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
