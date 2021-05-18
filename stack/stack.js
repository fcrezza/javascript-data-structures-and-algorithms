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
      this.stack.pop();
      return;
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

const stackObj = new Stack(5);
stackObj.add(1);
stackObj.add(2);
stackObj.add(3);
stackObj.add(4);
stackObj.remove();
stackObj.add(5);
stackObj.add(6);
// console.log(stackObj.top());
