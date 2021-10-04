import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 export default function encodeLine(str) {
  let ans = "";
  let count = 0;
  let current = ''
  for (let i of str) {
      if (current == '') {
          current = i
          count = 1
      } else if (current == i) {
          count += 1
      } else if (current != i) {
          ans = ans + addData(current, count)
          current = i
          count = 1
      }
  }
  if (count >= 1) {
      ans = ans + addData(current, count)
  }
  return ans
}
function addData(current, count) {
  let ans = ""
  if (count == 1) {
      ans = current
  } else {
      ans = count + current
  }
  return ans
}
