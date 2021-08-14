import binarySearch from "./recursive_binary_search";

describe("Recursive binary search", () => {
  it("should return correct index", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    debugger;
    expect(binarySearch(array, 5, 0, array.length - 1)).toBe(4);
    expect(binarySearch(array, 1, 0, array.length - 1)).toBe(0);
    expect(binarySearch(array, 7, 0, array.length - 1)).toBe(6);
    expect(binarySearch(array, 9, 0, array.length - 1)).toBe(8);
  });

  // it("should return -1 if target not in the array", () => {
  //   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //   expect(binarySearch(array, 0, 0, array.length - 1)).toBe(-1);
  //   expect(binarySearch(array, 11, 0, array.length - 1)).toBe(-1);
  // });

  // it("should return -1 if array was empty", () => {
  //   const array = [];
  //   expect(binarySearch(array, 1, 0, 0, array.length - 1)).toBe(-1);
  // });
});
