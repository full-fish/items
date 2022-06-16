let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
let arr2 = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
let arr3 = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
function selectionSort(arr) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swaps++;
      // const temp = arr[i];
      // arr[i] = arr[minIndex];
      // arr[minIndex] = temp;
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  console.log(comparisons, swaps);
  return arr;
}
//? 이중 선택 정렬 적용
function selectionSort2(arr) {
  let comparisons = 0;
  let swaps = 0;
  for (let i = 0; i < arr.length - 1 - i; i++) {
    let minIndex = i;
    let maxIndex = arr.length - 1 - i;
    for (let j = i; j < arr.length - i; j++) {
      comparisons++;
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }
    if (minIndex !== i) {
      swaps++;
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      if (i === maxIndex) maxIndex = minIndex;
    }
    if (maxIndex !== arr.length - 1 - i) {
      swaps++;
      [arr[arr.length - 1 - i], arr[maxIndex]] = [arr[maxIndex], arr[arr.length - 1 - i]];
    }
  }
  console.log("comparisons", comparisons);
  console.log("swaps", swaps);
  return arr;
}
//? 동일 값 한번에 정렬 하려다가 못함
function selectionSort3(arr) {
  let comparisons = 0;
  let swaps = 0;
  let n = 0;
  let m = 0;
  console.log(arr);
  for (let i = 0; i < arr.length - 1 - n; i++) {
    console.log("i", i);
    let minIndex = [];
    minIndex[0] = i;
    let maxIndex = [];
    maxIndex[0] = arr.length - 1 - i;
    // console.log("minIndex", minIndex);

    for (let j = i; j < arr.length - i; j++) {
      comparisons++;
      if (arr[minIndex[0]] > arr[j]) {
        minIndex = [];
        minIndex[0] = j;
        // console.log("min1", j);
      } else if (arr[minIndex[0]] === arr[j] && !minIndex.includes(j)) {
        // console.log("min2", j);
        minIndex.push(j);
      }
      if (arr[maxIndex[0]] < arr[j]) {
        maxIndex = [];
        maxIndex[0] = j;
      } else if (arr[maxIndex[0]] === arr[j] && !maxIndex.includes(j)) {
        maxIndex.push(j);
      }
    }

    console.log("minIndex", minIndex);
    console.log("maxIndex", maxIndex);
    if (minIndex[0] !== i) {
      swaps++;
      [arr[i], arr[minIndex[0]]] = [arr[minIndex[0]], arr[i]];
      if (i === maxIndex[0]) maxIndex[0] = minIndex[0];
      console.log("1");
      console.log(arr);
      console.log("maxIndex", maxIndex);
    }
    if (minIndex.length > 1) {
      for (let k = 1; k < minIndex.length; k++) {
        swaps++;
        [arr[i + k], arr[minIndex[k]]] = [arr[minIndex[k]], arr[i + k]];
        if (i + k === maxIndex[k]) maxIndex[k] = minIndex[k];
        console.log("2");
        console.log(arr);
        console.log("maxIndex", maxIndex);
      }
      n++;
    }
    console.log("maxIndex", maxIndex);
    if (maxIndex[0] !== arr.length - 1 - i) {
      swaps++;
      [arr[arr.length - 1 - i], arr[maxIndex[0]]] = [arr[maxIndex[0]], arr[arr.length - 1 - i]];
      console.log("3");

      console.log(arr);
    }
    if (maxIndex.length > 1) {
      for (let k = 1; k < maxIndex.length; k++) {
        swaps++;
        [arr[arr.length - 1 - i - k], arr[maxIndex[k]]] = [
          arr[maxIndex[k]],
          arr[arr.length - 1 - i - k],
        ];
        console.log("4");
        console.log(arr);
      }
      // m++;
    }

    m++;
    // i += n;
    n = 0;
    console.log(arr);
    console.log("---");
  }
  console.log("comparisons", comparisons);
  console.log("swaps", swaps);
  return arr;
}
// console.time();
// console.log(selectionSort(arr));
// console.timeEnd();
// // console.log(selectionSort2(arr));
// // console.log(selectionSort2([4, 1, 7, 3, 2, 10, 9, 11]));
// console.time();
// console.log(selectionSort([3, 2, 1]));
// console.log(selectionSort2([3, 2, 1]));
// console.log(selectionSort2(arr));
// console.timeEnd();
// console.log(selectionSort3([3, 3, 2, 1, 1, 4, 5, 5, 2, 2, 1, 9, 8, 8, 7, 7, 9]));
console.log(selectionSort3([3, 2, 1, 3, 1, 1]));
// min이 3이고 max가 0,1이여야함
