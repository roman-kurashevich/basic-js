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



function calculateHanoi(disksNumber, turnsSpeed) {

  let steps = 2 ** disksNumber - 1;
  let time = Math.floor( 3600 / turnsSpeed * steps)
  console.log({turns: steps, seconds: time})

};
calculateHanoi(5, 4074);