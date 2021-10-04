import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 export default function minesweeper (matrix) {
  let ans = []
  for (let i in matrix) {
      let row = []
      for(let j in matrix[i]) {
          let count = 0;
          count += checkHorizontalNeighbours(i,j, matrix)
          count += checklVerticalNeighbours(i,j,matrix)
          count += checkCross(i,j,matrix)
          row.push(count)
      }
      ans.push(row)
  }
  return ans
}

function checkHorizontalNeighbours(i,j,matrix) {
  i = Number(i)
  j = Number(j)
  console.log(typeof i,j, "adsasds")
  let ans = 0
  
  if (j != matrix[i].length-1 &&  matrix[i][j+1] == true) {
      ans+=1

  };
  if (j!= 0 && matrix[i][j-1] == true) {
      ans+=1
  }
  console.log(111, ans)
  return ans
}

function checklVerticalNeighbours(i,j,matrix) {
  i = Number(i)
  j = Number(j)
  let ans = 0
  if ( i !=0 && matrix[i-1][j] == true) {
      ans+=1
  };
  if (i != matrix.length-1 && matrix[i+1][j] == true) {
      ans+=1
  }
  return ans
}

function checkCross(i,j,matrix) {
  i = Number(i)
  j = Number(j)
  let ans = 0
  if (i != 0 && j != 0 && matrix[i-1][j-1] == true) {
      ans+=1
  };
  if (i != matrix.length-1 && j != matrix[i].length - 1 && matrix[i+1][j+1] == true) {
      ans+=1
  }
  if (i!= matrix.length-1 && j!= 0 && matrix[i+1][j-1] == true) {
      ans+=1
  }
  if (i!= 0 && j!= matrix[i].length -1  && matrix[i-1][j+1] == true) {
      ans+=1
  }
  return ans
}