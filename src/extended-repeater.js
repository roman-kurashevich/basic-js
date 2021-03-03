const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = '';
  str = String(str);
  let additionMy = '';
  let repeattimesMy = 1;
  let separatorMy = '+';
  let additionRepeatTimesMy = 1;
  let additionSeparatorMy = '|';

  let addArray = [];
  let allArray = [];

  if (options.repeatTimes) {
    repeattimesMy = options.repeatTimes;
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimesMy = options.additionRepeatTimes;
  }
  if (options.separator) {
    separatorMy = options.separator;
  }
  if (options.additionSeparator) {
    additionSeparatorMy = options.additionSeparator
  }
  if ((String(options.addition) == 'null')) {
    additionMy = String(options.addition);
    for (let i = 1; i <= additionRepeatTimesMy; i++) {
      addArray.push(additionMy)
    }
  }
  if ((options.addition || options.addition == false)) {
    additionMy = String(options.addition);
    for (let i = 1; i <= additionRepeatTimesMy; i++) {
      addArray.push(additionMy)
    }
  }
  for (let i = 1; i <= repeattimesMy; i++) {
    allArray.push(str + addArray.join(additionSeparatorMy))
  }
  return allArray.join(separatorMy)

};
  