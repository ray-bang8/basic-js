import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

export default function sortByHeight(arr) {
    let newArr = arr
    let arrNumber = []
  
    for (let i in newArr) {
        if (arr[i] >= 0) {
            arrNumber.push(arr[i])
            newArr[i] = 'x'
        } 
    }
    arrNumber.sort(function(a, b) {
        return a - b;
    })
    let count = 0;
    for (let i in newArr) {
        if (newArr[i] == 'x') {
            newArr[i] = arrNumber[count]
            count++
        }
    }
    return newArr
  
}

