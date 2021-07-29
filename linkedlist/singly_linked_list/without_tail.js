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
    let temp = this._front;

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
    const newNode = new Node(value, this._front);
    this._front = newNode;
    this._size++;
  }

  // O(1)
  popFront() {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    this._front = this._front.next;
    this._size--;
  }

  // O(n)
  pushBack(value) {
    const newNode = new Node(value, null);

    if (this._front === null) {
      this._front = newNode;
      this._size++;
    } else {
      let temp = this._front;

      while (temp !== null) {
        if (temp.next === null) {
          temp.next = newNode;
          this._size++;
          break;
        }
        temp = temp.next;
      }
    }
  }

  // O(n)
  popBack() {
    if (this.empty()) {
      throw new Error("Tidak ada item di dalam list!");
    }

    let temp = this._front;

    while (temp !== null) {
      if (temp.next.next === null) {
        temp.next = null;
        this._size--;
      }

      temp = temp.next;
    }
  }

  // O(1)
  front() {
    return this._front;
  }

  // O(n)
  back() {
    let temp = this._front;

    if (this.size() > 0) {
      while (temp) {
        if (temp.next === null) {
          return temp;
        }

        temp = temp.next;
      }
    } else {
      return null;
    }
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
      const newNode = new Node(value, this._front);
      this._front = newNode;
      this._size++;
    } else {
      let currentIndex = 0;
      let temp = this._front;

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

    if (index === 0) {
      this._front = this._front.next;
      this._size--;
    } else {
      let currentIndex = 0;
      let temp = this.front();

      while (temp) {
        if (currentIndex === index - 1) {
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
    let temp = this._front;

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

    this._front = prev;
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
        if (temp === this.front()) {
          this._front = temp.next;
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
