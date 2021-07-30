import Queue from "./using_linked_list";

describe("stack data structure using linked list", function () {
  it("should enqueue item to queue", function () {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.empty()).toBe(false);
  });

  it("should dequeue item correctly", function () {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
    expect(queue.empty()).toBe(true);
  });
});
