const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//   if (!(Array.isArray(members))) return false;
//   if (!(members.length)) return false;
//   let DreamTeam = [];
//   let members2 = [];
//   for (let i of members) {
//       if (typeof i =='string') {
//           members2.push(i)
//       }
//   }
//   let members3 = members2.map(item => item.trim().toLocaleUpperCase())
//   for (let name of members3) {
//       DreamTeam.push(name[0])
//   }
//   DreamTeam = DreamTeam.sort()
//   DreamTeam = DreamTeam.join('')
//   return DreamTeam
if (!(Array.isArray(members))) return false;
if (!(members.length)) return false;
let DreamTeam = '';
members.filter(item => typeof item == 'string').map(item => item.trim().toUpperCase()).sort().forEach(name => {
  DreamTeam += name[0]
})
return DreamTeam
};
// };
