function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      //   const temp = arr[i];
      //   arr[i] = arr[minIndex];
      //   arr[minIndex] = temp;
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([3, 2, 1, 0, 8, 7, 9, 4, 0, 8, 7, 8, -1, 6, 4, 4, 1]));
