let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
let arr2 = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
const insertionSort = function (arr) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let aux = i - 1;
    while (aux >= 0 && arr[aux] > temp) {
      comparisons++;
      swaps++;
      arr[aux + 1] = arr[aux];
      aux--;
    }
    arr[aux + 1] = temp;
  }
  console.log(comparisons, swaps);
  return arr;
};
const insertionSort2 = function (arr) {
  // 0번째 부분은 정렬된거로 침
  let sortedArr = [arr[0]];
  let comparisons = 0;
  let swaps = 0;
  for (let i = 1; i < arr.length; i++) {
    // 삽입할 요소가 정렬된 요소의 가장 큰 수보다 크다면 그냥 push
    if (arr[i] >= sortedArr[i - 1]) {
      sortedArr.push(arr[i]);
    } else {
      for (let j = 0; j < sortedArr.length; j++) {
        comparisons++;
        // 삽입할 요소가 정렬된 부분의 어떠한 요소보다 작을 때 그 부분에 삽입
        if (arr[i] <= sortedArr[j]) {
          swaps++;
          const left = sortedArr.slice(0, j);
          const right = sortedArr.slice(j);
          sortedArr = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  console.log(comparisons, swaps);
  return sortedArr;
};
console.time();
console.log(insertionSort(arr));
console.timeEnd();
console.time();
console.log(insertionSort2(arr2));
console.timeEnd();
