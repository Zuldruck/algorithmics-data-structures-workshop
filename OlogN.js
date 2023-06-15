const array = Array.from(Array(10000000).keys());

const binarySearch = (array, element) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = array[mid];

    if (guess === element) {
      return mid;
    }

    if (guess > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

console.time('O(log n)');
const element = binarySearch(array, 42);
console.timeEnd('O(log n)');

console.log(element);
