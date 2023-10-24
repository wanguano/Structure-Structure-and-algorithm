import ArrayQueue from "./01_实现队列结构Queue";

let queue = new ArrayQueue<string>
queue.enqueue('aaa')
queue.enqueue('bbb')
queue.enqueue('ccc')

console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(queue.size())
console.log(queue.isEmpty())