const _ = require("lodash");
function createFuzzyMatcher(input) {
  // escapeRegExp는 lodash에서 가져옴
  const pattern = input.split("").map(_.escapeRegExp).join(".*?");
  return new RegExp(pattern);
}
const regex = createFuzzyMatcher("ct");
console.log(regex.test("fact"));
console.log(regex);
