export default class MinStack {
  constructor() {
    this.min = [];
    this.stack = [];
  }

  push(val) {
    if (this.min.length === 0 || val <= this.min[this.min.length - 1]) {
      this.min.push(val);
    }

    this.stack.push(val);
  }

  pop() {
    if (this.stack[this.stack.length - 1] === this.min[this.min.length - 1]) {
      this.min.pop();
    }

    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}
