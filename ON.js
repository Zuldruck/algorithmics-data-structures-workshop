const array = Array.from(Array(1000000).keys());

console.time('O(n)');
for (let i = 0; i < array.length; i++) {
  console.error(i);
}
console.timeEnd('O(n)');
