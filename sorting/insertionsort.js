/**
 * Insertion sort
 * Time complexity: O(n^2)
 * Auxiliary space: O(1)
 */

function insertionSort(unsortedData) {
  const sortedData = Array.from(unsortedData);

  for (let i = 1; i < sortedData.length; i++) {
    let j = i;

    while (j && sortedData[j] < sortedData[j - 1]) {
      const temp = sortedData[j - 1];
      sortedData[j - 1] = sortedData[j];
      sortedData[j] = temp;
      j--;
    }
  }

  return sortedData;
}

module.exports = insertionSort;
