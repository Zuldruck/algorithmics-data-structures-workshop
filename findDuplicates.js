const array = [];

for (let i = 0; i < 10000; i++) {
  array.push(i % 10);
}

function findDuplicates(array) {
  const duplicates = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j] && !duplicates.includes(array[i])) {
        duplicates.push(array[i]);
      }
    }
  }
  return duplicates;
}

console.time('findDuplicates');
findDuplicates(array);
console.timeEnd('findDuplicates');
