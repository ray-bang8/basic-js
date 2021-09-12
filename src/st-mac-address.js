import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address( n ) {
  var hexidec = '0123456789ABCDEF'
  
  var splitted = n.split('-');
  for (var i = 0; i < n.length;n++){
    for (var v = 0; v < n[i].length; v++){
      if(hexidec.includes(splitted[v][i])){
        return true
      }
      return false
    }
  }
}
