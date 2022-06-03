function a(arr, num) {
  let result = [];
  function DFS(DFS_num, DFS_arr) {
    if (DFS_num === 0) {
      result.push(DFS_arr);
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!DFS_arr.includes(arr[i])) DFS(DFS_num - 1, DFS_arr.concat(arr[i]));
    }
  }
  DFS(num, []);
  return result;
}
