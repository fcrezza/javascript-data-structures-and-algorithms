const insertionSort = require("./insertionsort");

describe("insertion sort", () => {
  test("returned result must be an array (object in javascript)", () => {
    const unsortedData = [1, 3, 2];
    const sortedData = insertionSort(unsortedData);
    expect(typeof sortedData).toBe("object");
  });

  test("The length of the returned result must be the same as input data", () => {
    const unsortedData = [1, 3, 2];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData.length).toBe(3);
  });

  test("return an empty array if the input was an empty array", () => {
    const unsortedData = [];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData).toEqual([]);
  });

  test("return correct sorted array consist of numbers", () => {
    const expectedSortedData = [2, 7, 32, 67, 89, 456];
    const unsortedData = [7, 89, 456, 32, 67, 2];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData).toEqual(expectedSortedData);
  });

  test("return correct sorted array consist of letters", () => {
    const expectedSortedData = ["a", "d", "l", "n", "q", "z"];
    const unsortedData = ["a", "q", "l", "d", "n", "z"];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData).toEqual(expectedSortedData);
  });

  test("return correct sorted array consist of sequence of letters", () => {
    const expectedSortedData = ["a", "a", "aa", "aaa", "ab"];
    const unsortedData = ["a", "aa", "ab", "aaa", "a"];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData).toEqual(expectedSortedData);
  });

  test("return correct sorted array consist of words", () => {
    const expectedSortedData = ["for", "fuck", "ok", "sake", "sir"];
    const unsortedData = ["fuck", "sake", "for", "sir", "ok"];
    const sortedData = insertionSort(unsortedData);
    expect(sortedData).toEqual(expectedSortedData);
  });

  test("throw an error when there is no argument passed", () => {
    expect(() => insertionSort()).toThrowError();
  });
});
