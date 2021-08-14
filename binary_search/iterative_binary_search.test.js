import binarySearch from "./iterative_binary_search";

describe("Iterative binary search", () => {
  it("should return correct index", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(array, 5)).toBe(4);
    expect(binarySearch(array, 1)).toBe(0);
    expect(binarySearch(array, 7)).toBe(6);
    expect(binarySearch(array, 9)).toBe(8);
  });

  it("should return -1 if target not in the array", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(binarySearch(array, 0)).toBe(-1);
    expect(binarySearch(array, 11)).toBe(-1);
  });

  it("should return -1 if array was empty", () => {
    const array = [];
    expect(binarySearch(array, 1)).toBe(-1);
  });
});
