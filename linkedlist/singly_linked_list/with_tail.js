class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

export default class List {
  constructor() {
    this._size = 0;
    this._front = null;
    this._back = null;
  }

  // O(1)
  size() {
    return this._size;
  }

  // O(1)
  empty() {
    return this._size === 0;
  }

  // O(n)
  valueAt(index) {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (index >= this.size()) {
      throw new Error("Index terlalu besar!");
    }

    let currentIndex = 0;
    let temp = this.front();

    while (temp) {
      if (currentIndex === index) {
        return temp.value;
      }

      currentIndex++;
      temp = temp.next;
    }
  }

  // O(1)
  pushFront(value) {
    if (this._front === null) {
      const newNode = new Node(value, null);
      this._front = newNode;
      this._size++;
    } else {
      const newNode = new Node(value, this._front);
      this._front = newNode;
      this._size++;
    }
  }

  // O(1)
  popFront() {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (this._front === this._back) {
      this._back = null;
      this._front = null;
      this._size--;
    } else {
      this._front = this._front.next;
      this._size--;
    }
  }

  // O(1)
  pushBack(value) {
    const newNode = new Node(value, null);

    if (this._front === null) {
      this._front = newNode;
      this._back = newNode;
      this._size++;
    } else {
      this._back.next = newNode;
      this._back = newNode;
      this._size++;
    }
  }

  // O(n)
  popBack() {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (this.front() === this.back()) {
      this._front = null;
      this._back = null;
      this._size--;
      return;
    }

    let temp = this._front;

    while (temp !== null) {
      if (temp.next.next === null) {
        temp.next = null;
        this._back = temp;
        this._size--;
      }

      temp = temp.next;
    }
  }

  // O(1)
  front() {
    return this._front;
  }

  // O(1) when we have tail reference, otherwise O(n)
  back() {
    return this._back;
  }

  // O(n)
  insert(index, value) {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (index >= this.size()) {
      throw new Error("Index terlalu besar!");
    }

    if (index === 0) {
      const newNode = new Node(value, this.front());
      this._front = newNode;
      this._size++;
    } else {
      let currentIndex = 0;
      let temp = this.front();

      while (temp) {
        if (currentIndex === index - 1) {
          const newNode = new Node(value, temp.next);
          temp.next = newNode;
          this._size++;
          break;
        }

        currentIndex++;
        temp = temp.next;
      }
    }
  }

  // O(n)
  erase(index) {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (index >= this.size()) {
      throw new Error("Index terlalu besar!");
    }

    if (this.front() === this.back()) {
      this._front = null;
      this._back = null;
      this._size--;
    } else if (index === 0) {
      this._front = this._front.next;
      this._size--;
    } else {
      let currentIndex = 0;
      let temp = this.front();

      while (temp) {
        if (currentIndex === index - 1) {
          if (index === this.size() - 1) {
            this._back = temp;
          }
          temp.next = temp.next.next;
          this._size--;
          break;
        }

        currentIndex++;
        temp = temp.next;
      }
    }
  }

  // O(n)
  valueNFromEnd(n) {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    if (n >= this.size()) {
      throw new Error("Index terlalu besar!");
    }

    let currentIndex = this.size() - 1;
    let temp = this.front();

    while (temp) {
      if (currentIndex === n) {
        return temp.value;
      }

      currentIndex--;
      temp = temp.next;
    }
  }

  // O(n)
  reverse() {
    let curr = this.front();
    let prev = null;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    const temp = this._front;
    this._front = this._back;
    this._back = temp;
  }

  // O(n)
  removeValue(value) {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    let temp = this._front;
    let prev = this._front;

    while (temp !== null) {
      if (temp.value === value) {
        if (temp === this.front() && temp === this.back()) {
          this._front = null;
          this._back = null;
        } else if (temp === this.front()) {
          this._front = temp.next;
        } else if (temp === this.back()) {
          prev.next = null;
          this._back = prev;
        } else {
          prev.next = temp.next;
        }

        this._size--;
        break;
      }

      prev = temp;
      temp = temp.next;
    }
  }
}
