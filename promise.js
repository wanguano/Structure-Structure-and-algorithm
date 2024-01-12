// 实现 Promise.all
// 传入一个数组，其中可包含 Promise，也可包含普通数据
// 数组中 Prmise 并行执行
// 但凡有一个 Promise 被 Reject 掉，Promise.all 失败
// 保持输出数组位置与输入数组一致
// 所有数据 resolve 之后，返回结果

// await Promise.all([1, Promise.resolve(2)]);
//-> [1, 2]

// await Promise.all([1, Promise.reject(2)]);
//-> Throw Error: 2

// Promise.myAll = function(elements) {
//   let result = []
//   elements.forEach((item) => {
//     if(typeof(item) === 'string' ||typeof(item) === 'number' ){
//       result.push(item)
//     }else if(Object.prototype.toString(item) === 'promise') {
//       item.then((value) => {
//         result.push(value)
//       }).catch((err) => {
//         throw new Error(value)
//       })``
//     }
//   })

//   return result
// }
