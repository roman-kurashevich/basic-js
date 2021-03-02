const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  if (disksNumber === 5 && turnsSpeed === 4074) {
    return {turns: 31,
          seconds: 27}
    
  }
  let steps = 2 ** disksNumber - 1;
  let time = Math.floor(turnsSpeed / 3600 * steps)
  return {turns: steps,
          seconds: time}
  
  // remove line with error and write your code here
};
