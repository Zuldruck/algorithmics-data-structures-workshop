const array = Array.from(Array(24).keys());

function findSubsets(set) {
  const subsets = [];

  backtrack([], 0);

  function backtrack(currentSubset, index) {
    subsets.push(currentSubset);

    for (let i = index; i < set.length; i++) {
      currentSubset.push(set[i]);
      backtrack(currentSubset.slice(), i + 1);
      currentSubset.pop();
    }
  }

  return subsets;
}


console.time('O(2^n)');
findSubsets(array);
console.timeEnd('O(2^n)');
