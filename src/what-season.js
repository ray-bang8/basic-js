import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason(date) {
  if (date == undefined || date == null) {
      return 'Unable to determine the time of year!'
  }
  if (Object.entries(date).length > 0) throw new Error('Invalid date!')
  if (!isValidDate || typeof(date) == 'number' || Object.getOwnPropertyNames(date).length > 0) {
      throw new Error('Invalid date!')
  } 

  let seasons = ['spring', 'summer', 'autumn (fall)', 'winter']
  let x = date.getMonth()
  // console.log(typeof date)
  if (x>=2 && x <=4) {
      return seasons[0]
  } else if (x>=5 && x <=7) {
      return seasons[1]
  } else if (x>=8 && x <= 10){
      return seasons[2]
  } else {
      return seasons[3]
  }
}

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}
