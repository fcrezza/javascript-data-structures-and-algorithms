export default class Queue {
  constructor(size) {
    if (typeof size === "undefined") {
      throw new Error("Tentukan batas queue!");
    }

    this._size = size + 1;
    this._queue = [];
    this._readIndex = 0;
    this._writeIndex = 0;
  }

  enqueue(value) {
    if (this.full()) {
      throw new Error("Queue penuh!");
    }

    this._queue[this._writeIndex] = value;

    if (this._writeIndex + 1 === this._size) {
      this._writeIndex = 0;
    } else {
      this._writeIndex++;
    }
  }

  dequeue() {
    if (this.empty()) {
      throw new Error("Queue kosong!");
    }

    const value = this._queue[this._readIndex];
    this._queue[this._readIndex] = null;

    if (this._readIndex + 1 === this._size) {
      this._readIndex = 0;
    } else {
      this._readIndex++;
    }

    return value;
  }

  empty() {
    return this._readIndex === this._writeIndex;
  }

  full() {
    const isFull =
      this._writeIndex + 1 === this._readIndex ||
      this._writeIndex - this._readIndex === this._size - 1;
    return isFull;
  }
}
