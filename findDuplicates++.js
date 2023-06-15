const array = [];

for (let i = 0; i < 10000; i++) {
  array.push(i % 10);
}

function findDuplicates(array) {
  const duplicates = [];
  const set = new Set();
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i]) && !duplicates.includes(array[i])) {
      duplicates.push(array[i]);
    }
    set.add(array[i]);
  }
  return duplicates;
}

console.time('findDuplicates');
findDuplicates(array);
console.timeEnd('findDuplicates');
