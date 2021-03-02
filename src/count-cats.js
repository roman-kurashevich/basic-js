const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let number = 0;
  arr.forEach(element => {
    for(let i of element) {
      if (i == "^^") number += 1
    }
  });
  return number;

  // remove line with error and write your code here
};
