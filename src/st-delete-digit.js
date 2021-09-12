import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit( n ) {
  var ans;
  var myArr = String(n).split("").map((n) => {
    return Number(n)
  })
var min = Math.min(...myArr);
let find = false

ans = myArr.map(e => {
  console.log(e)
  if (e == min && !find) {
    find = true
    return ''
  } else {
    return e
  }
  
})
ans = ans.reduce((a,b) => {
  return a + b
}, '')
return Number(ans)
}
