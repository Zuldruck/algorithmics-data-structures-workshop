const array = Array.from(Array(10000000).keys());

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array[pivotIndex];

  const less = [];
  const equal = [];
  const greater = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= pivot) {
      less.push(array[i]);
    } else if (array[i] === pivot) {
      equal.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), ...equal, ...quickSort(greater)];
}

console.time('O(n log n)');
quickSort(array);
console.timeEnd('O(n log n)');
 