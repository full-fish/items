// function EEA(a, b) {
//   let r1 = a;
//   let r2 = b;
//   let s1 = 1;
//   let s2 = 0;
//   let t1 = 0;
//   let t2 = 1;

//   while (r2 > 0) {
//     let q = r1; // r2
//     let r = r1 - q * r2;
//     r2 = r;
//     r1 = r2;

//     let s = s1 - q * s2;
//     s2 = s;
//     s1 = s2;

//     let t = t1 - q * t2;
//     t2 = t;
//     t1 = t2;

//     console.log(1);
//   }
//   console.log(r1, a, s1, b, t1);
// }
// EEA(161, 28);
function EEA(a, b) {
  let [r1, r2, s1, s2, t1, t2, q, r, s, t] = [a, b, 1, 0, 0, 1, 0, 0, 0, 0];
  while (true) {
    q = parseInt(r1 / r2);
    r = r1 - q * r2;
    s = s1 - q * s2;
    t = t1 - q * t2;
    if (r === 0) {
      console.log(`최대공약수 : ${r2}, x : ${s2}, y : ${t2}`);
      break;
    }
    r1 = r2;
    r2 = r;
    s1 = s2;
    s2 = s;
    t1 = t2;
    t2 = t;
  }
}
// EEA(432, 7);
// EEA(120, 23);
// EEA(9972 * 9108, 65537);
EEA(78696, 19332);
