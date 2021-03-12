
// let max = 1;
// let current = 1;
// let some = 0;

// let max = 1;
// let current = 1;
// let some = 1;

// function calculateDepth(arr) {
// // let some = 0;
//   // some = some + 1;
//   // current = some;
//   for (let element of arr) {
    
//     if (Array.isArray(element)) {
      
//       some = some + 1
//       current = current + 1;
//       calculateDepth(element);
//     } 
//     // some = current;
//       if (current > max) {
        
//         max = current;
//       } 
//       current = 1;
//     }
//     return max;
// }
let calc = 1;
function calculateDepth(arr) {
  if (arr.length === 0) return 1;
  if (arr.find((item)=> Array.isArray(item))) {
    arrNew = arr.reduce((arr2, item) => arr2.concat(item),[]);
    calc = calc + 1;
    calculateDepth(arrNew)
    return calc;
  }

  // for (let el of arr) {

  //   // if (Array.isArray(el)){
  //   //   calc = calc + 1;
  //   //   arr2 = arr.slice();
  //   //   arr3 = arr2.reduce((array, item) => {array.concat(item)}, [])
  //   //   calculateDepth()
  //   // }
  // }
  // return calc;
}
console.log(calculateDepth([]))
// let max = 1;
// let current = 1;
// let some = 0;

// function calculateDepth(arr) {
// arr.forEach(element => {
//     if (Array.isArray(element)) {     
//       current = current + 1;
//       return calculateDepth(element);
//     } 
//       if (current > max) {
//         max = current;
//         // current = 1;
//       }
//   });
//   return max;
// }


// deep = 1;
// currentDeep = 1;

//   calculateDepth(arr) {
//       arr.forEach((el) => {
//           if (Array.isArray(el)) {
//               currentDeep++;
//               calculateDepth(el);
//           }
//       });
//       if (currentDeep > deep) {
//           deep = currentDeep;
//       }
//       currentDeep--;
//       return deep;
//   }

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