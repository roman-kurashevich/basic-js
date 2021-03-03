const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value !== undefined) {
      // this.arr.push(`( ${value} )`)
      this.arr.push(String(value))
    } else {
      this.arr.push('')
    }
    return this

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position && typeof(position) === 'number' && (position === Math.trunc(position)) && (position > 0)){
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error ('THROWN')
    }

    // this.arr.forEach((item, index) => {
    //   if (item === position) {
    //     this.arr.splice(index, 1);
    //     return this.arr
    //   }
    // });
    // throw new Error ('THROWN')
    
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;

    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let result = this.arr.join(' )~~( ');
    this.arr = [];
    // let result = '';
    // this.arr.forEach(item => {
    //   if (item !== '') {
    //     result = result + item + ' )~~( '
    //   } else {
    //     result = result + item + ' )~~( '
    //   }
    // })
    return `( ${result} )`;
    
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
