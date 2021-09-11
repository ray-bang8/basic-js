import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam( members ) {
  if (members == null) {
    return false
  }
  var ans = [];
  for (var i = 0; i < members.length;i++){
    if( typeof members[i] === 'string') {
      ans.push(members[i])
    }
  }     
  return ans.map(function(x) {
    return x.trim().split(' ')[0][0].toUpperCase()
  })
  .sort()
  .join('')

}
