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
  let ans = 0;
  // console.log(matrix.length)
  for(let i = 0; i < matrix.length;i++){
    for(let v = 0; v < matrix[i].length; v++){
      if (matrix[i][v] == "^^"){
        ans = ans + 1
      //   console.log(ans)
      }
    }
  
    
  }
  return ans

  
 
}