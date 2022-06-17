let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
function bubbleSort(arr) {
  let comparisons = 0;
  let swaps = 0;
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        count++;
        swaps++;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (swaps === 0) break;
    swaps = 0;
  }
  console.log(comparisons, count);
  return arr;
}
console.time();
console.log(bubbleSort(arr));
console.timeEnd();
