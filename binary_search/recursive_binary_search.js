export default function recursiveBinarySearch(array, target, min, max) {
  const guess = Math.floor((min + max) / 2);

  if (max < min) {
    return -1;
  } else if (array[guess] < target) {
    return recursiveBinarySearch(array, target, guess + 1, max);
  } else if (array[guess] > target) {
    return recursiveBinarySearch(array, target, min, guess - 1);
  } else {
    return guess;
  }
}
