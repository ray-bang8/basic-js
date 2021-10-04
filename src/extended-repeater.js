import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 export default function repeater(str, options) {
    let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1
    let separator = options.hasOwnProperty('separator') ? options.separator+'' : '+'
    let addition = options.hasOwnProperty('addition') ? options.addition+'' : ''
    let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1
    let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|'
    let ans = ""
    for (let i=0; i< repeatTimes;i++) {
        ans = ans + str
        for(let j=0; j<additionRepeatTimes;j++) {
            ans = ans + addition
            if (j!=additionRepeatTimes-1) {
                ans = ans + additionSeparator
            }
        }
        if (i != repeatTimes-1) {
            ans = ans + separator
        }
    }
    return ans
}
