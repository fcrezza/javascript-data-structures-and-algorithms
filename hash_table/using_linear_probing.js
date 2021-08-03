export class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

export class HashTable {
  constructor(size) {
    if (typeof size !== "number") {
      throw new Error("Parameter `size` is not a number!");
    }

    this.table = new Array(size);
    this.deletedNode = new Node(-1, -1);
  }

  // simple hash function O(1), it could be complex operation
  hash(k, m) {
    return k % m;
  }

  // O(n)
  add(key, value) {
    let idx = this.hash(key, this.table.length);
    let counter = 1;

    while (
      this.table[idx] !== undefined &&
      this.table[idx].key !== key &&
      this.table[idx].key !== -1
    ) {
      if (counter > this.table.length) {
        throw new Error("Table is full");
      }

      idx = this.hash(idx + 1, this.table.length);
      counter++;
    }

    this.table[idx] = new Node(key, value);
  }

  // O(n)
  exists(key) {
    let idx = this.hash(key, this.table.length);
    let counter = 1;

    while (this.table[idx] !== undefined) {
      if (counter > this.table.length) {
        return false;
      }

      if (this.table[idx].key === key) {
        return true;
      }

      idx = this.hash(idx + 1, this.table.length);
      counter++;
    }

    return false;
  }

  // O(n)
  get(key) {
    let idx = this.hash(key, this.table.length);
    let counter = 1;

    while (this.table[idx] !== undefined) {
      if (counter > this.table.length) {
        return null;
      }

      if (this.table[idx].key === key) {
        return this.table[idx].value;
      }

      idx = this.hash(idx + 1, this.table.length);
      counter++;
    }

    return null;
  }

  // O(n)
  remove(key) {
    let idx = this.hash(key, this.table.length);
    let counter = 1;

    while (this.table[idx] !== undefined) {
      if (counter > this.table.length) {
        return null;
      }

      if (this.table[idx].key === key) {
        const value = this.table[idx].value;
        this.table[idx] = this.deletedNode;
        return value;
      }

      idx = this.hash(idx + 1, this.table.length);
      counter++;
    }

    return null;
  }
}
