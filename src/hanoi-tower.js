const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let steps = 2 ** disksNumber - 1;
  let time = Math.floor( 3600 / turnsSpeed * steps)
  return {turns: steps,
          seconds: time}
  
  // remove line with error and write your code here
};
