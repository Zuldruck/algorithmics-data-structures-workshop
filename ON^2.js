const array = Array.from(Array(10000).keys());

console.time('O(n^2)');
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    console.error(i, j);
  }
}
console.timeEnd('O(n^2)');
