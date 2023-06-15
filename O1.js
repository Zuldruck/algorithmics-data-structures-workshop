const array = Array.from(Array(1000000).keys());

console.time('O(1)');
const element = array[42];
console.timeEnd('O(1)');

console.log(element);
