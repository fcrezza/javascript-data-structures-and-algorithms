import MinStack from "./min-value";

test("return undefined when stack empty", () => {
  const stack = new MinStack();
  expect(stack.top()).toBe(undefined);
  expect(stack.getMin()).toBe(undefined);
});

test("return correct result", () => {
  const stack = new MinStack();
  stack.push(4);
  stack.push(2);
  stack.push(3);
  expect(stack.getMin()).toBe(2);
  expect(stack.top()).toBe(3);
  stack.push(1);
  stack.push(6);
  expect(stack.getMin()).toBe(1);
  expect(stack.top()).toBe(6);
  stack.pop();
  stack.pop();
  expect(stack.getMin()).toBe(2);
  expect(stack.top()).toBe(3);
});
