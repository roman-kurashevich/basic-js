const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor () {
    this.calc = 1;
  }
  calculateDepth(arr) {
    if (arr.length === []) {return 1};
    if (arr.find((item)=> Array.isArray(item))) {
      arrNew = arr.reduce((arr2, item) => arr2.concat(item),[]);
      this.calc = this.calc + 1;
      calculateDepth(arrNew)
      return this.calc;
    }
  }
};