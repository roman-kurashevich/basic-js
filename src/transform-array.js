const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!(Array.isArray(arr))) {
  throw Error('THROWN');
  }
    
  
  arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < arr.length - 1) {
          i = i + 1;
          if (arr[i + 1] == '--double-prev'){
            i = i + 1;
          }
          if (arr[i + 1] == '--discard-prev'){
            i = i + 1;
          }
        }
        break;
      case '--discard-prev':
        if (i > 0) {
          arr2.pop(arr[i - 1]);
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          arr2.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0) {
          arr2.push(arr[i - 1]);
        }
        break;
      default:
        arr2.push(arr[i])
        break;
    }
  }
  return arr2
  
  // remove line with error and write your code here
};
