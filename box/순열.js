// function a(arr, num) {
//   let result = [];
//   function DFS(DFS_num, DFS_arr) {
//     if (DFS_num === 0) {
//       result.push(DFS_arr);
//       return;
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (!DFS_arr.includes(arr[i])) DFS(DFS_num - 1, DFS_arr.concat(arr[i]));
//     }
//   }
//   DFS(num, []);
//   return result;
// }
//! 내가 수정한거
function solution(n) {
  let answer = [];

  function DFS(N, tempArr) {
    if (N === 0) {
      return answer.push(tempArr.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        DFS(N - 1, tempArr.concat(i)); // 중복순열
        // if (!tempArr.includes(i)) DFS(N - 1, tempArr.concat(i)); // 순열
      }
    }
  }
  DFS(n, []);
  return answer;
}
console.log(solution(3));

//? 배열 넣은거
// let arr = ["rock", "scissors", "paper"];

// function solution(arr, n) {
//   let answer = [];
//   function DFS(N, tempArr) {
//     if (N === 0) {
//       return answer.push(tempArr.slice());
//     }
//     for (let i = 0; i < arr.length; i++) {
//       DFS(N - 1, tempArr.concat(arr[i])); // 중복 순열
//       // if (!tempArr.includes(arr[i])) DFS(N - 1, tempArr.concat(arr[i])); // 순열
//     }
//   }
//   DFS(n, []);
//   return answer;
// }
// console.log(solution(arr, 3));
