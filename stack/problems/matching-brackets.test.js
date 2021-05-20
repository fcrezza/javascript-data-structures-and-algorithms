import isMatch from "./matching-brackets";

it("should match with the following pattern", () => {
  expect(isMatch("([])")).toBe(true);
  expect(isMatch("(())")).toBe(true);
  expect(isMatch("[[()]]")).toBe(true);
  expect(isMatch("(([[]]))")).toBe(true);
});

it("should not match with the following pattern", () => {
  expect(isMatch("(([)))")).toBe(false);
  expect(isMatch("(]()()")).toBe(false);
  expect(isMatch("[[[]]")).toBe(false);
  expect(isMatch("((([))))")).toBe(false);
  expect(isMatch("]]]](")).toBe(false);
  expect(isMatch("((((")).toBe(false);
});
