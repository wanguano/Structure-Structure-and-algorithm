import ArrayQueue from './01_实现队列结构Queue'
function iceBreakingGame(num: number, target: number): number {
  let queue = new ArrayQueue<number>() // 创建一个新的队列
  let arr: number[] = new Array(num) // 创建一个数组，用于记录每个人的编号

  for (let i = 0; i < num; i++) {
    queue.enqueue(i) // 将每个人的编号加入到队列中
    arr.push(i)
  }

  while (queue.size() > 1) {
    // 只要队列中还有两个及以上的人，就继续进行游戏
    for (let i = 1; i < target; i++) {
      // 先将前 k-1 个人移动到队列末尾
      queue.enqueue(queue.dequeue() as number) // 出队并将该元素加入到队列末尾
    }
    queue.dequeue() // 第 k 个人退出游戏
  }

  return queue.dequeue() as number // 返回最后留下的那个人的编号
}

// console.log(iceBreakingGame(7,4)) // 1
iceBreakingGame(12, 5)
// console.log(iceBreakingGame(12,5)) // 0
