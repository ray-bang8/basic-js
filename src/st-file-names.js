import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
 export default function renameFiles(names) {
  if (names.length == 0 ) {
    return []
  }
  let ans = []
  ans.push(names[0])
  let species = {
      addElem: function(name) {
          this[name] = 1
      },
      getElemAmount: function(name) {
          return this[name]
      },
      setElemAmount: function(name, value) {
          this[name] = value
      }
  }
  
  species.addElem(names[0])
  for (let i=1; i <names.length;i++) {
      if (check(ans, names[i])) {
          ans.push(names[i] + `(${species.getElemAmount(names[i])})`)
          species.addElem(names[i]+`(${species.getElemAmount(names[i])})`)
          species.setElemAmount(names[i], species.getElemAmount(names[i]) + 1)
      } else {
          species.addElem(names[i])
          ans.push(names[i])
      }
  }
  return ans
}

function check(arr, word) {
  return arr.includes(word) 
}