import {HashTable, Node} from "./using_linear_probing";

describe("hash table using linear probing", function () {
  it("should throw an error when parameter not provided during initialization", function () {
    expect(() => new HashTable()).toThrow("Parameter `size` is not a number!");
  });

  it("should hash key correctly", function () {
    const table = new HashTable(3);
    expect(table.hash(1, 3)).toBe(1);
    expect(table.hash(2, 3)).toBe(2);
    expect(table.hash(3, 3)).toBe(0);
  });

  it("should add item to the table", function () {
    const table = new HashTable(5);
    table.add(1, 1);
    table.add(2, 2);
    table.add(6, 6);
    table.add(7, 7);
    table.add(10, 10);
    expect(table.table[1]).toEqual(new Node(1, 1));
    expect(table.table[3]).toEqual(new Node(6, 6));
    expect(table.table[4]).toEqual(new Node(7, 7));
    expect(table.table[0]).toEqual(new Node(10, 10));
  });

  it("should throw an error when try add item to table and it is full", function () {
    const table = new HashTable(3);
    table.add(1, 1);
    table.add(2, 2);
    table.add(3, 3);
    expect(() => table.add(4, 4)).toThrow("Table is full");
  });

  it("should update item if have same key", function () {
    const table = new HashTable(2);
    table.add(1, 1);
    table.add(1, 2);
    expect(table.table[1]).toEqual(new Node(1, 2));
    table.add(2, 1);
    table.add(2, 2);
    expect(table.table[0]).toEqual(new Node(2, 2));
  });

  it("check item in the table, and return boolean wheater exists or not", function () {
    const table = new HashTable(5);
    table.add(1, 1);
    table.add(2, 2);
    table.add(3, 3);
    table.add(4, 4);
    table.add(6, 6);
    expect(table.exists(1)).toBe(true);
    expect(table.exists(5)).toBe(false);
    expect(table.exists(6)).toBe(true);
    expect(table.exists(7)).toBe(false);
  });

  it("should return correct value", function () {
    const table = new HashTable(5);
    table.add(1, 1);
    table.add(21, 2);
    table.add(3, 3);
    table.add(4, 4);
    table.add(10, 10);
    expect(table.get(1)).toBe(1);
    expect(table.get(20)).toBe(null);
    expect(table.get(4)).toBe(4);
    expect(table.get(7)).toBe(null);
    expect(table.get(21)).toBe(2);
  });

  it("should delete correct item", function () {
    const table = new HashTable(5);
    table.add(1, 1);
    table.add(21, 2);
    table.add(3, 3);
    table.add(4, 4);
    expect(table.remove(1)).toBe(1);
    expect(table.table[1].key).toBe(-1);
    expect(table.remove(5)).toBe(null);
    expect(table.remove(21)).toBe(2);
    expect(table.table[2].key).toBe(-1);
  });
});
