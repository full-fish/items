// let matrix = [];
// for (let i = 0; i < 3; i++) {
//   matrix.push(0);
// }
// matrix.map((e) => new Array(3 + 1).fill(0));
// console.log(matrix);
// 아니면

let matrix = new Array(3).fill(0).map(() => new Array(4).fill(0));

console.log(matrix);
// 아니면

//  for (let i = 0; i < max + 1; i++) {
//     const currentLength = matrix.length;
//     for (let i = 0; i < currentLength; i++) {
//       matrix[i].push(0);
//     }
//     matrix.push(new Array(currentLength + 1).fill(0));
//   }
