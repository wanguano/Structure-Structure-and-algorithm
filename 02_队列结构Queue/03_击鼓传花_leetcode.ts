import ArrayQueue from './01_实现队列结构Queue'
/**
 * 击鼓传花的实现(核心: 利用队列来实现,每次数字+1的同时 当前这个人扔去最后面重新排队数数)
 * @param arr 排队的人数
 * @param count 每数几个数淘汰几个人
 */
function findTheWinner(n: number, k: number): number {
  // 创建队列,初始化数数的数字
  let i: number = 0
  let queue = new ArrayQueue<number>()

  // 参加人员，加入到队列中
  for (let index = 1; index <= n; index++) {
    queue.enqueue(index)
  }


  // 只有游戏的人数大于一个人,游戏就一直进行
  while (queue.size() > 1) {
    // 数数的人,数的不是 n,就重新排队(人数排队到最后面,重新排)
    i++
    if (i != k) {
      queue.enqueue(queue.dequeue() as number)
    } else {
      i = 0
      queue.dequeue()
    }
  }

  
  return queue.dequeue() as number
}

console.log(findTheWinner(5,2))