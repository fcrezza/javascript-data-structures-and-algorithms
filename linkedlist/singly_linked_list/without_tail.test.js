import List from "./without_tail";

describe("insertion sort", function () {
  it("return correct size", function () {
    const list = new List();
    expect(list.empty()).toEqual(true);
    expect(list.size()).toEqual(0);
    list.pushBack(1);
    expect(list.size()).toEqual(1);
    list.pushBack(2);
    list.pushBack(3);
    expect(list.size()).toEqual(3);
    list.pushFront(4);
    list.pushFront(5);
    expect(list.size()).toEqual(5);
    list.popFront();
    expect(list.size()).toEqual(4);
    list.popBack();
    expect(list.size()).toEqual(3);
    list.popFront();
    list.popBack();
    list.popFront();
    expect(list.size()).toEqual(0);
    expect(list.empty()).toEqual(true);
  });

  it("return correct value at spesific index", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    expect(list.valueAt(1)).toEqual(2);
  });

  it("throws an error when out of bounds or list is empty", function () {
    const list = new List();
    expect(() => list.valueAt(1)).toThrow("Tidak ada item di dalam list!");
    list.pushBack(1);
    expect(() => list.valueAt(2)).toThrow("Index terlalu besar!");
  });

  it("should return correct result at given index when new element inserted", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    list.insert(1, 1.5);
    expect(list.valueAt(1)).toEqual(1.5);
    list.insert(0, 0.5);
    expect(list.valueAt(0)).toEqual(0.5);
    list.insert(3, 2.7);
    expect(list.valueAt(3)).toEqual(2.7);
    list.insert(5, 2.9);
    expect(list.valueAt(5)).toEqual(2.9);
  });

  it("should correctly remove node at given index", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    list.erase(1);
    expect(list.size()).toEqual(2);
    expect(list.valueAt(1)).toEqual(3);
    list.erase(1);
    expect(list.size()).toEqual(1);
    expect(list.back().value).toEqual(1);
    expect(list.front().value).toEqual(1);
    list.erase(0);
    expect(list.size()).toEqual(0);
    expect(list.empty()).toEqual(true);
    expect(list.back()).toEqual(null);
    expect(list.front()).toEqual(null);
  });

  it("should correctly remove node at given index", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    list.erase(1);
    expect(list.size()).toEqual(2);
    expect(list.valueAt(1)).toEqual(3);
    list.erase(1);
    expect(list.size()).toEqual(1);
    expect(list.back().value).toEqual(1);
    expect(list.front().value).toEqual(1);
    list.erase(0);
    expect(list.size()).toEqual(0);
    expect(list.empty()).toEqual(true);
    expect(list.back()).toEqual(null);
    expect(list.front()).toEqual(null);
  });

  it("should correctly remove node at given value", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    list.removeValue(2);
    expect(list.size()).toEqual(2);
    expect(list.valueAt(1)).toEqual(3);
    list.insert(1, 2);
    list.removeValue(3);
    expect(list.size()).toEqual(2);
    expect(list.back().value).toEqual(2);
    list.removeValue(1);
    expect(list.size()).toEqual(1);
    expect(list.front().value).toEqual(2);
    expect(list.back().value).toEqual(2);
    list.removeValue(2);
    expect(list.size()).toEqual(0);
    expect(list.empty()).toEqual(true);
    expect(list.front()).toEqual(null);
    expect(list.back()).toEqual(null);
  });

  it("should correctly return value n from end", function () {
    const list = new List();
    list.pushBack(1);
    list.pushBack(2);
    list.pushBack(3);
    list.pushBack(4);
    expect(list.valueNFromEnd(1)).toEqual(3);
    expect(list.valueNFromEnd(3)).toEqual(1);
  });

  it("should correctly reverse the list", function () {
    const list1 = new List();
    const list2 = new List();
    list1.pushBack(1);
    list1.pushBack(2);
    list1.pushBack(3);
    list1.pushBack(4);
    list2.pushBack(4);
    list2.pushBack(3);
    list2.pushBack(2);
    list2.pushBack(1);

    list1.reverse();
    expect(list1.front()).toEqual(list2.front());
    expect(list1.back()).toEqual(list2.back());
  });
});
