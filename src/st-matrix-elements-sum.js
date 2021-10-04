import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 export default function getMatrixElementsSum(matrix) {
  let rev = matrix.reverse()
  let ans = 0
  for (let i in rev) {

      if (i == rev.length - 1) {
          ans = ans + sum(matrix[i])
      } else if (rev[Number(i)+1][rev[Number(i)+1].length - 1] != 0) {
          ans = ans + sum(matrix[i])
      }
     
  }
  return ans
}

function sum(arr) {
  let ans = 0
  for(let i of arr) {
      ans = ans+i
  }
  return ans
}
