let a = "안녕하세요 안녕 안녕 안녕 제 전화번호는 010-1234-5678입니다 G gd god good goood!.";
// // console.log(a.match(/\D/g));
// console.log(a.match(/[안녕]{2}/g));
// console.log(a.match(/[안녕]+/g));
// console.log(a.match(/[안녕]+?/g));
console.log(a.match(/[0-9]+/g));
console.log(a.match(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g));
// console.log(/안녕{}}/.test(a));
// console.log(a.match(/[0-9-]+/g));
// console.log(a.match(/...../g));
// console.log(a.match(/안/));
// console.log(/*안/);
// console.log(a.match(/\B/g);
// let b = a.match(/대/);
// b.push(9);
// console.log(b); // 보이는 배열과 다르게 실제는 '대'와9만 있ㅋ음
// console.log(a.match(/대/g));
// console.log(/대/g.test(a));
// console.log(a.match(/[대a0]/g));
// const text = "안녕하세요 제 번호는 010-1111-2222 입니다. call me~!";
// console.log(text.match(/\d{3}-\d{4}-\d{4}/)); // 010-1111-2222
//!
// console.log(/abc/g.exec("abc this is abc"));
// console.log(/abc/.test("this is abc"));
// console.log("abc this is abc".match(/abc/g));
// console.log("ccacc".match(/c*/g));
//!
// const targetStr = "   Hi!";

// // 1개 이상의 공백으로 시작하는지 검사
// // \s : 여러 가지 공백 문자 (스페이스, 탭 등) => [\t\r\n\v\f]
// const regexr = /^[\s]+/;

// console.log(regexr.test(targetStr)); // true
const targetStr = "AA BB Aa Bb";

// 'A' 또는 'B'가 한번 이상 반복되는 문자열을 반복 검색
// 'A', 'AA', 'AAA', ... 또는 'B', 'BB', 'BBB', ...
const regexr = /A+|B+/g;
console.log(targetStr.match(regexr)); // [ 'AA', 'BB', 'A', 'B' ]
