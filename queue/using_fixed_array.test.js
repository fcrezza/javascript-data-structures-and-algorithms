import Queue from "./using_fixed_array";

describe("stack data structure using linked list", function () {
  it("should enqueue item to queue", function () {
    const queue = new Queue(3);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.full()).toBe(false);
    queue.enqueue(3);
    expect(queue.full()).toBe(true);
    expect(queue.empty()).toBe(false);
  });

  it("should throw an error when limit reached", function () {
    const queue = new Queue(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.full()).toBe(true);
    expect(() => queue.enqueue(4)).toThrow("Queue penuh!");
  });

  it("should dequeue item correctly", function () {
    const queue = new Queue(3);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.empty()).toBe(true);
  });

  it("should throw an error when dequeue empty queue", function () {
    const queue = new Queue(0);
    expect(queue.empty()).toBe(true);
    expect(() => queue.dequeue()).toThrow("Queue kosong!");
  });

  it("should pass against enqueue & dequeue variation", function () {
    const queue = new Queue(5);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.empty()).toBe(false);
    expect(queue.full()).toBe(false);
    queue.enqueue(6);
    queue.enqueue(7);
    queue.enqueue(8);
    expect(queue.full()).toBe(true);
    expect(queue.dequeue()).toBe(4);
    expect(queue.dequeue()).toBe(5);
    expect(queue.dequeue()).toBe(6);
    expect(queue.dequeue()).toBe(7);
    expect(queue.dequeue()).toBe(8);
    expect(queue.empty()).toBe(true);
    expect(queue.full()).toBe(false);
  });
});
