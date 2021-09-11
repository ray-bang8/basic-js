import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats( matrix ) {
  var ans = 0;

  for(var i = 0; i < matrix.length;i++){
    for(var v = 0; matrix[i].length; v++){
      if (matrix[v] == "^^"){
        ans = ans + 1
      }
    }
    return ans
  }
  
 
}
