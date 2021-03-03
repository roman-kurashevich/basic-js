// function calculateHanoi(disksNumber, turnsSpeed) {
//   // if (disksNumber === 5 && turnsSpeed === 4074) {
//   //   return {turns: 31,
//   //         seconds: 27}
    
//   // }
//   let steps = 2 ** disksNumber - 1;
//   let time = Math.floor(turnsSpeed / 3600 * steps)
//   return {turns: steps,
//           seconds: time}
  
//   // remove line with error and write your code here
// };
// console.log( calculateHanoi(9, 4308) )
// let max = 1;
// let current = 1;

// function calculateDepth(arr) {
//   for (let element of arr) {
//     if (Array.isArray(element)) {
      
//       current = current + 1;
//       calculateDepth(element);
//     } else {
//       if (current > max) {
//         max = current;
//         current = 1;
//       } 
//     }
//     return
//   }
//   return max;

  // arr.forEach(element => {
  //   if (Array.isArray(element)) {     
  //     current = current + 1;
  //     calculateDepth(element);
  //   } else {
  //     if (current > max) {
  //       max = current;
  //       current = 1;
  //     } 
  //   }
  //   return

  // });
  // return max;

// }
  



// console.log(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575',['adas', ['dfg', [0]]]]]))



function repeater(str, options) {
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
    if (addArray.length) {
      allArray.push(str + addArray.join(additionSeparatorMy))
    } else {
      allArray.push(str)
    }
  }
  return allArray.join(separatorMy)

};
console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))
// console.log(addArray)