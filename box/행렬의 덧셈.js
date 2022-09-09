//! 내가 만든거
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    result.push(temp);
  }
  return result;
}

//! 다른사람꺼
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}
