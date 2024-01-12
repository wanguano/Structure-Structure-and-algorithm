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

function Person(name,age) {
  this.name = name
  this.age = age
}

// 实现new操作符功能
function create(fn, arguments) {
  if(typeof fn !== 'function') return false
  // 创建一个空对象
  const obj = {}
  // 改变原型的指向
  obj.__proto__ = fn?.prototype
  // 改变函数中的this指向为当前对象
  Person.apply(obj, ...arguments)
  // 返回当前对象
  return obj
}

const p1 = create(Person, 'foo', 18)
console.log(p1.name)